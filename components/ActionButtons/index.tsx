import styles from "./index.module.scss";
import { ComponentProps, FC } from "react";
import { Button } from "components/ui/Button";
import clsx from "clsx";

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
