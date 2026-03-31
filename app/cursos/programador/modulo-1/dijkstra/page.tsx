import CodeBlock from "@/app/components/CodeBlock";

export default function AlgoritmoDijkstraPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Algoritmo de Dijkstra
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El algoritmo de Dijkstra es un método utilizado para encontrar el
          camino más corto entre un nodo inicial y los demás nodos de un grafo
          ponderado (es decir, donde las conexiones tienen un costo o distancia).
        </p>
      </section>

      {/* ¿Para qué sirve? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué se utiliza?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Este algoritmo se utiliza en muchos sistemas reales como:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4">
          <li>GPS y mapas (para encontrar la ruta más corta)</li>
          <li>Redes de internet</li>
          <li>Videojuegos</li>
          <li>Sistemas de transporte</li>
        </ul>
      </section>

      {/* Cómo funciona */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona?
        </h2>

        <ol className="list-decimal list-inside space-y-3">
          <li>Se elige un nodo inicial.</li>
          <li>Se asigna distancia 0 al nodo inicial y ∞ a los demás.</li>
          <li>Se visitan los nodos vecinos y se actualizan sus distancias.</li>
          <li>Se selecciona el nodo no visitado con menor distancia.</li>
          <li>Se repite el proceso hasta recorrer todo el grafo.</li>
        </ol>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo simple
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Supongamos un grafo con los siguientes caminos:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>A → B (2)</li>
          <li>A → C (5)</li>
          <li>B → C (1)</li>
          <li>B → D (4)</li>
          <li>C → D (2)</li>
        </ul>

        <p className="mt-4 max-w-3xl">
          El camino más corto desde A hasta D sería: <strong>A → B → C → D</strong> con costo total 5.
        </p>
      </section>

      {/* Pseudocódigo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Codigo
        </h2>

        <CodeBlock code =
{`import java.util.PriorityQueue

class Nodo(val id: Int, var distancia: Int)

class Arista(val destino: Nodo, val peso: Int)

fun dijkstra(grafo: Map<Nodo, List<Arista>>, inicio: Nodo) {
    val cola = PriorityQueue<Nodo>(compareBy { it.distancia })

    inicio.distancia = 0
    cola.add(inicio)

    while (cola.isNotEmpty()) {
        val actual = cola.poll()

        val vecinos = grafo[actual] ?: continue

        for (arista in vecinos) {
            val vecino = arista.destino
            val nuevaDistancia = actual.distancia + arista.peso

            if (nuevaDistancia < vecino.distancia) {
                vecino.distancia = nuevaDistancia
                cola.add(vecino)
            }
        }
    }
}

fun main() {
    // Crear nodos
    val A = Nodo(0, Int.MAX_VALUE)
    val B = Nodo(1, Int.MAX_VALUE)
    val C = Nodo(2, Int.MAX_VALUE)
    val D = Nodo(3, Int.MAX_VALUE)

    // Crear grafo
    val grafo = mapOf(
        A to listOf(Arista(B, 2), Arista(C, 5)),
        B to listOf(Arista(C, 1), Arista(D, 4)),
        C to listOf(Arista(D, 2)),
        D to listOf()
    )

    // Ejecutar Dijkstra
    dijkstra(grafo, A)

    // Mostrar resultados
    val nodos = listOf(A, B, C, D)
    for (nodo in nodos) {
        println("Distancia desde A hasta $nodo.id: $nodo.distancia")
    }
}`}
        />
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá con tus palabras qué problema resuelve el algoritmo de Dijkstra.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Dibujá un grafo con al menos 5 nodos y asigná pesos a las aristas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Aplicá el algoritmo de Dijkstra paso a paso desde un nodo inicial.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Indicá cuál es el camino más corto entre dos nodos de tu grafo.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Final
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Diseñá un mapa de ciudades como un grafo y utilizá el algoritmo
          de Dijkstra para encontrar la ruta más corta entre dos ciudades.
        </div>
      </section>

    </div>
  );
}