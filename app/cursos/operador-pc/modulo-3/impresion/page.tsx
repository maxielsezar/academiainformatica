export default function ImpresionExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Preparación e Impresión de Planillas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Antes de imprimir una planilla de Excel, es importante organizar y
          ajustar los datos para que se vean correctamente en papel. Excel
          ofrece herramientas para configurar el tamaño, la orientación y
          otros elementos que mejoran la presentación final.
        </p>
      </section>

      {/* Preparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Preparar la Planilla
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Antes de imprimir, es recomendable:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Revisar que los datos estén completos.</li>
            <li>Aplicar formato (bordes, colores, títulos).</li>
            <li>Ajustar el ancho de columnas y alto de filas.</li>
            <li>Eliminar datos innecesarios.</li>
            <li>Verificar que los títulos sean claros.</li>
          </ul>
        </div>
      </section>

      {/* Configuración de página */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Configuración de Página
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Orientación: vertical u horizontal.</li>
          <li>Tamaño del papel (A4, Carta, etc.).</li>
          <li>Márgenes de la hoja.</li>
          <li>Ajustar la hoja para que entre en una página.</li>
        </ul>
      </section>

      {/* Vista previa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Vista Previa de Impresión
        </h2>

        <p className="max-w-3xl">
          La vista previa permite ver cómo quedará la planilla antes de imprimir.
          Se accede desde Archivo → Imprimir. Es importante revisar que todo el
          contenido se visualice correctamente.
        </p>
      </section>

      {/* Saltos de página */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Saltos de Página
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Los saltos de página permiten dividir la planilla en distintas hojas
            al momento de imprimir.
          </p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Insertar saltos de página manualmente.</li>
            <li>Evitar que una tabla se corte incorrectamente.</li>
            <li>Organizar mejor la impresión en varias hojas.</li>
          </ul>
        </div>
      </section>

      {/* Encabezado y pie */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Encabezado y Pie de Página
        </h2>

        <p className="max-w-3xl mb-4">
          Se pueden agregar datos de referencia en la parte superior e inferior
          de la hoja:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Título del documento.</li>
          <li>Nombre del autor.</li>
          <li>Fecha.</li>
          <li>Número de página.</li>
        </ul>
      </section>

      {/* Impresión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Imprimir la Planilla
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a Archivo.</li>
            <li>Seleccionar Imprimir.</li>
            <li>Elegir la impresora.</li>
            <li>Configurar opciones (páginas, copias, etc.).</li>
            <li>Hacer clic en Imprimir.</li>
          </ol>
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
            Prepara una tabla aplicando formato y ajustando el tamaño de las columnas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Configura la hoja en orientación horizontal y tamaño A4.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Agrega un encabezado con tu nombre y una fecha en el pie de página.
          </div>

        </div>
      </section>

    </div>
  );
}