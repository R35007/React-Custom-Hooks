import CSS from 'csstype';
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../Hooks';


export const UseOnClickOutside = () => {

  const [open, setopen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null);

  const listner = () => {
    console.log("Closing Dialog");
    setopen(false);
  };

  useOnClickOutside(dialogRef, listner)

  const backdrop: CSS.Properties = {
    position: "fixed",
    background: "rgba(0,0,0,0.9)",
    height: "100%",
    width: "100%",
    display: "grid",
    placeItems: "center",
    top: 0,
    left: 0
  };


  const dialog: CSS.Properties = {
    background: "white",
    border: "2px dashed black",
    padding: "10rem",
    width: "10rem"
  }

  return <div>
    <button onClick={() => setopen(true)}>Toggle</button>
    {open && <div style={backdrop}>
      <div style={dialog} ref={dialogRef}>
        <h2>Your Dialog</h2>
      </div>
    </div>}

  </div>

}
