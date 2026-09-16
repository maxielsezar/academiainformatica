export default function IntroduccionPlanillasCalculoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a las Planillas de Cálculo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una planilla de cálculo es una aplicación informática que permite
          organizar, almacenar, procesar y analizar información mediante una
          estructura formada por filas, columnas y celdas.
          <br /><br />
          Estas herramientas permiten trabajar con datos numéricos, textos,
          fechas y otros tipos de información, realizar cálculos mediante
          fórmulas y funciones, ordenar y filtrar datos y representar
          información mediante gráficos.
          <br /><br />
          En el ámbito administrativo, las planillas de cálculo son una
          herramienta fundamental para registrar operaciones, realizar
          cálculos, organizar información y elaborar informes que faciliten
          el análisis y la toma de decisiones.
          <br /><br />
          Durante este módulo aprenderás a utilizar las principales
          herramientas de una planilla de cálculo para organizar y procesar
          información de manera eficiente.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Planilla de Cálculo?
        </h2>

        <div className="border p-6 rounded-xl">
          Una planilla de cálculo es un programa que permite organizar
          información en una estructura de filas y columnas.
          <br /><br />
          La intersección entre una fila y una columna forma una celda, que
          constituye la unidad básica donde se pueden ingresar datos,
          fórmulas y funciones.
          <br /><br />
          A diferencia de un documento de texto, una planilla de cálculo
          permite realizar operaciones automáticamente sobre los datos
          ingresados y actualizar los resultados cuando la información
          cambia.
        </div>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos Básicos de una Planilla
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para trabajar correctamente con una planilla de cálculo es
          importante conocer los principales elementos que forman su
          estructura.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunos de los elementos principales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Libro:</strong> archivo que contiene una o varias hojas
              de cálculo.
            </li>

            <li>
              <strong>Hoja:</strong> espacio de trabajo compuesto por filas,
              columnas y celdas.
            </li>

            <li>
              <strong>Fila:</strong> conjunto horizontal de celdas identificado
              generalmente mediante números.
            </li>

            <li>
              <strong>Columna:</strong> conjunto vertical de celdas identificado
              generalmente mediante letras.
            </li>

            <li>
              <strong>Celda:</strong> espacio donde se ingresan los datos,
              fórmulas o funciones.
            </li>

            <li>
              <strong>Rango:</strong> conjunto de dos o más celdas seleccionadas
              para trabajar con ellas.
            </li>
          </ul>

        </div>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Planillas de Cálculo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes aplicaciones que permiten crear y trabajar con
          planillas de cálculo. Algunas de las más utilizadas son:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Microsoft Excel.</li>
          <li>LibreOffice Calc.</li>
          <li>Google Sheets.</li>
          <li>Apple Numbers.</li>
        </ul>

        <div className="border p-6 rounded-xl mt-6">
          Aunque cada aplicación presenta una interfaz y herramientas
          diferentes, todas permiten realizar operaciones similares como
          ingresar datos, aplicar formatos, utilizar fórmulas y funciones,
          ordenar información, crear gráficos y preparar las planillas para
          su impresión.
        </div>
      </section>

      {/* Tipos de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Datos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una planilla de cálculo puede contener diferentes tipos de datos.
          Reconocerlos correctamente permite organizar la información y
          realizar operaciones de manera adecuada.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunos ejemplos son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Textos y nombres.</li>
            <li>Números.</li>
            <li>Fechas.</li>
            <li>Horarios.</li>
            <li>Porcentajes.</li>
            <li>Valores monetarios.</li>
            <li>Fórmulas.</li>
            <li>Resultados obtenidos mediante funciones.</li>
          </ul>

        </div>
      </section>

      {/* Fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas y Cálculos
        </h2>

        <div className="border p-6 rounded-xl">
          Una de las principales características de las planillas de cálculo
          es la posibilidad de realizar operaciones automáticamente mediante
          fórmulas.
          <br /><br />
          Una fórmula puede utilizar números, operadores matemáticos,
          referencias a otras celdas y funciones para obtener un resultado.
          <br /><br />
          Por ejemplo, si una celda contiene el precio de un producto y otra
          contiene la cantidad vendida, una fórmula puede utilizar ambos
          valores para calcular automáticamente el importe total.
        </div>
      </section>

      {/* Funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las funciones son herramientas que permiten realizar cálculos y
          operaciones sobre los datos de una planilla de manera más sencilla.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunas funciones habituales permiten:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Sumar valores.</li>
            <li>Calcular promedios.</li>
            <li>Obtener valores máximos y mínimos.</li>
            <li>Contar datos.</li>
            <li>Evaluar condiciones.</li>
            <li>Realizar cálculos sobre conjuntos de datos.</li>
          </ul>

        </div>
      </section>

      {/* Organización de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización y Análisis de Datos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las planillas de cálculo también permiten organizar grandes
          cantidades de información para facilitar su consulta y análisis.
          <br /><br />
          Las herramientas de ordenamiento y filtrado permiten seleccionar
          información según diferentes criterios y encontrar rápidamente los
          datos que se necesitan.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunas tareas habituales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Ordenar registros alfabéticamente.</li>
            <li>Ordenar valores de mayor a menor.</li>
            <li>Filtrar información según determinados criterios.</li>
            <li>Consultar grupos específicos de datos.</li>
            <li>Comparar información.</li>
            <li>Preparar datos para generar informes.</li>
          </ul>

        </div>
      </section>

      {/* Gráficos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Representación Gráfica
        </h2>

        <div className="border p-6 rounded-xl">
          Las planillas de cálculo permiten representar información
          numérica mediante gráficos.
          <br /><br />
          Los gráficos facilitan la interpretación de los datos y permiten
          observar tendencias, comparaciones y relaciones entre diferentes
          valores.
          <br /><br />
          La elección del tipo de gráfico dependerá de la información que se
          desea representar y del objetivo de la comunicación.
        </div>
      </section>

      {/* Planillas en administración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Las Planillas de Cálculo en la Administración
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En las tareas administrativas es frecuente trabajar con
          información numérica y registros que necesitan ser organizados,
          calculados y analizados.
          <br /><br />
          Por este motivo, conocer el funcionamiento de las planillas de
          cálculo es una competencia importante para cualquier persona que
          trabaje con información digital en una organización.
          <br /><br />
          Una correcta utilización de estas herramientas permite reducir
          tareas repetitivas, automatizar cálculos, organizar información y
          presentar resultados de manera clara.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunas aplicaciones habituales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Control de ingresos y gastos.</li>
            <li>Registro de ventas.</li>
            <li>Control de stock.</li>
            <li>Registro de clientes y proveedores.</li>
            <li>Elaboración de presupuestos.</li>
            <li>Control de asistencia.</li>
            <li>Seguimiento de pagos.</li>
            <li>Elaboración de informes y gráficos.</li>
          </ul>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas al Trabajar con Planillas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Organizar los datos antes de comenzar a trabajar.</li>
          <li>Utilizar títulos claros para las columnas.</li>
          <li>Mantener una estructura ordenada de la información.</li>
          <li>Utilizar formatos adecuados para cada tipo de dato.</li>
          <li>Evitar introducir información innecesaria.</li>
          <li>Revisar las fórmulas y los resultados obtenidos.</li>
          <li>Guardar periódicamente el trabajo realizado.</li>
          <li>Utilizar nombres descriptivos para los archivos.</li>
          <li>Organizar los archivos en carpetas adecuadas.</li>
          <li>Realizar copias de seguridad de información importante.</li>
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

            Explicar con tus propias palabras qué es una planilla de cálculo
            y para qué se utiliza.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Investigar y mencionar tres aplicaciones diferentes que permitan
            trabajar con planillas de cálculo y señalar una característica
            de cada una.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Elaborar una lista de cinco situaciones administrativas en las
            que podría utilizarse una planilla de cálculo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Crear una planilla nueva e ingresar una pequeña lista de
            productos con su nombre, cantidad y precio. Identificar qué
            datos son textos y cuáles son numéricos.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que comienzas a trabajar como operador de informática
          en una pequeña oficina.
          <br /><br />

          Tu responsable te solicita organizar en una planilla la información
          correspondiente a las ventas realizadas durante una semana.
          <br /><br />

          Antes de comenzar, debes analizar:

          <br /><br />

          ✔ Qué información necesitas registrar. <br />
          ✔ Cómo organizarías los datos en filas y columnas. <br />
          ✔ Qué cálculos necesitarías realizar. <br />
          ✔ Qué fórmulas o funciones podrían ayudarte. <br />
          ✔ Cómo ordenarías y presentarías la información. <br />
          ✔ Qué gráfico podría utilizarse para representar los resultados.
          <br /><br />

          Explica qué pasos seguirías desde la creación de la planilla hasta
          la presentación final de la información.
        </div>
      </section>

    </div>
  );
}