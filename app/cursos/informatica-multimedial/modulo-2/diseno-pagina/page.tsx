export default function DisenoPaginaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diseño de Página
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El diseño de página permite configurar cómo se verá el documento
          al imprimirse o visualizarse en pantalla. En Microsoft Word es posible
          modificar aspectos como los márgenes, la orientación de la página
          y el tamaño del papel.
        </p>
      </section>

      {/* Márgenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Márgenes
        </h2>

        <p className="mb-4 max-w-3xl">
          Los márgenes son los espacios en blanco que se encuentran alrededor
          del contenido del documento.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Margen superior</li>
            <li>Margen inferior</li>
            <li>Margen izquierdo</li>
            <li>Margen derecho</li>
          </ul>

          <p className="mt-4">
            Ajustar los márgenes permite aprovechar mejor el espacio de la página
            o preparar documentos para impresión.
          </p>
        </div>
      </section>

      {/* Orientación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Orientación de la Página
        </h2>

        <p className="mb-4 max-w-3xl">
          La orientación define cómo se posiciona la hoja del documento.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Vertical:</strong> la página es más alta que ancha.</li>
            <li><strong>Horizontal:</strong> la página es más ancha que alta.</li>
          </ul>
        </div>
      </section>

      {/* Tamaño de página */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tamaño de Página
        </h2>

        <p className="mb-4 max-w-3xl">
          Word permite seleccionar diferentes tamaños de papel según el tipo
          de documento o el formato de impresión.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>A4</strong> → tamaño más utilizado en documentos.</li>
            <li><strong>Carta</strong> → común en algunos países.</li>
            <li><strong>Oficio</strong> → usado en documentos administrativos.</li>
          </ul>
        </div>
      </section>

      {/* Cómo acceder */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Cambiar el Diseño de Página
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ir a la pestaña <strong>Diseño</strong> o <strong>Diseño de página</strong>.</li>
            <li>Seleccionar <strong>Márgenes</strong>, <strong>Orientación</strong> o <strong>Tamaño</strong>.</li>
            <li>Elegir la configuración deseada.</li>
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
            Cambia los márgenes del documento a un tamaño más reducido.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Cambia la orientación de la página a horizontal.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Cambia el tamaño de página a Oficio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Vuelve a configurar el documento en tamaño A4 y orientación vertical.
          </div>

        </div>
      </section>

    </div>
  );
}