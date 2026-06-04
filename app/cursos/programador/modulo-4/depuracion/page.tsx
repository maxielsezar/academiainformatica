import CodeBlock from "@/app/components/CodeBlock";

export default function DepuracionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Depuración de Aplicaciones Java con IntelliJ IDEA
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La depuración (debugging) es el proceso de identificar, analizar y
          corregir errores en un programa. Es una de las habilidades más
          importantes para cualquier desarrollador, ya que permite comprender
          cómo se comporta realmente una aplicación durante su ejecución.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En esta unidad utilizaremos el sistema de ventas para aprender a
          detectar errores, inspeccionar variables y seguir paso a paso la
          ejecución del código utilizando las herramientas de IntelliJ IDEA.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la Depuración?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Depurar consiste en ejecutar un programa de manera controlada para
          observar qué ocurre internamente. Esto permite descubrir errores
          lógicos, cálculos incorrectos, valores inesperados o problemas en el
          flujo de ejecución.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6 bg-gray-50">
          <p className="font-semibold">
            El objetivo de la depuración no es solamente encontrar el error,
            sino comprender por qué ocurre.
          </p>
        </div>
      </section>

      {/* Cuándo depurar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuándo debemos depurar?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Cuando un cálculo devuelve resultados incorrectos.</li>
          <li>Cuando aparece una excepción inesperada.</li>
          <li>Cuando una funcionalidad no se comporta como se esperaba.</li>
          <li>Cuando una prueba unitaria falla.</li>
          <li>Cuando necesitamos comprender el funcionamiento del código.</li>
        </ul>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en el Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Supongamos que el subtotal de una venta se calcula incorrectamente.
          Debemos investigar qué valores reciben las variables y cómo se ejecuta
          el método.
        </p>

        <CodeBlock
          code={`public double calcularSubtotal() {

    return cantidad + precio;
}`}
        />
      </section>

      {/* Detectar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Identificando el Problema
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A simple vista puede parecer correcto, pero el subtotal debería
          multiplicar cantidad por precio.
        </p>

        <CodeBlock
          code={`public double calcularSubtotal() {

    return cantidad * precio;
}`}
        />
      </section>

      {/* Breakpoint */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Breakpoint?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un breakpoint es un punto de interrupción que detiene la ejecución del
          programa para que podamos inspeccionar el estado actual de las
          variables y analizar qué está ocurriendo.
        </p>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl mt-4">
          <li>Buscar la línea que se desea analizar.</li>
          <li>Hacer clic en el margen izquierdo.</li>
          <li>Aparecerá un punto rojo.</li>
          <li>La ejecución se detendrá en ese lugar.</li>
        </ol>
      </section>

      {/* Ejecutar debugger */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejecutar el Debugger en IntelliJ
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Colocar uno o más breakpoints.</li>
          <li>Hacer clic en el botón Debug.</li>
          <li>Ejecutar la funcionalidad deseada.</li>
          <li>El programa se detendrá automáticamente.</li>
          <li>Analizar las variables y el flujo de ejecución.</li>
        </ol>
      </section>

      {/* Variables */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Inspección de Variables
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando la ejecución se detiene, IntelliJ muestra el valor actual de
          todas las variables disponibles.
        </p>

        <CodeBlock
          code={`cantidad = 3
precio = 1500

subtotal = ?`}
        />
      </section>

      {/* Navegación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Controles de Depuración
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Acción</th>
                <th className="border p-3">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Step Over</td>
                <td className="border p-3">
                  Ejecuta la línea actual y pasa a la siguiente.
                </td>
              </tr>
              <tr>
                <td className="border p-3">Step Into</td>
                <td className="border p-3">
                  Ingresa dentro de un método.
                </td>
              </tr>
              <tr>
                <td className="border p-3">Step Out</td>
                <td className="border p-3">
                  Sale del método actual.
                </td>
              </tr>
              <tr>
                <td className="border p-3">Resume</td>
                <td className="border p-3">
                  Continúa la ejecución normal.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Depurar venta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Depurando el Total de una Venta
        </h2>

        <CodeBlock
          code={`public double calcularTotal() {

    double total = 0;

    for(DetalleVenta detalle : detalles) {

        total += detalle.calcularSubtotal();
    }

    return total;
}`}
        />
      </section>

      {/* Qué observar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué deberíamos observar?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>La cantidad de elementos en la lista.</li>
          <li>El subtotal de cada detalle.</li>
          <li>El valor acumulado de la variable total.</li>
          <li>El resultado final devuelto por el método.</li>
        </ul>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes Detectados con el Debugger
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Variables con valores incorrectos.</li>
          <li>Listas vacías inesperadamente.</li>
          <li>Bucles infinitos.</li>
          <li>Condiciones mal planteadas.</li>
          <li>Objetos con valores null.</li>
          <li>Cálculos incorrectos.</li>
        </ul>
      </section>

      {/* Null */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Detectando NullPointerException
        </h2>

        <CodeBlock
          code={`Cliente cliente = null;

System.out.println(
    cliente.getNombre()
);`}
        />
        
        <p className="leading-relaxed max-w-3xl mt-4">
          Utilizando el debugger podemos identificar rápidamente qué variable
          tiene el valor null y en qué punto se produce el problema.
        </p>
      </section>

      {/* Relación testing */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación entre Testing y Depuración
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las pruebas unitarias ayudan a detectar que existe un problema, mientras
          que la depuración permite encontrar la causa exacta del error.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p>
            <strong>Testing:</strong> detecta el error.
          </p>

          <p className="mt-3">
            <strong>Debugging:</strong> encuentra la causa del error.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas de Depuración
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Reproducir el error antes de corregirlo.</li>
          <li>Analizar los datos de entrada.</li>
          <li>Utilizar breakpoints estratégicamente.</li>
          <li>Inspeccionar variables importantes.</li>
          <li>Corregir una causa a la vez.</li>
          <li>Volver a ejecutar las pruebas después de corregir.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>
            Colocar breakpoints en el método calcularSubtotal() y analizar los
            valores de las variables.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Depurar el método calcularTotal() paso a paso.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Provocar intencionalmente un NullPointerException e identificar su causa.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Detectar y corregir un error lógico en un cálculo del sistema de ventas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Elaborar un informe describiendo los errores encontrados y cómo fueron solucionados.
          </div>

        </div>
      </section>

    </div>
  );
}