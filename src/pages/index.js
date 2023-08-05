import Head from 'next/head';
import Landing from './Landing';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <>
      <Head>
        <title>Тигролови</title>
        <meta
          name='description'
          content='Благодійний фонд точкової допомоги армії Україні'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/png' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link
          href='https://fonts.cdnfonts.com/css/amazing-grotesk'
          rel='stylesheet'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: `
            {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Тигролови",
    "item": "https://www.tygrolovy.com.ua"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Про нас",
    "item": "https://www.tygrolovy.com.ua/#about"  
  },{
    "@type": "ListItem", 
    "position": 3, 
    "name": "Звітність",
    "item": "https://www.tygrolovy.com.ua/#report"  
  },{
    "@type": "ListItem", 
    "position": 4, 
    "name": "Підтримати",
    "item": "https://www.tygrolovy.com.ua/#donate"  
  },{
    "@type": "ListItem", 
    "position": 5, 
    "name": "Контакти",
    "item": "https://www.tygrolovy.com.ua/#contacts"  
  }]
}
    `,
          }}
        ></script>
      </Head>
      <main>
        <Landing />
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
