import CodeBlock from "@/app/components/CodeBlock";

export default function JiraPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a Jira
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Jira es una herramienta de gestión de proyectos utilizada por equipos
          de desarrollo de software para organizar tareas, planificar proyectos
          y realizar seguimiento del trabajo colaborativo.
        </p>
      </section>

      {/* ¿Qué es Jira? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Jira?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Jira es una plataforma desarrollada por Atlassian que permite crear,
          organizar y administrar tareas dentro de un proyecto.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Es ampliamente utilizada en metodologías ágiles como Scrum y Kanban,
          ayudando a los equipos a visualizar el avance del desarrollo de
          software.
        </p>
      </section>

      {/* Para qué sirve */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué sirve Jira?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Organizar tareas y proyectos.</li>
          <li>Asignar trabajo a los integrantes del equipo.</li>
          <li>Controlar el avance del proyecto.</li>
          <li>Gestionar sprints en Scrum.</li>
          <li>Detectar tareas pendientes o bloqueadas.</li>
          <li>Mejorar la comunicación del equipo.</li>
        </ul>
      </section>

      {/* Conceptos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conceptos básicos de Jira
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Proyecto
            </h3>

            <p>
              Es el espacio donde se organizan todas las tareas relacionadas con
              un sistema o aplicación.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Issue o tarea
            </h3>

            <p>
              Representa una actividad dentro del proyecto, por ejemplo:
              crear login, corregir errores o diseñar una pantalla.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Sprint
            </h3>

            <p>
              Es un período de trabajo donde el equipo desarrolla un conjunto
              de tareas específicas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Backlog
            </h3>

            <p>
              Es la lista de tareas pendientes del proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* Crear proyecto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un proyecto en Jira
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Ingresar a Jira.</li>
          <li>Seleccionar “Create Project”.</li>
          <li>Elegir una plantilla Scrum o Kanban.</li>
          <li>Asignar nombre al proyecto.</li>
          <li>Crear el tablero de trabajo.</li>
        </ol>
      </section>

      {/* Crear tareas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear tareas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las tareas representan el trabajo que debe realizar el equipo.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una tarea suele incluir:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Título.</li>
          <li>Descripción.</li>
          <li>Responsable.</li>
          <li>Prioridad.</li>
          <li>Fecha límite.</li>
          <li>Estado de avance.</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de tareas en Jira
        </h2>

        <CodeBlock
          code={`PROYECTO: Sistema de Biblioteca

TAREAS:
- Crear pantalla de login
- Programar registro de libros
- Diseñar menú principal
- Corregir error en préstamos
- Probar sistema`}
        />
      </section>

      {/* Estados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estados de una tarea
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las tareas avanzan por diferentes estados a medida que se trabaja en ellas.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-3">Estado</th>
                <th className="border p-3">Descripción</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">To Do</td>
                <td className="border p-3">Tarea pendiente</td>
              </tr>

              <tr>
                <td className="border p-3">In Progress</td>
                <td className="border p-3">Tarea en desarrollo</td>
              </tr>

              <tr>
                <td className="border p-3">Done</td>
                <td className="border p-3">Tarea finalizada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Scrum */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Jira y Scrum
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Jira permite aplicar Scrum organizando tareas dentro de sprints.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El equipo puede:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Planificar tareas del sprint.</li>
          <li>Asignar responsables.</li>
          <li>Controlar el avance diario.</li>
          <li>Visualizar tareas completadas.</li>
        </ul>
      </section>

      {/* Trabajo colaborativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Trabajo colaborativo en Jira
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Jira facilita el trabajo en equipo porque todos los integrantes pueden
          ver el estado del proyecto en tiempo real.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Esto ayuda a:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Evitar tareas duplicadas.</li>
          <li>Mejorar la comunicación.</li>
          <li>Organizar responsabilidades.</li>
          <li>Detectar bloqueos rápidamente.</li>
        </ul>
      </section>

      {/* Flujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujo básico de trabajo en Jira
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Crear el proyecto.</li>
          <li>Agregar tareas al backlog.</li>
          <li>Planificar el sprint.</li>
          <li>Asignar tareas a los integrantes.</li>
          <li>Actualizar el estado de las tareas.</li>
          <li>Finalizar el sprint.</li>
        </ol>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas utilizando Jira
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear tareas claras y descriptivas.</li>
          <li>Actualizar estados constantemente.</li>
          <li>Asignar responsables a cada tarea.</li>
          <li>Dividir tareas grandes en pequeñas actividades.</li>
          <li>Utilizar comentarios para comunicarse.</li>
        </ul>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Jira
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Mejora la organización del proyecto.</li>
          <li>Facilita el seguimiento de tareas.</li>
          <li>Permite trabajar en equipo.</li>
          <li>Ayuda a gestionar proyectos ágiles.</li>
          <li>Visualiza el progreso del sistema.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá con tus palabras qué es Jira.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Investigá la diferencia entre Scrum y Kanban.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá una lista de tareas para una aplicación simple.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Describí el flujo de trabajo básico en Jira.
          </div>

        </div>
      </section>

    </div>
  );
}