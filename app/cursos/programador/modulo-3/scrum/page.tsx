import CodeBlock from "@/app/components/CodeBlock";

export default function ScrumPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Scrum y el Desarrollo de Software
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Scrum es una metodología ágil utilizada por equipos de desarrollo de
          software para organizar proyectos de manera flexible y colaborativa.
          Permite dividir el trabajo en pequeñas etapas llamadas sprints,
          facilitando la planificación, el seguimiento y la entrega continua de
          funcionalidades.
        </p>
      </section>

      {/* ¿Qué es Scrum? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Scrum?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Scrum es un marco de trabajo ágil diseñado para gestionar proyectos
          complejos. Se basa en la colaboración constante, la comunicación entre
          los integrantes del equipo y la mejora continua.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En lugar de desarrollar todo el sistema de una sola vez, Scrum divide
          el proyecto en pequeñas entregas funcionales.
        </p>
      </section>

      {/* Relación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación entre Scrum y el desarrollo de software
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El desarrollo de software requiere organización, planificación y
          trabajo en equipo. Scrum ayuda a coordinar todas estas tareas
          permitiendo:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Organizar tareas del proyecto.</li>
          <li>Dividir el trabajo entre los integrantes.</li>
          <li>Controlar el avance del sistema.</li>
          <li>Detectar problemas rápidamente.</li>
          <li>Entregar mejoras de forma continua.</li>
        </ul>

        <p className="leading-relaxed max-w-3xl mt-4">
          Actualmente, muchas empresas de software utilizan Scrum para mejorar
          la productividad y la comunicación dentro del equipo.
        </p>
      </section>

      {/* Roles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Roles principales en Scrum
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Scrum Master
            </h3>

            <p>
              Es la persona encargada de coordinar el equipo y asegurar que se
              respeten las prácticas de Scrum.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Product Owner
            </h3>

            <p>
              Representa al cliente o usuario final y define qué funcionalidades
              debe tener el sistema.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Equipo de Desarrollo
            </h3>

            <p>
              Son los programadores, diseñadores y testers que desarrollan el
              software.
            </p>
          </div>

        </div>
      </section>

      {/* Sprint */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Sprint?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un sprint es un período corto de trabajo donde el equipo desarrolla
          una parte funcional del sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Los sprints suelen durar entre una y cuatro semanas. Al finalizar,
          el equipo presenta los avances realizados.
        </p>
      </section>

      {/* Flujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujo básico de trabajo en Scrum
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Definir tareas y objetivos.</li>
          <li>Planificar el sprint.</li>
          <li>Desarrollar funcionalidades.</li>
          <li>Realizar reuniones diarias.</li>
          <li>Probar el sistema.</li>
          <li>Presentar resultados.</li>
          <li>Analizar mejoras para el siguiente sprint.</li>
        </ol>
      </section>

      {/* Daily */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reuniones diarias (Daily Scrum)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Scrum utiliza reuniones cortas llamadas Daily Scrum para que el equipo
          comparta avances y problemas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Generalmente cada integrante responde tres preguntas:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>¿Qué hice ayer?</li>
          <li>¿Qué voy a hacer hoy?</li>
          <li>¿Tengo algún problema o bloqueo?</li>
        </ul>
      </section>

      {/* Jira */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Scrum y Jira
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Jira es una herramienta muy utilizada para aplicar Scrum en proyectos
          reales. Permite organizar tareas, asignar responsables y controlar el
          avance del sprint.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En Jira se pueden crear:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Historias de usuario.</li>
          <li>Tareas.</li>
          <li>Sprints.</li>
          <li>Tableros Kanban o Scrum.</li>
          <li>Reportes de progreso.</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de tareas en un sprint
        </h2>

        <CodeBlock
          code={`SPRINT 1

- Crear pantalla de login
- Programar registro de usuarios
- Diseñar menú principal
- Probar funcionamiento del sistema
- Corregir errores encontrados`}
        />
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Scrum
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Mejora la organización del equipo.</li>
          <li>Permite entregar avances rápidos.</li>
          <li>Facilita detectar errores.</li>
          <li>Mejora la comunicación.</li>
          <li>Permite adaptarse a cambios del proyecto.</li>
        </ul>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Scrum vs Método tradicional
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-3">Scrum</th>
                <th className="border p-3">Método Tradicional</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Trabajo en pequeños ciclos</td>
                <td className="border p-3">Desarrollo completo de una sola vez</td>
              </tr>

              <tr>
                <td className="border p-3">Flexible ante cambios</td>
                <td className="border p-3">Difícil de modificar</td>
              </tr>

              <tr>
                <td className="border p-3">Entregas continuas</td>
                <td className="border p-3">Entrega final única</td>
              </tr>

              <tr>
                <td className="border p-3">Mayor comunicación</td>
                <td className="border p-3">Menor interacción del equipo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de Scrum en la industria
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Scrum es ampliamente utilizado en empresas tecnológicas debido a que
          mejora la productividad y ayuda a crear software de forma más rápida
          y organizada.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Aprender Scrum permite comprender cómo trabajan los equipos modernos
          de desarrollo de software.
        </p>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá con tus palabras qué es Scrum.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Describí los roles principales de Scrum.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Investigá qué es un sprint y cuánto suele durar.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Creá una lista de tareas para un sprint de una aplicación simple.
          </div>

        </div>
      </section>

    </div>
  );
}