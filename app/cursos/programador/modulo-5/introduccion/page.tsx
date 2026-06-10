export default function IntroduccionBasesDatosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a las Bases de Datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las bases de datos son uno de los componentes más importantes de los
          sistemas informáticos modernos. Permiten almacenar grandes cantidades
          de información de forma organizada, segura y permanente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En el sistema de ventas desarrollado durante el curso, utilizaremos
          una base de datos para guardar clientes, productos y ventas, evitando
          que la información se pierda al cerrar la aplicación.
        </p>
      </section>

      {/* Problema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué necesitamos una Base de Datos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Hasta ahora nuestros programas almacenaban la información únicamente
          en memoria. Esto significa que cuando la aplicación se cerraba, todos
          los datos desaparecían.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6 bg-gray-50">
          <p>
            Ejemplo: Si registramos 50 productos en el sistema de ventas y
            cerramos la aplicación, al volver a abrirla los productos ya no
            existirán.
          </p>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Una base de datos resuelve este problema almacenando la información de
          forma permanente en el disco.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Base de Datos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una base de datos es un conjunto organizado de información que puede
          ser almacenada, consultada, modificada y eliminada de manera eficiente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Su función principal es permitir que los sistemas gestionen grandes
          volúmenes de datos de forma rápida y segura.
        </p>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Uso en la Vida Real
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Redes sociales almacenan usuarios y publicaciones.</li>
          <li>Tiendas online almacenan productos y pedidos.</li>
          <li>Bancos almacenan cuentas y movimientos.</li>
          <li>Hospitales almacenan historias clínicas.</li>
          <li>Escuelas almacenan alumnos y calificaciones.</li>
          <li>Sistemas de ventas almacenan clientes, productos y ventas.</li>
        </ul>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes Básicos de una Base de Datos
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Tabla
            </h3>
            <p>
              Estructura que almacena datos relacionados.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Registro
            </h3>
            <p>
              Cada fila de una tabla.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Campo
            </h3>
            <p>
              Cada columna de una tabla.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Relación
            </h3>
            <p>
              Conexión entre diferentes tablas.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Tabla de Productos
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-3">ID</th>
                <th className="border p-3">Nombre</th>
                <th className="border p-3">Precio</th>
                <th className="border p-3">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">1</td>
                <td className="border p-3">Mouse</td>
                <td className="border p-3">$15.000</td>
                <td className="border p-3">20</td>
              </tr>
              <tr>
                <td className="border p-3">2</td>
                <td className="border p-3">Teclado</td>
                <td className="border p-3">$25.000</td>
                <td className="border p-3">10</td>
              </tr>
              <tr>
                <td className="border p-3">3</td>
                <td className="border p-3">Monitor</td>
                <td className="border p-3">$180.000</td>
                <td className="border p-3">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SGBD */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Sistema Gestor de Bases de Datos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un Sistema Gestor de Bases de Datos (SGBD o DBMS) es un software que
          permite crear, administrar y consultar bases de datos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Nosotros trabajaremos principalmente con MySQL.
        </p>
      </section>

      {/* Motores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Motores de Bases de Datos Populares
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>MySQL</li>
          <li>MariaDB</li>
          <li>PostgreSQL</li>
          <li>Oracle Database</li>
          <li>Microsoft SQL Server</li>
          <li>SQLite</li>
        </ul>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Utilizar Bases de Datos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Almacenamiento permanente.</li>
          <li>Acceso rápido a la información.</li>
          <li>Mayor seguridad de los datos.</li>
          <li>Evita duplicación innecesaria.</li>
          <li>Facilita búsquedas y reportes.</li>
          <li>Permite trabajar con grandes cantidades de información.</li>
        </ul>
      </section>

      {/* Relación con el módulo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación al Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En las próximas clases diseñaremos una base de datos para almacenar
          toda la información del sistema de ventas. Cada cliente, producto y
          venta quedará registrado de manera permanente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Además aprenderemos a conectar JavaFX con MySQL para que la aplicación
          pueda guardar y recuperar información automáticamente.
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
            Explicar con tus palabras qué es una base de datos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Identificar tres sistemas que utilicen bases de datos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Diseñar una tabla para almacenar productos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Investigar las diferencias entre MySQL y PostgreSQL.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Identificar qué información del sistema de ventas debería almacenarse en una base de datos.
          </div>

        </div>
      </section>

    </div>
  );
}