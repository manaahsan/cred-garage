// useContext
import { useAppContext } from "@/context/AppContext";

export const Logout = () => {
  const { motion, router, setIsOpenMobile } = useAppContext();
  const handleLogout = () => {
    document.cookie =
      "logged_in=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsOpenMobile(false);
    router.replace("/");
  };
  return (
    <motion.button
      onClick={handleLogout}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="h-8 px-3 text-sm font-medium rounded-md bg-primary-foreground text-destructive-foreground hover:bg-muted transition-colors"
    >
      Logout
    </motion.button>
  );
};
