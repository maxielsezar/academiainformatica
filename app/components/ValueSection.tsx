import ShinyText from "./ShinyText";

export default function ValueSection() {
  const items = [
    {
      title: "Formación práctica",
      desc: "Aprendizaje orientado a la aplicación real de conocimientos en distintos contextos."
    },
    {
      title: "Metodología clara",
      desc: "Contenido estructurado para facilitar la comprensión desde niveles iniciales."
    },
    {
      title: "Enfoque profesional",
      desc: "Desarrollo de habilidades aplicables en entornos laborales actuales."
    },
    {
      title: "Aprendizaje progresivo",
      desc: "Cada contenido está diseñado para avanzar de forma lógica y efectiva."
    }
  ];

  return (
    <section id="metodologia" className="py-31">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-600 mb-4">
            <ShinyText
              text="Cómo vas a aprender"
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
            Un enfoque educativo diseñado para desarrollar competencias reales 
            mediante contenidos claros, prácticos y progresivos.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-2 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
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