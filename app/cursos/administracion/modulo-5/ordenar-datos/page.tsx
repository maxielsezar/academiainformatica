export default function OrdenarDatosPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Ordenar Datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Ordenar datos permite organizar la información de una planilla según
          uno o varios criterios. Esta herramienta facilita la consulta, el
          análisis y la presentación de grandes cantidades de información.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Los datos pueden ordenarse de forma ascendente o descendente, tanto
          para valores numéricos como para textos, fechas y otros tipos de
          información.
        </p>
      </section>

      {/* ¿Qué significa ordenar? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué significa ordenar datos?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Ordenar significa cambiar la posición de los registros de una tabla
          siguiendo un criterio determinado, sin modificar los datos que
          contiene cada registro.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="leading-relaxed">
            Por ejemplo, una lista de clientes puede ordenarse alfabéticamente
            por apellido, mientras que una lista de ventas puede ordenarse
            desde el importe más bajo hasta el más alto.
          </p>
        </div>
      </section>

      {/* Orden ascendente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Orden ascendente
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          El orden ascendente organiza los datos desde el menor hacia el mayor
          o desde el comienzo hacia el final según el tipo de dato.
        </p>

        <div className="border p-6 rounded-xl space-y-3">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Números:</strong> 1, 2, 3, 4, 5...
            </li>
            <li>
              <strong>Texto:</strong> A, B, C, D...
            </li>
            <li>
              <strong>Fechas:</strong> desde la fecha más antigua hasta la más
              reciente.
            </li>
          </ul>
        </div>
      </section>

      {/* Orden descendente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Orden descendente
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          El orden descendente organiza los datos desde el mayor hacia el menor
          o desde el final hacia el comienzo según el tipo de dato.
        </p>

        <div className="border p-6 rounded-xl space-y-3">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Números:</strong> 100, 90, 80, 70...
            </li>
            <li>
              <strong>Texto:</strong> Z, Y, X, W...
            </li>
            <li>
              <strong>Fechas:</strong> desde la fecha más reciente hasta la más
              antigua.
            </li>
          </ul>
        </div>
      </section>

      {/* Ordenar texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ordenar textos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Los textos pueden ordenarse alfabéticamente. Esta opción resulta útil
          para organizar nombres, apellidos, localidades, productos o
          categorías.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>Por ejemplo:</p>

          <pre className="bg-blue-50 p-4 rounded-lg overflow-x-auto">
{`Zamora
Gómez
Fernández
Álvarez`}
          </pre>

          <p>
            En orden ascendente, los registros quedarían organizados
            alfabéticamente comenzando por Álvarez.
          </p>
        </div>
      </section>

      {/* Ordenar números */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ordenar números
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Los valores numéricos pueden organizarse de menor a mayor o de mayor
          a menor.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="mb-4">
            Por ejemplo, una lista de importes:
          </p>

          <pre className="bg-blue-50 p-4 rounded-lg overflow-x-auto">
{`12500
4500
28000
7600
15000`}
          </pre>

          <p className="leading-relaxed mt-4">
            Puede ordenarse de forma ascendente para identificar rápidamente
            los importes más bajos o de forma descendente para encontrar los
            valores más altos.
          </p>
        </div>
      </section>

      {/* Ordenar fechas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ordenar fechas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las fechas también pueden ordenarse. Esto permite organizar registros
          cronológicamente.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Por ejemplo, una planilla de vencimientos puede ordenarse desde la
            fecha más próxima hasta la más lejana.
          </p>

          <p>
            También puede realizarse el orden inverso para identificar los
            registros más recientes.
          </p>
        </div>
      </section>

      {/* Ordenar una tabla completa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ordenar una tabla completa
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Cuando una tabla contiene varias columnas relacionadas, es importante
          ordenar todo el conjunto de datos y no solamente una columna.
        </p>

        <div className="border p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Cliente</th>
                  <th className="border p-3 text-left">Fecha</th>
                  <th className="border p-3 text-left">Importe</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Ana Pérez</td>
                  <td className="border p-3">10/09/2026</td>
                  <td className="border p-3">$15.000</td>
                </tr>

                <tr>
                  <td className="border p-3">Carlos Gómez</td>
                  <td className="border p-3">08/09/2026</td>
                  <td className="border p-3">$25.000</td>
                </tr>

                <tr>
                  <td className="border p-3">Laura Fernández</td>
                  <td className="border p-3">12/09/2026</td>
                  <td className="border p-3">$8.500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mt-6">
            Si se ordena por importe, cada fila debe mantenerse completa para
            que los datos del cliente, la fecha y el importe continúen
            relacionados.
          </p>
        </div>
      </section>

      {/* Ordenar por varios criterios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ordenar por varios criterios
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Una tabla puede ordenarse utilizando más de un criterio. Esto permite
          organizar información de manera más precisa.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Por ejemplo, una lista de empleados puede ordenarse primero por
            departamento y luego por apellido.
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Ordenar por departamento.</li>
            <li>Dentro de cada departamento, ordenar por apellido.</li>
          </ol>
        </div>
      </section>

      {/* Procedimiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Procedimiento para ordenar datos
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-4">
            <li>Seleccionar la tabla o rango de datos.</li>
            <li>
              Identificar la columna que se utilizará como criterio.
            </li>
            <li>
              Elegir la opción de orden ascendente o descendente.
            </li>
            <li>
              Verificar que todos los registros se mantengan relacionados.
            </li>
            <li>
              Comprobar que el resultado obtenido sea correcto.
            </li>
          </ol>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La posibilidad de ordenar datos resulta fundamental para organizar
          información administrativa y encontrar rápidamente determinados
          registros.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Ordenar clientes por apellido.</li>
          <li>Organizar ventas por importe.</li>
          <li>Ordenar facturas por fecha.</li>
          <li>Identificar las ventas de mayor importe.</li>
          <li>Organizar productos alfabéticamente.</li>
          <li>Ordenar empleados por sector.</li>
          <li>Organizar vencimientos por fecha.</li>
          <li>Preparar información para informes administrativos.</li>
        </ul>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: ordenar ventas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una empresa dispone de una lista de ventas y necesita identificar
          cuáles fueron las operaciones de mayor importe.
        </p>

        <div className="border p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Cliente</th>
                  <th className="border p-3 text-left">Producto</th>
                  <th className="border p-3 text-left">Importe</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">María López</td>
                  <td className="border p-3">Monitor</td>
                  <td className="border p-3">$180.000</td>
                </tr>

                <tr>
                  <td className="border p-3">Juan Díaz</td>
                  <td className="border p-3">Teclado</td>
                  <td className="border p-3">$35.000</td>
                </tr>

                <tr>
                  <td className="border p-3">Pedro Ruiz</td>
                  <td className="border p-3">Notebook</td>
                  <td className="border p-3">$450.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mt-6">
            Al ordenar la columna Importe de forma descendente, las ventas de
            mayor valor aparecerán primero.
          </p>
        </div>
      </section>

      {/* Diferencia ordenar y filtrar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ordenar y filtrar: diferencias
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="space-y-4">
            <li>
              <strong>Ordenar:</strong> cambia la posición de los registros
              según un criterio.
            </li>

            <li>
              <strong>Filtrar:</strong> muestra solamente los registros que
              cumplen determinadas condiciones.
            </li>
          </ul>

          <p className="leading-relaxed mt-5">
            Ambas herramientas pueden utilizarse juntas para analizar
            información de manera más eficiente.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Verificar que la primera fila contenga encabezados claros.
          </li>
          <li>
            Seleccionar correctamente todo el conjunto de datos.
          </li>
          <li>
            Evitar ordenar solamente una columna de una tabla relacionada.
          </li>
          <li>
            Comprobar el resultado después de ordenar.
          </li>
          <li>
            Utilizar varios criterios cuando sea necesario.
          </li>
          <li>
            Mantener una copia de seguridad de información importante antes de
            realizar modificaciones.
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
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Orden alfabético
            </h3>

            <p className="leading-relaxed">
              Crear una lista de al menos 15 clientes con nombre, apellido,
              localidad y teléfono. Ordenar los registros alfabéticamente por
              apellido.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Ordenar importes
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con diferentes ventas y ordenar los registros de
              menor a mayor y luego de mayor a menor según el importe.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Ordenar fechas
            </h3>

            <p className="leading-relaxed">
              Crear una lista de facturas con diferentes fechas. Ordenarlas
              desde la más antigua hasta la más reciente y luego realizar el
              orden inverso.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Varios criterios
            </h3>

            <p className="leading-relaxed">
              Crear una lista de empleados con nombre, apellido, sector y
              categoría. Ordenar primero por sector y luego por apellido.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Análisis de ventas
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 20 ventas. Ordenar los registros por
              importe descendente y analizar cuáles son las operaciones de
              mayor valor.
            </p>
          </div>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Crear una planilla para administrar los registros de clientes y
          ventas de un pequeño comercio. La información deberá estar organizada
          de manera que permita realizar diferentes tipos de ordenamiento.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Ordenar los clientes alfabéticamente.</li>
          <li>Ordenar las ventas por importe.</li>
          <li>Ordenar las operaciones por fecha.</li>
          <li>Utilizar al menos dos criterios de ordenamiento.</li>
          <li>Comprobar que los datos de cada registro permanezcan relacionados.</li>
          <li>
            Comparar los resultados obtenidos mediante diferentes criterios.
          </li>
          <li>
            Explicar qué tipo de ordenamiento resulta más útil para cada
            situación administrativa.
          </li>
        </ul>
      </section>

    </div>
  );
}