import CodeBlock from "@/app/components/CodeBlock";

export default function AlgoritmoBellmanFordPage() {
  return (
    <div className="space-y-14">

        {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Algoritmo de Bellman-Ford
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El algoritmo de Bellman-Ford es un método utilizado para encontrar
          el camino más corto desde un nodo inicial hacia todos los demás
          nodos en un grafo ponderado. A diferencia de otros algoritmos,
          permite trabajar con pesos negativos.
        </p>
      </section>

      {/* ¿Para qué sirve? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué se utiliza?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Este algoritmo es útil en situaciones donde existen costos negativos,
          como:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4">
          <li>Rutas con descuentos o beneficios</li>
          <li>Sistemas financieros</li>
          <li>Redes de comunicación</li>
          <li>Optimización de caminos complejos</li>
        </ul>
      </section>
       {/* Cómo funciona */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona?
        </h2>

        <ol className="list-decimal list-inside space-y-3">
          <li>Se asigna distancia 0 al nodo inicial y ∞ a los demás.</li>
          <li>Se recorren todas las aristas del grafo.</li>
          <li>Se actualizan las distancias si se encuentra un camino más corto.</li>
          <li>Este proceso se repite (n - 1) veces, donde n es la cantidad de nodos.</li>
          <li>Finalmente, se verifica si existe un ciclo negativo.</li>
        </ol>
      </section>

      {/* Código */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Implementación en Kotlin
        </h2>

        <CodeBlock
          code={`
class Nodo(val id: Int, var distancia: Int)

class Arista(val destino: Nodo, val peso: Int)

fun bellmanFord(nodos: List<Nodo>, grafo: Map<Nodo, List<Arista>>, inicio: Nodo) {
    inicio.distancia = 0

    for (i in 0 until nodos.size - 1) {
        for (nodo in nodos) {
            val aristas = grafo[nodo] ?: continue

            for (arista in aristas) {
                val vecino = arista.destino
                val nuevaDistancia = nodo.distancia + arista.peso

                if (nodo.distancia != Int.MAX_VALUE &&
                    nuevaDistancia < vecino.distancia
                ) {
                    vecino.distancia = nuevaDistancia
                }
            }
        }
    }

    // Detectar ciclo negativo
    for (nodo in nodos) {
        val aristas = grafo[nodo] ?: continue

        for (arista in aristas) {
            val vecino = arista.destino

            if (nodo.distancia != Int.MAX_VALUE &&
                nodo.distancia + arista.peso < vecino.distancia
            ) {
                println("Existe un ciclo negativo")
            }
        }
    }
}

fun main() {
    val A = Nodo(0, Int.MAX_VALUE)
    val B = Nodo(1, Int.MAX_VALUE)
    val C = Nodo(2, Int.MAX_VALUE)
    val D = Nodo(3, Int.MAX_VALUE)

    val grafo = mapOf(
        A to listOf(Arista(B, 4), Arista(C, 5)),
        B to listOf(Arista(C, -3)),
        C to listOf(Arista(D, 4)),
        D to listOf()
    )

    val nodos = listOf(A, B, C, D)

    bellmanFord(nodos, grafo, A)

    for (nodo in nodos) {
        println("Distancia desde A hasta \${nodo.id}: \${nodo.distancia}")
    }
}
`}
        />
      </section>

      {/* Ventaja clave */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventaja principal
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A diferencia del algoritmo de Dijkstra, Bellman-Ford puede detectar
          ciclos negativos, lo cual es fundamental para evitar errores en
          cálculos de rutas.
        </p>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Ejecutá el código y analizá las distancias obtenidas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Modificá los pesos y observá cómo cambian los resultados.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Intentá crear un ciclo negativo y verificá si el algoritmo lo detecta.
          </div>

        </div>
      </section>
          {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Final
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Diseñá un grafo con al menos 5 nodos que incluya un ciclo negativo
          y explicá cómo el algoritmo de Bellman-Ford lo detecta.
        </div>
      </section>
    </div>
  );
}