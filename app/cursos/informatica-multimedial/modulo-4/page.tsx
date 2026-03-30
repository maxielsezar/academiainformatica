export default function Modulo4InicioPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Módulo 4: Multimedia
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          Uso, comprensión y creación de contenidos multimedia en entornos digitales.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿De qué trata este módulo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En este módulo vas a conocer qué es la multimedia, cuáles son sus
          elementos y cómo se utiliza como medio de comunicación. También
          aprenderás sobre la comunicación audiovisual, la interactividad
          y la importancia de los elementos visuales en entornos digitales.
          Estos conocimientos te permitirán comprender y crear contenidos
          digitales más atractivos y efectivos.
        </p>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos que vas a ver
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Concepto de Multimedia</h3>
            Definición de multimedia y sus elementos: texto, imagen, audio, video y animación.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Multimedia como comunicación</h3>
            Uso de la multimedia como un nuevo medio para transmitir información.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Comunicación Audiovisual</h3>
            Diferencias entre comunicación verbal y audiovisual, y su impacto.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Aplicaciones de la Multimedia</h3>
            Uso en educación, publicidad, entretenimiento y redes sociales.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Interactividad</h3>
            Cómo el usuario interactúa con sistemas digitales y contenidos multimedia.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Elementos Visuales</h3>
            Íconos, textos instructivos y señales que guían al usuario.
          </div>

        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Comprender el concepto de multimedia y sus elementos</li>
          <li>Reconocer la multimedia como medio de comunicación</li>
          <li>Analizar la comunicación audiovisual</li>
          <li>Aplicar la multimedia en distintos contextos</li>
          <li>Entender la importancia de la interactividad</li>
          <li>Identificar elementos visuales en entornos digitales</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades que vas a realizar
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            Análisis de ejemplos multimedia en la vida cotidiana.
          </div>

          <div className="border p-6 rounded-xl">
            Evaluación de contenidos audiovisuales.
          </div>

          <div className="border p-6 rounded-xl">
            Creación de propuestas multimedia (educativas o comerciales).
          </div>

          <div className="border p-6 rounded-xl">
            Actividades prácticas sobre interactividad y elementos visuales.
          </div>

        </div>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Este módulo te permitirá comprender cómo funcionan los contenidos
          multimedia y cómo utilizarlos para comunicar ideas de forma clara,
          creativa y efectiva en distintos entornos digitales.
        </div>
      </section>

    </div>
  );
}