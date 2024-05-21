import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isEqual(obj1: any, obj2: any) {
  // Check if both arguments are objects
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return obj1 === obj2;
  }

  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is different
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Compare the values of each key
  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    // Recursively compare nested objects
    const areObjectsEqual = isEqual(val1, val2);

    if (!areObjectsEqual) {
      return false;
    }
  }

  return true;
}