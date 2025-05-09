import Navbar from "@/src/components/navbar";
import { ThemeProvider } from "@/src/contexts/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar/>
      <Component {...pageProps}/>
    </ThemeProvider>
);
}
