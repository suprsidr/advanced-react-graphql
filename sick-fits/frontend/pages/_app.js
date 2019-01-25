import App, { Container } from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
<<<<<<< HEAD
    if(Component.getInitialProps) {
=======
    if (Component.getInitialProps) {
>>>>>>> 044e418d083d5fb986e5f11af0db96cf496691e7
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
<<<<<<< HEAD
    return (
      <Container>
        <ApolloProvider client={apollo} >
          <Page>
            <Component { ...pageProps }/>
=======

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
>>>>>>> 044e418d083d5fb986e5f11af0db96cf496691e7
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
