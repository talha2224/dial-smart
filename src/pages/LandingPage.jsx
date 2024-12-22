import React, { Suspense, lazy } from 'react';

// Lazy load components
const Navbar = lazy(() => import('../components/landingpage/Navbar'));
const Hero = lazy(() => import('../components/landingpage/Hero'));
const Help = lazy(() => import('../components/landingpage/Help'));
const Performance = lazy(() => import('../components/landingpage/Performance'));
const Work = lazy(() => import('../components/landingpage/Work'));
const Pricing = lazy(() => import('../components/landingpage/Pricing'));
const UseCase = lazy(() => import('../components/landingpage/UseCase'));
const Presence = lazy(() => import('../components/landingpage/Presence'));
const Footer = lazy(() => import('../components/landingpage/Footer'));

const LandingPage = () => {
  return (
    <>
      <div className="px-4 sm:px-12">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Hero />
          <Help />
          <Performance />
          <Work />
          <Pricing />
          <UseCase />
          <Presence />
        </Suspense>
      </div>
      
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default LandingPage;
