export default function BuscarBuscarVExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Funciones BUSCAR y BUSCARV en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones BUSCAR y BUSCARV permiten encontrar información dentro de una tabla.
          Son muy utilizadas para buscar datos como precios, nombres o resultados de manera automática.
        </p>
      </section>

      {/* BUSCAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Función BUSCAR
        </h2>

        <p className="max-w-3xl mb-4">
          La función BUSCAR permite encontrar un valor dentro de un rango ordenado
          y devolver un resultado relacionado.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo:</p>
          <p>=BUSCAR(A1; A1:A10; B1:B10)</p>
          <p>
            Busca el valor de A1 en el rango A1:A10 y devuelve el valor correspondiente de B1:B10.
          </p>
        </div>
      </section>

      {/* BUSCARV */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Función BUSCARV
        </h2>

        <p className="max-w-3xl mb-4">
          BUSCARV (buscar vertical) busca un valor en la primera columna de una tabla
          y devuelve un dato de otra columna en la misma fila.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Sintaxis:</p>
          <p>=BUSCARV(valor_buscado; tabla; columna; [ordenado])</p>

          <p className="mt-2">Ejemplo:</p>
          <p>=BUSCARV(A1; A1:C10; 2; FALSO)</p>
          <p>
            Busca el valor de A1 en la primera columna y devuelve el dato de la segunda columna.
          </p>
        </div>
      </section>

      {/* Para qué sirven */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirven?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Buscar precios de productos.</li>
          <li>Consultar datos de alumnos.</li>
          <li>Relacionar información entre tablas.</li>
          <li>Automatizar búsquedas en grandes listas.</li>
        </ul>
      </section>

      {/* Ejemplo práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplo Práctico
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Si tienes una tabla con códigos de productos y precios, puedes escribir un código
            y usar BUSCARV para que Excel muestre automáticamente el precio.
          </p>
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
            Crea una tabla con:
            <br />
            Código | Producto | Precio
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            En otra celda, escribe un código de producto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Usa BUSCARV para mostrar automáticamente el nombre del producto y su precio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Automatizar la búsqueda de información dentro de una tabla.
          </div>

        </div>
      </section>

    </div>
  );
}