import { TextProps } from "components/ui/Text";

import { HeadingTag } from "@/types/dom";

type PresetProps = Pick<TextProps<HeadingTag>, "size">;

export const headingPresets: Partial<Record<HeadingTag, PresetProps>> = {
  h1: { size: "3xl" },
  h2: { size: "2xl" },
  h3: { size: "xl" },
};
