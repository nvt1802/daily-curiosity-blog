import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "About Page - Daily Curiosity",
};

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About Daily Curiosity</h1>
      <p>
        This blog is dedicated to sharing interesting insights about science and
        health care.
      </p>
    </div>
  );
};

export default About;
