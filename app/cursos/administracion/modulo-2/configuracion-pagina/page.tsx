export default function ConfiguracionPaginaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Configuración de Página
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La configuración de página permite definir cómo se distribuirá y
          presentará el contenido de un documento.
          <br /><br />
          Estas opciones son especialmente importantes al preparar documentos
          administrativos para imprimir o compartir, ya que permiten establecer
          el tamaño del papel, los márgenes, la orientación y otros aspectos
          relacionados con la presentación del documento.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la Configuración de Página
        </h2>

        <div className="border p-6 rounded-xl">
          Una correcta configuración permite aprovechar mejor el espacio
          disponible y conseguir que el documento tenga una apariencia
          ordenada y profesional.
          <br /><br />
          Antes de imprimir un documento es recomendable revisar estas opciones
          para evitar que el contenido quede cortado, desalineado o distribuido
          de manera incorrecta.
        </div>
      </section>

      {/* Márgenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Márgenes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los márgenes son los espacios que quedan entre el contenido del
          documento y los bordes de la hoja.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Los principales márgenes son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Margen superior.</li>
            <li>Margen inferior.</li>
            <li>Margen izquierdo.</li>
            <li>Margen derecho.</li>
          </ul>

          <br />

          Los márgenes pueden modificarse según las características del
          documento y las necesidades de impresión.
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
              Orientación Vertical
            </p>

            Es la orientación tradicional de una hoja. Se utiliza
            habitualmente para cartas, informes, notas y documentos
            administrativos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Orientación Horizontal
            </p>

            La hoja se coloca de manera apaisada. Es útil cuando el documento
            contiene tablas anchas, gráficos o información que necesita mayor
            espacio horizontal.
          </div>

        </div>
      </section>

      {/* Tamaño papel */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tamaño del Papel
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El tamaño del papel determina las dimensiones físicas de la hoja
          utilizada para el documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunos tamaños habituales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>A4.</li>
            <li>Carta.</li>
            <li>Oficio.</li>
            <li>Legal.</li>
          </ul>

          <br />

          Para documentos administrativos es importante seleccionar el tamaño
          que corresponda al papel que se utilizará posteriormente.
        </div>
      </section>

      {/* Columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Columnas
        </h2>

        <div className="border p-6 rounded-xl">
          Algunos documentos pueden organizarse utilizando columnas para
          distribuir el contenido en diferentes espacios verticales.
          <br /><br />
          Las columnas son frecuentes en folletos, boletines informativos,
          publicaciones y determinados documentos institucionales.
        </div>
      </section>

      {/* Saltos de página */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Saltos de Página
        </h2>

        <div className="border p-6 rounded-xl">
          Un salto de página permite comenzar el contenido siguiente en una
          nueva página sin necesidad de presionar repetidamente la tecla
          <strong> Enter</strong>.
          <br /><br />
          Es una herramienta útil para separar capítulos, secciones, informes
          o partes diferentes de un documento.
        </div>
      </section>

      {/* Saltos de sección */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Saltos de Sección
        </h2>

        <div className="border p-6 rounded-xl">
          Los saltos de sección permiten dividir un documento en diferentes
          partes y aplicar configuraciones específicas a cada una.
          <br /><br />
          Por ejemplo, una sección puede utilizar orientación vertical y otra
          orientación horizontal.
          <br /><br />
          También pueden utilizarse para modificar encabezados, pies de
          página, márgenes o columnas en diferentes partes del documento.
        </div>
      </section>

      {/* Fondo y bordes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fondo y Bordes de Página
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los procesadores de texto pueden permitir agregar elementos
          decorativos a las páginas, como bordes y fondos.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Bordes alrededor de la página.</li>
            <li>Colores de fondo.</li>
            <li>Diseños decorativos.</li>
            <li>Marcas de agua.</li>
          </ul>

          <br />

          Estos recursos deben utilizarse con moderación para mantener una
          presentación profesional.
        </div>
      </section>

      {/* Configuración para impresión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración para Impresión
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de imprimir un documento es recomendable revisar cómo se
          distribuirá el contenido en las páginas.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Verificar el tamaño del papel.</li>
            <li>Comprobar la orientación.</li>
            <li>Revisar los márgenes.</li>
            <li>Comprobar los saltos de página.</li>
            <li>Verificar encabezados y pies de página.</li>
            <li>Utilizar la vista previa de impresión.</li>
          </ul>

        </div>
      </section>

      {/* Uso administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicaciones en Administración
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La configuración de página es fundamental para preparar documentos
          administrativos que serán impresos, archivados o enviados
          digitalmente.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Informes.</li>
            <li>Notas administrativas.</li>
            <li>Cartas comerciales.</li>
            <li>Presupuestos.</li>
            <li>Formularios.</li>
            <li>Manuales.</li>
            <li>Documentación institucional.</li>
          </ul>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Definir el tamaño del papel antes de comenzar el documento.</li>
          <li>Utilizar márgenes adecuados.</li>
          <li>Elegir la orientación según el contenido.</li>
          <li>Evitar utilizar espacios o saltos manuales innecesarios.</li>
          <li>Utilizar saltos de página cuando corresponda.</li>
          <li>Revisar la vista previa antes de imprimir.</li>
          <li>Mantener una presentación uniforme y profesional.</li>
        </ul>
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

            Crear un documento nuevo y configurar el tamaño de papel A4.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Modificar los márgenes del documento y observar cómo cambia el
            espacio disponible para el contenido.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Crear un documento de varias páginas utilizando orientación
            vertical y luego configurar una sección en orientación horizontal.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Utilizar la vista previa de impresión para comprobar la
            distribución del documento antes de imprimirlo.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Elaborar un <strong>informe administrativo de cuatro páginas</strong>
          para una empresa ficticia.
          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Papel tamaño A4. <br />
          ✔ Márgenes correctamente configurados. <br />
          ✔ Una portada en orientación vertical. <br />
          ✔ Una página con una tabla amplia en orientación horizontal. <br />
          ✔ Saltos de página correctamente utilizados. <br />
          ✔ Encabezado y pie de página. <br />
          ✔ Numeración automática. <br />
          ✔ Vista previa antes de la impresión.
          <br /><br />

          El objetivo es lograr un documento ordenado, legible y preparado
          correctamente para su impresión o distribución digital.
        </div>
      </section>

    </div>
  );
}
