import { ComponentProps, FC, ReactNode } from "react";

export type Social = {
  icon: FC<ComponentProps<"svg">>;
  label?: ReactNode;
  link: string;
};
