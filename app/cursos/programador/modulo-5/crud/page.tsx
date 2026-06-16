import CodeBlock from "@/app/components/CodeBlock";

export default function CrudSQLPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          CRUD en SQL: Operaciones Básicas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vez creada una base de datos, el siguiente paso es comenzar a
          trabajar con la información almacenada. Para eso utilizamos las
          operaciones CRUD.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          CRUD representa las cuatro acciones fundamentales que se realizan
          sobre los datos:
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-4">
          <li>Create → Crear información</li>
          <li>Read → Leer información</li>
          <li>Update → Modificar información</li>
          <li>Delete → Eliminar información</li>
        </ul>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué usamos CRUD?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La mayoría de las aplicaciones funcionan realizando estas cuatro
          operaciones constantemente.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6 bg-gray-50">
          <p>
            Sistema de ventas:
          </p>

          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Crear productos nuevos</li>
            <li>Consultar clientes</li>
            <li>Actualizar stock</li>
            <li>Eliminar registros antiguos</li>
          </ul>
        </div>
      </section>

      {/* Tabla resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen de Operaciones
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Operación</th>
                <th className="border p-3">SQL</th>
                <th className="border p-3">Acción</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Create</td>
                <td className="border p-3">INSERT</td>
                <td className="border p-3">
                  Crear registros
                </td>
              </tr>

              <tr>
                <td className="border p-3">Read</td>
                <td className="border p-3">SELECT</td>
                <td className="border p-3">
                  Leer información
                </td>
              </tr>

              <tr>
                <td className="border p-3">Update</td>
                <td className="border p-3">UPDATE</td>
                <td className="border p-3">
                  Modificar registros
                </td>
              </tr>

              <tr>
                <td className="border p-3">Delete</td>
                <td className="border p-3">DELETE</td>
                <td className="border p-3">
                  Eliminar registros
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </section>

      {/* CREATE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          CREATE → Insertar Información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para agregar registros nuevos utilizamos la sentencia
          <strong> INSERT INTO</strong>.
        </p>

        <CodeBlock
          code={`INSERT INTO productos
(nombre, precio, stock)

VALUES
('Mouse', 15000, 20);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Esto crea un nuevo producto dentro de la tabla.
        </p>

      </section>

      {/* Insert múltiple */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Insertar Múltiples Registros
        </h2>

        <CodeBlock
          code={`INSERT INTO productos
(nombre, precio, stock)

VALUES
('Mouse',15000,20),
('Teclado',25000,10),
('Monitor',180000,5);`}
        />

      </section>

      {/* READ */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          READ → Consultar Información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para obtener datos usamos la sentencia
          <strong> SELECT</strong>.
        </p>

        <CodeBlock
          code={`SELECT *
FROM productos;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Devuelve todos los productos almacenados.
        </p>

      </section>

      {/* Select columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consultar Columnas Específicas
        </h2>

        <CodeBlock
          code={`SELECT
nombre,
precio

FROM productos;`}
        />

      </section>

      {/* WHERE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filtrar Información (WHERE)
        </h2>

        <CodeBlock
          code={`SELECT *

FROM productos

WHERE stock > 10;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Solo devuelve productos con stock mayor a 10.
        </p>

      </section>

      {/* UPDATE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          UPDATE → Modificar Información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para actualizar registros usamos
          <strong> UPDATE</strong>.
        </p>

        <CodeBlock
          code={`UPDATE productos

SET precio = 18000

WHERE id = 1;`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Modifica el precio del producto con id 1.
        </p>

      </section>

      {/* Update múltiples */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actualizar Varias Columnas
        </h2>

        <CodeBlock
          code={`UPDATE productos

SET
precio = 17000,
stock = 30

WHERE id = 1;`}
        />

      </section>

      {/* DELETE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DELETE → Eliminar Información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para borrar registros usamos
          <strong> DELETE</strong>.
        </p>

        <CodeBlock
          code={`DELETE

FROM productos

WHERE id = 3;`}
        />

      </section>

      {/* Advertencia */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-6">
          Cuidado con DELETE y UPDATE
        </h2>

        <div className="border rounded-xl p-6 max-w-3xl bg-red-50">

          <CodeBlock
            code={`DELETE FROM productos;`}
          />

          <p className="mt-4">
            Esta consulta elimina TODOS los registros de la tabla.
          </p>

        </div>

        <div className="border rounded-xl p-6 max-w-3xl mt-6 bg-red-50">

          <CodeBlock
            code={`UPDATE productos
SET stock = 0;`}
          />

          <p className="mt-4">
            Esto modifica TODOS los registros.
          </p>

        </div>

      </section>

      {/* CRUD completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Completo del Flujo CRUD
        </h2>

        <CodeBlock
          code={`-- Crear
INSERT INTO productos
(nombre,precio,stock)
VALUES
('Notebook',500000,4);

-- Leer
SELECT *
FROM productos;

-- Modificar
UPDATE productos
SET stock = 6
WHERE id = 1;

-- Eliminar
DELETE
FROM productos
WHERE id = 1;`}
        />

      </section>

      {/* Aplicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación al Sistema de Ventas
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <strong>Producto</strong>
            <p className="mt-2">
              Crear, editar, listar y eliminar productos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <strong>Cliente</strong>
            <p className="mt-2">
              Registrar y consultar clientes.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <strong>Venta</strong>
            <p className="mt-2">
              Registrar operaciones y consultar historial.
            </p>
          </div>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar WHERE en UPDATE y DELETE.</li>
          <li>Validar datos antes de guardar.</li>
          <li>Probar consultas primero con SELECT.</li>
          <li>Mantener nombres claros para tablas y columnas.</li>
          <li>Separar SQL de la interfaz gráfica.</li>
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
            Insertar cinco productos distintos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Mostrar únicamente nombre y precio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Actualizar el stock de un producto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Eliminar un registro utilizando WHERE.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Implementar el CRUD completo para productos dentro del sistema de ventas.
          </div>

        </div>

      </section>

    </div>
  );
}