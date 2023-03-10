import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NorthIcon from '@mui/icons-material/North';
import 'animate.css/animate.min.css';
import Layout from './Layout';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const AboutPage = dynamic(() => import('@/pages/About'), {
  suspense: true,
});
const ReportPage = dynamic(() => import('@/pages/Report'), {
  suspense: true,
});
const DonatePage = dynamic(() => import('@/pages/Donate'), {
  suspense: true,
});
const ContactsPage = dynamic(() => import('@/pages/Contacts'), {
  suspense: true,
});

const Landing = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Layout href='about'>
        <AboutPage />
      </Layout>
      <Layout href='report'>
        <ReportPage />
      </Layout>
      <Layout href='donate'>
        <DonatePage />
      </Layout>
      <Layout href='contacts'>
        <ContactsPage />
      </Layout>
      <Footer />
      <div
        style={{
          position: 'fixed',
          right: 15,
          bottom: 25,
        }}
      >
        <div
          style={{
            height: '50px',
            width: '50px',
            borderRadius: '50px',
            background: `linear-gradient(to top, #34422f ${scrollTop}%,#9ECDBB ${scrollTop}%)`,
            boxShadow: '0 0 10px 5px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={handleScrollToTop}
        >
          <NorthIcon sx={{ color: '#fff', width: '20px' }} />
        </div>
      </div>
    </Suspense>
  );
};

export default Landing;
