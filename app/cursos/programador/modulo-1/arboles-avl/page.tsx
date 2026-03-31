export default function ArbolesAVLPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Árboles AVL
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los árboles AVL son un tipo de árbol binario de búsqueda
          auto-balanceado. Esto significa que mantienen su altura lo más
          equilibrada posible para garantizar búsquedas, inserciones y
          eliminaciones eficientes.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un árbol AVL?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es un árbol binario de búsqueda en el que la diferencia de altura
          entre el subárbol izquierdo y el derecho de cualquier nodo no puede
          ser mayor a 1. Esta diferencia se llama <strong>factor de balance</strong>.
        </p>
      </section>

      {/* Factor de balance */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Factor de balance
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          El factor de balance se calcula como:
        </p>

        <div className="border p-4 rounded-xl max-w-md">
          <strong>Balance = altura(izquierda) - altura(derecha)</strong>
        </div>

        <p className="mt-4 max-w-3xl">
          Valores permitidos:
        </p>

        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>-1 → balanceado</li>
          <li>0 → balanceado</li>
          <li>1 → balanceado</li>
        </ul>
      </section>

      {/* Rotaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Rotaciones en AVL
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Cuando el árbol se desbalancea, se aplican rotaciones para volver
          a equilibrarlo:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Rotación simple derecha (LL)</strong></li>
          <li><strong>Rotación simple izquierda (RR)</strong></li>
          <li><strong>Rotación doble izquierda-derecha (LR)</strong></li>
          <li><strong>Rotación doble derecha-izquierda (RL)</strong></li>
        </ul>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de los árboles AVL
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Búsquedas más rápidas (O(log n))</li>
          <li>Estructura siempre balanceada</li>
          <li>Mejor rendimiento que un árbol binario simple</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá con tus palabras qué diferencia hay entre un árbol binario
            de búsqueda y un árbol AVL.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Dibujá un árbol AVL e indicá el factor de balance de cada nodo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investigá y explicá cuándo se aplica una rotación simple y una doble.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Insertá los valores: 10, 20, 30 en un árbol AVL y mostrar;
            qué rotación se realiza.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Final
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Construí un árbol AVL insertando al menos 6 valores y mostrar;
          paso a paso cómo se balancea el árbol.
        </div>
      </section>

    </div>
  );
}