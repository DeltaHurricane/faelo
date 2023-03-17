import "@/styles/globals.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Head>
        <title>Create Next App</title>
        <meta name="Faelo" content="Site da Enactus Ufes Vitoria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraBaseProvider>
  );
}
