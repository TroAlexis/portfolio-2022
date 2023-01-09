import React from "react";
import { Text, TextProps, TextTag } from "components/ui/Text";
import { visueltPro } from "@/config/next/fonts";

type Props<T extends TextTag> = TextProps<T>;

export const Heading = <T extends TextTag>({ ...props }: Props<T>) => {
  return <Text weight={700} family={visueltPro} {...props} />;
};
