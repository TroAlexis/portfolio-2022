import { MantineThemeOverride } from "@mantine/core";
import { roboto } from "@/config/next/fonts";
import { mantineComponents } from "@/config/mantine/components";
import { mantineSpacing } from "@/config/mantine/spacing";

export const mantineTheme: MantineThemeOverride = {
  colorScheme: "dark",
  fontFamily: roboto.style.fontFamily,
  components: mantineComponents,
  spacing: mantineSpacing,
};
