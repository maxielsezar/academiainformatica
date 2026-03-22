export default function ActividadesListasEnlazadasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividades Prácticas con Listas Enlazadas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta sección vas a trabajar con listas enlazadas, una estructura de datos
          dinámica donde cada elemento apunta al siguiente. Estas actividades te ayudarán
          a comprender cómo crear, recorrer y manipular nodos.
        </p>
      </section>

      {/* Actividad 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 1: Crear una Lista Enlazada
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una lista enlazada simple que almacene números enteros.
          </p>

          <p>
            Debes definir una clase <strong>Nodo</strong> que contenga:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Un valor (dato)</li>
            <li>Una referencia al siguiente nodo</li>
          </ul>

          <p>
            Luego crear manualmente al menos 3 nodos y enlazarlos entre sí.
          </p>

          <p>
            Este ejercicio permite entender la estructura básica de una lista enlazada.
          </p>
        </div>
      </section>

      {/* Actividad 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 2: Recorrer la Lista
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear un método que recorra la lista enlazada e imprima todos sus elementos.
          </p>

          <p>
            Debes comenzar desde el primer nodo (head) y avanzar utilizando
            la referencia al siguiente nodo hasta llegar a <strong>null</strong>.
          </p>

          <p>
            Ejemplo de salida:
          </p>

          <div className="bg-[#0f172a] text-gray-100 p-4 rounded-xl font-mono text-sm">
            10 → 20 → 30 → null
          </div>

          <p>
            Este ejercicio refuerza el uso de bucles y referencias.
          </p>
        </div>
      </section>

      {/* Actividad 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 3: Insertar al Inicio
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que inserte un nuevo nodo al inicio de la lista.
          </p>

          <p>
            Para ello:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>El nuevo nodo debe apuntar al nodo actual inicial</li>
            <li>Actualizar el head para que sea el nuevo nodo</li>
          </ul>

          <p>
            Este ejercicio ayuda a comprender cómo modificar referencias en la lista.
          </p>
        </div>
      </section>

      {/* Actividad 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 4: Insertar al Final
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que agregue un nodo al final de la lista enlazada.
          </p>

          <p>
            Debes recorrer la lista hasta encontrar el último nodo (donde next es null)
            y enlazar el nuevo nodo allí.
          </p>

          <p>
            Este ejercicio refuerza el recorrido y la manipulación de nodos.
          </p>
        </div>
      </section>

      {/* Actividad 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 5: Buscar un Elemento
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que busque un valor dentro de la lista enlazada.
          </p>

          <p>
            La función debe recorrer la lista y devolver:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>true si el elemento existe</li>
            <li>false si no se encuentra</li>
          </ul>

          <p>
            Este ejercicio ayuda a trabajar con condiciones y recorridos.
          </p>
        </div>
      </section>

      {/* Actividad 6 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 6: Eliminar un Nodo
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que elimine un nodo con un valor específico.
          </p>

          <p>
            Debes considerar dos casos:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Eliminar el primer nodo (head)</li>
            <li>Eliminar un nodo intermedio</li>
          </ul>

          <p>
            Para eliminar, debes hacer que el nodo anterior apunte
            al siguiente del nodo eliminado.
          </p>

          <p>
            Este ejercicio es clave para entender la manipulación de referencias.
          </p>
        </div>
      </section>

      {/* Actividad 7 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 7: Contar Elementos
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que cuente cuántos nodos tiene la lista.
          </p>

          <p>
            Debes recorrer toda la lista y aumentar un contador en cada nodo.
          </p>

          <p>
            Este ejercicio refuerza el uso de contadores y recorridos.
          </p>
        </div>
      </section>

      {/* Actividad 8 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 8: Invertir la Lista
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que invierta una lista enlazada.
          </p>

          <p>
            Es decir, el último nodo debe pasar a ser el primero.
          </p>

          <p>
            Debes cambiar las referencias de cada nodo para que apunten al anterior.
          </p>

          <p>
            Este es uno de los ejercicios más importantes para dominar listas enlazadas.
          </p>
        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl space-y-3">
          Crear una clase completa de lista enlazada que incluya:
          <br />
          ✔ Inserción al inicio y al final <br />
          ✔ Eliminación de elementos <br />
          ✔ Búsqueda <br />
          ✔ Recorrido <br />
          ✔ Conteo de nodos <br /><br />

          Opcional: mostrar la lista en formato visual (10 → 20 → 30 → null).
        </div>
      </section>

    </div>
  );
}