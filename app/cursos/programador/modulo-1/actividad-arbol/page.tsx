export default function ActividadesArbolesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividades Prácticas con Árboles
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta sección vas a trabajar con árboles, una estructura jerárquica
          muy utilizada en programación. Estas actividades te ayudarán a crear,
          recorrer y manipular nodos en árboles binarios.
        </p>
      </section>

      {/* Actividad 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 1: Crear un Nodo
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una clase <strong>Nodo</strong> para un árbol binario.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Un valor (dato)</li>
            <li>Referencia al hijo izquierdo</li>
            <li>Referencia al hijo derecho</li>
          </ul>

          <p>
            Este ejercicio es la base para trabajar con árboles.
          </p>
        </div>
      </section>

      {/* Actividad 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 2: Crear un Árbol Manualmente
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear un árbol binario con al menos 5 nodos.
          </p>

          <p>
            Ejemplo:
          </p>

          <pre className="bg-[#0f172a] text-gray-100 p-4 rounded-xl font-mono text-sm">
{`        10
       /  \\
      5    15
     / \\
    2   7`}
          </pre>

          <p>
            Debes enlazar manualmente los nodos usando referencias.
          </p>
        </div>
      </section>

      {/* Actividad 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 3: Recorrido InOrden
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Implementar una función que recorra el árbol en <strong>inorden</strong>.
          </p>

          <p>
            Orden: Izquierda → Raíz → Derecha
          </p>

          <p>
            Debes imprimir los valores en ese orden.
          </p>
        </div>
      </section>

      {/* Actividad 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 4: Recorrido PreOrden
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que recorra el árbol en <strong>preorden</strong>.
          </p>

          <p>
            Orden: Raíz → Izquierda → Derecha
          </p>

          <p>
            Este recorrido es útil para copiar árboles.
          </p>
        </div>
      </section>

      {/* Actividad 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 5: Buscar un Valor
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que busque un valor dentro del árbol.
          </p>

          <p>
            La función debe devolver:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>true si el valor existe</li>
            <li>false si no se encuentra</li>
          </ul>

          <p>
            Puedes recorrer todo el árbol o usar lógica de BST si lo implementas.
          </p>
        </div>
      </section>

      {/* Actividad 6 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 6: Contar Nodos
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que cuente la cantidad total de nodos del árbol.
          </p>

          <p>
            Debes recorrer todos los nodos y sumar 1 por cada uno.
          </p>
        </div>
      </section>

      {/* Actividad 7 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 7: Altura del Árbol
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Calcular la altura del árbol.
          </p>

          <p>
            La altura es la cantidad de niveles desde la raíz hasta la hoja más lejana.
          </p>

          <p>
            Este ejercicio es clave para entender la recursividad.
          </p>
        </div>
      </section>

      {/* Actividad 8 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 8: Insertar en un BST
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Implementar una función para insertar un valor en un 
            <strong> Árbol Binario de Búsqueda</strong>.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Valores menores → izquierda</li>
            <li>Valores mayores → derecha</li>
          </ul>

          <p>
            Este ejercicio introduce estructuras más avanzadas.
          </p>
        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl space-y-3">
          Crear una clase completa de árbol binario que incluya:
          <br />
          ✔ Inserción de nodos <br />
          ✔ Búsqueda <br />
          ✔ Recorridos (inorden, preorden, postorden) <br />
          ✔ Conteo de nodos <br />
          ✔ Altura del árbol <br /><br />

          Opcional: mostrar el árbol en forma visual.
        </div>
      </section>

    </div>
  );
}