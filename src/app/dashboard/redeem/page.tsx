"use client";
import RewardsSection from "@/components/shared/RewardSection";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const Analytics = () => {
  const { motion } = useAppContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <RewardsSection />
    </motion.div>
  );
};

export default Analytics;
