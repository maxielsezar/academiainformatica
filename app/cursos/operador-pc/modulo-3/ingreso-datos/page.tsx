export default function IngresoDatosExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Ingreso y Edición de Datos en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En una planilla de cálculo, los datos se ingresan dentro de las celdas.
          Aprender a escribir, modificar y eliminar información es fundamental
          para trabajar correctamente en Excel.
        </p>
      </section>

      {/* Tipos de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Tipos de Datos
        </h2>

        <p className="mb-4 max-w-3xl">
          En Excel se pueden ingresar distintos tipos de datos:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Texto: nombres, palabras o descripciones.</li>
          <li>Números: cantidades, precios, edades, etc.</li>
          <li>Fechas: días, meses y años.</li>
        </ul>
      </section>

      {/* Cómo ingresar datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Cómo ingresar datos en una celda?
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar la celda (por ejemplo, A1).</li>
            <li>Escribir el dato con el teclado.</li>
            <li>Presionar Enter para confirmar.</li>
          </ol>
        </div>
      </section>

      {/* Editar datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Editar Datos
        </h2>

        <p className="max-w-3xl mb-4">
          Si necesitas modificar un dato ya ingresado, puedes hacerlo de dos maneras:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Haciendo doble clic sobre la celda.</li>
          <li>Seleccionando la celda y editando desde la barra de fórmulas.</li>
        </ul>
      </section>

      {/* Borrar datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Borrar Datos
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Para eliminar el contenido de una celda:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Seleccionar la celda.</li>
            <li>Presionar la tecla Delete (Supr).</li>
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
            Crea una tabla con los siguientes datos:
            <br />
            Nombre | Edad | Ciudad
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Completa la tabla con al menos 3 personas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Modifica uno de los datos y elimina otro utilizando la tecla Suprimir.
          </div>

        </div>
      </section>

    </div>
  );
}