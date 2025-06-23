import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-card text-card-foreground rounded-2xl p-6 shadow-md transition-colors"
    >
      <p className="text-sm text-muted-foreground">{title}</p>
      <h3 className="text-2xl font-semibold text-foreground">{value}</h3>
    </motion.div>
  );
}
