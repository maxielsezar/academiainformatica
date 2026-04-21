export default function EdicionExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Edición de la Planilla: Filas, Columnas y Fórmulas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En Excel es posible modificar la estructura de una planilla insertando
          o eliminando filas y columnas. Estas acciones afectan directamente a los
          datos y también a las fórmulas, por lo que es importante entender cómo
          funcionan para evitar errores.
        </p>
      </section>

      {/* Edición de la planilla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Edición de la Planilla
        </h2>

        <p className="max-w-3xl">
          Editar una planilla implica modificar su contenido o su estructura.
          Esto incluye agregar, eliminar o reorganizar datos dentro de la hoja.
        </p>
      </section>

      {/* Insertar filas y columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Insertar Filas y Columnas
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <p>Para insertar una fila o columna:</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar la fila o columna.</li>
            <li>Hacer clic derecho.</li>
            <li>Elegir la opción <strong>Insertar</strong>.</li>
          </ol>

          <p className="mt-2">
            La nueva fila o columna se agregará antes de la seleccionada.
          </p>
        </div>
      </section>

      {/* Eliminar filas y columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Eliminar Filas y Columnas
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <p>Para eliminar una fila o columna:</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar la fila o columna.</li>
            <li>Hacer clic derecho.</li>
            <li>Elegir la opción <strong>Eliminar</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Efecto en fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Efecto en las Fórmulas
        </h2>

        <p className="max-w-3xl mb-4">
          Una de las ventajas de Excel es que las fórmulas se actualizan automáticamente
          cuando se insertan o eliminan filas y columnas.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <ul className="list-disc list-inside space-y-2">
            <li>Si se agrega una fila dentro de un rango, la fórmula se ajusta automáticamente.</li>
            <li>Si se elimina una celda incluida en una fórmula, puede aparecer un error.</li>
            <li>Excel intenta mantener las referencias correctas de las celdas.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplo
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Si tienes la fórmula =SUMA(A1:A5) y agregas una nueva fila entre A1 y A5,
            Excel actualizará automáticamente el rango para incluir el nuevo valor.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Revisar las fórmulas después de eliminar datos.</li>
          <li>Evitar borrar celdas que formen parte de cálculos importantes.</li>
          <li>Utilizar rangos completos en lugar de celdas individuales.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crea una tabla con 5 números y aplica la función SUMA.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Inserta una nueva fila dentro de la tabla y observa qué sucede con la fórmula.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Elimina una fila y analiza si la fórmula sigue funcionando correctamente.
          </div>

        </div>
      </section>

    </div>
  );
}