interface SpacingProps {
  width: string | number; // can be "200px" or 200
  height: string | number;
}
function Spacing({ height, width }: SpacingProps) {
  return <div style={{ width: `${width}px`, height: `${height}px` }}></div>;
}

export default Spacing;
