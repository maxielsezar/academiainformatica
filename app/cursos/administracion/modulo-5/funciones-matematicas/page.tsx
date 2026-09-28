export default function FuncionesMatematicasPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones Matemáticas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones matemáticas permiten realizar cálculos numéricos de
          manera automática sobre los datos de una planilla. Son especialmente
          útiles para operaciones administrativas que requieren trabajar con
          cantidades, importes, porcentajes, redondeos y otros valores
          numéricos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Estas funciones permiten simplificar cálculos y reducir errores al
          trabajar con grandes cantidades de información.
        </p>
      </section>

      {/* SUMA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          SUMA
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>SUMA</strong> permite sumar varios valores o un
          rango completo de celdas.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMA(A1:A10)
          </pre>

          <p>
            También puede utilizarse para sumar valores individuales:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMA(A1;A3;A5)
          </pre>

          <p>
            Es una de las funciones más utilizadas para obtener totales de
            ventas, gastos, cantidades y otros registros numéricos.
          </p>
        </div>
      </section>

      {/* PRODUCTO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          PRODUCTO
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>PRODUCTO</strong> permite multiplicar varios
          valores entre sí.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =PRODUCTO(A1:A5)
          </pre>

          <p>
            También se puede utilizar con valores individuales:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =PRODUCTO(A1;B1;C1)
          </pre>

          <p>
            Puede resultar útil para realizar cálculos sobre cantidades y
            precios.
          </p>
        </div>
      </section>

      {/* POTENCIA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          POTENCIA
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>POTENCIA</strong> permite elevar un número a una
          determinada potencia.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =POTENCIA(A1;2)
          </pre>

          <p>
            Si A1 contiene el valor 5, el resultado será 25.
          </p>

          <p>
            También puede utilizarse directamente el operador
            <strong> ^ </strong>:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =A1^2
          </pre>
        </div>
      </section>

      {/* RAIZ */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          RAIZ
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>RAIZ</strong> permite obtener la raíz cuadrada de
          un número.
        </p>

        <div className="border p-6 rounded-xl">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =RAIZ(A1)
          </pre>

          <p className="leading-relaxed mt-4">
            Por ejemplo, si A1 contiene 81, el resultado será 9.
          </p>
        </div>
      </section>

      {/* ABS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ABS
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>ABS</strong> devuelve el valor absoluto de un
          número, es decir, elimina su signo negativo.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =ABS(A1)
          </pre>

          <p>
            Si A1 contiene <strong>-250</strong>, el resultado será
            <strong> 250</strong>.
          </p>

          <p>
            Puede utilizarse para analizar diferencias o variaciones sin tener
            en cuenta si el resultado es positivo o negativo.
          </p>
        </div>
      </section>

      {/* REDONDEAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          REDONDEAR
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>REDONDEAR</strong> permite redondear un número
          indicando la cantidad de decimales que se desean conservar.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =REDONDEAR(A1;2)
          </pre>

          <p>
            En este ejemplo, el valor de A1 se redondea dejando dos decimales.
          </p>
        </div>
      </section>

      {/* ENTERO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ENTERO
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>ENTERO</strong> devuelve la parte entera de un
          número, eliminando los decimales.
        </p>

        <div className="border p-6 rounded-xl">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =ENTERO(A1)
          </pre>

          <p className="leading-relaxed mt-4">
            Por ejemplo, si A1 contiene 18,75, el resultado será 18.
          </p>
        </div>
      </section>

      {/* RESIDUO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          RESIDUO
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>RESIDUO</strong> devuelve el resto de una división
          entre dos números.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =RESIDUO(A1;B1)
          </pre>

          <p>
            Por ejemplo, si A1 contiene 17 y B1 contiene 5, el resultado será
            2, ya que 17 dividido 5 tiene un resto de 2.
          </p>
        </div>
      </section>

      {/* SUMAR.SI */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          SUMAR.SI
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          <strong>SUMAR.SI</strong> permite sumar únicamente los valores que
          cumplen una determinada condición.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMAR.SI(A2:A20;"&gt;100";B2:B20)
          </pre>

          <p>
            En este caso se suman los valores de B2:B20 cuando el valor
            correspondiente en A2:A20 es mayor que 100.
          </p>

          <p>
            Esta función resulta muy útil para realizar análisis selectivos de
            información.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las funciones matemáticas pueden aplicarse a diferentes situaciones
          de trabajo administrativo.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Calcular totales de ventas.</li>
          <li>Multiplicar cantidades por precios.</li>
          <li>Calcular porcentajes y variaciones.</li>
          <li>Redondear importes monetarios.</li>
          <li>Obtener diferencias entre valores.</li>
          <li>Calcular raíces y potencias cuando sean necesarias.</li>
          <li>Analizar valores positivos y negativos.</li>
          <li>Realizar sumas condicionadas.</li>
        </ul>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: cálculo de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una empresa registra la cantidad de productos vendidos y el precio
          unitario. A partir de esos datos puede calcular el importe total de
          cada operación.
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
                  <td className="border p-3">Producto A</td>
                  <td className="border p-3">10</td>
                  <td className="border p-3">$2.500</td>
                  <td className="border p-3">=PRODUCTO(B2;C2)</td>
                </tr>

                <tr>
                  <td className="border p-3">Producto B</td>
                  <td className="border p-3">5</td>
                  <td className="border p-3">$4.000</td>
                  <td className="border p-3">=PRODUCTO(B3;C3)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mt-6">
            De esta manera, la fórmula puede copiarse hacia las demás filas y
            calcular automáticamente el importe de cada producto.
          </p>
        </div>
      </section>

      {/* Combinación de funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar funciones y operaciones
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las funciones pueden combinarse con operaciones matemáticas para
          construir cálculos más completos.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Por ejemplo, para calcular un precio con un 21 % de impuesto:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =A2*1,21
          </pre>

          <p>
            También es posible utilizar una celda que contenga el porcentaje:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =A2*(1+$B$1)
          </pre>

          <p>
            En este caso, la referencia absoluta permite mantener fijo el
            porcentaje al copiar la fórmula.
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
            Elegir la función adecuada para cada cálculo.
          </li>
          <li>
            Verificar los argumentos utilizados.
          </li>
          <li>
            Comprobar los rangos seleccionados.
          </li>
          <li>
            Utilizar referencias de celdas en lugar de repetir valores.
          </li>
          <li>
            Revisar los resultados cuando se modifican los datos.
          </li>
          <li>
            Mantener organizada la información utilizada por las funciones.
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
              Actividad 1: Operaciones matemáticas
            </h3>

            <p className="leading-relaxed">
              Crear una planilla con diferentes valores y utilizar SUMA,
              PRODUCTO, POTENCIA y RAIZ para realizar distintos cálculos.
              Comparar los resultados obtenidos.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Redondeo de importes
            </h3>

            <p className="leading-relaxed">
              Crear una lista de importes con varios decimales y utilizar
              REDONDEAR para obtener valores con dos decimales. Comparar los
              valores originales con los resultados.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Diferencias de valores
            </h3>

            <p className="leading-relaxed">
              Registrar ingresos y gastos y calcular las diferencias entre
              ambos valores. Utilizar ABS para obtener el valor absoluto de las
              diferencias.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Cálculos condicionados
            </h3>

            <p className="leading-relaxed">
              Crear una tabla de ventas y utilizar SUMAR.SI para obtener el
              total de las ventas que cumplan una condición determinada.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Planilla de precios
            </h3>

            <p className="leading-relaxed">
              Crear una planilla con productos, cantidades y precios. Calcular
              los importes mediante PRODUCTO, aplicar un porcentaje mediante
              una referencia absoluta y redondear los resultados.
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
          Crear una planilla para gestionar los movimientos económicos de una
          pequeña organización. Registrar ingresos, gastos y operaciones
          realizadas durante un período determinado.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Calcular totales utilizando SUMA.</li>
          <li>Calcular importes mediante PRODUCTO.</li>
          <li>Aplicar redondeos utilizando REDONDEAR.</li>
          <li>Calcular diferencias utilizando operaciones matemáticas.</li>
          <li>Utilizar ABS para analizar diferencias.</li>
          <li>Aplicar al menos una referencia absoluta.</li>
          <li>
            Utilizar SUMAR.SI para obtener un resultado condicionado.
          </li>
          <li>
            Presentar los resultados de forma clara y organizada.
          </li>
        </ul>
      </section>

    </div>
  );
}