import CodeBlock from "@/app/components/CodeBlock";
export default function AlgoritmosOrdenamientoPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Algoritmos de Ordenamiento
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Los algoritmos de ordenamiento permiten organizar datos dentro de una
          estructura como un arreglo o una lista. Ordenar datos facilita realizar
          búsquedas, analizar información y mejorar el rendimiento de los
          programas.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Existen muchos algoritmos de ordenamiento. En este módulo veremos tres
          de los más conocidos y utilizados para aprender los fundamentos:
          <strong> burbuja, inserción y selección</strong>.
        </p>
      </section>

      {/* Burbuja */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Ordenamiento Burbuja (Bubble Sort)
        </h2>

        <p className="max-w-3xl mb-6">
          El algoritmo de burbuja compara elementos vecinos y los intercambia si
          están en el orden incorrecto. Este proceso se repite hasta que todos los
          elementos quedan ordenados.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 max-w-3xl">
          <li>Es uno de los algoritmos más fáciles de entender.</li>
          <li>No es eficiente para listas grandes.</li>
          <li>Funciona comparando pares de elementos.</li>
        </ul>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code=
{`fun bubbleSort(arr: IntArray) {
    val n = arr.size

    for (i in 0 until n - 1) {
        for (j in 0 until n - i - 1) {

            if (arr[j] > arr[j + 1]) {
                val temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
    }
}`}
/>
        </div>
      </section>

      {/* Inserción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Ordenamiento por Inserción (Insertion Sort)
        </h2>

        <p className="max-w-3xl mb-6">
          Este algoritmo ordena los elementos de manera similar a como una persona
          ordena cartas en la mano. Toma un elemento y lo inserta en la posición
          correcta dentro de la parte ya ordenada del arreglo.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 max-w-3xl">
          <li>Es eficiente para listas pequeñas.</li>
          <li>Es simple de implementar.</li>
          <li>Funciona bien cuando la lista ya está casi ordenada.</li>
        </ul>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code=
{`fun insertionSort(arr: IntArray) {

    for (i in 1 until arr.size) {

        val key = arr[i]
        var j = i - 1

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = key
    }
}`}
/>
        </div>
      </section>

      {/* Selección */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Ordenamiento por Selección (Selection Sort)
        </h2>

        <p className="max-w-3xl mb-6">
          El algoritmo de selección busca el elemento más pequeño de la lista y
          lo coloca en la primera posición. Luego repite el proceso con el resto
          de los elementos hasta ordenar toda la lista.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 max-w-3xl">
          <li>Divide la lista en una parte ordenada y otra sin ordenar.</li>
          <li>Busca el valor mínimo en cada iteración.</li>
          <li>Realiza menos intercambios que el algoritmo burbuja.</li>
        </ul>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code={`fun selectionSort(arr: IntArray) {

    val n = arr.size

    for (i in 0 until n - 1) {

        var minIndex = i

        for (j in i + 1 until n) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        val temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp
    }
}`} />
        </div>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comparación de algoritmos
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">

            <thead>
              <tr className="border-b">
                <th className="p-3">Algoritmo</th>
                <th className="p-3">Idea principal</th>
                <th className="p-3">Uso</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Burbuja</td>
                <td className="p-3">Intercambia elementos vecinos</td>
                <td className="p-3">Educación y aprendizaje</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Inserción</td>
                <td className="p-3">Inserta elementos en la posición correcta</td>
                <td className="p-3">Listas pequeñas</td>
              </tr>

              <tr>
                <td className="p-3">Selección</td>
                <td className="p-3">Busca el mínimo en cada iteración</td>
                <td className="p-3">Algoritmos básicos</td>
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
            Implementa el algoritmo burbuja para ordenar una lista de números.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Modifica el algoritmo de inserción para ordenar los números de mayor a menor.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea un programa que permita ingresar 10 números y los ordene usando
            el algoritmo de selección.
          </div>

        </div>
      </section>

    </div>
  );
}