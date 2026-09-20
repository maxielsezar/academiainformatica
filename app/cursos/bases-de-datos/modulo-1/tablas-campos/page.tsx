export default function TablasCamposPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Tablas, Campos y Propiedades
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las bases de datos relacionales organizan la información mediante
          tablas. Cada tabla permite almacenar datos relacionados con un
          determinado elemento, mientras que sus campos definen qué
          información se registrará.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Para trabajar correctamente con una base de datos es necesario
          comprender cómo se estructuran las tablas, qué función cumplen los
          campos y qué propiedades permiten definir la forma en que se
          almacenarán los datos.
        </p>
      </section>

      {/* ¿Qué es una tabla? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una tabla?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una tabla es una estructura utilizada para almacenar información
          relacionada con un determinado tema o elemento. Por ejemplo, una
          base de datos de una empresa podría contener una tabla denominada
          <strong> Clientes</strong>, destinada a registrar información de
          las personas o empresas que compran sus productos o servicios.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una tabla está formada por filas y columnas. Las columnas
          representan los campos y cada fila contiene un registro.
        </p>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de una tabla
        </h2>

        <div className="overflow-x-auto max-w-3xl">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 px-4 py-3 text-left">
                  ID
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Nombre
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Apellido
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Teléfono
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 px-4 py-3">1</td>
                <td className="border border-blue-200 px-4 py-3">Juan</td>
                <td className="border border-blue-200 px-4 py-3">Pérez</td>
                <td className="border border-blue-200 px-4 py-3">
                  2945-123456
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">2</td>
                <td className="border border-blue-200 px-4 py-3">María</td>
                <td className="border border-blue-200 px-4 py-3">Gómez</td>
                <td className="border border-blue-200 px-4 py-3">
                  2945-654321
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">3</td>
                <td className="border border-blue-200 px-4 py-3">Carlos</td>
                <td className="border border-blue-200 px-4 py-3">López</td>
                <td className="border border-blue-200 px-4 py-3">
                  2945-789012
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-2">
            Para recordar
          </p>

          <p className="leading-relaxed">
            <strong>Tabla:</strong> organiza la información.
            <br />
            <strong>Campo:</strong> define qué dato se almacena.
            <br />
            <strong>Registro:</strong> representa un conjunto de datos
            correspondientes a un elemento.
          </p>
        </div>
      </section>

      {/* Campos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un campo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un campo representa una característica o dato que se desea
          almacenar. Cada campo tiene un nombre que permite identificar la
          información que contiene.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Por ejemplo, en una tabla de clientes podemos tener campos como
          <strong> ID</strong>, <strong>Nombre</strong>,
          <strong> Apellido</strong>, <strong>DNI</strong>,
          <strong> Dirección</strong> y <strong>Teléfono</strong>.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6 max-w-3xl">
          <li>Cada campo representa un tipo de información.</li>
          <li>Los campos forman las columnas de una tabla.</li>
          <li>Los nombres de los campos permiten identificar los datos.</li>
          <li>
            Cada campo puede tener determinadas características y
            propiedades.
          </li>
        </ul>
      </section>

      {/* Registros */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un registro?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un registro es un conjunto de valores correspondientes a un
          elemento almacenado en la tabla. En una tabla de clientes, por
          ejemplo, cada registro puede representar a un cliente diferente.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-2">
            Ejemplo
          </p>

          <p className="leading-relaxed">
            En la tabla <strong>Clientes</strong>, el registro
            <strong> 1 - Juan Pérez - 2945-123456</strong> contiene los
            valores correspondientes a un cliente determinado.
          </p>
        </div>
      </section>

      {/* Propiedades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Propiedades de los campos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las propiedades permiten definir características de los campos y
          establecer cómo se almacenará o mostrará la información.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Al diseñar una tabla es importante definir correctamente estas
          características para que los datos puedan almacenarse de manera
          adecuada.
        </p>

        <div className="overflow-x-auto max-w-3xl mt-6">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Campo
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Tipo de información
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  Nombre
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Texto
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  María
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  Edad
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Número
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  35
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  Fecha de nacimiento
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Fecha
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  15/08/1991
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  Activo
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Sí/No
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Sí
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Diseño de tablas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diseño de una tabla
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de comenzar a cargar información es importante pensar qué
          datos se necesitan almacenar. A partir de esta información se
          pueden determinar las tablas y los campos necesarios.
        </p>

        <ol className="list-decimal list-inside space-y-3 mt-6 max-w-3xl">
          <li>Identificar la información que se necesita registrar.</li>
          <li>Determinar qué elementos se van a almacenar.</li>
          <li>Crear una tabla para cada conjunto de información.</li>
          <li>Definir los campos de cada tabla.</li>
          <li>Establecer las propiedades adecuadas para los campos.</li>
        </ol>
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
              Actividad 1: Identificar tablas y campos
            </h3>

            <p className="leading-relaxed mb-4">
              Una institución necesita registrar información sobre sus
              estudiantes. Analizá qué información debería almacenar y
              determiná cuáles podrían ser los campos de una tabla
              denominada <strong>Estudiantes</strong>.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Proponé al menos seis campos.</li>
              <li>Indicá qué información almacenaría cada campo.</li>
              <li>Elegí un nombre adecuado para cada campo.</li>
            </ul>
          </div>

          {/* Actividad 2 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Diferenciar campos y registros
            </h3>

            <p className="leading-relaxed mb-4">
              Observá la siguiente información de clientes:
            </p>

            <div className="overflow-x-auto mb-5">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      Nombre
                    </th>
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      Apellido
                    </th>
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      DNI
                    </th>
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      Teléfono
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-blue-200 px-4 py-3">
                      Laura
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      Fernández
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      32145678
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      2945-111111
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-blue-200 px-4 py-3">
                      Pedro
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      González
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      28765432
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      2945-222222
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc list-inside space-y-2">
              <li>Identificá los campos de la tabla.</li>
              <li>¿Cuántos registros contiene?</li>
              <li>¿Qué dato representa cada registro?</li>
              <li>¿Qué otros campos podrían agregarse?</li>
            </ul>
          </div>

          {/* Actividad 3 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Determinar propiedades
            </h3>

            <p className="leading-relaxed mb-4">
              Una empresa necesita crear una tabla denominada
              <strong> Empleados</strong>. Determiná el tipo de información
              que debería utilizarse para cada campo.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-800 text-white">
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      Campo
                    </th>
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      Tipo de dato
                    </th>
                    <th className="border border-blue-200 px-4 py-3 text-left">
                      Ejemplo
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    ["Nombre", "", "Juan"],
                    ["Apellido", "", "Pérez"],
                    ["DNI", "", "30123456"],
                    ["FechaNacimiento", "", "10/05/1990"],
                    ["Sueldo", "", "450000"],
                    ["Activo", "", "Sí"],
                  ].map(([campo, tipo, ejemplo]) => (
                    <tr key={campo}>
                      <td className="border border-blue-200 px-4 py-3">
                        {campo}
                      </td>
                      <td className="border border-blue-200 px-4 py-3">
                        {tipo || "________________"}
                      </td>
                      <td className="border border-blue-200 px-4 py-3">
                        {ejemplo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mt-5">
              Justificá por qué elegiste cada tipo de dato.
            </p>
          </div>

          {/* Actividad 4 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Diseñar una tabla
            </h3>

            <p className="leading-relaxed mb-4">
              Una librería necesita registrar los productos que tiene
              disponibles para la venta.
            </p>

            <p className="leading-relaxed mb-4">
              Diseñá una tabla denominada <strong>Productos</strong> y
              definí:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Nombre de cada campo.</li>
              <li>Tipo de dato de cada campo.</li>
              <li>Una descripción de cada campo.</li>
              <li>Un ejemplo de valor para cada campo.</li>
            </ul>

            <p className="leading-relaxed mt-4">
              La tabla debe contener al menos ocho campos.
            </p>
          </div>

          {/* Actividad 5 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Crear una tabla en Access
            </h3>

            <p className="leading-relaxed mb-4">
              Utilizando Microsoft Access, creá una base de datos denominada
              <strong> Librería</strong>.
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>Creá una tabla llamada Productos.</li>
              <li>Agregá los campos definidos en la actividad anterior.</li>
              <li>Configurá el tipo de dato correspondiente.</li>
              <li>Definí las propiedades necesarias para cada campo.</li>
              <li>Guardá la tabla.</li>
              <li>Cargá al menos diez registros.</li>
            </ol>
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
            Diseñar la base de datos de una oficina
          </h3>

          <p className="leading-relaxed mb-4">
            Una oficina necesita comenzar a organizar digitalmente la
            información de sus clientes, productos y empleados. Actualmente
            los datos se encuentran registrados en diferentes documentos y
            resulta difícil mantenerlos organizados.
          </p>

          <p className="leading-relaxed mb-4">
            Como primera etapa del proyecto, deberás analizar qué información
            necesita almacenar la oficina y diseñar las tablas necesarias.
          </p>

          <h4 className="font-bold text-blue-900 mb-3">
            Consignas
          </h4>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Identificá al menos tres conjuntos de información que deberían
              almacenarse.
            </li>

            <li>
              Proponé una tabla para cada conjunto de información.
            </li>

            <li>
              Definí los campos que tendrá cada tabla.
            </li>

            <li>
              Indicá el tipo de dato correspondiente a cada campo.
            </li>

            <li>
              Establecé las propiedades necesarias para los campos.
            </li>

            <li>
              Elaborá un ejemplo con al menos cinco registros para cada
              tabla.
            </li>

            <li>
              Implementá las tablas diseñadas utilizando Microsoft Access.
            </li>
          </ol>

          <div className="bg-white border border-blue-200 rounded-xl p-5 mt-6">
            <p className="font-semibold text-blue-900 mb-2">
              Producto final
            </p>

            <p className="leading-relaxed">
              Al finalizar la actividad deberás contar con una primera
              estructura de base de datos, compuesta por las tablas
              diseñadas, sus campos, propiedades y registros de ejemplo.
              Esta estructura será utilizada en las próximas actividades
              para trabajar con claves y relaciones entre tablas.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}