export default function CurriculumPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Currículum Vitae
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El Currículum Vitae, conocido habitualmente como CV, es un documento
          que presenta de manera organizada la información personal, formación,
          experiencia laboral y capacidades de una persona.
          <br /><br />
          Su objetivo principal es presentar el perfil de una persona ante una
          empresa u organización y facilitar la evaluación de sus conocimientos,
          habilidades y experiencia para una oportunidad laboral.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Currículum Vitae?
        </h2>

        <div className="border p-6 rounded-xl">
          El Currículum Vitae es un documento utilizado para comunicar de forma
          clara y ordenada los principales antecedentes académicos y laborales
          de una persona.
          <br /><br />
          Debe presentar la información más relevante de manera breve,
          organizada y profesional.
        </div>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo del Currículum
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El CV permite que un empleador conozca rápidamente el perfil de una
          persona y determine si sus conocimientos y experiencia se relacionan
          con el puesto ofrecido.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Presentar información personal y profesional.</li>
            <li>Mostrar la formación académica.</li>
            <li>Describir la experiencia laboral.</li>
            <li>Destacar conocimientos y habilidades.</li>
            <li>Presentar cursos y capacitaciones.</li>
            <li>Facilitar el contacto con el postulante.</li>
          </ul>
        </div>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de un Currículum
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un currículum debe organizarse en diferentes secciones para que la
          información pueda ser localizada fácilmente.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ol className="list-decimal list-inside space-y-3">
            <li>Datos personales y de contacto.</li>
            <li>Perfil profesional.</li>
            <li>Formación académica.</li>
            <li>Experiencia laboral.</li>
            <li>Cursos y capacitaciones.</li>
            <li>Conocimientos y habilidades.</li>
            <li>Idiomas.</li>
            <li>Referencias, cuando corresponda.</li>
          </ol>
        </div>
      </section>

      {/* Datos personales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos Personales y de Contacto
        </h2>

        <div className="border p-6 rounded-xl">
          Esta sección permite identificar al postulante y proporciona los
          medios necesarios para establecer contacto.
          <br /><br />

          Puede incluir:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre y apellido.</li>
            <li>Teléfono.</li>
            <li>Correo electrónico.</li>
            <li>Localidad o ciudad.</li>
            <li>Enlace a LinkedIn o portfolio, cuando corresponda.</li>
          </ul>
        </div>
      </section>

      {/* Perfil */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Perfil Profesional
        </h2>

        <div className="border p-6 rounded-xl">
          El perfil profesional es una breve presentación que resume los
          principales conocimientos, capacidades y objetivos laborales de la
          persona.
          <br /><br />

          Debe ser claro y estar relacionado con el puesto al que se desea
          postular.
        </div>
      </section>

      {/* Ejemplo perfil */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Perfil Profesional
        </h2>

        <div className="border p-6 rounded-xl">
          Persona responsable y organizada, con conocimientos en herramientas
          informáticas y experiencia en tareas administrativas. Capacidad para
          trabajar en equipo, organizar documentación y utilizar procesadores
          de texto, planillas de cálculo y herramientas digitales.
        </div>
      </section>

      {/* Formación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formación Académica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En esta sección se presentan los estudios realizados por la persona,
          comenzando generalmente por la formación más reciente.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Nivel secundario.</li>
            <li>Estudios terciarios.</li>
            <li>Estudios universitarios.</li>
            <li>Formación profesional.</li>
            <li>Certificaciones relacionadas con el puesto.</li>
          </ul>
        </div>
      </section>

      {/* Experiencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Experiencia Laboral
        </h2>

        <div className="border p-6 rounded-xl">
          La experiencia laboral presenta los trabajos realizados anteriormente
          y permite mostrar las tareas y responsabilidades desarrolladas.
          <br /><br />

          Para cada experiencia se puede indicar:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre de la empresa u organización.</li>
            <li>Puesto ocupado.</li>
            <li>Período de trabajo.</li>
            <li>Principales tareas realizadas.</li>
            <li>Responsabilidades.</li>
          </ul>
        </div>
      </section>

      {/* Cursos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cursos y Capacitaciones
        </h2>

        <div className="border p-6 rounded-xl">
          Los cursos y capacitaciones permiten demostrar conocimientos
          complementarios relacionados con el puesto laboral.
          <br /><br />

          Es recomendable incluir especialmente aquellos estudios que aporten
          conocimientos útiles para la actividad profesional.
        </div>
      </section>

      {/* Habilidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conocimientos y Habilidades
        </h2>

        <div className="border p-6 rounded-xl">
          Esta sección permite destacar las capacidades que pueden ser
          relevantes para el puesto.
          <br /><br />

          Algunos ejemplos son:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Manejo de Microsoft Word.</li>
            <li>Manejo de planillas de cálculo.</li>
            <li>Uso de correo electrónico.</li>
            <li>Organización de archivos digitales.</li>
            <li>Atención al público.</li>
            <li>Trabajo en equipo.</li>
            <li>Comunicación efectiva.</li>
            <li>Organización y responsabilidad.</li>
          </ul>
        </div>
      </section>

      {/* Idiomas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Idiomas
        </h2>

        <div className="border p-6 rounded-xl">
          Cuando una persona posee conocimientos de otros idiomas puede
          incorporarlos al currículum indicando su nivel de dominio.
          <br /><br />

          Por ejemplo:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Inglés – Nivel básico.</li>
            <li>Inglés – Nivel intermedio.</li>
            <li>Inglés – Nivel avanzado.</li>
          </ul>
        </div>
      </section>

      {/* Referencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Referencias
        </h2>

        <div className="border p-6 rounded-xl">
          Las referencias pueden utilizarse para proporcionar datos de personas
          que puedan brindar información sobre la experiencia o desempeño
          laboral del postulante.
          <br /><br />
          Cuando se incluyen, es importante contar previamente con la
          autorización de las personas mencionadas.
        </div>
      </section>

      {/* Diseño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diseño y Presentación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La presentación visual del CV es importante porque facilita la
          lectura y permite transmitir una imagen profesional.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar una fuente clara y legible.</li>
            <li>Organizar la información por secciones.</li>
            <li>Utilizar títulos y subtítulos.</li>
            <li>Mantener una distribución ordenada.</li>
            <li>Evitar exceso de colores y elementos decorativos.</li>
            <li>Revisar la ortografía.</li>
            <li>Mantener información actualizada.</li>
            <li>Guardar una versión en PDF.</li>
          </ul>
        </div>
      </section>

      {/* Word */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Currículum en Word
        </h2>

        <div className="border p-6 rounded-xl">
          Microsoft Word permite crear un currículum utilizando herramientas
          de formato, tablas, imágenes, estilos y diferentes opciones de
          configuración de página.
          <br /><br />

          Se pueden utilizar:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Estilos para títulos.</li>
            <li>Tablas para organizar información.</li>
            <li>Listas con viñetas.</li>
            <li>Negrita para destacar información.</li>
            <li>Imágenes para incorporar una fotografía profesional.</li>
            <li>Encabezados y pies de página.</li>
            <li>Configuración de márgenes.</li>
            <li>Exportación a PDF.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo CV */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Currículum
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="text-center font-bold text-xl mb-6">
            JUAN PÉREZ
          </p>

          <p className="text-center mb-6">
            Teléfono: 280 000 0000 | Email: juanperez@email.com
          </p>

          <hr className="mb-6" />

          <p className="font-semibold mb-2">
            PERFIL PROFESIONAL
          </p>

          Persona responsable y organizada, con conocimientos en herramientas
          informáticas y tareas administrativas.

          <br /><br />

          <p className="font-semibold mb-2">
            FORMACIÓN ACADÉMICA
          </p>

          Educación Secundaria Completa
          <br />
          Curso de Operador de Informática para Administración y Gestión

          <br /><br />

          <p className="font-semibold mb-2">
            EXPERIENCIA LABORAL
          </p>

          <strong>Empresa Ejemplo S.A.</strong>
          <br />
          Administrativo
          <br />
          2024 – 2026

          <br /><br />

          Principales tareas:

          <ul className="list-disc list-inside mt-2">
            <li>Organización de documentación.</li>
            <li>Elaboración de documentos administrativos.</li>
            <li>Gestión de archivos digitales.</li>
            <li>Atención al público.</li>
          </ul>

          <br />

          <p className="font-semibold mb-2">
            CONOCIMIENTOS INFORMÁTICOS
          </p>

          <ul className="list-disc list-inside">
            <li>Microsoft Word.</li>
            <li>Planillas de cálculo.</li>
            <li>Correo electrónico.</li>
            <li>Internet.</li>
          </ul>

        </div>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Frecuentes
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li>Presentar información desactualizada.</li>
            <li>Utilizar demasiados colores o diseños.</li>
            <li>Incluir información innecesaria.</li>
            <li>Presentar errores de ortografía.</li>
            <li>Utilizar una dirección de correo poco profesional.</li>
            <li>Enviar el documento sin revisar su formato.</li>
            <li>No adaptar el CV al puesto al que se postula.</li>
            <li>Enviar el archivo sin un nombre adecuado.</li>
          </ul>
        </div>
      </section>

      {/* Nombre del archivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nombre del Archivo
        </h2>

        <div className="border p-6 rounded-xl">
          Al enviar un currículum digital es recomendable utilizar un nombre
          de archivo claro y profesional.
          <br /><br />

          <strong>Ejemplo:</strong>

          <br /><br />

          CV_Juan_Perez.pdf

          <br /><br />

          De esta manera, el destinatario puede identificar fácilmente el
          documento.
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Reunir los datos personales, formación académica y experiencia
            laboral necesarios para elaborar un currículum.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear un Currículum Vitae utilizando Microsoft Word.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Aplicar títulos, subtítulos, listas y formato profesional.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Guardar el CV en formato editable y exportarlo a PDF.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Crear un <strong>Currículum Vitae profesional</strong> utilizando
          Microsoft Word.

          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Datos personales y de contacto. <br />
          ✔ Perfil profesional. <br />
          ✔ Formación académica. <br />
          ✔ Experiencia laboral. <br />
          ✔ Cursos y capacitaciones. <br />
          ✔ Conocimientos informáticos. <br />
          ✔ Habilidades personales. <br />
          ✔ Idiomas, si corresponde. <br />
          ✔ Referencias, si corresponde. <br />
          ✔ Diseño profesional. <br />
          ✔ Revisión ortográfica. <br />
          ✔ Nombre de archivo adecuado. <br />
          ✔ Versión editable. <br />
          ✔ Versión final en PDF.

          <br /><br />

          El objetivo es aplicar los conocimientos adquiridos durante el
          módulo para elaborar un documento laboral completo, organizado y
          preparado para ser presentado ante una empresa u organización.
        </div>
      </section>

    </div>
  );
}