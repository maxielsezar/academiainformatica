import CodeBlock from "@/app/components/CodeBlock";

export default function PrimaryKeyForeignKeyPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Claves Primarias y Claves Foráneas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las claves primarias y las claves foráneas son fundamentales en el
          diseño de bases de datos relacionales. Gracias a ellas podemos
          identificar registros de forma única y establecer relaciones entre
          diferentes tablas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En el sistema de ventas utilizaremos estas claves para relacionar
          clientes, productos, ventas y detalles de venta.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué son necesarias?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Imaginemos que tenemos miles de clientes registrados. Necesitamos una
          forma de identificar a cada uno sin ambigüedades. Además, cuando una
          venta pertenece a un cliente, debemos poder indicar exactamente cuál
          es ese cliente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Para resolver estos problemas utilizamos claves primarias (Primary
          Key) y claves foráneas (Foreign Key).
        </p>
      </section>

      {/* Primary Key */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Primary Key?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una clave primaria (Primary Key o PK) es un campo que identifica de
          manera única cada registro dentro de una tabla.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6 bg-gray-50">
          <p>
            No pueden existir dos registros con la misma clave primaria.
          </p>
        </div>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de una Primary Key
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Identifica un registro de forma única.</li>
          <li>No puede repetirse.</li>
          <li>No puede ser nula (NULL).</li>
          <li>Generalmente utiliza valores numéricos.</li>
          <li>Suele generarse automáticamente.</li>
        </ul>
      </section>

      {/* Ejemplo PK */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Primary Key
        </h2>

        <CodeBlock
          code={`CREATE TABLE clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    apellido TEXT
);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          El campo <strong>id</strong> es la clave primaria y SQLite generará
          automáticamente un valor diferente para cada cliente.
        </p>
      </section>

      {/* Tabla ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Registros
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-3">id</th>
                <th className="border p-3">nombre</th>
                <th className="border p-3">apellido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">1</td>
                <td className="border p-3">Juan</td>
                <td className="border p-3">Pérez</td>
              </tr>
              <tr>
                <td className="border p-3">2</td>
                <td className="border p-3">Ana</td>
                <td className="border p-3">Gómez</td>
              </tr>
              <tr>
                <td className="border p-3">3</td>
                <td className="border p-3">Carlos</td>
                <td className="border p-3">López</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FK */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Foreign Key?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una clave foránea (Foreign Key o FK) es un campo que referencia la
          clave primaria de otra tabla.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Su función es establecer relaciones entre entidades y garantizar la
          integridad de los datos.
        </p>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Foreign Key
        </h2>

        <CodeBlock
          code={`CREATE TABLE ventas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fecha TEXT,
    total REAL,

    cliente_id INTEGER,

    FOREIGN KEY(cliente_id)
        REFERENCES clientes(id)
);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          El campo <strong>cliente_id</strong> guarda el identificador del
          cliente que realizó la venta.
        </p>
      </section>

      {/* Relación visual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación entre Tablas
        </h2>

        <div className="border rounded-xl p-6 font-mono text-sm overflow-x-auto">

{`CLIENTES
---------
id (PK)
nombre
apellido

      |
      |
      | cliente_id (FK)
      |
      V

VENTAS
---------
id (PK)
fecha
total
cliente_id (FK)`}
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Gracias a esta relación podemos saber qué cliente realizó cada venta.
        </p>
      </section>

      {/* Integridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Integridad Referencial
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La integridad referencial garantiza que una clave foránea siempre
          apunte a un registro existente.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p>
            No debería existir una venta con un cliente_id = 99 si el cliente
            99 no existe en la tabla clientes.
          </p>
        </div>
      </section>

      {/* Cardinalidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación Uno a Muchos (1:N)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es la relación más común en bases de datos.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Un cliente puede tener muchas ventas.</li>
          <li>Una venta pertenece a un único cliente.</li>
        </ul>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          Cliente (1) → Ventas (N)
        </div>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Claves en Nuestro Sistema de Ventas
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-3">Tabla</th>
                <th className="border p-3">Primary Key</th>
                <th className="border p-3">Foreign Keys</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">clientes</td>
                <td className="border p-3">id</td>
                <td className="border p-3">-</td>
              </tr>
              <tr>
                <td className="border p-3">productos</td>
                <td className="border p-3">id</td>
                <td className="border p-3">-</td>
              </tr>
              <tr>
                <td className="border p-3">ventas</td>
                <td className="border p-3">id</td>
                <td className="border p-3">cliente_id</td>
              </tr>
              <tr>
                <td className="border p-3">detalle_venta</td>
                <td className="border p-3">id</td>
                <td className="border p-3">
                  venta_id, producto_id
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Utilizar un campo id como clave primaria.</li>
          <li>Evitar modificar claves primarias existentes.</li>
          <li>Nombrar las claves foráneas de forma descriptiva.</li>
          <li>Definir correctamente las relaciones.</li>
          <li>Mantener la integridad referencial.</li>
          <li>Documentar el modelo de datos mediante un DER.</li>
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
            Explicar con tus palabras qué es una Primary Key.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Explicar con tus palabras qué es una Foreign Key.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Identificar todas las claves primarias del sistema de ventas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Identificar todas las claves foráneas del sistema de ventas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Dibujar el DER indicando claramente las PK y FK de cada tabla.
          </div>

        </div>
      </section>

    </div>
  );
}