import { MantineThemeOverride } from "@mantine/core";
import { roboto } from "@/config/next/fonts";
import { mantineComponents } from "@/config/mantine/components";

export const mantineTheme: MantineThemeOverride = {
  colorScheme: "dark",
  fontFamily: roboto.style.fontFamily,
  components: mantineComponents,
};
