import Image from "next/image";
import { motion } from "framer-motion";

export function ExerciseInfo() {
  return (
    <div className="flex relative w-full h-[294px] justify-center overflow-hidden">
      <div
        className="absolute z-40 bottom-0 w-full h-[120px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 25%, rgba(255, 255, 255, 0.50) 50%, #FFF 75%, #FFF 100%)",
        }}
      />
      <motion.div
        className="absolute mt-5 z-20"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <Image
          className=" w-[158px] h-[335px]"
          style={{
            filter:
              "drop-shadow(0px 2.225px 8.898px rgba(25, 23, 22, 0.10)) drop-shadow(0px 2.06px 4.449px rgba(25, 23, 22, 0.04))",
          }}
          src="/images/details.png"
          alt="exercise-info"
          width={413}
          height={872}
        />
      </motion.div>
      <motion.div
        className="absolute mt-10 ml-[140px]"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 6 }}
        transition={{ delay: 0.4 }}
      >
        <Image
          className=" w-[143px] h-[302px]"
          style={{
            filter:
              "drop-shadow(0px 2.225px 8.898px rgba(25, 23, 22, 0.10)) drop-shadow(0px 2.06px 4.449px rgba(25, 23, 22, 0.04))",
          }}
          src="/images/customize.png"
          alt="exercise-customize"
          width={413}
          height={872}
        />
      </motion.div>
      <motion.div
        className="absolute mt-10 mr-[140px]"
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: -6 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          className="w-[143px] h-[302px]"
          style={{
            filter:
              "drop-shadow(0px 2.225px 8.898px rgba(25, 23, 22, 0.10)) drop-shadow(0px 2.06px 4.449px rgba(25, 23, 22, 0.04))",
          }}
          src="/images/history.png"
          alt="exercise-history"
          width={413}
          height={872}
        />
      </motion.div>
    </div>
  );
}
