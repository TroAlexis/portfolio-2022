import { MantineThemeOverride } from "@mantine/core";
import { roboto } from "@/config/next/fonts";
import { mantineComponents } from "@/config/mantine/components";
import { mantineSpacing } from "@/config/mantine/spacing";
import { mantineFontSizes } from "@/config/mantine/font-sizes";

export const mantineTheme: MantineThemeOverride = {
  colorScheme: "dark",
  fontFamily: roboto.style.fontFamily,
  components: mantineComponents,
  spacing: mantineSpacing,
  fontSizes: mantineFontSizes,
};
