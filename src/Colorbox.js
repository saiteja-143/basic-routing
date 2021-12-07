import React from "react";

export function Colorbox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "50px",
    width: "200px",
    margin: "10px 0px",
  };
  return <div style={styles}></div>;
}
