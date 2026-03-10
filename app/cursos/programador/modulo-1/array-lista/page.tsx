export default function ArraysVsListasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Arrays vs Listas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Tanto los arrays como las listas permiten almacenar varios
          elementos en una sola variable. Sin embargo, tienen diferencias
          importantes en cómo se utilizan y en su flexibilidad dentro
          de un programa.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Comprender cuándo usar cada estructura de datos es una habilidad
          importante para escribir programas más claros y eficientes.
        </p>
      </section>

      {/* Array */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Array?
        </h2>

        <p className="max-w-3xl mb-4">
          Un array es una estructura de datos que almacena una colección
          de elementos del mismo tipo en posiciones consecutivas de memoria.
        </p>

        <div className=" max-w-3xl">

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun main() {

    val numeros = arrayOf(10, 20, 30, 40)

    println(numeros[0])
    println(numeros[1])

}`}
            </pre>
          </div>

        </div>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-6">
          <li>Los arrays tienen un tamaño fijo.</li>
          <li>Todos los elementos deben ser del mismo tipo.</li>
          <li>Son rápidos para acceder a posiciones específicas.</li>
        </ul>
      </section>

      {/* Lista */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Lista?
        </h2>

        <p className="max-w-3xl mb-4">
          Una lista es una estructura de datos más flexible que permite
          almacenar múltiples elementos y trabajar con ellos de manera
          dinámica.
        </p>

        <div className="max-w-3xl">

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun main() {

    val frutas = listOf("Manzana", "Banana", "Naranja")

    println(frutas[0])
    println(frutas[1])

}`}
            </pre>
          </div>

        </div>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-6">
          <li>Son más fáciles de utilizar que los arrays.</li>
          <li>Se usan mucho en programación moderna.</li>
          <li>Permiten recorrer elementos fácilmente.</li>
        </ul>
      </section>

      {/* Mutable List */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Listas Mutables
        </h2>

        <p className="max-w-3xl mb-4">
          En Kotlin también existen listas mutables, que permiten agregar
          o eliminar elementos después de crear la lista.
        </p>

        <div className="max-w-3xl">

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun main() {

    val frutas = mutableListOf("Manzana", "Banana")

    frutas.add("Naranja")

    println(frutas)

}`}
            </pre>
          </div>

        </div>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias Principales
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Característica</th>
                <th className="p-3 font-semibold">Array</th>
                <th className="p-3 font-semibold">Lista</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Tamaño</td>
                <td className="p-3">Fijo</td>
                <td className="p-3">Flexible</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Uso</td>
                <td className="p-3">Más bajo nivel</td>
                <td className="p-3">Más común en aplicaciones</td>
              </tr>

              <tr>
                <td className="p-3">Modificar elementos</td>
                <td className="p-3">Limitado</td>
                <td className="p-3">Más fácil con listas mutables</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      {/* Cuando usar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuándo usar cada uno?
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">
              Usar Arrays cuando:
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>El tamaño de los datos es fijo.</li>
              <li>Se necesita alto rendimiento.</li>
              <li>Se trabaja con estructuras simples.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">
              Usar Listas cuando:
            </h3>

            <ul className="list-disc list-inside space-y-2">
              <li>Los datos pueden crecer o reducirse.</li>
              <li>Se necesita agregar o eliminar elementos.</li>
              <li>Se busca código más fácil de leer.</li>
            </ul>
          </div>

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
            Crea un array con 5 números y muestra cada elemento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea una lista de nombres y recórrela con un bucle <strong>for</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea una lista mutable y agrega tres elementos nuevos.
          </div>
           <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Crea una funcion que compruebe si un elemento esta dentro de una lista
          </div>


        </div>
      </section>

    </div>
  );
}