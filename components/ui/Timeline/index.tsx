import clsx from "clsx";
import { TimelineItem } from "components/ui/Timeline/Item";
import { TimelinePoint } from "components/ui/Timeline/models";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"ul"> {
  items: TimelinePoint[];
}

export const Timeline: FC<Props> = ({ className, items, ...props }) => {
  const classes = clsx(className, styles.timeline);
  return (
    <ul className={classes}>
      {items.map((item) => (
        <TimelineItem
          as={"li"}
          key={item.title}
          {...item}
          className={styles.item}
        />
      ))}
    </ul>
  );
};
