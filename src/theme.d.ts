import { Palette, PaletteColor, PaletteColorOptions, Theme, ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {

  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
  }

  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
    }
  }

  interface Palette {
    custom: Palette['primary'];
  }

  interface PaletteOptions {
    custom?: PaletteOptions['primary'];
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;

}





