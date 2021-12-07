import React from "react";
import { useState } from "react";
import { Colorbox } from "./Colorbox";

export function Addcolor() {
  const [color, setcolor] = useState("");
  const styles = { backgroundColor: color };
  const [colors, setcolors] = useState(["pink", "orange", "Yellow", "Violet"]);
  //Typing triggers OChange event.
  //provies event.target.value(content).
  //invoke the setcolormethod and pass the content ,it will be set the ne wcolor value.
  //React will take care from here.
  //here useState can take any data type it want like number,String,Array,Objects etc.
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setcolor(event.target.value)}
        placeholder="Enter the color"
      />
      {colors.map((clr) => (
        <Colorbox color={clr} />
      ))}
      <button onClick={() => setcolors([...colors, color])}>Add color</button>

      <Colorbox />
    </div>
  );
}
