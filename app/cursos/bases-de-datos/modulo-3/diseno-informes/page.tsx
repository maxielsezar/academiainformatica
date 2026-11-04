
export default function DisenoInformesPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diseño y formato de informes
        </h1>

        <p className="leading-relaxed mb-4">
          Una vez creado un informe en Microsoft Access, es necesario
          organizar su apariencia para que la información pueda leerse
          fácilmente. El diseño y el formato permiten mejorar la presentación
          de los datos, destacar información importante y facilitar su
          interpretación.
        </p>

        <p className="leading-relaxed">
          Un informe bien diseñado debe tener una estructura ordenada,
          títulos claros, campos correctamente distribuidos y formatos
          adecuados para cada tipo de información. Estas características
          son especialmente importantes en documentos administrativos
          que se utilizan para realizar controles y tomar decisiones.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Reconocer las herramientas de diseño de informes de Access.</li>
          <li>Modificar fuentes, tamaños, colores y estilos de texto.</li>
          <li>Organizar campos y controles dentro de un informe.</li>
          <li>Configurar encabezados, pies de página y títulos.</li>
          <li>Aplicar formatos a fechas, números y valores monetarios.</li>
          <li>Mejorar la presentación de informes administrativos.</li>
          <li>Preparar documentos para su visualización e impresión.</li>
        </ul>
      </section>

      {/* Diseño y formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre diseño y formato
        </h2>

        <p className="leading-relaxed mb-5">
          Aunque están relacionados, el diseño y el formato cumplen funciones
          diferentes dentro de un informe.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Diseño
            </h3>
            <p className="leading-relaxed mb-3">
              Se refiere a la organización y distribución de los elementos
              dentro del documento.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ubicación de los campos.</li>
              <li>Distribución de las secciones.</li>
              <li>Organización de columnas.</li>
              <li>Espaciado entre registros.</li>
              <li>Posición de títulos y encabezados.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Formato
            </h3>
            <p className="leading-relaxed mb-3">
              Se relaciona con la apariencia visual de los elementos que
              forman parte del informe.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tipo y tamaño de letra.</li>
              <li>Colores de texto y fondo.</li>
              <li>Negrita, cursiva y subrayado.</li>
              <li>Bordes y líneas.</li>
              <li>Formatos de fechas y números.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vistas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vistas para modificar informes
        </h2>

        <p className="leading-relaxed mb-5">
          Access dispone de diferentes vistas que permiten trabajar sobre
          la estructura y la apariencia de los informes.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">
              Vista Diseño
            </h3>
            <p className="leading-relaxed">
              Permite modificar la estructura del informe, mover controles,
              cambiar sus propiedades y organizar las distintas secciones.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">
              Vista Presentación
            </h3>
            <p className="leading-relaxed">
              Permite visualizar los datos mientras se realizan modificaciones
              en el diseño, facilitando la comprobación de los cambios.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">
              Vista Informe
            </h3>
            <p className="leading-relaxed">
              Muestra el resultado del informe con los datos correspondientes,
              permitiendo revisar su presentación.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">
              Vista preliminar de impresión
            </h3>
            <p className="leading-relaxed">
              Permite comprobar cómo quedará distribuido el documento en
              las páginas antes de enviarlo a imprimir.
            </p>
          </div>
        </div>
      </section>

      {/* Texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de textos y títulos
        </h2>

        <p className="leading-relaxed mb-4">
          Los textos de un informe cumplen distintas funciones. Algunos
          identifican el documento, otros describen los campos y otros
          muestran los datos almacenados. Por eso, es importante aplicar
          formatos que permitan reconocer fácilmente cada elemento.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Propiedades de formato
        </h3>

        <ul className="list-disc pl-6 space-y-2 mb-5">
          <li>
            <strong>Tipo de fuente:</strong> permite elegir la tipografía
            utilizada en los textos.
          </li>
          <li>
            <strong>Tamaño:</strong> determina las dimensiones de las letras.
          </li>
          <li>
            <strong>Negrita:</strong> permite destacar títulos y datos importantes.
          </li>
          <li>
            <strong>Cursiva:</strong> se utiliza para diferenciar determinados
            textos.
          </li>
          <li>
            <strong>Color:</strong> permite distinguir títulos y secciones.
          </li>
          <li>
            <strong>Alineación:</strong> permite ubicar los textos a la
            izquierda, derecha o centro.
          </li>
        </ul>

        <div className=" rounded-xl p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo de jerarquía visual
          </h3>

          <div className="bg-white border border-blue-200 rounded-lg p-5 space-y-4">
            <p className="text-center text-xl font-bold text-blue-900">
              INFORME DE PRODUCTOS
            </p>
            <p className="text-center text-sm">
              Librería Central - Octubre 2026
            </p>
            <div className="border-t border-blue-200 pt-3">
              <p className="font-bold text-blue-900">
                Listado general de productos
              </p>
              <p className="text-sm mt-2">
                Código | Producto | Precio | Stock
              </p>
              <p className="text-sm mt-2">
                001 | Cuaderno | $4.500 | 25
              </p>
              <p className="text-sm">
                002 | Bolígrafo | $1.200 | 80
              </p>
            </div>
          </div>

          <p className="text-sm mt-3">
            Este ejemplo representa una posible organización visual.
            Los datos son ilustrativos.
          </p>
        </div>
      </section>

      {/* Distribución */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización y distribución de los campos
        </h2>

        <p className="leading-relaxed mb-4">
          Los campos deben ubicarse de manera que la información pueda
          interpretarse sin dificultad. Una distribución incorrecta puede
          provocar que los textos se superpongan, que los valores queden
          cortados o que el informe resulte difícil de leer.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Recomendaciones
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Ubicar los campos relacionados uno cerca del otro.</li>
          <li>Evitar espacios innecesarios entre columnas.</li>
          <li>Asignar un ancho suficiente para cada campo.</li>
          <li>Alinear correctamente los títulos con sus datos.</li>
          <li>Mantener una distribución uniforme.</li>
          <li>Evitar que los registros ocupen más espacio del necesario.</li>
        </ul>

        <div className="border border-blue-200 rounded-xl p-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo de distribución
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-500">
                  <th className="border border-blue-200 p-3 text-left">Código</th>
                  <th className="border border-blue-200 p-3 text-left">Producto</th>
                  <th className="border border-blue-200 p-3 text-right">Precio</th>
                  <th className="border border-blue-200 p-3 text-right">Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-200 p-3">001</td>
                  <td className="border border-blue-200 p-3">Cuaderno</td>
                  <td className="border border-blue-200 p-3 text-right">$4.500</td>
                  <td className="border border-blue-200 p-3 text-right">25</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">002</td>
                  <td className="border border-blue-200 p-3">Bolígrafo</td>
                  <td className="border border-blue-200 p-3 text-right">$1.200</td>
                  <td className="border border-blue-200 p-3 text-right">80</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">003</td>
                  <td className="border border-blue-200 p-3">Carpeta</td>
                  <td className="border border-blue-200 p-3 text-right">$3.800</td>
                  <td className="border border-blue-200 p-3 text-right">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Secciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diseño de encabezados y pies de página
        </h2>

        <p className="leading-relaxed mb-4">
          Los informes pueden dividirse en secciones que permiten organizar
          los datos y agregar información complementaria. Cada sección
          cumple una función específica.
        </p>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Encabezado del informe
            </h3>
            <p className="leading-relaxed">
              Aparece al comienzo del documento. Puede contener el título
              principal, el nombre de la organización, un logotipo y la fecha
              de elaboración.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Encabezado de página
            </h3>
            <p className="leading-relaxed">
              Se repite en cada página y puede contener los nombres de las
              columnas para identificar los datos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Encabezado de grupo
            </h3>
            <p className="leading-relaxed">
              Se utiliza para identificar cada grupo de registros, por ejemplo,
              una categoría de productos o un curso.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Pie de grupo
            </h3>
            <p className="leading-relaxed">
              Permite mostrar resultados parciales, subtotales u otra
              información relacionada con un grupo.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Pie de página
            </h3>
            <p className="leading-relaxed">
              Puede incluir números de página, fechas u otros datos que
              se repiten al final de cada página.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Pie del informe
            </h3>
            <p className="leading-relaxed">
              Aparece al final del documento y puede incluir totales generales,
              observaciones o información de cierre.
            </p>
          </div>
        </div>
      </section>

      {/* Formatos numéricos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de fechas, números y valores monetarios
        </h2>

        <p className="leading-relaxed mb-4">
          Los datos numéricos y las fechas deben presentarse de manera
          adecuada para evitar confusiones. Access permite modificar la
          presentación de los valores sin cambiar necesariamente los datos
          almacenados.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Tipo de dato</th>
                <th className="border border-blue-200 p-3 text-left">Valor almacenado</th>
                <th className="border border-blue-200 p-3 text-left">Presentación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">Fecha</td>
                <td className="border border-blue-200 p-3">2026-10-15</td>
                <td className="border border-blue-200 p-3">15/10/2026</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Moneda</td>
                <td className="border border-blue-200 p-3">4500</td>
                <td className="border border-blue-200 p-3">$ 4.500,00</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Porcentaje</td>
                <td className="border border-blue-200 p-3">0,15</td>
                <td className="border border-blue-200 p-3">15 %</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Número</td>
                <td className="border border-blue-200 p-3">1250</td>
                <td className="border border-blue-200 p-3">1.250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed mt-4">
          Para aplicar estos formatos se puede seleccionar el control
          correspondiente y modificar sus propiedades desde la hoja de
          propiedades o desde las herramientas de formato disponibles.
          La presentación exacta puede variar según la configuración regional
          de Access.
        </p>
      </section>

      {/* Colores y bordes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de colores, bordes y elementos visuales
        </h2>

        <p className="leading-relaxed mb-4">
          Los colores, líneas y bordes ayudan a separar secciones y destacar
          información importante. Sin embargo, deben utilizarse con moderación
          para no dificultar la lectura.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Buenas prácticas
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Utilizar pocos colores y mantener una combinación uniforme.</li>
          <li>Destacar los títulos mediante negrita y un tamaño adecuado.</li>
          <li>Aplicar fondos suaves en encabezados cuando sea necesario.</li>
          <li>Utilizar bordes para separar secciones o columnas.</li>
          <li>Evitar imágenes decorativas que no aporten información.</li>
          <li>Garantizar un buen contraste entre texto y fondo.</li>
        </ul>
      </section>

      {/* Página e impresión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración de página y distribución
        </h2>

        <p className="leading-relaxed mb-4">
          El diseño de un informe también debe considerar el tamaño del papel,
          los márgenes y la orientación de las páginas. Estas opciones
          permiten adaptar el documento a la cantidad y distribución de
          información.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tamaño de papel:</strong> permite seleccionar formatos
            como A4 o Carta, según las necesidades.
          </li>
          <li>
            <strong>Orientación vertical:</strong> resulta conveniente para
            informes con pocas columnas.
          </li>
          <li>
            <strong>Orientación horizontal:</strong> es útil cuando existen
            muchas columnas o campos de gran longitud.
          </li>
          <li>
            <strong>Márgenes:</strong> determinan el espacio entre el contenido
            y los bordes de la hoja.
          </li>
          <li>
            <strong>Saltos de página:</strong> permiten organizar la
            distribución del contenido entre páginas.
          </li>
        </ul>

        <p className="leading-relaxed mt-4">
          Antes de imprimir, es recomendable utilizar la vista preliminar
          para comprobar que los datos no queden cortados y que las páginas
          tengan una distribución adecuada.
        </p>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: Mejorar el formato de un informe
            </h3>

            <p className="leading-relaxed mb-3">
              Abrí el informe de productos creado en la clase anterior
              y realizá las siguientes modificaciones:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Ingresá a la vista Presentación o Diseño.</li>
              <li>Modificá el título para que se destaque del resto del contenido.</li>
              <li>Aplicá negrita a los encabezados de las columnas.</li>
              <li>Ajustá el tamaño de las letras.</li>
              <li>Guardá los cambios.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: Organizar los campos
            </h3>

            <p className="leading-relaxed mb-3">
              Modificá la distribución de un informe para que los datos
              puedan leerse correctamente.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Revisá el ancho de cada campo.</li>
              <li>Alineá los títulos con sus respectivos datos.</li>
              <li>Ajustá los espacios entre columnas.</li>
              <li>Comprobá que no existan textos superpuestos.</li>
              <li>Guardá el informe con las modificaciones realizadas.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: Diseñar encabezados y pies
            </h3>

            <p className="leading-relaxed mb-3">
              Utilizando el informe de clientes, incorporá elementos que
              mejoren su presentación.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Agregá un título en el encabezado del informe.</li>
              <li>Incorporá los nombres de las columnas en el encabezado de página.</li>
              <li>Agregá la fecha de elaboración.</li>
              <li>Incorporá el número de página en el pie correspondiente.</li>
              <li>Revisá el resultado en la vista Informe.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: Aplicar formatos numéricos
            </h3>

            <p className="leading-relaxed mb-3">
              Abrí un informe que contenga precios, cantidades y fechas.
              Modificá la presentación de los siguientes datos:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Aplicá formato de moneda a los precios.</li>
              <li>Configurá las fechas con un formato uniforme.</li>
              <li>Alineá los valores numéricos a la derecha.</li>
              <li>Revisá que los valores no se muestren cortados.</li>
              <li>Comprobá que los datos originales no hayan sido modificados.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: Preparar un informe para imprimir
            </h3>

            <p className="leading-relaxed mb-3">
              Seleccioná uno de los informes creados y preparalo para
              su impresión.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Configurá el tamaño de papel A4.</li>
              <li>Elegí la orientación más adecuada.</li>
              <li>Revisá los márgenes.</li>
              <li>Ingresá a la vista preliminar.</li>
              <li>Corregí cualquier problema de distribución.</li>
              <li>Guardá el informe preparado.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Diseño profesional de informes administrativos
        </h2>

        <p className="leading-relaxed mb-4">
          Una librería utiliza Microsoft Access para administrar sus productos,
          clientes, proveedores y ventas. Los responsables necesitan informes
          que puedan consultar diariamente y presentar en reuniones
          administrativas.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Objetivo
        </h3>

        <p className="leading-relaxed mb-5">
          Aplicar criterios de diseño y formato para transformar informes
          básicos en documentos claros, organizados y adecuados para su
          utilización administrativa.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Informes a diseñar
        </h3>

        <div className="space-y-4 mb-6">
          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              1. Informe de productos
            </h4>
            <p className="leading-relaxed">
              Debe presentar código, nombre, categoría, precio y stock.
              Se deben destacar los encabezados y aplicar formato de moneda
              a los precios.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              2. Informe de clientes
            </h4>
            <p className="leading-relaxed">
              Debe mostrar nombre, apellido, teléfono, correo electrónico
              y dirección. Se debe priorizar la legibilidad y una distribución
              ordenada.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              3. Informe de ventas
            </h4>
            <p className="leading-relaxed">
              Debe incluir fecha, número de operación, cliente e importe.
              Se deben aplicar formatos de fecha y moneda, además de
              incorporar un título y un pie con información general.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Consignas de trabajo
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Abrí la base de datos de la librería y seleccioná los tres
            informes creados en las actividades anteriores.
          </li>
          <li>
            Modificá el diseño de cada informe para mejorar la distribución
            de sus campos.
          </li>
          <li>
            Aplicá formatos de texto, colores y bordes manteniendo un
            criterio visual uniforme.
          </li>
          <li>
            Incorporá títulos y encabezados que permitan identificar
            claramente cada documento.
          </li>
          <li>
            Configurá correctamente las fechas, los números y los importes.
          </li>
          <li>
            Revisá la orientación, el tamaño del papel y los márgenes.
          </li>
          <li>
            Comprobá el resultado utilizando la vista preliminar.
          </li>
          <li>
            Guardá los cambios y prepará los informes para su presentación.
          </li>
        </ol>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Entrega
        </h3>

        <p className="leading-relaxed">
          Presentá la base de datos de Access con los tres informes
          correctamente diseñados. Adjuntá capturas de pantalla de cada
          documento y una breve explicación de las decisiones de diseño
          y formato que aplicaste.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Criterios de evaluación
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Correcta distribución de los campos.</li>
          <li>Uso adecuado de fuentes, tamaños y colores.</li>
          <li>Organización de encabezados y pies de página.</li>
          <li>Aplicación correcta de formatos numéricos y de fecha.</li>
          <li>Legibilidad y presentación general de los documentos.</li>
          <li>Configuración adecuada para su impresión.</li>
        </ul>
      </section>

      {/* Cierre */}
      <section className=" border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          El diseño y el formato de los informes son fundamentales para
          presentar información de manera clara y profesional. Una buena
          distribución de los campos, el uso adecuado de los formatos y
          la organización de encabezados y pies permiten que los usuarios
          comprendan rápidamente los datos. En Microsoft Access, estas
          herramientas ayudan a convertir los registros de una base de
          datos en documentos útiles para la gestión administrativa.
        </p>
      </section>
    </div>
  );
}
