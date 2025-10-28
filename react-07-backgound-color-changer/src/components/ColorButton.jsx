function ColorButton({ bgcolorName, setBGColor }) {
  return (
    <button
      className="w-10 h-10 p rounded-full p-1 m-2 text-black"
      style={{ background: bgcolorName }}
      onClick={() => setBGColor(bgcolorName)}
    ></button>
  );
}

export default ColorButton;
