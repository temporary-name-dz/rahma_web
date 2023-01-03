import styled from "styled-components";
const PharmaciesWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: orangered;
  height: var(--section-height);
  & > * {
    width: 50%;
    height: 100%;
  }
`;

export { PharmaciesWrap };
