import Head from "next/head";
import Header from "../components/Header";
import showcaseDetails from "../data/showcaseDetails.json";
import ShowcaseCard from "../components/ShowcaseCard";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Index Banner */}
      <div
        className="bg-violet-50 dark:bg-sky-900 text-slate-900 dark:text-slate-100 w-4/5 md:w-3/5  flex
       flex-col justify-center items-center mx-auto my-6 rounded-lg shadow-md shadow-purple-300 dark:shadow-blue-700 py-8 
       gap-2 font-semibold px-4 text-center"
      >
        <h1 className="font-black text-lg text-blue-800 dark:text-orange-400">
          Vignesh Kanna&apos;s Frontend mentor challenges Solutions{" "}
        </h1>
        <p>Here I will be showcasing my frontend skills by building many component and layout desings 🎨🖌️</p>
        <p>If you like my works, please give a star to github repo</p>
        <div className="mt-8 md:mt-4">
          <iframe
            class="text-center"
            src="https://ghbtns.com/github-btn.html?user=jsvigneshkanna&repo=frontend_mentor_challenges&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="120"
            height="30"
            title="GitHub"
            className=" rounded-lg "
          ></iframe>
        </div>
      </div>
      <section className="px-4 md:px-8 lg:px-72 flex gap-10 md:gap-6 my-5 flex-wrap justify-around items-center lg:justify-center">
        {showcaseDetails.map((showcase, index) => {
          return (
            <ShowcaseCard
              key={index}
              name={showcase.name}
              image={showcase.image}
              href={showcase.href}
              brief={showcase.brief}
            />
          );
        })}
      </section>
    </div>
  );
}
