"use client";

import React, { useState } from "react";
import MenuMobile from "@/components/MenuMobile/MenuMobile";
import MenuDesktop from "@/components/MenuDesktop/MenuDesktop";

const NavbatKit = () => {
  const [showMMenu, setShowMMenu] = useState(false);

  const mobileShowHandler = () => {
    setShowMMenu(true);
  };
  const mobileHideHandler = () => setShowMMenu(false);

  return (
    <>
      <MenuDesktop menuShow={mobileShowHandler} />
      <MenuMobile menuShow={showMMenu} menuHide={mobileHideHandler} />
    </>
  );
};

export default NavbatKit;
