import { ActionButtons } from "components/main/ActionButtons";
import { HeaderLinks } from "components/main/Header/components/Links";
import styles from "components/main/Header/index.module.scss";
import { Container } from "components/ui/Container";
import { Logo } from "components/ui/Logo";
import { FC } from "react";

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
