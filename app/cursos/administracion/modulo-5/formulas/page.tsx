export default function FormulasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Fórmulas en la Planilla de Cálculo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las fórmulas permiten realizar cálculos de manera automática
          utilizando los valores almacenados en las celdas de una planilla.
          <br /><br />
          Son una de las herramientas fundamentales para trabajar con datos,
          ya que permiten automatizar operaciones y obtener resultados sin
          necesidad de realizar los cálculos manualmente.
        </p>
      </section>

      {/* Qué es una fórmula */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Fórmula?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="leading-relaxed">
            Una fórmula es una expresión que indica a la planilla qué
            operación debe realizar.
            <br /><br />
            Las fórmulas pueden utilizar números directamente o, de manera más
            habitual, referencias a las celdas que contienen los valores que
            se desean utilizar.
            <br /><br />
            Generalmente, una fórmula comienza con el signo
            <strong> = </strong>.
          </p>
        </div>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de una Fórmula
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una fórmula puede estar formada por diferentes elementos que
          permiten indicar qué cálculo debe realizarse.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li><strong>=</strong> indica el comienzo de la fórmula.</li>
            <li><strong>Referencias de celdas</strong> indican dónde se encuentran los datos.</li>
            <li><strong>Operadores</strong> indican qué operación debe realizarse.</li>
            <li><strong>Valores</strong> pueden utilizarse directamente cuando sea necesario.</li>
          </ul>

          <p className="mt-6">
            Por ejemplo:
          </p>

          <p className="mt-4 font-semibold">
            =A1+B1
          </p>
        </div>
      </section>

      {/* Operadores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores Matemáticos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los operadores permiten indicar qué operación matemática debe
          realizar la planilla.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li><strong>+</strong> — suma.</li>
            <li><strong>-</strong> — resta.</li>
            <li><strong>*</strong> — multiplicación.</li>
            <li><strong>/</strong> — división.</li>
            <li><strong>^</strong> — potencia.</li>
            <li><strong>%</strong> — porcentaje.</li>
          </ul>
        </div>
      </section>

      {/* Suma */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas de Suma
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La suma permite agregar diferentes valores. Puede realizarse
          utilizando números directamente o referencias de celdas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold">
            Ejemplo:
          </p>

          <p className="mt-4">
            =A1+B1
          </p>

          <p className="mt-6 leading-relaxed">
            Si A1 contiene 100 y B1 contiene 50, el resultado será 150.
          </p>

          <p className="mt-6">
            También es posible sumar varios valores:
          </p>

          <p className="mt-4">
            =A1+B1+C1+D1
          </p>
        </div>
      </section>

      {/* Resta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas de Resta
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La resta permite obtener la diferencia entre dos o más valores.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold">
            Ejemplo:
          </p>

          <p className="mt-4">
            =A1-B1
          </p>

          <p className="mt-6 leading-relaxed">
            Si A1 contiene 500 y B1 contiene 125, el resultado será 375.
          </p>
        </div>
      </section>

      {/* Multiplicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas de Multiplicación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La multiplicación permite calcular el resultado de multiplicar dos
          o más valores.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold">
            Ejemplo:
          </p>

          <p className="mt-4">
            =A1*B1
          </p>

          <p className="mt-6 leading-relaxed">
            Si A1 contiene la cantidad de productos y B1 contiene el precio
            unitario, la fórmula permite obtener el importe total.
          </p>
        </div>
      </section>

      {/* División */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas de División
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La división permite obtener el resultado de dividir un valor por
          otro.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold">
            Ejemplo:
          </p>

          <p className="mt-4">
            =A1/B1
          </p>

          <p className="mt-6 leading-relaxed">
            Si A1 contiene 1000 y B1 contiene 4, el resultado será 250.
          </p>
        </div>
      </section>

      {/* Orden de operaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Orden de las Operaciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando una fórmula contiene varias operaciones, la planilla sigue
          un orden determinado para obtener el resultado.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            De manera general:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Se resuelven las operaciones entre paréntesis.</li>
            <li>Se resuelven las potencias.</li>
            <li>Se realizan multiplicaciones y divisiones.</li>
            <li>Se realizan sumas y restas.</li>
          </ol>

          <p className="mt-6">
            Por ejemplo:
          </p>

          <p className="mt-4 font-semibold">
            =A1+B1*C1
          </p>

          <p className="mt-4 leading-relaxed">
            Primero se realiza la multiplicación y luego la suma.
          </p>
        </div>
      </section>

      {/* Paréntesis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de Paréntesis
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los paréntesis permiten establecer qué operación debe realizarse
          primero dentro de una fórmula.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p>
            Por ejemplo:
          </p>

          <p className="mt-4 font-semibold">
            =(A1+B1)*C1
          </p>

          <p className="mt-6 leading-relaxed">
            En este caso, primero se suman A1 y B1. Luego, el resultado se
            multiplica por C1.
          </p>
        </div>
      </section>

      {/* Referencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas con Referencias de Celdas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Utilizar referencias de celdas permite crear fórmulas que se
          actualizan automáticamente cuando cambian los datos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p>
            Por ejemplo, si una planilla contiene:
          </p>

          <ul className="list-disc list-inside space-y-3 mt-4">
            <li>A2: cantidad de productos.</li>
            <li>B2: precio unitario.</li>
          </ul>

          <p className="mt-6">
            Se puede utilizar:
          </p>

          <p className="mt-4 font-semibold">
            =A2*B2
          </p>

          <p className="mt-6 leading-relaxed">
            De esta manera, si se modifica la cantidad o el precio, el
            resultado se actualiza automáticamente.
          </p>
        </div>
      </section>

      {/* Copiar fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Copiar Fórmulas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las ventajas de trabajar con referencias de celdas es que
          las fórmulas pueden copiarse a otras filas o columnas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Por ejemplo, si una tabla contiene cien productos, no es necesario
            escribir manualmente la fórmula para calcular el total de cada
            producto.
            <br /><br />
            Se puede escribir la fórmula en la primera fila y copiarla hacia
            las filas restantes.
          </p>
        </div>
      </section>

      {/* Fórmulas administrativas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas Aplicadas a Tareas Administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las fórmulas permiten automatizar numerosos cálculos utilizados en
          actividades administrativas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunos ejemplos son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Calcular el importe de una venta.</li>
            <li>Calcular descuentos.</li>
            <li>Calcular impuestos.</li>
            <li>Calcular diferencias entre valores.</li>
            <li>Calcular porcentajes.</li>
            <li>Calcular saldos.</li>
            <li>Calcular cantidades disponibles.</li>
            <li>Realizar operaciones sobre presupuestos.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Cálculo de una Venta
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Supongamos que una empresa necesita calcular automáticamente el
          importe de cada venta.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li><strong>A2:</strong> Producto.</li>
            <li><strong>B2:</strong> Cantidad.</li>
            <li><strong>C2:</strong> Precio unitario.</li>
            <li><strong>D2:</strong> Total.</li>
          </ul>

          <p className="mt-6">
            En la celda D2 se puede escribir:
          </p>

          <p className="mt-4 font-semibold">
            =B2*C2
          </p>

          <p className="mt-6 leading-relaxed">
            La fórmula multiplica la cantidad por el precio unitario y obtiene
            automáticamente el total de la venta.
          </p>
        </div>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes al Utilizar Fórmulas
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li>Olvidar colocar el signo igual.</li>
            <li>Utilizar una referencia de celda incorrecta.</li>
            <li>Utilizar un operador equivocado.</li>
            <li>Olvidar cerrar un paréntesis.</li>
            <li>Intentar dividir por cero.</li>
            <li>Modificar accidentalmente una referencia.</li>
            <li>Utilizar texto cuando se necesita un valor numérico.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar referencias de celdas en lugar de repetir valores.</li>
          <li>Revisar las fórmulas antes de copiarla a otras celdas.</li>
          <li>Utilizar paréntesis cuando sea necesario.</li>
          <li>Verificar los resultados obtenidos.</li>
          <li>Mantener organizados los datos utilizados por las fórmulas.</li>
          <li>Evitar modificar accidentalmente las celdas que contienen fórmulas.</li>
          <li>Utilizar nombres claros para las columnas.</li>
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
            Crear una tabla con dos columnas de números y utilizar fórmulas
            para realizar sumas, restas, multiplicaciones y divisiones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear una tabla de productos con las columnas
            <strong> Cantidad</strong>, <strong>Precio Unitario</strong> y
            <strong> Total</strong>. Utilizar una fórmula para calcular el
            total de cada producto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Crear diferentes fórmulas que utilicen paréntesis y comprobar cómo
            cambia el resultado cuando se modifica el orden de las operaciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Crear una planilla de ventas con al menos diez productos y copiar
            la fórmula de cálculo del total a todas las filas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Modificar algunos de los valores utilizados por las fórmulas y
            comprobar cómo cambian automáticamente los resultados.
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

          Tu responsable necesita una planilla para registrar las ventas
          realizadas durante una semana.

          <br /><br />

          La planilla deberá contener:

          <br /><br />

          ✔ Producto <br />
          ✔ Cantidad <br />
          ✔ Precio unitario <br />
          ✔ Descuento <br />
          ✔ Total

          <br /><br />

          Deberás crear las fórmulas necesarias para calcular automáticamente
          el importe de cada operación.

          <br /><br />

          Luego deberás modificar diferentes cantidades y precios para
          comprobar que los resultados se actualicen automáticamente.

          <br /><br />

          Finalmente, explica qué ventajas tiene utilizar fórmulas en una
          planilla administrativa en comparación con realizar los cálculos
          manualmente.

        </div>
      </section>

    </div>
  );
}