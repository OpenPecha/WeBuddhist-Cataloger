import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFontClass = (language: string) => {
  if (language === "en" || language === "tibphono") {
    return "font-inter text-sm";
  }
  return "font-monlam text-lg ";
};
