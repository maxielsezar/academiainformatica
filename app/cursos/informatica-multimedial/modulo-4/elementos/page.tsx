export default function ElementosVisualesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Elementos visuales de orientación
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En los entornos digitales, existen distintos elementos visuales que
          ayudan al usuario a comprender la información, navegar correctamente
          y realizar acciones dentro de una aplicación o página web.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los elementos visuales?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Son recursos gráficos que tienen como objetivo guiar al usuario,
          facilitar la interacción y mejorar la experiencia dentro de un
          sistema digital. Permiten interpretar rápidamente qué hacer o cómo
          moverse dentro de una interfaz.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de elementos visuales
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Íconos:</strong> representan acciones o funciones (ej: guardar, eliminar).</li>
          <li><strong>Textos instructivos:</strong> indican qué hacer o cómo usar una herramienta.</li>
          <li><strong>Carteles de advertencia:</strong> alertan sobre errores o riesgos.</li>
          <li><strong>Señales de orientación:</strong> ayudan a navegar dentro de una aplicación o sitio.</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia en la experiencia del usuario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Estos elementos son fundamentales para que el usuario pueda utilizar
          correctamente un sistema sin dificultad. Una buena organización
          visual permite evitar errores, mejorar la navegación y hacer que
          la interacción sea más intuitiva.
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
            Observá una aplicación o página web e identificá al menos
            cinco íconos diferentes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Explicá qué función cumple cada uno de los íconos que encontraste.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificá textos instructivos o mensajes de advertencia y
            explicá por qué son importantes.
          </div>

        </div>
      </section>

    </div>
  );
}