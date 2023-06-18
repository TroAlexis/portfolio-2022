import clsx from "clsx";
import styles from "components/main/ActionButtons/index.module.scss";
import { Button } from "components/ui/Button";
import { Text } from "components/ui/Text";
import { ComponentProps, FC } from "react";

type Props = ComponentProps<"ul"> & {
  onContactClick?: () => void;
};

export const ActionButtons: FC<Props> = ({
  className,
  onContactClick,
  ...props
}) => {
  const classes = clsx(className, styles.buttons);
  return (
    <ul className={classes} {...props}>
      <li>
        <Button
          className={styles.link}
          outline
          as={"a"}
          href={"/resume.pdf"}
          target={"_blank"}
        >
          <Text as={"span"}>Resume</Text>
        </Button>
      </li>
      <li>
        <Button onClick={onContactClick}>
          <Text as={"span"}>Contact me</Text>
        </Button>
      </li>
    </ul>
  );
};
