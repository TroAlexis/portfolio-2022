import { MantineThemeComponents } from "@mantine/styles/lib/theme/types/MantineTheme";

const Container: MantineThemeComponents[string] = {
  defaultProps: {
    size: "lg",
    sizes: {
      lg: 1120,
      md: 800,
      xs: 560,
    },
  },
};

export default Container;
