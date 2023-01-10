import styles from "./index.module.scss";
import React, { ComponentProps, FC } from "react";
import { Container } from "components/ui/Container";
import clsx from "clsx";
import { HeroSocials } from "components/Hero/components/Socials";
import { HeroText } from "components/Hero/components/Text";

type Props = ComponentProps<"section">;

export const Hero: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.hero);

  return (
    <section className={classes} {...props}>
      <Container className={styles.container}>
        <HeroText className={styles.text} />
        <HeroSocials className={styles.socials} />
      </Container>
    </section>
  );
};
