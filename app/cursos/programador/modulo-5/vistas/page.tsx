import CodeBlock from "@/app/components/CodeBlock";

export default function VistasSQLPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Vistas (Views) en SQL
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vista permite guardar una consulta SQL como si fuera una tabla.
          No almacena datos propios, sino que muestra información obtenida
          desde una o varias tablas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Las vistas ayudan a simplificar consultas complejas, reutilizar
          consultas y mostrar únicamente la información necesaria.
        </p>
      </section>

      {/* Introducción */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Vista?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vista es una consulta almacenada que puede consultarse igual que
          una tabla.
        </p>

        <div className="border rounded-xl p-6 bg-gray-50 max-w-4xl mt-6">

{`TABLAS
 ↓
CONSULTA SQL
 ↓
VIEW
 ↓
SELECT`}
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Cuando se consulta una vista, la base ejecuta automáticamente la
          consulta definida.
        </p>

      </section>

      {/* Sintaxis */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una Vista
        </h2>

        <CodeBlock
          code={`CREATE VIEW nombre_vista AS

SELECT
...

FROM tabla;`}
        />

      </section>

      {/* Ejemplo */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Básico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear una vista que muestre productos con precio y stock.
        </p>

        <CodeBlock
          code={`CREATE VIEW vista_productos AS

SELECT

nombre,
precio,
stock

FROM productos;`}
        />

        <p className="leading-relaxed max-w-3xl mt-6">
          Luego se utiliza como una tabla normal:
        </p>

        <CodeBlock
          code={`SELECT *

FROM vista_productos;`}
        />

      </section>

      {/* Sistema ventas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Aplicado al Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Supongamos que queremos mostrar ventas junto con el nombre del
          cliente.
        </p>

        <CodeBlock
          code={`CREATE VIEW vista_ventas AS

SELECT

v.id,
c.nombre AS cliente,
v.total

FROM ventas AS v

JOIN clientes AS c

ON v.cliente_id =
c.id;`}
        />

        <p className="leading-relaxed max-w-3xl mt-6">
          Ahora consultar ventas es más simple:
        </p>

        <CodeBlock
          code={`SELECT *

FROM vista_ventas;`}
        />

      </section>

      {/* View con funciones */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vista con Funciones Agregadas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las vistas también pueden utilizar SUM, AVG, COUNT y otras funciones.
        </p>

        <CodeBlock
          code={`CREATE VIEW resumen_ventas AS

SELECT

COUNT(*) AS cantidad,
SUM(total) AS total_vendido,
AVG(total) AS promedio

FROM ventas;`}
        />

      </section>

      {/* Consultar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consultar una Vista
        </h2>

        <CodeBlock
          code={`SELECT *

FROM resumen_ventas;`}
        />

        <div className="border rounded-xl p-6 bg-gray-50 max-w-4xl mt-6">

{`cantidad | total_vendido | promedio
-----------------------------------
15        | 450000        | 30000`}
        </div>

      </section>

      {/* Eliminar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Eliminar una Vista
        </h2>

        <CodeBlock
          code={`DROP VIEW vista_ventas;`}
        />

      </section>

      {/* Actualización */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Una Vista Guarda Datos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          No.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          La vista siempre obtiene información actualizada desde las tablas
          originales.
        </p>

        <div className="border rounded-xl p-6 bg-green-50 max-w-3xl mt-6">

{`Cambia tabla
↓

Cambia vista`}
        </div>

      </section>

      {/* Ventajas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de las Vistas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Consultas más simples.</li>

          <li>Reutilización de SQL.</li>

          <li>Mayor organización.</li>

          <li>Ocultar columnas sensibles.</li>

          <li>Reducir consultas repetidas.</li>

        </ul>

      </section>

      {/* Limitaciones */}
      <section>

        <h2 className="text-2xl font-bold text-red-700 mb-6">
          Limitaciones
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>No almacenan datos.</li>

          <li>Pueden afectar rendimiento si son muy complejas.</li>

          <li>No todas las vistas permiten INSERT o UPDATE.</li>

        </ul>

      </section>

      {/* Java */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consultar una Vista desde Java
        </h2>

        <CodeBlock
          code={`String sql =

"SELECT * FROM vista_ventas";

PreparedStatement ps =
con.prepareStatement(sql);

ResultSet rs =
ps.executeQuery();`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Desde Java una vista se consulta igual que cualquier tabla.
        </p>

      </section>

      {/* Comparación */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tabla vs Vista
        </h2>

        <div className="overflow-x-auto">

          <table className="border-collapse border">

            <thead>

              <tr>

                <th className="border p-3">
                  Tabla
                </th>

                <th className="border p-3">
                  Vista
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border p-3">
                  Guarda datos
                </td>

                <td className="border p-3">
                  No guarda datos
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  INSERT
                </td>

                <td className="border p-3">
                  Consulta
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Datos físicos
                </td>

                <td className="border p-3">
                  Datos virtuales
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
            Crear una vista para listar productos.
          </div>

          <div className="border p-6 rounded-xl">
            Crear una vista que combine ventas y clientes.
          </div>

          <div className="border p-6 rounded-xl">
            Utilizar una función agregada dentro de una vista.
          </div>

          <div className="border p-6 rounded-xl">
            Consultar una vista desde Java.
          </div>

          <div className="border p-6 rounded-xl">
            Comparar consultas normales con vistas.
          </div>

        </div>

      </section>

    </div>
  );
}