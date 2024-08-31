import * as Switch from "@radix-ui/react-switch";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export function AdjustWorkout() {
  const [count, setCount] = useState(3);

  const decrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex w-full h-full items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 15 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="flex absolute w-[132px] h-10 bg-surface-card-primary border border-text-primary/10 rounded-xl shadow-shadow-primary bottom-[72px] right-16 rotate-12"
      >
        <button
          onClick={decrement}
          className="flex shrink-0 w-10 h-10 items-center justify-center border-r border-r-text-primary/10 focus:outline-none group"
        >
          <svg
            className="text-text-highlight group-hover:text-text-pressed group-hover:scale-110 transition-all ease-out"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8333 9.16666C16.2935 9.16666 16.6666 9.53975 16.6666 9.99999C16.6666 10.4602 16.2935 10.8333 15.8333 10.8333C8.83255 10.8333 11.6937 10.8333 4.16665 10.8333C3.70641 10.8333 3.33331 10.4602 3.33331 9.99999C3.33331 9.53975 3.70641 9.16666 4.16665 9.16666C11.6858 9.16666 8.828 9.16666 15.8333 9.16666Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <motion.div className="flex w-full h-full items-center justify-center border-r border-r-text-primary/10">
          <p className="text-text-primary text-[21px] font-semibold">{count}</p>
        </motion.div>
        <button
          onClick={increment}
          className="flex shrink-0 w-10 h-10 items-center justify-center focus:outline-none group"
        >
          <svg
            className="text-text-highlight group-hover:text-text-pressed group-hover:scale-110 transition-all ease-out"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0642 3.6412C10.5244 3.6412 10.8975 4.0143 10.8975 4.47454V9.47454H15.8975C16.3577 9.47454 16.7308 9.84763 16.7308 10.3079C16.7308 10.7681 16.3577 11.1412 15.8975 11.1412H10.8975V16.1412C10.8975 16.6014 10.5244 16.9745 10.0642 16.9745C9.60392 16.9745 9.23082 16.6014 9.23082 16.1412V11.1412H4.23082C3.77059 11.1412 3.39749 10.7681 3.39749 10.3079C3.39749 9.84763 3.77059 9.47454 4.23082 9.47454H9.23082V4.47454C9.23082 4.0143 9.60392 3.6412 10.0642 3.6412Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 15 }}
        transition={{ delay: 0.3 }}
        className="absolute z-10 flex items-center justify-center h-[60px] w-[60px] rounded-full bg-[#E9F596] shadow-shadow-primary top-[68px] right-[74px] rotate-12"
      >
        <svg
          className="text-text-primary h-[35px] w-[35px]"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.576 4.74331C24.1719 4.54968 24.8139 4.54968 25.4099 4.74331C25.8397 4.88299 26.1689 5.11978 26.4283 5.33999C26.6642 5.54033 26.9218 5.79796 27.1862 6.06247L29.8312 8.70737C30.096 8.97211 30.3539 9.22995 30.5544 9.46617C30.7746 9.72556 31.0114 10.0548 31.151 10.4846C31.3447 11.0806 31.3447 11.7224 31.151 12.3183C31.0114 12.7481 30.7746 13.0773 30.5544 13.3367C30.3539 13.573 30.096 13.8308 29.8311 14.0956L25.5479 18.3788C25.5459 18.3808 25.5439 18.3828 25.5419 18.3849C25.5399 18.3869 25.5379 18.3889 25.5359 18.3909L13.6733 30.2535C13.395 30.5317 13.0177 30.688 12.6242 30.688L6.68992 30.688C6.29645 30.688 5.91909 30.5317 5.64086 30.2535C5.36264 29.9753 5.20633 29.5979 5.20633 29.2044V23.2701C5.20633 22.8767 5.36263 22.4993 5.64086 22.2211L21.7653 6.09657L21.7986 6.06326C22.0634 5.7984 22.3213 5.54046 22.5576 5.33989C22.817 5.11968 23.1462 4.88296 23.576 4.74331ZM18.5585 13.4996L8.17349 23.8846V27.7209L12.0097 27.7208L22.3947 17.3358L18.5585 13.4996ZM24.4928 15.2377L20.6566 11.4015L23.8634 8.19467C24.1745 7.88362 24.3455 7.71422 24.4778 7.60191C24.4831 7.59743 24.4881 7.59322 24.4929 7.58925C24.4976 7.59319 24.5026 7.59737 24.5078 7.60181C24.6401 7.71415 24.8111 7.88354 25.1223 8.19467L27.6996 10.772C28.0107 11.0831 28.1801 11.2541 28.2924 11.3865C28.2969 11.3917 28.3011 11.3967 28.305 11.4015C28.3011 11.4062 28.2969 11.4112 28.2924 11.4165C28.1801 11.5488 28.0107 11.7198 27.6996 12.0309L24.4928 15.2377Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute z-20 left-[74px] bottom-[58px]"
      >
        <Switch.Root
          className="w-[58px] h-[32px] bg-text-secondary rounded-full relative data-[state=checked]:bg-surface-card-accent outline-none cursor-pointer"
          id="toggle"
          defaultChecked
        >
          <Switch.Thumb className="block w-[24px] h-[24px] bg-surface-card-primary rounded-full transition-transform duration-100 translate-x-1 will-change-transform data-[state=checked]:translate-x-[30px]" />
        </Switch.Root>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: -15 }}
        transition={{ delay: 0.3 }}
        className="flex z-10 gap-2 p-1 items-center absolute bg-surface-card-primary rounded-xl shadow-shadow-primary left-6 top-20 -rotate-12"
      >
        <Image
          className="h-11 w-11 object-cover object-center rounded-lg"
          src="/images/workout-video.png"
          alt="workout-video"
          width={361}
          height={203}
        />
        <motion.div className="flex flex-col pr-2">
          <h6 className="text-text-primary font-semibold text-xs">
            Upper Body Push Warmup
          </h6>
          <p className="text-text-secondary text-[9px]">15 reps</p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <Image
          className="rounded-[20px] shadow-shadow-primary"
          src="/images/adjust-image.png"
          alt="adjust-workout"
          width={202}
          height={202}
        />
      </motion.div>
    </div>
  );
}
