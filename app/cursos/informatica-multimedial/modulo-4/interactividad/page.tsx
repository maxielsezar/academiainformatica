export default function InteractividadPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Interactividad
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La interactividad es la capacidad de un sistema digital de permitir
          que el usuario participe activamente, tomando decisiones y generando
          respuestas dentro de una aplicación, página web o programa.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la interactividad?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A diferencia de los medios tradicionales, donde el usuario solo
          recibe información, la interactividad permite que la persona
          interactúe con el contenido, eligiendo opciones, respondiendo
          preguntas o manipulando elementos en pantalla.
        </p>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de interactividad
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Juegos:</strong> el usuario toma decisiones y controla acciones.</li>
          <li><strong>Formularios:</strong> ingreso de datos y respuestas.</li>
          <li><strong>Aplicaciones móviles:</strong> interacción mediante botones y gestos.</li>
          <li><strong>Páginas web:</strong> navegación, clics y contenido dinámico.</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la interactividad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La interactividad mejora la experiencia del usuario, lo hace
          protagonista del proceso y facilita el aprendizaje. Además,
          aumenta el interés y la participación en contenidos digitales.
        </p>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Pensá en un juego o aplicación que uses y explicá qué tipo de
            interacciones permite.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Diseñá un pequeño ejercicio interactivo (puede ser una encuesta
            o preguntas con opciones).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Explicá por qué la interactividad mejora el aprendizaje en
            entornos digitales.
          </div>

        </div>
      </section>

    </div>
  );
}