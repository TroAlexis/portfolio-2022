import { Roboto } from "@next/font/google";
import localFont from "@next/font/local";

const getPathToFont = (font: string) => `../../assets/fonts/${font}.woff2`;

export const roboto = Roboto({
  weight: ["400", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const visueltPro = localFont({
  src: [
    {
      path: "../../assets/fonts/VisueltPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/VisueltPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/VisueltPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/VisueltPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-visuelt-pro",
});
