export default function IntegridadReferencialPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Integridad referencial
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La integridad referencial es un conjunto de reglas que permite
          mantener la coherencia entre las tablas relacionadas de una base de
          datos. Su objetivo es evitar que existan registros relacionados con
          datos inexistentes y garantizar que las relaciones entre las tablas
          se mantengan correctamente.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la integridad referencial?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Cuando dos tablas están relacionadas, un campo de una tabla puede
          hacer referencia a un registro existente en otra tabla. La
          integridad referencial permite controlar que esa referencia sea
          válida.
        </p>

        <p className="leading-relaxed max-w-3xl">
          Por ejemplo, si una tabla de ventas contiene el campo
          <strong> IdCliente</strong>, ese valor debería corresponder a un
          cliente que exista en la tabla Clientes.
        </p>
      </section>

      {/* Clave principal y foránea */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Clave principal y clave relacionada
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para comprender la integridad referencial es necesario relacionar
          este concepto con las claves utilizadas anteriormente.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Clave principal
            </h3>

            <p className="leading-relaxed">
              Identifica de manera única cada registro de una tabla. Por
              ejemplo, <strong>IdCliente</strong> puede identificar de forma
              única a cada cliente.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Clave relacionada
            </h3>

            <p className="leading-relaxed">
              Es el campo utilizado en otra tabla para hacer referencia al
              registro correspondiente. Por ejemplo, <strong>IdCliente</strong>
              en Ventas puede hacer referencia al cliente registrado.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de integridad referencial
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Supongamos que una oficina posee las siguientes tablas:
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Tabla Clientes
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="border border-blue-200 p-3">
                      IdCliente
                    </th>
                    <th className="border border-blue-200 p-3">
                      Nombre
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-3">1</td>
                    <td className="border border-blue-200 p-3">
                      Juan Pérez
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-blue-200 p-3">2</td>
                    <td className="border border-blue-200 p-3">
                      Ana Gómez
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Tabla Ventas
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="border border-blue-200 p-3">
                      IdVenta
                    </th>
                    <th className="border border-blue-200 p-3">
                      IdCliente
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-3">101</td>
                    <td className="border border-blue-200 p-3">1</td>
                  </tr>

                  <tr>
                    <td className="border border-blue-200 p-3">102</td>
                    <td className="border border-blue-200 p-3">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          En este caso, los valores de <strong>IdCliente</strong> utilizados
          en Ventas existen previamente en la tabla Clientes. Por lo tanto,
          las referencias son válidas.
        </p>
      </section>

      {/* Problemas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué problemas evita?
        </h2>

        <ul className="list-disc pl-6 space-y-3 max-w-3xl">
          <li>
            Evita registrar ventas asociadas a clientes que no existen.
          </li>

          <li>
            Evita que queden registros relacionados con datos inexistentes.
          </li>

          <li>
            Ayuda a mantener consistencia entre las tablas.
          </li>

          <li>
            Facilita el mantenimiento de las relaciones de la base de datos.
          </li>

          <li>
            Reduce errores provocados por referencias incorrectas.
          </li>
        </ul>
      </section>

      {/* Reglas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reglas de integridad referencial
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Al establecer una relación entre dos tablas, deben tenerse en cuenta
          algunas reglas básicas:
        </p>

        <div className="space-y-6 max-w-4xl">

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Los registros relacionados deben existir
            </h3>

            <p className="leading-relaxed">
              Un valor utilizado como referencia debe corresponder a un
              registro existente en la tabla relacionada.
            </p>
          </div>

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Evitar referencias inválidas
            </h3>

            <p className="leading-relaxed">
              No debería ser posible registrar una referencia hacia un
              identificador que no exista en la tabla principal.
            </p>
          </div>

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Mantener las relaciones
            </h3>

            <p className="leading-relaxed">
              Al modificar o eliminar registros relacionados, se debe
              considerar el efecto que esa acción puede producir sobre las
              demás tablas.
            </p>
          </div>

        </div>
      </section>

      {/* Access */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Integridad referencial en Microsoft Access
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Microsoft Access permite establecer relaciones entre tablas y
          configurar la integridad referencial desde la ventana de
          relaciones.
        </p>

        <ol className="list-decimal pl-6 space-y-3 max-w-3xl">
          <li>Abrir la base de datos.</li>
          <li>Ingresar a la herramienta de relaciones.</li>
          <li>Agregar las tablas que se desean relacionar.</li>
          <li>Seleccionar los campos correspondientes.</li>
          <li>Crear la relación entre las tablas.</li>
          <li>Activar la opción de integridad referencial.</li>
          <li>Guardar la relación.</li>
        </ol>

        <p className="leading-relaxed max-w-3xl mt-6">
          Una vez establecida la integridad referencial, Access puede controlar
          determinadas operaciones para evitar que se generen referencias
          inválidas.
        </p>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-8 max-w-4xl">

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar referencias
            </h3>

            <p className="leading-relaxed">
              Observar diferentes tablas relacionadas e identificar qué campo
              funciona como clave principal y qué campo permite establecer la
              referencia en la otra tabla.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Detectar referencias inválidas
            </h3>

            <p className="leading-relaxed">
              Analizar una tabla de ventas y determinar cuáles registros
              contienen identificadores de clientes que no existen en la
              tabla Clientes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Analizar relaciones
            </h3>

            <p className="leading-relaxed">
              Revisar las relaciones diseñadas anteriormente y comprobar que
              los campos utilizados permitan establecer referencias válidas
              entre las tablas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Aplicar integridad referencial
            </h3>

            <p className="leading-relaxed">
              Crear una relación entre las tablas Clientes y Ventas en
              Microsoft Access y activar la opción de integridad referencial.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Comprobar las restricciones
            </h3>

            <p className="leading-relaxed">
              Intentar registrar una venta utilizando un cliente inexistente y
              analizar qué sucede al tener activada la integridad referencial.
            </p>
          </div>

        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Validar la integridad de la base de datos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Como cierre del módulo, tomar la base de datos desarrollada durante
          las actividades anteriores y realizar una revisión completa de su
          estructura.
        </p>

        <ol className="list-decimal pl-6 space-y-3 max-w-3xl">
          <li>
            Revisar las tablas creadas durante las actividades anteriores.
          </li>

          <li>
            Comprobar las claves principales de cada tabla.
          </li>

          <li>
            Revisar las relaciones establecidas entre las tablas.
          </li>

          <li>
            Verificar que los campos relacionados sean los correctos.
          </li>

          <li>
            Aplicar criterios de normalización.
          </li>

          <li>
            Activar la integridad referencial en las relaciones correspondientes.
          </li>

          <li>
            Realizar pruebas de carga, modificación y eliminación de registros.
          </li>

          <li>
            Registrar los problemas encontrados y las soluciones aplicadas.
          </li>
        </ol>

        <div className="mt-6 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Presentación de la actividad
          </h3>

          <p className="leading-relaxed">
            Una base de datos relacional funcional, con tablas organizadas,
            claves correctamente definidas, relaciones establecidas e
            integridad referencial aplicada.
          </p>
        </div>
      </section>

      {/* Cierre del módulo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cierre del módulo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al finalizar este módulo, el estudiante cuenta con los conocimientos
          fundamentales para comprender y organizar una base de datos
          relacional: tablas, campos, propiedades, claves, relaciones,
          normalización e integridad referencial. Estos conocimientos serán
          utilizados en los siguientes módulos para analizar, diseñar y
          desarrollar soluciones de bases de datos para una oficina.
        </p>
      </section>

    </div>
  );
}