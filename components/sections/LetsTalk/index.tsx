import clsx from "clsx";
import { MainSection } from "components/MainSection";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"section"> {}

const section = APP_SECTIONS["lets-talk"];

export const LetsTalkSection: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.section);
  return (
    <MainSection
      section={section}
      heading={"Let's talk!"}
      headingProps={{ className: styles.heading }}
      className={classes}
      {...props}
    >
      <Text>
        I am always open to exciting offers! So feel free to reach out on social
        media or leave a message here via the contact form.
      </Text>
    </MainSection>
  );
};
