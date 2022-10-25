import Head from 'next/head';
import Script from 'next/script';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Works from '../components/Works/Works';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <title>Web Experiences Crafted With Coding Powers</title>
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width' />
        <meta name='description' content='Personal Porfolio with projects' />
        <meta property='og:title' content='Web Experiences Crafted With Coding Powers' />
        <meta property='og:description' content='Personal Porfolio with projects' />
        <meta property='og:image' content='https://i.imgur.com/kXH2WFZ.jpg' />
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
      <Navbar />
      <main>
        <Header />
        <section id='works'>
          <Works />
        </section>
        <section id='about'>
          <About />
        </section>
      </main>
      <Footer />
    </>
  );
}
