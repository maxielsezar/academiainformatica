import CodeBlock from "@/app/components/CodeBlock";

export default function FuncionesSQLPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones SQL: SUM, MAX, MIN, AVG y Otras Operaciones Útiles
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones SQL permiten realizar cálculos y obtener información
          resumida sobre los datos almacenados en una base de datos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Son especialmente útiles para reportes, estadísticas y análisis dentro
          del sistema de ventas.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son las funciones agregadas?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Son funciones que trabajan sobre varias filas y devuelven un único
          resultado.
        </p>

        <div className="border rounded-xl p-6 bg-gray-50 max-w-3xl mt-6">
{`Ejemplo:
Precios → 1000, 2000, 3000

AVG → 2000`}
        </div>
      </section>

      {/* Tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tabla de Ejemplo
        </h2>

        <CodeBlock
          code={`productos

id | nombre     | precio | stock
--------------------------------
1  | Mouse      | 15000  | 10
2  | Monitor    | 200000 | 5
3  | Teclado    | 30000  | 20
4  | Notebook   | 500000 | 3`}
        />
      </section>

      {/* COUNT */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          COUNT() → Contar Registros
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Devuelve la cantidad de filas.
        </p>

        <CodeBlock
          code={`SELECT COUNT(*)

FROM productos;`}
        />

        <div className="border rounded-xl p-6 mt-6 max-w-xl">
          Resultado → 4
        </div>
      </section>

      {/* SUM */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          SUM() → Sumar Valores
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Suma todos los valores de una columna numérica.
        </p>

        <CodeBlock
          code={`SELECT SUM(stock)

FROM productos;`}
        />

        <div className="border rounded-xl p-6 mt-6 max-w-xl">
          Resultado → 38
        </div>

      </section>

      {/* AVG */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          AVG() → Calcular Promedio
        </h2>

        <CodeBlock
          code={`SELECT AVG(precio)

FROM productos;`}
        />

        <div className="border rounded-xl p-6 mt-6 max-w-xl">
          Resultado → Precio promedio
        </div>

      </section>

      {/* MAX */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          MAX() → Obtener Valor Máximo
        </h2>

        <CodeBlock
          code={`SELECT MAX(precio)

FROM productos;`}
        />

        <div className="border rounded-xl p-6 mt-6 max-w-xl">
          Resultado → 500000
        </div>

      </section>

      {/* MIN */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          MIN() → Obtener Valor Mínimo
        </h2>

        <CodeBlock
          code={`SELECT MIN(precio)

FROM productos;`}
        />

        <div className="border rounded-xl p-6 mt-6 max-w-xl">
          Resultado → 15000
        </div>

      </section>

      {/* ROUND */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ROUND() → Redondear Resultados
        </h2>

        <CodeBlock
          code={`SELECT ROUND(
AVG(precio),
2
)

FROM productos;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Redondea el resultado a una cantidad determinada de decimales.
        </p>

      </section>

      {/* DISTINCT */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DISTINCT → Evitar Duplicados
        </h2>

        <CodeBlock
          code={`SELECT DISTINCT categoria

FROM productos;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Devuelve únicamente valores distintos.
        </p>

      </section>

      {/* GROUP */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          GROUP BY → Agrupar Resultados
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Permite calcular funciones agrupando registros.
        </p>

        <CodeBlock
          code={`SELECT

categoria,
COUNT(*) AS cantidad,
AVG(precio) AS promedio

FROM productos

GROUP BY categoria;`}
        />

      </section>

      {/* HAVING */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          HAVING → Filtrar Agrupaciones
        </h2>

        <CodeBlock
          code={`SELECT

categoria,
SUM(stock)

FROM productos

GROUP BY categoria

HAVING SUM(stock) > 20;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          HAVING funciona después del GROUP BY.
        </p>

      </section>

      {/* Combinación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar Funciones
        </h2>

        <CodeBlock
          code={`SELECT

COUNT(*) AS total_productos,
SUM(stock) AS stock_total,
AVG(precio) AS promedio,
MAX(precio) AS mayor,
MIN(precio) AS menor

FROM productos;`}
        />

      </section>

      {/* Sistema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación al Sistema de Ventas
        </h2>

        <div className="space-y-4">

          <div className="border rounded-xl p-5">
            <strong>Total vendido</strong>

            <CodeBlock
              code={`SELECT SUM(total)

FROM ventas;`}
            />
          </div>

          <div className="border rounded-xl p-5">
            <strong>Cliente con mayor compra</strong>

            <CodeBlock
              code={`SELECT MAX(total)

FROM ventas;`}
            />
          </div>

          <div className="border rounded-xl p-5">
            <strong>Cantidad de ventas</strong>

            <CodeBlock
              code={`SELECT COUNT(*)

FROM ventas;`}
            />
          </div>

        </div>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre WHERE y HAVING
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border">

            <thead>

              <tr>

                <th className="border p-3">
                  WHERE
                </th>

                <th className="border p-3">
                  HAVING
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border p-3">
                  Filtra filas
                </td>

                <td className="border p-3">
                  Filtra grupos
                </td>

              </tr>

            </tbody>

          </table>
        </div>

      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar AVG sobre texto.</li>
          <li>Confundir WHERE con HAVING.</li>
          <li>No utilizar GROUP BY correctamente.</li>
          <li>Olvidar alias en reportes.</li>
          <li>Usar COUNT(columna) cuando hay valores NULL.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            Calcular el precio promedio de productos.
          </div>

          <div className="border p-6 rounded-xl">
            Mostrar el producto más caro y más barato.
          </div>

          <div className="border p-6 rounded-xl">
            Obtener el stock total disponible.
          </div>

          <div className="border p-6 rounded-xl">
            Contar la cantidad de ventas realizadas.
          </div>

          <div className="border p-6 rounded-xl">
            Agrupar ventas por cliente.
          </div>

        </div>

      </section>

    </div>
  );
}