import clsx from "clsx";
import { HeroImage } from "components/Hero/components/Image";
import { HeroSocials } from "components/Hero/components/Socials";
import { HeroText } from "components/Hero/components/Text";
import { useHeroHeight } from "components/Hero/hooks/useHeroHeight";
import { Container } from "components/ui/Container";
import React, { ComponentProps, FC } from "react";

import styles from "./index.module.scss";

type Props = ComponentProps<"section">;

export const Hero: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.hero);

  useHeroHeight();

  return (
    <section className={classes} {...props}>
      <Container className={styles.container}>
        <HeroText className={styles.text} />
        <HeroSocials className={styles.socials} />
        <HeroImage className={styles.image} />
      </Container>
    </section>
  );
};
