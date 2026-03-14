export default function DivideYVencerasPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Técnica Divide y Vencerás
        </h1>

        <p className="max-w-3xl leading-relaxed">
          <strong>Divide y vencerás</strong> es una técnica utilizada en el diseño
          de algoritmos que consiste en dividir un problema grande en varios
          problemas más pequeños, resolver cada uno de ellos y luego combinar
          los resultados para obtener la solución final.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Esta técnica es muy utilizada en algoritmos eficientes porque permite
          simplificar problemas complejos y aprovechar la recursividad.
        </p>
      </section>

      {/* Etapas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etapas de la técnica
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Dividir:</strong> separar el problema en subproblemas más pequeños.
          </li>
          <li>
            <strong>Resolver:</strong> resolver cada subproblema, generalmente usando recursividad.
          </li>
          <li>
            <strong>Combinar:</strong> unir las soluciones parciales para obtener el resultado final.
          </li>
        </ol>
      </section>

      {/* Ejemplo simple */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo simple
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Supongamos que queremos sumar los elementos de una lista:
        </p>

        <p className="font-mono border p-4 rounded-lg max-w-md mt-4">
          [4, 2, 7, 3]
        </p>

        <p className="max-w-3xl leading-relaxed mt-6">
          Podemos dividir el problema en dos partes:
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-3xl">
          <li>Primera mitad: [4, 2]</li>
          <li>Segunda mitad: [7, 3]</li>
        </ul>

        <p className="max-w-3xl leading-relaxed mt-4">
          Luego resolvemos cada parte y combinamos los resultados:
        </p>

        <p className="font-mono border p-4 rounded-lg max-w-md mt-4">
          (4 + 2) + (7 + 3) = 16
        </p>
      </section>

      {/* Algoritmos que usan esta técnica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Algoritmos que utilizan Divide y Vencerás
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Búsqueda binaria</strong>
          </li>
          <li>
            <strong>Merge Sort</strong>
          </li>
          <li>
            <strong>QuickSort</strong>
          </li>
          <li>
            <strong>Algoritmos de multiplicación eficiente</strong>
          </li>
        </ul>
      </section>

      {/* Ejemplo en Kotlin */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Kotlin
        </h2>

        <p className="max-w-3xl mb-6">
          Un ejemplo simple de Divide y Vencerás es calcular la suma de un
          arreglo usando recursividad.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun suma(arr: IntArray, inicio: Int, fin: Int): Int {

    if (inicio == fin) {
        return arr[inicio]
    }

    val mitad = (inicio + fin) / 2

    val izquierda = suma(arr, inicio, mitad)
    val derecha = suma(arr, mitad + 1, fin)

    return izquierda + derecha
}

fun main() {

    val numeros = intArrayOf(4, 2, 7, 3)

    println(suma(numeros, 0, numeros.size - 1))

}`}
</pre>
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de esta técnica
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Permite resolver problemas complejos de forma más simple.</li>
          <li>Facilita el uso de recursividad.</li>
          <li>Permite crear algoritmos muy eficientes.</li>
          <li>Es una técnica muy utilizada en programación avanzada.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explica con tus palabras qué significa la técnica
            "Divide y Vencerás".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Investiga qué algoritmo utiliza Divide y Vencerás
            además de QuickSort y Merge Sort.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Describe cómo se aplica esta técnica en la búsqueda binaria.
          </div>

        </div>
      </section>

    </div>
  );
}