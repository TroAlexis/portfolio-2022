import clsx from "clsx";
import styles from "components/main/Header/components/Link/index.module.scss";
import { Link } from "components/ui/Link";
import { ComponentProps, FC } from "react";

export type HeaderLinkProps = ComponentProps<typeof Link>;

export const HeaderLink: FC<HeaderLinkProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = clsx(className, styles.link);

  return (
    <Link className={classes} {...props}>
      <span>{children}</span>
    </Link>
  );
};
