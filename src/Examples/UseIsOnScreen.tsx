import CSS from 'csstype';
import { useRef } from 'react';
import { useIsOnScreen } from '../Hooks';

export const UseIsOnScreen = () => {

  const listRef = useRef<HTMLLIElement>(null);
  const isVisible = useIsOnScreen(listRef);

  const ulStyle: CSS.Properties = {
    height: "10rem",
    overflow: "auto",
    width: "30rem",
    background: "#e7e7e7",
    border: "1px solid #e4e4e4",
    borderRadius: "4px",
    listStyle: "none",
    margin: 0,
    padding: 0
  }

  const liStyle: CSS.Properties = {
    padding: "0.5rem",
  }

  return (
    <div style={{ textAlign: "left", fontSize: "1.2rem" }}>
      <div><label>isVisible: </label> <span>{isVisible.toString()}</span></div><br />
      <ul style={ulStyle}>
        {Array.from({ length: 11 }).map((_, index) => <li style={liStyle} key={index}>{index}</li>)}
        <li style={{ ...liStyle, background: "#c5c5c5" }} ref={listRef}>Shows Helper text if this list come into view screen</li>
        {Array.from({ length: 11 }).map((_, index) => <li style={liStyle} key={index}>{index}</li>)}
      </ul>
      {isVisible && <p> This text is visible only when the the highlited list come in to view on screen</p>}
    </div>
  )
}
