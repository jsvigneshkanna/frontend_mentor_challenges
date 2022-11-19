import Head from "next/head";
import Header from "../components/Header";
import showcaseDetails from "../data/showcaseDetails.json";
import ShowcaseCard from "../components/ShowcaseCard";

export default function Home() {
  return (
    <div>
      <Header />
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
