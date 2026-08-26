export default function TrabajoPracticoIntegradorPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Trabajo Práctico Integrador: La Computadora y las Aplicaciones Informáticas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este trabajo práctico deberás crear un documento completo utilizando
          un procesador de textos e integrando los conocimientos adquiridos durante
          el curso.
          <br /><br />
          El objetivo es elaborar un trabajo sobre informática que incluya una
          carátula, tabla de contenido, títulos, texto con formato, listas,
          tablas e imágenes.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo del Trabajo
        </h2>

        <div className="border p-6 rounded-xl">
          Elaborar un documento completo y organizado aplicando correctamente
          las herramientas de edición y formato.
          <br /><br />

          Al finalizar, deberás demostrar que puedes:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Crear y dar formato a un documento.</li>
            <li>Diseñar una carátula.</li>
            <li>Utilizar títulos y subtítulos.</li>
            <li>Crear una tabla de contenido.</li>
            <li>Utilizar listas con viñetas y numeradas.</li>
            <li>Crear y modificar tablas.</li>
            <li>Insertar y organizar imágenes.</li>
            <li>Aplicar formato a párrafos y texto.</li>
            <li>Organizar correctamente la información.</li>
            <li>Revisar y corregir el documento.</li>
          </ul>
        </div>
      </section>

      {/* Tema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tema del Trabajo
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          <p className="font-semibold mb-3">
            La Computadora y los Sistemas Informáticos
          </p>

          El trabajo deberá explicar los principales elementos que forman parte
          de un sistema informático, incluyendo los componentes físicos de una
          computadora, los programas, los sistemas operativos y las aplicaciones
          utilizadas en diferentes actividades.
        </div>
      </section>

      {/* Formato general */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato General del Documento
        </h2>

        <p className="leading-relaxed mb-6 max-w-3xl">
          Antes de comenzar a redactar el trabajo, configurar el documento
          utilizando las siguientes características generales:
        </p>

        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-4 text-left font-semibold">
                  Elemento
                </th>
                <th className="border p-4 text-left font-semibold">
                  Configuración
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-4 font-semibold">
                  Fuente
                </td>
                <td className="border p-4">
                  Times New Roman 12, Calibri 11 o Arial 11.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Márgenes
                </td>
                <td className="border p-4">
                  2.54 cm en todos los lados.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Sangría
                </td>
                <td className="border p-4">
                  Primera línea de cada párrafo con sangría de 1.27 cm.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Interlineado
                </td>
                <td className="border p-4">
                  Doble espacio.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Alineación
                </td>
                <td className="border p-4">
                  Texto alineado a la izquierda.
                </td>
              </tr>

              <tr>
                <td className="border p-4 font-semibold">
                  Encabezado
                </td>
                <td className="border p-4">
                  Número de página en la esquina superior derecha de cada hoja,
                  incluida la carátula.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Carátula */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. Crear la Carátula
        </h2>

        <p className="leading-relaxed mb-6">
          La primera página del documento deberá ser una carátula que presente
          correctamente el trabajo.
        </p>

        <div className="border p-6 rounded-xl">
          La carátula deberá contener:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Título del trabajo.</li>
            <li>Una imagen relacionada con la informática.</li>
            <li>Nombre de la institución.</li>
            <li>Nombre del curso.</li>
            <li>Nombre y apellido del estudiante.</li>
            <li>Nombre del instructor.</li>
            <li>Fecha de realización.</li>
          </ul>

          <br />

          <strong>Título sugerido:</strong>

          <br /><br />

          <div className="border p-4 rounded-lg text-center font-bold">
            LA COMPUTADORA Y LOS SISTEMAS INFORMÁTICOS
          </div>
        </div>
      </section>

      {/* Tabla de contenido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Crear la Tabla de Contenido
        </h2>

        <div className="border p-6 rounded-xl">
          Después de la carátula, deberás insertar una página destinada a la
          tabla de contenido.
          <br /><br />

          Para crearla correctamente:
          <br /><br />

          <ol className="list-decimal list-inside space-y-3">
            <li>Utilizar estilos de título en cada sección.</li>
            <li>Aplicar Título 1 a los temas principales.</li>
            <li>Aplicar Título 2 a los subtemas.</li>
            <li>Insertar una tabla de contenido automática.</li>
            <li>Actualizar la tabla cuando se realicen cambios.</li>
          </ol>
        </div>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Estructura Obligatoria del Documento
        </h2>

        <div className="border p-6 rounded-xl">
          Tu documento deberá desarrollar, como mínimo, los siguientes temas:
          <br /><br />

          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Introducción a la informática</strong>
            </li>

            <li>
              <strong>Hardware y Software</strong>
            </li>

            <li>
              <strong>Componentes internos de una computadora</strong>
            </li>

            <li>
              <strong>Periféricos y dispositivos externos</strong>
            </li>

            <li>
              <strong>Sistemas operativos</strong>
            </li>

            <li>
              <strong>Aplicaciones informáticas</strong>
            </li>

            <li>
              <strong>Conclusión</strong>
            </li>
          </ol>
        </div>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Introducción a la Informática
        </h2>

        <div className="border p-6 rounded-xl">
          Explicar brevemente:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>¿Qué es la informática?</li>
            <li>¿Qué es una computadora?</li>
            <li>¿Para qué utilizamos las computadoras?</li>
            <li>¿Por qué son importantes en la actualidad?</li>
            <li>¿En qué ámbitos se utilizan los sistemas informáticos?</li>
          </ul>

          <br />

          Esta sección deberá contener al menos dos párrafos redactados por el
          estudiante.
        </div>
      </section>

      {/* Hardware y software */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Hardware y Software
        </h2>

        <div className="border p-6 rounded-xl">
          Explicar la diferencia entre hardware y software.
          <br /><br />

          El contenido deberá incluir:
          <br /><br />

          <div className="space-y-4">

            <div className="border p-4 rounded-lg">
              <p className="font-semibold mb-2">
                Hardware
              </p>

              Explicar qué es el hardware y mencionar ejemplos de componentes
              físicos.
            </div>

            <div className="border p-4 rounded-lg">
              <p className="font-semibold mb-2">
                Software
              </p>

              Explicar qué es el software y mencionar ejemplos de programas y
              aplicaciones.
            </div>

          </div>
        </div>
      </section>

      {/* Listas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Utilizar Listas
        </h2>

        <div className="border p-6 rounded-xl">
          En esta sección deberás utilizar diferentes tipos de listas.
          <br /><br />

          <strong>Lista con viñetas:</strong>
          <br /><br />

          Crear una lista con al menos cinco ejemplos de hardware.
          <br /><br />

          <strong>Lista numerada:</strong>
          <br /><br />

          Crear una lista con diferentes pasos para encender y utilizar una
          computadora correctamente.
          <br /><br />

          También puedes incluir una lista de ejemplos de software y aplicaciones.
        </div>
      </section>

      {/* Componentes internos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Componentes Internos de la Computadora
        </h2>

        <div className="border p-6 rounded-xl">
          Investigar y explicar brevemente la función de los siguientes
          componentes:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Procesador o CPU.</li>
            <li>Placa madre.</li>
            <li>Memoria RAM.</li>
            <li>Disco HDD.</li>
            <li>Unidad SSD.</li>
            <li>Placa de video o GPU.</li>
            <li>Fuente de alimentación.</li>
          </ul>

          <br />

          Agregar imágenes de al menos tres componentes internos.
        </div>
      </section>

      {/* Tabla componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Crear una Tabla de Componentes
        </h2>

        <div className="border p-6 rounded-xl">
          Crear una tabla similar a la siguiente:
          <br /><br />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Componente</th>
                  <th className="border p-3 text-left">Función</th>
                  <th className="border p-3 text-left">Ejemplo</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">CPU</td>
                  <td className="border p-3">
                    Procesa instrucciones y datos.
                  </td>
                  <td className="border p-3">
                    Procesador de computadora.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Memoria RAM</td>
                  <td className="border p-3">
                    Almacena información temporalmente.
                  </td>
                  <td className="border p-3">
                    Módulo de memoria.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">SSD</td>
                  <td className="border p-3">
                    Almacena archivos y programas.
                  </td>
                  <td className="border p-3">
                    Unidad de almacenamiento.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          La tabla deberá contener información sobre al menos siete componentes.
        </div>
      </section>

      {/* Periféricos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Periféricos
        </h2>

        <div className="border p-6 rounded-xl">
          Explicar qué son los periféricos y clasificarlos según su función.
          <br /><br />

          Deberás incluir:
          <br /><br />

          <p className="font-semibold mb-2">
            Periféricos de entrada
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Teclado.</li>
            <li>Mouse.</li>
            <li>Micrófono.</li>
            <li>Escáner.</li>
          </ul>

          <p className="font-semibold mb-2">
            Periféricos de salida
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Monitor.</li>
            <li>Impresora.</li>
            <li>Parlantes.</li>
          </ul>

          <p className="font-semibold mb-2">
            Periféricos de entrada y salida
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Pantalla táctil.</li>
            <li>Impresora multifunción.</li>
            <li>Dispositivos de almacenamiento.</li>
          </ul>
        </div>
      </section>

      {/* Sistemas operativos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Sistemas Operativos
        </h2>

        <div className="border p-6 rounded-xl">
          Explicar qué es un sistema operativo y cuál es su función dentro de
          un sistema informático.
          <br /><br />

          Incluir información sobre algunos sistemas operativos conocidos:
          <br /><br />

          <ol className="list-decimal list-inside space-y-3">
            <li>Windows.</li>
            <li>Linux.</li>
            <li>macOS.</li>
            <li>Android.</li>
            <li>iOS.</li>
          </ol>

          <br />

          Agregar una imagen relacionada con un sistema operativo.
        </div>
      </section>

      {/* Aplicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          11. Aplicaciones Informáticas
        </h2>

        <div className="border p-6 rounded-xl">
          Explicar qué es una aplicación informática y cuál es su utilidad.
          <br /><br />

          Investigar diferentes tipos de aplicaciones utilizadas en la vida
          cotidiana, la educación, el trabajo y la comunicación.
          <br /><br />

          Puedes incluir ejemplos de:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Aplicaciones para crear documentos.</li>
            <li>Aplicaciones para organizar información.</li>
            <li>Aplicaciones de comunicación.</li>
            <li>Aplicaciones para navegar por Internet.</li>
            <li>Aplicaciones de entretenimiento.</li>
            <li>Aplicaciones educativas.</li>
            <li>Aplicaciones de edición de imágenes y videos.</li>
            <li>Aplicaciones de almacenamiento de archivos.</li>
          </ul>

          <br />

          Elegir al menos cinco aplicaciones y explicar brevemente para qué
          sirve cada una.
        </div>
      </section>

      {/* Tabla aplicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          12. Tabla de Aplicaciones
        </h2>

        <div className="border p-6 rounded-xl">
          Crear una tabla con información sobre diferentes aplicaciones.
          <br /><br />

          La tabla deberá contener las siguientes columnas:
          <br /><br />

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-3 text-left">
                    Aplicación
                  </th>
                  <th className="border p-3 text-left">
                    Tipo
                  </th>
                  <th className="border p-3 text-left">
                    Utilidad
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">
                    Ejemplo de aplicación
                  </td>
                  <td className="border p-3">
                    Comunicación
                  </td>
                  <td className="border p-3">
                    Permite comunicarse con otras personas.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Ejemplo de aplicación
                  </td>
                  <td className="border p-3">
                    Educación
                  </td>
                  <td className="border p-3">
                    Facilita el aprendizaje y el acceso a contenidos.
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">
                    Ejemplo de aplicación
                  </td>
                  <td className="border p-3">
                    Almacenamiento
                  </td>
                  <td className="border p-3">
                    Permite guardar y acceder a archivos digitales.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          La tabla deberá contener al menos cinco aplicaciones diferentes.
        </div>
      </section>


      {/* Conclusión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          13. Conclusión
        </h2>

        <div className="border p-6 rounded-xl">
          Finalizar el documento con una conclusión personal.
          <br /><br />

          Explicar brevemente:
          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Qué conocimientos adquiriste durante el trabajo.</li>
            <li>Por qué es importante conocer el hardware y el software.</li>
            <li>Qué función cumplen los sistemas operativos.</li>
            <li>Qué importancia tienen las aplicaciones informáticas.</li>
            <li>Qué herramientas utilizaste para elaborar el documento.</li>
          </ul>

          <br />

          La conclusión deberá estar redactada con tus propias palabras.
        </div>
      </section>

      {/* Entrega */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Forma de Entrega
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          El trabajo deberá entregarse en formato:
          <br /><br />

          <strong>Documento de Microsoft Word (.docx)</strong>

          <br /><br />

          Además, se deberá exportar una copia en:

          <br /><br />

          <strong>Formato PDF (.pdf)</strong>

          <br /><br />

          Nombre sugerido para el archivo:

          <br /><br />

          <div className="border p-4 rounded-lg font-mono">
            Apellido Nombre TrabajoIntegrador.docx
          </div>
        </div>
      </section>

      {/* Lista de verificación */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Lista de Verificación Final
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Antes de entregar, comprobar:
          <br /><br />

          ✔ Configuré correctamente el formato general del documento. <br />
          ✔ Incluí una carátula. <br />
          ✔ Agregué el número de página en el encabezado. <br />
          ✔ Creé una tabla de contenido. <br />
          ✔ Utilicé títulos y subtítulos. <br />
          ✔ Expliqué qué es la informática. <br />
          ✔ Expliqué la diferencia entre hardware y software. <br />
          ✔ Describí componentes internos. <br />
          ✔ Clasifiqué periféricos. <br />
          ✔ Expliqué qué es un sistema operativo. <br />
          ✔ Investigué diferentes aplicaciones informáticas. <br />
          ✔ Utilicé listas. <br />
          ✔ Creé tablas. <br />
          ✔ Agregué imágenes. <br />
          ✔ Revisé la ortografía. <br />
          ✔ Agregué una conclusión. <br />
          ✔ Guardé el archivo en formato Word y PDF.
          <br /><br />

          <strong>Objetivo final:</strong> crear un documento completo,
          organizado y correctamente presentado, integrando los conocimientos
          sobre informática y las herramientas aprendidas durante el curso.
        </div>
      </section>

    </div>
  );
}