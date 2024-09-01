import Image from "next/image";
import { motion } from "framer-motion";

export function Alternates() {
  return (
    <motion.div className="flex w-full h-full items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="flex items-center justify-center h-16 w-16 rounded-full bg-[#5B2A33] z-30 shadow-[0px_0px_40px_0px_rgba(91,42,51,0.50)]"
      >
        <svg
          className="text-text-tertiary"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7819 18.8003C12.4445 19.4392 12.4637 20.4943 11.8248 21.1569L8.9225 24.1667H20C20.9205 24.1667 21.6667 24.9129 21.6667 25.8334C21.6667 26.7538 20.9205 27.5 20 27.5H8.9225L11.8248 30.5098C12.4637 31.1724 12.4445 32.2275 11.7819 32.8664C11.1193 33.5054 10.0642 33.4862 9.4253 32.8236L3.8003 26.9902C3.17773 26.3446 3.17773 25.3221 3.8003 24.6765L9.4253 18.8431C10.0642 18.1805 11.1193 18.1613 11.7819 18.8003Z"
            fill="currentColor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M28.2181 7.13361C27.5556 7.77255 27.5364 8.82765 28.1753 9.49025L31.0776 12.5H20C19.0796 12.5 18.3334 13.2462 18.3334 14.1667C18.3334 15.0872 19.0796 15.8334 20 15.8334H31.0776L28.1753 18.8431C27.5364 19.5057 27.5556 20.5608 28.2181 21.1998C28.8807 21.8387 29.9358 21.8195 30.5748 21.1569L36.1998 15.3236C36.8224 14.678 36.8224 13.6554 36.1998 13.0098L30.5748 7.17646C29.9358 6.51386 28.8807 6.49468 28.2181 7.13361Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: -9 }}
        transition={{ delay: 0.2 }}
        className="absolute left-12 top-4 -rotate-[8deg] z-10"
      >
        <Image
          className="h-14 w-14"
          src="/images/alternates-1.png"
          alt="alternates"
          width={164}
          height={144}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotate: 9 }}
        transition={{ delay: 0.2 }}
        className="absolute right-12 bottom-4 rotate-[8deg] z-10"
      >
        <Image
          className="h-14 w-14"
          src="/images/alternates-2.png"
          alt="alternates"
          width={164}
          height={144}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute"
      >
        <svg
          className="text-[#5B2A33]"
          width="164"
          height="144"
          viewBox="0 0 164 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.3"
            cx="82"
            cy="72"
            r="43.75"
            stroke="currentColor"
            stroke-width="0.5"
          />
          <circle
            opacity="0.15"
            cx="82"
            cy="72"
            r="59.75"
            stroke="currentColor"
            stroke-width="0.5"
          />
          <circle
            opacity="0.05"
            cx="82"
            cy="72"
            r="81.75"
            stroke="currentColor"
            stroke-width="0.5"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
