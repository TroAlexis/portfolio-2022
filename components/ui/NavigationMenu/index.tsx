import clsx from "clsx";
import { HeaderLinks } from "components/main/Header/components/Links";
import { BodyScrollLocker } from "components/ui/BodyScrollLocker";
import { Container } from "components/ui/Container";
import React, { ComponentProps, forwardRef, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./index.module.scss";

interface Props extends ComponentProps<"aside"> {
  open?: boolean;
  onClose?: () => unknown;
}

export const NavigationMenu = forwardRef<HTMLElement, Props>(
  ({ className, open, onClose, ...props }, ref) => {
    const classes = clsx(className, styles.wrapper);
    const wrapperRef = useRef<HTMLElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLElement>(null);
    return (
      <aside ref={wrapperRef} {...props} className={classes}>
        <CSSTransition
          in={open}
          timeout={200}
          classNames={"fade"}
          nodeRef={overlayRef}
          mountOnEnter
          unmountOnExit
        >
          <div className={styles.overlay} ref={overlayRef} onClick={onClose} />
        </CSSTransition>
        <CSSTransition
          in={open}
          classNames={"drawer"}
          timeout={200}
          nodeRef={contentRef}
          mountOnEnter
          unmountOnExit
        >
          <nav className={styles.nav} ref={contentRef}>
            <Container className={styles.container}>
              <HeaderLinks onLinkClick={onClose} />
            </Container>
          </nav>
        </CSSTransition>

        {open && <BodyScrollLocker targetRef={wrapperRef} />}
      </aside>
    );
  }
);

NavigationMenu.displayName = "NavigationMenu";
