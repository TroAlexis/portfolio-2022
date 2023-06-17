import { ReactNode } from "react";

type Period = {
  text: string;
  date: Date;
};

export interface TimelinePoint {
  title: string;
  period: [Period, Period];
  description: ReactNode[];
  label: string;
}
