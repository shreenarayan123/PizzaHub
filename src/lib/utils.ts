import { clsx, type ClassValue } from "clsx"
import { Span } from "next/dist/trace";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const debounce =<T extends (...args: any[]) =>void> (func:Function, delay:number)=>{
  let timeout:NodeJS.Timeout;
  return (...args:Parameters<T>)=>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>func(...args), delay);
  }
}
