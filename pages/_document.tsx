import { addBasePath } from "next/dist/client/add-base-path";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang={"en"}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={addBasePath("/apple-touch-icon.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={addBasePath("/favicon-32x32.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={addBasePath("/favicon-16x16.png")}
        />
        <link rel="manifest" href={addBasePath("/site.webmanifest")} />
        <link
          rel="mask-icon"
          href={addBasePath("/safari-pinned-tab.svg")}
          color="#1f1f1f"
        />
        <meta name="msapplication-TileColor" content="#1f1f1f" />
        <meta name="theme-color" content="#1f1f1f" />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a09c5c1be49e4305a267965bbe318cf3"}'
          strategy="afterInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
