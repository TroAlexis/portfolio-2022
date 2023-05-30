import { Footer } from "components/main/Footer";
import { Header } from "components/main/Header";
import styles from "components/main/Layout/index.module.scss";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </>
  );
};
