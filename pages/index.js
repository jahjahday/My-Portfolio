import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agwa Anthony Uche | Front-End Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building exceptional digital experiences."
        />
        <meta name="author" content="Agwa Anthony Uche" />
        <meta name="robots" content="index, follow, noarchive" />
        <meta
          name="keywords"
          content="html, css, bootstrap, javascript, react.js, next.js, tailwind, graphql, developer, programmer, frontend, front-end, web"
        />
        <link rel="icon" href="/AAU.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
