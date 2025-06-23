"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// types
import { AppContextType } from "@/lib/types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    typeof window !== "undefined" ? !!localStorage.getItem("logged_in") : false
  );

  const toggleSidebar = () => setIsOpenMobile((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isOpen,
    setIsOpen,
    isOpenMobile,
    setIsOpenMobile,
    toggleSidebar,
    closeSidebar,
    router,
    motion,
  };

  return <AppContext.Provider value={value} >{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
