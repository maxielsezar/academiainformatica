export default function ImpresionExportacionPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Vista previa, impresión y exportación de informes
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vez creado y diseñado un informe en Microsoft Access, es
          necesario revisar su presentación y preparar el documento para
          compartirlo o imprimirlo. Access ofrece herramientas para visualizar
          el resultado antes de imprimir, configurar las páginas y exportar la
          información a diferentes formatos digitales.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Estas funciones permiten generar documentos administrativos
          profesionales, conservar registros, presentar información y
          compartir resultados con otras personas o instituciones.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de aprendizaje
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Comprender la utilidad de la vista previa de impresión.</li>
          <li>Revisar la distribución y presentación de los informes.</li>
          <li>Configurar el tamaño, la orientación y los márgenes de página.</li>
          <li>Imprimir informes utilizando las opciones disponibles.</li>
          <li>Exportar informes a PDF, Excel y otros formatos.</li>
          <li>Seleccionar el formato adecuado según el uso del documento.</li>
        </ul>
      </section>

      {/* Vista previa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. Vista previa de impresión
        </h2>

        <p className="leading-relaxed mb-4">
          La vista previa de impresión permite observar cómo quedará un informe
          cuando se imprima en papel o se genere como documento. Es una etapa
          fundamental para detectar errores antes de producir la versión final.
        </p>

        <p className="leading-relaxed mb-4">
          Desde esta vista es posible recorrer las páginas, verificar los
          encabezados, revisar los saltos de página y comprobar que todos los
          datos se encuentren correctamente distribuidos.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          ¿Qué debemos revisar?
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Que el título del informe sea correcto.</li>
          <li>Que aparezcan todos los campos y registros necesarios.</li>
          <li>Que las columnas no queden cortadas.</li>
          <li>Que los textos y números sean legibles.</li>
          <li>Que los encabezados y pies de página estén bien ubicados.</li>
          <li>Que no existan páginas vacías o con información innecesaria.</li>
          <li>Que los totales y subtotales sean correctos.</li>
        </ul>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <p className="font-semibold text-blue-900 mb-2">
            Ejemplo práctico
          </p>
          <p className="leading-relaxed">
            Una oficina necesita imprimir un informe de ventas mensuales. Antes
            de hacerlo, el responsable utiliza la vista previa para comprobar
            que se visualicen todos los clientes, las fechas, los importes y el
            total general.
          </p>
        </div>
      </section>

      {/* Configuración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Configuración de página
        </h2>

        <p className="leading-relaxed mb-4">
          La configuración de página permite adaptar el informe al papel y al
          formato de impresión que se utilizará. Una configuración incorrecta
          puede provocar que parte de la información quede fuera de los
          márgenes o que se generen páginas adicionales.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Configuración
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Descripción
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo de uso
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-medium">
                  Tamaño de papel
                </td>
                <td className="border border-blue-200 p-3">
                  Define las dimensiones de la hoja.
                </td>
                <td className="border border-blue-200 p-3">A4, Carta u Oficio.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-medium">
                  Orientación
                </td>
                <td className="border border-blue-200 p-3">
                  Determina la posición vertical u horizontal del papel.
                </td>
                <td className="border border-blue-200 p-3">
                  Vertical para listados; horizontal para tablas anchas.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-medium">
                  Márgenes
                </td>
                <td className="border border-blue-200 p-3">
                  Establecen el espacio entre el contenido y los bordes.
                </td>
                <td className="border border-blue-200 p-3">
                  Márgenes uniformes para documentos administrativos.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-medium">
                  Columnas
                </td>
                <td className="border border-blue-200 p-3">
                  Permiten organizar el contenido en una o varias columnas.
                </td>
                <td className="border border-blue-200 p-3">
                  Listados compactos de información.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Pasos para configurar una página
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Abrir el informe que se desea imprimir.</li>
          <li>Ingresar a la vista previa de impresión.</li>
          <li>Acceder a las opciones de configuración de página.</li>
          <li>Seleccionar el tamaño de papel adecuado.</li>
          <li>Definir la orientación vertical u horizontal.</li>
          <li>Ajustar los márgenes según las necesidades.</li>
          <li>Revisar nuevamente el resultado en la vista previa.</li>
        </ol>
      </section>

      {/* Impresión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Impresión de informes
        </h2>

        <p className="leading-relaxed mb-4">
          La impresión permite obtener una copia física del informe para
          archivarlo, presentarlo en una reunión, entregarlo a un responsable o
          utilizarlo como documentación administrativa.
        </p>

        <p className="leading-relaxed mb-4">
          Antes de imprimir, es importante seleccionar correctamente la
          impresora y establecer las opciones necesarias.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Opciones habituales de impresión
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Impresora:</strong> permite seleccionar el dispositivo que
            se utilizará.
          </li>
          <li>
            <strong>Rango de páginas:</strong> permite imprimir todas las
            páginas o solamente algunas.
          </li>
          <li>
            <strong>Número de copias:</strong> establece cuántos ejemplares se
            necesitan.
          </li>
          <li>
            <strong>Impresión a color o blanco y negro:</strong> permite
            seleccionar el tipo de impresión.
          </li>
          <li>
            <strong>Impresión a doble cara:</strong> permite utilizar ambos
            lados de la hoja cuando la impresora lo admite.
          </li>
        </ul>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <p className="font-semibold text-blue-900 mb-2">
            Recomendación
          </p>
          <p className="leading-relaxed">
            Antes de imprimir informes extensos, conviene revisar una copia
            previa y comprobar que la impresora tenga papel y tinta suficientes.
            Esto ayuda a evitar desperdicios y errores.
          </p>
        </div>
      </section>

      {/* Exportación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Exportación de informes
        </h2>

        <p className="leading-relaxed mb-4">
          Exportar consiste en generar una copia del informe en otro formato de
          archivo. Esto permite compartir la información con personas que no
          utilizan Microsoft Access o que necesitan trabajar con los datos
          mediante otras aplicaciones.
        </p>

        <p className="leading-relaxed mb-4">
          Access ofrece diferentes formatos de exportación. La elección depende
          de la finalidad del documento y de cómo se utilizará posteriormente.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Formato
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Características
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Uso recomendado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  PDF
                </td>
                <td className="border border-blue-200 p-3">
                  Conserva la presentación del documento y facilita su lectura.
                </td>
                <td className="border border-blue-200 p-3">
                  Enviar informes, presentar resultados y archivar documentos.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Excel
                </td>
                <td className="border border-blue-200 p-3">
                  Permite trabajar con datos en una hoja de cálculo.
                </td>
                <td className="border border-blue-200 p-3">
                  Realizar cálculos, análisis y gráficos.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Word
                </td>
                <td className="border border-blue-200 p-3">
                  Permite continuar editando el contenido en un procesador de
                  textos.
                </td>
                <td className="border border-blue-200 p-3">
                  Preparar documentos y presentaciones administrativas.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Texto
                </td>
                <td className="border border-blue-200 p-3">
                  Guarda información en un formato de texto.
                </td>
                <td className="border border-blue-200 p-3">
                  Intercambiar datos con otros sistemas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Exportar a PDF */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Exportar un informe a PDF
        </h2>

        <p className="leading-relaxed mb-4">
          El formato PDF es uno de los más utilizados para compartir informes
          administrativos porque permite conservar su presentación y facilita
          su consulta desde diferentes dispositivos.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Procedimiento general
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Seleccionar el informe dentro del panel de navegación.</li>
          <li>Ingresar a la pestaña Datos externos.</li>
          <li>Buscar las opciones de exportación a PDF o XPS.</li>
          <li>Seleccionar la ubicación donde se guardará el archivo.</li>
          <li>Escribir un nombre descriptivo para el documento.</li>
          <li>Configurar las opciones de publicación disponibles.</li>
          <li>Confirmar la exportación y abrir el archivo para revisarlo.</li>
        </ol>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <p className="font-semibold text-blue-900 mb-2">
            Ejemplo de aplicación
          </p>
          <p className="leading-relaxed">
            Una institución necesita enviar el informe mensual de inscripciones
            a sus autoridades. El personal administrativo exporta el informe
            desde Access a PDF y lo adjunta a un correo electrónico. De esta
            manera, los destinatarios pueden consultar la información sin
            necesitar la base de datos original.
          </p>
        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Organización y buenas prácticas
        </h2>

        <p className="leading-relaxed mb-4">
          Los informes exportados deben guardarse de manera ordenada para
          facilitar su búsqueda y evitar confusiones entre diferentes versiones.
          También es importante proteger la información administrativa que
          contienen.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Utilizar nombres claros, por ejemplo:
            <strong> Informe_Ventas_Noviembre_2026.pdf</strong>.
          </li>
          <li>Organizar los documentos en carpetas por año, mes o área.</li>
          <li>Verificar el contenido antes de compartir un archivo.</li>
          <li>Evitar incluir datos personales que no sean necesarios.</li>
          <li>Restringir el acceso a documentos con información confidencial.</li>
          <li>Conservar copias de seguridad de los informes importantes.</li>
          <li>Evitar sobrescribir archivos anteriores sin verificar su contenido.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <p className="leading-relaxed mb-6">
          Realizá las siguientes actividades utilizando Microsoft Access. Para
          cada ejercicio, trabajá con una base de datos de ejemplo que contenga
          información administrativa.
        </p>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Actividad 1: Revisión de un informe
            </h3>
            <p className="leading-relaxed">
              Abrí un informe de productos o clientes en Microsoft Access y
              utilizá la vista previa de impresión. Revisá los títulos, los
              campos, los registros, los encabezados y los pies de página.
              Identificá al menos tres aspectos que podrían mejorarse.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Actividad 2: Configuración de página
            </h3>
            <p className="leading-relaxed">
              Seleccioná un informe con varias columnas. Configurá el tamaño de
              papel A4, modificá la orientación a horizontal y ajustá los
              márgenes. Compará el resultado con la configuración vertical.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Actividad 3: Preparación para imprimir
            </h3>
            <p className="leading-relaxed">
              Prepará un informe de ventas para imprimir. Seleccioná una
              impresora disponible o la opción de impresión en PDF, configurá
              dos copias y revisá el rango de páginas antes de confirmar.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Actividad 4: Exportación a PDF
            </h3>
            <p className="leading-relaxed">
              Exportá un informe de clientes a PDF. Guardalo con el nombre
              <strong> Listado_Clientes.pdf</strong> dentro de una carpeta
              llamada Informes. Abrí el archivo y verificá que se visualice
              correctamente.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2">
              Actividad 5: Exportación a Excel
            </h3>
            <p className="leading-relaxed">
              Seleccioná un informe de ventas y exportalo a Excel. Abrí el
              archivo generado y observá cómo se distribuyeron los datos.
              Identificá qué operaciones adicionales podrías realizar en una
              hoja de cálculo.
            </p>
          </div>
        </div>
      </section>

      {/* Integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Sistema de informes de una oficina
        </h2>

        <p className="leading-relaxed mb-4">
          Una oficina administrativa utiliza Microsoft Access para gestionar
          clientes, productos y ventas. El responsable necesita generar
          documentación para consultar, imprimir y compartir información con
          diferentes sectores de la organización.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Consigna
        </h3>

        <p className="leading-relaxed mb-4">
          Utilizando la base de datos desarrollada en las actividades
          anteriores, prepará los siguientes informes:
        </p>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Listado general de clientes.</li>
          <li>Listado de productos con sus precios y existencias.</li>
          <li>Informe de ventas ordenado por fecha.</li>
          <li>Resumen de ventas con subtotales y total general.</li>
        </ol>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Requisitos del trabajo
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Revisar cada informe utilizando la vista previa.</li>
          <li>Configurar correctamente el tamaño y la orientación de página.</li>
          <li>Verificar que los campos y registros se visualicen completos.</li>
          <li>Exportar todos los informes a formato PDF.</li>
          <li>Exportar el informe de ventas también a Excel.</li>
          <li>Crear una carpeta llamada Informes_Oficina para guardar los archivos.</li>
          <li>Utilizar nombres descriptivos para cada documento.</li>
        </ul>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-l
        g mt-6">
          <p className="font-semibold text-blue-900 mb-2">
            Entrega final
          </p>
          <p className="leading-relaxed">
            Presentá la base de datos de Access y la carpeta con los informes
            exportados. El trabajo será evaluado considerando la correcta
            presentación de los documentos, la configuración de impresión, la
            exportación de archivos y la organización de la información.
          </p>
        </div>
      </section>
    </div>
  );
}