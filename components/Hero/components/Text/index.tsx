import styles from "./index.module.scss";
import React, { ComponentProps, FC } from "react";
import clsx from "clsx";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";

interface Props extends ComponentProps<"div"> {}

export const HeroText: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.text);
  return (
    <div className={classes}>
      <Heading as={"p"} preset={"h1"} className={styles.heading}>
        Hey there! I’m{" "}
        <Text as={"span"} accent size={undefined}>
          Alex Troshin
        </Text>
      </Heading>
      <Heading as={"h1"} preset={"h2"} className={styles.subheading}>
        A passionate software engineer
      </Heading>
      <Text as={"p"} className={styles.description}>
        Creating{" "}
        <Text as={"span"} accent>
          reliable
        </Text>
        , everyway{" "}
        <Text as={"span"} accent>
          responsive
        </Text>{" "}
        web apps
      </Text>
      <Text as={"p"} className={styles.description}>
        and bringing ideas to life with{" "}
        <Text as={"span"} accent>
          enthusiasm
        </Text>
        .
      </Text>
    </div>
  );
};
