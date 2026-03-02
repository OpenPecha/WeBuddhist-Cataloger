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

export type MultilingualTitle = Record<string, string | undefined>;

export const getFirstAvailableTitle = (
  title: MultilingualTitle | undefined,
): string => {
  return Object.values(title as MultilingualTitle).find((val) => val) || "";
};
