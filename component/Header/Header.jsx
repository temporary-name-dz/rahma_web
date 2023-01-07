"use client";

import Navbar from "./NavBar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import SearchWrap from "@common/SearchWrap";

export default function Header(params) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <header>
      <Navbar isMenuOpen={isMenuOpen} func={{ toggleSidebar, toggleModal }} />
      <Sidebar isMenuOpen={isMenuOpen} func={{ toggleSidebar, toggleModal }} />
      <SearchWrap key="header-SearchWrap" visible={modalVisible} modal={true} />
    </header>
  );
}
