
import CartProvider from "@/Providers/CartProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
        <CartProvider>
        <NextNProgress />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        </CartProvider>
    </>
  );
}
