import CodeBlock from "@/app/components/CodeBlock"

export default function ListasEnlazadasPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Listas Enlazadas
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Una <strong>lista enlazada</strong> es una estructura de datos formada por
          nodos que están conectados entre sí mediante referencias o enlaces.
          A diferencia de los arreglos, los elementos de una lista enlazada no se
          almacenan de forma continua en memoria.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Cada nodo contiene dos partes:
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-4">
          <li><strong>Dato:</strong> el valor almacenado.</li>
          <li><strong>Referencia:</strong> apunta al siguiente nodo de la lista.</li>
        </ul>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de una Lista Enlazada
        </h2>

        <p className="max-w-3xl leading-relaxed">
          En una lista enlazada cada elemento apunta al siguiente nodo.
        </p>

        <div className="font-mono border p-4 rounded-lg max-w-xl mt-6">
          Nodo1 → Nodo2 → Nodo3 → Nodo4 → null
        </div>

        <p className="max-w-3xl leading-relaxed mt-6">
          El último nodo apunta a <strong>null</strong>, indicando que es el final
          de la lista.
        </p>
      </section>

      {/* Diferencia con arreglos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias con los Arreglos
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">

            <thead>
              <tr className="border-b">
                <th className="p-3">Característica</th>
                <th className="p-3">Arreglos</th>
                <th className="p-3">Listas Enlazadas</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Memoria</td>
                <td className="p-3">Contigua</td>
                <td className="p-3">No contigua</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Inserción</td>
                <td className="p-3">Puede ser costosa</td>
                <td className="p-3">Más flexible</td>
              </tr>

              <tr>
                <td className="p-3">Acceso</td>
                <td className="p-3">Directo por índice</td>
                <td className="p-3">Secuencial</td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      {/* Implementación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Implementación básica en Kotlin
        </h2>

        <p className="max-w-3xl mb-6">
          Primero definimos un nodo que contenga el dato y la referencia al
          siguiente nodo.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code =
{`class Nodo(val valor: Int) {

    var siguiente: Nodo? = null

}

class ListaEnlazada {

    var cabeza: Nodo? = null

    fun agregar(valor: Int) {

        val nuevoNodo = Nodo(valor)

        if (cabeza == null) {
            cabeza = nuevoNodo
            return
        }

        var actual = cabeza

        while (actual?.siguiente != null) {
            actual = actual.siguiente
        }

        actual?.siguiente = nuevoNodo
    }

}

fun main() {
    val lista = ListaEnlazada()

    // Agregar elementos
    lista.agregar(10)
    lista.agregar(20)
    lista.agregar(30)
    lista.agregar(40)

    // Recorrer e imprimir la lista
    var actual = lista.cabeza

    while (actual != null) {
        println(actual.valor)
        actual = actual.siguiente
    }
}

`}
/>
        </div>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Listas Enlazadas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>
            <strong>Lista simplemente enlazada:</strong> cada nodo apunta al siguiente.
          </li>

          <li>
            <strong>Lista doblemente enlazada:</strong> cada nodo apunta al siguiente y al anterior.
          </li>

          <li>
            <strong>Lista circular:</strong> el último nodo apunta al primero.
          </li>

        </ul>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Dónde se utilizan?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Implementación de pilas y colas</li>
          <li>Sistemas de navegación (anterior / siguiente)</li>
          <li>Administración de memoria</li>
          <li>Algoritmos avanzados de estructuras de datos</li>

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
            Explica con tus palabras qué es un nodo en una lista enlazada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Describe la diferencia entre una lista enlazada y un arreglo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investiga qué es una lista doblemente enlazada.
          </div>

        </div>
      </section>

    </div>
  );
}