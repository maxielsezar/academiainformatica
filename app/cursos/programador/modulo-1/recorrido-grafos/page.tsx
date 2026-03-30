import CodeBlock from "@/app/components/CodeBlock";

export default function RecorridosGrafosPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Recorridos en Grafos (BFS y DFS)
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Cuando trabajamos con grafos muchas veces necesitamos
          <strong> recorrer todos sus nodos</strong>. Para hacerlo existen
          algoritmos de búsqueda que permiten visitar cada nodo del grafo
          de forma organizada.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Los dos algoritmos más utilizados son:
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4 max-w-3xl">
          <li><strong>BFS (Breadth First Search)</strong> — Búsqueda en Anchura</li>
          <li><strong>DFS (Depth First Search)</strong> — Búsqueda en Profundidad</li>
        </ul>
      </section>

      {/* BFS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          BFS (Breadth First Search)
        </h2>

        <p className="max-w-3xl leading-relaxed">
          BFS recorre el grafo **nivel por nivel**, visitando primero todos los
          nodos cercanos antes de avanzar a los siguientes.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Este algoritmo utiliza una <strong>cola (Queue)</strong> para recordar
          los nodos que deben visitarse.
        </p>

        <pre className="font-mono border p-4 rounded-lg max-w-xl mt-6">
{`A
| \\
B  C
|   |
D   E`}
        </pre>

        <p className="max-w-3xl mt-6">
          Recorrido BFS desde A:
        </p>

        <div className="font-mono border p-3 rounded-lg inline-block">
          A → B → C → D → E
        </div>
      </section>

      {/* Código BFS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Implementación BFS en Kotlin
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code=
{`fun bfs(grafo: Map<String, List<String>>, inicio: String) {

    val visitados = mutableSetOf<String>()
    val cola = ArrayDeque<String>()

    cola.add(inicio)
    visitados.add(inicio)

    while (cola.isNotEmpty()) {

        val nodo = cola.removeFirst()
        println(nodo)

        for (vecino in grafo[nodo] ?: emptyList()) {

            if (vecino !in visitados) {
                visitados.add(vecino)
                cola.add(vecino)
            }

        }
    }
}`}
/>
        </div>
      </section>

      {/* DFS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DFS (Depth First Search)
        </h2>

        <p className="max-w-3xl leading-relaxed">
          DFS recorre el grafo **profundizando lo máximo posible en cada rama**
          antes de retroceder.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Este algoritmo utiliza una <strong>pila (Stack)</strong> o
          <strong> recursividad</strong>.
        </p>

        <p className="max-w-3xl mt-6">
          Recorrido DFS desde A:
        </p>

        <div className="font-mono border p-3 rounded-lg inline-block">
          A → B → D → C → E
        </div>
      </section>

      {/* Código DFS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Implementación DFS en Kotlin
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
<CodeBlock code =
{`fun dfs(
    grafo: Map<String, List<String>>,
    nodo: String,
    visitados: MutableSet<String> = mutableSetOf()
) {

    if (nodo in visitados) return

    println(nodo)
    visitados.add(nodo)

    for (vecino in grafo[nodo] ?: emptyList()) {
        dfs(grafo, vecino, visitados)
    }

}`}
/>
        </div>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias entre BFS y DFS
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">

            <thead>
              <tr className="border-b">
                <th className="p-3">Característica</th>
                <th className="p-3">BFS</th>
                <th className="p-3">DFS</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="p-3">Tipo de recorrido</td>
                <td className="p-3">Por niveles</td>
                <td className="p-3">En profundidad</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Estructura usada</td>
                <td className="p-3">Cola (Queue)</td>
                <td className="p-3">Pila / Recursión</td>
              </tr>

              <tr>
                <td className="p-3">Uso común</td>
                <td className="p-3">Encontrar caminos más cortos</td>
                <td className="p-3">Exploración completa</td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      {/* Aplicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicaciones
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Buscar rutas en mapas</li>
          <li>Redes sociales</li>
          <li>Videojuegos</li>
          <li>Inteligencia artificial</li>
          <li>Análisis de redes</li>

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
            Explica la diferencia entre BFS y DFS.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            ¿Qué estructura de datos utiliza BFS?
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investiga en qué casos se usa DFS en programación.
          </div>

        </div>
      </section>

    </div>
  );
}