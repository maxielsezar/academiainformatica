import Link from "next/link";

export default function ActividadIntegradoraPage() {
  return (
    <main className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Actividad integradora: Base de datos para un consultorio odontológico
        </h1>

        <p className="text-lg leading-relaxed">
          En esta actividad integradora se deberán aplicar los conceptos
          trabajados durante el módulo para diseñar y crear una base de datos
          en Microsoft Access destinada a gestionar la información de un
          consultorio odontológico.
        </p>

        <p className="mt-4 leading-relaxed">
          El sistema deberá permitir registrar pacientes, administrar turnos
          y conservar un historial de las atenciones odontológicas realizadas.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Objetivos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Aplicar los conceptos de tablas, campos y registros.",
            "Definir claves primarias y claves foráneas.",
            "Establecer relaciones entre diferentes tablas.",
            "Identificar y reducir la repetición innecesaria de datos.",
            "Aplicar conceptos básicos de normalización.",
            "Utilizar la integridad referencial para mantener los datos consistentes.",
            "Crear una base de datos funcional en Microsoft Access.",
            "Realizar consultas sobre la información almacenada.",
          ].map((objetivo, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl p-5"
            >
              <p className="leading-relaxed">{objetivo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Situación problemática */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Situación problemática
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            Un consultorio odontológico necesita informatizar el registro de
            sus pacientes y las atenciones que reciben.
          </p>

          <p className="mt-4 leading-relaxed">
            Actualmente, la información se registra en diferentes planillas.
            Esto provoca que algunos datos se repitan y resulte difícil
            consultar rápidamente el historial de un paciente.
          </p>

          <p className="mt-4 leading-relaxed">
            El consultorio necesita una base de datos que permita registrar
            los datos personales de los pacientes, administrar sus turnos y
            conservar un historial de las atenciones realizadas.
          </p>
        </div>
      </section>

      {/* Requerimientos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Requerimientos del sistema
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <ol className="list-decimal pl-6 space-y-3">
            <li>Registrar los datos personales de los pacientes.</li>
            <li>Registrar los turnos solicitados.</li>
            <li>Indicar qué paciente corresponde a cada turno.</li>
            <li>Registrar fecha y hora de cada turno.</li>
            <li>Registrar el motivo de la consulta.</li>
            <li>Registrar el estado del turno.</li>
            <li>Registrar las atenciones realizadas.</li>
            <li>Guardar el diagnóstico y tratamiento realizado.</li>
            <li>Conservar el historial de cada paciente.</li>
            <li>Evitar almacenar información repetida innecesariamente.</li>
          </ol>
        </div>
      </section>

      {/* Parte 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 1: Analizar la información
        </h2>

        <p className="leading-relaxed mb-5">
          Antes de crear la base de datos, analizar qué información necesita
          almacenar el consultorio.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Pacientes
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>DNI</li>
              <li>Nombre</li>
              <li>Apellido</li>
              <li>Fecha de nacimiento</li>
              <li>Teléfono</li>
              <li>Correo electrónico</li>
              <li>Dirección</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Turnos
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Fecha</li>
              <li>Hora</li>
              <li>Motivo</li>
              <li>Estado</li>
              <li>Paciente</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Historial
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Fecha de atención</li>
              <li>Diagnóstico</li>
              <li>Tratamiento</li>
              <li>Observaciones</li>
              <li>Paciente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parte 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 2: Crear la base de datos
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            Crear una nueva base de datos en Microsoft Access con el nombre:
          </p>

          <div className="mt-4 p-4 border rounded-lg font-mono">
            ConsultorioOdontologico.accdb
          </div>
        </div>
      </section>

      {/* Tabla Pacientes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Tabla: Pacientes
        </h2>

        <p className="mb-5 leading-relaxed">
          Esta tabla deberá almacenar la información personal de cada paciente.
        </p>

        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-4">Campo</th>
                <th className="p-4">Tipo de dato</th>
                <th className="p-4">Descripción</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["IDPaciente", "Autonumeración", "Identificador único"],
                ["DNI", "Texto corto", "Documento del paciente"],
                ["Nombre", "Texto corto", "Nombre"],
                ["Apellido", "Texto corto", "Apellido"],
                [
                  "FechaNacimiento",
                  "Fecha/Hora",
                  "Fecha de nacimiento",
                ],
                ["Telefono", "Texto corto", "Número telefónico"],
                ["Email", "Texto corto", "Correo electrónico"],
                ["Direccion", "Texto corto", "Domicilio"],
              ].map((row, index) => (
                <tr key={index} className="border-b last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          <strong>Clave primaria:</strong> IDPaciente
        </p>
      </section>

      {/* Tabla Turnos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Tabla: Turnos
        </h2>

        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-4">Campo</th>
                <th className="p-4">Tipo de dato</th>
                <th className="p-4">Descripción</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["IDTurno", "Autonumeración", "Identificador del turno"],
                ["IDPaciente", "Número", "Paciente que solicita el turno"],
                ["FechaTurno", "Fecha/Hora", "Fecha del turno"],
                ["HoraTurno", "Fecha/Hora", "Hora del turno"],
                ["Motivo", "Texto corto", "Motivo de la consulta"],
                [
                  "Estado",
                  "Texto corto",
                  "Pendiente, confirmado, atendido o cancelado",
                ],
              ].map((row, index) => (
                <tr key={index} className="border-b last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 border-l-4 border-blue-700 pl-5">
          <p>
            <strong>Clave primaria:</strong> IDTurno
          </p>
          <p className="mt-2">
            <strong>Clave foránea:</strong> IDPaciente
          </p>
        </div>
      </section>

      {/* Tabla Historial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Tabla: Historial
        </h2>

        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-4">Campo</th>
                <th className="p-4">Tipo de dato</th>
                <th className="p-4">Descripción</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["IDHistorial", "Autonumeración", "Identificador del registro"],
                ["IDPaciente", "Número", "Paciente atendido"],
                ["FechaAtencion", "Fecha/Hora", "Fecha de atención"],
                ["Diagnostico", "Texto largo", "Diagnóstico realizado"],
                ["Tratamiento", "Texto largo", "Tratamiento efectuado"],
                [
                  "Observaciones",
                  "Texto largo",
                  "Información adicional",
                ],
              ].map((row, index) => (
                <tr key={index} className="border-b last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 border-l-4 border-blue-700 pl-5">
          <p>
            <strong>Clave primaria:</strong> IDHistorial
          </p>
          <p className="mt-2">
            <strong>Clave foránea:</strong> IDPaciente
          </p>
        </div>
      </section>

      {/* Relaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 3: Crear las relaciones
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Pacientes → Turnos
            </h3>

            <p className="leading-relaxed">
              Un paciente puede tener muchos turnos, pero cada turno
              corresponde a un único paciente.
            </p>

            <p className="mt-4 font-semibold">Relación: 1 : N</p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Pacientes → Historial
            </h3>

            <p className="leading-relaxed">
              Un paciente puede tener muchos registros en su historial,
              mientras que cada registro pertenece a un único paciente.
            </p>

            <p className="mt-4 font-semibold">Relación: 1 : N</p>
          </div>
        </div>

        <div className="mt-6 border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            Utilizar el diseñador de relaciones de Access para establecer las
            relaciones y activar la opción de <strong>integridad referencial</strong>.
          </p>
        </div>
      </section>

      {/* Normalización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 4: Normalización
        </h2>

        <p className="leading-relaxed mb-5">
          Analizar el siguiente ejemplo de una tabla incorrectamente diseñada:
        </p>

        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                {[
                  "Paciente",
                  "DNI",
                  "Teléfono",
                  "FechaTurno",
                  "Hora",
                  "Motivo",
                  "Diagnóstico",
                  "Tratamiento",
                ].map((header) => (
                  <th key={header} className="p-4 whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Juan Pérez</td>
                <td className="p-4">40111222</td>
                <td className="p-4">2945-555111</td>
                <td className="p-4">10/04/2026</td>
                <td className="p-4">09:00</td>
                <td className="p-4">Dolor</td>
                <td className="p-4">Caries</td>
                <td className="p-4">Restauración</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Juan Pérez</td>
                <td className="p-4">40111222</td>
                <td className="p-4">2945-555111</td>
                <td className="p-4">20/04/2026</td>
                <td className="p-4">10:00</td>
                <td className="p-4">Control</td>
                <td className="p-4">—</td>
                <td className="p-4">—</td>
              </tr>

              <tr>
                <td className="p-4">María López</td>
                <td className="p-4">42888999</td>
                <td className="p-4">2945-555222</td>
                <td className="p-4">11/04/2026</td>
                <td className="p-4">11:00</td>
                <td className="p-4">Dolor</td>
                <td className="p-4">Caries</td>
                <td className="p-4">Restauración</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 border rounded-xl p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Responder
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>¿Qué información está repetida?</li>
            <li>¿Qué problemas puede generar esa repetición?</li>
            <li>¿Qué ocurriría si Juan cambia su número de teléfono?</li>
            <li>¿Cuántas veces habría que modificar ese dato?</li>
            <li>¿Cómo se puede solucionar el problema?</li>
            <li>
              ¿Por qué resulta conveniente separar la información en varias
              tablas?
            </li>
          </ol>
        </div>
      </section>

      {/* Carga de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 5: Cargar datos
        </h2>

        <div className="border rounded-xl p-6">
          <p className="mb-4 leading-relaxed">
            Ingresar datos ficticios respetando como mínimo las siguientes
            cantidades:
          </p>

          <ul className="list-disc pl-6 space-y-3">
            <li>10 pacientes.</li>
            <li>15 turnos.</li>
            <li>10 registros de historial.</li>
          </ul>

          <p className="mt-5 leading-relaxed">
            Procurar que algunos pacientes tengan más de un turno y más de un
            registro en su historial.
          </p>
        </div>
      </section>

      {/* Consultas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Parte 6: Crear consultas
        </h2>

        <div className="space-y-5">
          {[
            {
              title: "Consulta 1 – Todos los pacientes",
              text: "Mostrar DNI, nombre, apellido, teléfono y correo electrónico.",
            },
            {
              title: "Consulta 2 – Turnos",
              text: "Mostrar los turnos ordenados por fecha y hora, incluyendo paciente, fecha, hora, motivo y estado.",
            },
            {
              title: "Consulta 3 – Historial de un paciente",
              text: "Mostrar todas las atenciones de un paciente determinado, incluyendo fecha, diagnóstico, tratamiento y observaciones.",
            },
            {
              title: "Consulta 4 – Turnos atendidos",
              text: "Mostrar únicamente los turnos cuyo estado sea 'Atendido'.",
            },
            {
              title: "Consulta 5 – Historial completo",
              text: "Combinar las tablas Pacientes e Historial para mostrar paciente, fecha, diagnóstico, tratamiento y observaciones.",
            },
          ].map((consulta, index) => (
            <div key={index} className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {consulta.title}
              </h3>
              <p className="leading-relaxed">{consulta.text}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Entrega */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Entrega
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="mb-4 leading-relaxed">
            La entrega deberá contener el archivo:
          </p>

          <div className="p-4 border rounded-lg font-mono mb-5">
            ConsultorioOdontologico.accdb
          </div>

          <ul className="list-disc pl-6 space-y-3">
            <li>Tabla Pacientes.</li>
            <li>Tabla Turnos.</li>
            <li>Tabla Historial.</li>
            <li>Claves primarias correctamente configuradas.</li>
            <li>Claves foráneas.</li>
            <li>Relaciones entre las tablas.</li>
            <li>Integridad referencial.</li>
            <li>Datos de prueba.</li>
            <li>Consultas solicitadas.</li>
          </ul>
        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          Desafío adicional
        </h2>

        <div className="border rounded-xl p-6">
          <p className="leading-relaxed">
            Como ampliación del proyecto, agregar una tabla denominada{" "}
            <strong>Odontologos</strong>.
          </p>

          <p className="mt-4 leading-relaxed">
            La tabla deberá contener:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>IDOdontologo</li>
            <li>Matricula</li>
            <li>Nombre</li>
            <li>Apellido</li>
            <li>Especialidad</li>
            <li>Telefono</li>
          </ul>

          <p className="mt-5 leading-relaxed">
            Luego modificar la tabla <strong>Turnos</strong> para indicar qué
            odontólogo atenderá cada turno y establecer la nueva relación.
          </p>
        </div>
      </section>

      {/* Producto final */}
      <section className="border-2 border-blue-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Producto final
        </h2>

        <p className="leading-relaxed">
          Al finalizar la actividad, el estudiante deberá haber construido una
          pequeña base de datos relacional capaz de representar la información
          básica de un consultorio odontológico.
        </p>

        <p className="mt-4 leading-relaxed">
          El objetivo no es solamente crear las tablas, sino{" "}
          <strong>
            analizar la información, detectar datos repetidos, establecer
            relaciones adecuadas y diseñar una estructura que permita mantener
            los datos organizados y consistentes.
          </strong>
        </p>
      </section>

    
    </main>
  );
}