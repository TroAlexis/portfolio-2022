import { Text } from "components/ui/Text";
import { FC, ReactNode } from "react";

import styles from "./index.module.scss";

export interface ParagraphsProps {
  items: ReactNode[];
}

export const Paragraphs: FC<ParagraphsProps> = ({ items }) => {
  return (
    <>
      {items.map((paragraph, index) => (
        <Text as={"p"} className={styles.paragraph} key={index}>
          {paragraph}
        </Text>
      ))}
    </>
  );
};
