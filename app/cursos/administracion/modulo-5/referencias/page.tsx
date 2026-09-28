export default function ReferenciasPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Referencias de Celdas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las referencias de celdas permiten utilizar los datos almacenados en
          diferentes celdas dentro de una fórmula. Son fundamentales para
          realizar cálculos dinámicos, ya que cuando cambia el valor de una
          celda, las fórmulas que la utilizan pueden actualizar
          automáticamente su resultado.
        </p>
      </section>

      {/* ¿Qué es una referencia? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una referencia de celda?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Una referencia identifica una celda mediante la combinación de la
          letra de su columna y el número de su fila.
        </p>

        <div className="border p-6 rounded-xl space-y-3">
          <p><strong>A1</strong> → columna A, fila 1</p>
          <p><strong>B5</strong> → columna B, fila 5</p>
          <p><strong>C10</strong> → columna C, fila 10</p>
          <p><strong>D25</strong> → columna D, fila 25</p>
        </div>
      </section>

      {/* Uso en fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Referencias dentro de las fórmulas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          En lugar de escribir directamente los valores en una fórmula, es
          posible utilizar las referencias de las celdas que contienen esos
          valores.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Si <strong>A1</strong> contiene 100 y <strong>B1</strong> contiene
            50:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =A1+B1
          </pre>

          <p>
            El resultado será <strong>150</strong>. Si posteriormente se cambia
            el valor de A1 o B1, el resultado se actualizará automáticamente.
          </p>
        </div>
      </section>

      {/* Referencia relativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Referencias relativas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Una referencia relativa cambia cuando la fórmula se copia o se
          desplaza hacia otra celda.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Por ejemplo, si en <strong>C2</strong> tenemos:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =A2+B2
          </pre>

          <p>
            Al copiar la fórmula hacia <strong>C3</strong>, se transformará en:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =A3+B3
          </pre>

          <p>
            Esto resulta especialmente útil cuando se deben realizar los
            mismos cálculos sobre muchas filas de datos.
          </p>
        </div>
      </section>

      {/* Referencia absoluta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Referencias absolutas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Una referencia absoluta mantiene fija una celda aunque la fórmula
          sea copiada a otra ubicación. Se utiliza el símbolo
          <strong> $ </strong> delante de la columna y de la fila.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>Ejemplo:</p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =$A$1
          </pre>

          <p>
            En este caso, tanto la columna <strong>A</strong> como la fila
            <strong> 1</strong> permanecen fijas.
          </p>
        </div>
      </section>

      {/* Ejemplo práctico absoluta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: aplicar un porcentaje
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Supongamos que una empresa necesita calcular un impuesto del 21 %
          sobre diferentes productos. El porcentaje se encuentra en la celda
          <strong> B1</strong>.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Si el precio del producto se encuentra en <strong>A2</strong>, se
            puede utilizar:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =A2*$B$1
          </pre>

          <p>
            Al copiar esta fórmula hacia las filas siguientes, A2 cambiará por
            A3, A4, A5, etc., mientras que <strong>$B$1</strong> permanecerá
            siempre como referencia al porcentaje.
          </p>
        </div>
      </section>

      {/* Referencia mixta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Referencias mixtas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las referencias mixtas permiten fijar solamente la columna o
          solamente la fila.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            <strong>$A1</strong> → mantiene fija la columna A, pero permite
            cambiar la fila.
          </p>

          <p>
            <strong>A$1</strong> → mantiene fija la fila 1, pero permite
            cambiar la columna.
          </p>

          <p>
            <strong>$A$1</strong> → mantiene fija tanto la columna como la fila.
          </p>
        </div>
      </section>

      {/* Rangos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Referencias a rangos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          También es posible hacer referencia a un conjunto de celdas. Para
          indicar un rango se utilizan dos referencias separadas por dos
          puntos.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>Por ejemplo:</p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            A1:A10
          </pre>

          <p>
            representa todas las celdas desde A1 hasta A10.
          </p>

          <p>Un rango también puede utilizarse dentro de funciones:</p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMA(A1:A10)
          </pre>
        </div>
      </section>

      {/* Referencias entre hojas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Referencias entre hojas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Una fórmula también puede utilizar información almacenada en otra
          hoja del mismo libro.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Por ejemplo, si una hoja llamada <strong>Ventas</strong> contiene
            un valor en B5:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =Ventas!B5
          </pre>

          <p>
            La fórmula obtiene el contenido de la celda B5 de la hoja Ventas.
          </p>

          <p>
            Esta posibilidad permite organizar la información en diferentes
            hojas y utilizarla posteriormente en una hoja de resumen.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las referencias de celdas son especialmente importantes en tareas
          administrativas porque permiten construir planillas que se
          actualizan automáticamente.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Calcular totales de ventas.</li>
          <li>Aplicar descuentos e impuestos.</li>
          <li>Calcular porcentajes.</li>
          <li>Controlar gastos.</li>
          <li>Obtener información desde otras hojas.</li>
          <li>Crear resúmenes administrativos.</li>
          <li>Reutilizar fórmulas en grandes cantidades de registros.</li>
        </ul>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo completo
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Una planilla registra productos, cantidades y precios. Se desea
          calcular el importe de cada venta.
        </p>

        <div className="border p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Producto</th>
                  <th className="border p-3 text-left">Cantidad</th>
                  <th className="border p-3 text-left">Precio</th>
                  <th className="border p-3 text-left">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Cuaderno</td>
                  <td className="border p-3">5</td>
                  <td className="border p-3">$2.000</td>
                  <td className="border p-3">=B2*C2</td>
                </tr>

                <tr>
                  <td className="border p-3">Carpeta</td>
                  <td className="border p-3">3</td>
                  <td className="border p-3">$3.500</td>
                  <td className="border p-3">=B3*C3</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mt-6">
            Al copiar la fórmula de D2 hacia D3, la referencia cambia
            automáticamente de <strong>B2*C2</strong> a
            <strong> B3*C3</strong>. Esto demuestra el funcionamiento de las
            referencias relativas.
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
            Utilizar referencias en lugar de repetir valores manualmente.
          </li>
          <li>
            Utilizar referencias absolutas cuando un dato debe permanecer fijo.
          </li>
          <li>
            Verificar las referencias antes de copiar una fórmula.
          </li>
          <li>
            Mantener organizadas las hojas y los datos.
          </li>
          <li>
            Utilizar rangos cuando una operación involucra muchas celdas.
          </li>
          <li>
            Comprobar los resultados obtenidos después de modificar los datos.
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
              Actividad 1: Referencias relativas
            </h3>

            <p className="leading-relaxed">
              Crear una planilla con productos, cantidades y precios. Utilizar
              referencias de celdas para calcular automáticamente el importe
              de cada producto y copiar la fórmula hacia las demás filas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Referencias absolutas
            </h3>

            <p className="leading-relaxed">
              Crear una planilla de ventas y colocar un porcentaje de impuesto
              en una celda independiente. Utilizar una referencia absoluta para
              aplicar el mismo porcentaje a todos los productos.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Referencias mixtas
            </h3>

            <p className="leading-relaxed">
              Crear una tabla donde se utilicen referencias mixtas. Probar las
              referencias <strong>$A1</strong> y <strong>A$1</strong> y
              observar qué parte de la referencia permanece fija al copiar las
              fórmulas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Referencias entre hojas
            </h3>

            <p className="leading-relaxed">
              Crear un libro con las hojas <strong>Ventas</strong> y
              <strong> Resumen</strong>. Registrar datos en Ventas y utilizar
              referencias desde la hoja Resumen para mostrar diferentes
              resultados.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Análisis de una planilla
            </h3>

            <p className="leading-relaxed">
              Abrir una planilla existente e identificar todas las referencias
              utilizadas en sus fórmulas. Clasificarlas como relativas,
              absolutas o mixtas y explicar para qué se utiliza cada una.
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
          Crear una planilla para gestionar las ventas de un pequeño comercio.
          El libro deberá contener al menos dos hojas: una hoja para registrar
          las ventas y otra para generar un resumen.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Utilizar referencias relativas para calcular los importes.</li>
          <li>Utilizar una referencia absoluta para aplicar un porcentaje.</li>
          <li>Utilizar al menos una referencia mixta.</li>
          <li>Utilizar referencias entre hojas.</li>
          <li>Utilizar rangos para realizar cálculos.</li>
          <li>Comprobar que las fórmulas se actualicen al modificar los datos.</li>
        </ul>
      </section>

    </div>
  );
}