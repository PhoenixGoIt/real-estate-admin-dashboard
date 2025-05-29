import { cn } from "@/lib/utils/utils";
import React from "react";
import { ButtonSharedProps } from "./@types/ButtonShared.types";



export const ButtonShared: React.FC<ButtonSharedProps> = ({
  onClick,
  title,
  type,
  width,
  style,
  height,
}) => {
  return (
    <div>
      <button
        type={type ? type : "button"}
        className={cn(
          " w-full bg-primary_color text-white rounded-lg font-[400]",
          width === "full"
            ? "w-full"
            : width === "auto"
              ? "w-auto"
              : width
                ? `w-[${width}]`
                : "w-[140px]",
          height ? `h-[${height}]` : "h-[50px]",
          style,
        )}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

