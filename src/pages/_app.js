import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import '@/styles/globals.css';
import { AOSInit } from "../components/Shared/Loader/Aos";
export default function App({ Component, pageProps }) {
  return (
    <>
      <AOSInit/>
      <Navbar />
      <Component {...pageProps}/>
      <Footer />
    </>
  );
}
