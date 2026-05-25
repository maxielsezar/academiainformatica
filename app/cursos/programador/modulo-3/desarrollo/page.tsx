import CodeBlock from "@/app/components/CodeBlock";

export default function DesarrolloSoftwarePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Etapas del Desarrollo de Software
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El desarrollo de software es un proceso organizado que permite crear
          aplicaciones de forma estructurada y eficiente. Para lograr proyectos
          exitosos, los equipos de trabajo siguen distintas etapas que ayudan a
          planificar, desarrollar, probar y mantener un sistema.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el ciclo de desarrollo de software?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El ciclo de desarrollo de software es el conjunto de pasos que se
          siguen para crear un programa o sistema informático. Cada etapa tiene
          un objetivo específico y ayuda a mantener el proyecto organizado.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Estas etapas permiten trabajar de forma colaborativa, detectar errores
          y entregar productos de mejor calidad.
        </p>
      </section>

      {/* Planificación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. Planificación del proyecto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En esta etapa se definen los objetivos del sistema, las necesidades
          del cliente y el alcance del proyecto.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Definir qué problema resolverá el software.</li>
          <li>Organizar tiempos y tareas.</li>
          <li>Asignar roles al equipo.</li>
          <li>Seleccionar herramientas y tecnologías.</li>
        </ul>
      </section>

      {/* Análisis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Análisis de requerimientos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En esta fase se recopila toda la información necesaria para comprender
          cómo debe funcionar el sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Los desarrolladores trabajan junto al cliente o usuarios para definir:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Funciones del sistema.</li>
          <li>Reglas de negocio.</li>
          <li>Necesidades de los usuarios.</li>
          <li>Características principales.</li>
        </ul>
      </section>

      {/* Diseño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Diseño del sistema
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Durante el diseño se organiza la estructura del software antes de
          comenzar a programar.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Se pueden crear:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Diagramas.</li>
          <li>Interfaces visuales.</li>
          <li>Modelos de base de datos.</li>
          <li>Estructura de clases y módulos.</li>
        </ul>
      </section>

      {/* Desarrollo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Desarrollo o programación
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          En esta etapa los programadores escriben el código del sistema
          utilizando distintos lenguajes y herramientas.
        </p>

        <CodeBlock
          code={`public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Bienvenidos al desarrollo de software");
    }
}`}
        />
      </section>

      {/* Testing */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Pruebas del sistema
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las pruebas permiten verificar que el software funcione correctamente
          y detectar errores antes de su lanzamiento.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Algunos tipos de pruebas son:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Pruebas funcionales.</li>
          <li>Pruebas de rendimiento.</li>
          <li>Pruebas de seguridad.</li>
          <li>Pruebas de interfaz.</li>
        </ul>
      </section>

      {/* Implementación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Implementación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez finalizadas las pruebas, el sistema se instala y se pone en
          funcionamiento para los usuarios.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Esta etapa puede incluir:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Configuración de servidores.</li>
          <li>Publicación de aplicaciones.</li>
          <li>Capacitación de usuarios.</li>
          <li>Migración de datos.</li>
        </ul>
      </section>

      {/* Mantenimiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Mantenimiento y mejoras
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Después de publicado el sistema, los desarrolladores continúan
          realizando mejoras, corrigiendo errores y agregando nuevas funciones.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El mantenimiento es fundamental para mantener el software actualizado
          y seguro.
        </p>
      </section>

      {/* Trabajo en equipo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del trabajo en equipo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El desarrollo de software generalmente se realiza en equipos donde
          cada integrante cumple un rol específico.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Programadores.</li>
          <li>Diseñadores.</li>
          <li>Testers.</li>
          <li>Analistas.</li>
          <li>Project Managers.</li>
        </ul>

        <p className="leading-relaxed max-w-3xl mt-4">
          Herramientas como Git, GitHub y Jira ayudan a organizar el trabajo y
          mejorar la comunicación entre los integrantes.
        </p>
      </section>

      {/* Metodologías */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Metodologías de desarrollo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen distintas metodologías para organizar proyectos de software.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>
            <strong>Cascada:</strong> cada etapa se completa antes de pasar a la siguiente.
          </li>
          <li>
            <strong>Ágil:</strong> desarrollo iterativo y flexible.
          </li>
          <li>
            <strong>Scrum:</strong> trabajo en pequeños ciclos llamados sprints.
          </li>
        </ul>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen del proceso
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Planificación.</li>
          <li>Análisis de requerimientos.</li>
          <li>Diseño del sistema.</li>
          <li>Programación.</li>
          <li>Pruebas.</li>
          <li>Implementación.</li>
          <li>Mantenimiento.</li>
        </ol>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá con tus palabras qué es el ciclo de desarrollo de software.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Enumerá las etapas del desarrollo de software.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Explicá la importancia de las pruebas en un sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Investigá qué metodología utilizan empresas modernas de software.
          </div>

        </div>
      </section>

    </div>
  );
}