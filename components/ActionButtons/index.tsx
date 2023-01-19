import clsx from "clsx";
import { Button } from "components/ui/Button";
import { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

type Props = ComponentProps<"ul">;

export const ActionButtons: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.buttons);
  return (
    <ul className={classes}>
      <li>
        <Button outline>Resume</Button>
      </li>
      <li>
        <Button>Contact me</Button>
      </li>
    </ul>
  );
};
