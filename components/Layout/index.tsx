import styles from "./index.module.scss";
import { FC, PropsWithChildren } from "react";
import { Header } from "components/Header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};
