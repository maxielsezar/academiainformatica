
export default function InformePracticaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Informe de Solicitud de Práctica Profesionalizante
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El Informe de Solicitud de Práctica Profesionalizante es un documento
          formal que permite presentar una solicitud para realizar una práctica
          profesional en una empresa, organización o institución.
          <br /><br />
          Su objetivo principal es comunicar de manera clara y organizada el
          interés del estudiante en realizar una experiencia laboral vinculada
          con su formación académica.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Informe de Solicitud de Práctica Profesionalizante?
        </h2>

        <div className="border p-6 rounded-xl">
          Es un documento que presenta formalmente la intención de un estudiante
          de realizar una práctica profesionalizante en una empresa,
          organización o institución.
          <br /><br />
          En él se detallan los datos del estudiante, la institución educativa,
          el lugar donde se desea realizar la práctica, los objetivos y las
          actividades previstas.
        </div>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo de la Solicitud
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La solicitud tiene como finalidad presentar formalmente al estudiante
          y explicar los motivos por los cuales desea realizar una práctica
          profesionalizante.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Presentar al estudiante ante la organización.</li>
            <li>Expresar el interés por realizar una práctica.</li>
            <li>Relacionar la práctica con la formación académica.</li>
            <li>Definir los objetivos de la experiencia.</li>
            <li>Describir las actividades que podrían realizarse.</li>
            <li>Establecer una comunicación formal con la organización.</li>
          </ul>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la Práctica Profesionalizante
        </h2>

        <div className="border p-6 rounded-xl">
          La práctica profesionalizante permite al estudiante aplicar los
          conocimientos adquiridos durante su formación en un contexto real de
          trabajo.
          <br /><br />
          También permite desarrollar nuevas habilidades, conocer el
          funcionamiento de una organización y adquirir experiencia relacionada
          con el ámbito profesional.
        </div>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura del Informe
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El informe debe presentar la información de manera clara, ordenada y
          formal. Para facilitar su lectura, puede organizarse en diferentes
          secciones.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ol className="list-decimal list-inside space-y-3">
            <li>Datos del estudiante.</li>
            <li>Datos de la institución educativa.</li>
            <li>Datos de la empresa u organización.</li>
            <li>Presentación y fundamentación.</li>
            <li>Objetivos de la práctica.</li>
            <li>Actividades propuestas.</li>
            <li>Duración y horario.</li>
            <li>Responsables de la práctica.</li>
            <li>Recursos necesarios.</li>
            <li>Conclusión.</li>
            <li>Firma y datos de contacto.</li>
          </ol>
        </div>
      </section>

      {/* Datos estudiante */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos del Estudiante
        </h2>

        <div className="border p-6 rounded-xl">
          Esta sección permite identificar al estudiante que solicita realizar
          la práctica profesionalizante.
          <br /><br />

          Puede incluir:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre y apellido.</li>
            <li>DNI.</li>
            <li>Curso que está realizando.</li>
            <li>Especialidad o título que cursa.</li>
            <li>Teléfono.</li>
            <li>Correo electrónico.</li>
            <li>Localidad.</li>
          </ul>
        </div>
      </section>

      {/* Institución */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos de la Institución Educativa
        </h2>

        <div className="border p-6 rounded-xl">
          En esta sección se incorporan los datos correspondientes a la
          institución educativa a la que pertenece el estudiante.
          <br /><br />

          Puede incluir:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre de la institución.</li>
            <li>Dirección.</li>
            <li>Teléfono.</li>
            <li>Correo electrónico institucional.</li>
            <li>Curso o especialidad.</li>
            <li>Docente o responsable de la práctica.</li>
          </ul>
        </div>
      </section>

      {/* Empresa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos de la Empresa u Organización
        </h2>

        <div className="border p-6 rounded-xl">
          El informe debe identificar claramente la empresa, organización o
          institución donde se pretende realizar la práctica.
          <br /><br />

          Se pueden incluir:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre de la empresa u organización.</li>
            <li>Dirección.</li>
            <li>Teléfono.</li>
            <li>Correo electrónico.</li>
            <li>Área o sector donde se realizará la práctica.</li>
            <li>Nombre del responsable o tutor.</li>
          </ul>
        </div>
      </section>

      {/* Fundamentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fundamentación
        </h2>

        <div className="border p-6 rounded-xl">
          La fundamentación explica los motivos por los cuales se considera
          importante realizar la práctica profesionalizante.
          <br /><br />
          Debe relacionar la experiencia propuesta con los conocimientos y
          capacidades desarrollados durante la formación educativa.
        </div>
      </section>

      {/* Ejemplo fundamentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Fundamentación
        </h2>

        <div className="border p-6 rounded-xl">
          La realización de una práctica profesionalizante permitirá al
          estudiante aplicar en un contexto laboral real los conocimientos
          adquiridos durante su formación.
          <br /><br />
          Esta experiencia contribuirá al desarrollo de competencias
          profesionales, responsabilidad, comunicación, trabajo en equipo y
          manejo de herramientas relacionadas con su especialidad.
        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de la Práctica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los objetivos permiten establecer qué se espera lograr durante el
          período de práctica profesionalizante.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Objetivo general
          </p>

          Realizar una experiencia de práctica profesionalizante que permita
          aplicar los conocimientos adquiridos durante la formación y
          desarrollar competencias relacionadas con el ámbito laboral.

          <br /><br />

          <p className="font-semibold mb-4">
            Objetivos específicos
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Aplicar conocimientos adquiridos en clase.</li>
            <li>Desarrollar habilidades profesionales.</li>
            <li>Conocer el funcionamiento de una organización.</li>
            <li>Aprender nuevos procedimientos de trabajo.</li>
            <li>Fortalecer la capacidad de trabajo en equipo.</li>
            <li>Desarrollar responsabilidad y autonomía.</li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Propuestas
        </h2>

        <div className="border p-6 rounded-xl">
          En esta sección se describen las actividades que el estudiante podría
          realizar durante la práctica, de acuerdo con las necesidades de la
          organización y los objetivos educativos.
          <br /><br />

          Algunos ejemplos son:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Organización y clasificación de documentación.</li>
            <li>Carga y actualización de información.</li>
            <li>Utilización de herramientas informáticas.</li>
            <li>Elaboración de documentos.</li>
            <li>Gestión de archivos digitales.</li>
            <li>Atención y orientación al público.</li>
            <li>Colaboración en tareas administrativas.</li>
            <li>Participación en actividades propias del sector.</li>
          </ul>
        </div>
      </section>

      {/* Duración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Duración y Horario
        </h2>

        <div className="border p-6 rounded-xl">
          El informe debe indicar, cuando se encuentre definido, el período
          durante el cual se desarrollará la práctica y la cantidad de horas
          previstas.
          <br /><br />

          Puede especificar:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Fecha de inicio.</li>
            <li>Fecha de finalización.</li>
            <li>Días de asistencia.</li>
            <li>Horario.</li>
            <li>Cantidad total de horas.</li>
          </ul>
        </div>
      </section>
    

      {/* Recursos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recursos Necesarios
        </h2>

        <div className="border p-6 rounded-xl">
          Los recursos necesarios dependerán de las actividades que se
          desarrollen durante la práctica profesionalizante.
          <br /><br />

          Pueden incluir:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Computadora.</li>
            <li>Acceso a Internet.</li>
            <li>Procesadores de texto.</li>
            <li>Planillas de cálculo.</li>
            <li>Correo electrónico.</li>
            <li>Documentación de trabajo.</li>
            <li>Elementos de oficina.</li>
          </ul>
        </div>
      </section>

      {/* Beneficios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Beneficios de la Práctica
        </h2>

        <div className="border p-6 rounded-xl">
          La práctica profesionalizante genera beneficios tanto para el
          estudiante como para la organización que lo recibe.
          <br /><br />

          <p className="font-semibold mb-3">
            Para el estudiante:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Adquiere experiencia en un entorno laboral real.</li>
            <li>Aplica conocimientos de su formación.</li>
            <li>Desarrolla nuevas competencias.</li>
            <li>Fortalece su responsabilidad y autonomía.</li>
            <li>Conoce diferentes formas de organización del trabajo.</li>
          </ul>

          <br />

          <p className="font-semibold mb-3">
            Para la organización:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Colabora con la formación de futuros profesionales.</li>
            <li>Puede transmitir conocimientos y experiencias.</li>
            <li>Favorece el vínculo con instituciones educativas.</li>
            <li>Participa en procesos de formación laboral.</li>
          </ul>
        </div>
      </section>

      {/* Redacción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Redacción del Informe
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al redactar el informe es importante utilizar un lenguaje formal,
          claro y preciso.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar un lenguaje formal.</li>
            <li>Evitar expresiones informales.</li>
            <li>Presentar las ideas de manera ordenada.</li>
            <li>Utilizar párrafos breves y claros.</li>
            <li>Revisar la ortografía.</li>
            <li>Evitar información innecesaria.</li>
            <li>Mantener una estructura coherente.</li>
            <li>Utilizar títulos y subtítulos.</li>
          </ul>
        </div>
      </section>

      {/* Presentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Presentación del Documento
        </h2>

        <div className="border p-6 rounded-xl">
          La presentación del informe debe ser ordenada y profesional, ya que
          representa formalmente al estudiante y a la institución educativa.
          <br /><br />

          Se recomienda:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar una fuente clara y legible.</li>
            <li>Aplicar títulos y subtítulos.</li>
            <li>Mantener márgenes adecuados.</li>
            <li>Utilizar interlineado uniforme.</li>
            <li>Numerar las páginas cuando corresponda.</li>
            <li>Revisar la ortografía.</li>
            <li>Incluir los datos necesarios.</li>
            <li>Guardar una copia en formato PDF.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Solicitud
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="text-center font-bold text-xl mb-6">
            SOLICITUD DE PRÁCTICA PROFESIONALIZANTE
          </p>

          <p className="text-right mb-6">
            Lugar y fecha
          </p>

          <p className="mb-4">
            A quien corresponda:
          </p>

          <p className="leading-relaxed">
            Por medio de la presente, me dirijo a ustedes con el objetivo de
            solicitar la posibilidad de realizar una práctica profesionalizante
            en esta organización, en el marco de mi formación educativa.
          </p>

          <br />

          <p className="leading-relaxed">
            La práctica tiene como finalidad aplicar los conocimientos
            adquiridos durante mi formación y desarrollar nuevas competencias
            relacionadas con el ámbito profesional.
          </p>

          <br />

          <p className="leading-relaxed">
            Durante el período de práctica se propone participar en actividades
            relacionadas con el área de formación, respetando las normas,
            horarios y procedimientos establecidos por la organización.
          </p>

          <br />

          <p className="leading-relaxed">
            Agradezco la atención y consideración de la presente solicitud y
            quedo a disposición para proporcionar la información adicional que
            sea necesaria.
          </p>

          <br /><br />

          <p>
            Atentamente,
          </p>

          <br />

          <p className="font-semibold">
            JUAN PÉREZ
          </p>

          <p>
            Estudiante
            <br />
            Teléfono: 280 000 0000
            <br />
            Email: juanperez@email.com
          </p>

        </div>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Frecuentes
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li>No indicar claramente el objetivo de la solicitud.</li>
            <li>Presentar información incompleta.</li>
            <li>Utilizar un lenguaje demasiado informal.</li>
            <li>Presentar errores de ortografía.</li>
            <li>No identificar correctamente a la organización.</li>
            <li>No explicar la relación con la formación académica.</li>
            <li>Utilizar un formato desordenado.</li>
            <li>No revisar el documento antes de enviarlo.</li>
            <li>Incluir información innecesaria.</li>
            <li>No conservar una copia del documento presentado.</li>
          </ul>
        </div>
      </section>

      {/* Nombre archivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nombre del Archivo
        </h2>

        <div className="border p-6 rounded-xl">
          Al guardar el informe de solicitud en formato digital es recomendable
          utilizar un nombre de archivo claro y profesional.
          <br /><br />

          <strong>Ejemplo:</strong>

          <br /><br />

          Solicitud_Practica_Profesionalizante_Juan_Perez.pdf

          <br /><br />

          Un nombre adecuado permite identificar fácilmente el documento y
          facilita su organización y envío.
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

            Identificar los datos personales, académicos y de contacto
            necesarios para realizar una solicitud de práctica.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Investigar una empresa u organización donde sería posible realizar
            una práctica profesionalizante.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Redactar los objetivos y la fundamentación de la práctica.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Elaborar el informe completo utilizando Microsoft Word.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>

            Revisar la ortografía, formato y presentación del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 6
            </p>

            Guardar el documento en formato editable y exportarlo a PDF.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Elaborar un <strong>Informe de Solicitud de Práctica
          Profesionalizante</strong> completo y profesional utilizando
          Microsoft Word.

          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Datos personales del estudiante. <br />
          ✔ Datos de la institución educativa. <br />
          ✔ Datos de la empresa u organización. <br />
          ✔ Fundamentación de la práctica. <br />
          ✔ Objetivo general. <br />
          ✔ Objetivos específicos. <br />
          ✔ Actividades propuestas. <br />
          ✔ Duración y horario. <br />
          ✔ Recursos necesarios. <br />
          ✔ Beneficios de la práctica. <br />
          ✔ Conclusión. <br />
          ✔ Firma y datos de contacto. <br />
          ✔ Diseño profesional. <br />
          ✔ Revisión ortográfica. <br />
          ✔ Nombre de archivo adecuado. <br />
          ✔ Versión editable. <br />
          ✔ Versión final en PDF.

          <br /><br />

          El objetivo es aplicar los conocimientos adquiridos durante el módulo
          para elaborar un documento formal que permita presentar correctamente
          una solicitud de práctica profesionalizante ante una empresa,
          organización o institución.
        </div>
      </section>

    </div>
  );
}
