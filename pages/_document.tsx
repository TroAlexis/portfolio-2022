import { createGetInitialProps } from "@mantine/next";
import Document, {
  Head as NextHead,
  Html,
  Main,
  NextScript,
} from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <NextHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
