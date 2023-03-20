/**
 * import react packages
 */
import React, { useEffect, useState } from 'react';


/**
 * import next packages
 */
import { GetStaticPropsContext } from 'next';

/**
 * import packages
 */
import axios from 'axios';
import { useTranslations } from 'next-intl';

/**
 * import project files
 */
import FeatureSection from '@components/common/FeatureSection';
import FloatingBar from '@components/common/FloatingBar';
import GradientBackground from '@components/common/GradientBackground';
import HomeNavbar from '@components/common/HomeNavbar';
import HomeSection from '@components/common/HomeSection';
import HomeLayout from "@components/layouts/HomeLayout";

const Home = ({ apiData }: any) => {
  const t = useTranslations();

  return (
    <div className="isolate bg-white">
      <main>
        <GradientBackground
          id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
          x1="1155.49"
          x2="-78.208"
          y1=".177"
          y2="474.645"
          wrapperClassName="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          svgClassName="relative left-[calc(50%-11rem)] h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
        />
        <HomeNavbar t={t} />
        <HomeSection t={t} />
        <FeatureSection t={t} />
      </main>
    </div>
  );
}

Home.layout = HomeLayout;

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
}