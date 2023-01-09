import { FC } from "react";
import { Logo } from "components/ui/Logo";
import { HeaderLinks } from "components/Header/components/Links";
import { ActionButtons } from "components/ActionButtons";

import styles from "./index.module.scss";
import { Container } from "components/ui/Container";

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.links}>
          <HeaderLinks />
        </div>
        <ActionButtons className={styles.buttons} />
      </Container>
    </header>
  );
};
