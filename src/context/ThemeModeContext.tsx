import { createContext, useState, useEffect } from "react";

interface propType {
  children: any;
}

type AppContextType = {};

export const ThemeModeContext = createContext<AppContextType | any>(null);

export const ThemeModeProvider = (props: propType) => {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeModeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeModeContext.Provider>
  );
};
