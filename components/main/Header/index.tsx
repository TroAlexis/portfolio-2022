import clsx from "clsx";
import { ActionButtons } from "components/main/ActionButtons";
import { HeaderLinks } from "components/main/Header/components/Links";
import styles from "components/main/Header/index.module.scss";
import { useScrollPosition } from "components/main/Hero/hooks/useScrollPosition";
import { ContactMeModal } from "components/modal/ContactMeModal";
import Burger from "components/ui/Burger";
import { Container } from "components/ui/Container";
import { Logo } from "components/ui/Logo";
import { NavigationMenu } from "components/ui/NavigationMenu";
import { Portal } from "components/ui/Portal";
import { FC, useState } from "react";

import { APP_SELECTOR } from "@/constants/app";

export const Header: FC = () => {
  const [scrollY] = useScrollPosition();
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const toggleNavigation = () => {
    setIsNavigationOpen((value) => !value);
  };

  const closeNavigation = () => {
    setIsNavigationOpen(false);
  };

  const classes = clsx(styles.wrapper, {
    [styles.open]: isNavigationOpen,
    [styles.transparent]: scrollY === 0,
  });

  return (
    <header className={classes}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.links}>
          <HeaderLinks />
        </div>
        <ActionButtons
          onContactClick={openContactForm}
          className={styles.buttons}
        />

        <Burger
          className={styles.burger}
          open={isNavigationOpen}
          onClick={toggleNavigation}
        />
      </Container>

      <Portal selector={APP_SELECTOR}>
        <NavigationMenu
          open={isNavigationOpen}
          onClose={closeNavigation}
          className={styles.menu}
        />
      </Portal>

      <ContactMeModal
        isOpen={isContactFormOpen}
        onRequestClose={closeContactForm}
      />
    </header>
  );
};
