export default function FuncionesPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones son fórmulas predefinidas que permiten realizar
          cálculos de manera rápida y sencilla. En una planilla de cálculo,
          permiten trabajar con grandes cantidades de información sin tener
          que escribir manualmente cada operación.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una función recibe uno o varios valores, llamados argumentos, realiza
          una operación y devuelve un resultado.
        </p>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de una función
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las funciones comienzan con el signo igual, seguido del nombre de la
          función y, entre paréntesis, los argumentos que se desean utilizar.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMA(A1:A10)
          </pre>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>=</strong> indica que se realizará una fórmula.</li>
            <li><strong>SUMA</strong> es el nombre de la función.</li>
            <li><strong>A1:A10</strong> es el rango utilizado como argumento.</li>
          </ul>
        </div>
      </section>

      {/* Función SUMA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Función SUMA
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>SUMA</strong> permite sumar los valores de una o
          varias celdas.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMA(A1:A10)
          </pre>

          <p>
            También es posible sumar diferentes celdas:
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMA(A1;C1;E1)
          </pre>
        </div>
      </section>

      {/* PROMEDIO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Función PROMEDIO
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>PROMEDIO</strong> calcula el valor medio de un
          conjunto de números.
        </p>

        <div className="border p-6 rounded-xl">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =PROMEDIO(B2:B10)
          </pre>

          <p className="leading-relaxed mt-4">
            Puede utilizarse, por ejemplo, para calcular el promedio de ventas
            diarias, gastos mensuales o calificaciones.
          </p>
        </div>
      </section>

      {/* MAX Y MIN */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones MAX y MIN
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las funciones <strong>MAX</strong> y <strong>MIN</strong> permiten
          identificar respectivamente el valor más alto y el valor más bajo de
          un conjunto de datos.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =MAX(C2:C20)
          </pre>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =MIN(C2:C20)
          </pre>

          <p>
            Pueden utilizarse para analizar ventas máximas y mínimas, gastos,
            precios, cantidades y otros datos numéricos.
          </p>
        </div>
      </section>

      {/* CONTAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Función CONTAR
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>CONTAR</strong> permite conocer cuántas celdas
          contienen valores numéricos dentro de un rango.
        </p>

        <div className="border p-6 rounded-xl">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =CONTAR(A2:A50)
          </pre>

          <p className="leading-relaxed mt-4">
            Es útil cuando se necesita determinar la cantidad de registros
            numéricos existentes en una planilla.
          </p>
        </div>
      </section>

      {/* CONTARA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Función CONTARA
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          <strong>CONTARA</strong> permite contar las celdas que contienen
          algún tipo de información, incluyendo textos y números.
        </p>

        <div className="border p-6 rounded-xl">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =CONTARA(A2:A50)
          </pre>
        </div>
      </section>

      {/* Funciones con rangos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Utilización de rangos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Muchas funciones trabajan con rangos de celdas. Esto permite analizar
          una gran cantidad de datos mediante una sola fórmula.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>Por ejemplo:</p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMA(B2:B100)
          </pre>

          <p>
            Esta fórmula suma todos los valores comprendidos entre B2 y B100.
          </p>

          <pre className=" p-4 rounded-lg overflow-x-auto">
            =PROMEDIO(C2:C100)
          </pre>

          <p>
            Esta segunda fórmula obtiene el promedio de los valores del rango.
          </p>
        </div>
      </section>

      {/* Funciones combinadas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar funciones con referencias
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las funciones pueden utilizarse junto con referencias de celdas,
          operadores y otros elementos de las fórmulas.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className=" p-4 rounded-lg overflow-x-auto">
            =SUMA(B2:B10)*$E$1
          </pre>

          <p>
            En este ejemplo se suma un rango y luego se multiplica el resultado
            por un valor almacenado en una referencia absoluta.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las funciones permiten automatizar numerosos cálculos que aparecen
          habitualmente en las tareas administrativas.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Calcular el total de ventas.</li>
          <li>Obtener promedios de ventas o gastos.</li>
          <li>Identificar el mayor y menor valor.</li>
          <li>Contar registros.</li>
          <li>Analizar información de clientes.</li>
          <li>Controlar gastos mensuales.</li>
          <li>Preparar informes y resúmenes.</li>
        </ul>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: resumen de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una empresa registra sus ventas durante un mes. A partir de los
          datos registrados puede crear un pequeño resumen utilizando
          diferentes funciones.
        </p>

        <div className="border p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Concepto</th>
                  <th className="border p-3 text-left">Fórmula</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Total de ventas</td>
                  <td className="border p-3">=SUMA(B2:B31)</td>
                </tr>

                <tr>
                  <td className="border p-3">Promedio diario</td>
                  <td className="border p-3">=PROMEDIO(B2:B31)</td>
                </tr>

                <tr>
                  <td className="border p-3">Venta máxima</td>
                  <td className="border p-3">=MAX(B2:B31)</td>
                </tr>

                <tr>
                  <td className="border p-3">Venta mínima</td>
                  <td className="border p-3">=MIN(B2:B31)</td>
                </tr>

                <tr>
                  <td className="border p-3">Cantidad de registros</td>
                  <td className="border p-3">=CONTAR(B2:B31)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Diferencia entre funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elegir la función adecuada
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="space-y-4">
            <li>
              <strong>SUMA:</strong> cuando se necesita obtener un total.
            </li>

            <li>
              <strong>PROMEDIO:</strong> cuando se necesita obtener un valor
              medio.
            </li>

            <li>
              <strong>MAX:</strong> cuando se necesita encontrar el valor
              mayor.
            </li>

            <li>
              <strong>MIN:</strong> cuando se necesita encontrar el valor
              menor.
            </li>

            <li>
              <strong>CONTAR:</strong> cuando se necesita contar valores
              numéricos.
            </li>

            <li>
              <strong>CONTARA:</strong> cuando se necesita contar celdas que
              contienen información.
            </li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Utilizar funciones en lugar de realizar cálculos manualmente.
          </li>
          <li>
            Verificar que el rango seleccionado sea correcto.
          </li>
          <li>
            Revisar las referencias utilizadas en cada fórmula.
          </li>
          <li>
            Utilizar nombres de funciones adecuados para cada cálculo.
          </li>
          <li>
            Comprobar los resultados antes de presentar una planilla.
          </li>
          <li>
            Mantener organizados los datos que serán utilizados por las
            funciones.
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
              Actividad 1: Función SUMA
            </h3>

            <p className="leading-relaxed">
              Crear una planilla con las ventas realizadas durante 10 días.
              Utilizar la función SUMA para obtener el total de ventas del
              período.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Promedios
            </h3>

            <p className="leading-relaxed">
              Registrar los gastos de una organización durante un mes y
              utilizar PROMEDIO para calcular el gasto promedio.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Valores máximos y mínimos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con diferentes ventas y utilizar MAX y MIN para
              identificar la venta de mayor y menor importe.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Contar registros
            </h3>

            <p className="leading-relaxed">
              Crear una lista de registros administrativos y utilizar CONTAR y
              CONTARA para comparar la cantidad de celdas numéricas con la
              cantidad de celdas que contienen información.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Resumen administrativo
            </h3>

            <p className="leading-relaxed">
              Crear una planilla con información de ventas y generar un
              resumen que incluya total, promedio, valor máximo, valor mínimo y
              cantidad de registros.
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
          Crear una planilla para analizar las ventas mensuales de un comercio.
          La planilla deberá contener los datos de cada operación y un sector
          destinado al resumen de la información.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Calcular el total de ventas mediante SUMA.</li>
          <li>Calcular el promedio de ventas mediante PROMEDIO.</li>
          <li>Identificar la venta de mayor importe mediante MAX.</li>
          <li>Identificar la venta de menor importe mediante MIN.</li>
          <li>Contar la cantidad de registros mediante CONTAR.</li>
          <li>Contar los registros con información mediante CONTARA.</li>
          <li>
            Organizar y presentar los resultados de manera clara y ordenada.
          </li>
        </ul>
      </section>

    </div>
  );
}