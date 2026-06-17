import CodeBlock from "@/app/components/CodeBlock";

export default function SQLiteTablasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          SQLite: Creación de Bases de Datos y Tablas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          SQLite es un motor de base de datos relacional muy utilizado en
          aplicaciones de escritorio, dispositivos móviles y proyectos
          educativos. Una de sus principales ventajas es que no requiere un
          servidor instalado, ya que toda la información se almacena en un único
          archivo.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Durante este curso utilizaremos SQLite para almacenar la información
          del sistema de ventas desarrollado en JavaFX.
        </p>
      </section>

      {/* Qué es SQLite */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es SQLite?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          SQLite es un sistema gestor de bases de datos relacional ligero,
          rápido y gratuito. A diferencia de MySQL o PostgreSQL, no necesita
          una instalación compleja ni un servidor ejecutándose.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p>
            Toda la base de datos se guarda dentro de un archivo con extensión
            <strong> .db </strong> o <strong>.sqlite</strong>.
          </p>
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de SQLite
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No requiere servidor.</li>
          <li>Es muy liviano.</li>
          <li>Fácil de distribuir junto a la aplicación.</li>
          <li>Ideal para proyectos JavaFX.</li>
          <li>Compatible con SQL estándar.</li>
          <li>Muy utilizado en Android.</li>
        </ul>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas Recomendadas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para administrar bases de datos SQLite de forma visual se recomienda
          utilizar:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>DB Browser for SQLite</li>
          <li>DBeaver</li>
          <li>IntelliJ Database Tools</li>
        </ul>
      </section>

      {/* Modelo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Base de Datos del Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Nuestro sistema trabajará inicialmente con cuatro tablas:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>clientes</li>
          <li>productos</li>
          <li>ventas</li>
          <li>detalle_venta</li>
        </ul>
      </section>

      {/* Tabla clientes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Creación de la Tabla Clientes
        </h2>

        <CodeBlock
          code={`CREATE TABLE clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    telefono TEXT,
    email TEXT
);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Esta tabla almacenará la información de cada cliente registrado.
        </p>
      </section>

      {/* Tabla productos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Creación de la Tabla Productos
        </h2>

        <CodeBlock
          code={`CREATE TABLE productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER NOT NULL
);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Aquí se almacenarán todos los productos disponibles para la venta.
        </p>
      </section>

      {/* Tabla ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Creación de la Tabla Ventas
        </h2>

        <CodeBlock
          code={`CREATE TABLE ventas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fecha TEXT NOT NULL,
    cliente_id INTEGER NOT NULL,
    total REAL NOT NULL,

    FOREIGN KEY(cliente_id)
        REFERENCES clientes(id)
);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Cada registro representa una venta realizada por un cliente.
        </p>
      </section>

      {/* Tabla detalle */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Creación de la Tabla Detalle de Venta
        </h2>

        <CodeBlock
          code={`CREATE TABLE detalle_venta (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    venta_id INTEGER NOT NULL,
    producto_id INTEGER NOT NULL,
    cantidad INTEGER NOT NULL,
    precio_unitario REAL NOT NULL,

    FOREIGN KEY(venta_id)
        REFERENCES ventas(id),

    FOREIGN KEY(producto_id)
        REFERENCES productos(id)
);`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Esta tabla almacena los productos incluidos en cada venta.
        </p>
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Datos Utilizados
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-3">Tipo</th>
                <th className="border p-3">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">INTEGER</td>
                <td className="border p-3">Números enteros</td>
              </tr>
              <tr>
                <td className="border p-3">REAL</td>
                <td className="border p-3">Números decimales</td>
              </tr>
              <tr>
                <td className="border p-3">TEXT</td>
                <td className="border p-3">Texto</td>
              </tr>
              <tr>
                <td className="border p-3">NULL</td>
                <td className="border p-3">Valor vacío</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PK */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Clave Primaria (PRIMARY KEY)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La clave primaria identifica de forma única cada registro de una
          tabla.
        </p>

        <CodeBlock
          code={`id INTEGER PRIMARY KEY AUTOINCREMENT`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          La opción AUTOINCREMENT permite que SQLite genere automáticamente el
          identificador.
        </p>
      </section>

      {/* FK */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Clave Foránea (FOREIGN KEY)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una clave foránea crea una relación entre dos tablas.
        </p>

        <CodeBlock
          code={`FOREIGN KEY(cliente_id)
REFERENCES clientes(id)`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Esto significa que una venta debe estar asociada a un cliente
          existente.
        </p>
      </section>

      {/* Orden */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Orden de Creación de las Tablas
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>clientes</li>
          <li>productos</li>
          <li>ventas</li>
          <li>detalle_venta</li>
        </ol>

        <p className="leading-relaxed max-w-3xl mt-4">
          Debemos crear primero las tablas que serán referenciadas por otras.
        </p>
      </section>

      {/* Resultado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resultado Esperado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al finalizar esta unidad, los estudiantes serán capaces de crear una
          base de datos SQLite, diseñar tablas relacionales y preparar la
          estructura necesaria para almacenar la información del sistema de
          ventas.
        </p>
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
            Instalar DB Browser for SQLite y crear una nueva base de datos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear la tabla clientes utilizando SQL.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Crear la tabla productos con sus campos correspondientes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Crear las tablas ventas y detalle_venta utilizando claves foráneas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Dibujar el diagrama entidad-relación de las cuatro tablas creadas.
          </div>

        </div>
      </section>

    </div>
  );
}