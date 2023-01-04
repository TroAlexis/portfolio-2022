import { FC } from "react";
import { Container, Grid } from "@mantine/core";
import { Index } from "components/Logo";
import { HeaderLinks } from "components/Header/components/Links";
import { ActionButtons } from "components/ActionButtons";

import styles from "./index.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <Container>
        <Grid align={"center"}>
          <Grid.Col span={"auto"}>
            <Index />
          </Grid.Col>
          <Grid.Col span={6}>
            <HeaderLinks />
          </Grid.Col>
          <Grid.Col span={"auto"}>
            <ActionButtons />
          </Grid.Col>
        </Grid>
      </Container>
    </header>
  );
};
