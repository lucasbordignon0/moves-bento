import Image from "next/image";
import { motion } from "framer-motion";

export function Notes() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex flex-col gap-2 w-full h-full items-start justify-center relative overflow-hidden min-w-[240px]"
    >
      <motion.div className="absolute top-0 left-0 w-full h-full z-10">
        <svg
          width="240"
          height="144"
          viewBox="0 0 240 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="241"
            height="144"
            fill="url(#paint0_radial_10087_2849)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_10087_2849"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-10.7376 72) scale(391.327 82)"
            >
              <stop offset="0.450237" stop-color="white" stop-opacity="0" />
              <stop offset="1" stop-color="white" stop-opacity="0.7" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
      <motion.div className="flex gap-2 pl-2 pr-3 py-[6px] rounded-full bg-surface-card-accent ml-20 shadow-shadow-primary">
        <span className="h-4 w-4 text-text-tertiary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00002 1.33331C11.9036 1.33331 15.3334 3.88847 15.3334 7.33331C15.3334 8.83059 14.6678 10.1774 13.6075 11.2052L13.9933 13.9057C14.0284 14.1512 13.9243 14.3958 13.7232 14.5408C13.522 14.6858 13.257 14.7072 13.0352 14.5963L10.0403 13.0988C9.39151 13.2517 8.70677 13.3333 8.00002 13.3333C4.09644 13.3333 0.666687 10.7782 0.666687 7.33331C0.666687 3.88847 4.09644 1.33331 8.00002 1.33331Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="text-[11px] text-text-tertiary font-semibold">
          Try doing the return faster
        </p>
      </motion.div>
      <motion.div className="flex gap-2 pl-2 pr-3 py-[6px] rounded-full bg-surface-card-accent ml-12 shadow-shadow-primary">
        <span className="h-4 w-4 text-text-tertiary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00002 1.33331C11.9036 1.33331 15.3334 3.88847 15.3334 7.33331C15.3334 8.83059 14.6678 10.1774 13.6075 11.2052L13.9933 13.9057C14.0284 14.1512 13.9243 14.3958 13.7232 14.5408C13.522 14.6858 13.257 14.7072 13.0352 14.5963L10.0403 13.0988C9.39151 13.2517 8.70677 13.3333 8.00002 13.3333C4.09644 13.3333 0.666687 10.7782 0.666687 7.33331C0.666687 3.88847 4.09644 1.33331 8.00002 1.33331Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="text-[11px] text-text-tertiary font-semibold">
          Increase weight next time!
        </p>
      </motion.div>
      <motion.div className="flex gap-2 pl-2 pr-3 py-[6px] rounded-full bg-surface-card-accent ml-6 shadow-shadow-primary">
        <span className="h-4 w-4 text-text-tertiary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00002 1.33331C11.9036 1.33331 15.3334 3.88847 15.3334 7.33331C15.3334 8.83059 14.6678 10.1774 13.6075 11.2052L13.9933 13.9057C14.0284 14.1512 13.9243 14.3958 13.7232 14.5408C13.522 14.6858 13.257 14.7072 13.0352 14.5963L10.0403 13.0988C9.39151 13.2517 8.70677 13.3333 8.00002 13.3333C4.09644 13.3333 0.666687 10.7782 0.666687 7.33331C0.666687 3.88847 4.09644 1.33331 8.00002 1.33331Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="text-[11px] text-text-tertiary font-semibold">
          Warmup before this exercise
        </p>
      </motion.div>
      <motion.div className="flex gap-2 pl-2 pr-3 py-[6px] rounded-full bg-surface-card-accent ml-12 shadow-shadow-primary">
        <span className="h-4 w-4 text-text-tertiary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00002 1.33331C11.9036 1.33331 15.3334 3.88847 15.3334 7.33331C15.3334 8.83059 14.6678 10.1774 13.6075 11.2052L13.9933 13.9057C14.0284 14.1512 13.9243 14.3958 13.7232 14.5408C13.522 14.6858 13.257 14.7072 13.0352 14.5963L10.0403 13.0988C9.39151 13.2517 8.70677 13.3333 8.00002 13.3333C4.09644 13.3333 0.666687 10.7782 0.666687 7.33331C0.666687 3.88847 4.09644 1.33331 8.00002 1.33331Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="text-[11px] text-text-tertiary font-semibold">
          Try 12 reps instead of 8
        </p>
      </motion.div>
      <motion.div className="flex gap-2 pl-2 pr-3 py-[6px] rounded-full bg-surface-card-accent ml-20 shadow-shadow-primary">
        <span className="h-4 w-4 text-text-tertiary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00002 1.33331C11.9036 1.33331 15.3334 3.88847 15.3334 7.33331C15.3334 8.83059 14.6678 10.1774 13.6075 11.2052L13.9933 13.9057C14.0284 14.1512 13.9243 14.3958 13.7232 14.5408C13.522 14.6858 13.257 14.7072 13.0352 14.5963L10.0403 13.0988C9.39151 13.2517 8.70677 13.3333 8.00002 13.3333C4.09644 13.3333 0.666687 10.7782 0.666687 7.33331C0.666687 3.88847 4.09644 1.33331 8.00002 1.33331Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="text-[11px] text-text-tertiary font-semibold">
          Use another rope next time
        </p>
      </motion.div>
    </motion.div>
  );
}
