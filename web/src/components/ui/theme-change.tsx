'use client'

import { useTheme } from "next-themes";
import Icon from "../icon";

const themes = ["light", "dark", "dim", "sepia","coffee"];

export function ThemeChange() {
    const { theme, setTheme } = useTheme();

    function cycleTheme() {
        const currentIndex = themes.indexOf(theme || "light");
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        setTheme(nextTheme);
    }

    return (
        <button
            type="button"
            onClick={cycleTheme}
            className="inline-flex items-center justify-center border p-2 hover:bg-muted rounded-md border-muted/70 cursor-pointer relative"
        >
            <Icon
                icon="sun"
                size={20}
                className="text-secondary-foreground transition-all 
                    rotate-0 scale-100 
                    dark:-rotate-90 dark:scale-0
                    dim:-rotate-90 dim:scale-0
                    sepia:-rotate-90 sepia:scale-0"
            />
            <Icon
                icon="moon"
                size={20}
                className="text-secondary-foreground absolute transition-all 
                    rotate-90 scale-0 
                    dark:rotate-0 dark:scale-100
                    dim:rotate-0 dim:scale-100
                    sepia:-rotate-90 sepia:scale-0"
            />
        </button>
    );
}
