import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-slate-300 min-h-screen dark:bg-slate-800 text-zinc-800 dark:text-white">
      <Head>
        <title>Vignesh Kanna | Frontend mentor challenges</title>
        <meta name="description" content="Vignesh Kanna's frontend mentor challenges" />
        <link rel="icon" href="/vercel.svg" />
      </Head>

      <main>
        <Navbar />
      </main>
    </div>
  );
}
