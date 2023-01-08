import { FC } from "react";
import { Logo } from "components/Logo";
import { HeaderLinks } from "components/Header/components/Links";
import { ActionButtons } from "components/ActionButtons";

import styles from "./index.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <div>
        <div>
          <div>
            <Logo />
          </div>
          <div>
            <HeaderLinks />
          </div>
          <div>
            <ActionButtons />
          </div>
        </div>
      </div>
    </header>
  );
};
