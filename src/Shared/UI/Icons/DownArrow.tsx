import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

export const DownArrow = ({ className, onClick }: Props) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="23"
      height="38"
      viewBox="0 0 23 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 1L11.5 37"
        stroke="#EEEEEE"
        stroke-opacity="0.75"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 26.5L11.5 37L1 26.5"
        stroke="#EEEEEE"
        stroke-opacity="0.75"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
