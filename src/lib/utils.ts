import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string or Date object into a human-readable string.
 * @param {string|Date} input - a date string or Date object
 * @returns {string} a formatted date string (e.g. "January 1, 2022")
 */
export function formatDate(input: string | Date) {
  const d = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

// export function formatDate(date: string) {
//   return new Date(date).toLocaleDateString("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
// }

export function parseServerActionResponse<T>(response: T): T {
  try {
    if (typeof structuredClone === "function") return structuredClone(response);
  } catch {
    // ignore
  }
  try {
    return JSON.parse(JSON.stringify(response)) as T;
  } catch {
    return response;
  }
}

// export function parseServerActionResponse<T>(response: T) {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//   return JSON.parse(JSON.stringify(response));
// }
