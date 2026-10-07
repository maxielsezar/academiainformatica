export default function TablasDinamicasPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Tablas Dinámicas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las tablas dinámicas permiten resumir, organizar y analizar grandes
          cantidades de datos de una manera rápida y flexible. Son especialmente
          útiles cuando una planilla contiene muchos registros y se necesita
          obtener información agrupada sin modificar los datos originales.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una tabla dinámica?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una tabla dinámica es una herramienta que permite transformar una
          tabla extensa de datos en un resumen organizado. A partir de los
          registros originales se pueden agrupar datos, realizar cálculos y
          cambiar la forma en que se presenta la información.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Una empresa puede tener miles de registros de ventas. En lugar de
            revisar cada registro individualmente, puede utilizar una tabla
            dinámica para conocer cuánto vendió cada vendedor, cuánto se
            vendió por producto o cuáles fueron las ventas de cada mes.
          </p>
        </div>
      </section>

      {/* Datos de origen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos de origen
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para crear una tabla dinámica es necesario contar con una tabla de
          datos correctamente organizada. Cada columna debe representar un
          campo y cada fila debe representar un registro.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-3 text-left">Fecha</th>
                <th className="border p-3 text-left">Vendedor</th>
                <th className="border p-3 text-left">Producto</th>
                <th className="border p-3 text-left">Cantidad</th>
                <th className="border p-3 text-left">Importe</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">01/08/2026</td>
                <td className="border p-3">Ana</td>
                <td className="border p-3">Teclado</td>
                <td className="border p-3">3</td>
                <td className="border p-3">$45.000</td>
              </tr>

              <tr>
                <td className="border p-3">02/08/2026</td>
                <td className="border p-3">Juan</td>
                <td className="border p-3">Mouse</td>
                <td className="border p-3">5</td>
                <td className="border p-3">$35.000</td>
              </tr>

              <tr>
                <td className="border p-3">03/08/2026</td>
                <td className="border p-3">Ana</td>
                <td className="border p-3">Monitor</td>
                <td className="border p-3">2</td>
                <td className="border p-3">$180.000</td>
              </tr>

              <tr>
                <td className="border p-3">04/08/2026</td>
                <td className="border p-3">Pedro</td>
                <td className="border p-3">Teclado</td>
                <td className="border p-3">4</td>
                <td className="border p-3">$60.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Campos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Campos de una tabla dinámica
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Al crear una tabla dinámica, los campos de la tabla original pueden
          ubicarse en diferentes áreas según el análisis que se quiera realizar.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Filas
            </h3>

            <p className="leading-relaxed">
              Permiten agrupar los registros según una determinada categoría,
              por ejemplo vendedor, producto o cliente.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Columnas
            </h3>

            <p className="leading-relaxed">
              Permiten distribuir la información horizontalmente para comparar
              diferentes categorías.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Valores
            </h3>

            <p className="leading-relaxed">
              Contienen los cálculos que se desean realizar, como suma,
              promedio, cantidad, máximo o mínimo.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Filtros
            </h3>

            <p className="leading-relaxed">
              Permiten limitar los datos que se muestran en el resumen.
            </p>
          </div>

        </div>
      </section>

      {/* Crear tabla dinámica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una tabla dinámica
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El procedimiento puede variar según el programa utilizado, pero
          generalmente se siguen los siguientes pasos:
        </p>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Seleccionar la tabla de datos.</li>
          <li>Acceder a la herramienta de tabla dinámica.</li>
          <li>Seleccionar el rango de origen.</li>
          <li>Elegir dónde colocar la tabla dinámica.</li>
          <li>Seleccionar los campos que se desean analizar.</li>
          <li>Ubicar los campos en filas, columnas, valores o filtros.</li>
          <li>Verificar el resultado obtenido.</li>
        </ol>
      </section>

      {/* Ejemplo vendedor */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: ventas por vendedor
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          A partir de una tabla de ventas se puede crear un resumen que
          muestre cuánto dinero vendió cada vendedor.
        </p>

        <div className="border p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Configuración
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Filas:</strong> Vendedor
            </li>
            <li>
              <strong>Valores:</strong> Suma de Importe
            </li>
          </ul>

          <p className="leading-relaxed mt-5">
            El resultado será un resumen con cada vendedor y el total de sus
            ventas.
          </p>
        </div>
      </section>

      {/* Ejemplo producto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: ventas por producto
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          También es posible analizar qué productos tienen mayor cantidad de
          ventas.
        </p>

        <div className="border p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Configuración
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Filas:</strong> Producto
            </li>
            <li>
              <strong>Valores:</strong> Suma de Cantidad
            </li>
          </ul>

          <p className="leading-relaxed mt-5">
            De esta manera se puede obtener rápidamente la cantidad total
            vendida de cada producto.
          </p>
        </div>
      </section>

      {/* Cálculos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cálculos en tablas dinámicas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Los valores de una tabla dinámica pueden resumirse mediante
          diferentes operaciones.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Suma
            </h3>

            <p className="leading-relaxed">
              Permite obtener el total de los valores de un determinado campo.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Promedio
            </h3>

            <p className="leading-relaxed">
              Permite conocer el valor medio de los registros.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Contar
            </h3>

            <p className="leading-relaxed">
              Permite conocer la cantidad de registros o valores.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Máximo y mínimo
            </h3>

            <p className="leading-relaxed">
              Permiten identificar el valor más alto y el más bajo de un
              conjunto de datos.
            </p>
          </div>

        </div>
      </section>

      {/* Filtros */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filtros en tablas dinámicas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los filtros permiten analizar solamente una parte de los datos.
          Por ejemplo, una tabla con miles de ventas puede filtrarse para
          mostrar únicamente las ventas de un determinado vendedor, producto
          o período.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Si una empresa registra ventas durante todo el año, se puede
            utilizar un filtro para analizar únicamente las operaciones
            realizadas durante el mes de agosto.
          </p>
        </div>
      </section>

      {/* Agrupación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agrupar información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las tablas dinámicas permiten agrupar determinados datos para
          facilitar su análisis. Por ejemplo, las fechas pueden organizarse
          por meses, trimestres o años, dependiendo de las herramientas
          disponibles en el programa.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Aplicación administrativa
          </h3>

          <p className="leading-relaxed">
            Una empresa puede tener registros diarios de ventas y utilizar
            una tabla dinámica para obtener automáticamente un resumen
            mensual.
          </p>
        </div>
      </section>

      {/* Actualización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actualizar una tabla dinámica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Si los datos de origen cambian o se incorporan nuevos registros,
          puede ser necesario actualizar la tabla dinámica para que el resumen
          refleje la información más reciente.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Es importante verificar que el rango de origen incluya todos los
            registros necesarios y posteriormente utilizar la opción de
            actualización proporcionada por el programa.
          </p>
        </div>
      </section>

      {/* Gráficos dinámicos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tablas dinámicas y gráficos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una tabla dinámica puede utilizarse como base para crear gráficos
          que representen visualmente la información resumida. Esto permite
          combinar el análisis de datos con la presentación de resultados.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            A partir de una tabla dinámica que resume las ventas por vendedor
            se puede crear un gráfico de columnas para comparar el rendimiento
            de cada uno.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Las tablas dinámicas permiten obtener rápidamente información útil
          para la gestión de una organización.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Analizar ventas por vendedor.</li>
          <li>Analizar ventas por producto.</li>
          <li>Comparar ingresos por período.</li>
          <li>Resumir gastos por categoría.</li>
          <li>Analizar movimientos de stock.</li>
          <li>Contabilizar operaciones.</li>
          <li>Analizar información de clientes.</li>
          <li>Preparar informes administrativos.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Mantener correctamente organizada la tabla de origen.
          </li>
          <li>
            Utilizar encabezados claros y únicos.
          </li>
          <li>
            Evitar filas o columnas vacías dentro de los datos.
          </li>
          <li>
            Verificar que los datos tengan el formato correcto.
          </li>
          <li>
            Actualizar la tabla dinámica cuando cambien los datos de origen.
          </li>
          <li>
            Utilizar filtros para facilitar el análisis.
          </li>
          <li>
            Seleccionar correctamente los campos de filas, columnas y valores.
          </li>
          <li>
            Revisar los resultados antes de utilizarlos en un informe.
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
              Actividad 1: Ventas por vendedor
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 30 registros de ventas que
              contenga fecha, vendedor, producto, cantidad e importe.
              Crear una tabla dinámica que muestre el total vendido por cada
              vendedor.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 2: Productos vendidos
            </h3>

            <p className="leading-relaxed">
              Utilizar los mismos datos para crear una tabla dinámica que
              permita conocer la cantidad total de unidades vendidas de cada
              producto. Ordenar los resultados de mayor a menor.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 3: Análisis por período
            </h3>

            <p className="leading-relaxed">
              Crear una tabla dinámica que permita analizar las ventas según
              el período. Incorporar filtros para poder consultar diferentes
              meses o vendedores.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 4: Gastos administrativos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con gastos de una organización indicando fecha,
              categoría, responsable y monto. Crear una tabla dinámica que
              muestre el total de gastos por categoría.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 5: Tabla dinámica y gráfico
            </h3>

            <p className="leading-relaxed">
              Crear una tabla dinámica que resuma las ventas por vendedor y
              utilizarla para generar un gráfico. Agregar un título y
              seleccionar una representación adecuada para comparar los
              resultados.
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
          Una empresa necesita analizar las operaciones realizadas durante
          varios meses. Crear una tabla con al menos 50 registros que
          contenga fecha, cliente, vendedor, producto, categoría, cantidad e
          importe.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A partir de esos datos, crear diferentes tablas dinámicas para
          obtener el total de ventas por vendedor, las unidades vendidas por
          producto y los ingresos por período.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Incorporar filtros que permitan analizar la información según
          vendedor, producto y período. Finalmente, crear un gráfico basado
          en uno de los resúmenes obtenidos y elaborar una breve conclusión
          sobre los resultados.
        </p>
      </section>

    </div>
  );
}