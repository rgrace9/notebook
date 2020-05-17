import Page from "../components/Page";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/withData";

export default withData((props) => {
  const { apollo, Component, pageProps } = props;

  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
});
