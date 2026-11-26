
export default function SqlAccionPage() {
  return (
    <div className="space-y-14">
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Consultas SQL de acción
        </h1>

        <p className="text-lg leading-relaxed">
          En las clases anteriores aprendimos a utilizar SQL para consultar
          información almacenada en una base de datos. Sin embargo, en un
          sistema de gestión también necesitamos agregar nuevos registros,
          modificar información existente y eliminar datos que ya no sean
          necesarios.
        </p>

        <p className="leading-relaxed mt-4">
          Para realizar estas operaciones utilizamos las <strong>consultas
          SQL de acción</strong>. A diferencia de las consultas de selección,
          que solamente muestran información, las consultas de acción
          modifican los datos almacenados en las tablas.
        </p>

        <div className=" border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Objetivo de la clase
          </h3>
          <p>
            Aprender a utilizar instrucciones SQL para agregar, modificar,
            eliminar y crear registros o tablas, aplicándolas al sistema de
            gestión de reservas del hotel.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué son las consultas SQL de acción?
        </h2>

        <p className="leading-relaxed">
          Son instrucciones que permiten realizar cambios directamente en
          la información de una base de datos. En Microsoft Access podemos
          utilizar diferentes tipos de consultas de acción:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              INSERT INTO
            </h3>
            <p className="text-sm mb-3">
              Agrega nuevos registros a una tabla.
            </p>
            <p className="text-blue-800 font-semibold">
              Ejemplo: registrar un nuevo huésped.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              UPDATE
            </h3>
            <p className="text-sm mb-3">
              Modifica los valores de registros existentes.
            </p>
            <p className="text-blue-800 font-semibold">
              Ejemplo: cambiar el precio de una habitación.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              DELETE
            </h3>
            <p className="text-sm mb-3">
              Elimina registros de una tabla.
            </p>
            <p className="text-blue-800 font-semibold">
              Ejemplo: eliminar una reserva de prueba.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              SELECT INTO
            </h3>
            <p className="text-sm mb-3">
              Crea una tabla nueva a partir de los resultados de una consulta.
            </p>
            <p className="text-blue-800 font-semibold">
              Ejemplo: crear una tabla con reservas históricas.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-blue-800 mb-3">
            Diferencia entre consultas de selección y de acción
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-blue-200 text-sm">
              <thead>
                <tr className="bg-blue-500">
                  <th className="border border-blue-200 p-3 text-left">
                    Consulta
                  </th>
                  <th className="border border-blue-200 p-3 text-left">
                    Función
                  </th>
                  <th className="border border-blue-200 p-3 text-left">
                    Modifica datos
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-200 p-3">SELECT</td>
                  <td className="border border-blue-200 p-3">
                    Recupera y muestra información.
                  </td>
                  <td className="border border-blue-200 p-3">No</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">INSERT INTO</td>
                  <td className="border border-blue-200 p-3">
                    Agrega registros.
                  </td>
                  <td className="border border-blue-200 p-3">Sí</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">UPDATE</td>
                  <td className="border border-blue-200 p-3">
                    Modifica registros.
                  </td>
                  <td className="border border-blue-200 p-3">Sí</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">DELETE</td>
                  <td className="border border-blue-200 p-3">
                    Elimina registros.
                  </td>
                  <td className="border border-blue-200 p-3">Sí</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">SELECT INTO</td>
                  <td className="border border-blue-200 p-3">
                    Crea una tabla nueva.
                  </td>
                  <td className="border border-blue-200 p-3">
                    Sí, crea una tabla.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. INSERT INTO: agregar registros
        </h2>

        <p className="leading-relaxed">
          La instrucción <strong>INSERT INTO</strong> permite incorporar
          nuevos registros a una tabla. Se utiliza cuando necesitamos
          almacenar información que todavía no existe en la base de datos.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Estructura de la instrucción
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`INSERT INTO NombreTabla (Campo1, Campo2, Campo3)
VALUES (Valor1, Valor2, Valor3);`}
        </pre>

        <p className="mt-4 leading-relaxed">
          La instrucción se compone de dos partes:
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>INSERT INTO:</strong> indica la tabla donde se agregará
            el registro.
          </li>
          <li>
            <strong>Campos:</strong> especifica las columnas que recibirán
            información.
          </li>
          <li>
            <strong>VALUES:</strong> establece los valores que se almacenarán
            en cada campo, respetando el mismo orden.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: registrar un huésped
        </h3>

        <p className="leading-relaxed">
          Supongamos que llega una persona al hotel y necesitamos registrar
          sus datos en la tabla <strong>Huespedes</strong>.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`INSERT INTO Huespedes
    (Nombre, Apellido, DNI, Telefono, CorreoElectronico)
VALUES
    ('Carlos', 'Gomez', '32145678',
     '2945123456', 'carlos@gmail.com');`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Al ejecutar esta consulta, Access agrega un nuevo registro con los
          datos indicados. Si el campo <strong>IdHuesped</strong> es
          autonumérico, no es necesario incluirlo: Access asignará
          automáticamente un identificador.
        </p>

        <div className=" p-5 rounded-xl mt-5">
          <h4 className="font-bold text-blue-900 mb-2">
            Tipos de valores en SQL
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Texto:</strong> se escribe entre comillas simples.
              Ejemplo: <code>'Carlos'</code>.
            </li>
            <li>
              <strong>Números:</strong> se escriben sin comillas.
              Ejemplo: <code>65000</code>.
            </li>
            <li>
              <strong>Fechas:</strong> se escriben entre numerales.
              Ejemplo: <code>#11/26/2026#</code>.
            </li>
            <li>
              <strong>Valores nulos:</strong> se representan con
              <code> NULL</code>, sin comillas.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Agregar un pago
        </h3>

        <p className="leading-relaxed">
          También podemos utilizar INSERT INTO para registrar un pago
          asociado a una reserva existente:
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`INSERT INTO Pagos
    (IdReserva, FechaPago, Importe, MetodoPago, EstadoPago)
VALUES
    (15, #11/26/2026#, 130000, 'Transferencia', 'Confirmado');`}
        </pre>

        <p className="mt-4 leading-relaxed">
          En este ejemplo, el pago queda relacionado con la reserva cuyo
          identificador es 15. Ese identificador debe existir previamente
          en la tabla Reservas para respetar la relación entre ambas tablas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. UPDATE: modificar registros
        </h2>

        <p className="leading-relaxed">
          La instrucción <strong>UPDATE</strong> permite cambiar información
          que ya se encuentra almacenada en una tabla. Es útil para corregir
          datos, actualizar precios o cambiar el estado de una reserva.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Estructura de la instrucción
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`UPDATE NombreTabla
SET Campo1 = Valor1, Campo2 = Valor2
WHERE Condicion;`}
        </pre>

        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>UPDATE:</strong> indica qué tabla se va a modificar.
          </li>
          <li>
            <strong>SET:</strong> establece los nuevos valores.
          </li>
          <li>
            <strong>WHERE:</strong> determina qué registros serán modificados.
          </li>
        </ul>

        <div className="border-l-4 border-red-500 p-5 rounded-r-lg mt-6">
          <h4 className="font-bold text-red-800 mb-2">
            ¡Atención con WHERE!
          </h4>
          <p>
            Si ejecutamos una consulta UPDATE sin utilizar WHERE, Access
            modificará todos los registros de la tabla. Por eso, antes de
            ejecutar una consulta de actualización, debemos comprobar
            cuidadosamente la condición.
          </p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo 1: cambiar el estado de una habitación
        </h3>

        <p className="leading-relaxed">
          Si la habitación número 12 necesita mantenimiento, podemos
          actualizar su estado:
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`UPDATE Habitaciones
SET Estado = 'Mantenimiento'
WHERE NumeroHabitacion = 12;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Solamente se modificará la habitación que tenga el número 12.
          Las demás habitaciones conservarán su estado.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo 2: actualizar el precio de una habitación
        </h3>

        <p className="leading-relaxed">
          Supongamos que necesitamos aumentar un 10 % el precio por noche
          de todas las habitaciones:
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`UPDATE Habitaciones
SET PrecioPorNoche = PrecioPorNoche * 1.10;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          En este caso no se utiliza WHERE porque la intención es actualizar
          todas las habitaciones. Cada precio se multiplica por 1,10,
          aplicando un incremento del 10 %.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo 3: actualizar el estado de una reserva
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`UPDATE Reservas
SET EstadoReserva = 'Confirmada'
WHERE IdReserva = 25;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          La consulta modifica el estado de la reserva identificada con el
          número 25. El resto de las reservas no se verá afectado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. DELETE: eliminar registros
        </h2>

        <p className="leading-relaxed">
          La instrucción <strong>DELETE</strong> permite eliminar registros
          de una tabla. Se utiliza cuando necesitamos quitar información
          que ya no debe permanecer almacenada.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Estructura de la instrucción
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`DELETE FROM NombreTabla
WHERE Condicion;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: eliminar una reserva de prueba
        </h3>

        <p className="leading-relaxed">
          Si estamos realizando pruebas y necesitamos eliminar una reserva
          específica, podemos utilizar:
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`DELETE FROM Reservas
WHERE IdReserva = 30;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          La consulta elimina únicamente el registro que tiene el
          identificador 30, siempre que no existan restricciones que
          impidan la operación.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: eliminar reservas canceladas
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`DELETE FROM Reservas
WHERE EstadoReserva = 'Cancelada';`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Esta instrucción elimina todos los registros que tengan el estado
          Cancelada. No elimina solamente una reserva: afecta a todas las
          que cumplan la condición.
        </p>

        <div className="border-l-4 border-red-500 p-5 rounded-r-lg mt-6">
          <h4 className="font-bold text-red-800 mb-2">
            Precauciones al eliminar información
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Antes de ejecutar DELETE, realizar una copia de seguridad
              de la base de datos.
            </li>
            <li>
              Comprobar con un SELECT qué registros serán eliminados.
            </li>
            <li>
              No ejecutar una consulta DELETE sin WHERE, salvo que
              realmente se quiera eliminar todos los registros de la tabla.
            </li>
            <li>
              Tener en cuenta las relaciones entre tablas y la integridad
              referencial.
            </li>
          </ul>
          <p className="mt-3">
            Por ejemplo, si una reserva tiene pagos asociados, Access puede
            impedir su eliminación por la integridad referencial. La
            eliminación en cascada solamente se producirá si fue configurada
            expresamente en la relación.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. SELECT INTO: crear una tabla nueva
        </h2>

        <p className="leading-relaxed">
          La instrucción <strong>SELECT INTO</strong> permite crear una
          tabla nueva utilizando los resultados de una consulta SELECT.
          Es útil para generar copias de determinados datos o guardar
          información histórica.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Estructura de la instrucción
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT Campo1, Campo2, Campo3
INTO NombreTablaNueva
FROM NombreTabla
WHERE Condicion;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: crear una tabla de reservas canceladas
        </h3>

        <p className="leading-relaxed">
          Supongamos que queremos guardar una copia de los datos de las
          reservas canceladas en una tabla independiente llamada
          <strong> HistoricoReservasCanceladas</strong>.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT *
INTO HistoricoReservasCanceladas
FROM Reservas
WHERE EstadoReserva = 'Cancelada';`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Access creará una tabla nueva con los registros que cumplan la
          condición. La tabla original no será modificada.
        </p>

        <div className=" p-5 rounded-xl mt-5">
          <h4 className="font-bold text-blue-900 mb-2">
            Importante
          </h4>
          <p>
            SELECT INTO crea una tabla nueva. No sirve para agregar registros
            a una tabla que ya existe. Si necesitamos incorporar registros
            a una tabla existente, debemos utilizar INSERT INTO.
          </p>
          <p className="mt-2">
            Si la tabla de destino ya existe, la consulta puede generar un
            error. Además, SELECT INTO no debe considerarse una copia de
            seguridad completa: es necesario verificar qué estructura,
            propiedades e índices se conservaron.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Ejecutar consultas de acción en Microsoft Access
        </h2>

        <p className="leading-relaxed">
          Podemos escribir y ejecutar consultas SQL de acción directamente
          desde Microsoft Access. Para ello, seguimos estos pasos:
        </p>

        <ol className="list-decimal pl-6 space-y-3 mt-4">
          <li>Abrir la base de datos del sistema de gestión del hotel.</li>
          <li>
            Seleccionar la opción <strong>Crear</strong> y luego
            <strong> Diseño de consulta</strong>.
          </li>
          <li>
            Cerrar la ventana de selección de tablas si no necesitamos
            agregar ninguna.
          </li>
          <li>
            Cambiar a <strong>Vista SQL</strong> desde el menú de vistas.
          </li>
          <li>
            Escribir la instrucción SQL que queremos ejecutar.
          </li>
          <li>
            Guardar la consulta con un nombre descriptivo.
          </li>
          <li>
            Ejecutar la consulta utilizando el botón
            <strong> Ejecutar</strong> (signo de exclamación).
          </li>
        </ol>

        <div className="my-6">
          <div className=" rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Ejemplo de nombres para guardar las consultas
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><code>qryAgregarHuesped</code></li>
              <li><code>qryActualizarPrecioHabitaciones</code></li>
              <li><code>qryCambiarEstadoReserva</code></li>
              <li><code>qryEliminarReservaPrueba</code></li>
              <li><code>qryCrearHistoricoCanceladas</code></li>
            </ul>
          </div>
        </div>

        <p className="leading-relaxed">
          Al ejecutar una consulta de acción, Access puede mostrar un mensaje
          de confirmación indicando cuántos registros se modificarán,
          agregarán o eliminarán. Debemos revisar la operación antes de
          confirmarla.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Buenas prácticas al trabajar con consultas de acción
        </h2>

        <p className="leading-relaxed">
          Las consultas de acción son herramientas muy útiles, pero deben
          utilizarse con cuidado porque pueden modificar grandes cantidades
          de información.
        </p>

        <div className="space-y-4 mt-5">
          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              1. Realizar copias de seguridad
            </h3>
            <p>
              Antes de ejecutar consultas que modifican o eliminan datos,
              guardar una copia de la base de datos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              2. Comprobar las condiciones
            </h3>
            <p>
              Revisar especialmente la cláusula WHERE para evitar modificar
              registros que no corresponden.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              3. Probar primero con SELECT
            </h3>
            <p>
              Antes de ejecutar un UPDATE o DELETE, realizar una consulta
              SELECT utilizando la misma condición para verificar qué
              registros serán afectados.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              4. Utilizar nombres descriptivos
            </h3>
            <p>
              Guardar las consultas con nombres que permitan identificar
              claramente qué operación realizan.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              5. Trabajar con datos de prueba
            </h3>
            <p>
              Practicar las operaciones de modificación y eliminación en
              una copia de la base de datos o con registros creados
              especialmente para realizar ejercicios.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Aplicación al sistema de gestión de reservas del hotel
        </h2>

        <p className="leading-relaxed">
          En nuestro proyecto integrador estamos construyendo un sistema
          para administrar huéspedes, habitaciones, reservas y pagos.
          Las consultas SQL de acción permiten automatizar distintas
          operaciones del sistema.
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200 text-sm">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Necesidad del hotel
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Instrucción SQL
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">
                  Registrar un huésped
                </td>
                <td className="border border-blue-200 p-3">INSERT INTO</td>
                <td className="border border-blue-200 p-3">
                  Se incorpora un registro.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Actualizar el precio de una habitación
                </td>
                <td className="border border-blue-200 p-3">UPDATE</td>
                <td className="border border-blue-200 p-3">
                  Se modifica el precio.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Confirmar una reserva
                </td>
                <td className="border border-blue-200 p-3">UPDATE</td>
                <td className="border border-blue-200 p-3">
                  Se actualiza el estado.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Eliminar una reserva de prueba
                </td>
                <td className="border border-blue-200 p-3">DELETE</td>
                <td className="border border-blue-200 p-3">
                  Se elimina el registro.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Crear un histórico de reservas
                </td>
                <td className="border border-blue-200 p-3">SELECT INTO</td>
                <td className="border border-blue-200 p-3">
                  Se crea una tabla nueva.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" border border-blue-200 rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Relación con el proyecto integrador
          </h3>
          <p>
            En las próximas clases vamos a combinar las consultas de selección
            y de acción para construir operaciones más completas. Por
            ejemplo, podremos consultar las reservas de un huésped,
            actualizar su estado y registrar los pagos correspondientes.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Actividades prácticas
        </h2>

        <p className="leading-relaxed mb-6">
          Realizá las siguientes actividades utilizando la base de datos
          del sistema de gestión hotelera. Trabajá con una copia de prueba
          y verificá los resultados de cada consulta.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: registro de huéspedes
            </h3>
            <p className="leading-relaxed">
              Escribí una consulta SQL utilizando INSERT INTO para agregar
              tres huéspedes nuevos a la tabla Huespedes. Cada registro debe
              incluir nombre, apellido, DNI, teléfono y correo electrónico.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizá datos ficticios.</li>
              <li>Respetá los tipos de datos de cada campo.</li>
              <li>Ejecutá la consulta y verificá los registros agregados.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: actualización de habitaciones
            </h3>
            <p className="leading-relaxed">
              El hotel decidió aumentar un 15 % el precio por noche de todas
              las habitaciones. Elaborá una consulta UPDATE que realice
              automáticamente el cambio.
            </p>
            <p className="mt-3">
              Antes de ejecutar la consulta, registrá los precios originales
              y calculá manualmente cuánto debería costar una habitación
              que actualmente tiene un valor de $65.000 por noche.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: cambio de estado de reservas
            </h3>
            <p className="leading-relaxed">
              Seleccioná una reserva de prueba y elaborá una consulta UPDATE
              para cambiar su EstadoReserva a Confirmada.
            </p>
            <p className="mt-3">
              Luego, realizá una consulta SELECT para comprobar que el
              cambio se haya realizado correctamente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: eliminación de registros
            </h3>
            <p className="leading-relaxed">
              Creá dos reservas de prueba identificadas como registros que
              pueden eliminarse. Elaborá una consulta DELETE que permita
              eliminar solamente una de ellas mediante su IdReserva.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Comprobá primero el registro con SELECT.</li>
              <li>Revisá si tiene pagos asociados.</li>
              <li>Ejecutá DELETE únicamente si las relaciones lo permiten.</li>
              <li>Comprobá que el registro ya no aparezca en la tabla.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: creación de una tabla histórica
            </h3>
            <p className="leading-relaxed">
              Elaborá una consulta SELECT INTO para crear una tabla nueva
              llamada HistoricoReservas. La tabla debe contener los campos
              IdReserva, IdHuesped, IdHabitacion, FechaEntrada, FechaSalida
              y EstadoReserva de las reservas canceladas.
            </p>
            <p className="mt-3">
              Verificá que la tabla se haya creado y que contenga solamente
              los registros que cumplen la condición.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Actividad integradora: mantenimiento de la base de datos del hotel
        </h2>

        <div className=" border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            El hotel necesita realizar una actualización general de su
            información. Como responsable del mantenimiento de la base de
            datos, deberás diseñar y ejecutar diferentes consultas SQL
            de acción para resolver las siguientes situaciones.
          </p>

          <h3 className="font-bold text-blue-900 mt-5 mb-3">
            Consignas
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Agregar un nuevo huésped con todos sus datos personales.
            </li>
            <li>
              Registrar un pago correspondiente a una reserva existente.
            </li>
            <li>
              Actualizar el precio por noche de una habitación determinada.
            </li>
            <li>
              Cambiar el estado de una habitación a Mantenimiento.
            </li>
            <li>
              Actualizar el estado de una reserva de Pendiente a Confirmada.
            </li>
            <li>
              Crear una tabla nueva con las reservas canceladas para
              conservar un registro histórico.
            </li>
          </ol>

          <h3 className="font-bold text-blue-900 mt-6 mb-3">
            Entrega del trabajo
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Guardar cada consulta con un nombre descriptivo.
            </li>
            <li>
              Presentar el código SQL utilizado.
            </li>
            <li>
              Incluir capturas de pantalla de las consultas ejecutadas.
            </li>
            <li>
              Explicar qué operación realiza cada instrucción.
            </li>
            <li>
              Verificar que los cambios se reflejen correctamente en las
              tablas correspondientes.
            </li>
          </ul>

          <div className="border-t border-blue-200 mt-6 pt-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Criterios de evaluación
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Identifica correctamente las consultas SQL de acción.
              </li>
              <li>
                Utiliza INSERT INTO, UPDATE, DELETE y SELECT INTO según
                la necesidad planteada.
              </li>
              <li>
                Aplica correctamente las condiciones WHERE.
              </li>
              <li>
                Respeta los tipos de datos y las relaciones entre tablas.
              </li>
              <li>
                Verifica los resultados y trabaja con precaución sobre
                la información almacenada.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conclusión
        </h2>

        <p className="leading-relaxed">
          Las consultas SQL de acción permiten administrar de manera
          eficiente la información de una base de datos. Mediante INSERT
          INTO podemos agregar registros, con UPDATE modificar datos,
          con DELETE eliminar información y con SELECT INTO crear nuevas
          tablas a partir de consultas.
        </p>

        <p className="leading-relaxed mt-4">
          En el sistema de gestión hotelera, estas herramientas permiten
          automatizar tareas de mantenimiento y administración de datos.
          En la próxima clase vamos a trabajar con consultas SQL que
          combinan agrupaciones y relaciones entre tablas para obtener
          información más completa del funcionamiento del hotel.
        </p>
      </section>
    </div>
  );
}
