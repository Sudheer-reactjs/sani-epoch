// src/app/(auth)/layout.tsx
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import "../../lib/amplifyConfig";
// Auth layout component
export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {/* Main content for auth pages */}
      {children} 
      {/* Footer component for auth pages */}
      <Footer />
    </>
  );
}
