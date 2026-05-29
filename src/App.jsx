import Header from './components/Header';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Hero from './components/sections/Hero';
import OutsourcedIT from './components/sections/OutsourcedIT';
import HowWeManage from './components/sections/HowWeManage';
import Operations from './components/sections/Operations';
import ClientPartnership from './components/sections/ClientPartnership';
import ServicePlans from './components/sections/ServicePlans';
import StrategicPartnership from './components/sections/StrategicPartnership';
import Established from './components/sections/Established';
import FinalCTA from './components/sections/FinalCTA';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OutsourcedIT />
        <HowWeManage />
        <Operations />
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
