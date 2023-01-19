import LabelArrow from "assets/svg/timeline-label.svg";
import clsx from "clsx";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";
import { TimelinePoint } from "components/ui/Timeline/models";
import React, { ComponentProps, ElementType } from "react";

import { PolymorphicComponentProps } from "@/types/types";

import styles from "./index.module.scss";

type Props<T extends ElementType> = TimelinePoint &
  Omit<ComponentProps<"div">, "title"> &
  PolymorphicComponentProps<T>;

export const TimelineItem = <T extends ElementType>({
  className,
  title,
  period,
  label,
  as,
  description,
  ...props
}: Props<T>) => {
  const Component = as || "div";
  const classes = clsx(className, styles.item);
  const [from, to] = period;
  return (
    <Component className={classes} {...props}>
      <Heading as={"span"} size={"sm"} className={styles.label}>
        <LabelArrow className={styles.arrow} />
        {label}
      </Heading>
      <div className={styles.body}>
        <Heading preset={"h4"} as={"h4"} className={styles.title}>
          {title}
        </Heading>
        <Text size={"xs"} as={"p"} weight={500} className={styles.period}>
          {from} - {to}
        </Text>
        <Text size={"sm"} as={"p"} className={styles.description}>
          {description}
        </Text>
      </div>
    </Component>
  );
};
