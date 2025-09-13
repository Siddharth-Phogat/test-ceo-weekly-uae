// Utility function for conditional classNames (cn)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Tailwind Merge utility (using tailwind-merge package)
import { twMerge } from 'tailwind-merge';

export function twm(...classes) {
  return twMerge(cn(...classes));
}
