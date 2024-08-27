"use client";
import { useBodyId } from "@/utlis/useBodyClass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";


export default function ClientRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyId = useBodyId();

  useEffect(() => {
    document.body.id = bodyId;
    return () => {
      document.body.id = "";
    };
  }, [bodyId]);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <div className="noise-effect hide"></div>
    </>
  );
}
