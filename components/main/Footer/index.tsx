import clsx from "clsx";
import { FooterLinkList } from "components/main/Footer/components/LinkList";
import styles from "components/main/Footer/index.module.scss";
import { Container } from "components/ui/Container";
import { Text } from "components/ui/Text";
import React, { ComponentProps, FC } from "react";

interface Props extends ComponentProps<"footer"> {}

export const Footer: FC<Props> = ({ className, ...props }) => {
  const classes = clsx(className, styles.wrapper);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes} {...props}>
      <Container className={styles.container}>
        <FooterLinkList />
      </Container>
      <Container className={styles.copyright}>
        <Text as={"span"} size={"2xs"}>
          &#169; {currentYear} Alex Troshin
        </Text>
      </Container>
    </footer>
  );
};
