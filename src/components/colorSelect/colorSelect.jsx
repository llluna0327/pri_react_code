import React, { useState } from "react";

function colorSelect() {
  const [fin, setFin] = useState("white");
  const colorSelect = (e) => {
    const selectedColor = e.target.style.backgroundColor;
    console.log("Selected color:", selectedColor);
    setFin(selectedColor);
    console.log("fin:", fin);
  };

  const colors = ["red", "green", "blue"];
  const colorButtons = colors.map((color) => (
    <button
      key={color}
      style={{ backgroundColor: color, width: "20px", height: "10px" }}
      onClick={colorSelect}
    ></button>
  ));

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>选择颜色</h2>
      <div style={{ width: "100px", height: "100px", margin: "0 auto" }}>
        {colorButtons}
        <br />
        <span
          style={{
            display: "inline-block",
            backgroundColor: fin,
            width: "50px",
            height: "50px",
          }}
        ></span>
      </div>
    </div>
  );
}

export default colorSelect;
