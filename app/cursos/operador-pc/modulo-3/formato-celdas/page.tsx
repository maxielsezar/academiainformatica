export default function FormatoCeldasExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Formato de Celdas en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El formato de celdas permite mejorar la apariencia de una planilla de cálculo.
          Gracias a estas herramientas, es posible resaltar información, organizar los
          datos y lograr que la tabla sea más clara y profesional.
        </p>
      </section>

      {/* Qué es el formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es el formato de celdas?
        </h2>

        <p className="max-w-3xl">
          El formato de celdas consiste en modificar la apariencia del contenido
          sin cambiar los datos. Esto incluye colores, tamaños de letra, bordes
          y alineación del texto.
        </p>
      </section>

      {/* Herramientas de formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Herramientas de Formato
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Cambiar el tipo y tamaño de letra.</li>
          <li>Aplicar negrita, cursiva o subrayado.</li>
          <li>Cambiar el color de texto.</li>
          <li>Agregar color de fondo a las celdas.</li>
          <li>Aplicar bordes a las tablas.</li>
        </ul>
      </section>

      {/* Alineación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Alineación del Contenido
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>El contenido de las celdas puede alinearse de diferentes maneras:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Alineación a la izquierda.</li>
            <li>Centrado.</li>
            <li>Alineación a la derecha.</li>
          </ul>
        </div>
      </section>

      {/* Combinar celdas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Combinar Celdas
        </h2>

        <p className="max-w-3xl mb-4">
          La opción de combinar celdas permite unir varias celdas en una sola.
          Es muy útil para crear títulos o encabezados en una tabla.
        </p>

        <div className="border p-6 rounded-xl">
          <p>
            Ejemplo: combinar A1, B1 y C1 para crear un título centrado.
          </p>
        </div>
      </section>

      {/* Uso práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Uso en la Vida Real
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>El formato se utiliza para:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Destacar títulos.</li>
            <li>Organizar información.</li>
            <li>Mejorar la presentación de tablas.</li>
            <li>Hacer más fácil la lectura de datos.</li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crea una tabla y aplica negrita a los títulos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Cambia el color de fondo de las celdas del encabezado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Aplica bordes a toda la tabla y centra el contenido.
          </div>

        </div>
      </section>

    </div>
  );
}