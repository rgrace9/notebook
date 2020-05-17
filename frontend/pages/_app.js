import App, { Container } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/withData";

class MyApp extends App {
  render() {
    const { apollo, Component, pageProps } = this.props;

    console.log(this.props);
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );

    // console.log({ pageProps });
    // return (
    //   <Container>
    //     <ApolloProvider client={apollo}>
    //       <Page>
    //         <Component {...pageProps} />
    //       </Page>
    //     </ApolloProvider>
    //   </Container>
    // );
  }
}

export default withData(MyApp);

// import Page from "../components/Page";
// import { ApolloProvider } from "@apollo/react-hooks";

// export default (props) => {
//   const { apollo, Component, pageProps } = props;

//   console.log({ Component });
//   return (
//     <Page>
//       <Component {...pageProps} />
//     </Page>
//   );
//   // return (
//   //   <ApolloProvider client={apollo}>
//   //     <Page>
//   //       <Component {...pageProps} />
//   //     </Page>
//   //   </ApolloProvider>
//   // );
// };
