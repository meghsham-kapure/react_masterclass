import { useState } from "react";
import ColorButton from "./components/ColorButton";

function App() {
  const [bgcolorName, setBgColorName] = useState("red");
  const setBGColor = (color) => setBgColorName(color);

  return (
    <>
      <div
        id="main-container"
        className="w-full h-screen flex flex-col justify-between items-center"
        style={{ backgroundColor: bgcolorName }}
      >
        <div className="flex flex-wrap justify-center items-end w-full m-10 h-screen" >
          <div className="flex flex-wrap justify-center items-center  bg-black  w-auto rounded-3xl">
            <ColorButton bgcolorName={"red"} setBGColor={setBGColor} />
            <ColorButton bgcolorName={"blue"} setBGColor={setBGColor} />
            <ColorButton bgcolorName={"green"} setBGColor={setBGColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
