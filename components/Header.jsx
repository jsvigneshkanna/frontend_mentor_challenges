import Head from "next/head";

const Header = ({
  title = "Frontend Mentor Challenges",
  description = "Vignesh Kanna JS frontend mentor challenges solutions",
}) => {
  return (
    <Head>
      <title>JSVK | {title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/vercel.svg" />
    </Head>
  );
};

export default Header;
