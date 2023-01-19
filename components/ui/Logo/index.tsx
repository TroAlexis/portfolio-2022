import clsx from "clsx";
import { Link } from "components/ui/Link";
import { ComponentProps, FC } from "react";

import { visueltPro } from "@/config/next/fonts";

import styles from "./index.module.scss";

type Props = Partial<ComponentProps<typeof Link>>;

export const Logo: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.link, visueltPro.className);
  return (
    <Link href={"#"} className={classes} {...props}>
      troshin.
    </Link>
  );
};
