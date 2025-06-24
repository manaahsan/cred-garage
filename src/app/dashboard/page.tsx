"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// components
import StatCard from "@/components/shared/StatCard";
import ChartSection from "@/components/shared/ChartSection";
import UserProfileSummary from "@/components/shared/UserProfileSummary";
import BenefitsSection from "@/components/shared/RewardSection";
import RewardLinearProgress from "@/components/shared/RewardLinearProgress";
import SkeletonLoader from "@/components/shared/SkeletonLoader"; // 👈 new

// useContext
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { motion } = useAppContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        <div className="grid grid-cols-1  xl:grid-cols-2 gap-6">
          {/* User Profile */}
          <div className="flex flex-col justify-between p-6 space-y-6 bg-card-foreground rounded-xl">
            {loading ? (
              <SkeletonLoader className="h-28 w-full rounded-2xl" />
            ) : (
              <UserProfileSummary />
            )}
            {loading ? (
              <SkeletonLoader className="h-28 w-full rounded-full" />
            ) : (
              <RewardLinearProgress current={620} goal={1000} />
            )}
          </div>
          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 p-6 bg-card-foreground rounded-xl">
            {loading ? (
              Array(4)
                .fill(0)
                .map((_, i) => (
                  <SkeletonLoader
                    key={i}
                    className="h-24 w-full rounded-2xl bg-gary-300 dark:bg-gray-700"
                  />
                ))
            ) : (
              <>
                <StatCard title="Earnings" value="$5,400" change={200} />
                <StatCard title="Points Earned" value="23,000" change={1000} />
                <StatCard title="Redemptions" value="12" change={2} />
                <StatCard title="Rank" value="#4" change={100} rank={false} />
              </>
            )}
          </div>
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {loading ? (
              <SkeletonLoader className="h-[300px] w-full rounded-2xl" />
            ) : (
              <ChartSection />
            )}
          </motion.div>
          <motion.div
            className="relative rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {loading ? (
              <SkeletonLoader className="h-[300px] w-full rounded-xl" />
            ) : (
              <Image
                src="/assets/images/banner.png"
                alt="banner"
                fill
                className="rounded-xl object-cover"
              />
            )}
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <SkeletonLoader
                    key={i}
                    className="h-40 bg-gray-300 dark:bg-gray-700 rounded-xl"
                  />
                ))}
            </div>
          ) : (
            <BenefitsSection />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
