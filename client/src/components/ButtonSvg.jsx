const ButtonSvg = () => {
  return (
    <svg width="200" height="70">
      <rect
        id="rect"
        // x="150"
        // y="200"
        x="0"
        y="0"
        width="140"
        height="50"
        fill="none"
        stroke="black"
        strokeWidth="3"
      />
      <text
        id="text"
        x="70"
        y="25"
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        SHOW NOW
      </text>
    </svg>
  );
};

export default ButtonSvg;
