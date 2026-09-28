export default function OperacionesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Operaciones y Cálculos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las planillas de cálculo permiten realizar diferentes operaciones
          matemáticas de manera rápida y automática.
          <br /><br />
          A través de fórmulas y operadores es posible realizar cálculos con
          los datos almacenados en las celdas y obtener resultados que se
          actualizan automáticamente cuando cambia la información.
        </p>
      </section>

      {/* Operaciones básicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operaciones Matemáticas Básicas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las operaciones básicas permiten trabajar con cantidades y realizar
          cálculos utilizados habitualmente en tareas administrativas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Suma (+):</strong> permite agregar valores.</li>
            <li><strong>Resta (-):</strong> permite calcular diferencias.</li>
            <li><strong>Multiplicación (*):</strong> permite calcular productos.</li>
            <li><strong>División (/):</strong> permite calcular cocientes.</li>
            <li><strong>Potencia (^):</strong> permite elevar un número a una potencia.</li>
          </ul>
        </div>
      </section>

      {/* Sumas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sumas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La suma permite obtener el total de diferentes valores.
          Puede utilizarse para calcular cantidades, importes, gastos o
          cualquier otro conjunto de datos numéricos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>=A1+B1</strong></li>
            <li><strong>=A1+B1+C1</strong></li>
            <li><strong>=100+250</strong></li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Si una oficina registra gastos en diferentes celdas, una fórmula
            puede utilizarse para obtener automáticamente el total.
          </p>
        </div>
      </section>

      {/* Restas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Restas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La resta permite calcular diferencias entre valores. Es frecuente
          utilizarla para obtener saldos, diferencias de cantidades o
          variaciones.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>=A1-B1</strong></li>
            <li><strong>=B5-C5</strong></li>
            <li><strong>=1000-350</strong></li>
          </ul>
        </div>
      </section>

      {/* Multiplicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Multiplicaciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La multiplicación permite obtener resultados a partir de dos o más
          valores. Es especialmente útil para calcular importes cuando se
          conoce una cantidad y un precio unitario.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplo:
          </p>

          <p>
            Si B2 contiene la cantidad y C2 contiene el precio unitario:
          </p>

          <p className="mt-4 font-semibold">
            =B2*C2
          </p>

          <p className="mt-6 leading-relaxed">
            El resultado será el importe total correspondiente a esa
            operación.
          </p>
        </div>
      </section>

      {/* Divisiones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Divisiones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La división permite distribuir o comparar cantidades y obtener un
          resultado proporcional.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>=A1/B1</strong></li>
            <li><strong>=B5/C5</strong></li>
            <li><strong>=1000/4</strong></li>
          </ul>

          <p className="mt-6 leading-relaxed">
            La división puede utilizarse, por ejemplo, para calcular un precio
            promedio por unidad o distribuir un importe entre diferentes
            cantidades.
          </p>
        </div>
      </section>

      {/* Potencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Potencias
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El operador de potencia permite elevar un valor a una determinada
          potencia.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold">
            Ejemplo:
          </p>

          <p className="mt-4">
            =A1^2
          </p>

          <p className="mt-6 leading-relaxed">
            Si A1 contiene el valor 5, el resultado será 25.
          </p>
        </div>
      </section>

      {/* Porcentajes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cálculos con Porcentajes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los porcentajes son utilizados frecuentemente para calcular
          descuentos, impuestos, aumentos, comisiones y variaciones.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplo: calcular un descuento
          </p>

          <p>
            Si A2 contiene un precio y B2 contiene un descuento del 10%:
          </p>

          <p className="mt-4 font-semibold">
            =A2*B2
          </p>

          <p className="mt-6">
            Para obtener el precio final:
          </p>

          <p className="mt-4 font-semibold">
            =A2-(A2*B2)
          </p>
        </div>
      </section>

      {/* Cálculos combinados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cálculos Combinados
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una fórmula puede combinar diferentes operaciones matemáticas para
          obtener un resultado más completo.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold">
            Ejemplo:
          </p>

          <p className="mt-4 font-semibold">
            =(A2*B2)-C2
          </p>

          <p className="mt-6 leading-relaxed">
            En este ejemplo se multiplica A2 por B2 y luego se resta el valor
            contenido en C2.
          </p>
        </div>
      </section>

      {/* Paréntesis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de Paréntesis
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los paréntesis permiten determinar qué operación debe realizarse
          primero dentro de un cálculo.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p>
            Por ejemplo:
          </p>

          <p className="mt-4 font-semibold">
            =(A1+B1)*C1
          </p>

          <p className="mt-6 leading-relaxed">
            Primero se suman los valores de A1 y B1. Luego, el resultado se
            multiplica por C1.
          </p>

          <p className="mt-6">
            Sin los paréntesis, el orden de las operaciones puede producir un
            resultado diferente.
          </p>
        </div>
      </section>

      {/* Referencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operaciones con Referencias de Celdas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Utilizar referencias permite que los cálculos se actualicen
          automáticamente cuando cambian los datos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplo:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>B2:</strong> cantidad de productos.</li>
            <li><strong>C2:</strong> precio unitario.</li>
            <li><strong>D2:</strong> importe total.</li>
          </ul>

          <p className="mt-6">
            En D2:
          </p>

          <p className="mt-4 font-semibold">
            =B2*C2
          </p>

          <p className="mt-6 leading-relaxed">
            Si se modifica B2 o C2, el resultado de D2 se actualizará
            automáticamente.
          </p>
        </div>
      </section>

      {/* Cálculos administrativos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cálculos Administrativos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las operaciones matemáticas tienen numerosas aplicaciones en el
          trabajo administrativo.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Calcular el total de una venta.</li>
            <li>Calcular descuentos.</li>
            <li>Calcular impuestos.</li>
            <li>Calcular aumentos de precios.</li>
            <li>Calcular saldos.</li>
            <li>Calcular diferencias.</li>
            <li>Calcular cantidades disponibles.</li>
            <li>Calcular presupuestos.</li>
            <li>Calcular comisiones.</li>
            <li>Realizar controles de gastos.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Planilla de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una aplicación práctica consiste en crear una planilla para
          registrar ventas y calcular automáticamente los importes.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Estructura:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>A:</strong> Producto.</li>
            <li><strong>B:</strong> Cantidad.</li>
            <li><strong>C:</strong> Precio unitario.</li>
            <li><strong>D:</strong> Descuento.</li>
            <li><strong>E:</strong> Total.</li>
          </ul>

          <p className="mt-6">
            Para calcular el importe sin descuento:
          </p>

          <p className="mt-4 font-semibold">
            =B2*C2
          </p>

          <p className="mt-6">
            Para calcular el importe descontado:
          </p>

          <p className="mt-4 font-semibold">
            =(B2*C2)-((B2*C2)*D2)
          </p>
        </div>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar un operador incorrecto.</li>
            <li>Seleccionar una celda equivocada.</li>
            <li>Olvidar el signo igual.</li>
            <li>Utilizar incorrectamente los paréntesis.</li>
            <li>Intentar dividir por cero.</li>
            <li>Utilizar datos de texto en operaciones numéricas.</li>
            <li>No verificar el resultado obtenido.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Organizar correctamente los datos antes de realizar cálculos.</li>
          <li>Utilizar referencias de celdas.</li>
          <li>Utilizar paréntesis cuando sean necesarios.</li>
          <li>Verificar los resultados.</li>
          <li>Evitar ingresar resultados manualmente cuando pueden calcularse.</li>
          <li>Revisar las fórmulas antes de copiarlas.</li>
          <li>Mantener una estructura clara de la planilla.</li>
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
            Crear una tabla con dos columnas de números y realizar sumas,
            restas, multiplicaciones y divisiones mediante fórmulas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear una tabla de productos con cantidad y precio unitario.
            Calcular automáticamente el importe total de cada producto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Crear una planilla de gastos y calcular el saldo disponible
            utilizando operaciones de suma y resta.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Crear una tabla de ventas con descuentos. Calcular el importe
            final utilizando operaciones combinadas y porcentajes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Modificar diferentes valores de la planilla y comprobar cómo se
            actualizan automáticamente los resultados.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Imagina que trabajas como operador de informática en una oficina
          comercial.

          <br /><br />

          Tu responsable necesita una planilla que permita registrar las
          ventas de una semana y obtener automáticamente los resultados.

          <br /><br />

          La planilla deberá contener:

          <br /><br />

          ✔ Producto <br />
          ✔ Cantidad <br />
          ✔ Precio unitario <br />
          ✔ Descuento <br />
          ✔ Importe final

          <br /><br />

          Deberás utilizar operaciones de multiplicación, resta y porcentaje
          para obtener automáticamente el importe final de cada venta.

          <br /><br />

          Luego deberás agregar una fila que permita obtener el total de
          ventas de la semana.

          <br /><br />

          Finalmente, modifica algunos precios y cantidades y comprueba que
          todos los resultados se actualicen correctamente.

        </div>
      </section>

    </div>
  );
}