import CodeBlock from "@/app/components/CodeBlock";

export default function RecursividadPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Recursividad
        </h1>

        <p className="max-w-3xl leading-relaxed">
          La recursividad es una técnica de programación en la que una función
          se llama a sí misma para resolver un problema. En lugar de utilizar
          bucles, el problema se divide en versiones más pequeñas del mismo
          problema hasta llegar a un caso simple que pueda resolverse
          directamente.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Este concepto es muy utilizado en algoritmos, estructuras de datos
          como árboles y en muchos problemas matemáticos.
        </p>
      </section>

      {/* Conceptos clave */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conceptos importantes
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Caso base:</strong> es la condición que detiene la recursión.
          </li>
          <li>
            <strong>Llamada recursiva:</strong> la función se llama a sí misma.
          </li>
          <li>
            <strong>Dividir el problema:</strong> cada llamada resuelve una
            parte más pequeña del problema.
          </li>
        </ul>
      </section>

      {/* Ejemplo factorial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: cálculo del factorial
        </h2>

        <p className="max-w-3xl mb-6">
          El factorial de un número se define como la multiplicación de ese
          número por todos los números anteriores hasta llegar a 1.
        </p>

        <p className="max-w-3xl mb-6">
          Por ejemplo:
        </p>

        <ul className="list-disc list-inside mb-6 max-w-3xl">
          <li>5! = 5 × 4 × 3 × 2 × 1</li>
          <li>4! = 4 × 3 × 2 × 1</li>
        </ul>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code =
{`fun factorial(n: Int): Int {

    if (n == 1) {
        return 1
    }

    return n * factorial(n - 1)

}

fun main() {
    println(factorial(5))
}`}
/>
        </div>
      </section>

      {/* Ejemplo Fibonacci */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: sucesión de Fibonacci
        </h2>

        <p className="max-w-3xl mb-6">
          La sucesión de Fibonacci es una serie de números donde cada número
          es la suma de los dos anteriores.
        </p>

        <ul className="list-disc list-inside mb-6 max-w-3xl">
          <li>0, 1, 1, 2, 3, 5, 8, 13...</li>
        </ul>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code =
{`fun fibonacci(n: Int): Int {

    if (n <= 1) {
        return n
    }

    return fibonacci(n - 1) + fibonacci(n - 2)

}

fun main() {
    println(fibonacci(6))
}`}
/>
        </div>
      </section>

      {/* Ventajas y desventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas y desventajas
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">

            <thead>
              <tr className="border-b">
                <th className="p-3">Ventajas</th>
                <th className="p-3">Desventajas</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">
                  Código más simple y fácil de entender
                </td>
                <td className="p-3">
                  Puede consumir más memoria
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">
                  Muy útil para problemas complejos
                </td>
                <td className="p-3">
                  Puede ser más lento que un bucle
                </td>
              </tr>

              <tr>
                <td className="p-3">
                  Ideal para estructuras como árboles
                </td>
                <td className="p-3">
                  Riesgo de recursión infinita si no hay caso base
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explica con tus palabras qué es la recursividad.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Modifica el algoritmo factorial para calcular el factorial de 6.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea una función recursiva que cuente regresivamente desde un número
            hasta llegar a 0.
          </div>

        </div>
      </section>

    </div>
  );
}