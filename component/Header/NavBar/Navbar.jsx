"use client";
import {
  NavBar,
  LogoContainer,
  Navlinks,
  Navlink,
  NavToggle,
} from "./navBar.styled";
import navLinks from "@public/navigation.json";
import Image from "next/image";
import login from "./login.svg";

function SearchBtn({ toggleFnc }) {
  return (
    <button
      onClick={() => {
        props.func.toggleModal();
      }}
    >
      Search
    </button>
  );
}
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
        {/* FIXME :Warning: Each child in a list should have a unique "key" prop. */}
        {navLinks.map((navlink, index) => {
          const { name, href } = navlink;

          if (index === 0) {
            return (
              <>
                <Navlink key={index + href + "_navbar"} href={href}>
                  {name}
                </Navlink>
                <SearchBtn
                  key={index + "search" + "_navbar"}
                  toggleFnc={props.func.toggleModal}
                />
              </>
            );
          }
          // FIXME add type prop to nav json
          if (name.includes("add your pharm")) {
            return (
              <Navlink
                key={index + href + "_navbar"}
                type="primary"
                href={href}
              >
                {name}
              </Navlink>
            );
          }
          return (
            <Navlink key={index + href + "_navbar"} href={href}>
              {name}
            </Navlink>
          );
        })}
      </Navlinks>
      <NavToggle
        key={"wtfffffff"}
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
