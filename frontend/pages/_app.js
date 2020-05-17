import App, { Container } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "@apollo/react-hooks";

export default function MyApp(props) {
  const { apollo, Component, pageProps } = this.props;

  console.log({ Component });
  return (
    <Container>
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    </Container>
  );
}

export default MyApp;
