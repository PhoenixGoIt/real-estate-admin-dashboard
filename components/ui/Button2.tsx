import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  width?: string | "full" | "auto";
  style?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({
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

export default Button;
