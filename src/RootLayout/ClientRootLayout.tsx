// RootLayout/ClientRootLayout.tsx
"use client"; // Indicates this component is rendered on the client-side

import { useBodyId } from "@/utlis/useBodyClass"; 
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const bodyId = useBodyId();

  useEffect(() => {
    document.body.id = bodyId;
    return () => {
      document.body.id = "";
    };
  }, [bodyId]);

  return (
    <>
        {children}
    </>
  );
}
