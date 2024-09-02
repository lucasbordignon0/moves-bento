"use client";

import Image from "next/image";
import { MiniPlayer } from "./components/MiniPlayer";
import { motion } from "framer-motion";
import { ExerciseInfo } from "./components/ExerciseInfo";
import { AdjustWorkout } from "./components/AdjustWorkout";
import { Alternates } from "./components/Alternates";
import { Notes } from "./components/Notes";

export default function Home() {
  return (
    <main className="grid place-content-center min-h-dvh gap-4 bg-[#F9F5F1] antialiased tracking-tight p-4">
      <div className="grid grid-cols-6 w-[1250px] gap-4 xl:flex xl:flex-col xl:max-w-[369px]">
        <div className="flex h-[428px] flex-col rounded-3xl bg-surface-card-primary col-span-2">
          <motion.div
            layout
            transition={{ ease: "easeOut" }}
            className="flex relative w-full h-full justify-center"
          >
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
          </motion.div>
          <div className="flex flex-col w-full gap-2 px-6 pb-8">
            <h2 className="text-2xl font-medium">Log workouts easily</h2>
            <p className="text-text-subtle text-base xl:text-sm">
              Seamlessly track every step, jump, and workout with advanced
              AI-powered tracking that adapts to your lifestyle
            </p>
          </div>
        </div>
        <div className="flex h-[428px] flex-col rounded-3xl bg-surface-card-primary col-span-2">
          <div className="flex relative w-full h-full justify-center">
            <ExerciseInfo />
          </div>
          <div className="flex flex-col w-full gap-2 px-6 pb-8">
            <h2 className="text-2xl font-medium">Exercise Information</h2>
            <p className="text-text-subtle text-base xl:text-sm">
              Seamlessly track every step, jump, and workout with advanced
              AI-powered tracking that adapts to your lifestyle
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl bg-surface-card-primary col-span-2">
          <div className="flex w-full h-full justify-center">
            <AdjustWorkout />
          </div>
          <div className="flex flex-col w-full gap-2 px-6 pb-8">
            <h2 className="text-2xl font-medium">Adjust you workout</h2>
            <p className="text-text-subtle text-base xl:text-sm">
              Seamlessly track every step, jump, and workout with advanced
              AI-powered tracking that adapts to your lifestyle
            </p>
          </div>
        </div>
        <div className="flex w-full h-[144px] max-w-[617px] bg-surface-card-primary rounded-3xl col-span-3">
          <div className="flex flex-col w-full gap-2 px-6 justify-center xl:pr-0 xl:gap-1">
            <h2 className="text-2xl font-medium xl:invisible xl:absolute">
              Alternates for all exercises
            </h2>
            <h2 className="invisible absolute text-2xl font-medium xl:visible xl:relative">
              Alternates
            </h2>
            <p className="text-text-subtle text-base xl:text-sm">
              Seamlessly track every step, jump, and workout with advanced AI.
            </p>
          </div>
          <div className="flex w-[240px] h-full shrink-0 xl:w-[202px]">
            <Alternates />
          </div>
        </div>
        <div className="flex w-full h-[144px] max-w-[617px] bg-surface-card-primary rounded-3xl overflow-hidden col-span-3">
          <div className="flex flex-col w-full gap-2 px-6 justify-center xl:pr-0 xl:gap-1">
            <h2 className="text-2xl font-medium xl:invisible xl:absolute">
              Keep track with Notes
            </h2>
            <h2 className="invisible absolute text-2xl font-medium xl:visible xl:relative">
              Notes
            </h2>
            <p className="text-text-subtle text-base xl:text-sm">
              Seamlessly track every step, jump, and workout with advanced AI.
            </p>
          </div>
          <div className="flex w-[240px] h-full shrink-0 xl:w-[202px]">
            <Notes />
          </div>
        </div>
      </div>
    </main>
  );
}
