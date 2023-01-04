import { FC } from "react";
import { Text } from "@mantine/core";
import { visueltPro } from "@/config/next/fonts";

export const Index: FC = () => {
  return (
    <Text ff={visueltPro.style.fontFamily} fz={28} lh={1.42} fw={900} lts={-2}>
      troshin.
    </Text>
  );
};
