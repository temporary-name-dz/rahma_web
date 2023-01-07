"use client";
import {
  NavBar,
  LogoContainer,
  Navlinks,
  Navlink,
  NavToggle,
} from "./navBar.styled";
import Image from "next/image";
import login from "./login.svg";

function Navbar(props) {
  return (
    <NavBar>
      <LogoContainer>
        <Image
          alt="rahma logo"
          src="/logoipsum-264.svg"
          width={64}
          height={64}
        />
      </LogoContainer>
      <Navlinks>
        <Navlink href="/">Home</Navlink>
        <button
          onClick={() => {
            props.func.toggleModal();
          }}
        >
          Search
        </button>
        <Navlink href="/">About</Navlink>
        <Navlink href="/">Contact</Navlink>
        <Navlink type="auth" href="/" title="login">
          <Image alt="login" src={login} width={23} height={13} />
          Sign in
        </Navlink>
        <Navlink type="primary" href="/">
          Add your pharm +
        </Navlink>
      </Navlinks>
      <NavToggle
        aria-label="menu"
        type="button"
        className={props.isMenuOpen ? "open" : ""}
        onClick={() => {
          props.func.toggleSidebar();
        }}
      >
        <span className={props.isMenuOpen ? "nav__icon open" : "nav__icon"}>
          &nbsp;
        </span>
      </NavToggle>
    </NavBar>
  );
}

export default Navbar;
