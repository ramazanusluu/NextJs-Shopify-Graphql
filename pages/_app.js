import Layout from "../components/Layout";
import { BasketProvider } from "../contexts/BasketContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BasketProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BasketProvider>
    </>
  );
}

export default MyApp;
