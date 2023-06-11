import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import Layout from "../components/layout/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
