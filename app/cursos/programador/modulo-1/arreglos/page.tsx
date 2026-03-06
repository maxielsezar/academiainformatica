export default function ArreglosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Arreglos (Arrays) en Kotlin
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          Un arreglo es una estructura que permite almacenar múltiples valores
          del mismo tipo dentro de una sola variable.
          Cada elemento se identifica mediante un índice.
        </p>
      </section>

      {/* ¿Qué es un índice? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un índice?
        </h2>

        <div className=" border p-6 rounded-xl ">
          Los arreglos comienzan en la posición <strong>0</strong>.
          <br /><br />
          Ejemplo:
          <br />
          Posiciones → 0 | 1 | 2 | 3
        </div>
      </section>

      {/* Declaración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Declarar un Array
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`fun main() {
    val numeros = arrayOf(10, 20, 30, 40)
}`}
          </pre>
        </div>

        <p className=" mt-6">
          En este ejemplo se crea un arreglo con cuatro números enteros.
        </p>
      </section>

      {/* Acceso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Acceder a un elemento
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`println(numeros[0])   // 10
println(numeros[2])   // 30`}
          </pre>
        </div>
      </section>

      {/* Modificar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modificar un valor
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`numeros[1] = 50`}
          </pre>
        </div>
      </section>

      {/* Recorrer array */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recorrer un Array
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`for (i in numeros) {
    println(i)
}`}
          </pre>
        </div>

        <p className=" mt-6">
          También podemos recorrer usando índices:
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800 mt-4">
          <pre>
{`for (i in numeros.indices) {
    println(numeros[i])
}`}
          </pre>
        </div>
      </section>

      {/* Tamaño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tamaño del Array
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`println(numeros.size)`}
          </pre>
        </div>
      </section>

      {/* Arrays y funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Arrays y Funciones
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`fun mostrarArray(arr: Array<Int>) {
    for (i in arr) {
        println(i)
    }
}`}
          </pre>
        </div>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Intentar acceder a una posición que no existe.</li>
          <li>Confundir el índice inicial (empieza en 0).</li>
          <li>No usar correctamente el tamaño del arreglo.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6 ">

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crear un array con 5 números y mostrarlos en pantalla.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Calcular la suma total de los elementos del array.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Encontrar el número mayor dentro del array.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className=" border-l-4 border-blue-700 p-6 rounded-xl ">
          Crear un programa que:
          <br />
          ✔ Guarde las notas de 5 alumnos en un array <br />
          ✔ Calcule el promedio general <br />
          ✔ Muestre cuántos alumnos aprobaron (nota ≥ 6)
        </div>
      </section>

    </div>
  );
}