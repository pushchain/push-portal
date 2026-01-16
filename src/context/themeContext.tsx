import React, { ReactNode } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { themeDark } from "../config/Themization";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const theme: DefaultTheme = themeDark;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
