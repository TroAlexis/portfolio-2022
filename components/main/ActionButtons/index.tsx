import clsx from "clsx";
import styles from "components/main/ActionButtons/index.module.scss";
import { Button } from "components/ui/Button";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<"ul">;

export const ActionButtons: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.buttons);
  return (
    <ul className={classes} {...props}>
      <li>
        <Button outline>Resume</Button>
      </li>
      <li>
        <Button>Contact me</Button>
      </li>
    </ul>
  );
};
