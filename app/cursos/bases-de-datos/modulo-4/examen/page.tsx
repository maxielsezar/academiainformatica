
export default function ExamenPage() {
  return (
    <div className="space-y-14">
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Examen integrador del Módulo 4: Programación
        </h1>

        <p className="text-lg leading-relaxed">
          En este examen deberás integrar los conocimientos adquiridos
          durante el módulo para desarrollar un sistema informático
          completo de gestión de reservas de un hotel, utilizando
          Microsoft Access, consultas SQL, macros y programación en VBA.
        </p>

        <div className=" border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Proyecto final
          </h3>
          <p className="text-lg font-bold text-blue-900">
            Sistema de gestión de reservas de un hotel
          </p>
          <p className="mt-2">
            Diseñar, desarrollar, programar y comprobar el funcionamiento
            de una aplicación que permita administrar huéspedes,
            habitaciones, reservas y pagos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-700 font-semibold">Modalidad</p>
            <p className="font-bold text-blue-900 mt-1">Individual</p>
          </div>
          <div className="border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-700 font-semibold">Entrega</p>
            <p className="font-bold text-blue-900 mt-1">Base de datos funcional</p>
          </div>
          <div className="border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-700 font-semibold">Evaluación</p>
            <p className="font-bold text-blue-900 mt-1">Producto y pruebas</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. Situación problemática
        </h2>

        <p className="leading-relaxed">
          Un hotel necesita implementar un sistema informático que permita
          reemplazar el registro manual de huéspedes, habitaciones,
          reservas y pagos. Actualmente, la información se encuentra
          dispersa y resulta difícil conocer la disponibilidad de las
          habitaciones, consultar los movimientos económicos y realizar
          un seguimiento de las reservas.
        </p>

        <p className="leading-relaxed mt-4">
          Como responsable del desarrollo del sistema, deberás construir
          una aplicación en Microsoft Access que centralice la información,
          automatice las operaciones habituales y permita generar
          consultas e informes para la administración del establecimiento.
        </p>

        <p className="leading-relaxed mt-4">
          El sistema deberá ser sencillo de utilizar, validar los datos
          ingresados, evitar errores en las reservas y mantener la
          consistencia de la información almacenada.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Estructura de la base de datos
        </h2>

        <p className="leading-relaxed">
          La aplicación deberá contar, como mínimo, con las siguientes
          tablas y campos:
        </p>

        <div className="space-y-5 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Tabla: Huespedes
            </h3>
            <p className="text-sm mb-3">
              Almacena los datos personales de las personas que se alojan
              en el hotel.
            </p>
            <div className="flex flex-wrap gap-2">
              {["IdHuesped (PK)", "Nombre", "Apellido", "DNI", "Telefono", "CorreoElectronico", "Direccion", "FechaNacimiento", "Nacionalidad"].map((campo) => (
                <span key={campo} className=" border border-blue-200 text-blue-900 rounded-md px-3 py-1 text-sm">
                  {campo}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Tabla: Habitaciones
            </h3>
            <p className="text-sm mb-3">
              Almacena las características y el estado de cada habitación.
            </p>
            <div className="flex flex-wrap gap-2">
              {["IdHabitacion (PK)", "NumeroHabitacion", "TipoHabitacion", "Capacidad", "PrecioPorNoche", "Descripcion", "Estado"].map((campo) => (
                <span key={campo} className=" border border-blue-200 text-blue-900 rounded-md px-3 py-1 text-sm">
                  {campo}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Tabla: Reservas
            </h3>
            <p className="text-sm mb-3">
              Registra las solicitudes de alojamiento y su estado.
            </p>
            <div className="flex flex-wrap gap-2">
              {["IdReserva (PK)", "IdHuesped (FK)", "IdHabitacion (FK)", "FechaReserva", "FechaEntrada", "FechaSalida", "CantidadPersonas", "EstadoReserva", "Observaciones"].map((campo) => (
                <span key={campo} className=" border border-blue-200 text-blue-900 rounded-md px-3 py-1 text-sm">
                  {campo}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Tabla: Pagos
            </h3>
            <p className="text-sm mb-3">
              Registra los pagos realizados por los huéspedes.
            </p>
            <div className="flex flex-wrap gap-2">
              {["IdPago (PK)", "IdReserva (FK)", "FechaPago", "Importe", "MetodoPago", "EstadoPago", "Observaciones"].map((campo) => (
                <span key={campo} className=" border border-blue-200 text-blue-900 rounded-md px-3 py-1 text-sm">
                  {campo}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Relaciones obligatorias
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Huespedes (1) → Reservas (N).</li>
          <li>Habitaciones (1) → Reservas (N).</li>
          <li>Reservas (1) → Pagos (N).</li>
        </ul>

        <p className="leading-relaxed mt-4">
          Todas las relaciones deberán utilizar claves primarias y
          foráneas, con integridad referencial correctamente configurada.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Funcionalidades obligatorias del sistema
        </h2>

        <p className="leading-relaxed">
          El sistema deberá contar con las siguientes funcionalidades.
          Todas deben estar disponibles desde formularios, botones,
          consultas o procedimientos programados, según corresponda.
        </p>

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              A. Menú principal
            </h3>
            <p className="leading-relaxed">
              Crear un formulario principal que funcione como pantalla
              de inicio de la aplicación.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Acceso al módulo de huéspedes.</li>
              <li>Acceso al módulo de habitaciones.</li>
              <li>Acceso al módulo de reservas.</li>
              <li>Acceso al módulo de pagos.</li>
              <li>Acceso a consultas e informes.</li>
              <li>Botón para cerrar la aplicación.</li>
            </ul>
            <p className="mt-3">
              Los botones deberán funcionar mediante macros o procedimientos
              VBA.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              B. Gestión de huéspedes
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registrar nuevos huéspedes.</li>
              <li>Consultar huéspedes existentes.</li>
              <li>Modificar datos personales.</li>
              <li>Buscar huéspedes por DNI, apellido o nombre.</li>
              <li>Validar que los campos obligatorios estén completos.</li>
              <li>Evitar el registro de dos huéspedes con el mismo DNI.</li>
            </ul>
          </div>

          <div className="border-t border-blue-200 pt-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              C. Gestión de habitaciones
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registrar nuevas habitaciones.</li>
              <li>Modificar los datos de una habitación.</li>
              <li>Consultar habitaciones por número y tipo.</li>
              <li>Actualizar el precio por noche.</li>
              <li>Modificar el estado: Disponible, Ocupada o Mantenimiento.</li>
              <li>Evitar números de habitación duplicados.</li>
              <li>Controlar que la cantidad de personas no supere la capacidad.</li>
            </ul>
          </div>

          <div className="border-t border-blue-200 pt-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              D. Gestión de reservas
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registrar una reserva asociando un huésped y una habitación.</li>
              <li>Seleccionar las fechas de entrada y salida.</li>
              <li>Indicar la cantidad de personas.</li>
              <li>Calcular automáticamente la cantidad de noches.</li>
              <li>Calcular el importe total de la reserva.</li>
              <li>Consultar reservas existentes.</li>
              <li>Modificar fechas, huésped, habitación y cantidad de personas, según corresponda.</li>
              <li>Cambiar el estado de una reserva.</li>
              <li>Cancelar reservas sin perder innecesariamente su historial.</li>
              <li>Buscar reservas por huésped, fecha o estado.</li>
            </ul>
          </div>

          <div className="border-t border-blue-200 pt-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              E. Control de disponibilidad
            </h3>
            <p className="leading-relaxed">
              El sistema deberá comprobar si una habitación está disponible
              para el período solicitado antes de permitir registrar o
              modificar una reserva.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Comprobar que la habitación no esté en mantenimiento.</li>
              <li>Verificar que no exista otra reserva activa que se superponga.</li>
              <li>Permitir reservas en períodos diferentes para una misma habitación.</li>
              <li>Excluir las reservas canceladas del control de solapamiento.</li>
              <li>Mostrar un mensaje cuando la habitación no esté disponible.</li>
            </ul>

            <div className=" rounded-xl p-5 mt-4">
              <h4 className="font-bold text-blue-900 mb-2">
                Regla de superposición de fechas
              </h4>
              <p className="leading-relaxed">
                Existe superposición cuando una reserva anterior tiene
                FechaEntrada menor que la nueva FechaSalida y FechaSalida
                mayor que la nueva FechaEntrada, siempre que no esté
                cancelada.
              </p>
              <pre className="bg-slate-950 text-green-300 p-3 rounded-lg text-sm overflow-x-auto mt-3">
{`FechaEntradaExistente < FechaSalidaNueva
AND
FechaSalidaExistente > FechaEntradaNueva`}
              </pre>
              <p className="text-sm mt-3">
                Se consideran intervalos de alojamiento con salida en la
                fecha indicada, por lo que una salida y una nueva entrada
                el mismo día no se consideran superpuestas.
              </p>
            </div>
          </div>

          <div className="border-t border-blue-200 pt-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              F. Gestión de pagos
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registrar uno o varios pagos asociados a una reserva.</li>
              <li>Indicar fecha, importe y método de pago.</li>
              <li>Seleccionar el estado del pago.</li>
              <li>Consultar los pagos de una reserva.</li>
              <li>Calcular el total de pagos confirmados.</li>
              <li>Calcular el saldo pendiente de una reserva.</li>
              <li>Evitar registrar importes iguales o menores que cero.</li>
              <li>Evitar que los pagos confirmados superen el total de la reserva.</li>
            </ul>
          </div>

          <div className="border-t border-blue-200 pt-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              G. Consultas e informes
            </h3>
            <p className="leading-relaxed">
              Crear consultas SQL que permitan obtener información útil
              para la administración del hotel.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Listado de huéspedes y sus reservas.</li>
              <li>Reservas por período de fechas.</li>
              <li>Reservas por estado.</li>
              <li>Habitaciones por tipo y estado.</li>
              <li>Huéspedes con mayor cantidad de reservas.</li>
              <li>Total de pagos por reserva.</li>
              <li>Ingresos por método de pago.</li>
              <li>Reservas con saldo pendiente.</li>
              <li>Resumen de habitaciones por tipo.</li>
            </ul>
            <p className="mt-3">
              Utilizar consultas de selección, relaciones JOIN, agrupaciones
              GROUP BY, filtros WHERE y HAVING, funciones de resumen y
              consultas de acción cuando corresponda.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Requisitos de programación
        </h2>

        <p className="leading-relaxed">
          El sistema deberá demostrar que se utilizaron los contenidos
          de programación trabajados durante el módulo. No alcanza con
          crear formularios y consultas: algunas operaciones deberán
          estar automatizadas mediante código.
        </p>

        <div className="space-y-4 mt-5">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Variables y constantes
            </h3>
            <p>
              Utilizar variables para almacenar fechas, importes, noches,
              identificadores, estados y resultados de operaciones.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Estructuras condicionales
            </h3>
            <p>
              Utilizar If...Then, If...Then...Else y Select Case para
              validar fechas, disponibilidad, capacidad, estados y pagos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Estructuras repetitivas
            </h3>
            <p>
              Utilizar ciclos para recorrer registros, contar habitaciones,
              sumar pagos y procesar información de consultas.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Procedimientos y funciones
            </h3>
            <p>
              Crear procedimientos y funciones reutilizables para calcular
              importes, noches, pagos, saldos y realizar validaciones.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Macros en Access
            </h3>
            <p>
              Implementar macros para abrir formularios, ejecutar consultas,
              mostrar mensajes, abrir informes y controlar la navegación
              de la aplicación.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Consultas QBE y SQL
            </h3>
            <p>
              Crear consultas mediante el diseñador de Access y mediante
              instrucciones SQL. Utilizar SELECT, INSERT INTO, UPDATE,
              DELETE, JOIN y GROUP BY.
            </p>
          </div>
        </div>

        <div className=" rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Funciones mínimas recomendadas
          </h3>
          <pre className="bg-slate-950 text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
{`CalcularNoches()
CalcularImporte()
CalcularTotalPagado()
CalcularSaldoPendiente()
VerificarDisponibilidad()
ValidarDatosReserva()
LimpiarFormularioReserva()`}
          </pre>
          <p className="text-sm mt-3">
            Los nombres pueden variar, pero cada función deberá cumplir
            con una responsabilidad concreta y estar implementada en
            el sistema.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Test de funcionamiento obligatorios
        </h2>

        <p className="leading-relaxed">
          Una vez finalizado el desarrollo, deberás realizar las siguientes
          pruebas. Cada test debe ejecutarse con los datos indicados y
          registrar el resultado obtenido.
        </p>

        <div className=" rounded-xl p-5 mt-5 mb-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Datos de referencia para las pruebas
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Habitación 101: doble, capacidad 2 personas, $65.000 por noche.
            </li>
            <li>
              Habitación 102: familiar, capacidad 4 personas, $90.000 por noche.
            </li>
            <li>
              Habitación 103: doble, capacidad 2 personas, estado Mantenimiento.
            </li>
            <li>
              Huésped de prueba: Ana Pérez, DNI 30123456.
            </li>
            <li>
              Reserva de referencia: habitación 101, del 10/12/2026 al
              13/12/2026, estado Confirmada.
            </li>
            <li>
              Pago confirmado de referencia: $100.000 asociado a esa reserva.
            </li>
          </ul>
          <p className="text-sm mt-3">
            Los registros deberán cargarse en la base de datos de prueba
            antes de comenzar. Los resultados esperados suponen que la
            reserva de referencia no tiene otros pagos confirmados.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 1: registro de huéspedes
            </h3>
            <p className="leading-relaxed">
              Comprobar que el sistema permita registrar correctamente
              un huésped y que impida guardar un registro con un DNI
              duplicado.
            </p>
            <div className="mt-3 space-y-2">
              <p><strong>Prueba A:</strong> registrar a Ana Pérez con DNI 30123456.</p>
              <p><strong>Resultado esperado:</strong> el huésped se guarda correctamente.</p>
              <p><strong>Prueba B:</strong> intentar registrar otro huésped con el mismo DNI.</p>
              <p><strong>Resultado esperado:</strong> el sistema impide el duplicado y muestra un mensaje.</p>
            </div>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 2: validación de campos obligatorios
            </h3>
            <p>
              Intentar guardar un huésped sin nombre o sin DNI.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema informa qué
              dato falta y no guarda el registro incompleto.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 3: capacidad de habitación
            </h3>
            <p>
              Intentar registrar una reserva para la habitación 101 con
              tres personas, cuando su capacidad es de dos.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema rechaza la
              operación e informa que se supera la capacidad permitida.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 4: validación de fechas
            </h3>
            <p>
              Intentar registrar una reserva cuya fecha de salida sea
              anterior o igual a la fecha de entrada.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema no permite
              guardar la reserva y muestra un mensaje de fechas inválidas.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 5: cálculo de noches e importe
            </h3>
            <p>
              Crear una reserva para la habitación 101 desde el 10/12/2026
              hasta el 13/12/2026.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Precio por noche: $65.000.</li>
              <li>Cantidad de noches: 3.</li>
              <li>Importe esperado: $195.000.</li>
            </ul>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema calcula
              automáticamente las tres noches y el importe total correcto.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 6: habitación en mantenimiento
            </h3>
            <p>
              Intentar realizar una reserva para la habitación 103.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema impide
              reservar la habitación porque su estado es Mantenimiento.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 7: detección de reservas superpuestas
            </h3>
            <p>
              Existe una reserva confirmada para la habitación 101 desde
              el 10/12/2026 hasta el 13/12/2026. Intentar crear otra
              reserva para la misma habitación desde el 12/12/2026
              hasta el 15/12/2026.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema detecta
              la superposición y rechaza la nueva reserva.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 8: reservas en períodos diferentes
            </h3>
            <p>
              Intentar crear una reserva para la habitación 101 desde
              el 13/12/2026 hasta el 16/12/2026, cuando la reserva anterior
              tiene salida el 13/12/2026.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema permite
              registrar la nueva reserva porque la salida y la nueva
              entrada coinciden en el mismo día.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 9: reservas canceladas
            </h3>
            <p>
              Cambiar el estado de una reserva superpuesta a Cancelada
              e intentar realizar una nueva reserva para ese período.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema ignora
              la reserva cancelada para el control de disponibilidad
              y permite continuar si no existen otras reservas que
              se superpongan.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 10: registro de pagos
            </h3>
            <p>
              Registrar un pago confirmado de $100.000 para la reserva
              cuyo importe total es de $195.000.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el pago se registra
              correctamente y el saldo pendiente se calcula en $95.000.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 11: validación de importes
            </h3>
            <p>
              Intentar registrar un pago por $0 y otro por un importe
              negativo. Luego intentar registrar un pago que supere
              el saldo pendiente.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema rechaza
              los importes inválidos y evita que los pagos confirmados
              superen el total de la reserva.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 12: cálculo del saldo pendiente
            </h3>
            <p>
              Para una reserva de $195.000, registrar dos pagos confirmados:
              uno de $100.000 y otro de $50.000.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema calcula
              $150.000 pagados y $45.000 pendientes.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 13: consultas SQL y relaciones
            </h3>
            <p>
              Ejecutar la consulta que relaciona huéspedes, reservas
              y habitaciones.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> se muestran correctamente
              los datos del huésped, la habitación y las fechas de la reserva.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 14: agrupaciones e informes
            </h3>
            <p>
              Ejecutar las consultas que agrupan reservas por estado
              y pagos por método de pago.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> los totales y las
              cantidades coinciden con los registros cargados en la
              base de datos.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 15: funcionamiento del menú principal
            </h3>
            <p>
              Abrir la aplicación y probar todos los botones del menú
              principal: huéspedes, habitaciones, reservas, pagos,
              consultas, informes y salir.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> cada botón abre el
              formulario o informe correspondiente y la aplicación
              permite navegar sin errores.
            </p>
          </div>

          <div className="border-t border-blue-200 pt-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Test 16: integridad referencial
            </h3>
            <p>
              Intentar eliminar un huésped que tenga reservas asociadas
              o una reserva que tenga pagos asociados.
            </p>
            <p className="mt-2">
              <strong>Resultado esperado:</strong> el sistema respeta
              la integridad referencial y no permite dejar registros
              relacionados sin correspondencia. Si se configuró una
              eliminación en cascada, deberá comprobarse que sea
              intencional y coherente con las reglas del sistema.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Registro de resultados de los test
        </h2>

        <p className="leading-relaxed">
          Deberás entregar una planilla de pruebas donde registres el
          resultado de cada test. No alcanza con indicar que el sistema
          funciona: es necesario demostrarlo.
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200 text-sm">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">N.º</th>
                <th className="border border-blue-200 p-3 text-left">Prueba</th>
                <th className="border border-blue-200 p-3 text-left">Resultado esperado</th>
                <th className="border border-blue-200 p-3 text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Registro de huéspedes", "Alta correcta y DNI duplicado rechazado."],
                ["2", "Campos obligatorios", "No permite guardar datos incompletos."],
                ["3", "Capacidad", "Rechaza cantidad de personas excesiva."],
                ["4", "Fechas", "Rechaza fechas inválidas."],
                ["5", "Cálculo de importe", "3 noches × $65.000 = $195.000."],
                ["6", "Mantenimiento", "No permite reservar habitación en mantenimiento."],
                ["7", "Solapamiento", "Rechaza reserva superpuesta."],
                ["8", "Cambio de período", "Permite entrada el día de otra salida."],
                ["9", "Cancelación", "Ignora reservas canceladas."],
                ["10", "Registro de pagos", "Calcula saldo de $95.000."],
                ["11", "Importes inválidos", "Rechaza pagos incorrectos o excesivos."],
                ["12", "Saldo pendiente", "Calcula saldo de $45.000."],
                ["13", "Relaciones SQL", "Muestra datos relacionados correctamente."],
                ["14", "Agrupaciones", "Obtiene totales y cantidades correctos."],
                ["15", "Menú principal", "Todos los botones funcionan."],
                ["16", "Integridad referencial", "Protege los registros relacionados."]
              ].map((test) => (
                <tr key={test[0]}>
                  <td className="border border-blue-200 p-3">{test[0]}</td>
                  <td className="border border-blue-200 p-3 font-semibold">{test[1]}</td>
                  <td className="border border-blue-200 p-3">{test[2]}</td>
                  <td className="border border-blue-200 p-3">
                    Pendiente / Aprobado / Fallido
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm mt-3">
          Para cada prueba se deberá incluir, cuando corresponda, una
          captura de pantalla que demuestre el resultado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Entrega final del proyecto
        </h2>

        <p className="leading-relaxed">
          Al finalizar el examen, deberás entregar los siguientes elementos:
        </p>

        <div className="space-y-4 mt-5">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              1. Base de datos
            </h3>
            <p>
              Archivo de Microsoft Access con extensión .accdb, que contenga
              tablas, relaciones, formularios, consultas, macros, informes
              y código VBA.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              2. Código y consultas
            </h3>
            <p>
              Presentar los procedimientos, funciones y consultas SQL
              implementadas, con nombres descriptivos y organizados.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              3. Planilla de pruebas
            </h3>
            <p>
              Documento con los 16 test, sus resultados, observaciones
              y evidencias de funcionamiento.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              4. Documentación del sistema
            </h3>
            <p>
              Breve descripción de la aplicación, sus funcionalidades,
              estructura de tablas, relaciones y principales operaciones.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              5. Presentación y demostración
            </h3>
            <p>
              Realizar una demostración del sistema en funcionamiento,
              mostrando el registro de un huésped, la creación de una
              reserva, el control de disponibilidad, el registro de pagos
              y la generación de informes.
            </p>
          </div>
        </div>

        <div className=" p-5 rounded-xl mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Condición de aprobación funcional
          </h3>
          <p>
            El sistema deberá superar los test obligatorios. Los errores
            deberán corregirse y las pruebas fallidas deberán volver a
            ejecutarse. Una funcionalidad que solamente está diseñada,
            pero no funciona, no se considerará implementada.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Criterios de evaluación
        </h2>

        <p className="leading-relaxed">
          Se evaluará tanto el producto desarrollado como el proceso de
          programación, la calidad de las validaciones y la capacidad
          para comprobar el funcionamiento del sistema.
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200 text-sm">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Criterio
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Indicadores
                </th>
                <th className="border border-blue-200 p-3 text-center">
                  Puntaje
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Base de datos
                </td>
                <td className="border border-blue-200 p-3">
                  Tablas, campos, claves y relaciones correctas.
                </td>
                <td className="border border-blue-200 p-3 text-center">15</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Formularios y navegación
                </td>
                <td className="border border-blue-200 p-3">
                  Interfaz funcional y acceso a las operaciones.
                </td>
                <td className="border border-blue-200 p-3 text-center">10</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Funcionalidades
                </td>
                <td className="border border-blue-200 p-3">
                  Gestión completa de huéspedes, habitaciones, reservas y pagos.
                </td>
                <td className="border border-blue-200 p-3 text-center">20</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Programación
                </td>
                <td className="border border-blue-200 p-3">
                  Variables, condiciones, ciclos, procedimientos y funciones.
                </td>
                <td className="border border-blue-200 p-3 text-center">15</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Consultas y macros
                </td>
                <td className="border border-blue-200 p-3">
                  QBE, SQL, relaciones, agrupaciones y automatizaciones.
                </td>
                <td className="border border-blue-200 p-3 text-center">15</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Pruebas funcionales
                </td>
                <td className="border border-blue-200 p-3">
                  Ejecución de test, resultados correctos y corrección de errores.
                </td>
                <td className="border border-blue-200 p-3 text-center">20</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Documentación y presentación
                </td>
                <td className="border border-blue-200 p-3">
                  Organización, evidencias y explicación del sistema.
                </td>
                <td className="border border-blue-200 p-3 text-center">5</td>
              </tr>
              <tr className="">
                <td className="border border-blue-200 p-3 font-bold" colSpan={2}>
                  TOTAL
                </td>
                <td className="border border-blue-200 p-3 text-center font-bold">
                  100
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Condiciones para aprobar
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obtener al menos 60 puntos sobre 100.</li>
            <li>Entregar la base de datos funcional.</li>
            <li>Demostrar el funcionamiento de las operaciones principales.</li>
            <li>Ejecutar los 16 test y documentar sus resultados.</li>
            <li>Corregir los errores que impidan realizar reservas o registrar pagos correctamente.</li>
          </ul>
          <p className="mt-3 text-sm">
            El puntaje mínimo no reemplaza los requisitos funcionales
            obligatorios del proyecto.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Reflexión final
        </h2>

        <p className="leading-relaxed">
          Una vez finalizado el proyecto, respondé las siguientes preguntas:
        </p>

        <ol className="list-decimal pl-6 space-y-3 mt-4">
          <li>
            ¿Qué problema administrativo resuelve el sistema desarrollado?
          </li>
          <li>
            ¿Qué parte del sistema requirió mayor trabajo de programación?
          </li>
          <li>
            ¿Qué validaciones implementaste para evitar errores?
          </li>
          <li>
            ¿Por qué es importante comprobar la disponibilidad antes de
            registrar una reserva?
          </li>
          <li>
            ¿Qué mejoras incorporarías si el hotel quisiera utilizar
            el sistema en una situación real?
          </li>
        </ol>
      </section>

      <section>
        <div className="bg-blue-900 text-white rounded-xl p-7">
          <h2 className="text-2xl font-bold mb-4">
            Desafío final
          </h2>
          <p className="leading-relaxed">
            El objetivo no es solamente construir una base de datos,
            sino desarrollar una aplicación que resuelva una necesidad
            concreta, automatice tareas, proteja la información y permita
            trabajar de manera confiable.
          </p>
          <p className="leading-relaxed mt-4 font-semibold">
            Tu sistema estará terminado cuando sus funcionalidades
            funcionen correctamente y puedas demostrarlo mediante
            pruebas concretas.
          </p>
        </div>
      </section>
    </div>
  );
}
