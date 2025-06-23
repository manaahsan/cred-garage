"use client";
// ui
import { Button } from "@/components/ui/button";

// useContext
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { router, motion } = useAppContext();

  const handleEnter = () => {
    document.cookie = "logged_in=true; path=/";
    router.push("/dashboard");
  };
  return (
    <main className="min-h-screen flex items-center justify-center text-foreground p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Welcome to Your Rewards Dashboard
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Track rewards, unlock perks, and boost your journey — CRED.
        </p>
        <Button
          onClick={handleEnter}
          className="inline-block bg-primary text-primary-foreground px-6 rounded-xl text-sm font-medium transition hover:opacity-90"
        >
          Enter Dashboard
        </Button>
      </motion.div>
    </main>
  );
}
