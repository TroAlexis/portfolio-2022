import clsx from "clsx";
import styles from "components/main/Hero/components/Image/index.module.scss";
import PersonalPhoto from "images/hero-image.png";
import Image from "next/image";
import React, { ComponentProps, FC } from "react";

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
          priority
          quality={100}
        />
      </div>
    </div>
  );
};
