import CodeBlock from "@/app/components/CodeBlock";

export default function ACIDPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          ACID: Propiedades de las Transacciones en Bases de Datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Cuando una aplicación trabaja con información importante (ventas,
          pagos, clientes, stock, etc.), no alcanza con guardar datos: también
          necesitamos garantizar que los cambios sean seguros.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Para resolver este problema existen las propiedades
          <strong> ACID</strong>, un conjunto de reglas que aseguran que las
          transacciones se ejecuten correctamente.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué significa ACID?
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">

          <ul className="space-y-4">

            <li>
              <strong>A → Atomicity (Atomicidad)</strong>
            </li>

            <li>
              <strong>C → Consistency (Consistencia)</strong>
            </li>

            <li>
              <strong>I → Isolation (Aislamiento)</strong>
            </li>

            <li>
              <strong>D → Durability (Durabilidad)</strong>
            </li>

          </ul>

        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Estas propiedades se aplican a las transacciones, es decir,
          operaciones que agrupan varios cambios sobre la base de datos.
        </p>
      </section>

      {/* Transacción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Transacción?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una transacción es un conjunto de operaciones que deben ejecutarse
          como una única unidad de trabajo.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">
{`Ejemplo:

1. Crear venta
2. Descontar stock
3. Registrar detalle

→ Todo debe completarse correctamente`}
        </div>

      </section>

      {/* Atomicidad */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          A — Atomicidad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una transacción se ejecuta completamente o no se ejecuta.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">
{`SI:
✓ Venta creada
✓ Stock actualizado

NO:
✗ Venta creada
✗ Stock sin actualizar`}
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Si ocurre un error, todos los cambios deben revertirse.
        </p>

      </section>

      {/* Consistencia */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          C — Consistencia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La base de datos debe mantenerse siempre en un estado válido antes y
          después de la transacción.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

{`Correcto:
Stock = 20
Venta = 5

Nuevo Stock = 15

Incorrecto:
Nuevo Stock = -5`}
        </div>

      </section>

      {/* Isolation */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          I — Aislamiento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Varias transacciones ejecutándose al mismo tiempo no deben interferir
          entre sí.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

{`Usuario A → compra 2

Usuario B → compra 3

Resultado correcto:
Stock = 5 restantes`}
        </div>

      </section>

      {/* Durabilidad */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          D — Durabilidad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez confirmados los cambios, deben mantenerse incluso si el
          sistema falla o se reinicia.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

{`Venta guardada

↓

Se apaga la PC

↓

La venta sigue existiendo`}
        </div>

      </section>

      {/* SQL */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Transacciones en SQL
        </h2>

        <p className="leading-relaxed max-w-3xl">
          SQL permite controlar transacciones manualmente.
        </p>

        <CodeBlock
          code={`BEGIN TRANSACTION;

UPDATE productos
SET stock = stock - 1
WHERE id = 1;

INSERT INTO ventas(
cliente_id,
total
)
VALUES(
3,
15000
);

COMMIT;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          COMMIT confirma los cambios.
        </p>

      </section>

      {/* Rollback */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ROLLBACK
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Permite cancelar una transacción cuando ocurre un error.
        </p>

        <CodeBlock
          code={`BEGIN TRANSACTION;

UPDATE productos
SET stock = stock - 10;

ROLLBACK;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Todo vuelve al estado anterior.
        </p>

      </section>

      {/* SQLite */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Aplicado a SQLite
        </h2>

        <CodeBlock
          code={`BEGIN;

INSERT INTO ventas
VALUES(
1,
50000
);

UPDATE productos

SET stock =
stock - 1;

COMMIT;`}
        />

      </section>

      {/* Java */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Controlar Transacciones desde Java
        </h2>

        <CodeBlock
          code={`Connection con =
Conexion.conectar();

try {

con.setAutoCommit(false);

guardarVenta();

actualizarStock();

con.commit();

}

catch(Exception e){

con.rollback();

}`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Si ocurre un error se cancelan todas las operaciones.
        </p>

      </section>

      {/* Problemas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Problemas que ACID Evita
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">

          <li>Ventas incompletas.</li>

          <li>Stock negativo.</li>

          <li>Datos inconsistentes.</li>

          <li>Pérdida de información.</li>

          <li>Errores por múltiples usuarios.</li>

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
                  Propiedad
                </th>

                <th className="border p-3">
                  Objetivo
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td className="border p-3">
                  Atomicidad
                </td>

                <td className="border p-3">
                  Todo o nada
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Consistencia
                </td>

                <td className="border p-3">
                  Datos válidos
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Aislamiento
                </td>

                <td className="border p-3">
                  Evitar interferencias
                </td>

              </tr>

              <tr>

                <td className="border p-3">
                  Durabilidad
                </td>

                <td className="border p-3">
                  Mantener cambios
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
            Explicar cada propiedad ACID con palabras propias.
          </div>

          <div className="border p-6 rounded-xl">
            Crear una transacción para registrar una venta.
          </div>

          <div className="border p-6 rounded-xl">
            Implementar COMMIT y ROLLBACK.
          </div>

          <div className="border p-6 rounded-xl">
            Simular un error y verificar la atomicidad.
          </div>

          <div className="border p-6 rounded-xl">
            Relacionar ACID con el sistema de ventas.
          </div>

        </div>

      </section>

    </div>
  );
}