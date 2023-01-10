import styles from "./index.module.scss";
import React from "react";
import { Text, TextProps, TextTag } from "components/ui/Text";
import { visueltPro } from "@/config/next/fonts";
import clsx from "clsx";
import { headingPresets } from "components/ui/Heading/consts";
import { HeadingTag } from "@/types/dom";

type Props<T extends TextTag> = TextProps<T> & {
  hr?: boolean;
  preset?: HeadingTag;
};

export const Heading = <T extends TextTag>({
  hr,
  preset,
  className,
  ...props
}: Props<T>) => {
  const presetProps = preset ? headingPresets[preset] : {};

  const modifiers = {
    [styles.hr]: hr,
  };

  const classes = clsx(className, modifiers);
  return (
    <Text
      className={classes}
      weight={700}
      family={visueltPro}
      {...presetProps}
      {...props}
    />
  );
};
