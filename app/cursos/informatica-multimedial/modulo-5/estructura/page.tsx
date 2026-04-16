export default function EstructuraInformacionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Estructura de la Información
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La estructura de la información es la forma en que se organiza el contenido
          para que sea claro, comprensible y fácil de leer. Permite ordenar ideas y
          facilitar la comunicación.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la estructura de la información?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es la organización del contenido mediante títulos, subtítulos, párrafos
          y jerarquías, que ayudan a presentar la información de manera lógica y ordenada.
        </p>
      </section>

      {/* Elementos principales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos principales
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Títulos:</strong> indican el tema principal.</li>
          <li><strong>Subtítulos:</strong> dividen el contenido en secciones.</li>
          <li><strong>Párrafos:</strong> desarrollan las ideas.</li>
          <li><strong>Listas:</strong> organizan información de forma clara.</li>
        </ul>
      </section>

      {/* Jerarquía */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Jerarquía de la información
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La jerarquía organiza los contenidos según su importancia, permitiendo
          que el lector identifique rápidamente lo más relevante.
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Información principal:</strong> ideas centrales.</li>
          <li><strong>Información secundaria:</strong> detalles o explicaciones.</li>
          <li><strong>Información complementaria:</strong> ejemplos o datos adicionales.</li>
        </ul>
      </section>

      {/* Organización del contenido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización del contenido
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Para estructurar correctamente la información, es importante seguir un orden lógico.
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Introducción al tema.</li>
          <li>Desarrollo de ideas principales.</li>
          <li>Uso de ejemplos.</li>
          <li>Cierre o conclusión.</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo simple
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl space-y-3">
          <p><strong>Título:</strong> Alimentación saludable</p>
          <p><strong>Subtítulo:</strong> Importancia de una buena dieta</p>
          <p>
            <strong>Párrafo:</strong> Una alimentación equilibrada es fundamental
            para mantener una buena salud y prevenir enfermedades.
          </p>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una buena estructura facilita la comprensión, mejora la presentación
          del contenido y permite que el lector acceda rápidamente a la información.
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
            Elegí un tema y organizalo usando títulos y subtítulos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribí un texto aplicando una jerarquía clara de información.
          </div>

        </div>
      </section>

    </div>
  );
}