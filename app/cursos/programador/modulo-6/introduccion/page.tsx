export default function IntroduccionPage() {
  return (
    <div className="space-y-14">
      
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a la Documentación y Diseño de Sistemas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El desarrollo de una aplicación no consiste únicamente en escribir
          código. Antes, durante y después de la programación es necesario
          analizar el problema que se desea resolver, identificar las
          necesidades de los usuarios, diseñar la estructura del sistema y
          documentar su funcionamiento.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En proyectos pequeños es posible que una sola persona recuerde cómo
          funciona todo el sistema. Sin embargo, cuando una aplicación crece o
          varias personas trabajan en el mismo proyecto, resulta fundamental
          contar con documentación clara y organizada.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante documentar un sistema?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La documentación permite registrar información importante sobre un
          sistema de software. Gracias a ella es posible comprender qué
          problema resuelve la aplicación, cuáles son sus funciones, cómo está
          organizada y cómo debe utilizarse.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Una buena documentación permite:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Comprender el funcionamiento del sistema.</li>
            <li>Facilitar el trabajo en equipo.</li>
            <li>Organizar el proceso de desarrollo.</li>
            <li>Detectar necesidades y problemas.</li>
            <li>Facilitar el mantenimiento del software.</li>
            <li>Ayudar a instalar y configurar la aplicación.</li>
            <li>Facilitar la incorporación de nuevos desarrolladores.</li>
            <li>Orientar a los usuarios en la utilización del sistema.</li>
          </ul>
        </div>
      </section>

      {/* Ciclo de desarrollo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El desarrollo de software como un proceso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para crear un sistema profesional es necesario seguir una serie de
          etapas. Aunque existen diferentes metodologías de desarrollo, la
          mayoría de los proyectos incluyen procesos similares.
        </p>

        <div className="space-y-4 max-w-3xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              1. Análisis del problema
            </h3>

            <p>
              Se identifica la necesidad que debe resolver el sistema y se
              analiza el contexto en el que será utilizado.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              2. Relevamiento de requerimientos
            </h3>

            <p>
              Se recopilan y organizan las necesidades de los usuarios y los
              objetivos que debe cumplir la aplicación.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              3. Diseño del sistema
            </h3>

            <p>
              Se define la estructura general de la aplicación, sus
              componentes, datos, procesos y relaciones.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              4. Desarrollo
            </h3>

            <p>
              Se implementa el sistema mediante código, utilizando las
              tecnologías seleccionadas para el proyecto.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              5. Pruebas
            </h3>

            <p>
              Se verifica que las funcionalidades del sistema funcionen
              correctamente y cumplan con los requerimientos establecidos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              6. Instalación y puesta en funcionamiento
            </h3>

            <p>
              El sistema se instala, configura y prepara para ser utilizado por
              los usuarios.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              7. Mantenimiento
            </h3>

            <p>
              Se corrigen errores, se realizan mejoras y se incorporan nuevas
              funcionalidades a medida que el sistema evoluciona.
            </p>
          </div>

        </div>
      </section>

      {/* Documentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la documentación de software?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La documentación de software es el conjunto de documentos,
          especificaciones, diagramas, instrucciones y procedimientos que
          describen un sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Estos documentos pueden estar destinados a diferentes personas.
          Algunos contienen información técnica para programadores y otros
          explican cómo utilizar la aplicación para los usuarios finales.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de documentación
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Documentación técnica
            </h3>

            <p>
              Está destinada principalmente a desarrolladores, programadores,
              administradores de sistemas y personal técnico.
            </p>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Arquitectura del sistema.</li>
              <li>Modelo de datos.</li>
              <li>Diagramas.</li>
              <li>Configuración.</li>
              <li>Instalación.</li>
              <li>Procedimientos técnicos.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Documentación de usuario
            </h3>

            <p>
              Está destinada a las personas que utilizarán el sistema para
              realizar sus tareas.
            </p>

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Manual de usuario.</li>
              <li>Guías paso a paso.</li>
              <li>Explicación de las funciones.</li>
              <li>Ejemplos de uso.</li>
              <li>Preguntas frecuentes.</li>
              <li>Solución de problemas comunes.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Representación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Documentar también significa representar
        </h2>

        <p className="leading-relaxed max-w-3xl">
          No toda la información de un sistema se documenta mediante texto.
          Los diagramas permiten representar visualmente diferentes aspectos
          del software y facilitan la comprensión de estructuras y procesos
          complejos.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Durante este módulo trabajaremos con:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Diagramas de casos de uso.</li>
            <li>Diagramas de contexto.</li>
            <li>Modelos de datos.</li>
            <li>Representaciones de la arquitectura del sistema.</li>
            <li>Diagramas de procesos y procedimientos.</li>
          </ul>
        </div>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nuestro sistema de ventas como caso de estudio
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A lo largo del curso hemos desarrollado progresivamente un sistema
          de ventas utilizando programación orientada a objetos, JavaFX y bases
          de datos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este módulo analizaremos el sistema desde una nueva perspectiva.
          No nos concentraremos únicamente en escribir código, sino en
          comprender y documentar cómo funciona la aplicación.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Documentaremos aspectos como:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>¿Qué problema resuelve el sistema?</li>
            <li>¿Quiénes utilizan la aplicación?</li>
            <li>¿Qué funcionalidades ofrece?</li>
            <li>¿Qué datos necesita almacenar?</li>
            <li>¿Cómo se relacionan sus componentes?</li>
            <li>¿Cómo se instala?</li>
            <li>¿Cómo se prueba?</li>
            <li>¿Cómo debe utilizarse?</li>
          </ul>
        </div>
      </section>

      {/* Idea principal */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La importancia de pensar antes de programar
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las habilidades más importantes de un programador no es
          solamente saber escribir código. También es necesario analizar
          problemas, organizar información, diseñar soluciones y comunicar
          claramente cómo funciona un sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          La documentación forma parte de este proceso. Un sistema bien
          documentado es más fácil de comprender, utilizar, modificar y
          mantener.
        </p>
      </section>

      {/* Próximos temas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos a continuación?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A partir de la siguiente unidad comenzaremos a estudiar cómo se
          obtienen y documentan los requerimientos de un sistema. Aprenderemos
          a identificar qué necesita el usuario y a transformar esas
          necesidades en especificaciones claras para el desarrollo de una
          aplicación.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            En las próximas clases veremos:
          </h3>

          <ol className="list-decimal list-inside space-y-2">
            <li>Especificación de requerimientos.</li>
            <li>Requisitos funcionales y no funcionales.</li>
            <li>Diseño del modelo de datos.</li>
            <li>Arquitectura del sistema.</li>
            <li>Diagramas de casos de uso.</li>
            <li>Diagramas de contexto.</li>
            <li>Procedimientos.</li>
            <li>Instalación y pruebas.</li>
            <li>Documentación técnica.</li>
            <li>Documentación de usuario.</li>
          </ol>
        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La documentación es una parte esencial del desarrollo profesional de
          software. Permite registrar los requerimientos, el diseño, la
          arquitectura, los procedimientos y el funcionamiento de una
          aplicación.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este módulo utilizaremos los conocimientos adquiridos durante el
          curso para documentar el sistema de ventas de manera integral,
          generando información útil tanto para desarrolladores como para los
          usuarios finales.
        </p>
      </section>

    </div>
  );
}