import { createContext } from 'react';
import { theme } from './theme';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { children } = props;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
