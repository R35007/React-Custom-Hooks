import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string, value: any = true, defaultValue: any = false): any => {

  const getMatches = (query: string) => window?.matchMedia(query).matches ? value : defaultValue;

  const [matches, setMatches] = useState(getMatches(query))

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}