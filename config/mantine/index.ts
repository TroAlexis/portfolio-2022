import { MantineThemeOverride } from "@mantine/core";
import { roboto } from "@/config/next/fonts";
import { mantineComponents } from "@/config/mantine/components";
import { mantineSpacing } from "@/config/mantine/spacing";
import { mantineFontSizes } from "@/config/mantine/font-sizes";
import { mantineColors } from "@/config/mantine/colors";

export const mantineTheme: MantineThemeOverride = {
  colorScheme: "dark",
  fontFamily: roboto.style.fontFamily,
  components: mantineComponents,
  spacing: mantineSpacing,
  fontSizes: mantineFontSizes,
  defaultRadius: "md",
  colors: mantineColors,
  primaryColor: "green",
  primaryShade: 5,
};
