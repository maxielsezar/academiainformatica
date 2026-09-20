export default function ClavesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Claves Primarias y Secundarias
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las claves permiten identificar registros y establecer relaciones
          entre las diferentes tablas de una base de datos. Son elementos
          fundamentales para organizar la información y evitar confusiones
          entre los registros.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En las bases de datos relacionales utilizaremos principalmente la
          clave primaria y la clave secundaria para identificar registros y
          conectar información almacenada en diferentes tablas.
        </p>
      </section>

      {/* Clave primaria */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una clave primaria?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La clave primaria es un campo, o conjunto de campos, utilizado para
          identificar de manera única cada registro de una tabla.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Por ejemplo, en una tabla de clientes podemos utilizar un campo
          denominado <strong>IdCliente</strong>. Cada cliente tendrá un
          identificador diferente, permitiendo distinguir un registro de
          otro.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-2">
            Ejemplo
          </p>

          <p className="leading-relaxed">
            Si dos clientes tienen el mismo nombre y apellido, el
            <strong> IdCliente</strong> permite diferenciarlos porque cada
            registro posee un identificador único.
          </p>
        </div>
      </section>

      {/* Ejemplo clave primaria */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de una clave primaria
        </h2>

        <div className="overflow-x-auto max-w-3xl">
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
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Teléfono
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
                <td className="border border-blue-200 px-4 py-3">
                  2945-123456
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  2
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Juan
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Pérez
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  2945-654321
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3 font-semibold">
                  3
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  María
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Gómez
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  2945-789012
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          En este ejemplo, aunque dos clientes tengan el mismo nombre y
          apellido, cada uno posee un <strong>IdCliente</strong> diferente.
          Por eso este campo permite identificar de manera única cada
          registro.
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de una clave primaria
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Identifica de manera única cada registro.</li>
          <li>No debería repetirse entre los registros.</li>
          <li>Permite distinguir un registro de otro.</li>
          <li>Es utilizada para establecer relaciones con otras tablas.</li>
          <li>
            Debe definirse al momento de diseñar correctamente la tabla.
          </li>
        </ul>
      </section>

      {/* Clave secundaria */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una clave secundaria?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una clave secundaria es un campo utilizado para establecer una
          relación entre una tabla y otra. También permite hacer referencia
          a un registro que se encuentra identificado en otra tabla.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Por ejemplo, una tabla de ventas puede contener un campo
          <strong> IdCliente</strong> que haga referencia al cliente
          correspondiente en la tabla Clientes.
        </p>
      </section>

      {/* Ejemplo de relación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Clientes y Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Supongamos que tenemos dos tablas: <strong>Clientes</strong> y
          <strong> Ventas</strong>.
        </p>

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
                  2
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  $18.500
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-2">
            ¿Qué sucede aquí?
          </p>

          <p className="leading-relaxed">
            El <strong>IdCliente</strong> identifica al cliente en la tabla
            Clientes y también aparece en la tabla Ventas para indicar a qué
            cliente corresponde cada venta.
          </p>
        </div>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre clave primaria y secundaria
        </h2>

        <div className="overflow-x-auto max-w-3xl">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Clave primaria
                </th>
                <th className="border border-blue-200 px-4 py-3 text-left">
                  Clave secundaria
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  Identifica un registro de forma única.
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Permite relacionar registros entre tablas.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  Pertenece a la tabla que identifica el registro.
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Hace referencia a una clave de otra tabla.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 px-4 py-3">
                  Permite distinguir cada registro.
                </td>
                <td className="border border-blue-200 px-4 py-3">
                  Permite conectar información relacionada.
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

        <div className="space-y-8 max-w-3xl">

          {/* Actividad 1 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar claves primarias
            </h3>

            <p className="leading-relaxed mb-4">
              Analizá los siguientes campos e indicá cuál podría utilizarse
              como clave primaria en cada caso.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Nombre de una persona.</li>
              <li>DNI.</li>
              <li>Dirección.</li>
              <li>Teléfono.</li>
              <li>IdCliente.</li>
              <li>Correo electrónico.</li>
            </ul>

            <p className="leading-relaxed mt-5">
              Justificá tus respuestas explicando qué característica debería
              tener un campo para funcionar como clave primaria.
            </p>
          </div>

          {/* Actividad 2 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Detectar problemas de identificación
            </h3>

            <p className="leading-relaxed mb-4">
              Observá la siguiente tabla:
            </p>

            <div className="overflow-x-auto">
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
                      Teléfono
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-blue-200 px-4 py-3">
                      Juan
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      Pérez
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      2945-111111
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-blue-200 px-4 py-3">
                      Juan
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      Pérez
                    </td>
                    <td className="border border-blue-200 px-4 py-3">
                      2945-222222
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="leading-relaxed mt-5">
              Respondé:
            </p>

            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                ¿Podemos utilizar Nombre como clave primaria?
              </li>
              <li>
                ¿Podemos utilizar Nombre + Apellido?
              </li>
              <li>
                ¿Qué campo agregarías para identificar cada registro?
              </li>
            </ul>
          </div>

          {/* Actividad 3 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Identificar claves secundarias
            </h3>

            <p className="leading-relaxed mb-4">
              Una base de datos contiene las tablas
              <strong> Clientes</strong> y <strong>Ventas</strong>.
            </p>

            <p className="leading-relaxed mb-4">
              La tabla Clientes tiene el campo <strong>IdCliente</strong>
              como identificador. La tabla Ventas también contiene un campo
              denominado <strong>IdCliente</strong>.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                ¿Qué función cumple IdCliente en la tabla Clientes?
              </li>
              <li>
                ¿Qué función cumple IdCliente en la tabla Ventas?
              </li>
              <li>
                ¿Por qué es necesario utilizar el mismo identificador?
              </li>
              <li>
                ¿Qué información permite relacionar?
              </li>
            </ul>
          </div>

          {/* Actividad 4 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Diseñar claves
            </h3>

            <p className="leading-relaxed mb-4">
              Diseñá las claves para las siguientes tablas:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Clientes.</li>
              <li>Productos.</li>
              <li>Ventas.</li>
              <li>Empleados.</li>
            </ul>

            <p className="leading-relaxed mt-5">
              Para cada tabla indicá:
            </p>

            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Cuál será su clave primaria.</li>
              <li>
                Qué campos podrían utilizarse como claves secundarias.
              </li>
              <li>
                Qué otra tabla podría estar relacionada.
              </li>
            </ul>
          </div>

          {/* Actividad 5 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Crear claves en Access
            </h3>

            <p className="leading-relaxed mb-4">
              Utilizando la base de datos creada en las actividades
              anteriores, abrí Microsoft Access y configurá las claves de
              las tablas.
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>Abrí la base de datos de la librería.</li>
              <li>Seleccioná la tabla Clientes.</li>
              <li>Definí IdCliente como clave primaria.</li>
              <li>Guardá los cambios.</li>
              <li>
                Incorporá el campo IdCliente en la tabla Ventas.
              </li>
              <li>
                Prepará la tabla para establecer posteriormente la relación
                entre ambas tablas.
              </li>
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
            Diseñar las claves de una base de datos
          </h3>

          <p className="leading-relaxed mb-4">
            Retomá el proyecto desarrollado en las actividades anteriores.
            La organización elegida necesita comenzar a estructurar su base
            de datos y ahora es necesario definir los identificadores que
            permitirán distinguir los registros y relacionar las tablas.
          </p>

          <h4 className="font-bold text-blue-900 mb-3">
            Consignas
          </h4>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Recuperá las tablas propuestas en la actividad integradora
              anterior.
            </li>

            <li>
              Definí una clave primaria para cada tabla.
            </li>

            <li>
              Justificá por qué elegiste cada campo como clave primaria.
            </li>

            <li>
              Identificá qué tablas necesitan relacionarse.
            </li>

            <li>
              Determiná qué campos podrían utilizarse como claves
              secundarias.
            </li>

            <li>
              Indicá qué información permitirá conectar cada una de las
              tablas.
            </li>

            <li>
              Implementá las claves en Microsoft Access.
            </li>
          </ol>

          <div className="bg-white border border-blue-200 rounded-xl p-5 mt-6">
            <p className="font-semibold text-blue-900 mb-2">
              Producto final
            </p>

            <p className="leading-relaxed">
              Deberás presentar las tablas de la base de datos con sus
              respectivas claves primarias y secundarias correctamente
              definidas, junto con un esquema que muestre qué tablas podrán
              relacionarse entre sí.
            </p>

            <p className="leading-relaxed mt-3">
              Este diseño será utilizado en el próximo tema para trabajar
              específicamente con las <strong>relaciones entre tablas</strong>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}