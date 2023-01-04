import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "@/config/mantine";
import { Layout } from "components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withCSSVariables theme={mantineTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
