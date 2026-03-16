export default function GrafosPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Grafos
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Un <strong>grafo</strong> es una estructura de datos utilizada para
          representar relaciones entre diferentes elementos.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Un grafo está formado por:
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-4">
          <li><strong>Vértices (nodos):</strong> representan los elementos.</li>
          <li><strong>Aristas (edges):</strong> representan las conexiones entre los nodos.</li>
        </ul>
      </section>

      {/* Representación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Representación de un Grafo
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Un grafo puede representarse de forma visual como una red de nodos
          conectados entre sí.
        </p>

        <pre className="font-mono border p-4 rounded-lg max-w-xl mt-6">
{`A ----- B
|       |
|       |
C ----- D`}
        </pre>

        <p className="max-w-3xl leading-relaxed mt-6">
          En este ejemplo los nodos A, B, C y D están conectados mediante aristas.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Grafos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>
            <strong>Grafo no dirigido:</strong> las conexiones funcionan en ambos sentidos.
          </li>

          <li>
            <strong>Grafo dirigido:</strong> las conexiones tienen una dirección específica.
          </li>

          <li>
            <strong>Grafo ponderado:</strong> las aristas tienen un peso o costo asociado.
          </li>

        </ul>
      </section>

      {/* Ejemplo dirigido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Grafo Dirigido
        </h2>

        <pre className="font-mono border p-4 rounded-lg max-w-xl">
{`A → B
↓   ↓
C → D`}
        </pre>
      </section>

      {/* Representación en programación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Representación en programación
        </h2>

        <p className="max-w-3xl leading-relaxed">
          En programación, los grafos suelen representarse utilizando:
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-4">
          <li>Lista de adyacencia</li>
          <li>Matriz de adyacencia</li>
        </ul>
      </section>

      {/* Ejemplo Kotlin */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de grafo usando lista de adyacencia en Kotlin
        </h2>

        <p className="max-w-3xl mb-6">
          Una forma común de representar grafos es mediante un mapa donde cada
          nodo tiene una lista de nodos conectados.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun main() {

    val grafo = mutableMapOf<String, List<String>>()

    grafo["A"] = listOf("B", "C")
    grafo["B"] = listOf("A", "D")
    grafo["C"] = listOf("A", "D")
    grafo["D"] = listOf("B", "C")

    println(grafo)

}`}
</pre>
        </div>
      </section>

      {/* Aplicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Dónde se utilizan los grafos?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Redes sociales</li>
          <li>Sistemas de navegación (GPS)</li>
          <li>Redes de computadoras</li>
          <li>Mapas y rutas</li>
          <li>Inteligencia artificial</li>

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
            Explica qué es un vértice y qué es una arista en un grafo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Describe la diferencia entre un grafo dirigido y uno no dirigido.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investiga qué es el algoritmo de búsqueda en grafos BFS o DFS.
          </div>

        </div>
      </section>

    </div>
  );
}