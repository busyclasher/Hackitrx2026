import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";

export function Root() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}
