"use client";
import { useBodyId } from "@/utlis/useBodyClass"; // Correct path to your utils file
import { usePathname } from "next/navigation"; // Directly import usePathname from next/navigation
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideHeaderRoutes = ["/login", "/signup"];  
  const bodyId = useBodyId();

  useEffect(() => {
    document.body.id = bodyId;
    return () => {
      document.body.id = "";
    };
  }, [bodyId]);

  return (
    <>
      {!hideHeaderRoutes.includes(pathname) && <Header />}
      {children}
      <Footer />
    </>
  );
}
