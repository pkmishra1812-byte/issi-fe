// src/components/layout/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/*
        Mobile:  pt-[56px]  → single row header height (h-14)
        Desktop: pt-[144px] → top row (96px) + bottom nav row (48px)
      */}
      <main className="flex-1 pt-[56px] lg:pt-[144px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}