import {ThemeType} from '../../styles/types';

export type AppWrapperProps = {
  theme?: ThemeType;
  children: React.ReactNode;
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
};

export type ThemeProviderProps = {
  theme?: ThemeType;
  children: React.ReactNode;
};
