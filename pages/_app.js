import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-300 min-h-screen dark:bg-slate-800 text-zinc-800 dark:text-white scroll-smooth">
      <Navbar />
      <div className="pb-2 md:pb-20">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
