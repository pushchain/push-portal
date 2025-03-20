"use client";
import { useEffect } from "react";

export function RedirectFix() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.search[1] === "/") {
        const decoded = window.location.search
          .slice(1)
          .split("&")
          .map((s) => s.replace(/~and~/g, "&"))
          .join("?");
        window.history.replaceState(
          null,
          null,
          window.location.pathname.slice(0, -1) +
            decoded +
            window.location.hash,
        );
      }
    }
  }, []);

  return null;
}
