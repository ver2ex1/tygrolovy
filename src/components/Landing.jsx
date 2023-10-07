import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import NorthIcon from '@mui/icons-material/North';
import 'animate.css/animate.min.css';
import Layout from './common/Layout';
import dynamic from 'next/dynamic';
import Loading from '@/components/common/Loading';

const HeadPage = dynamic(() => import('@/components/Head'), {
  suspense: true,
});
const AboutPage = dynamic(() => import('@/components/About'), {
  suspense: true,
});
const ReportPage = dynamic(() => import('@/components/Report'), {
  suspense: true,
});
const DonatePage = dynamic(() => import('@/components/Donate'), {
  suspense: true,
});
const ContactsPage = dynamic(() => import('@/components/Contacts'), {
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
      <Layout>
        <HeadPage />
      </Layout>
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
    </Suspense>
  );
};

export default Landing;
