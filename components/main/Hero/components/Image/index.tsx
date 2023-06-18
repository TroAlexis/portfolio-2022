import clsx from "clsx";
import styles from "components/main/Hero/components/Image/index.module.scss";
import PersonalPhoto from "images/hero-image.png";
import Image from "next-image-export-optimizer";
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
          alt={"Man smiling looking slightly right"}
          width={450}
          height={540}
          priority
        />
      </div>
    </div>
  );
};
