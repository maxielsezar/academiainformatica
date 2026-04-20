export default function InterfazExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Interfaz de la Planilla de Cálculo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La interfaz de una planilla de cálculo está compuesta por distintos
          elementos que permiten ingresar datos, realizar cálculos y organizar
          la información. Conocer cada una de sus partes es fundamental para
          trabajar de manera eficiente en Excel.
        </p>
      </section>

      {/* Partes principales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Partes principales de la interfaz
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Barra de título: muestra el nombre del archivo.</li>
          <li>Cinta de opciones: contiene las herramientas (Inicio, Insertar, etc.).</li>
          <li>Barra de fórmulas: permite ver y editar el contenido de una celda.</li>
          <li>Hoja de cálculo: espacio donde se trabaja con los datos.</li>
          <li>Pestañas de hojas: permiten cambiar entre distintas hojas.</li>
        </ul>
      </section>

      {/* Filas y columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Filas y Columnas
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            La información en Excel se organiza en una grilla formada por filas y columnas:
          </p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Filas: se identifican con números (1, 2, 3...).</li>
            <li>Columnas: se identifican con letras (A, B, C...).</li>
          </ul>
        </div>
      </section>

      {/* Celdas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es una celda?
        </h2>

        <p className="max-w-3xl mb-4">
          Una celda es la intersección entre una fila y una columna. Cada celda
          tiene una dirección única formada por la letra de la columna y el número
          de la fila.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Ejemplos de celdas:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>A1 → Columna A, Fila 1</li>
            <li>B3 → Columna B, Fila 3</li>
            <li>C5 → Columna C, Fila 5</li>
          </ul>
        </div>
      </section>

      {/* Celda activa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Celda Activa
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La celda activa es la celda seleccionada en ese momento. Se distingue
          porque tiene un borde resaltado. Todo lo que escribas se guardará en
          esa celda.
        </p>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Identifica en tu Excel la barra de fórmulas, la cinta de opciones y las pestañas de hojas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Ubica las siguientes celdas: A1, B5, C10 y D3.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Escribe tu nombre en la celda A1 y tu edad en la celda B1.
          </div>

        </div>
      </section>

    </div>
  );
}