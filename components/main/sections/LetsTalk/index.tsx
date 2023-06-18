import clsx from "clsx";
import { MainSection } from "components/main/MainSection";
import styles from "components/main/sections/LetsTalk/index.module.scss";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

import { APP_SECTIONS } from "@/config/app/sections";

interface Props extends ComponentProps<"section"> {}

const section = APP_SECTIONS["lets-talk"];

export const LetsTalkSection: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.section);
  return (
    <MainSection
      section={section}
      heading={"Let's talk!"}
      headingProps={{ className: styles.heading, as: "h4" }}
      className={classes}
      {...props}
    >
      <Text>
        I am always open to exciting opportunities! So feel free to reach out on
        social media or leave a message here via the contact form.
      </Text>
    </MainSection>
  );
};
