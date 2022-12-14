import Head from 'next/head';
import Script from 'next/script';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';
import ToTop from '../components/ToTop';
import { useRef } from 'react';

export default function Home() {
  const scrollToAboutRef = useRef();
  const scrollToProjectsRef = useRef();
  const scrollToSkillsRef = useRef();
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title>{`Andrea's portfolio`}</title>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width' />
        <meta name='description' content='Personal Porfolio with projects' />
        <meta property='og:title' content={`Personal portfolio built with Next JS framework, where I show my projects and describe a little about myself and my passion for web development. The projects are made in React, Next Js, Vanilla JS. They are all concepts but all are live and you can also view my code through my github repositories.`} />
        <meta property='og:description' content='Personal Porfolio with projects' />
        <meta property='og:image' content='https://i.imgur.com/tyKxOHC.jpg' />
        <meta property='og:url' content='https://andreafalzi.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_GB' />
        <link rel='icon' href='/logo.svg' type='image/x-icon' />
      </Head>
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-HH5V09JJQQ' strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HH5V09JJQQ');
        `}
      </Script>
      <Navbar refValues={{ scrollToAboutRef, scrollToProjectsRef, scrollToSkillsRef }} />
      <main>
        <Header refValues={scrollToProjectsRef} />
        <section ref={scrollToAboutRef}>
          <About />
        </section>
        <section ref={scrollToProjectsRef}>
          <Projects />
        </section>
        <section ref={scrollToSkillsRef}>
          <Skills />
        </section>
        <ToTop />
      </main>
      <Footer />
    </>
  );
}
