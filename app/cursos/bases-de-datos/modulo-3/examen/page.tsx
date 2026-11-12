export default function ExamenModulo3Page() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Examen práctico integrador – Módulo 3
        </h1>

        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Sistema de gestión de reservas de un hotel
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una empresa hotelera necesita implementar un sistema informático que
          permita administrar sus huéspedes, habitaciones, reservas y pagos.
          Actualmente, la información se registra en planillas independientes,
          lo que dificulta consultar la disponibilidad de habitaciones, conocer
          las reservas realizadas y controlar los ingresos del establecimiento.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Tu tarea será desarrollar una aplicación utilizando Microsoft Access
          que permita gestionar las operaciones del hotel mediante formularios
          e informes. Deberás diseñar una interfaz clara, facilitar la carga de
          datos, incorporar controles de validación y generar documentación
          administrativa.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de la evaluación
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Diseñar una base de datos para administrar reservas hoteleras.</li>
          <li>Crear formularios para registrar y consultar información.</li>
          <li>Utilizar controles de formularios y cuadros combinados.</li>
          <li>Incorporar subformularios para administrar información relacionada.</li>
          <li>Configurar reglas de validación para evitar errores.</li>
          <li>Diseñar informes administrativos y estadísticos.</li>
          <li>Utilizar agrupaciones, ordenamientos, subtotales y totales.</li>
          <li>Configurar la presentación de los informes.</li>
          <li>Utilizar la vista previa y las opciones de impresión.</li>
          <li>Exportar los informes a formatos digitales.</li>
        </ul>
      </section>

      {/* Requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna general
        </h2>

        <p className="leading-relaxed mb-4">
          Creá una base de datos llamada
          <strong> Hotel_Gestion_Reservas</strong>. El sistema deberá permitir
          registrar huéspedes, habitaciones, reservas y pagos. Además, deberá
          facilitar la consulta de disponibilidad y generar informes que
          permitan conocer la situación del hotel.
        </p>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg">
          <p className="font-semibold text-blue-900 mb-2">
            Importante
          </p>
          <p className="leading-relaxed">
            No alcanza con crear las tablas. La evaluación se centra en la
            construcción de una interfaz funcional mediante formularios e
            informes. Todas las pantallas deberán tener una presentación
            ordenada y permitir trabajar con los datos de manera sencilla.
          </p>
        </div>
      </section>

      {/* Parte 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 1: Diseño de la base de datos
        </h2>

        <p className="leading-relaxed mb-6">
          Creá las siguientes tablas. Definí correctamente los tipos de datos,
          las claves principales y las claves externas.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              1. Tabla Huéspedes
            </h3>
            <p className="mb-3">
              Almacena los datos personales y de contacto de las personas que
              se alojan en el hotel.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-500">
                    <th className="border border-blue-200 p-3 text-left">Campo</th>
                    <th className="border border-blue-200 p-3 text-left">Tipo de dato</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["IdHuesped", "Autonumeración (clave principal)"],
                    ["Nombre", "Texto corto"],
                    ["Apellido", "Texto corto"],
                    ["DNI", "Texto corto"],
                    ["Telefono", "Texto corto"],
                    ["CorreoElectronico", "Texto corto"],
                    ["Direccion", "Texto corto"],
                    ["FechaNacimiento", "Fecha/Hora"],
                    ["Nacionalidad", "Texto corto"],
                  ].map(([campo, tipo]) => (
                    <tr key={campo}>
                      <td className="border border-blue-200 p-3">{campo}</td>
                      <td className="border border-blue-200 p-3">{tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              2. Tabla Habitaciones
            </h3>
            <p className="mb-3">
              Contiene la información de las habitaciones disponibles en el
              establecimiento.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-500">
                    <th className="border border-blue-200 p-3 text-left">Campo</th>
                    <th className="border border-blue-200 p-3 text-left">Tipo de dato</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["IdHabitacion", "Autonumeración (clave principal)"],
                    ["NumeroHabitacion", "Texto corto"],
                    ["TipoHabitacion", "Texto corto"],
                    ["Capacidad", "Número"],
                    ["PrecioPorNoche", "Moneda"],
                    ["Descripcion", "Texto largo"],
                    ["Estado", "Texto corto"],
                  ].map(([campo, tipo]) => (
                    <tr key={campo}>
                      <td className="border border-blue-200 p-3">{campo}</td>
                      <td className="border border-blue-200 p-3">{tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              3. Tabla Reservas
            </h3>
            <p className="mb-3">
              Registra cada reserva realizada, el huésped responsable, la
              habitación asignada y las fechas de alojamiento.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-500">
                    <th className="border border-blue-200 p-3 text-left">Campo</th>
                    <th className="border border-blue-200 p-3 text-left">Tipo de dato</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["IdReserva", "Autonumeración (clave principal)"],
                    ["IdHuesped", "Número (clave externa)"],
                    ["IdHabitacion", "Número (clave externa)"],
                    ["FechaReserva", "Fecha/Hora"],
                    ["FechaEntrada", "Fecha/Hora"],
                    ["FechaSalida", "Fecha/Hora"],
                    ["CantidadPersonas", "Número"],
                    ["EstadoReserva", "Texto corto"],
                    ["Observaciones", "Texto largo"],
                  ].map(([campo, tipo]) => (
                    <tr key={campo}>
                      <td className="border border-blue-200 p-3">{campo}</td>
                      <td className="border border-blue-200 p-3">{tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              4. Tabla Pagos
            </h3>
            <p className="mb-3">
              Registra los pagos realizados por los huéspedes para cancelar
              total o parcialmente sus reservas.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-500">
                    <th className="border border-blue-200 p-3 text-left">Campo</th>
                    <th className="border border-blue-200 p-3 text-left">Tipo de dato</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["IdPago", "Autonumeración (clave principal)"],
                    ["IdReserva", "Número (clave externa)"],
                    ["FechaPago", "Fecha/Hora"],
                    ["Importe", "Moneda"],
                    ["MetodoPago", "Texto corto"],
                    ["EstadoPago", "Texto corto"],
                    ["Observaciones", "Texto largo"],
                  ].map(([campo, tipo]) => (
                    <tr key={campo}>
                      <td className="border border-blue-200 p-3">{campo}</td>
                      <td className="border border-blue-200 p-3">{tipo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Relaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 2: Relaciones entre las tablas
        </h2>

        <p className="leading-relaxed mb-4">
          Establecé las relaciones necesarias para que la información se
          encuentre correctamente vinculada.
        </p>

        <div className="space-y-3">
          <div className="border border-blue-200 rounded-lg p-4">
            <p className="font-semibold text-blue-900">Huéspedes – Reservas</p>
            <p className="text-sm mt-1">
              Un huésped puede realizar varias reservas. Cada reserva pertenece
              a un huésped.
            </p>
            <p className="text-sm font-semibold mt-2">Relación: uno a muchos (1:N).</p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <p className="font-semibold text-blue-900">Habitaciones – Reservas</p>
            <p className="text-sm mt-1">
              Una habitación puede aparecer en diferentes reservas a lo largo
              del tiempo. Cada reserva corresponde a una habitación.
            </p>
            <p className="text-sm font-semibold mt-2">Relación: uno a muchos (1:N).</p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <p className="font-semibold text-blue-900">Reservas – Pagos</p>
            <p className="text-sm mt-1">
              Una reserva puede tener varios pagos. Cada pago corresponde a una
              reserva.
            </p>
            <p className="text-sm font-semibold mt-2">Relación: uno a muchos (1:N).</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Tareas
        </h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Creá las relaciones utilizando la ventana Relaciones de Access.</li>
          <li>Activá la integridad referencial.</li>
          <li>Verificá que no se puedan registrar reservas con huéspedes inexistentes.</li>
          <li>Verificá que no se puedan registrar pagos asociados a reservas inexistentes.</li>
          <li>Guardá el diseño de las relaciones.</li>
        </ol>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <p className="font-semibold text-blue-900 mb-2">
            Consideración importante
          </p>
          <p className="leading-relaxed">
            La disponibilidad de una habitación depende de las fechas de las
            reservas y de su estado. No debe considerarse ocupada simplemente
            porque ya tenga reservas históricas. Las fechas de alojamiento no
            deben superponerse entre reservas activas de una misma habitación.
          </p>
        </div>
      </section>

      {/* Parte 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 3: Diseño de formularios
        </h2>

        <p className="leading-relaxed mb-6">
          Diseñá los siguientes formularios. Todos deberán tener títulos,
          etiquetas descriptivas, una distribución ordenada y controles
          adecuados para facilitar la carga y consulta de información.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              1. Formulario de huéspedes
            </h3>
            <p className="mb-3">
              Nombre sugerido: <strong>FrmHuespedes</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Permitir registrar, modificar y consultar huéspedes.</li>
              <li>Incluir todos los datos personales y de contacto.</li>
              <li>Configurar el DNI como dato obligatorio.</li>
              <li>Agregar botones para nuevo registro, guardar y cerrar.</li>
              <li>Incluir un cuadro de búsqueda por apellido o DNI.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              2. Formulario de habitaciones
            </h3>
            <p className="mb-3">
              Nombre sugerido: <strong>FrmHabitaciones</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Permitir registrar y modificar habitaciones.</li>
              <li>Utilizar un cuadro combinado para seleccionar el tipo de habitación.</li>
              <li>Incluir la capacidad y el precio por noche.</li>
              <li>Incorporar una lista para seleccionar el estado de la habitación.</li>
              <li>Agregar un campo de observaciones o descripción.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              3. Formulario principal de reservas
            </h3>
            <p className="mb-3">
              Nombre sugerido: <strong>FrmReservas</strong>.
            </p>
            <p className="mb-3">
              Este será uno de los formularios más importantes del sistema.
              Permitirá registrar las reservas y consultar sus datos.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seleccionar el huésped mediante un cuadro combinado que muestre nombre, apellido y DNI.</li>
              <li>Seleccionar la habitación mediante un cuadro combinado.</li>
              <li>Registrar la fecha de reserva.</li>
              <li>Registrar fecha de entrada y fecha de salida.</li>
              <li>Indicar la cantidad de personas.</li>
              <li>Seleccionar el estado de la reserva: Pendiente, Confirmada, Cancelada o Finalizada.</li>
              <li>Agregar un campo de observaciones.</li>
              <li>Incorporar botones de navegación, nuevo registro, guardar y cerrar.</li>
            </ul>
            <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-4">
              <p className="font-semibold text-blue-900 mb-2">
                Validaciones requeridas
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>La fecha de salida debe ser posterior a la fecha de entrada.</li>
                <li>La cantidad de personas debe ser mayor que cero.</li>
                <li>La cantidad de personas no debe superar la capacidad de la habitación.</li>
                <li>El huésped y la habitación deben ser obligatorios.</li>
                <li>Debe evitarse la superposición de reservas activas para una misma habitación.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              4. Subformulario de pagos
            </h3>
            <p className="mb-3">
              Nombre sugerido: <strong>SubFrmPagos</strong>.
            </p>
            <p className="mb-3">
              Creá un subformulario vinculado al formulario de reservas para
              registrar los pagos correspondientes a cada alojamiento.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registrar la fecha del pago.</li>
              <li>Ingresar el importe abonado.</li>
              <li>Seleccionar el método de pago: Efectivo, Transferencia, Tarjeta u Otro.</li>
              <li>Seleccionar el estado: Pendiente, Aprobado o Rechazado.</li>
              <li>Incluir observaciones.</li>
              <li>Permitir registrar varios pagos para una misma reserva.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              5. Formulario de consulta de disponibilidad
            </h3>
            <p className="mb-3">
              Nombre sugerido: <strong>FrmDisponibilidad</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Permitir ingresar una fecha de entrada y una fecha de salida.</li>
              <li>Mostrar las habitaciones que no tengan reservas activas superpuestas con ese período.</li>
              <li>Mostrar número, tipo, capacidad y precio por noche.</li>
              <li>Permitir filtrar por tipo de habitación y capacidad.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              6. Menú principal del sistema
            </h3>
            <p className="mb-3">
              Nombre sugerido: <strong>FrmMenuPrincipal</strong>.
            </p>
            <p className="mb-3">
              Diseñá una pantalla inicial que permita acceder fácilmente a las
              principales funciones del hotel.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Botón Huéspedes.</li>
              <li>Botón Habitaciones.</li>
              <li>Botón Reservas.</li>
              <li>Botón Pagos.</li>
              <li>Botón Consultar disponibilidad.</li>
              <li>Botón Informes.</li>
              <li>Botón Salir.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Utilizá botones de comando para abrir los formularios y los
              informes correspondientes. Organizá los botones por función y
              agregá un título identificatorio del hotel.
            </p>
          </div>
        </div>
      </section>

      {/* Parte 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 4: Diseño de informes
        </h2>

        <p className="leading-relaxed mb-6">
          El hotel necesita obtener información organizada para controlar sus
          operaciones. Diseñá los siguientes informes utilizando los datos de
          las tablas y las consultas que sean necesarias.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              1. Informe general de huéspedes
            </h3>
            <p className="mb-2">
              Nombre sugerido: <strong>RptHuespedes</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mostrar nombre, apellido, DNI, teléfono y correo electrónico.</li>
              <li>Ordenar alfabéticamente por apellido.</li>
              <li>Incluir un título y la fecha de emisión.</li>
              <li>Mostrar la cantidad total de huéspedes registrados.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              2. Informe general de habitaciones
            </h3>
            <p className="mb-2">
              Nombre sugerido: <strong>RptHabitaciones</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mostrar número, tipo, capacidad, precio por noche y estado.</li>
              <li>Agrupar las habitaciones por tipo.</li>
              <li>Ordenar por número de habitación.</li>
              <li>Mostrar la cantidad de habitaciones de cada tipo.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              3. Informe de ocupación del hotel
            </h3>
            <p className="mb-2">
              Nombre sugerido: <strong>RptOcupacion</strong>.
            </p>
            <p className="mb-3">
              Este informe deberá permitir conocer qué habitaciones están
              ocupadas, disponibles o fuera de servicio para un período
              determinado.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mostrar número y tipo de habitación.</li>
              <li>Mostrar huésped asignado cuando corresponda.</li>
              <li>Mostrar fecha de entrada y fecha de salida.</li>
              <li>Identificar habitaciones disponibles y ocupadas durante el período consultado.</li>
              <li>Identificar habitaciones fuera de servicio.</li>
              <li>Calcular la cantidad de habitaciones por estado.</li>
              <li>Presentar un resumen de ocupación del hotel.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              El informe debe utilizar un período de consulta. Una habitación
              se considera ocupada cuando una reserva confirmada o en curso se
              superpone con las fechas seleccionadas.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              4. Informe de reservas por período
            </h3>
            <p className="mb-2">
              Nombre sugerido: <strong>RptReservasPeriodo</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Permitir consultar reservas entre dos fechas.</li>
              <li>Mostrar número de reserva y fecha de registro.</li>
              <li>Mostrar nombre y apellido del huésped.</li>
              <li>Mostrar habitación asignada.</li>
              <li>Mostrar fecha de entrada y salida.</li>
              <li>Mostrar estado de la reserva.</li>
              <li>Agrupar las reservas por mes o por estado.</li>
              <li>Contabilizar la cantidad de reservas del período.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              5. Informe de pagos
            </h3>
            <p className="mb-2">
              Nombre sugerido: <strong>RptPagos</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mostrar fecha, huésped, número de reserva e importe.</li>
              <li>Mostrar método y estado del pago.</li>
              <li>Agrupar los pagos por método de pago.</li>
              <li>Calcular el total de pagos aprobados.</li>
              <li>Identificar los pagos pendientes y rechazados.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              6. Informe de saldo por reserva
            </h3>
            <p className="mb-2">
              Nombre sugerido: <strong>RptSaldosReservas</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mostrar huésped y habitación.</li>
              <li>Mostrar fechas de entrada y salida.</li>
              <li>Calcular las noches de alojamiento.</li>
              <li>Calcular el importe total de la estadía.</li>
              <li>Calcular el total de pagos aprobados.</li>
              <li>Mostrar el saldo pendiente de cada reserva.</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Para calcular el importe de la estadía se debe multiplicar la
              cantidad de noches por el precio por noche de la habitación. Los
              pagos rechazados o pendientes no deben descontarse del saldo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              7. Informe de huéspedes alojados
            </h3>
            <p className="mb-2">
              Nombre sugerido: <strong>RptHuespedesAlojados</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mostrar los huéspedes con reservas en curso.</li>
              <li>Mostrar número y tipo de habitación.</li>
              <li>Mostrar fecha de entrada y salida.</li>
              <li>Mostrar cantidad de personas alojadas.</li>
              <li>Ordenar por habitación.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              8. Informe de ingresos por período
            </h3>
            <p className="mb-2">
              Nombre sugerido: <strong>RptIngresosPeriodo</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Permitir consultar pagos entre dos fechas.</li>
              <li>Agrupar los ingresos por mes.</li>
              <li>Mostrar el importe de cada pago aprobado.</li>
              <li>Calcular el total de ingresos del período.</li>
              <li>Mostrar un resumen por método de pago.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parte 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 5: Diseño y presentación de los informes
        </h2>

        <p className="leading-relaxed mb-4">
          Todos los informes deberán tener una presentación profesional y
          uniforme, acorde con la identidad del hotel.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Agregar un título descriptivo a cada informe.</li>
          <li>Incluir la fecha de emisión.</li>
          <li>Utilizar encabezados claros para las columnas.</li>
          <li>Aplicar formatos de fecha y moneda.</li>
          <li>Utilizar tamaños de letra legibles.</li>
          <li>Incorporar encabezados y pies de página.</li>
          <li>Agregar numeración de páginas cuando corresponda.</li>
          <li>Configurar márgenes y orientación de página.</li>
          <li>Evitar que las columnas queden cortadas.</li>
          <li>Utilizar agrupaciones, ordenamientos, subtotales y totales cuando sean necesarios.</li>
        </ul>
      </section>

      {/* Parte 6 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 6: Vista previa, impresión y exportación
        </h2>

        <p className="leading-relaxed mb-4">
          Una vez finalizados los informes, prepará los documentos para su
          presentación y distribución.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Tareas obligatorias
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Abrí cada informe en vista previa de impresión.</li>
          <li>Verificá que todos los datos aparezcan correctamente.</li>
          <li>Configurá el tamaño de papel A4.</li>
          <li>Seleccioná orientación vertical u horizontal según el informe.</li>
          <li>Ajustá los márgenes.</li>
          <li>Comprobá que no existan columnas cortadas ni páginas vacías.</li>
          <li>Exportá todos los informes a formato PDF.</li>
          <li>Exportá el informe de ingresos a Excel.</li>
          <li>Organizá los archivos generados en una carpeta llamada Informes_Hotel.</li>
        </ol>
      </section>

      {/* Parte 7 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Parte 7: Carga de datos y pruebas del sistema
        </h2>

        <p className="leading-relaxed mb-4">
          Para comprobar el funcionamiento del sistema, ingresá datos de prueba
          suficientes para generar los formularios e informes solicitados.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Elemento</th>
                <th className="border border-blue-200 p-3 text-left">Cantidad mínima</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Huéspedes", "15"],
                ["Habitaciones", "10"],
                ["Reservas", "20"],
                ["Pagos", "15"],
              ].map(([elemento, cantidad]) => (
                <tr key={elemento}>
                  <td className="border border-blue-200 p-3">{elemento}</td>
                  <td className="border border-blue-200 p-3">{cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Pruebas obligatorias
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Registrar un huésped nuevo.</li>
          <li>Modificar los datos de un huésped existente.</li>
          <li>Registrar una habitación.</li>
          <li>Crear una reserva seleccionando un huésped y una habitación.</li>
          <li>Registrar dos pagos para una misma reserva.</li>
          <li>Intentar ingresar una fecha de salida anterior a la de entrada.</li>
          <li>Intentar ingresar una cantidad de personas superior a la capacidad de la habitación.</li>
          <li>Verificar que el sistema permita consultar reservas anteriores.</li>
          <li>Comprobar que los informes muestren correctamente la información.</li>
          <li>Verificar los totales de pagos e ingresos.</li>
        </ol>
      </section>

      {/* Entrega */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entrega del examen
        </h2>

        <p className="leading-relaxed mb-4">
          Al finalizar el trabajo, deberás presentar una carpeta con todos los
          archivos necesarios para comprobar el funcionamiento del sistema.
        </p>

        <div className="border border-blue-200 rounded-lg p-5 space-y-4">
          <h3 className="text-xl font-semibold text-blue-900">
            Archivos y elementos que deben entregarse
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Base de datos Hotel_Gestion_Reservas.accdb.</li>
            <li>Tablas y relaciones correctamente configuradas.</li>
            <li>Formulario de huéspedes.</li>
            <li>Formulario de habitaciones.</li>
            <li>Formulario principal de reservas.</li>
            <li>Subformulario de pagos.</li>
            <li>Formulario de consulta de disponibilidad.</li>
            <li>Menú principal del sistema.</li>
            <li>Todos los informes solicitados.</li>
            <li>Carpeta Informes_Hotel con los archivos PDF.</li>
            <li>Archivo Excel con el informe de ingresos.</li>
          </ul>
        </div>
      </section>

      {/* Evaluación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de evaluación
        </h2>

        <p className="leading-relaxed mb-4">
          El trabajo será evaluado considerando tanto el funcionamiento de la
          base de datos como la calidad de las interfaces y los documentos
          generados.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Criterio</th>
                <th className="border border-blue-200 p-3 text-center">Puntaje</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Diseño de tablas y relaciones", "15 puntos"],
                ["Formularios y organización de la interfaz", "20 puntos"],
                ["Controles, validaciones y navegación", "15 puntos"],
                ["Diseño y funcionamiento de informes", "20 puntos"],
                ["Agrupaciones, cálculos y totales", "10 puntos"],
                ["Vista previa, impresión y exportación", "10 puntos"],
                ["Organización y presentación de la entrega", "10 puntos"],
                ["Total", "100 puntos"],
              ].map(([criterio, puntaje]) => (
                <tr key={criterio}>
                  <td className="border border-blue-200 p-3">{criterio}</td>
                  <td className="border border-blue-200 p-3 text-center font-medium">
                    {puntaje}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cierre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consideraciones finales
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Este examen integra los conocimientos desarrollados durante el módulo.
          El objetivo es demostrar que podés construir una interfaz de gestión
          en Microsoft Access, facilitando el trabajo de los usuarios y
          generando información organizada para la administración de una
          organización.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Se valorará especialmente que el sistema sea fácil de utilizar, que
          los formularios permitan trabajar correctamente con los registros y
          que los informes presenten información clara, precisa y útil para la
          toma de decisiones.
        </p>
      </section>
    </div>
  );
}