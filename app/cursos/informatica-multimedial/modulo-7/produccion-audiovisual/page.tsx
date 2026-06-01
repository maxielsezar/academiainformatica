export default function ProduccionAudiovisualPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Proyecto: Producción Audiovisual
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Como actividad integradora del módulo, los estudiantes deberán realizar
          una producción audiovisual aplicando los conocimientos adquiridos sobre
          edición de imagen, video y sonido.
        </p>
      </section>

      {/* ¿Qué es una producción audiovisual? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una producción audiovisual?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una producción audiovisual es un proyecto que combina imágenes, videos,
          sonidos, música, efectos y narración para comunicar una idea, contar
          una historia o transmitir información a una audiencia.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Las producciones audiovisuales están presentes en documentales,
          publicidades, cortometrajes, videos educativos, contenidos para redes
          sociales y presentaciones multimedia.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo del proyecto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Diseñar y producir un video que combine elementos visuales y sonoros,
          demostrando el uso adecuado de herramientas de edición y producción multimedia.
        </p>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de los grupos
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p>
            El trabajo deberá realizarse en grupos de <strong>2 o 3 integrantes</strong>.
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Cada integrante debe participar en la planificación del proyecto.</li>
            <li>Las tareas pueden dividirse entre grabación, edición y producción.</li>
            <li>Todos los miembros deben colaborar en el resultado final.</li>
          </ul>
        </div>
      </section>

      {/* Temas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Temáticas sugeridas
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Tema educativo</h3>
            Explicar un concepto o procedimiento de interés.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Campaña de concientización</h3>
            Promover hábitos saludables o cuidado del ambiente.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Entrevista</h3>
            Realizar preguntas a una persona sobre un tema específico.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Historia o relato</h3>
            Crear una narración audiovisual original.
          </div>

        </div>
      </section>

      {/* Requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos del proyecto
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">

          El video deberá incluir:

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Duración mínima de 3 minutos y máxima de 5 minutos.</li>
            <li>Título inicial.</li>
            <li>Imágenes o videos propios o libres de derechos.</li>
            <li>Narración o diálogos grabados por los integrantes.</li>
            <li>Música o efectos de sonido adecuados.</li>
            <li>Edición de video con transiciones o cortes.</li>
            <li>Créditos finales con los nombres de los integrantes.</li>
          </ul>

        </div>
      </section>

      {/* Etapas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etapas de trabajo
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>1. Planificación:</strong> elegir el tema y definir objetivos.
          </p>

          <p>
            <strong>2. Guion:</strong> organizar las escenas y el contenido.
          </p>

          <p>
            <strong>3. Producción:</strong> grabar imágenes, videos y audios.
          </p>

          <p>
            <strong>4. Edición:</strong> montar el material utilizando herramientas digitales.
          </p>

          <p>
            <strong>5. Exportación:</strong> generar el video final en formato MP4.
          </p>

        </div>
      </section>

      {/* Evaluación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de evaluación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Contenido:</strong> claridad y relevancia del tema elegido.
          </p>

          <p>
            <strong>Calidad audiovisual:</strong> imagen, sonido y edición.
          </p>

          <p>
            <strong>Creatividad:</strong> originalidad en la presentación.
          </p>

          <p>
            <strong>Trabajo en equipo:</strong> participación de todos los integrantes.
          </p>

          <p>
            <strong>Cumplimiento de requisitos:</strong> respeto de la consigna y tiempos establecidos.
          </p>

        </div>
      </section>

      {/* Entrega */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entrega del proyecto
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl max-w-3xl">
          El trabajo deberá entregarse en formato MP4 junto con una breve
          descripción del proyecto y los nombres de todos los integrantes del grupo.
        </div>
      </section>

    </div>
  );
}