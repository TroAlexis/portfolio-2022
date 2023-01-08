import styles from "./index.module.scss";
import { FC } from "react";
import { Button } from "components/Button";

export const ActionButtons: FC = () => {
  return (
    <ul className={styles.buttons}>
      <li>
        <Button>Resume</Button>
      </li>
      <li>
        <Button>Contact me</Button>
      </li>
    </ul>
  );
};
