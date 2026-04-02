import CodeBlock from "@/app/components/CodeBlock";

export default function DocumentosRequerimientosPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Documentos de Requerimientos
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Los documentos de requerimientos son fundamentales en el desarrollo
          de software. Permiten definir de manera clara qué debe hacer un sistema
          antes de comenzar a programar, evitando errores, malentendidos y retrabajo.
        </p>

        <p className="max-w-3xl leading-relaxed mt-4">
          Son la base de cualquier proyecto, ya que sirven como guía tanto para
          desarrolladores como para clientes.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un requerimiento?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Un requerimiento es una necesidad o condición que el sistema debe cumplir.
          Puede describir una funcionalidad específica o una característica del sistema.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de requerimientos
        </h2>

        <div className="max-w-3xl space-y-4">
          <p>
            <strong>Requerimientos funcionales:</strong> describen lo que el sistema debe hacer.
          </p>

          <ul className="list-disc list-inside">
            <li>Realizar cálculos</li>
            <li>Mostrar resultados</li>
            <li>Permitir interacción del usuario</li>
          </ul>

          <p className="mt-4">
            <strong>Requerimientos no funcionales:</strong> describen cómo debe comportarse el sistema.
          </p>

          <ul className="list-disc list-inside">
            <li>Velocidad de respuesta</li>
            <li>Usabilidad</li>
            <li>Compatibilidad con dispositivos</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Aplicación de Noticas
        </h2>

        <p className="max-w-3xl mb-6">
          A continuación se muestra un ejemplo simple de un documento de requerimientos
          para una aplicación de Noticas.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
       <pre>
{`Sistema: Plataforma de Noticias online

Requerimientos funcionales:
- El usuario puede registrarse
- El usuario puede iniciar sesión
- El usuario puede acceder a información

Requerimientos no funcionales:
- El sistema debe cargar en menos de 3 segundos
- Debe ser responsive (adaptable a celulares)
- Debe garantizar la seguridad de los datos`}
        </pre>
      </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué sirven?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Evitan errores en el desarrollo</li>
          <li>Definen el alcance del proyecto</li>
          <li>Facilitan la comunicación con el cliente</li>
          <li>Sirven como guía para programadores</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Ser claro y específico</li>
          <li>Evitar ambigüedades</li>
          <li>Usar lenguaje simple</li>
          <li>Validar con el cliente</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explica con tus palabras qué es un requerimiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribe 3 requerimientos funcionales para una calculadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Escribe 3 requerimientos no funcionales para esa misma aplicación.
          </div>

        </div>
      </section>

    </div>
  );
}