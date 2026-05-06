import ShinyText from "./ShinyText";

export default function DifferentialSection() {
  const points = [
    {
      title: "Aplicación desde el inicio",
      desc: "El aprendizaje se enfoca en la práctica desde los primeros contenidos."
    },
    {
      title: "Contenido estructurado",
      desc: "Organización clara que permite avanzar de forma progresiva y sin confusión."
    },
    {
      title: "Orientación a resultados",
      desc: "Cada etapa está pensada para generar habilidades concretas y aplicables."
    },
    {
      title: "Enfoque actual",
      desc: "Contenidos alineados con las necesidades del entorno digital actual."
    }
  ];

  return (
    <section id="enfoque" className="py-31">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-600 mb-4">
            <ShinyText
              text="Por qué elegir esta formación"
              speed={2}
              delay={0}
              color="#3c36fe"
              shineColor="#36d7f4"
              spread={120}
              direction="left"
            />
          </h2>

          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>

          <p className="max-w-2xl mx-auto">
            Un enfoque educativo diseñado para diferenciarse por su claridad, aplicabilidad y orientación al mundo real.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {points.map((item, index) => (
            <div
              key={index}
              className="p-8 border-3 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {item.title}
              </h3>

              <p className="leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}