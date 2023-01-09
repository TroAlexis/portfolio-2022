import styles from "./index.module.scss";
import React, { ComponentProps, FC } from "react";
import { Container } from "components/ui/Container";
import clsx from "clsx";
import { Heading } from "components/ui/Heading";
import { Text } from "components/ui/Text";
import { HeroSocials } from "components/Hero/components/Socials";

type Props = ComponentProps<"section">;

export const Hero: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.hero);

  return (
    <section className={classes} {...props}>
      <Container className={styles.container}>
        <div className={styles.text}>
          <Heading as={"p"} size={"3xl"} className={styles.heading}>
            Hey there! I’m{" "}
            <Text as={"span"} accent size={undefined}>
              Alex Troshin
            </Text>
          </Heading>
          <Heading as={"h1"} size={"2xl"} className={styles.subheading}>
            A passionate software engineer
          </Heading>
          <Text as={"p"} className={styles.description}>
            Creating{" "}
            <Text as={"span"} accent>
              reliable
            </Text>
            , everyway{" "}
            <Text as={"span"} accent>
              responsive
            </Text>{" "}
            web apps
          </Text>
          <Text as={"p"} className={styles.description}>
            and bringing ideas to life with{" "}
            <Text as={"span"} accent>
              enthusiasm
            </Text>
            .
          </Text>
        </div>
        <HeroSocials className={styles.socials} />
      </Container>
    </section>
  );
};
