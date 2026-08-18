export default function TitulosTablaContenidoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Uso de Títulos y Tabla de Contenido
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los títulos y subtítulos permiten organizar la información de un
          documento de manera clara y ordenada. En Microsoft Word, los estilos
          de título también permiten crear automáticamente una tabla de
          contenido.
          <br /><br />
          Estas herramientas son especialmente útiles para informes,
          trabajos prácticos, manuales, proyectos y documentos administrativos
          extensos.
        </p>
      </section>

      {/* ¿Qué son los títulos? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los Títulos?
        </h2>

        <div className="border p-6 rounded-xl">
          Los títulos son elementos que permiten identificar y separar las
          diferentes partes de un documento.
          <br /><br />
          Ayudan al lector a comprender rápidamente cómo está organizada la
          información y facilitan la búsqueda de determinados contenidos.
        </div>
      </section>

      {/* Jerarquía */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Jerarquía de Títulos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un documento puede utilizar diferentes niveles de títulos para
          establecer una estructura jerárquica.
        </p>

        <div className="border p-6 rounded-xl mt-6 space-y-5">

          <div>
            <p className="font-semibold">
              Título 1
            </p>
            <p>
              Se utiliza para los capítulos o secciones principales del
              documento.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Título 2
            </p>
            <p>
              Se utiliza para dividir un capítulo en diferentes apartados.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              Título 3
            </p>
            <p>
              Permite organizar contenidos más específicos dentro de un
              apartado.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Estructura
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-semibold">
            1. Introducción
          </p>

          <p className="ml-6 mt-2">
            1.1 Objetivos
          </p>

          <p className="ml-6 mt-2">
            1.2 Alcance del trabajo
          </p>

          <p className="font-semibold mt-5">
            2. Desarrollo
          </p>

          <p className="ml-6 mt-2">
            2.1 Conceptos principales
          </p>

          <p className="ml-6 mt-2">
            2.2 Procedimientos
          </p>

          <p className="ml-12 mt-2">
            2.2.1 Procedimiento administrativo
          </p>

          <p className="font-semibold mt-5">
            3. Conclusiones
          </p>

        </div>
      </section>

      {/* Estilos de Word */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estilos de Título en Word
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Microsoft Word incluye estilos predeterminados que permiten aplicar
          rápidamente una estructura jerárquica al documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar <strong>Título 1</strong> para las secciones principales.</li>
            <li>Utilizar <strong>Título 2</strong> para los subapartados.</li>
            <li>Utilizar <strong>Título 3</strong> para contenidos más específicos.</li>
            <li>Mantener una jerarquía coherente en todo el documento.</li>
            <li>Evitar utilizar solamente negrita o aumentar el tamaño de la letra para simular títulos.</li>
          </ul>
        </div>
      </section>

      {/* Aplicar estilos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Aplicar un Estilo de Título
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-4">
            <li>
              Seleccionar el texto que se desea convertir en título.
            </li>

            <li>
              Ir a la pestaña <strong>Inicio</strong>.
            </li>

            <li>
              Buscar el grupo <strong>Estilos</strong>.
            </li>

            <li>
              Seleccionar <strong>Título 1</strong>, <strong>Título 2</strong>
              o <strong>Título 3</strong>, según corresponda.
            </li>

            <li>
              Repetir el procedimiento con los demás títulos del documento.
            </li>
          </ol>

        </div>
      </section>

      {/* Tabla de contenido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Tabla de Contenido?
        </h2>

        <div className="border p-6 rounded-xl">
          Una tabla de contenido es una lista organizada de los títulos y
          subtítulos que aparecen en un documento, acompañados generalmente
          por el número de página correspondiente.
          <br /><br />
          Word puede generar esta tabla automáticamente utilizando los estilos
          de título aplicados al documento.
        </div>
      </section>

      {/* Ejemplo tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Tabla de Contenido
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="font-bold text-center mb-6">
            TABLA DE CONTENIDO
          </p>

          <div className="space-y-3">
            <p>
              1. Introducción ........................................ 1
            </p>

            <p>
              2. Desarrollo ......................................... 2
            </p>

            <p className="ml-6">
              2.1 Conceptos principales ............................. 2
            </p>

            <p className="ml-6">
              2.2 Procedimientos .................................... 4
            </p>

            <p className="ml-12">
              2.2.1 Procedimiento administrativo .................... 5
            </p>

            <p>
              3. Conclusiones ....................................... 7
            </p>

            <p>
              4. Bibliografía ....................................... 8
            </p>
          </div>

        </div>
      </section>

      {/* Crear tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Crear una Tabla de Contenido
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-4">
            <li>
              Aplicar los estilos de título correspondientes a todo el
              documento.
            </li>

            <li>
              Colocar el cursor en el lugar donde se desea insertar la tabla.
            </li>

            <li>
              Ir a la pestaña <strong>Referencias</strong>.
            </li>

            <li>
              Seleccionar <strong>Tabla de contenido</strong>.
            </li>

            <li>
              Elegir uno de los formatos automáticos disponibles.
            </li>

            <li>
              Word generará automáticamente la tabla utilizando los títulos
              del documento.
            </li>
          </ol>

        </div>
      </section>

      {/* Actualizar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actualizar la Tabla de Contenido
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Si se agregan nuevos títulos, se modifica el contenido o cambian
            las páginas, la tabla debe actualizarse.
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar la tabla de contenido.</li>
            <li>Elegir la opción <strong>Actualizar tabla</strong>.</li>
            <li>Seleccionar actualizar solamente los números de página o toda la tabla.</li>
            <li>Confirmar la actualización.</li>
          </ol>

        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Utilizar Títulos y Tabla de Contenido
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-3">
            <li>Organizan mejor la información.</li>
            <li>Facilitan la lectura del documento.</li>
            <li>Permiten localizar rápidamente una sección.</li>
            <li>Facilitan la creación de documentos extensos.</li>
            <li>Permiten generar tablas de contenido automáticamente.</li>
            <li>Permiten actualizar la estructura del documento fácilmente.</li>
            <li>Mejoran la presentación profesional del documento.</li>
          </ul>

        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en Documentos Administrativos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los títulos y las tablas de contenido son especialmente útiles para
          documentos administrativos extensos.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Informes administrativos.</li>
            <li>Manuales de procedimientos.</li>
            <li>Proyectos institucionales.</li>
            <li>Reglamentos.</li>
            <li>Trabajos prácticos.</li>
            <li>Memorias e informes de actividades.</li>
            <li>Documentación de procesos.</li>
          </ul>

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

            Crear un documento de al menos tres páginas relacionado con una
            empresa u organización.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear tres secciones principales utilizando el estilo
            <strong> Título 1</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Incorporar subtítulos utilizando <strong>Título 2</strong> y
            <strong> Título 3</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Crear una tabla de contenido automática al comienzo del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>

            Agregar una nueva sección al documento y actualizar la tabla de
            contenido.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Crear un <strong>informe administrativo profesional</strong> en
          Microsoft Word utilizando títulos, subtítulos y una tabla de
          contenido automática.

          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Portada. <br />
          ✔ Tabla de contenido automática. <br />
          ✔ Al menos tres títulos principales. <br />
          ✔ Subtítulos de segundo nivel. <br />
          ✔ Un apartado de tercer nivel. <br />
          ✔ Numeración de páginas. <br />
          ✔ Encabezado y pie de página. <br />
          ✔ Información organizada y correctamente redactada. <br />
          ✔ Actualización final de la tabla de contenido. <br />
          ✔ Versión final en PDF.

          <br /><br />

          El objetivo es aprender a utilizar los estilos de Word para crear
          documentos extensos, organizados y profesionales.
        </div>
      </section>

    </div>
  );
}