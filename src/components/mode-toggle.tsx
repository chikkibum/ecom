import { Moon, Sun } from "lucide-react"
import { Monitor } from "lucide-react";

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  // Order: system -> light -> dark -> system ...
  const nextTheme = theme === "system" ? "light" : theme === "light" ? "dark" : "system";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(nextTheme)}
      title={`Switch theme (current: ${theme})`}
    >
      {/* System theme icon */}
      <Monitor className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "system" ? "" : "hidden"}`} />
      {/* Light theme icon */}
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "light" ? "" : "hidden"}`} />
      {/* Dark theme icon */}
      <Moon className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "" : "hidden"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
