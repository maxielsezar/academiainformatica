import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CursosSection from "./components/CursosSection";
import Footer from "./components/Footer";
import "./globals.css"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CursosSection />
      <Footer />
    </>
  );
}