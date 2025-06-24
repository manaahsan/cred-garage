"use client";
// ui
import { Button } from "@/components/ui/button";

// useContext
import { useAppContext } from "@/context/AppContext";

// variants
import { containerVariants, itemVariants } from "@/lib/variants";

export default function Home() {
  const { router, motion } = useAppContext();

  const handleEnter = () => {
    document.cookie = "logged_in=true; path=/";
    router.push("/dashboard");
  };


  return (
    <main className="min-h-screen flex items-center justify-center text-foreground p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-xl text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-primary-foreground"
        >
          Welcome to Your Rewards Dashboard
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
          className="text-muted-foreground text-lg mb-8"
        >
          Track rewards, unlock perks, and boost your journey — CRED.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <Button
            onClick={handleEnter}
            className="inline-block bg-primary-foreground text-foreground px-6  text-sm font-medium transition hover:opacity-90"
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
