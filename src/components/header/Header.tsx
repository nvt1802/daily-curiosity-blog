"use client";

import React, { useEffect } from "react";
import {
  DarkThemeToggle,
  Flowbite,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  useThemeMode
} from "flowbite-react";
import Image from "next/image";

interface Props {
  title?: string;
}

const Header: React.FC<Props> = () => {
  const { mode } = useThemeMode();
  useEffect(() => {
    console.log(mode === "light");
  }, [mode]);
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <Image
          src="/logo.png"
          width={64}
          height={64}
          alt="Picture of the author"
          className={mode === "light" ? "" : "logo-dark"}
        />
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
      <div className="flex md:order-2">
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
        <NavbarToggle />
      </div>
    </Navbar>
  );
};

export default Header;
