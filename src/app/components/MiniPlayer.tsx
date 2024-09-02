"use client";

export function MiniPlayer() {
  return (
    <div className="flex flex-col gap-[6px] w-[326px] h-[208px] rounded-[20px] bg-surface-card-primary pb-3 shadow-shadow-primary">
      <div className="flex flex-row px-4 pt-4 pb-[6px] gap-1">
        <span className="flex rounded-full w-full h-1 bg-text-success" />
        <span className="flex rounded-full w-full h-1 bg-text-secondary" />
        <span className="flex rounded-full w-full h-1 bg-surface-background-secondary" />
        <span className="flex rounded-full w-full h-1 bg-surface-background-secondary" />
      </div>
      <div className="flex items-center justify-between px-4">
        <div className="flex flex-row gap-1 items-center">
          <h3 className="text-base font-semibold text-text-primary">
            Seated Incline Bicep Curl
          </h3>
          <span>
            <svg
              className="text-text-highlight"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9ZM9.75 12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12L8.25 8.25C8.25 7.83579 8.58579 7.5 9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25L9.75 12ZM9.75 6C9.75 6.41421 9.41421 6.75 9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25C9.41421 5.25 9.75 5.58579 9.75 6Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>
        <span>
          <svg
            className="text-text-secondary"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 11.6667C10.4583 11.6667 10.8508 11.5033 11.1775 11.1767C11.5042 10.85 11.6672 10.4578 11.6667 10C11.6667 9.54168 11.5033 9.14918 11.1767 8.82251C10.85 8.49584 10.4578 8.33279 10 8.33334C9.54167 8.33334 9.14917 8.49668 8.8225 8.82335C8.49584 9.15001 8.33278 9.54223 8.33334 10C8.33334 10.4583 8.49667 10.8508 8.82334 11.1775C9.15 11.5042 9.54222 11.6672 10 11.6667Z"
              fill="currentColor"
            />
            <path
              d="M15.8333 11.6667C16.2917 11.6667 16.6842 11.5033 17.0108 11.1767C17.3375 10.85 17.5006 10.4578 17.5 10C17.5 9.54168 17.3367 9.14918 17.01 8.82251C16.6833 8.49584 16.2911 8.33279 15.8333 8.33334C15.375 8.33334 14.9825 8.49668 14.6558 8.82335C14.3292 9.15001 14.1661 9.54223 14.1667 10C14.1667 10.4583 14.33 10.8508 14.6567 11.1775C14.9833 11.5042 15.3756 11.6672 15.8333 11.6667Z"
              fill="currentColor"
            />
            <path
              d="M4.16667 11.6667C4.625 11.6667 5.0175 11.5033 5.34417 11.1767C5.67083 10.85 5.83389 10.4578 5.83333 10C5.83333 9.54168 5.67 9.14918 5.34333 8.82251C5.01667 8.49584 4.62445 8.33279 4.16667 8.33334C3.70833 8.33334 3.31583 8.49668 2.98917 8.82335C2.6625 9.15001 2.49945 9.54223 2.5 10C2.5 10.4583 2.66333 10.8508 2.99 11.1775C3.31667 11.5042 3.70889 11.6672 4.16667 11.6667Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      <div className="flex px-4 -mt-[6px]">
        <p className="text-[11px] text-text-secondary">
          You should be leaning back slightly which means as the arms are
          straight down they will fall slightly behind.
        </p>
      </div>
      <div className="flex px-4 h-full items-center justify-center">
        <div className="flex w-full h-11 rounded-full bg-surface-card-accent/10 border border-text-highlight">
          <div className="flex gap-1 w-full h-full text-text-primary font-semibold items-center justify-center border-r border-text-highlight">
            <h2 className="text-2xl text-text-primary font-semibold">15</h2>
            <span className="flex flex-col items-center -mt-[2px]">
              <p className="text-text-primary font-semibold text-sm">reps</p>
              <p className="text-text-primary/40 text-xs font-semibold -mt-[2px]">
                /side
              </p>
            </span>
          </div>
          <div className="flex gap-1 w-full h-full text-text-primary font-semibold items-center justify-center">
            <h2 className="text-2xl text-text-primary font-semibold">15</h2>
            <span className="flex flex-col items-center -mt-[2px]">
              <p className="text-text-primary font-semibold text-sm">reps</p>
              <p className="text-text-primary/40 text-xs font-semibold -mt-[2px]">
                /side
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex px-4 gap-3 items-center">
        <button className="flex flex-shrink-0 w-9 h-9 rounded-full bg-surface-background-primary items-center justify-center text-text-primary hover:bg-surface-background-secondary transition-all active:scale-95">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.78033 3.21967C6.07322 3.51256 6.07322 3.98744 5.78033 4.28033L4.06066 6H12C14.4853 6 16.5 8.01472 16.5 10.5C16.5 12.9853 14.4853 15 12 15H8.25C7.83579 15 7.5 14.6642 7.5 14.25C7.5 13.8358 7.83579 13.5 8.25 13.5H12C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5H4.06066L5.78033 9.21967C6.07322 9.51256 6.07322 9.98744 5.78033 10.2803C5.48744 10.5732 5.01256 10.5732 4.71967 10.2803L1.71967 7.28033C1.42678 6.98744 1.42678 6.51256 1.71967 6.21967L4.71967 3.21967C5.01256 2.92678 5.48744 2.92678 5.78033 3.21967Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <div className="flex flex-col w-full">
          <p className="text-text-secondary font-semibold text-[10px]">
            Up Next:
          </p>
          <h3 className="text-text-primary font-semibold text-xs">
            Incline Front Raise
          </h3>
        </div>
        <button className="flex flex-shrink-0 w-11 h-11 rounded-full bg-surface-card-accent items-center justify-center text-text-tertiary hover:bg-text-pressed transition-all active:scale-95">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.8993 6.78687C19.4363 6.24991 19.4363 5.37931 18.8993 4.84232C18.3624 4.30534 17.4918 4.30532 16.9548 4.84228L8.20391 13.5928L4.6389 10.0278C4.10193 9.49079 3.23132 9.49079 2.69435 10.0278C2.15738 10.5647 2.15738 11.4353 2.69435 11.9723L7.23162 16.5096C7.76859 17.0465 8.63917 17.0465 9.17615 16.5096L18.8993 6.78687Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button className="flex flex-shrink-0 w-9 h-9 rounded-full bg-surface-background-primary items-center justify-center text-text-primary hover:bg-surface-background-secondary transition-all active:scale-95">
          <p className="text-text-primary font-semibold text-[10px]">Skip</p>
        </button>
      </div>
    </div>
  );
}
