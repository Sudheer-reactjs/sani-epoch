// utils/useBodyId.ts
import { usePathname } from "next/navigation";

export function useBodyId() {
  const pathname = usePathname();
  return pathname === "/" || pathname === "/get-started"
    ? "black-background"
    : "white-background";
}
