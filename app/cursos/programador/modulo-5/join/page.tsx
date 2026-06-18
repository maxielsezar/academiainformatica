import CodeBlock from "@/app/components/CodeBlock";

export default function JoinsSQLPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          JOINS en SQL: Relacionando Tablas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Hasta ahora realizamos consultas sobre una sola tabla. Sin embargo,
          en una base de datos real la información normalmente está distribuida
          en varias tablas relacionadas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Para combinar información entre tablas utilizamos los
          <strong> JOINS</strong>.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un JOIN?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un JOIN permite unir registros de dos o más tablas utilizando una
          relación entre ellas (normalmente mediante claves primarias y
          foráneas).
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p>
            JOIN = Combinar información relacionada
          </p>
        </div>

        <p className="leading-relaxed max-w-3xl mt-4">
          Esto evita duplicar datos y permite consultas más potentes.
        </p>
      </section>

      {/* Ejemplo tablas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tablas del Sistema de Ventas
        </h2>

        <pre className="border rounded-xl p-6 font-mono text-sm overflow-x-auto">
{`CLIENTES
---------
id
nombre

VENTAS
---------
id
fecha
cliente_id
total`}
        </pre>

        <p className="leading-relaxed max-w-3xl mt-6">
          La tabla ventas almacena únicamente el id del cliente. Para obtener el
          nombre del cliente debemos utilizar JOIN.
        </p>
      </section>

      {/* Sintaxis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sintaxis General
        </h2>

        <CodeBlock
          code={`SELECT columnas

FROM tabla1

JOIN tabla2

ON tabla1.id = tabla2.id;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          La condición ON indica cómo se relacionan ambas tablas.
        </p>
      </section>

      {/* INNER JOIN */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          INNER JOIN
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Devuelve únicamente los registros que tienen coincidencias en ambas
          tablas.
        </p>

        <CodeBlock
          code={`SELECT
ventas.id,
clientes.nombre,
ventas.total

FROM ventas

INNER JOIN clientes

ON ventas.cliente_id =
clientes.id;`}
        />

        <pre className="border rounded-xl p-6 max-w-4xl mt-6">
          Resultado:
          <br /><br />

{`Venta 1 → Juan → $15000
Venta 2 → Ana → $30000`}
        </pre>
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué ocurrió?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          SQL buscó todas las ventas y reemplazó el cliente_id por los datos
          reales del cliente utilizando la relación:
        </p>

        <CodeBlock
          code={`ventas.cliente_id = clientes.id`}
        />
      </section>

      {/* LEFT JOIN */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          LEFT JOIN
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Devuelve todos los registros de la tabla izquierda aunque no exista
          coincidencia en la tabla derecha.
        </p>

        <CodeBlock
          code={`SELECT
clientes.nombre,
ventas.total

FROM clientes

LEFT JOIN ventas

ON clientes.id =
ventas.cliente_id;`}
        />

        <pre className="border rounded-xl p-6 max-w-4xl mt-6">
{`Juan → $15000
Ana → $20000
Carlos → NULL`}
        </pre>

        <p className="leading-relaxed max-w-3xl mt-6">
          Carlos aparece aunque todavía no tenga ventas.
        </p>
      </section>

      {/* RIGHT JOIN */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          RIGHT JOIN
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Devuelve todos los registros de la tabla derecha aunque no exista
          coincidencia.
        </p>

        <CodeBlock
          code={`SELECT *

FROM clientes

RIGHT JOIN ventas

ON clientes.id =
ventas.cliente_id;`}
        />

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          Nota:
          SQLite normalmente trabaja principalmente con INNER y LEFT JOIN.
        </div>
      </section>

      {/* FULL */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          FULL OUTER JOIN
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Devuelve todos los registros de ambas tablas.
        </p>

        <CodeBlock
          code={`SELECT *

FROM clientes

FULL OUTER JOIN ventas

ON clientes.id =
ventas.cliente_id;`}
        />

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          SQLite no posee soporte nativo para FULL JOIN.
        </div>
      </section>

      {/* JOIN múltiples */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          JOIN entre Varias Tablas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Podemos combinar más de dos tablas.
        </p>

        <CodeBlock
          code={`SELECT

ventas.id,
clientes.nombre,
productos.nombre,
detalle_venta.cantidad

FROM ventas

INNER JOIN clientes
ON ventas.cliente_id =
clientes.id

INNER JOIN detalle_venta
ON ventas.id =
detalle_venta.venta_id

INNER JOIN productos
ON detalle_venta.producto_id =
productos.id;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Esta consulta genera un reporte completo de ventas.
        </p>
      </section>

      {/* Alias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alias (AS)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los alias permiten escribir consultas más legibles.
        </p>

        <CodeBlock
          code={`SELECT

v.id,
c.nombre,
v.total

FROM ventas v

JOIN clientes c

ON v.cliente_id =
c.id;`}
        />

      </section>

      {/* Visual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Visualizando la Relación
        </h2>

        <pre className="border rounded-xl p-6 font-mono text-sm">

{`CLIENTES
---------
id (PK)

    |
    |
    V

VENTAS
---------
cliente_id (FK)`}
        </pre>

      </section>

      {/* Casos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Casos Comunes en el Sistema de Ventas
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <strong>Ventas + Cliente</strong>
            <p className="mt-2">
              Mostrar quién realizó cada venta.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <strong>Detalle + Producto</strong>
            <p className="mt-2">
              Mostrar qué productos se vendieron.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <strong>Reporte Completo</strong>
            <p className="mt-2">
              Combinar ventas, cliente y productos.
            </p>
          </div>

        </div>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No colocar ON.</li>
          <li>Relacionar columnas incorrectas.</li>
          <li>Confundir PK con FK.</li>
          <li>Usar SELECT * en consultas grandes.</li>
          <li>No utilizar alias cuando hay muchas tablas.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>
            Crear una consulta que muestre ventas y nombres de clientes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Realizar un LEFT JOIN para mostrar clientes sin compras.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Mostrar productos vendidos utilizando detalle_venta.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Reescribir una consulta utilizando alias.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Construir una consulta que combine las cuatro tablas del sistema.
          </div>

        </div>
      </section>

    </div>
  );
}