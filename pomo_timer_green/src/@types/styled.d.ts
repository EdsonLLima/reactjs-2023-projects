import "styled-components";
import { defaulTheme } from "../styles/themes/default";

type ThemeType = typeof defaulTheme;

declare module "style-components" {
  export interface DefaulTheme extends ThemeType {}
}
