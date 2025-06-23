import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import  { motion } from "framer-motion";

export type AppContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isOpenMobile: boolean;
  setIsOpenMobile: (value: boolean) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  router: AppRouterInstance;
  motion: typeof motion;
};
  