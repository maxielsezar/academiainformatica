import CodeBlock from "@/app/components/CodeBlock"

export default function ComplejidadAlgoritmosPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Complejidad de Algoritmos
        </h1>

        <p className="max-w-3xl leading-relaxed">
          La complejidad de un algoritmo permite medir qué tan eficiente es
          un programa al resolver un problema. Normalmente se analiza cuánto
          tiempo tarda en ejecutarse o cuánta memoria utiliza a medida que
          aumenta la cantidad de datos.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Para describir esta eficiencia se utiliza una notación llamada
          <strong> Big-O</strong>, que indica cómo crece el tiempo de ejecución
          de un algoritmo cuando aumenta el tamaño de la entrada.
        </p>
      </section>

      {/* Qué es Big O */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la notación Big-O?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Big-O describe el comportamiento del algoritmo en el peor caso.
          No mide el tiempo exacto en segundos, sino cómo aumenta el trabajo
          que debe realizar el programa cuando los datos crecen.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Por ejemplo, si duplicamos la cantidad de datos, algunos algoritmos
          tardarán el doble, otros cuatro veces más, y otros muchísimo más.
        </p>
      </section>

      {/* Tabla de complejidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de complejidad
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-4xl">
          <table className="w-full border-collapse text-left">

            <thead>
              <tr className="border-b">
                <th className="p-3">Complejidad</th>
                <th className="p-3">Nombre</th>
                <th className="p-3">Ejemplo</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">O(1)</td>
                <td className="p-3">Constante</td>
                <td className="p-3">Acceder a un elemento de un array</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">O(log n)</td>
                <td className="p-3">Logarítmica</td>
                <td className="p-3">Búsqueda binaria</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">O(n)</td>
                <td className="p-3">Lineal</td>
                <td className="p-3">Búsqueda secuencial</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">O(n²)</td>
                <td className="p-3">Cuadrática</td>
                <td className="p-3">Bubble Sort</td>
              </tr>

              <tr>
                <td className="p-3">O(2ⁿ)</td>
                <td className="p-3">Exponencial</td>
                <td className="p-3">Problemas recursivos complejos</td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      {/* Ejemplo práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de complejidad lineal O(n)
        </h2>

        <p className="max-w-3xl mb-6">
          Este algoritmo recorre todos los elementos de una lista. Si la lista
          tiene más elementos, el algoritmo tardará proporcionalmente más tiempo.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code =
{`fun buscarNumero(lista: IntArray, objetivo: Int): Boolean {

    for (numero in lista) {

        if (numero == objetivo) {
            return true
        }

    }

    return false
}`}
/>
        </div>
      </section>

      {/* Ejemplo cuadrático */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de complejidad cuadrática O(n²)
        </h2>

        <p className="max-w-3xl mb-6">
          Cuando un algoritmo tiene bucles anidados, la cantidad de operaciones
          crece mucho más rápido.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun compararTodos(lista: IntArray) {

    for (i in lista.indices) {

        for (j in lista.indices) {

            println(lista[i].toString() + " - " + lista[j])

        }

    }

}`}
</pre>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante?
        </h2>

        <ul className="list-disc list-inside space-y-2 max-w-3xl">
          <li>Permite elegir el algoritmo más eficiente.</li>
          <li>Ayuda a optimizar programas.</li>
          <li>Evita problemas de rendimiento con grandes cantidades de datos.</li>
          <li>Es fundamental en entrevistas técnicas de programación.</li>
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
            Explica con tus palabras qué significa O(n).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identifica la complejidad del algoritmo burbuja.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea un algoritmo que recorra una lista y muestra qué complejidad
            tendría.
          </div>

        </div>
      </section>

    </div>
  );
}