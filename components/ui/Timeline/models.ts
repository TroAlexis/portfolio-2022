import { ReactNode } from "react";

export interface TimelinePoint {
  title: string;
  period: [string, string];
  description: ReactNode[];
  label: string;
}
