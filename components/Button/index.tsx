import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
  clsx,
} from "@mantine/core";
import { FC } from "react";

import styles from "./index.module.scss";

export type ButtonProps = BaseButtonProps;

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  const modifications = {
    [styles["is-outline"]]: props.variant === "outline",
  };

  const classes = clsx(className, styles.button, modifications);

  return (
    <BaseButton className={classes} px={"md"} py={"sm"} mih={40} {...props} />
  );
};
