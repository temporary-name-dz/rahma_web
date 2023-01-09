import styled from "styled-components";
const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  height: var(--section-height);
  color: var(--white);
  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: -999;
    width: 100%;
    height: 100%;
  }
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .hero-icon {
    position: relative;
    z-index: 3;

    width: 52px;
    height: 52px;
  }
  .textbox {
    position: relative;
    z-index: 3;
    h1 {
      font-size: 5rem;
      margin: 0;
      padding-bottom: 1rem;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        background-color: orangered;
        width: 50px;
        height: 4px;
        border-radius: 3px;
      }
    }
    h6 {
      font-size: 1.5rem;
      text-align: center;
      margin: 1rem 0 0;
    }
  }
`;

export { HeroContainer };
