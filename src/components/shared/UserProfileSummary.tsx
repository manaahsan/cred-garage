"use client";
import Image from "next/image";

// useContext
import { useAppContext } from "@/context/AppContext";

export default function UserProfileSummary() {
  const {motion} = useAppContext()
  const user = {
    name: "Manazir Ahsan",
    level: 5,
    xp: 320,
    xpGoal: 500,
    avatar: "/assets/images/avatar.png",
  };

  const xpPercent = (user.xp / user.xpGoal) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card p-6 rounded-2xl shadow-md flex items-center gap-6 text-card-foreground"
    >
      <div className="relative">
        <Image
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full border-4 border-border object-cover"
          width={45}
          height={45}
        />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-card" />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground">{user.name}</h3>
        <p className="text-sm text-muted-foreground">
          Level {user.level} • XP {user.xp}/{user.xpGoal}
        </p>

        {/* XP Progress Bar */}
        <div className="mt-2 w-full bg-[--muted] h-3 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${xpPercent}%` }}
            transition={{ duration: 0.8 }}
            className="h-full bg-[--primary] rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
}
