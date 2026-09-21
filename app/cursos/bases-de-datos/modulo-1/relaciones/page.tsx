export default function RelacionesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Relaciones entre Tablas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las relaciones permiten vincular información almacenada en
          diferentes tablas de una base de datos. De esta manera, es posible
          organizar la información en varias tablas y conectarlas mediante
          campos relacionados.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Las relaciones son una característica fundamental de las bases de
          datos relacionales, ya que permiten trabajar con información
          relacionada sin necesidad de almacenar todos los datos en una única
          tabla.
        </p>
      </section>

      {/* ¿Por qué relacionar tablas? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué relacionar tablas?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Imaginemos una oficina que registra clientes y ventas. Una misma
          persona puede realizar varias compras. Si todos los datos del
          cliente se repitieran en cada venta, la información ocuparía más
          espacio y sería más difícil de mantener actualizada.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una alternativa es almacenar los datos del cliente en una tabla y
          las ventas en otra. Luego, ambas tablas pueden relacionarse
          mediante un identificador común.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-2">
            Ejemplo
          </p>

          <p className="leading-relaxed">
            La tabla <strong>Clientes</strong> almacena los datos personales
            del cliente, mientras que la tabla <strong>Ventas</strong>
            almacena las operaciones realizadas. El campo
            <strong> IdCliente</strong> permite relacionar ambas tablas.
          </p>
        </div>
      </section>

      {/* Elementos de una relación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de una relación
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para establecer una relación entre dos tablas es necesario que
          exista un campo que permita vincular la información.
        </p>

        <div className="overflow-x-auto max-w-3xl">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Elemento
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Función
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  Tabla principal
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Contiene la información que será identificada.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  Clave primaria
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Identifica de manera única cada registro.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  Tabla relacionada
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Contiene información relacionada con la tabla principal.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  Clave secundaria
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Permite hacer referencia a un registro de otra tabla.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ejemplo Clientes Ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Clientes y Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Observemos dos tablas que forman parte de una base de datos de una
          oficina.
        </p>

        {/* Clientes */}
        <div className="overflow-x-auto max-w-3xl mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Tabla Clientes
          </h3>

          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 px-4 py-3 text-left">
                  IdCliente
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Nombre
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Apellido
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  1
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Juan
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Pérez
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  2
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  María
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Gómez
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Ventas */}
        <div className="overflow-x-auto max-w-3xl">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Tabla Ventas
          </h3>

          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 px-4 py-3 text-left">
                  IdVenta
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  IdCliente
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  101
                </td>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  1
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  $25.000
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  102
                </td>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  1
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  $18.500
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  103
                </td>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  2
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  $32.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          En este ejemplo, el cliente con <strong>IdCliente = 1</strong>
          tiene dos ventas asociadas. Esto es posible porque el mismo
          identificador puede aparecer varias veces en la tabla Ventas.
        </p>
      </section>

      {/* Tipos de relaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de relaciones
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Las tablas pueden relacionarse de diferentes maneras dependiendo
          de la cantidad de registros que puedan estar asociados entre sí.
        </p>

        {/* Uno a uno */}
        <div className="border border-blue-200 rounded-xl p-6 max-w-3xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Relación uno a uno (1:1)
          </h3>

          <p className="leading-relaxed">
            En una relación uno a uno, un registro de una tabla se relaciona
            con un único registro de otra tabla y viceversa.
          </p>

          <p className="leading-relaxed mt-3">
            Por ejemplo, un registro de empleado podría estar relacionado
            con un único registro de información adicional del empleado.
          </p>
        </div>

        {/* Uno a muchos */}
        <div className="border border-blue-200 rounded-xl p-6 max-w-3xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Relación uno a muchos (1:N)
          </h3>

          <p className="leading-relaxed">
            En una relación uno a muchos, un registro de una tabla puede
            estar relacionado con varios registros de otra tabla.
          </p>

          <p className="leading-relaxed mt-3">
            Por ejemplo, un cliente puede realizar muchas ventas, pero cada
            venta pertenece a un cliente determinado.
          </p>
        </div>

        {/* Muchos a muchos */}
        <div className="border border-blue-200 rounded-xl p-6 max-w-3xl">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Relación muchos a muchos (N:N)
          </h3>

          <p className="leading-relaxed">
            En una relación muchos a muchos, varios registros de una tabla
            pueden estar relacionados con varios registros de otra tabla.
          </p>

          <p className="leading-relaxed mt-3">
            Por ejemplo, un curso puede tener varios estudiantes y un
            estudiante puede participar en varios cursos.
          </p>
        </div>
      </section>

      {/* Relaciones en Access */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relaciones en Microsoft Access
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Microsoft Access permite establecer relaciones entre las tablas de
          una base de datos mediante la herramienta de relaciones.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Para crear una relación es necesario identificar el campo que
          permite vincular ambas tablas y establecer correctamente las claves
          correspondientes.
        </p>

        <ol className="list-decimal list-inside space-y-3 mt-6 max-w-3xl">
          <li>Abrir la base de datos.</li>
          <li>Identificar las tablas que deben relacionarse.</li>
          <li>Verificar las claves primarias.</li>
          <li>Identificar los campos que funcionarán como claves secundarias.</li>
          <li>Establecer la relación entre los campos.</li>
          <li>Guardar la configuración.</li>
        </ol>
      </section>

      {/* Integridad de la relación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de las relaciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una correcta relación entre las tablas permite mantener organizada
          la información y facilita su consulta. También permite que los
          diferentes elementos de una base de datos puedan trabajar de forma
          conjunta.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6 max-w-3xl">
          <li>Evitar almacenar información repetida innecesariamente.</li>
          <li>Relacionar información almacenada en diferentes tablas.</li>
          <li>Facilitar las consultas de información.</li>
          <li>Organizar mejor la estructura de la base de datos.</li>
          <li>Preparar la base de datos para trabajar con consultas e informes.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-8 max-w-3xl">

          {/* Actividad 1 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar relaciones
            </h3>

            <p className="leading-relaxed mb-4">
              Analizá las siguientes situaciones e indicá qué tablas podrían
              necesitar una relación.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Clientes y Ventas.</li>
              <li>Empleados y Departamentos.</li>
              <li>Productos y Categorías.</li>
              <li>Estudiantes y Cursos.</li>
            </ul>

            <p className="leading-relaxed mt-5">
              Para cada caso, explicá qué información debería vincularse.
            </p>
          </div>

          {/* Actividad 2 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Determinar el tipo de relación
            </h3>

            <p className="leading-relaxed mb-4">
              Determiná si cada situación corresponde a una relación 1:1,
              1:N o N:N.
            </p>

            <ul className="list-disc list-inside space-y-3">
              <li>
                Un cliente puede realizar muchas ventas.
              </li>
              <li>
                Un empleado tiene un único legajo.
              </li>
              <li>
                Un estudiante puede cursar varias materias y una materia
                puede tener muchos estudiantes.
              </li>
              <li>
                Un departamento tiene muchos empleados.
              </li>
            </ul>

            <p className="leading-relaxed mt-5">
              Justificá cada respuesta.
            </p>
          </div>

          {/* Actividad 3 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Encontrar los campos relacionados
            </h3>

            <p className="leading-relaxed mb-4">
              Observá las siguientes tablas:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      Clientes
                    </th>
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      Ventas
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-blue-200 px-4 py-3">
                      IdCliente
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      IdVenta
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-blue-200 px-4 py-3">
                      Nombre
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      IdCliente
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-blue-200 px-4 py-3">
                      Apellido
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      Total
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc list-inside space-y-2">
              <li>¿Qué campos deberían relacionarse?</li>
              <li>¿Cuál es la clave primaria?</li>
              <li>¿Cuál funciona como clave secundaria?</li>
              <li>¿Qué tipo de relación existe?</li>
            </ul>
          </div>

          {/* Actividad 4 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Diseñar relaciones
            </h3>

            <p className="leading-relaxed mb-4">
              Diseñá las relaciones para una base de datos de una librería
              que contiene las siguientes tablas:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Clientes.</li>
              <li>Productos.</li>
              <li>Ventas.</li>
              <li>DetalleVentas.</li>
            </ul>

            <p className="leading-relaxed mt-5">
              Determiná:
            </p>

            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Qué tablas deberían relacionarse.</li>
              <li>Qué campos utilizarías.</li>
              <li>Qué tipo de relación existiría.</li>
              <li>Qué claves serían necesarias.</li>
            </ul>
          </div>

          {/* Actividad 5 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Crear relaciones en Access
            </h3>

            <p className="leading-relaxed mb-4">
              Utilizando la base de datos desarrollada durante las
              actividades anteriores, establecé las relaciones entre las
              tablas utilizando Microsoft Access.
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>Abrí la base de datos.</li>
              <li>Verificá las claves primarias.</li>
              <li>Identificá las claves secundarias.</li>
              <li>Abrí la herramienta Relaciones.</li>
              <li>Agregá las tablas necesarias.</li>
              <li>Relacioná los campos correspondientes.</li>
              <li>Guardá las relaciones.</li>
            </ol>

            <p className="leading-relaxed mt-5">
              Comprobá que la estructura resultante represente correctamente
              la organización de la información.
            </p>
          </div>

        </div>
      </section>

      {/* Actividad Integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Integradora
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-800 rounded-r-xl p-6 max-w-3xl">

          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Construir el modelo relacional de una organización
          </h3>

          <p className="leading-relaxed mb-4">
            Retomá la base de datos desarrollada en las actividades
            anteriores. La organización necesita que las diferentes tablas
            puedan trabajar conjuntamente para facilitar la gestión de la
            información.
          </p>

          <p className="leading-relaxed mb-5">
            Tu tarea será analizar las tablas existentes y establecer las
            relaciones necesarias entre ellas.
          </p>

          <h4 className="font-bold text-blue-900 mb-3">
            Consignas
          </h4>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Recuperá las tablas diseñadas en las actividades anteriores.
            </li>

            <li>
              Identificá la clave primaria de cada tabla.
            </li>

            <li>
              Identificá las claves secundarias necesarias.
            </li>

            <li>
              Determiná qué tablas deben relacionarse.
            </li>

            <li>
              Indicá el tipo de relación existente entre cada par de tablas.
            </li>

            <li>
              Dibujá un esquema que represente las relaciones.
            </li>

            <li>
              Implementá las relaciones utilizando Microsoft Access.
            </li>

            <li>
              Verificá que las relaciones representen correctamente la
              información de la organización.
            </li>
          </ol>

          <div className="bg-white border border-blue-200 rounded-xl p-5 mt-6">
            <p className="font-semibold text-blue-900 mb-2">
              Presentación final
            </p>

            <p className="leading-relaxed">
              Deberás presentar la base de datos con sus tablas relacionadas
              y un esquema que permita visualizar claramente cómo se conecta
              la información.
            </p>

            <p className="leading-relaxed mt-3">
              Esta estructura será utilizada posteriormente para trabajar
              con los conceptos de <strong>normalización</strong> e
              <strong> integridad referencial</strong>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}