import CodeBlock from "@/app/components/CodeBlock";
import Diagrama from "@/app/components/Diagrama";

export default function OrdenamientoRecursivoPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Algoritmos de Ordenamiento Recursivos
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Algunos algoritmos de ordenamiento utilizan recursividad para dividir
          un problema grande en problemas más pequeños. Dos de los algoritmos
          más conocidos que utilizan esta técnica son <strong>QuickSort</strong> y
          <strong> Merge Sort</strong>.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Ambos algoritmos aplican el principio de <strong>divide y vencerás</strong>,
          separando la lista en partes más pequeñas hasta que sea fácil ordenarlas.
        </p>
      </section>

      {/* QuickSort */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          QuickSort
        </h2>

        <p className="max-w-3xl mb-6">
          QuickSort funciona eligiendo un elemento llamado <strong>pivote</strong>.
          Luego reorganiza la lista para que los valores menores al pivote
          queden a la izquierda y los mayores a la derecha.
        </p>

        <ol className="list-decimal list-inside space-y-2 max-w-3xl">
          <li>Elegir un pivote.</li>
          <li>Dividir la lista en menores y mayores al pivote.</li>
          <li>Aplicar QuickSort recursivamente a cada lado.</li>
        </ol>
      </section>

      {/* Código QuickSort */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Implementación de QuickSort en Kotlin
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code =
{`fun quickSort(arr: IntArray, low: Int, high: Int) {

    if (low < high) {

        val pivotIndex = partition(arr, low, high)

        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)

    }

}

fun partition(arr: IntArray, low: Int, high: Int): Int {

    val pivot = arr[high]
    var i = low - 1

    for (j in low until high) {

        if (arr[j] < pivot) {
            i++

            val temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }

    }

    val temp = arr[i + 1]
    arr[i + 1] = arr[high]
    arr[high] = temp

    return i + 1
}`}
/>
        </div>
      </section>

      {/* Merge Sort explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Merge Sort
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Merge Sort divide la lista en dos partes iguales hasta que cada
          sublista tenga un solo elemento. Luego las listas se vuelven a unir
          ordenándolas durante el proceso de combinación.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Es uno de los algoritmos más eficientes y siempre mantiene una
          complejidad de <strong>O(n log n)</strong>.
        </p>

        <ol className="list-decimal list-inside space-y-2 mt-6 max-w-3xl">
          <li>Dividir la lista en dos mitades.</li>
          <li>Ordenar cada mitad recursivamente.</li>
          <li>Unir las listas ordenadas.</li>
        </ol>
      </section>

      {/* Código MergeSort */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Implementación de Merge Sort en Kotlin
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code =
{`fun mergeSort(arr: IntArray) {

    if (arr.size <= 1) return

    val mid = arr.size / 2

    val left = arr.sliceArray(0 until mid)
    val right = arr.sliceArray(mid until arr.size)

    mergeSort(left)
    mergeSort(right)

    merge(arr, left, right)
}

fun merge(arr: IntArray, left: IntArray, right: IntArray) {

    var i = 0
    var j = 0
    var k = 0

    while (i < left.size && j < right.size) {

        if (left[i] <= right[j]) {
            arr[k++] = left[i++]
        } else {
            arr[k++] = right[j++]
        }

    }

    while (i < left.size) {
        arr[k++] = left[i++]
    }

    while (j < right.size) {
        arr[k++] = right[j++]
    }

}`}
/>
        </div>
          {/* Imagen del Diagrama */}
        <div className="mt-8 flex justify-center">
            <Diagrama
              src="/diagramas/mergesort.webp"
              alt="Diagrama de flujo del cálculo del promedio"
            />
        </div>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comparación QuickSort vs Merge Sort
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">

            <thead>
              <tr className="border-b">
                <th className="p-3">Algoritmo</th>
                <th className="p-3">Complejidad promedio</th>
                <th className="p-3">Características</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">QuickSort</td>
                <td className="p-3">O(n log n)</td>
                <td className="p-3">
                  Muy rápido en la práctica, pero en el peor caso puede ser O(n²)
                </td>
              </tr>

              <tr>
                <td className="p-3">Merge Sort</td>
                <td className="p-3">O(n log n)</td>
                <td className="p-3">
                  Siempre mantiene el mismo rendimiento, pero usa más memoria
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
            Explica con tus palabras qué es el pivote en QuickSort.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Describe las etapas del algoritmo Merge Sort.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investiga cuál de los dos algoritmos se usa más en la práctica.
          </div>

        </div>
      </section>

    </div>
  );
}