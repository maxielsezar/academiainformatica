export default function FuncionesTextoAvanzadasExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Funciones de Texto en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Excel ofrece distintas funciones para trabajar con texto. Estas funciones
          permiten extraer, modificar y analizar información dentro de una celda,
          siendo muy útiles para organizar datos como nombres, códigos o textos largos.
        </p>
      </section>

      {/* IZQUIERDA / DERECHA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          1. Funciones IZQUIERDA y DERECHA
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p><strong>IZQUIERDA:</strong> extrae caracteres desde el inicio del texto.</p>
          <p>=IZQUIERDA(A1; 4)</p>

          <p className="mt-2"><strong>DERECHA:</strong> extrae caracteres desde el final.</p>
          <p>=DERECHA(A1; 3)</p>
        </div>
      </section>

      {/* EXTRAE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          2. Función EXTRAE
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Permite extraer texto desde una posición específica.</p>
          <p>=EXTRAE(A1; 2; 4)</p>
          <p>Extrae 4 caracteres desde la posición 2.</p>
        </div>
      </section>

      {/* LARGO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          3. Función LARGO
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Cuenta la cantidad de caracteres de un texto.</p>
          <p>=LARGO(A1)</p>
        </div>
      </section>

      {/* HALLAR / ENCONTRAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          4. Funciones HALLAR y ENCONTRAR
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Permiten encontrar la posición de un texto dentro de otro.</p>
          <p>=HALLAR("a"; A1)</p>
          <p>=ENCONTRAR("a"; A1)</p>

          <p className="mt-2">
            ENCONTRAR distingue mayúsculas/minúsculas, HALLAR no.
          </p>
        </div>
      </section>

      {/* SUSTITUIR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          5. Función SUSTITUIR
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Reemplaza parte de un texto por otro.</p>
          <p>=SUSTITUIR(A1; "Juan"; "Pedro")</p>
        </div>
      </section>

      {/* CONCATENAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          6. Función CONCATENAR
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Une el contenido de varias celdas.</p>
          <p>=CONCATENAR(A1; " "; B1)</p>
        </div>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividad Práctica
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Escribe nombres completos en una celda (Nombre Apellido).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Usa IZQUIERDA o EXTRAE para separar el nombre.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Usa LARGO para contar los caracteres.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 4</p>
            Usa SUSTITUIR para cambiar una palabra del texto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Manipular texto utilizando distintas funciones de Excel.
          </div>

        </div>
      </section>

    </div>
  );
}