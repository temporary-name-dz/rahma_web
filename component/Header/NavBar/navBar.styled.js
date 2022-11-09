import styled from "styled-components";
import Link from "next/link";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  color: var(--white);
  background-color: var(--colors-accent-601);
`;
const LogoContainer = styled.div`
  width: max-content;
`;

const Navlinks = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  gap: 2em;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Navlink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 500;
  display: ${(props) => (props.type == "auth" ? "flex" : "inline-block")};
  position: relative;
  padding: ${(props) => (props.type == "primary" ? "2.2rem" : "0")};
  cursor: pointer;
  color: var(--white);
  background-color: ${(props) =>
    props.type == "primary" ? "var( --colors-accent-40)" : "inherit"};

  transition: var(--transition);

  &:hover {
    background-color: ${(props) =>
      props.type == "primary" ? "var(--paper-yellow-799)" : "inherit"};
    color: ${(props) =>
      props.type == "primary" ? "var(--white)" : "var(--paper-yellow-799)"};
  }
`;
const NavToggle = styled.button`
  cursor: pointer;
  width: 56px;
  height: 56px;
  z-index: 999;
  position: fixed;
  inset: 3px 3px auto auto;
  border: none;
  display: none;
  border-radius: 50%;
  background-color: var(--colors-accent-40);
  transition: var(--transition);

  @media (max-width: 900px) {
    display: block;
  }

  /* &.open {
    background-color: transparent;
  } */
  .nav__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7rem;
    height: 7rem;
    transform: translate(-50%, -50%);
    transition: var(--transition);
  }
  .nav__icon,
  .nav__icon::before,
  .nav__icon::after {
    width: 28px;
    height: 3px;
    background: var(--white);
    transition: all 0.8s cubic-bezier(1, 0.47, 0, 1.27);
  }
  .nav__icon::before,
  .nav__icon::after {
    content: "";
    position: absolute;
    left: 0;
  }
  .nav__icon::before {
    top: -11px;
  }
  .nav__icon::after {
    top: 10px;
    width: 20px;
  }
  .nav__icon.open {
    transform: translate(-50%, -50%) rotate(-720deg);
    background-color: transparent;
  }
  .nav__icon.open::before {
    transform: rotate(-45deg);
    top: 0;
  }
  .nav__icon.open::after {
    transform: rotate(45deg);
    top: 0;
    left: 0;
    width: 28px !important;
  }
`;
export { NavBar, LogoContainer, Navlinks, Navlink ,NavToggle};
