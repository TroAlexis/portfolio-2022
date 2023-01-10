import styles from "./index.module.scss";
import React, { ComponentProps, FC } from "react";
import clsx from "clsx";
import Image from "next/image";
import PersonalPhoto from "images/hero-image.png";

interface Props extends ComponentProps<"div"> {}

export const HeroImage: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.wrapper);
  return (
    <div className={classes} {...props}>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={PersonalPhoto}
          alt={"Photo of me looking into brighter future"}
          width={450}
          quality={100}
        />
      </div>
    </div>
  );
};
