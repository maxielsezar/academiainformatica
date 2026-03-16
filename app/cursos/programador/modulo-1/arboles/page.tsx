export default function ArbolesPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Árboles (Trees)
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Un <strong>árbol</strong> es una estructura de datos jerárquica formada
          por nodos conectados entre sí. Se utiliza para representar relaciones
          entre elementos, donde existe un nodo principal llamado
          <strong> raíz</strong>.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Cada nodo puede tener uno o más nodos hijos, formando una estructura
          similar a un árbol invertido.
        </p>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de un Árbol
        </h2>

        <pre className="font-mono border p-4 rounded-lg max-w-xl">
{`        A
       / \\
      B   C
     / \\
    D   E`}
        </pre>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-6">
          <li><strong>Raíz:</strong> nodo principal del árbol.</li>
          <li><strong>Nodo:</strong> elemento que contiene un valor.</li>
          <li><strong>Hijo:</strong> nodo que depende de otro nodo.</li>
          <li><strong>Hoja:</strong> nodo que no tiene hijos.</li>
          <li><strong>Subárbol:</strong> una parte del árbol.</li>
        </ul>
      </section>

      {/* Árbol binario */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Árbol Binario
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Un <strong>árbol binario</strong> es un tipo de árbol donde cada nodo
          puede tener como máximo dos hijos:
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-4">
          <li>Hijo izquierdo</li>
          <li>Hijo derecho</li>
        </ul>

        <p className="max-w-3xl leading-relaxed mt-4">
          Este tipo de estructura es muy utilizado en algoritmos de búsqueda
          y ordenamiento.
        </p>
      </section>

      {/* Implementación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Implementación básica en Kotlin
        </h2>

        <p className="max-w-3xl mb-6">
          Un nodo de un árbol binario puede tener un valor y referencias a sus
          hijos izquierdo y derecho.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`class Nodo(val valor: Int) {

    var izquierdo: Nodo? = null
    var derecho: Nodo? = null

}

fun main() {

    val raiz = Nodo(10)

    raiz.izquierdo = Nodo(5)
    raiz.derecho = Nodo(15)

    raiz.izquierdo?.izquierdo = Nodo(2)
    raiz.izquierdo?.derecho = Nodo(7)

}`}
</pre>
        </div>
      </section>

      {/* Recorridos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recorridos de Árboles
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Recorrer un árbol significa visitar todos sus nodos siguiendo un
          determinado orden.
        </p>

        <div className="border rounded-xl overflow-hidden max-w-3xl mt-6">
          <table className="w-full border-collapse text-left">

            <thead>
              <tr className="border-b">
                <th className="p-3">Recorrido</th>
                <th className="p-3">Orden</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Preorden</td>
                <td className="p-3">Raíz → Izquierda → Derecha</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Inorden</td>
                <td className="p-3">Izquierda → Raíz → Derecha</td>
              </tr>

              <tr>
                <td className="p-3">Postorden</td>
                <td className="p-3">Izquierda → Derecha → Raíz</td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      {/* Ejemplo recorrido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de recorrido en Kotlin
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun inOrden(nodo: Nodo?) {

    if (nodo != null) {

        inOrden(nodo.izquierdo)

        println(nodo.valor)

        inOrden(nodo.derecho)

    }

}`}
</pre>
        </div>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Dónde se utilizan los árboles?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Sistemas de archivos de computadoras</li>
          <li>Bases de datos</li>
          <li>Algoritmos de búsqueda eficientes</li>
          <li>Inteligencia artificial</li>
          <li>Compiladores y lenguajes de programación</li>

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
            Explica qué es la raíz de un árbol.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Describe la diferencia entre nodo hijo y nodo hoja.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investiga qué es un Árbol Binario de Búsqueda (BST).
          </div>

        </div>
      </section>

    </div>
  );
}