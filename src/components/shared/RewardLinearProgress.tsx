// useContext
import { useAppContext } from "@/context/AppContext";

export default function RewardLinearProgress({
  current = 620,
  goal = 1000,
}: {
  current: number;
  goal: number;
}) {
  const percent = (current / goal) * 100;
  const { motion } = useAppContext();

  return (
    <div className="w-full space-y-2 bg-card p-6 rounded-2xl">
      <h2 className="text-base font-bold text-foreground">Reward Progress</h2>
      {/* Progress Track */}
      <div className="bg-muted rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.6 }}
          className={`h-full rounded-full bg-background`}
        />
      </div>
      <div className="mt-2 text-sm text-muted-foreground">
        Reward Points:{" "}
        <span className="font-semibold text-foreground">{current}</span> /{" "}
        {goal}
      </div>
    </div>
  );
}
