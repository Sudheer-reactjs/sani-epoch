// utils/useBodyId.ts
import { usePathname } from "next/navigation"; // Directly import usePathname

// Function to return a specific body ID based on the pathname
export function useBodyId() {
  const pathname = usePathname();
  return ["/", "/get-started", "/community", "/login"].includes(pathname)
    ? "black-background"
    : "white-background";
}

