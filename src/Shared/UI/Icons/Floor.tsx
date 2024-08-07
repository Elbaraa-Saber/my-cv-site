import React from "react";

interface Props {
    className?: string;
}
export const FloorIcon = ({className}: Props) => {
  return (
    <svg
      className={className}
      width="348"
      height="24"
      viewBox="0 0 348 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="174"
        cy="12"
        rx="174"
        ry="12"
        fill="black"
        fill-opacity="0.5"
      />
    </svg>
  );
};
