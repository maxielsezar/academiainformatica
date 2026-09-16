import Link from "next/link";

export default function Modulo5Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 5: Planillas de cálculo y gestión de datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante desarrolla capacidades para utilizar
          planillas de cálculo como herramienta para organizar, procesar y
          analizar información.
          <br /><br />
          Se trabaja la creación y organización de libros y hojas de cálculo,
          el ingreso y formato de datos, la utilización de fórmulas y
          funciones, las referencias de celdas y diferentes herramientas para
          el tratamiento de la información.
          <br /><br />
          También se incorporan herramientas para ordenar y filtrar datos,
          crear tablas y gráficos y preparar información para su impresión y
          presentación en contextos administrativos y laborales.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">

          <li>
            Utilizar programas de planillas de cálculo para organizar y
            procesar información.
          </li>

          <li>
            Crear, abrir, guardar y organizar libros y hojas de cálculo.
          </li>

          <li>
            Ingresar diferentes tipos de datos en una planilla.
          </li>

          <li>
            Aplicar formatos adecuados a las celdas y rangos de información.
          </li>

          <li>
            Utilizar fórmulas para realizar cálculos automáticamente.
          </li>

          <li>
            Aplicar operadores matemáticos y referencias de celdas.
          </li>

          <li>
            Utilizar referencias relativas y absolutas en las fórmulas.
          </li>

          <li>
            Utilizar funciones para realizar cálculos y procesar información.
          </li>

          <li>
            Aplicar funciones matemáticas y lógicas en situaciones
            administrativas.
          </li>

          <li>
            Ordenar y filtrar información para facilitar su análisis.
          </li>

          <li>
            Organizar información mediante tablas.
          </li>

          <li>
            Representar información mediante gráficos.
          </li>

          <li>
            Preparar planillas para su impresión y presentación.
          </li>

          <li>
            Resolver situaciones administrativas utilizando planillas de
            cálculo.
          </li>

        </ul>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del Módulo
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Introducción a las planillas de cálculo
            </h3>

            <p>
              Concepto, características y principales usos de las planillas
              de cálculo en actividades administrativas y laborales.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Interfaz y herramientas
            </h3>

            <p>
              Reconocimiento de la interfaz, barras de herramientas, filas,
              columnas, celdas, rangos y principales elementos de trabajo.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Libros y hojas de cálculo
            </h3>

            <p>
              Creación, apertura, guardado y organización de libros y hojas
              para estructurar diferentes tipos de información.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Tipos de datos
            </h3>

            <p>
              Ingreso y reconocimiento de textos, números, fechas, porcentajes
              y otros tipos de datos utilizados en las planillas.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Formato de celdas
            </h3>

            <p>
              Aplicación de formatos numéricos, texto, fechas, porcentajes,
              bordes, alineación y otras opciones de presentación.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Fórmulas
            </h3>

            <p>
              Creación y utilización de fórmulas para realizar cálculos
              automáticos a partir de los datos ingresados.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Operaciones y cálculos
            </h3>

            <p>
              Utilización de operadores matemáticos para realizar sumas,
              restas, multiplicaciones, divisiones y otros cálculos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Referencias de celdas
            </h3>

            <p>
              Utilización de referencias relativas, absolutas y mixtas para
              construir fórmulas y facilitar el procesamiento de datos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Funciones
            </h3>

            <p>
              Utilización de funciones para simplificar cálculos y procesar
              grandes cantidades de información.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Funciones matemáticas
            </h3>

            <p>
              Aplicación de funciones para realizar cálculos y obtener
              resultados a partir de diferentes conjuntos de datos.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Funciones lógicas
            </h3>

            <p>
              Utilización de condiciones y funciones lógicas para analizar
              información y obtener resultados según determinados criterios.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Ordenar datos
            </h3>

            <p>
              Organización de registros de manera ascendente o descendente
              para facilitar la consulta y análisis de información.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Filtros
            </h3>

            <p>
              Aplicación de filtros para visualizar y seleccionar información
              de acuerdo con determinados criterios.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Tablas
            </h3>

            <p>
              Organización estructurada de datos mediante tablas para
              facilitar su administración, consulta y análisis.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Gráficos
            </h3>

            <p>
              Representación visual de los datos mediante diferentes tipos de
              gráficos para facilitar la interpretación de la información.
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">
              Impresión y presentación
            </h3>

            <p>
              Configuración de páginas, márgenes, orientación, encabezados,
              áreas de impresión y presentación final de las planillas.
            </p>
          </div>

        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las planillas de cálculo constituyen una herramienta fundamental
          para organizar y procesar información en diferentes ámbitos
          administrativos y laborales.
          <br /><br />

          Los conocimientos desarrollados en este módulo permiten elaborar
          registros de ingresos y egresos, controlar stock, organizar
          información de clientes y proveedores, realizar presupuestos,
          registrar ventas y gastos y generar informes.
          <br /><br />

          También permiten aplicar fórmulas y funciones para automatizar
          cálculos, ordenar y filtrar información y representar los datos
          mediante gráficos para facilitar su análisis y presentación.
        </p>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/administracion/modulo-5/introduccion"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}