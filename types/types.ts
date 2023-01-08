import { ElementType } from "react";

export type PolymorphicComponentProps<T extends ElementType> = {
  as?: T;
};
