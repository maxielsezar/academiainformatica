export default function EncabezadoPiePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Encabezado y Pie de Página
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El encabezado y el pie de página son áreas especiales del documento
          que aparecen en la parte superior e inferior de cada hoja. Se utilizan
          para agregar información que se repite en todas las páginas, como
          títulos, números de página, fechas o nombres de documentos.
        </p>
      </section>

      {/* Encabezado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Encabezado
        </h2>

        <p className="mb-4 max-w-3xl">
          El encabezado se encuentra en la parte superior del documento.
          Allí se pueden colocar datos importantes que aparecerán en todas
          las páginas.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">Ejemplos de contenido en el encabezado:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Título del documento</li>
            <li>Nombre de la institución</li>
            <li>Nombre del autor</li>
            <li>Fecha del documento</li>
          </ul>
        </div>
      </section>

      {/* Pie de página */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pie de Página
        </h2>

        <p className="mb-4 max-w-3xl">
          El pie de página aparece en la parte inferior de cada hoja.
          Se utiliza principalmente para agregar numeración de páginas
          u otra información adicional.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">Ejemplos de contenido en el pie de página:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Número de página</li>
            <li>Nombre del documento</li>
            <li>Información de contacto</li>
            <li>Derechos de autor</li>
          </ul>
        </div>
      </section>

      {/* Cómo insertar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Insertar un Encabezado o Pie de Página
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a la pestaña <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Encabezado</strong> o <strong>Pie de página</strong>.</li>
            <li>Elegir un diseño predeterminado.</li>
            <li>Escribir la información que se desea mostrar.</li>
          </ol>
        </div>
      </section>

      {/* Numeración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Insertar Número de Página
        </h2>

        <p className="mb-4 max-w-3xl">
          Word permite agregar números de página automáticamente para
          organizar documentos largos.
        </p>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Número de página</strong>.</li>
            <li>Elegir la posición (arriba o abajo).</li>
            <li>Seleccionar el estilo de numeración.</li>
          </ol>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Inserta un encabezado con el título del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Agrega tu nombre en el encabezado del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Inserta números de página en el pie del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Modifica el estilo de numeración de las páginas.
          </div>

        </div>
      </section>

    </div>
  );
}