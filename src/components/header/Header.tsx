"use client";

import { useAppContext } from "@/context/AppContext";
import {
  DarkThemeToggle,
  Drawer,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  useThemeMode,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiDocument, HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

interface Props {
  title?: string;
}

const Header: React.FC<Props> = () => {
  const { mode } = useThemeMode();
  const { state } = useAppContext();
  const [logoClass, setLogoClass] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const iconClass = "h-6 w-6";
  const items = [
    {
      name: "Home",
      href: `/`,
      icon: <HiHome className={iconClass} />,
    },
    {
      name: "Blog",
      href: `/blog`,
      icon: <HiDocument className={iconClass} />,
    },
  ];
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
        {items?.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={
              item.href === pathname ? "text-blue-600 dark:text-white" : "dark:text-gray-400"
            }
          >
            {item.name}
          </Link>
        ))}
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
              {items?.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={twMerge(
                    "flex items-center justify-start rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 w-full",
                    item.href === pathname ? "bg-gray-100 dark:bg-gray-700" : ""
                  )}
                >
                  {item.name}
                </Link>
              ))}
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
