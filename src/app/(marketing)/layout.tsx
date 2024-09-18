// src/app/(marketing)/layout.tsx
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../lib/amplifyConfig";

// Marketing layout component
export default function MarketingLayout({
  children,
}: Readonly<{
  children: ReactNode;  
}>) {
  return (
    <>
      {/* Header specific to marketing pages */}
      <Header />
      {/* Main content for marketing pages */}
        {children}
      {/* Footer component */}
      <Footer />
    </>
  );
}
