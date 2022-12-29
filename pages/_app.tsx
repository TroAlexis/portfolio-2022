import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Container from "../config/mantine/container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        components: {
          Container,
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
