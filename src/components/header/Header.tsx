"use client";

import { useAppContext } from "@/context/AppContext";
import {
  DarkThemeToggle,
  Drawer,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  useThemeMode
} from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title?: string;
}

const Header: React.FC<Props> = () => {
  const { mode } = useThemeMode();
  const { state } = useAppContext();
  const [logoClass, setLogoClass] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    setLogoClass(mode === "light" ? "" : "logo-dark");
  }, [mode]);

  return (
    <Navbar
      fluid
      rounded
      className={twMerge(
        "mb-5 shadow-lg duration-300 transition-all",
        state.isSticky ? "" : "sticky top-0 z-40 rounded-none"
      )}
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
        <NavbarLink href="/blog">Blog</NavbarLink>
      </NavbarCollapse>

      <div className="flex md:order-2">
        <NavbarCollapse>
          <DarkThemeToggle />
        </NavbarCollapse>
        <NavbarToggle onClick={() => setIsOpen(true)} />
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="" />
        <Drawer.Items className="h-[calc(100%-40px)]">
          <div className="flex flex-col justify-between h-full">
            <div className="menu">
              <NavbarLink href="/" active>
                Home
              </NavbarLink>
              <NavbarLink href="/about">About</NavbarLink>
              <NavbarLink href="#">Services</NavbarLink>
              <NavbarLink href="#">Pricing</NavbarLink>
              <NavbarLink href="#">Contact</NavbarLink>
            </div>
            <div>
              <DarkThemeToggle />
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </Navbar>
  );
};

export default Header;
