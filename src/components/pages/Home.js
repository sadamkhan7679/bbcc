import React from 'react';
import '../../App.css';
import loadable from '@loadable/component';
import LazyLoad from 'react-lazyload';
// import Navbar from '../Navbar';
// import HeroSection from '../HeroSection';
// import Highlights from '../highlights';
// import Traits from '../traits';
// import Attributes from '../attributes';
// import Charity from '../charity';
// import Roadmap from '../roadmap';
// import Team from '../team';
// import Pitcrew from '../pitCrew';
// import Footer from '../footer';
// import Faq from '../faq';

const Navbar = loadable(() => import('../Navbar'));
const HeroSection = loadable(() => import('../HeroSection'));
const Highlights = loadable(() => import('../highlights'));
const Traits = loadable(() => import('../traits'));
const Attributes = loadable(() => import('../attributes'));
const Charity = loadable(() => import('../charity'));
const Roadmap = loadable(() => import('../roadmap'));
const Team = loadable(() => import('../team'));
const Pitcrew = loadable(() => import('../pitCrew'));
const Footer = loadable(() => import('../footer'));
const Faq = loadable(() => import('../faq'));

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/*<Highlights />*/}
      {/*<Traits />*/}
      {/*<Attributes />*/}
      {/*<Charity />*/}
      {/*<Roadmap />*/}
      {/*<Team />*/}
      {/*<Pitcrew />*/}
      {/*<Faq />*/}
      {/*<Footer />*/}


        <LazyLoad height={200} offset={100} once>
          <Highlights />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once>
          <Traits />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once>
          <Attributes />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once>
          <Charity />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once>
          <Roadmap />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once>
          <Team />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once>
          <Pitcrew />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once>
          <Faq />
        </LazyLoad>
        <LazyLoad height={200} offset={100} once>
            <Footer />
        </LazyLoad>





    {/*  <Attributes />*/}
    {/*  <Charity />*/}
    {/*  <Roadmap />*/}
    {/*  <Team />*/}
    {/*  <Pitcrew />*/}
    {/*   <Faq />*/}
    {/*<Footer />  */}
      
      
     
    </>
  );
}

export default Home;







