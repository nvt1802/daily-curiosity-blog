"use client";

import { useAppContext } from "@/src/context/AppContext";
import { useEffect, Fragment } from "react";

const ScreenSize = () => {
  const { updateState } = useAppContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => updateState({ innerWidth: window.innerWidth });
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return <Fragment />;
};

export default ScreenSize;
