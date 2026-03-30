import CodeBlock from "@/app/components/CodeBlock";

export default function PilasColasPage() {
  return (
    <div className="space-y-14 break-words">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Pilas y Colas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las pilas y las colas son estructuras de datos fundamentales en
          programación. Se utilizan para organizar información de manera
          ordenada y controlar el acceso a los datos según ciertas reglas.
        </p>

        <p className="mt-4 leading-relaxed max-w-3xl">
          Estas estructuras se utilizan en muchos algoritmos y sistemas
          informáticos, como el manejo de funciones, procesamiento de tareas
          y administración de datos en memoria.
        </p>
      </section>

      {/* Pilas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Pila?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una pila es una estructura de datos que funciona siguiendo el
          principio <strong>LIFO (Last In, First Out)</strong>, es decir,
          el último elemento que entra es el primero en salir.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-2">Ejemplo cotidiano</p>
          Una pila de platos: el último plato que se coloca arriba
          es el primero que se retira.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li><strong>Push:</strong> agregar un elemento a la pila.</li>
          <li><strong>Pop:</strong> quitar el elemento superior.</li>
          <li><strong>Peek:</strong> ver el elemento superior sin eliminarlo.</li>
        </ul>
      </section>

      {/* Pseudocódigo pila */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Pila en Pseudocódigo
        </h2>

        <div className="bg-[#0f172a] text-white p-6 rounded-2xl text-sm font-mono shadow-lg overflow-x-auto">
          <pre className="min-w-[350px]">
{`Inicio

Crear pila

Push(10)
Push(20)
Push(30)

Pop()

Mostrar elemento superior

Fin`}
          </pre>
        </div>
      </section>
      <section>
  <h2 className="text-2xl font-bold text-blue-800 mb-6">
    Uso de Pilas en Kotlin
  </h2>

  <p className="leading-relaxed max-w-3xl mb-6">
    En Kotlin una pila puede implementarse utilizando la estructura 
    <strong> ArrayDeque</strong>. Esta permite agregar y eliminar elementos 
    de forma eficiente siguiendo el principio LIFO (Last In, First Out).
  </p>

  <div className="bg-[#0f172a] text-white p-6 rounded-2xl text-sm font-mono shadow-lg overflow-x-auto">
    <CodeBlock code =
{`fun main() {

    val pila = ArrayDeque<Int>()

    // Agregar elementos (push)
    pila.addLast(10)
    pila.addLast(20)
    pila.addLast(30)

    println("Pila actual: $pila")

    // Quitar elemento superior (pop)
    val eliminado = pila.removeLast()

    println("Elemento eliminado: $eliminado")
    println("Pila final: $pila")

}`}
    />
  </div>
</section>

      {/* Colas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Cola?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una cola es una estructura de datos que sigue el principio
          <strong> FIFO (First In, First Out)</strong>, es decir,
          el primer elemento que entra es el primero en salir.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-2">Ejemplo cotidiano</p>
          Una fila en un banco o supermercado: la primera persona en llegar
          es la primera en ser atendida.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li><strong>Enqueue:</strong> agregar un elemento al final de la cola.</li>
          <li><strong>Dequeue:</strong> quitar el primer elemento.</li>
          <li><strong>Front:</strong> ver el primer elemento de la cola.</li>
        </ul>
      </section>

      {/* Pseudocódigo cola */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Cola en Pseudocódigo
        </h2>

        <div className="bg-[#0f172a] text-white p-6 rounded-2xl text-sm font-mono shadow-lg overflow-x-auto">
          <pre className="min-w-[350px]">
{`Inicio

Crear cola

Enqueue(10)
Enqueue(20)
Enqueue(30)

Dequeue()

Mostrar primer elemento

Fin`}
          </pre>
        </div>
      </section>
      <section>
  <h2 className="text-2xl font-bold text-blue-800 mb-6">
    Uso de Colas en Kotlin
  </h2>

  <p className="leading-relaxed max-w-3xl mb-6">
    Para implementar una cola en Kotlin podemos usar 
    <strong> ArrayDeque</strong>. En este caso los elementos se agregan 
    al final de la estructura y se eliminan desde el inicio, siguiendo 
    el principio FIFO (First In, First Out).
  </p>

  <div className="bg-[#0f172a] text-white p-6 rounded-2xl text-sm font-mono shadow-lg overflow-x-auto">
    <CodeBlock code =
{`fun main() {

    val cola = ArrayDeque<Int>()

    // Agregar elementos (enqueue)
    cola.addLast(10)
    cola.addLast(20)
    cola.addLast(30)

    println("Cola actual: $cola")

    // Quitar primer elemento (dequeue)
    val eliminado = cola.removeFirst()

    println("Elemento atendido: $eliminado")
    println("Cola final: $cola")

}`}
    />
  </div>
</section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias entre Pilas y Colas
        </h2>

        <div className="border p-6 rounded-xl overflow-x-auto">
          <table className="w-full min-w-[500px] text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Estructura</th>
                <th className="p-2">Principio</th>
                <th className="p-2">Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-semibold">Pila</td>
                <td className="p-2">LIFO</td>
                <td className="p-2">Pila de platos</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Cola</td>
                <td className="p-2">FIFO</td>
                <td className="p-2">Fila en un banco</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Aplicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicaciones en Programación
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Manejo de llamadas a funciones en programas.</li>
          <li>Control de historial (por ejemplo, botón deshacer).</li>
          <li>Procesamiento de tareas en sistemas operativos.</li>
          <li>Administración de procesos en servidores.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicar con tus palabras la diferencia entre una pila y una cola.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Diseñar un algoritmo que utilice una pila para almacenar números
            y luego los muestre en orden inverso.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Diseñar un algoritmo que simule una fila de atención en un banco
            utilizando una cola.
          </div>

        </div>
      </section>

    </div>
  );
}