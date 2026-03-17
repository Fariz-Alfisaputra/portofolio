import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Back-compat for earlier prototype code
export function cx(...classes: Array<string | false | null | undefined>) {
  return cn(classes);
}
