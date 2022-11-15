import styled from "styled-components";

const LocateMeBtn = styled.button`
  position: absolute;
  inset: 0 0 auto auto;
  width: max-content;

  .accuracy-container {
    position: relative;

    .static {
      position: absolute;
      background-color: var(--white);

      &:hover {
        opacity: 0;
      }
    }
  }
`;

export { LocateMeBtn };
