export default function ImprimirDocumentosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Imprimir Documentos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Imprimir un documento permite obtener una copia física del
          contenido que se creó en la computadora. Microsoft Word incluye
          herramientas para configurar la impresión, elegir la impresora
          y ajustar distintas opciones antes de imprimir.
        </p>
      </section>

      {/* Vista previa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vista Previa de Impresión
        </h2>

        <p className="mb-4 max-w-3xl">
          Antes de imprimir es recomendable revisar cómo se verá el documento
          en papel. La vista previa permite comprobar el diseño de la página,
          los márgenes y el contenido.
        </p>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Hacer clic en <strong>Archivo</strong>.</li>
            <li>Seleccionar <strong>Imprimir</strong>.</li>
            <li>Revisar la vista previa del documento.</li>
          </ol>
        </div>
      </section>

      {/* Opciones de impresión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Opciones de Impresión
        </h2>

        <p className="mb-4 max-w-3xl">
          Word permite configurar diferentes opciones antes de enviar
          el documento a la impresora.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Impresora:</strong> elegir la impresora disponible.</li>
            <li><strong>Número de copias:</strong> seleccionar cuántas copias imprimir.</li>
            <li><strong>Páginas:</strong> imprimir todas las páginas o solo algunas.</li>
            <li><strong>Orientación:</strong> vertical u horizontal.</li>
            <li><strong>Tamaño de papel:</strong> A4, Carta, Oficio.</li>
          </ul>
        </div>
      </section>

      {/* Imprimir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Imprimir un Documento
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Abrir el documento en Word.</li>
            <li>Hacer clic en <strong>Archivo</strong>.</li>
            <li>Seleccionar <strong>Imprimir</strong>.</li>
            <li>Configurar las opciones necesarias.</li>
            <li>Hacer clic en <strong>Imprimir</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Atajo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Atajo de Teclado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para abrir rápidamente la ventana de impresión se puede utilizar
          el siguiente atajo de teclado:
        </p>

        <div className="border p-6 rounded-xl mt-4">
          <p className="text-lg">
            <strong>Ctrl + P</strong>
          </p>
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
            Abre un documento en Word y accede a la vista previa de impresión.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Cambia la orientación de la página antes de imprimir.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Selecciona imprimir solo una página específica del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Utiliza el atajo Ctrl + P para abrir la ventana de impresión.
          </div>

        </div>
      </section>

    </div>
  );
}