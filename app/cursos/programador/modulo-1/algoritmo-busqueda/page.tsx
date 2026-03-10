export default function AlgoritmosBusquedaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Algoritmos de Búsqueda
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los algoritmos de búsqueda permiten encontrar un elemento dentro
          de una colección de datos como una lista o un array. Son fundamentales
          en programación porque muchas aplicaciones necesitan localizar
          información rápidamente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Existen distintos métodos de búsqueda. En este módulo veremos
          dos de los más conocidos:
        </p>

        <ul className="list-disc list-inside mt-4 space-y-2 max-w-3xl">
          <li>Búsqueda secuencial</li>
          <li>Búsqueda binaria</li>
        </ul>
      </section>

      {/* Búsqueda Secuencial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Búsqueda Secuencial
        </h2>

        <p className="max-w-3xl mb-4">
          La búsqueda secuencial consiste en recorrer todos los elementos
          de una lista uno por uno hasta encontrar el valor buscado.
        </p>

        <p className="max-w-3xl mb-6">
          Es un método simple pero puede ser lento cuando la lista es
          muy grande.
        </p>

          <div className=" max-w-3xl bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun main() {

    val numeros = listOf(3, 7, 12, 18, 21)
    val buscar = 12

    for (numero in numeros) {
        if (numero == buscar) {
            println("Número encontrado")
        }
    }

}`}
            </pre>
          

        </div>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-6">
          <li>Funciona con listas ordenadas o desordenadas.</li>
          <li>Es fácil de implementar.</li>
          <li>Puede ser lenta con muchos datos.</li>
        </ul>
      </section>

      {/* Búsqueda Binaria */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Búsqueda Binaria
        </h2>

        <p className="max-w-3xl mb-4">
          La búsqueda binaria es un algoritmo más eficiente que divide
          el conjunto de datos en mitades para encontrar el elemento.
        </p>

        <p className="max-w-3xl mb-4">
          Para utilizar este método, la lista debe estar ordenada.
        </p>

          <div className="max-w-3xl bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun busquedaBinaria(lista: List<Int>, objetivo: Int): Boolean {

    var izquierda = 0
    var derecha = lista.size - 1

    while (izquierda <= derecha) {

        val medio = (izquierda + derecha) / 2

        if (lista[medio] == objetivo) {
            return true
        }

        if (lista[medio] < objetivo) {
            izquierda = medio + 1
        } else {
            derecha = medio - 1
        }
    }

    return false
}`}
            </pre>
          </div>

        
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comparación de los Algoritmos
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Característica</th>
                <th className="p-3 font-semibold">Búsqueda Secuencial</th>
                <th className="p-3 font-semibold">Búsqueda Binaria</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Tipo de lista</td>
                <td className="p-3">Ordenada o desordenada</td>
                <td className="p-3">Debe estar ordenada</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Velocidad</td>
                <td className="p-3">Más lenta</td>
                <td className="p-3">Más rápida</td>
              </tr>

              <tr>
                <td className="p-3">Complejidad</td>
                <td className="p-3">Simple</td>
                <td className="p-3">Más eficiente</td>
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
            Crea una lista de números y busca un valor utilizando
            búsqueda secuencial.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Ordena una lista de números y prueba implementar
            una búsqueda binaria.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Explica con tus palabras la diferencia entre
            búsqueda secuencial y búsqueda binaria.
          </div>

        </div>
      </section>

    </div>
  );
}