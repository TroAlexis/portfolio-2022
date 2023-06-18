import { ComponentProps, FC } from "react";

export type Social = {
  icon: FC<ComponentProps<"svg">>;
  label?: string;
  link: string;
};
