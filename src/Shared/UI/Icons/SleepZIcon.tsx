import React from "react";

interface Props {
    className?: string;
}

export const SleepZIcon = ({className}: Props) => {
  return (
    <svg
    className={className ? className : ''}
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0919 9.0658C8.14348 9.0658 3.82386 8.70931 1.97068 8.45876C1.73725 8.42719 1.68859 8.12762 1.89514 8.01438L14.2323 1.25087C14.4601 1.12596 14.3714 0.779597 14.1116 0.779597H1.28159"
        stroke="#EEEEEE"
        stroke-width="1.39887"
        stroke-linecap="round"
      />
    </svg>
  );
};
