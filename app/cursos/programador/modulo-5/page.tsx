export default function Modulo5Page() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Módulo 5: Bases de Datos y Persistencia de Información
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo se incorporará una de las piezas fundamentales de
          cualquier sistema profesional: la base de datos. Hasta ahora el
          sistema de ventas almacenaba la información únicamente en memoria,
          por lo que los datos se perdían al cerrar la aplicación.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A partir de este módulo aprenderemos a diseñar bases de datos,
          relacionar entidades, almacenar información de manera permanente y
          conectar nuestras aplicaciones JavaFX con un motor de base de datos.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Comprender qué es una base de datos.</li>
          <li>Diseñar modelos relacionales.</li>
          <li>Crear tablas y relaciones.</li>
          <li>Utilizar claves primarias y foráneas.</li>
          <li>Aprender el lenguaje SQL.</li>
          <li>Realizar operaciones CRUD.</li>
          <li>Conectar Java con una base de datos.</li>
          <li>Persistir la información del sistema de ventas.</li>
        </ul>
      </section>

      {/* Sistema de referencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sistema de referencia del módulo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Durante todo el módulo se continuará trabajando sobre el sistema de
          ventas desarrollado en los módulos anteriores. El objetivo será
          reemplazar el almacenamiento temporal por una base de datos real.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Entidades principales
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Cliente</li>
            <li>Producto</li>
            <li>Venta</li>
            <li>DetalleVenta</li>
          </ul>
        </div>
      </section>

      {/* Qué es BD */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Base de Datos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una base de datos es un conjunto organizado de información que permite
          almacenar, consultar, modificar y eliminar datos de manera eficiente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Gracias a las bases de datos podemos guardar información de clientes,
          productos y ventas incluso después de cerrar la aplicación.
        </p>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del módulo
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Introducción a las Bases de Datos
            </h3>
            <p>
              Conceptos fundamentales, motores de bases de datos y sistemas gestores.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Modelado de Datos
            </h3>
            <p>
              Entidades, atributos, relaciones y diagramas entidad-relación.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Diseño Relacional
            </h3>
            <p>
              Tablas, claves primarias, claves foráneas y normalización básica.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              SQL Básico
            </h3>
            <p>
              Consultas, inserciones, modificaciones y eliminación de registros.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Operaciones CRUD
            </h3>
            <p>
              Crear, Leer, Actualizar y Eliminar información.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Conexión Java y Base de Datos
            </h3>
            <p>
              Uso de JDBC para conectar aplicaciones Java con bases de datos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Persistencia del Sistema de Ventas
            </h3>
            <p>
              Almacenamiento permanente de clientes, productos y ventas.
            </p>
          </div>

        </div>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas que utilizaremos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>MySQL.</li>
          <li>MySQL Workbench.</li>
          <li>IntelliJ IDEA.</li>
          <li>Java JDBC.</li>
          <li>JavaFX.</li>
        </ul>
      </section>

      {/* Aplicación práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación práctica en el sistema de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al finalizar el módulo el sistema permitirá registrar clientes,
          productos y ventas en una base de datos real. Los usuarios podrán
          cerrar la aplicación y recuperar toda la información almacenada
          posteriormente.
        </p>
      </section>

      {/* Metodología */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Metodología de trabajo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cada unidad combinará conceptos teóricos con actividades prácticas.
          Los estudiantes diseñarán la base de datos, crearán las tablas,
          escribirán consultas SQL y conectarán el sistema JavaFX para trabajar
          con datos reales.
        </p>
      </section>

      {/* Resultado esperado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resultado esperado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al finalizar el módulo los estudiantes serán capaces de diseñar bases
          de datos relacionales, crear consultas SQL, implementar operaciones
          CRUD y conectar aplicaciones JavaFX con una base de datos para
          almacenar información de forma permanente.
        </p>
      </section>

    </div>
  );
}