"use client"
import SplitText from "./SplitText";
import BlurText from "./BlurText";

export default function Hero() {

  
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

  return (
    <section className="relative md:pt-32  overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
      
      {/* Decoración fondo */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/20 rounded-full blur-2xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        
      
        <p className="uppercase tracking-widest text-sm text-blue-300 mb-4">
          Plataforma Educativa Profesional en Tecnología
        </p>

        <h1>
          <BlurText
            text="Formación sólida para tu futuro profesional"
            delay={250}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl flex items-center justify-center md:text-6xl font-bold leading-tight mb-6"
          />

        </h1>

        <SplitText
          text="Cursos estructurados, contenidos actualizados y certificación institucional 
          para impulsar tu carrera en informática."
          className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-22"
          delay={250}
          duration={1.25}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.4}
          rootMargin="100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          
        />
      
      </div>
    </section>
  );
}