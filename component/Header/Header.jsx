"use client";

import Navbar from "./NavBar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

export default function Header(params) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <Navbar isMenuOpen={isMenuOpen} func={{ toggleSidebar }} />
      <Sidebar isMenuOpen={isMenuOpen} func={{ toggleSidebar }} />
    </header>
  );
}
