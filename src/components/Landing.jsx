import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
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

const Landing = ({reportImages}) => {
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
        <ReportPage reportImages={reportImages}/>
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
