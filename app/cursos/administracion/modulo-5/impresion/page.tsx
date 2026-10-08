export default function ImpresionPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Impresión y Presentación
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La impresión y presentación de una planilla de cálculo permite
          preparar la información para ser visualizada, compartida o
          presentada de manera clara y profesional. Antes de imprimir un
          documento es importante revisar su contenido, configurar la página
          y comprobar cómo se distribuirán los datos.
        </p>
      </section>

      {/* Preparar la planilla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Preparar una planilla para imprimir
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una planilla puede verse correctamente en pantalla pero quedar
          desorganizada al momento de imprimirla. Por este motivo es necesario
          revisar su estructura y configurar correctamente la presentación.
        </p>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Revisar los datos y eliminar información innecesaria.</li>
          <li>Comprobar que las fórmulas y resultados sean correctos.</li>
          <li>Ajustar el tamaño de las columnas y filas.</li>
          <li>Aplicar formatos adecuados.</li>
          <li>Configurar el área de impresión.</li>
          <li>Seleccionar la orientación de la página.</li>
          <li>Configurar los márgenes.</li>
          <li>Utilizar la vista previa antes de imprimir.</li>
        </ol>
      </section>

      {/* Área de impresión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Área de impresión
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El área de impresión determina qué parte de una hoja se enviará a
          la impresora. Esta herramienta resulta útil cuando una hoja contiene
          información adicional que no se desea imprimir.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Una hoja puede contener una tabla de ventas y, al costado, cálculos
            auxiliares. Si solamente se desea imprimir la tabla principal,
            se puede seleccionar ese rango como área de impresión.
          </p>
        </div>
      </section>

      {/* Orientación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Orientación de la página
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La orientación determina cómo se distribuye la información sobre la
          página.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Vertical
            </h3>

            <p className="leading-relaxed">
              Es adecuada para tablas con pocas columnas y documentos que
              requieren mayor espacio vertical.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Horizontal
            </h3>

            <p className="leading-relaxed">
              Es recomendable para tablas con muchas columnas o información
              que necesita mayor espacio en sentido horizontal.
            </p>
          </div>

        </div>
      </section>

      {/* Márgenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Márgenes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los márgenes determinan el espacio entre el contenido y los bordes
          de la página. Una configuración adecuada permite aprovechar el
          espacio disponible sin que la información quede demasiado cerca de
          los bordes.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-6">
          <li>Margen superior.</li>
          <li>Margen inferior.</li>
          <li>Margen izquierdo.</li>
          <li>Margen derecho.</li>
          <li>Espacio destinado al encabezado.</li>
          <li>Espacio destinado al pie de página.</li>
        </ul>
      </section>

      {/* Tamaño de papel */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tamaño de papel
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El tamaño de papel debe seleccionarse de acuerdo con el soporte
          utilizado para la impresión. En trabajos administrativos es
          frecuente utilizar el formato A4, aunque el programa permite
          seleccionar otros tamaños.
        </p>
      </section>

      {/* Escala */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Escala y ajuste de la página
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando una tabla es demasiado grande para una página, se puede
          utilizar la escala para reducir su tamaño y conseguir que la
          información se adapte al espacio disponible.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Recomendación
          </h3>

          <p className="leading-relaxed">
            No conviene reducir demasiado una tabla solamente para que entre
            en una página. Si el contenido queda demasiado pequeño, puede ser
            preferible utilizar orientación horizontal o distribuir la
            información en varias páginas.
          </p>
        </div>
      </section>

      {/* Saltos de página */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Saltos de página
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los saltos de página permiten determinar dónde termina una página y
          comienza la siguiente. Son útiles cuando una tabla ocupa varias
          páginas y se necesita controlar su distribución.
        </p>
      </section>

      {/* Encabezado y pie */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Encabezados y pies de página
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los encabezados y pies de página permiten incorporar información
          adicional que puede aparecer en las páginas impresas.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Encabezado
            </h3>

            <p className="leading-relaxed">
              Puede contener el nombre de la empresa, el título del informe,
              la fecha u otra información identificativa.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Pie de página
            </h3>

            <p className="leading-relaxed">
              Puede incluir números de página, fecha de impresión o
              información adicional del documento.
            </p>
          </div>

        </div>
      </section>

      {/* Repetir encabezados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Repetir encabezados en cada página
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando una tabla ocupa varias páginas, repetir la fila de encabezados
          permite identificar las columnas en cada página y facilita la
          lectura del documento impreso.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Por ejemplo, una tabla de ventas puede tener las columnas
            Fecha, Cliente, Producto, Cantidad e Importe. Si la tabla ocupa
            cinco páginas, los encabezados pueden repetirse para que cada
            página pueda interpretarse correctamente.
          </p>
        </div>
      </section>

      {/* Vista previa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vista previa de impresión
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La vista previa permite comprobar cómo quedará el documento antes
          de imprimirlo. Es una herramienta fundamental para detectar errores
          de distribución.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-6">
          <li>Verificar que no falten columnas.</li>
          <li>Comprobar que no existan páginas innecesarias.</li>
          <li>Revisar los saltos de página.</li>
          <li>Comprobar que los textos sean legibles.</li>
          <li>Revisar encabezados y pies de página.</li>
          <li>Comprobar la orientación.</li>
          <li>Verificar los márgenes.</li>
        </ul>
      </section>

      {/* Presentación profesional */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Presentación profesional de una planilla
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una planilla utilizada en un contexto administrativo debe presentar
          la información de manera clara, ordenada y fácil de interpretar.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Una presentación adecuada debería incluir
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Títulos claros.</li>
            <li>Encabezados diferenciados.</li>
            <li>Columnas correctamente dimensionadas.</li>
            <li>Formatos numéricos apropiados.</li>
            <li>Fechas con un formato uniforme.</li>
            <li>Información alineada correctamente.</li>
            <li>Gráficos cuando aporten información relevante.</li>
            <li>Espacios adecuados entre los diferentes elementos.</li>
          </ul>
        </div>
      </section>

      {/* Impresión de gráficos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Impresión de gráficos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos también pueden formar parte de un informe impreso.
          Antes de imprimirlos es importante comprobar que el título, las
          etiquetas, la leyenda y los valores sean legibles.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Cuando un informe contiene una tabla y un gráfico, ambos elementos
            deben estar organizados de manera que permitan comprender la
            información sin generar confusión.
          </p>
        </div>
      </section>

      {/* Exportación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Exportar una planilla
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Además de imprimir una planilla, es posible exportarla o guardarla
          en formatos que faciliten su distribución digital. El formato PDF
          es especialmente útil para compartir documentos manteniendo su
          presentación.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Antes de exportar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Revisar el contenido.</li>
            <li>Comprobar la configuración de página.</li>
            <li>Verificar la vista previa.</li>
            <li>Comprobar que todas las páginas sean correctas.</li>
            <li>Utilizar un nombre de archivo descriptivo.</li>
          </ul>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La correcta impresión y presentación de planillas es importante para
          generar informes, presupuestos, listados y otros documentos
          utilizados en organizaciones.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-6">
          <li>Informes de ventas.</li>
          <li>Presupuestos.</li>
          <li>Listados de clientes.</li>
          <li>Control de gastos.</li>
          <li>Inventarios.</li>
          <li>Informes de stock.</li>
          <li>Reportes mensuales.</li>
          <li>Presentaciones de resultados.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Revisar siempre la vista previa antes de imprimir.
          </li>
          <li>
            Seleccionar una orientación adecuada al contenido.
          </li>
          <li>
            Utilizar márgenes equilibrados.
          </li>
          <li>
            Evitar que las tablas queden cortadas innecesariamente.
          </li>
          <li>
            Repetir los encabezados cuando una tabla ocupe varias páginas.
          </li>
          <li>
            Mantener una presentación clara y profesional.
          </li>
          <li>
            Exportar a PDF cuando sea necesario compartir el documento.
          </li>
          <li>
            Comprobar que los datos importantes sean legibles.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 1: Configurar una tabla
            </h3>

            <p className="leading-relaxed">
              Crear una tabla de ventas con al menos 30 registros. Configurar
              la página en orientación horizontal, establecer márgenes
              adecuados y seleccionar un área de impresión que incluya
              únicamente la tabla.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 2: Informe de varias páginas
            </h3>

            <p className="leading-relaxed">
              Crear una tabla que ocupe varias páginas. Configurar la
              repetición de los encabezados y utilizar la vista previa para
              comprobar que todas las páginas sean comprensibles.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 3: Encabezado y pie de página
            </h3>

            <p className="leading-relaxed">
              Crear un informe administrativo e incorporar en el encabezado
              el nombre de una empresa y el título del informe. Agregar en
              el pie de página el número de página y la fecha.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 4: Tabla y gráfico
            </h3>

            <p className="leading-relaxed">
              Crear una planilla con datos de ventas, incorporar un gráfico y
              preparar el documento para imprimirlo en una página. Comprobar
              que todos los elementos sean legibles.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 5: Exportación a PDF
            </h3>

            <p className="leading-relaxed">
              Crear un informe administrativo completo, revisar su
              configuración de impresión y exportarlo a PDF. Comparar la
              presentación del archivo original con el documento exportado.
            </p>
          </div>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear un informe mensual de una empresa utilizando los datos
          trabajados durante el módulo. El documento deberá incluir una tabla
          de datos correctamente formateada, resultados obtenidos mediante
          fórmulas y funciones, una tabla dinámica y al menos un gráfico.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Configurar la página para una presentación profesional, seleccionar
          el área de impresión, establecer la orientación y los márgenes,
          incorporar encabezado y pie de página y repetir los encabezados de
          la tabla cuando sea necesario.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Finalmente, revisar todo el documento mediante la vista previa y
          exportarlo a PDF. El resultado deberá ser un informe claro, legible
          y listo para ser presentado o compartido.
        </p>
      </section>

    </div>
  );
}