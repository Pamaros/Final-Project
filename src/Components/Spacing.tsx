interface SpacingProps {
  width?: number;
  height?: number;
}
function Spacing({ height, width }: SpacingProps) {
  return <div style={{ width: `${width}px`, height: `${height}px` }}></div>;
}

export default Spacing;
