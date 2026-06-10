export default function DiagramaEntidadRelacionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diagramas Entidad-Relación (DER)
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Antes de crear tablas en una base de datos es importante diseñar cómo
          se relacionará la información. Para ello utilizamos los Diagramas
          Entidad-Relación (DER), una herramienta gráfica que permite modelar
          los datos de un sistema antes de comenzar a programar.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este módulo utilizaremos diagramas entidad-relación para diseñar
          la base de datos del sistema de ventas antes de crear las tablas en
          SQLite.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Diagrama Entidad-Relación?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un DER es una representación visual de las entidades que forman parte
          de un sistema, los datos que almacenan y las relaciones existentes
          entre ellas.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p>
            El objetivo principal es planificar la estructura de la base de
            datos antes de crear las tablas.
          </p>
        </div>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes de un DER
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Entidad
            </h3>
            <p>
              Representa un objeto o concepto del sistema sobre el cual se
              almacenará información.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Atributo
            </h3>
            <p>
              Son las características o datos que posee una entidad.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Relación
            </h3>
            <p>
              Es la asociación existente entre dos entidades.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Entidad
        </h2>

        <div className="border rounded-xl p-6 max-w-3xl">
          <h3 className="font-semibold mb-4">
            Entidad: Producto
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>id</li>
            <li>nombre</li>
            <li>precio</li>
            <li>stock</li>
          </ul>
        </div>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entidades del Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para nuestro sistema identificamos las siguientes entidades:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Cliente</li>
          <li>Producto</li>
          <li>Venta</li>
          <li>DetalleVenta</li>
        </ul>
      </section>

      {/* Atributos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Atributos de las Entidades
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-3">Entidad</th>
                <th className="border p-3">Atributos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Cliente</td>
                <td className="border p-3">
                  id, nombre, apellido, telefono, email
                </td>
              </tr>
              <tr>
                <td className="border p-3">Producto</td>
                <td className="border p-3">
                  id, nombre, precio, stock
                </td>
              </tr>
              <tr>
                <td className="border p-3">Venta</td>
                <td className="border p-3">
                  id, fecha, total
                </td>
              </tr>
              <tr>
                <td className="border p-3">DetalleVenta</td>
                <td className="border p-3">
                  id, cantidad, precioUnitario
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Relaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relaciones entre Entidades
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una relación indica cómo interactúan dos entidades dentro del sistema.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Un Cliente puede realizar muchas Ventas.</li>
            <li>Una Venta pertenece a un único Cliente.</li>
            <li>Una Venta posee muchos Detalles de Venta.</li>
            <li>Un Producto puede aparecer en muchos Detalles de Venta.</li>
          </ul>
        </div>
      </section>

      {/* Cardinalidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cardinalidades
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La cardinalidad indica cuántos elementos de una entidad pueden
          relacionarse con otra.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-3">Tipo</th>
                <th className="border p-3">Descripción</th>
                <th className="border p-3">Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">1 : 1</td>
                <td className="border p-3">
                  Uno a uno
                </td>
                <td className="border p-3">
                  Persona - DNI
                </td>
              </tr>
              <tr>
                <td className="border p-3">1 : N</td>
                <td className="border p-3">
                  Uno a muchos
                </td>
                <td className="border p-3">
                  Cliente - Ventas
                </td>
              </tr>
              <tr>
                <td className="border p-3">N : M</td>
                <td className="border p-3">
                  Muchos a muchos
                </td>
                <td className="border p-3">
                  Productos - Ventas
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DER sistema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          DER del Sistema de Ventas
        </h2>

        <div className="border rounded-xl p-6 max-w-5xl font-mono text-sm overflow-x-auto">
{`CLIENTE
--------
id
nombre
apellido
telefono
email
     |
     | 1:N
     |
VENTA
--------
id
fecha
total
cliente_id
     |
     | 1:N
     |
DETALLE_VENTA
--------------
id
cantidad
precio_unitario
venta_id
producto_id
     |
     | N:1
     |
PRODUCTO
----------
id
nombre
precio
stock`}
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Este diagrama servirá como base para crear las tablas y las claves
          foráneas dentro de SQLite.
        </p>
      </section>

      {/* Conversión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Del DER a las Tablas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez finalizado el diagrama, cada entidad se convierte en una tabla
          de la base de datos y cada atributo se transforma en una columna.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Entidad → Tabla</li>
            <li>Atributo → Columna</li>
            <li>Relación → Clave Foránea</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas al Diseñar un DER
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Identificar correctamente las entidades.</li>
          <li>Evitar atributos duplicados.</li>
          <li>Definir claramente las relaciones.</li>
          <li>Asignar claves primarias a todas las entidades.</li>
          <li>Utilizar nombres descriptivos.</li>
          <li>Validar el modelo antes de crear las tablas.</li>
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
            Explicar qué es una entidad y dar tres ejemplos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Identificar los atributos de la entidad Producto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Dibujar el DER completo del sistema de ventas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Identificar todas las relaciones y cardinalidades.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Convertir el DER diseñado en tablas SQLite.
          </div>

        </div>
      </section>

    </div>
  );
}