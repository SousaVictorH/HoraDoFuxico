import { ThemeType } from '../../styles/types';

export type AppWrapperProps = {
  theme?: ThemeType;
  children: React.ReactNode;
  onLayout: () => void;
};

export type ThemeProviderProps = {
  theme?: ThemeType;
  children: React.ReactNode;
};
