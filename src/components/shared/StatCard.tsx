import clsx from "clsx";

// useContext
import { useAppContext } from "@/context/AppContext";

export default function StatCard({
  title,
  value,
  change,
  rank = true,
}: {
  title: string;
  value: string;
  change: number;
  rank?: boolean;
}) {
  const { motion } = useAppContext();
  const isPositive = change >= 0;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-card text-card-foreground rounded-2xl p-3 shadow-md transition-all space-y-0.5"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-base text-muted-foreground"
      >
        {title}
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl font-bold text-foreground mb-1"
      >
        {value}
      </motion.h3>
      {rank && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 pt-2 border-t border-primary-forground"
        >
          <span
            className={clsx(
              "text-sm font-medium px-3 py-1 rounded-full",
              isPositive
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            )}
          >
            {isPositive ? `+${change}` : change}
          </span>
          <span className="text-sm text-muted-foreground">This Month</span>
        </motion.div>
      )}
    </motion.div>
  );
}
