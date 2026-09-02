export default function GoogleCalendarPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Google Calendar
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Google Calendar es una herramienta que permite organizar actividades,
          reuniones, tareas y compromisos mediante un calendario digital.
          <br /><br />
          En el ámbito laboral puede utilizarse para planificar reuniones,
          establecer horarios, registrar actividades y recordar eventos
          importantes, facilitando la organización del trabajo individual
          y grupal.
        </p>
      </section>

      {/* ¿Qué es Google Calendar? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Google Calendar?
        </h2>

        <div className="border p-6 rounded-xl">
          Google Calendar es un servicio de calendario digital que permite
          crear y administrar eventos y actividades.
          <br /><br />
          Los eventos pueden incluir información como fecha, horario,
          descripción, ubicación y participantes, permitiendo organizar
          diferentes compromisos desde un único lugar.
        </div>
      </section>

      {/* Crear evento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un Evento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un evento representa una actividad que se realizará en una fecha
          y horario determinados. Puede utilizarse, por ejemplo, para
          registrar una reunión, una entrevista o una capacitación.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Para crear un evento es posible indicar:
          </p>

          ✔ Título de la actividad. <br />
          ✔ Fecha. <br />
          ✔ Hora de inicio y finalización. <br />
          ✔ Descripción. <br />
          ✔ Ubicación. <br />
          ✔ Personas invitadas. <br />
          ✔ Recordatorios.
        </div>
      </section>

      {/* Invitaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Invitar a Otras Personas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Google Calendar permite agregar participantes a un evento mediante
          sus direcciones de correo electrónico. Esto resulta útil para
          organizar reuniones y actividades grupales.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplo:
          </p>

          Se puede crear un evento llamado:
          <br /><br />

          <strong>Reunión de equipo</strong>
          <br />
          Fecha: lunes 15 de septiembre
          <br />
          Horario: 10:00 a 11:00
          <br /><br />

          Luego se pueden agregar los correos electrónicos de los integrantes
          que deben participar.
        </div>
      </section>

      {/* Recordatorios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recordatorios
        </h2>

        <div className="border p-6 rounded-xl">
          Los recordatorios permiten recibir avisos antes de que ocurra
          una actividad programada.
          <br /><br />
          Esta función ayuda a evitar olvidos y permite prepararse con
          anticipación para reuniones, entrevistas, vencimientos u otras
          actividades importantes.
        </div>
      </section>

      {/* Calendarios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización mediante Calendarios
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es posible utilizar diferentes calendarios para separar actividades
          según su finalidad. Esta organización facilita la visualización
          de los compromisos y permite distinguir diferentes tipos de eventos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-3">
            Ejemplo de organización:
          </p>

          📅 Trabajo
          <br />
          📅 Reuniones
          <br />
          📅 Capacitación
          <br />
          📅 Actividades personales
        </div>
      </section>

      {/* Trabajo grupal */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Google Calendar para el Trabajo Grupal
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un equipo de trabajo, un calendario digital puede ayudar a
          coordinar las actividades de diferentes integrantes.
          <br /><br />
          Compartir información sobre reuniones y actividades permite que
          todos los participantes conozcan los compromisos programados.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Programar reuniones de trabajo.</li>
          <li>Coordinar horarios entre diferentes personas.</li>
          <li>Registrar fechas importantes.</li>
          <li>Establecer recordatorios.</li>
          <li>Organizar actividades de un proyecto.</li>
        </ul>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el Ámbito Laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La utilización de calendarios digitales permite mejorar la
          organización del tiempo y facilita la coordinación de actividades
          dentro de una organización.
          <br /><br />
          Por ejemplo, una persona encargada de tareas administrativas puede
          utilizar Google Calendar para registrar reuniones, entrevistas,
          capacitaciones, vencimientos y otras actividades importantes.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar títulos claros para los eventos.</li>
          <li>Verificar correctamente la fecha y el horario.</li>
          <li>Agregar información importante en la descripción.</li>
          <li>Invitar únicamente a las personas correspondientes.</li>
          <li>Utilizar recordatorios para actividades importantes.</li>
          <li>Mantener actualizado el calendario.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Crear un evento en Google Calendar para una reunión de trabajo.
            Ingresar título, fecha, horario y descripción.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear tres eventos diferentes relacionados con una jornada
            laboral y establecer un recordatorio para cada uno.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Crear un evento e invitar a un compañero utilizando su dirección
            de correo electrónico.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imaginá que trabajás como operador de informática en una oficina
          y debés organizar la agenda semanal de un equipo.
          <br /><br />

          Deberás:
          <br /><br />

          ✔ Crear eventos para diferentes actividades laborales. <br />
          ✔ Establecer fechas y horarios. <br />
          ✔ Agregar descripciones a los eventos. <br />
          ✔ Invitar a los integrantes correspondientes. <br />
          ✔ Configurar recordatorios. <br />
          ✔ Organizar las actividades de manera clara.
        </div>
      </section>

    </div>
  );
}