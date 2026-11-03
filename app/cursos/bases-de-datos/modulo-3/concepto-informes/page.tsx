
export default function ConceptoInformesPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Concepto y utilidad de los informes
        </h1>

        <p className="leading-relaxed mb-4">
          Los informes son objetos de una base de datos que permiten presentar
          información de manera organizada, clara y preparada para su lectura,
          impresión o distribución. En Microsoft Access, se utilizan para
          transformar los datos almacenados en tablas y consultas en documentos
          que facilitan el análisis y la toma de decisiones.
        </p>

        <p className="leading-relaxed">
          En el ámbito administrativo, los informes permiten consultar
          información sobre clientes, proveedores, productos, ventas,
          inscripciones, pagos y otras operaciones de una organización.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Comprender qué es un informe y para qué se utiliza.</li>
          <li>Reconocer las diferencias entre tablas, consultas, formularios e informes.</li>
          <li>Identificar los elementos que componen un informe.</li>
          <li>Comprender cómo se utilizan los informes en tareas administrativas.</li>
          <li>Reconocer la importancia de presentar información clara y ordenada.</li>
        </ul>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un informe?
        </h2>

        <p className="leading-relaxed mb-4">
          Un informe es una herramienta que permite visualizar y organizar
          información proveniente de una o varias tablas o consultas de una
          base de datos. Su finalidad principal es presentar los datos de
          forma comprensible para que puedan ser interpretados por los usuarios.
        </p>

        <p className="leading-relaxed mb-4">
          A diferencia de un formulario, que está pensado principalmente para
          ingresar, modificar o consultar registros, un informe está diseñado
          para mostrar información organizada y facilitar su lectura.
        </p>

        <div className=" border-l-4 border-blue-700 p-5 rounded-r-lg">
          <p className="font-semibold text-blue-900 mb-2">Ejemplo</p>
          <p className="text-blue-500 leading-relaxed">
            Una librería puede utilizar un informe para obtener un listado de
            todos sus productos, mostrando el nombre, la categoría, el precio
            y la cantidad disponible de cada uno.
          </p>
        </div>
      </section>

      {/* Diferencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias entre tablas, consultas, formularios e informes
        </h2>

        <p className="leading-relaxed mb-5">
          En Microsoft Access existen distintos objetos que cumplen funciones
          específicas dentro de una base de datos. Es importante reconocer
          sus diferencias para utilizarlos correctamente.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-blue-200 p-3 text-left">Objeto</th>
                <th className="border border-blue-200 p-3 text-left">Función principal</th>
                <th className="border border-blue-200 p-3 text-left">Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">Tabla</td>
                <td className="border border-blue-200 p-3">Almacenar los datos.</td>
                <td className="border border-blue-200 p-3">Tabla de productos.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">Consulta</td>
                <td className="border border-blue-200 p-3">Buscar, filtrar y combinar información.</td>
                <td className="border border-blue-200 p-3">Productos con stock bajo.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">Formulario</td>
                <td className="border border-blue-200 p-3">Ingresar y modificar registros.</td>
                <td className="border border-blue-200 p-3">Formulario de carga de productos.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">Informe</td>
                <td className="border border-blue-200 p-3">Presentar información organizada.</td>
                <td className="border border-blue-200 p-3">Listado de productos y precios.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Utilidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué se utilizan los informes?
        </h2>

        <p className="leading-relaxed mb-5">
          Los informes permiten obtener información útil para diferentes
          actividades de una organización. Algunos de sus usos más frecuentes
          son:
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              titulo: "Control de ventas",
              descripcion:
                "Consultar las ventas realizadas durante un período determinado, identificar productos vendidos y calcular importes.",
            },
            {
              titulo: "Control de inventario",
              descripcion:
                "Visualizar los productos disponibles, sus precios y las cantidades existentes en el depósito.",
            },
            {
              titulo: "Administración de clientes",
              descripcion:
                "Generar listados de clientes con sus datos de contacto y otra información relevante.",
            },
            {
              titulo: "Seguimiento de pagos",
              descripcion:
                "Consultar pagos registrados, importes pendientes y movimientos administrativos.",
            },
            {
              titulo: "Gestión educativa",
              descripcion:
                "Obtener listados de estudiantes, cursos, inscripciones y calificaciones.",
            },
            {
              titulo: "Toma de decisiones",
              descripcion:
                "Analizar información resumida para detectar problemas y planificar acciones.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className="border border-blue-200 rounded-xl p-5"
            >
              <h3 className="font-bold text-blue-900 mb-2">
                {item.titulo}
              </h3>
              <p className="leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de un informe
        </h2>

        <p className="leading-relaxed mb-5">
          Un informe puede contener diferentes secciones y elementos que
          permiten organizar la información. Entre los más importantes
          encontramos:
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Encabezado del informe</h3>
            <p className="leading-relaxed">
              Se utiliza para mostrar el título, el nombre de la organización,
              un logotipo o información general del documento.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Encabezado de página</h3>
            <p className="leading-relaxed">
              Permite mostrar información que se repite en cada página, como
              nombres de columnas o datos institucionales.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Detalle</h3>
            <p className="leading-relaxed">
              Es la sección donde se muestran los registros provenientes de
              la tabla o consulta que funciona como origen de datos.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Encabezado y pie de grupo</h3>
            <p className="leading-relaxed">
              Permiten organizar los registros por categorías, mostrando
              títulos o subtotales para cada grupo.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Pie de página</h3>
            <p className="leading-relaxed">
              Puede contener números de página, fechas u otra información
              que se repite al finalizar cada página.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Pie del informe</h3>
            <p className="leading-relaxed">
              Se utiliza para mostrar resultados generales, totales o
              conclusiones al final del documento.
            </p>
          </div>
        </div>
      </section>

      {/* Origen de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Origen de datos de un informe
        </h2>

        <p className="leading-relaxed mb-4">
          Para mostrar información, un informe necesita obtener los datos de
          una fuente. En Access, esta fuente puede ser una tabla o una consulta.
        </p>

        <p className="leading-relaxed mb-4">
          Cuando se utiliza una tabla como origen, el informe puede mostrar
          sus registros. Cuando se utiliza una consulta, es posible presentar
          solamente los datos que cumplen determinadas condiciones o que
          combinan información de varias tablas.
        </p>

        <div className=" rounded-xl p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo: informe de ventas
          </h3>

          <p className="leading-relaxed mb-3">
            Una base de datos de una librería contiene las tablas Productos,
            Clientes y Ventas. Se desea generar un informe con las ventas
            realizadas durante el mes de octubre.
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Se registran los datos en las tablas correspondientes.</li>
            <li>Se crea una consulta que selecciona las ventas del período.</li>
            <li>La consulta se utiliza como origen de datos del informe.</li>
            <li>El informe presenta los resultados de manera organizada.</li>
          </ol>
        </div>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de un buen informe
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Claridad:</strong> la información debe ser fácil de leer
            y comprender.
          </li>
          <li>
            <strong>Organización:</strong> los datos deben estar distribuidos
            de manera lógica.
          </li>
          <li>
            <strong>Precisión:</strong> los resultados deben coincidir con
            los datos almacenados.
          </li>
          <li>
            <strong>Legibilidad:</strong> se deben utilizar tamaños de letra
            y formatos adecuados.
          </li>
          <li>
            <strong>Relevancia:</strong> debe mostrar solamente la información
            necesaria para su objetivo.
          </li>
          <li>
            <strong>Presentación:</strong> debe tener títulos, encabezados y
            una distribución visual ordenada.
          </li>
        </ul>
      </section>

      {/* Vista de informes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Informes en Microsoft Access
        </h2>

        <p className="leading-relaxed mb-4">
          Access permite crear informes mediante herramientas que facilitan
          su diseño y organización. Entre las opciones disponibles se
          encuentran los asistentes, la vista de diseño y la vista de informe.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Vista Informe:</strong> permite visualizar los datos
            presentados en el informe.
          </li>
          <li>
            <strong>Vista Diseño:</strong> permite modificar la estructura,
            agregar controles y ajustar la presentación.
          </li>
          <li>
            <strong>Vista Presentación:</strong> permite observar los datos
            mientras se realizan cambios en el diseño.
          </li>
          <li>
            <strong>Vista preliminar:</strong> permite revisar cómo quedará
            el documento antes de imprimirlo.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: Reconocer los objetos de Access
            </h3>
            <p className="leading-relaxed mb-3">
              Imaginá que trabajás en una librería que utiliza una base de
              datos para administrar sus productos, clientes y ventas.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Explicá qué función cumple una tabla.</li>
              <li>Indicá para qué utilizarías una consulta.</li>
              <li>Describí cuándo sería necesario utilizar un formulario.</li>
              <li>Explicá qué información presentarías en un informe.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: Identificar tipos de informes
            </h3>
            <p className="leading-relaxed mb-3">
              Para cada situación, indicá qué tipo de información debería
              presentar el informe:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Un listado de todos los clientes registrados.</li>
              <li>Un resumen de las ventas del último mes.</li>
              <li>Un listado de productos con pocas unidades disponibles.</li>
              <li>Un resumen de pagos pendientes.</li>
              <li>Un listado de estudiantes inscriptos en un curso.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: Reconocer las partes de un informe
            </h3>
            <p className="leading-relaxed mb-3">
              Diseñá en una hoja un esquema de un informe de ventas. Identificá:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encabezado del informe.</li>
              <li>Encabezado de página.</li>
              <li>Detalle de los registros.</li>
              <li>Pie de página.</li>
              <li>Pie del informe con el total de ventas.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: Seleccionar el origen de datos
            </h3>
            <p className="leading-relaxed mb-3">
              Una empresa necesita generar un informe que muestre los nombres
              de sus clientes, las fechas de compra y los importes de cada
              operación.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Identificá qué tablas podrían contener esos datos.</li>
              <li>Explicá por qué sería necesario relacionarlas.</li>
              <li>Indicá qué campos debería incluir el informe.</li>
              <li>Explicá cuándo convendría utilizar una consulta como origen.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: Evaluar la presentación de un informe
            </h3>
            <p className="leading-relaxed mb-3">
              Elaborá una lista de diez recomendaciones para que un informe
              administrativo sea claro, ordenado y fácil de interpretar.
            </p>
            <p className="leading-relaxed">
              Incluí aspectos relacionados con los títulos, el tamaño de
              letra, la organización de los datos, los formatos numéricos
              y la presentación de los resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Informes de una librería
        </h2>

        <p className="leading-relaxed mb-4">
          Una librería necesita generar documentos que permitan consultar
          información sobre sus productos, proveedores y ventas. Para ello,
          cuenta con una base de datos en Microsoft Access.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Objetivo
        </h3>
        <p className="leading-relaxed mb-5">
          Analizar qué informes necesita la organización y diseñar una
          propuesta de presentación para cada uno.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Informes solicitados
        </h3>

        <div className="space-y-4 mb-6">
          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              1. Informe de productos
            </h4>
            <p className="leading-relaxed">
              Debe mostrar código, nombre, categoría, precio y cantidad
              disponible de cada producto.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              2. Informe de proveedores
            </h4>
            <p className="leading-relaxed">
              Debe presentar nombre del proveedor, teléfono, correo
              electrónico y dirección.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              3. Informe de ventas
            </h4>
            <p className="leading-relaxed">
              Debe mostrar fecha de venta, número de operación, productos
              vendidos, cantidades e importes.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Consignas de trabajo
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Identificá qué tablas o consultas deberían utilizarse como origen
            de datos para cada informe.
          </li>
          <li>
            Seleccioná los campos que deberían aparecer en cada documento.
          </li>
          <li>
            Diseñá en papel o mediante una herramienta digital la estructura
            de los tres informes.
          </li>
          <li>
            Definí títulos, encabezados y formatos adecuados para cada uno.
          </li>
          <li>
            Indicá qué totales o resúmenes podrían incorporarse al informe
            de ventas.
          </li>
          <li>
            Explicá qué decisiones podría tomar el responsable de la librería
            utilizando la información presentada.
          </li>
        </ol>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Entrega
        </h3>

        <p className="leading-relaxed">
          Presentá los tres diseños de informes y un breve documento que
          explique su finalidad, el origen de los datos y la utilidad de
          cada uno. En las próximas clases se utilizará esta propuesta
          para crear los informes directamente en Microsoft Access.
        </p>
      </section>

      {/* Cierre */}
      <section className=" border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Los informes permiten transformar los datos de una base de datos
          en información organizada y fácil de interpretar. Son especialmente
          útiles en las tareas administrativas porque facilitan la consulta,
          el control y la toma de decisiones. Un buen informe debe presentar
          información precisa, relevante y ordenada, de acuerdo con las
          necesidades de sus usuarios.
        </p>
      </section>
    </div>
  );
}
