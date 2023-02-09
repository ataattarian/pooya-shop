"use client";
import { ReactNode } from "react";
import Navbar from "./navbar";
import { ThemeProvider } from "next-themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { RecoilRoot } from "recoil";
interface LayoutProps {
  children: ReactNode;
}

const client = new QueryClient();

export default function Layout({ children }: LayoutProps) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute="class">
        <QueryClientProvider client={client}>
          <Navbar />
          <main className="max-w-screen-xl mx-auto p-4">
            <main>{children}</main>
          </main>
          <Footer />
          <Sidebar />
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
