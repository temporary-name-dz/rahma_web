"use client";
import Link from "next/link";
import Image from "next/image";

import aboutUsIcon from "./about.svg";
import contactIcon from "./contact.svg";
import homeIcon from "./home.svg";
import searchIcon from "./search.svg";
import { Sidebar } from "./sideBar.styled";
function SideBar(props) {
  return (
    <Sidebar className={`${props.isMenuOpen ? "show-sidebar" : ""}`}>
      <aside>
        <ul className="sidebar-links">
          <li className="sidebar-link ">
            <Link href="/">
              <Image
                alt="home page icon"
                src={homeIcon}
                width={30}
                height={30}
              />
              <span>Home</span>
            </Link>
          </li>
          <li className="sidebar-link">
            <Link
              href="#"
              onClick={() => {
                props.func.toggleModal();
              }}
            >
              <Image alt="searchIcon" src={searchIcon} width={30} height={30} />
              <span>search</span>
            </Link>
          </li>
          <li className="sidebar-link">
            <Link href="/">
              <Image
                alt="aboutUsIcon"
                src={aboutUsIcon}
                width={30}
                height={30}
              />{" "}
              <span>About</span>
            </Link>
          </li>
          <li className="sidebar-link">
            <Link href="/">
              <Image
                alt="contactIcon"
                src={contactIcon}
                width={30}
                height={30}
              />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </aside>
    </Sidebar>
  );
}

export default SideBar;
