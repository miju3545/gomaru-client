import '@emotion/react';
import { theme } from './theme';

type ThemeTpye = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends ThemeTpye {
    colors: {
      white: string;
      black: string;
      n: { [key: number]: string };
      purple: { [key: number]: string };
      red: { [key: string]: string };
      yellow: { [key: string]: string };
      green: { [key: string]: string };
      blue: { [key: string]: string };
    };
    fonts: {
      buttonM_16: SerializedStyles;
      buttonS_14: SerializedStyles;
      subtextL16_Emp: SerializedStyles;
      subtextL_16: SerializedStyles;
      subtextM_15_Emp: SerializedStyles;
      subtextM_15: SerializedStyles;
      subtextS_14_Emp: SerializedStyles;
      subtextS_14: SerializedStyles;
    };
  }
}
