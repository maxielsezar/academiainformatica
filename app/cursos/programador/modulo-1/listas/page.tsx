import CodeBlock from "@/app/components/CodeBlock"

export default function ListasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Listas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una lista es una estructura de datos que permite almacenar varios
          elementos en una sola variable. Los elementos se guardan en orden
          y cada uno tiene una posición llamada índice.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Las listas son muy utilizadas en programación para manejar
          colecciones de datos como nombres, números, productos o cualquier
          conjunto de información.
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de las Listas
        </h2>

        <ul className="list-disc list-inside space-y-2 max-w-3xl">
          <li>Permiten almacenar múltiples valores.</li>
          <li>Los elementos tienen un orden.</li>
          <li>Cada elemento tiene un índice que comienza en 0.</li>
          <li>Se puede acceder a los elementos por su posición.</li>
        </ul>
      </section>

      {/* Ejemplo conceptual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Lista
        </h2>

        <div className=" max-w-3xl">
          <p className="mb-4">
            Imaginemos una lista de frutas:
          </p>

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`["Manzana", "Banana", "Naranja", "Pera"]`}
            </pre>
          </div>

          <p className="mt-4">
            Cada elemento tiene una posición:
          </p>

          <ul className="list-disc list-inside mt-2">
            <li>Manzana → índice 0</li>
            <li>Banana → índice 1</li>
            <li>Naranja → índice 2</li>
            <li>Pera → índice 3</li>
          </ul>
        </div>
      </section>

      {/* Kotlin */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Listas en Kotlin
        </h2>

        <p className="max-w-3xl mb-4">
          En Kotlin podemos crear listas usando la función <strong>listOf()</strong>.
        </p>

        <div className=" max-w-3xl">

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <CodeBlock code =
{`fun main() {

    val frutas = listOf("Manzana", "Banana", "Naranja")

    println(frutas)

}`}
            />
          </div>

        </div>
      </section>

      {/* Acceder a elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Acceder a un Elemento de la Lista
        </h2>

        <p className="max-w-3xl mb-4">
          Podemos acceder a un elemento utilizando su índice.
        </p>

        <div className=" max-w-3xl">

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <CodeBlock code =
{`fun main() {

    val frutas = listOf("Manzana", "Banana", "Naranja")

    println(frutas[0]) // Manzana
    println(frutas[1]) // Banana

}`}
            />
          </div>

        </div>
      </section>

      {/* Recorrer listas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recorrer una Lista
        </h2>

        <p className="max-w-3xl mb-4">
          Podemos recorrer todos los elementos de una lista usando un bucle.
        </p>

        <div className="max-w-3xl">

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
            <CodeBlock code =
{`fun main() {

    val frutas = listOf("Manzana", "Banana", "Naranja")

    for (fruta in frutas) {
        println(fruta)
    }

}`}
            />
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
            Crea una lista con 5 nombres de ciudades y muéstralas en pantalla.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea una lista de números e imprime el primer y el último elemento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Recorre una lista de animales utilizando un bucle <strong>for</strong>.
          </div>

        </div>
      </section>

    </div>
  );
}