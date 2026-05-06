import ShinyText from "./ShinyText";

export default function LearningOutcomes() {
  const outcomes = [
    {
      title: "Resolución de tareas reales",
      desc: "Capacidad para aplicar conocimientos en situaciones concretas del día a día."
    },
    {
      title: "Manejo de herramientas digitales",
      desc: "Uso eficiente de herramientas clave en entornos personales y profesionales."
    },
    {
      title: "Pensamiento estructurado",
      desc: "Organización lógica para abordar problemas y desarrollar soluciones."
    },
    {
      title: "Autonomía en el aprendizaje",
      desc: "Habilidad para continuar aprendiendo y adaptarse a nuevas herramientas."
    },
    {
      title: "Adaptación al entorno laboral",
      desc: "Preparación para desenvolverse en contextos de trabajo reales."
    },
    {
      title: "Mejora en la productividad",
      desc: "Optimización del tiempo y los procesos mediante el uso de tecnología."
    }
  ];

  return (
    <section id="resultados" className="py-31">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-600 mb-4">
            <ShinyText
              text="Qué vas a lograr"
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
            Desarrollo de habilidades aplicables en distintos contextos, con un enfoque práctico y orientado a resultados.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="border-2 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-3">
                {item.title}
              </h3>

              <p className=" leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}