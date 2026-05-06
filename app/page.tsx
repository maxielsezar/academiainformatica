import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CursosSection from "./components/CursosSection";
import RealExamplesSection from "./components/RealExamplesSection";
import DifferentialSection from "./components/DifferentialSection";
import ValueSection from "./components/ValueSection";
import LearningOutcomes from "./components/LearningOutcomes";
import CTASection from "./components/CTASection";
import AboutSection from "./components/AboutSection";
import FeaturedContent from "./components/FeaturedContent";
import Footer from "./components/Footer";
import "./globals.css"; 

export default function Home() {
  return (
    <>
      <Navbar main={true}/>
      <Hero />   
      <CursosSection /> 
      <ValueSection />       
      <LearningOutcomes />       
      <DifferentialSection />    
      <RealExamplesSection />    
      <FeaturedContent />        
      <AboutSection />           
      <CTASection />             
      <Footer />
    </>
  );
}