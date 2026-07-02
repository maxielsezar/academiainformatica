import CodeBlock from "@/app/components/CodeBlock";

export default function IndicesSQLPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Índices (Indexes) en SQL
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los índices son estructuras utilizadas por los motores de bases de
          datos para acelerar la búsqueda de información. Funcionan de manera
          similar al índice de un libro: permiten encontrar un dato sin tener
          que recorrer toda la información.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Aunque los índices mejoran significativamente la velocidad de las
          consultas, también tienen un costo en espacio de almacenamiento y en
          las operaciones de inserción, actualización y eliminación.
        </p>
      </section>

      {/* ¿Qué es un índice? */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Índice?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un índice es una estructura especial que organiza los valores de una o
          varias columnas para que las búsquedas sean mucho más rápidas.
        </p>

        <div className="border rounded-xl p-6 bg-gray-50 max-w-4xl mt-6">

{`Sin índice

Base de datos
↓

Fila 1
Fila 2
Fila 3
...
Fila 10.000


Con índice

Índice
↓

Cliente "Juan"
↓

Fila 8.245`}
        </div>

      </section>

      {/* Funcionamiento */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funcionan?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando ejecutamos una consulta utilizando una columna indexada, el
          motor consulta primero el índice y luego accede directamente a los
          registros necesarios, evitando recorrer toda la tabla.
        </p>

      </section>

      {/* Cuándo usar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuándo conviene crear un índice?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Columnas utilizadas en búsquedas frecuentes.</li>

          <li>Claves foráneas (Foreign Keys).</li>

          <li>Columnas utilizadas en JOIN.</li>

          <li>Columnas utilizadas en ORDER BY.</li>

          <li>Columnas utilizadas en WHERE.</li>

        </ul>

      </section>

      {/* Sintaxis */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Índice
        </h2>

        <CodeBlock
          code={`CREATE INDEX idx_nombre

ON clientes(nombre);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Este índice acelerará las búsquedas realizadas sobre la columna
          <strong> nombre</strong>.
        </p>

      </section>

      {/* Índice único */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Índice Único (UNIQUE INDEX)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un índice único impide que existan valores repetidos en la columna.
        </p>

        <CodeBlock
          code={`CREATE UNIQUE INDEX idx_email

ON clientes(email);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          En este caso no podrán existir dos clientes con el mismo correo
          electrónico.
        </p>

      </section>

      {/* Índice compuesto */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Índices Compuestos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          También es posible crear un índice utilizando varias columnas.
        </p>

        <CodeBlock
          code={`CREATE INDEX idx_cliente_fecha

ON ventas(
cliente_id,
fecha
);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Este índice mejora las consultas que filtran simultáneamente por
          cliente y fecha.
        </p>

      </section>

      {/* Consulta */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Consulta
        </h2>

        <CodeBlock
          code={`SELECT *

FROM clientes

WHERE nombre = 'Juan';`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Si la columna <strong>nombre</strong> posee un índice, la búsqueda será
          considerablemente más rápida.
        </p>

      </section>

      {/* Sistema de ventas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Índices en el Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunas columnas que conviene indexar son:
        </p>

        <div className="overflow-x-auto mt-6">

          <table className="border-collapse border">

            <thead>

              <tr>

                <th className="border p-3">
                  Tabla
                </th>

                <th className="border p-3">
                  Columna
                </th>

                <th className="border p-3">
                  Motivo
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border p-3">
                  Clientes
                </td>

                <td className="border p-3">
                  nombre
                </td>

                <td className="border p-3">
                  Búsquedas frecuentes
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Productos
                </td>

                <td className="border p-3">
                  nombre
                </td>

                <td className="border p-3">
                  Consultas
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Ventas
                </td>

                <td className="border p-3">
                  cliente_id
                </td>

                <td className="border p-3">
                  JOIN
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  DetalleVenta
                </td>

                <td className="border p-3">
                  venta_id
                </td>

                <td className="border p-3">
                  Relaciones
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Eliminar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Eliminar un Índice
        </h2>

        <CodeBlock
          code={`DROP INDEX idx_nombre;`}
        />

      </section>

      {/* Ventajas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Aceleran las búsquedas.</li>

          <li>Mejoran el rendimiento de JOIN.</li>

          <li>Optimizan ORDER BY.</li>

          <li>Reducen el tiempo de respuesta.</li>

        </ul>

      </section>

      {/* Desventajas */}
      <section>

        <h2 className="text-2xl font-bold text-red-700 mb-6">
          Desventajas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Consumen espacio adicional.</li>

          <li>Las inserciones son un poco más lentas.</li>

          <li>Las actualizaciones deben modificar el índice.</li>

          <li>No conviene crear índices en todas las columnas.</li>

        </ul>

      </section>

      {/* Buenas prácticas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Crear índices únicamente en columnas utilizadas frecuentemente.</li>

          <li>Indexar claves foráneas.</li>

          <li>Evitar índices sobre tablas muy pequeñas.</li>

          <li>Eliminar índices que no se utilicen.</li>

          <li>No crear demasiados índices innecesarios.</li>

        </ul>

      </section>

      {/* Resumen */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <div className="overflow-x-auto">

          <table className="border-collapse border">

            <thead>

              <tr>

                <th className="border p-3">
                  Operación
                </th>

                <th className="border p-3">
                  SQL
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border p-3">
                  Crear índice
                </td>

                <td className="border p-3">
                  CREATE INDEX
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Crear índice único
                </td>

                <td className="border p-3">
                  CREATE UNIQUE INDEX
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Eliminar índice
                </td>

                <td className="border p-3">
                  DROP INDEX
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Actividades */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            Crear un índice sobre la columna <strong>nombre</strong> de la tabla
            <strong> clientes</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            Crear un índice compuesto utilizando <strong>cliente_id</strong> y
            <strong> fecha</strong> en la tabla <strong>ventas</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            Investigar qué columnas del sistema de ventas deberían estar
            indexadas y justificar la elección.
          </div>

          <div className="border p-6 rounded-xl">
            Crear un índice único para evitar clientes con el mismo correo
            electrónico.
          </div>

          <div className="border p-6 rounded-xl">
            Comparar el funcionamiento de una consulta con y sin índice sobre una
            tabla con muchos registros.
          </div>

        </div>

      </section>

    </div>
  );
}