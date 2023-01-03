import styled from "styled-components";
const CardWrap = styled.article`
  font-family: "Nunito", sans-serif;
  background-color: var(--white);
  color: var(--secondary-text);
  border-radius: var(--border-radius-m);

  min-height: max-content;
  position: relative;
`;
const CardHeader = styled.div`
  position: relative;
  overflow: hidden;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  &:hover {
    .grow {
      transform: scale(1.2);
      transition: var(--transition-3);
    }
  }
  .card--image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-3);
  }
`;
const CardBody = styled.div`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: var(--border);
  .name-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin: 0;
      font-size: 1.5rem;
      color: var(--colors-accent-35);
    }
    .img {
      opacity: 0.3;
    }
  }
  .location-wrap {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    .img {
      margin: 0 6px 0 -4px;
      padding: 0;
    }
    p {
      color: var(--light-gray-4);
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      margin: 0;
    }
  }
`;
const CardCTA = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  .hours,
  a {
    background-color: var(--light-gray-2);
  }
  .hours {
    padding: 1rem;
    color: var(--light-gray-4);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    strong {
      color: var(--colors-accent-45);
      padding-left: 0.5rem;
    }
  }
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: var(--border-radius);
    position: relative;
    &:not(:last-child) {
      margin-right: 5px;
    }
    &:hover {
      background-color: var(--colors-accent-45);
      .img {
        transition: all 0.2s ease-in-out;
        animation: bounce 1s;
        color: #fff;
      }
      .tooltip {
        opacity: 1;
        visibility: visible;
      }
    }

    @keyframes bounce {
      0%,
      20%,
      60%,
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      40% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
      }
      80% {
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
      }
    }
  }
`;

const Avatar = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;

  background-color: var(--blue-60);
  width: 34px;
  height: 34px;
  border-radius: 100%;
  box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.2);
  transition: var(--transition-3);
  .image {
    width: 100%;
    height: 100%;
  }

  &:hover {
    .tooltip {
      opacity: 1;
      visibility: visible;
      margin-top: 0;
    }
  }
`;
const Tooltip = styled.span`
  font-size: 11px;
  padding: 1rem;
  position: absolute;
  top: 0;
  margin-left: 20px;
  min-width: max-content;
  border-radius: var(--border-radius);
  color: var(--white) !important;
  background-color: var(--blue-60);

  margin-top: 20px;
  box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.2);
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s ease-out;

  a {
    color: var(--colors-accent-45);
  }
`;

const CtaTooltip = styled(Tooltip)`
  margin: -120% 0 0;
  top: 0;
  right: 0;
  font-weight: bold;
  text-transform: capitalize;
  transition: all 0s;
  z-index: 10;
`;

const Status = styled.div`
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2.2px;
  color: var(--white) !important;
  background-color: ${(props) =>
    props.isItOpen == "Open"
      ? "var(--light-green)"
      : "var(--paper-blue-grey-800)"};
  border-radius: var(--border-radius);
  padding: 1rem;

  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  z-index: 3;
  box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.2);
`;
export {
  CardWrap,
  CardHeader,
  CardBody,
  CardCTA,
  Avatar,
  Tooltip,
  CtaTooltip,
  Status,
};
