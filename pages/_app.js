import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-300 min-h-screen dark:bg-slate-800 text-zinc-800 dark:text-white px-4 md:px-72">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
