"use client";

import React, { useEffect, useState } from "react";
import {
  DarkThemeToggle,
  Flowbite,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  useThemeMode,
} from "flowbite-react";
import Image from "next/image";
import { useAppContext } from "@/src/context/AppContext";
import { twMerge } from "tailwind-merge";

interface Props {
  title?: string;
}

const Header: React.FC<Props> = () => {
  const { mode } = useThemeMode();
  const [logoClass, setLogoClass] = useState<string>("");
  const { state } = useAppContext();

  useEffect(() => {
    setLogoClass(mode === "light" ? "" : "logo-dark");
  }, [mode]);

  return (
    <Navbar
      fluid
      rounded
      className={twMerge("mb-5 shadow-lg", state.isSticky ? "" : "sticky top-0 z-40")}
    >
      <NavbarBrand href="/">
        <Image
          src="/logo.png"
          width={64}
          height={64}
          alt="Picture of the author"
          className={logoClass}
        />
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
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
