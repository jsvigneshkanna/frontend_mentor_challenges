import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-300 min-h-screen dark:bg-slate-800 text-zinc-800 dark:text-white scroll-smooth">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
