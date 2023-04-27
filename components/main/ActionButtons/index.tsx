import clsx from "clsx";
import styles from "components/main/ActionButtons/index.module.scss";
import { Button } from "components/ui/Button";
import { Text } from "components/ui/Text";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<"ul">;

export const ActionButtons: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.buttons);
  return (
    <ul className={classes} {...props}>
      <li>
        <Button outline>
          <Text as={"span"}>Resume</Text>
        </Button>
      </li>
      <li>
        <Button>
          <Text as={"span"}>Contact me</Text>
        </Button>
      </li>
    </ul>
  );
};
