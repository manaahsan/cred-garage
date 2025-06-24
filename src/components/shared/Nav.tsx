"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

// context
import { useAppContext } from "@/context/AppContext";

// helper
import { menuItems } from "@/lib/helper";

export function Nav() {
  const { motion, setIsOpenMobile } = useAppContext();
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1 p-4">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className="block" onClick={()=>setIsOpenMobile(false)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * (index + 1) }}
              className={`flex items-center rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors
              ${
                isActive
                  ? "bg-hover-active text-muted-foreground bg-white hover:text-black "
                  : "text-secondary"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{item.label}</span>
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
}
