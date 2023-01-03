import styled from "styled-components";

export default function Overlay() {
  return <RandomName>&nbsp;&nbsp;</RandomName>;
}
const RandomName = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 2;
  opacity: 0.5;
  border-radius: var(--border-radius);
`;
