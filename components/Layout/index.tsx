import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { FC, PropsWithChildren } from "react";

import styles from "./index.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </>
  );
};
