import "@/styles/globals.css";
import "../styles/login/login.css"; 
import "@/styles/card/cards.css"; 
import "@/styles/dashboard/dashboard.css"; // si lo creas

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
