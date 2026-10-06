export default function GraficosPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Gráficos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos permiten representar visualmente los datos de una
          planilla de cálculo. Facilitan la interpretación de grandes
          cantidades de información y permiten identificar rápidamente
          tendencias, diferencias, proporciones y resultados.
        </p>
      </section>

      {/* ¿Qué es un gráfico? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un gráfico?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un gráfico es una representación visual de un conjunto de datos.
          Los valores de una tabla se transforman en elementos gráficos que
          permiten comprender la información de una manera más rápida y
          sencilla.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Una empresa registra las ventas realizadas durante varios meses.
            En lugar de analizar solamente los números de una tabla, puede
            crear un gráfico para observar qué meses tuvieron mayores o
            menores ventas.
          </p>
        </div>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de un gráfico
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Título:</strong> indica qué información representa el
            gráfico.
          </li>
          <li>
            <strong>Ejes:</strong> permiten representar las categorías y los
            valores.
          </li>
          <li>
            <strong>Series:</strong> representan los conjuntos de datos.
          </li>
          <li>
            <strong>Categorías:</strong> identifican los elementos que se
            comparan.
          </li>
          <li>
            <strong>Valores:</strong> representan las cantidades de los
            datos.
          </li>
          <li>
            <strong>Leyenda:</strong> identifica las diferentes series.
          </li>
        </ul>
      </section>

      {/* Crear gráfico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un gráfico
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Antes de crear un gráfico es importante organizar correctamente los
          datos que se desean representar.
        </p>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Organizar los datos en una tabla.</li>
          <li>Seleccionar el rango de información.</li>
          <li>Elegir la herramienta para insertar un gráfico.</li>
          <li>Seleccionar el tipo de gráfico.</li>
          <li>Verificar las series y categorías.</li>
          <li>Agregar un título descriptivo.</li>
          <li>Modificar el formato si es necesario.</li>
        </ol>
      </section>

      {/* Gráfico de columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Gráfico de columnas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos de columnas representan los valores mediante columnas
          verticales. Son adecuados para comparar diferentes categorías.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo de uso
          </h3>

          <p className="leading-relaxed">
            Comparar las ventas realizadas durante enero, febrero, marzo y
            abril.
          </p>

          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Permiten comparar cantidades.</li>
            <li>Son fáciles de interpretar.</li>
            <li>Resultan adecuados para datos por categorías.</li>
          </ul>
        </div>
      </section>

      {/* Gráfico de barras */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Gráfico de barras
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos de barras utilizan barras horizontales para
          representar los valores. Son especialmente útiles cuando las
          categorías tienen nombres extensos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo de uso
          </h3>

          <p className="leading-relaxed">
            Comparar las ventas de diferentes productos o el rendimiento de
            distintos sectores de una organización.
          </p>
        </div>
      </section>

      {/* Gráfico circular */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Gráfico circular
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos circulares representan proporciones de un total.
          Permiten observar qué porcentaje representa cada categoría.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo de uso
          </h3>

          <p className="leading-relaxed">
            Representar la distribución de las ventas según la forma de pago:
            efectivo, transferencia, tarjeta y otros medios.
          </p>
        </div>
      </section>

      {/* Gráfico de líneas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Gráfico de líneas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos de líneas permiten observar la evolución de un valor
          a lo largo del tiempo.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo de uso
          </h3>

          <p className="leading-relaxed">
            Representar la evolución de las ventas de una empresa durante
            varios meses.
          </p>

          <p className="leading-relaxed mt-4">
            Este tipo de gráfico permite detectar aumentos, disminuciones y
            tendencias.
          </p>
        </div>
      </section>

      {/* Otros gráficos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Otros tipos de gráficos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Área
            </h3>

            <p className="leading-relaxed">
              Permite visualizar la evolución de valores y destacar la
              magnitud de los cambios a lo largo del tiempo.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Dispersión
            </h3>

            <p className="leading-relaxed">
              Permite analizar la relación entre dos conjuntos de valores.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Combinado
            </h3>

            <p className="leading-relaxed">
              Combina diferentes tipos de gráficos para representar
              información complementaria.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Gráfico de anillos
            </h3>

            <p className="leading-relaxed">
              Permite representar proporciones de un total de manera similar
              al gráfico circular.
            </p>
          </div>

        </div>
      </section>

      {/* Elegir tipo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elegir el tipo de gráfico adecuado
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El tipo de gráfico debe seleccionarse de acuerdo con la información
          que se desea comunicar.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Necesidad
                </th>
                <th className="border p-3 text-left">
                  Gráfico recomendado
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  Comparar categorías
                </td>
                <td className="border p-3">
                  Columnas o barras
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Mostrar proporciones
                </td>
                <td className="border p-3">
                  Circular o anillos
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Analizar evolución temporal
                </td>
                <td className="border p-3">
                  Líneas
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Analizar relación entre valores
                </td>
                <td className="border p-3">
                  Dispersión
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Comparar diferentes medidas
                </td>
                <td className="border p-3">
                  Combinado
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Modificar gráfico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modificar un gráfico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Después de crear un gráfico es posible modificar diferentes
          elementos para mejorar su presentación y facilitar la comprensión
          de los datos.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-6">
          <li>Cambiar el tipo de gráfico.</li>
          <li>Modificar el título.</li>
          <li>Agregar o quitar la leyenda.</li>
          <li>Modificar los datos representados.</li>
          <li>Agregar etiquetas de datos.</li>
          <li>Ajustar los ejes.</li>
          <li>Cambiar el tamaño del gráfico.</li>
          <li>Modificar su ubicación dentro de la hoja.</li>
        </ul>
      </section>

      {/* Etiquetas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etiquetas de datos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las etiquetas de datos permiten mostrar directamente los valores
          sobre los elementos del gráfico. Pueden ser útiles cuando se
          necesita conocer el valor exacto de cada categoría.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Por ejemplo, en un gráfico de ventas se pueden mostrar los
            importes directamente sobre cada columna para facilitar la
            lectura.
          </p>
        </div>
      </section>

      {/* Gráfico y tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación entre la tabla y el gráfico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El gráfico está relacionado con los datos de origen. Cuando los
          datos de la tabla cambian, el gráfico puede actualizarse
          automáticamente dependiendo de la configuración utilizada.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Si una tabla contiene las ventas mensuales de una empresa y se
            incorpora un nuevo mes, el rango de datos del gráfico debe
            incluir ese nuevo registro para que pueda representarse.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos son una herramienta importante para presentar
          información administrativa y facilitar la toma de decisiones.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplos de uso
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Ventas mensuales.</li>
            <li>Gastos por categoría.</li>
            <li>Ingresos y egresos.</li>
            <li>Productos más vendidos.</li>
            <li>Distribución de clientes.</li>
            <li>Niveles de stock.</li>
            <li>Asistencia de empleados.</li>
            <li>Seguimiento de objetivos.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: evolución de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una empresa registra las siguientes ventas mensuales:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-3 text-left">Mes</th>
                <th className="border p-3 text-left">Ventas</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Enero</td>
                <td className="border p-3">$850.000</td>
              </tr>

              <tr>
                <td className="border p-3">Febrero</td>
                <td className="border p-3">$920.000</td>
              </tr>

              <tr>
                <td className="border p-3">Marzo</td>
                <td className="border p-3">$1.050.000</td>
              </tr>

              <tr>
                <td className="border p-3">Abril</td>
                <td className="border p-3">$980.000</td>
              </tr>

              <tr>
                <td className="border p-3">Mayo</td>
                <td className="border p-3">$1.200.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Con estos datos se puede crear un gráfico de líneas para observar
          la evolución de las ventas y detectar períodos de crecimiento o
          disminución.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Elegir el tipo de gráfico de acuerdo con el objetivo.
          </li>
          <li>
            Utilizar títulos claros y descriptivos.
          </li>
          <li>
            Evitar gráficos excesivamente cargados.
          </li>
          <li>
            Verificar que los datos representados sean correctos.
          </li>
          <li>
            Utilizar etiquetas cuando faciliten la interpretación.
          </li>
          <li>
            Mantener una presentación clara y profesional.
          </li>
          <li>
            No utilizar gráficos solamente por motivos decorativos.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 1: Gráfico de ventas
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con las ventas de una empresa durante 12 meses.
              Generar un gráfico de columnas que permita comparar las ventas
              de cada mes.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 2: Evolución mensual
            </h3>

            <p className="leading-relaxed">
              Utilizar los mismos datos de la actividad anterior para crear
              un gráfico de líneas. Analizar la evolución de las ventas e
              identificar los meses de mayor y menor actividad.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 3: Distribución de gastos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con diferentes categorías de gastos y sus
              respectivos importes. Generar un gráfico circular que permita
              observar qué porcentaje representa cada categoría.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 4: Comparación de productos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 10 productos y sus cantidades
              vendidas. Generar un gráfico de barras para identificar cuáles
              son los productos con mayor cantidad de ventas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 5: Presentación de información
            </h3>

            <p className="leading-relaxed">
              Seleccionar una tabla de información administrativa y crear el
              gráfico que se considere más adecuado. Agregar un título,
              etiquetas y leyenda cuando corresponda. Explicar por qué se
              eligió ese tipo de gráfico.
            </p>
          </div>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una empresa necesita presentar un informe sobre sus operaciones
          mensuales. Crear una planilla con información de ventas, gastos,
          productos y formas de pago.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A partir de los datos, crear al menos tres gráficos diferentes:
          uno de columnas o barras para comparar categorías, uno de líneas
          para representar una evolución temporal y uno circular para
          mostrar proporciones.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Cada gráfico deberá tener un título claro y representar
          correctamente los datos seleccionados. Finalmente, explicar qué
          información permite observar cada gráfico y qué conclusiones
          administrativas pueden obtenerse a partir de ellos.
        </p>
      </section>

    </div>
  );
}