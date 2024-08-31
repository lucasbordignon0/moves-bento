"use client";

import Image from "next/image";
import { MiniPlayer } from "./components/MiniPlayer";
import { motion } from "framer-motion";
import { ExerciseInfo } from "./components/ExerciseInfo";
import { AdjustWorkout } from "./components/AdjustWorkout";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-6 bg-[#F9F5F1] antialiased tracking-tight">
      <div className="flex w-[406px] h-[428px] flex-col rounded-3xl bg-surface-card-primary">
        <div className="flex relative w-full h-full justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute z-30 mt-[34px]"
          >
            <MiniPlayer />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 0.95, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute z-20 scale-95 mt-[47px]"
          >
            <MiniPlayer />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 0.9, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute z-10 mt-[60px]"
          >
            <MiniPlayer />
          </motion.div>
        </div>
        <div className="flex flex-col w-full gap-2 px-6 pb-8">
          <h2 className="text-2xl font-medium">Log workouts easily</h2>
          <p className="text-text-subtle text-base">
            Seamlessly track every step, jump, and workout with advanced
            AI-powered tracking that adapts to your lifestyle
          </p>
        </div>
      </div>
      <div className="flex w-[406px] h-[428px] flex-col rounded-3xl bg-surface-card-primary">
        <div className="flex relative w-full h-full justify-center">
          <ExerciseInfo />
        </div>
        <div className="flex flex-col w-full gap-2 px-6 pb-8">
          <h2 className="text-2xl font-medium">Exercise Information</h2>
          <p className="text-text-subtle text-base">
            Seamlessly track every step, jump, and workout with advanced
            AI-powered tracking that adapts to your lifestyle
          </p>
        </div>
      </div>
      <div className="flex w-[406px] h-[428px] flex-col rounded-3xl bg-surface-card-primary">
        <div className="flex w-full h-full justify-center">
          <AdjustWorkout />
        </div>
        <div className="flex flex-col w-full gap-2 px-6 pb-8">
          <h2 className="text-2xl font-medium">Adjust you workout</h2>
          <p className="text-text-subtle text-base">
            Seamlessly track every step, jump, and workout with advanced
            AI-powered tracking that adapts to your lifestyle
          </p>
        </div>
      </div>
    </main>
  );
}
