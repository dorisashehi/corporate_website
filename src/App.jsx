import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Hero from './components/sections/Hero';
import OutsourcedIT from './components/sections/OutsourcedIT';
import ParallaxBreak from './components/sections/ParallaxBreak';
import HowWeManage from './components/sections/HowWeManage';
import Operations from './components/sections/Operations';
import ClientPartnership from './components/sections/ClientPartnership';
import ServicePlans from './components/sections/ServicePlans';
import StrategicPartnership from './components/sections/StrategicPartnership';
import Established from './components/sections/Established';
import FinalCTA from './components/sections/FinalCTA';
import Contact from './components/sections/Contact';
import { images } from './utils/images';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OutsourcedIT />
        <ParallaxBreak
          image={images.technologyGlobal}
          quote="Technology that stays reliable, secure, and aligned with your business."
          subline="Proactive management—not reactive firefighting."
        />
        <HowWeManage />
        <Operations />
        <ParallaxBreak
          image={images.officeMeeting}
          quote="A long-term operational partner for your entire technology environment."
          subline="Operate • Improve • Plan"
        />
        <ClientPartnership />
        <ServicePlans />
        <StrategicPartnership />
        <Established />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
