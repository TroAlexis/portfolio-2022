import { FC } from "react";
import { Flex } from "@mantine/core";
import { Button } from "components/Button";

export const ActionButtons: FC = () => {
  return (
    <Flex align={"center"} gap={"md"}>
      <Button variant={"outline"} size={"xs"} fw={500}>
        Resume
      </Button>
      <Button size={"xs"} fw={500}>
        Contact me
      </Button>
    </Flex>
  );
};
