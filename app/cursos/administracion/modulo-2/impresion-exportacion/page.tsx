export default function ImpresionExportacionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Impresión y Exportación de Documentos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vez finalizado y revisado un documento administrativo, es
          importante conocer las opciones disponibles para imprimirlo o
          convertirlo a un formato digital adecuado para compartirlo.
          <br /><br />
          Microsoft Word permite configurar la impresión y exportar documentos
          a diferentes formatos, siendo el PDF uno de los más utilizados para
          compartir documentos sin modificar su contenido.
        </p>
      </section>

      {/* Preparar documento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Preparar el Documento Antes de Imprimir
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de imprimir o exportar un documento es recomendable realizar
          una última revisión para comprobar que toda la información y el
          formato sean correctos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Revisar la ortografía y redacción.</li>
            <li>Comprobar los títulos y subtítulos.</li>
            <li>Verificar márgenes y orientación.</li>
            <li>Revisar las imágenes y tablas.</li>
            <li>Comprobar encabezados y pies de página.</li>
            <li>Verificar la numeración de páginas.</li>
            <li>Comprobar que no existan páginas vacías.</li>
            <li>Revisar la tabla de contenido, si existe.</li>
          </ul>
        </div>
      </section>

      {/* Vista previa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vista Previa de Impresión
        </h2>

        <div className="border p-6 rounded-xl">
          La vista previa permite observar cómo quedará el documento antes de
          enviarlo a la impresora.
          <br /><br />

          Es importante utilizarla para detectar problemas como:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Texto cortado.</li>
            <li>Tablas que ocupan demasiado espacio.</li>
            <li>Imágenes mal ubicadas.</li>
            <li>Páginas innecesarias.</li>
            <li>Encabezados o pies de página incorrectos.</li>
            <li>Saltos de página inesperados.</li>
          </ul>
        </div>
      </section>

      {/* Configuración de impresión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración de Impresión
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de imprimir se pueden configurar diferentes opciones para
          adaptar el documento al resultado que se desea obtener.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Seleccionar la impresora.</li>
            <li>Elegir las páginas que se desean imprimir.</li>
            <li>Indicar la cantidad de copias.</li>
            <li>Seleccionar la orientación de la página.</li>
            <li>Elegir el tamaño del papel.</li>
            <li>Configurar los márgenes.</li>
            <li>Seleccionar impresión a una o dos caras, si la impresora lo permite.</li>
            <li>Configurar la cantidad de páginas por hoja.</li>
          </ul>
        </div>
      </section>

      {/* Páginas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seleccionar las Páginas
        </h2>

        <div className="border p-6 rounded-xl">
          Word permite imprimir todo el documento o seleccionar solamente
          determinadas páginas.
          <br /><br />

          Por ejemplo:

          <br /><br />

          <strong>Todas:</strong> imprime el documento completo.

          <br /><br />

          <strong>Página actual:</strong> imprime solamente la página donde se
          encuentra el cursor.

          <br /><br />

          <strong>Páginas específicas:</strong> permite indicar páginas
          determinadas, por ejemplo: 1-3.
        </div>
      </section>

      {/* Orientación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Orientación de la Página
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Vertical
            </p>

            Es la orientación más utilizada para cartas, informes,
            memorandos y documentos administrativos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Horizontal
            </p>

            Puede ser útil para tablas anchas, gráficos o documentos que
            contienen información distribuida horizontalmente.
          </div>

        </div>
      </section>

      {/* Exportación PDF */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Exportar un Documento a PDF
        </h2>

        <div className="border p-6 rounded-xl">
          El formato PDF permite compartir un documento manteniendo su
          estructura y presentación de manera consistente en diferentes
          dispositivos.
          <br /><br />

          Es especialmente útil para enviar:

          <br /><br />

          <ul className="list-disc list-inside space-y-3">
            <li>Informes administrativos.</li>
            <li>Currículums Vitae.</li>
            <li>Cartas y notas.</li>
            <li>Memorandos.</li>
            <li>Actas.</li>
            <li>Formularios.</li>
            <li>Trabajos prácticos.</li>
            <li>Documentación institucional.</li>
          </ul>
        </div>
      </section>

      {/* Pasos exportar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Exportar a PDF
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-4">
            <li>
              Abrir el documento terminado.
            </li>

            <li>
              Revisar nuevamente el contenido.
            </li>

            <li>
              Ir a la opción <strong>Archivo</strong>.
            </li>

            <li>
              Seleccionar <strong>Guardar como</strong> o la opción de
              exportación disponible.
            </li>

            <li>
              Seleccionar el formato <strong>PDF</strong>.
            </li>

            <li>
              Elegir la ubicación donde se guardará el archivo.
            </li>

            <li>
              Asignar un nombre claro al archivo.
            </li>

            <li>
              Guardar o exportar el documento.
            </li>
          </ol>

        </div>
      </section>

      {/* Nombre archivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nombre y Organización de los Archivos
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Los documentos deben guardarse utilizando nombres claros que
            permitan identificar rápidamente su contenido.
          </p>

          <p className="font-semibold">
            Ejemplos:
          </p>

          <br />

          Informe_Administrativo_Agosto_2026.pdf

          <br /><br />

          CV_Juan_Perez.pdf

          <br /><br />

          Acta_Reunion_Administrativa.pdf

          <br /><br />

          Memorandum_Administracion.pdf

        </div>
      </section>

      {/* Word y PDF */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Documento Editable y PDF
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Es recomendable conservar dos versiones de los documentos
            importantes:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Documento editable:</strong> permite realizar
              modificaciones posteriormente.
            </li>

            <li>
              <strong>PDF:</strong> permite compartir la versión final del
              documento.
            </li>
          </ul>

          <br />

          Por ejemplo:

          <br /><br />

          <strong>Informe_Administrativo_Agosto_2026.docx</strong>

          <br />

          <strong>Informe_Administrativo_Agosto_2026.pdf</strong>

        </div>
      </section>

      {/* Impresión responsable */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Impresión Responsable
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Antes de imprimir es importante comprobar que realmente sea
            necesario utilizar papel.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar vista previa antes de imprimir.</li>
            <li>Evitar imprimir páginas innecesarias.</li>
            <li>Utilizar impresión a doble cara cuando sea posible.</li>
            <li>Revisar el documento antes de realizar varias copias.</li>
            <li>Utilizar correctamente el papel y los recursos disponibles.</li>
          </ul>

        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Abrir un documento administrativo realizado anteriormente y
            utilizar la vista previa para comprobar su presentación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Configurar el documento para impresión vertical y revisar los
            cambios realizados.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Exportar el documento a formato PDF y guardarlo con un nombre
            profesional.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Comparar el archivo editable de Word con el archivo PDF y
            comprobar que ambos presenten correctamente la información.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Tomar uno de los documentos administrativos realizados durante el
          módulo y prepararlo para su <strong>presentación y entrega
          profesional</strong>.

          <br /><br />

          El estudiante deberá:

          <br /><br />

          ✔ Revisar completamente el documento. <br />
          ✔ Corregir errores de ortografía y formato. <br />
          ✔ Comprobar márgenes y orientación. <br />
          ✔ Revisar encabezados y pies de página. <br />
          ✔ Comprobar la numeración de páginas. <br />
          ✔ Utilizar la vista previa de impresión. <br />
          ✔ Configurar las opciones de impresión. <br />
          ✔ Guardar el documento editable. <br />
          ✔ Exportar el documento a PDF. <br />
          ✔ Utilizar un nombre de archivo profesional. <br />
          ✔ Comprobar el resultado final.

          <br /><br />

          <strong>Objetivo:</strong> aprender a preparar correctamente un
          documento administrativo para ser impreso, archivado o enviado
          digitalmente.
        </div>

      </section>

    </div>
  );
}