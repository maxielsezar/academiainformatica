export default function OrganizacionArchivosCarpetasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Organización de Archivos y Carpetas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La organización de archivos y carpetas es una tarea fundamental
          para administrar correctamente la información almacenada en una
          computadora.
          <br /><br />
          Una estructura ordenada permite encontrar documentos rápidamente,
          evitar pérdidas de información y mejorar la productividad en las
          tareas administrativas.
          <br /><br />
          Para organizar correctamente la información es importante utilizar
          nombres claros, crear carpetas de acuerdo con diferentes criterios
          y mantener una estructura lógica y fácil de comprender.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de Organizar la Información
        </h2>

        <div className="border p-6 rounded-xl">
          Una computadora puede almacenar una gran cantidad de documentos,
          imágenes, planillas y otros tipos de archivos.
          <br /><br />
          Si estos archivos se almacenan sin ningún tipo de organización,
          puede resultar difícil encontrar la información necesaria.
          <br /><br />
          Una buena organización permite ahorrar tiempo, reducir errores
          y facilitar el acceso a los documentos utilizados diariamente.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Encontrar archivos rápidamente.</li>
          <li>Evitar la duplicación innecesaria de documentos.</li>
          <li>Mantener una estructura de información clara.</li>
          <li>Facilitar el trabajo colaborativo.</li>
          <li>Realizar copias de seguridad de manera organizada.</li>
          <li>Reducir el riesgo de perder información importante.</li>
        </ul>
      </section>

      {/* Archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Archivo?
        </h2>

        <div className="border p-6 rounded-xl">
          Un <strong>archivo</strong> es un conjunto de información
          almacenada digitalmente en un dispositivo.
          <br /><br />
          Los archivos pueden contener diferentes tipos de información,
          como documentos de texto, planillas de cálculo, imágenes,
          presentaciones, audios o videos.
          <br /><br />
          Cada archivo posee un nombre y, generalmente, una extensión
          que permite identificar el tipo de contenido que contiene.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Ejemplos de archivos</strong>
          </p>

          <ul className="list-disc list-inside space-y-3 mt-4">
            <li>Informe-mensual.docx</li>
            <li>Listado-clientes.xlsx</li>
            <li>Presentacion-empresa.pptx</li>
            <li>Contrato.pdf</li>
            <li>Logo-empresa.png</li>
          </ul>

        </div>
      </section>

      {/* Carpetas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Carpeta?
        </h2>

        <div className="border p-6 rounded-xl">
          Una <strong>carpeta</strong> es un espacio utilizado para
          organizar y agrupar archivos y otras carpetas.
          <br /><br />
          Las carpetas permiten crear una estructura jerárquica que facilita
          la clasificación de la información.
          <br /><br />
          Una carpeta puede contener archivos y también otras carpetas,
          llamadas subcarpetas.
        </div>
      </section>

      {/* Estructura jerárquica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de Carpetas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una estructura de carpetas permite organizar la información de
          forma jerárquica. La carpeta principal puede contener diferentes
          subcarpetas, y estas a su vez pueden contener otras carpetas
          y archivos.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Ejemplo de estructura para una empresa:
          </p>

          <p>📁 Empresa</p>

          <p className="ml-6">📁 Administración</p>
          <p className="ml-12">📁 Facturas</p>
          <p className="ml-12">📁 Informes</p>
          <p className="ml-12">📄 Informe-mensual.docx</p>

          <p className="ml-6">📁 Clientes</p>
          <p className="ml-12">📄 Lista-clientes.xlsx</p>
          <p className="ml-12">📁 Documentación</p>

          <p className="ml-6">📁 Proveedores</p>
          <p className="ml-12">📄 Lista-proveedores.xlsx</p>

          <p className="ml-6">📁 Recursos Humanos</p>
          <p className="ml-12">📁 Personal</p>
          <p className="ml-12">📁 Documentación</p>

        </div>
      </section>

      {/* Criterios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios para Organizar Archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes criterios que pueden utilizarse para organizar
          archivos y carpetas. La elección dependerá del tipo de información
          y de las necesidades de cada usuario u organización.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Organización por tipo de documento
            </p>

            Permite agrupar archivos según su formato o función.

            <br /><br />

            Ejemplo: documentos de texto, planillas, presentaciones e imágenes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Organización por fecha
            </p>

            Los archivos se organizan según el año, mes o período al
            que corresponden.

            <br /><br />

            Ejemplo: documentos agrupados por año y por mes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Organización por proyecto
            </p>

            Permite reunir todos los documentos relacionados con un
            determinado proyecto o actividad.

            <br /><br />

            Ejemplo: Proyecto-Nuevo-Local, Proyecto-Sistema-Gestión.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Organización por área
            </p>

            Permite separar la información según el sector o departamento
            de una organización.

            <br /><br />

            Ejemplo: Administración, Ventas, Recursos Humanos y Compras.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Organización por cliente
            </p>

            Permite almacenar la documentación relacionada con cada
            cliente en una carpeta independiente.

            <br /><br />

            Ejemplo: Cliente-A, Cliente-B y Cliente-C.
          </div>

        </div>
      </section>

      {/* Nombres */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nombres de Archivos y Carpetas
        </h2>

        <div className="border p-6 rounded-xl">
          Utilizar nombres claros y descriptivos facilita la identificación
          de los archivos y evita confusiones.
          <br /><br />
          Un buen nombre debe permitir comprender rápidamente qué contiene
          el archivo sin necesidad de abrirlo.
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              ❌ Nombre poco descriptivo
            </p>

            documento1.docx
            <br />
            archivo-final-final.docx
            <br />
            nuevo.xlsx
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              ✔ Nombre descriptivo
            </p>

            Informe-Ventas-Marzo-2026.docx
            <br />
            Contrato-Cliente-Gomez.pdf
            <br />
            Presupuesto-Proyecto-2026.xlsx
          </div>

        </div>
      </section>

      {/* Fechas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización por Fecha
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando se trabaja con documentos que se generan periódicamente,
          organizar los archivos por año y mes puede facilitar la búsqueda
          de información.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p>📁 Informes</p>
          <p className="ml-6">📁 2026</p>
          <p className="ml-12">📁 Enero</p>
          <p className="ml-12">📁 Febrero</p>
          <p className="ml-12">📁 Marzo</p>
          <p className="ml-12">📁 Abril</p>

          <br />

          <p>📁 Facturación</p>
          <p className="ml-6">📁 2026</p>
          <p className="ml-12">📁 Enero</p>
          <p className="ml-12">📁 Febrero</p>

        </div>
      </section>

      {/* Versiones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Control de Versiones
        </h2>

        <div className="border p-6 rounded-xl">
          Cuando un documento se modifica varias veces, es importante
          mantener una organización que permita identificar cuál es la
          versión más reciente.
          <br /><br />
          Se pueden utilizar nombres que incluyan la fecha o el número
          de versión.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Ejemplo:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Presupuesto-v01.xlsx</li>
            <li>Presupuesto-v02.xlsx</li>
            <li>Presupuesto-v03.xlsx</li>
            <li>Presupuesto-final.xlsx</li>
          </ul>

          <br />

          Una alternativa más organizada consiste en utilizar la fecha:

          <ul className="list-disc list-inside space-y-3 mt-4">
            <li>Presupuesto-2026-06-01.xlsx</li>
            <li>Presupuesto-2026-06-15.xlsx</li>
            <li>Presupuesto-2026-06-30.xlsx</li>
          </ul>

        </div>
      </section>

      {/* Archivos duplicados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Archivos Duplicados
        </h2>

        <div className="border p-6 rounded-xl">
          Los archivos duplicados son copias del mismo documento que se
          encuentran almacenadas en diferentes ubicaciones.
          <br /><br />
          La acumulación de archivos duplicados puede generar confusión
          y ocupar espacio innecesario.
          <br /><br />
          Antes de eliminar un duplicado es importante verificar que la
          información sea exactamente la misma y que no se trate de una
          versión diferente del documento.
        </div>
      </section>

      {/* Descargas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de la Carpeta Descargas
        </h2>

        <div className="border p-6 rounded-xl">
          La carpeta <strong>Descargas</strong> suele utilizarse para
          almacenar temporalmente archivos obtenidos desde Internet,
          correos electrónicos u otras fuentes.
          <br /><br />
          Es recomendable revisar periódicamente esta carpeta y mover
          los archivos importantes a sus ubicaciones correspondientes.
          Los archivos que ya no sean necesarios pueden eliminarse.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Revisar periódicamente los archivos descargados.</li>
          <li>Mover los documentos importantes a carpetas organizadas.</li>
          <li>Eliminar archivos innecesarios.</li>
          <li>Evitar utilizar la carpeta Descargas como almacenamiento permanente.</li>
        </ul>
      </section>

      {/* Copias de seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Copias de Seguridad
        </h2>

        <div className="border p-6 rounded-xl">
          Una copia de seguridad es una copia adicional de la información
          almacenada en otro dispositivo o ubicación.
          <br /><br />
          Las copias de seguridad ayudan a proteger los archivos frente
          a situaciones como fallos del hardware, eliminación accidental
          o pérdida de información.
          <br /><br />
          Los documentos importantes deben contar con copias de seguridad
          realizadas de manera periódica.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Realizar copias periódicas de información importante.</li>
          <li>Guardar las copias en una ubicación diferente al equipo principal.</li>
          <li>Verificar que las copias puedan recuperarse correctamente.</li>
          <li>Mantener una organización clara también en las copias de seguridad.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas de Organización
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Crear una estructura de carpetas lógica y sencilla.</li>
          <li>Utilizar nombres claros y descriptivos.</li>
          <li>Evitar guardar todos los archivos en el escritorio.</li>
          <li>Clasificar los documentos según un criterio definido.</li>
          <li>Eliminar periódicamente archivos innecesarios.</li>
          <li>Evitar crear demasiados niveles de subcarpetas.</li>
          <li>Revisar periódicamente la organización de la información.</li>
          <li>Realizar copias de seguridad de los documentos importantes.</li>
          <li>Mantener una estructura similar cuando se trabaja en equipo.</li>
        </ul>
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
            Crear una carpeta llamada "Empresa" y dentro de ella crear
            las carpetas "Administración", "Clientes", "Proveedores"
            y "Recursos Humanos".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Dentro de la carpeta "Administración", crear subcarpetas
            para organizar informes, facturas y presupuestos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Crear cinco archivos de ejemplo y asignarles nombres claros
            y descriptivos según su contenido.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Crear una estructura de carpetas que permita organizar
            documentos por año y mes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Revisar la carpeta Descargas de la computadora y clasificar
            los archivos importantes en sus carpetas correspondientes.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que comienzas a trabajar en el área administrativa
          de una empresa y recibes una computadora con cientos de
          documentos desorganizados.
          <br /><br />

          Tu tarea consiste en diseñar una estructura de carpetas que
          permita organizar correctamente toda la información.
          <br /><br />

          La estructura deberá contemplar:

          <br /><br />

          ✔ Documentación administrativa. <br />
          ✔ Información de clientes. <br />
          ✔ Información de proveedores. <br />
          ✔ Facturas y comprobantes. <br />
          ✔ Informes mensuales. <br />
          ✔ Presupuestos. <br />
          ✔ Documentación organizada por año.
          <br /><br />

          Luego, establece una regla para nombrar los archivos y define
          cómo organizarías las diferentes versiones de un mismo documento.
          <br /><br />

          Finalmente, explica qué sistema de organización elegiste,
          por qué lo consideras adecuado y cómo facilitaría el trabajo
          diario del personal administrativo.
        </div>
      </section>

    </div>
  );
}