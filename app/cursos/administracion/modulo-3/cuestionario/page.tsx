export default function CuestionarioGoogleFormsPage() {
  return (
    <div className="space-y-14">
      {/* Título e introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividad: Crear y compartir un cuestionario
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta actividad vas a poner en práctica los conocimientos
          adquiridos sobre Google Forms. Cada estudiante deberá crear un
          cuestionario de 20 preguntas y compartirlo con todos sus compañeros
          para que puedan responderlo.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El objetivo es aprender a diseñar formularios, seleccionar distintos
          tipos de preguntas, configurar respuestas y distribuir un formulario
          digital.
        </p>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna
        </h2>

        <div className="border p-6 rounded-xl max-w-4xl">
          <p className="leading-relaxed">
            Crear un cuestionario utilizando Google Forms compuesto por
            exactamente <strong>20 preguntas</strong>.
          </p>

          <p className="leading-relaxed mt-4">
            El cuestionario deberá estar relacionado con alguno de los temas
            trabajados durante el curso y deberá ser diseñado de manera clara,
            ordenada y comprensible.
          </p>

          <p className="leading-relaxed mt-4">
            Una vez finalizado, deberás compartirlo con todos tus compañeros
            para que puedan responderlo.
          </p>
        </div>
      </section>

      {/* Requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos del cuestionario
        </h2>

        <div className="border p-6 rounded-xl max-w-4xl">
          <ul className="list-disc list-inside space-y-3">
            <li>Debe contener exactamente 20 preguntas.</li>
            <li>Debe tener un título relacionado con el tema elegido.</li>
            <li>Debe incluir una breve descripción.</li>
            <li>
              Las preguntas deben estar redactadas de forma clara y precisa.
            </li>
            <li>
              Se deben utilizar diferentes tipos de preguntas disponibles en
              Google Forms.
            </li>
            <li>
              Al menos algunas preguntas deberán tener respuestas obligatorias.
            </li>
            <li>
              Se debe revisar el cuestionario antes de compartirlo.
            </li>
            <li>
              El formulario debe poder ser respondido por los compañeros.
            </li>
          </ul>
        </div>
      </section>

      {/* Tipos de preguntas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de preguntas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El cuestionario deberá combinar diferentes tipos de preguntas para
          demostrar el manejo de las herramientas de Google Forms.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-5xl">
          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Opción múltiple
            </h3>
            <p className="leading-relaxed">
              Presentar varias alternativas y permitir seleccionar una sola
              respuesta.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Casillas de verificación
            </h3>
            <p className="leading-relaxed">
              Permitir seleccionar más de una respuesta.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Lista desplegable
            </h3>
            <p className="leading-relaxed">
              Presentar diferentes opciones dentro de una lista.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 mb-3">
              Respuesta corta
            </h3>
            <p className="leading-relaxed">
              Permitir que el compañero escriba una respuesta breve.
            </p>
          </div>
        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización sugerida
        </h2>

        <div className="border p-6 rounded-xl max-w-4xl">
          <p className="leading-relaxed mb-4">
            Para organizar mejor el trabajo, se recomienda dividir las 20
            preguntas en diferentes categorías.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Preguntas 1 a 5: conceptos generales.</li>
            <li>Preguntas 6 a 10: herramientas y aplicaciones.</li>
            <li>Preguntas 11 a 15: situaciones prácticas.</li>
            <li>Preguntas 16 a 20: aplicación de conocimientos.</li>
          </ul>

          <p className="leading-relaxed mt-4">
            Esta organización es solamente una guía. Cada estudiante puede
            elegir la estructura que considere más adecuada.
          </p>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Procedimiento
        </h2>

        <div className="border p-6 rounded-xl max-w-4xl">
          <ol className="list-decimal list-inside space-y-3">
            <li>Elegir el tema del cuestionario.</li>
            <li>Pensar y redactar las 20 preguntas.</li>
            <li>Ingresar a Google Forms.</li>
            <li>Crear un formulario nuevo.</li>
            <li>Agregar el título y la descripción.</li>
            <li>Cargar las 20 preguntas.</li>
            <li>Seleccionar el tipo de respuesta apropiado.</li>
            <li>Configurar las preguntas obligatorias.</li>
            <li>Revisar la redacción y ortografía.</li>
            <li>Probar el formulario antes de compartirlo.</li>
            <li>Obtener el enlace para responder.</li>
            <li>Compartir el enlace con todos los compañeros.</li>
          </ol>
        </div>
      </section>

      {/* Compartir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Compartir el cuestionario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez terminado el formulario, deberás obtener el enlace para
          responderlo y compartirlo con todos los integrantes del curso.
        </p>

        <div className="border p-6 rounded-xl mt-6 max-w-4xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Al compartirlo deberás:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Comprobar que el enlace funcione correctamente.</li>
            <li>Enviar el enlace al grupo de compañeros.</li>
            <li>Indicar claramente de qué trata el cuestionario.</li>
            <li>Solicitar que todos los compañeros lo respondan.</li>
            <li>Establecer una fecha límite para responderlo.</li>
          </ul>
        </div>
      </section>

      {/* Análisis de respuestas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Revisar las respuestas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Después de compartir el cuestionario, deberás ingresar nuevamente a
          Google Forms para revisar las respuestas recibidas.
        </p>

        <div className="border p-6 rounded-xl mt-6 max-w-4xl">
          <h3 className="font-bold text-blue-900 mb-4">
            Observar especialmente:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Cantidad de compañeros que respondieron.</li>
            <li>Preguntas con mayor cantidad de respuestas.</li>
            <li>Preguntas que generaron dificultades.</li>
            <li>Resultados generales obtenidos.</li>
            <li>Información que pueda resultar útil para mejorar el formulario.</li>
          </ul>
        </div>
      </section>

      {/* Entrega */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entrega de la actividad
        </h2>

        <div className="border p-6 rounded-xl max-w-4xl">
          <p className="leading-relaxed mb-4">
            Para finalizar la actividad, cada estudiante deberá presentar:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre del cuestionario.</li>
            <li>Tema seleccionado.</li>
            <li>Las 20 preguntas redactadas.</li>
            <li>Enlace al formulario.</li>
            <li>Cantidad de compañeros que respondieron.</li>
            <li>Una breve conclusión sobre los resultados obtenidos.</li>
          </ul>
           
        </div>
      </section>

    </div>
  );
}