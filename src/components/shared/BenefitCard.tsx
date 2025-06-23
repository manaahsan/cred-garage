// ui
import { Button } from "@/components/ui/button";

// useContext
import { useAppContext } from "@/context/AppContext";

type Benefit = {
  icon: string;
  title: string;
  description: string;
  cta: string;
};

export default function BenefitCard({
  icon,
  title,
  description,
  cta,
}: Benefit) {
  const { motion } = useAppContext();
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-card rounded-2xl p-5 shadow-lg text-card-foreground flex flex-col justify-between transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>

      <p className="text-muted-foreground text-sm flex-1">{description}</p>

      <div className="mt-4">
        <Button
          variant="default"
          className="w-full bg-background text-primary hover:text-black hover:opacity-90 transition-colors"
        >
          {cta}
        </Button>
      </div>
    </motion.div>
  );
}
