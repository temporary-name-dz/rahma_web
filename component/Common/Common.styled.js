import styled from "styled-components";
const Overlay = styled.div`
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

const PaginateWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  width: 100%;
  button {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    font-size: 1rem;
    font-size: 13px;
    line-height: 44px;
    letter-spacing: 1px;
    color: var(--light-gray-4);
    background-color: var(--white);
    width: 44px;
    height: 44px;
    padding: 0;
    margin: 0 5px 0 0 !important;
    border: 1px solid var(--colors-accent-50);
    cursor: pointer;
    border-radius: var(--border-radius);
    &:hover {
      background-color: var(--paper-yellow-799);
      color: var(--white);
    }
  }
  .active {
    color: var(--white);
    background-color: var(--colors-accent-35);
  }
  @media (max-width: 635px) {
    button {
      font-size: 2rem !important;
      width: 48px;
      height: 48px;
    }
  }
`;

export { Overlay, PaginateWrapper };
