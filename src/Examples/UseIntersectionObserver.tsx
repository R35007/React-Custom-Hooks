import CSS from 'csstype';
import { useRef } from 'react';
import { useIntersectionObserver } from '../Hooks';

export const UseIntersectionObserver = () => {

  const listRef = useRef<HTMLLIElement>(null);
  const entry = useIntersectionObserver(listRef);

  const ulStyle: CSS.Properties = {
    height: "10rem",
    overflow: "auto",
    width: "22rem",
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
      <div><label>BoundingClientRect: </label> <span>{JSON.stringify(entry.boundingClientRect)}</span></div><br />
      <div><label>IntersectionRatio: </label> <span>{entry.intersectionRatio}</span></div><br />
      <div><label>IntersectionRect: </label> <span>{JSON.stringify(entry?.intersectionRect)}</span></div><br />
      <div><label>IsIntersecting: </label> <span>{entry.isIntersecting.toString()}</span></div><br />
      <div><label>RootBounds: </label> <span>{JSON.stringify(entry.rootBounds)}</span></div><br /><br />
      <ul style={ulStyle}>
        {Array.from({ length: 11 }).map((_, index) => <li style={liStyle} key={index}>{index}</li>)}
        <li style={{ ...liStyle, background: "#c5c5c5" }} ref={listRef}>The Observer listens to this Element</li>
        {Array.from({ length: 11 }).map((_, index) => <li style={liStyle} key={index}>{index}</li>)}
      </ul>
    </div>
  )
}
