"use client";
import { useEffect } from "react";

// components
import { Nav } from "@/components/shared/Nav";
import { CustomSheet } from "@/components/shared/Sheet";

// context
import { useAppContext } from "@/context/AppContext";

export function Sidebar() {
  const { isOpen, isOpenMobile, setIsOpenMobile, motion } = useAppContext();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpenMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpenMobile, setIsOpenMobile]);

  return (
    <>
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "tween", duration: 0.3 }}
        className={`
      hidden fixed top-0 left-0 h-full w-64 bg-background border-r shadow-lg z-50
      md:relative md:translate-x-0 md:shadow-none md:block
    `}
      >
        <div className="flex h-14 items-center border-b px-4 justify-between">
          <span className="text-lg font-semibold text-primary">Dashboard</span>
        </div>

        <Nav />
      </motion.aside>
      <CustomSheet />
    </>
  );
}
