import ShinyText from "./ShinyText";

export default function AboutSection() {
  return (
    <section className="py-31">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-600 mb-4">
            <ShinyText
              text="Sobre este proyecto"
              speed={2}
              delay={0}
              color="#3c36fe"
              shineColor="#36d7f4"
              spread={120}
              direction="left"
            />
          </h2>

          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
        </div>

        {/* CONTENT */}
        <div className="max-w-3xl mx-auto text-center space-y-6">

          <p className=" leading-relaxed">
            Este proyecto nace con el objetivo de ofrecer formación accesible, 
            clara y orientada a la aplicación práctica en distintos contextos.
          </p>

          <p className=" leading-relaxed">
            El enfoque está puesto en simplificar el aprendizaje, evitando 
            contenidos innecesariamente complejos y priorizando la comprensión 
            progresiva de cada tema.
          </p>

          <p className=" leading-relaxed">
            Cada contenido está diseñado para que pueda ser aplicado en 
            situaciones reales, facilitando el desarrollo de habilidades útiles 
            tanto a nivel personal como profesional.
          </p>

        </div>

      </div>
    </section>
  );
}