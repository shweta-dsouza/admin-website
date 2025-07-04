import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./palette";

export const palette = (mode) => ({
    ...(mode === "dark") ? darkTheme : lightTheme
});

export const themeSettings = (mode) => {
    const colors = palette(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: colors.blue[600],
                },
                secondary: {
                    main: colors.accent[600],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: colors.blue[50],
                },
            } : {
                // palette values for light mode
            primary: {
              main: colors.blue[100],
            },
            secondary: {
              main: colors.accent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.blue[50],
            },
            })
        },
        typography: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Montserrat", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Montserrat", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Montserrat", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Montserrat", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Montserrat", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Montserrat", "sans-serif"].join(","),
                fontSize: 14
            }
        }
    }
}

export const ColorContext = createContext({
    toggleThemeMode: () => {}
});

export const useThemeMode = () => {
    const [mode, setMode] = useState("dark");

    const themeMode = useMemo(() => ({
        toggleThemeMode: () => setMode((prev) => (prev === "dark") ? "light" : "dark")
    }), []);

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, themeMode];
}