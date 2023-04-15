import clsx from "clsx";
import { HeroImage } from "components/main/Hero/components/Image";
import { HeroSocials } from "components/main/Hero/components/Socials";
import { HeroText } from "components/main/Hero/components/Text";
import { useHeroHeight } from "components/main/Hero/hooks/useHeroHeight";
import styles from "components/main/Hero/index.module.scss";
import { Container } from "components/ui/Container";
import React, { ComponentProps, FC } from "react";

type Props = ComponentProps<"section">;

export const Hero: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.hero);

  useHeroHeight();

  return (
    <section className={classes} {...props}>
      <Container className={styles.container}>
        <HeroText className={styles.text} />
        <HeroImage className={styles.image} />
        <HeroSocials className={styles.socials} />
      </Container>
    </section>
  );
};
