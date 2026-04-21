export default function FormatoCondicionalExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Formato Condicional en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El formato condicional permite aplicar estilos automáticamente a las celdas
          según su contenido. Es una herramienta muy útil para destacar información
          importante, como valores altos, bajos o resultados aprobados y desaprobados.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es el formato condicional?
        </h2>

        <p className="max-w-3xl">
          Es una herramienta que cambia el aspecto de una celda (color, texto,
          fondo, etc.) dependiendo de una condición. Por ejemplo, pintar de rojo
          las notas bajas o de verde las aprobadas.
        </p>
      </section>

      {/* Para qué sirve */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirve?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Destacar valores importantes.</li>
          <li>Identificar errores o datos bajos.</li>
          <li>Visualizar rápidamente resultados.</li>
          <li>Mejorar la presentación de la información.</li>
        </ul>
      </section>

      {/* Cómo aplicarlo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Cómo aplicar formato condicional?
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar las celdas.</li>
            <li>Ir a la pestaña <strong>Inicio</strong>.</li>
            <li>Hacer clic en <strong>Formato condicional</strong>.</li>
            <li>Elegir una regla (mayor que, menor que, etc.).</li>
            <li>Seleccionar el formato (color, texto, etc.).</li>
          </ol>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplo
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Puedes configurar que todas las notas menores a 6 se muestren en rojo
            y las mayores o iguales a 6 en verde.
          </p>
        </div>
      </section>

      {/* Actividad principal */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividad Práctica: Planilla de Notas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl space-y-2">
            <p className="font-semibold">Consigna</p>
            Crea una planilla de notas de una clase con los siguientes datos:
            
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nombre del alumno</li>
              <li>Nota 1</li>
              <li>Nota 2</li>
              <li>Nota 3</li>
              <li>Promedio (usar fórmula)</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl space-y-2">
            <p className="font-semibold">Formato Condicional</p>
            Aplica las siguientes reglas:
            
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Notas menores a 6 → color rojo.</li>
              <li>Notas iguales o mayores a 6 → color verde.</li>
              <li>Opcional: destacar el promedio más alto.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Identificar fácilmente qué alumnos aprobaron y cuáles no, utilizando formato automático.
          </div>

        </div>
      </section>

    </div>
  );
}