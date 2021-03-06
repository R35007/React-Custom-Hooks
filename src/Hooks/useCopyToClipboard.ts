import { useState } from 'react';

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success
type IsCopied = boolean // Return success

export const useCopyToClipboard = (): [CopyFn, IsCopied, CopiedValue] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copySuccessHandler = (text: string | null) => {
    console.log('Copying text command was successful');
    setCopiedText(text);
    setIsCopied(true);
    return true;
  }

  const copyFailureHandler = () => {
    console.log('Copying text command was unsuccessful');
    setCopiedText(null);
    setIsCopied(false);
    return false;
  }

  const fallbackCopyTextToClipboard = (text: string | null): boolean => {
    var textArea = document.createElement("textarea");
    textArea.value = text || "";

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      return successful ? copySuccessHandler(text) : copyFailureHandler();
    } catch (err) {
      return copyFailureHandler();
    } finally {
      document.body.removeChild(textArea);
    }
  }

  const copyTextToClipboard = async (text: string | null): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text || "")
      return copySuccessHandler(text);
    } catch (error) {
      return copyFailureHandler();
    }
  }

  const copy: CopyFn = async (text): Promise<boolean> => {
    return navigator?.clipboard ? await copyTextToClipboard(text) : fallbackCopyTextToClipboard(copiedText);
  }

  return [copy, isCopied, copiedText]
}