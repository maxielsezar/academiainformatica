import ShinyText from "./ShinyText";

export default function RealExamplesSection() {
  const benefits = [
    {
      title: "Certificación oficial",
      desc: "Formaciones con certificación institucional emitida por el Ministerio de Educación de la provincia."
    },
    {
      title: "Certificación por carga horaria",
      desc: "El certificado de finalización se otorga en función de la cantidad de horas cursadas, validando el recorrido formativo."
    },
    {
      title: "Validez profesional",
      desc: "Los conocimientos adquiridos cuentan con respaldo formal para su aplicación en entornos laborales."
    },
    {
      title: "Preparación para el trabajo",
      desc: "Enfoque orientado al desarrollo de habilidades aplicables en contextos reales."
    }
  ];

  return (
    <section id="certificacion" className="py-31">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-600 mb-4">
            <ShinyText
              text="Formación con respaldo institucional"
              speed={2}
              delay={0}
              color="#3c36fe"
              shineColor="#36d7f4"
              spread={120}
              direction="left"
            />
          </h2>

          <p className="max-w-2xl mx-auto">
            Estudiar en un centro de formación profesional permite acceder a contenidos estructurados, 
            con certificación oficial y orientación al desarrollo laboral.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-8 border-2 rounded-2xl shadow-sm hover:shadow-lg transition"
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

        {/* REFUERZO INSTITUCIONAL */}
        <p className="text-center mt-16 max-w-2xl mx-auto">
          La certificación refleja el proceso formativo realizado, considerando la carga horaria 
          y los contenidos desarrollados a lo largo del curso.
        </p>

      </div>
    </section>
  );
}