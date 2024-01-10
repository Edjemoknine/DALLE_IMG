"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="flex gap-2">
      <button
        className="border rounded-md p-0.5"
        onClick={() => setTheme("light")}
      >
        <Sun />
      </button>
      <button
        className="border rounded-md p-0.5"
        onClick={() => setTheme("dark")}
      >
        <Moon />
      </button>
    </nav>
  );
}
