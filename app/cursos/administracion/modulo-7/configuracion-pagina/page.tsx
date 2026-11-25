import Link from "next/link";

export default function ConfiguracionPaginaPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Configuración de página y composición
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Antes de comenzar a diseñar una publicación gráfica es importante
          configurar correctamente el espacio de trabajo. El tamaño de papel,
          la orientación, los márgenes y la distribución de los elementos
          determinan cómo se verá el documento y cómo podrá imprimirse.
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed">
          En esta unidad aprenderás a configurar una página y organizar los
          elementos que forman parte de una publicación. Estos conocimientos
          te permitirán preparar documentos para diferentes formatos, como
          folletos, volantes, afiches, carteles e informes institucionales.
        </p>
      </section>

      {/* Configuración de página */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Configuración de página
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          La configuración de página permite establecer las características
          del documento antes de incorporar textos, imágenes y otros recursos.
          Estas opciones suelen encontrarse en los menús Diseño, Disposición
          o Configuración de página, según la aplicación utilizada.
        </p>

        <div className="space-y-5">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Tamaño del papel
            </h3>
            <p className="leading-relaxed">
              Define las dimensiones de la hoja sobre la que se realizará
              la publicación. Algunos tamaños habituales son:
            </p>

            <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
              <li>
                <strong>A4:</strong> 21 × 29,7 cm. Se utiliza habitualmente
                para informes y documentos.
              </li>
              <li>
                <strong>A5:</strong> 14,8 × 21 cm. Puede utilizarse para
                folletos pequeños y publicaciones informativas.
              </li>
              <li>
                <strong>Carta:</strong> 21,59 × 27,94 cm. Es otro formato
                frecuente en documentos.
              </li>
              <li>
                <strong>A3:</strong> 29,7 × 42 cm. Permite crear publicaciones
                de mayor tamaño, como afiches.
              </li>
            </ul>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Orientación de página
            </h3>
            <p className="leading-relaxed">
              Determina la posición de la hoja y la distribución del espacio
              disponible.
            </p>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <div className="mb-3 flex h-40 items-center justify-center rounded-lg">
                  <div className="h-28 w-20 rounded border-2 border-blue-700 bg-white shadow-sm" />
                </div>
                <h4 className="mb-1 font-semibold text-blue-900">
                  Vertical
                </h4>
                <p className="text-sm leading-relaxed">
                  La altura es mayor que el ancho. Es habitual en informes,
                  folletos y documentos.
                </p>
              </div>

              <div>
                <div className="mb-3 flex h-40 items-center justify-center rounded-lg">
                  <div className="h-20 w-32 rounded border-2 border-blue-700 bg-white shadow-sm" />
                </div>
                <h4 className="mb-1 font-semibold text-blue-900">
                  Horizontal
                </h4>
                <p className="text-sm leading-relaxed">
                  El ancho es mayor que la altura. Puede utilizarse en
                  carteles, publicaciones panorámicas e informes visuales.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Márgenes
            </h3>
            <p className="leading-relaxed">
              Son los espacios que quedan entre el contenido y los bordes
              de la página. Permiten mantener una separación adecuada y
              evitar que los textos o imágenes queden demasiado cerca
              del límite de impresión.
            </p>
            <p className="mt-3 leading-relaxed">
              Es posible configurar márgenes superiores, inferiores,
              izquierdos y derechos, según las necesidades del documento.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Columnas
            </h3>
            <p className="leading-relaxed">
              Permiten dividir el espacio de una página en secciones
              verticales para distribuir la información. Se utilizan
              especialmente en folletos, boletines y publicaciones
              informativas.
            </p>
          </article>
        </div>
      </section>

      {/* Composición */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Composición y distribución de elementos
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          La composición es la forma en que se organizan los diferentes
          elementos dentro de una publicación. Una buena distribución permite
          que el lector identifique rápidamente la información importante
          y recorra el contenido de manera ordenada.
        </p>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Jerarquía visual
            </h3>
            <p className="leading-relaxed">
              Consiste en destacar los elementos según su importancia.
              Generalmente, el título principal debe llamar más la atención
              que los subtítulos y el texto complementario.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Alineación
            </h3>
            <p className="leading-relaxed">
              Permite organizar los elementos siguiendo líneas o referencias
              comunes. Una correcta alineación ayuda a mantener el orden
              visual y la coherencia del diseño.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Distribución y espaciado
            </h3>
            <p className="leading-relaxed">
              Consiste en establecer distancias adecuadas entre títulos,
              párrafos, imágenes y otros objetos. Los espacios en blanco
              ayudan a separar contenidos y evitan que la publicación
              se vea sobrecargada.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Equilibrio visual
            </h3>
            <p className="leading-relaxed">
              Busca distribuir los elementos de manera que ninguna zona
              de la publicación tenga un peso visual excesivo. Se logra
              combinando adecuadamente textos, imágenes y espacios.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Agrupación de contenidos
            </h3>
            <p className="leading-relaxed">
              Consiste en ubicar juntos los elementos que están relacionados.
              Por ejemplo, una imagen debe estar cerca del texto que la
              explica y los datos de contacto deben presentarse en una
              misma sección.
            </p>
          </article>
        </div>
      </section>

      {/* Columnas y distribución */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Uso de columnas y secciones
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Las columnas permiten organizar grandes cantidades de información
          en espacios más pequeños y facilitan la lectura. Son especialmente
          útiles para elaborar folletos, boletines y publicaciones que
          contienen varios temas.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Una columna
            </h3>
            <div className="rounded-lg p-4">
              <div className="mx-auto max-w-48 space-y-2">
                <div className="h-3 w-3/4 rounded bg-blue-800" />
                <div className="h-2 w-full rounded bg-blue-200" />
                <div className="h-2 w-full rounded bg-blue-200" />
                <div className="h-2 w-5/6 rounded bg-blue-200" />
                <div className="h-12 rounded bg-blue-300" />
                <div className="h-2 w-full rounded bg-blue-200" />
                <div className="h-2 w-4/5 rounded bg-blue-200" />
              </div>
            </div>
            <p className="mt-3 leading-relaxed">
              Adecuada para informes, documentos institucionales y
              publicaciones con lectura continua.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Dos columnas
            </h3>
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="mx-auto grid max-w-48 grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="h-3 w-4/5 rounded bg-blue-800" />
                  <div className="h-2 w-full rounded bg-blue-200" />
                  <div className="h-2 w-full rounded bg-blue-200" />
                  <div className="h-10 rounded bg-blue-300" />
                  <div className="h-2 w-full rounded bg-blue-200" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-4/5 rounded bg-blue-800" />
                  <div className="h-2 w-full rounded bg-blue-200" />
                  <div className="h-2 w-full rounded bg-blue-200" />
                  <div className="h-10 rounded bg-blue-300" />
                  <div className="h-2 w-full rounded bg-blue-200" />
                </div>
              </div>
            </div>
            <p className="mt-3 leading-relaxed">
              Útil para folletos, boletines y publicaciones con información
              distribuida en diferentes secciones.
            </p>
          </article>
        </div>
      </section>

      {/* Configuración para impresión */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Preparación del documento para impresión
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          La configuración debe tener en cuenta el resultado final que se
          desea obtener en papel. Un documento que se ve correctamente en
          pantalla puede presentar problemas al imprimirse si no se revisan
          sus dimensiones y distribución.
        </p>

        <div className="rounded-xl border border-blue-200 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            Aspectos que se deben revisar
          </h3>

          <ul className="list-inside list-disc space-y-3 leading-relaxed">
            <li>
              Verificar que el tamaño de página coincida con el papel
              disponible.
            </li>
            <li>
              Comprobar la orientación vertical u horizontal.
            </li>
            <li>
              Revisar que los márgenes sean adecuados.
            </li>
            <li>
              Evitar que textos e imágenes queden cortados.
            </li>
            <li>
              Comprobar que las imágenes tengan suficiente calidad.
            </li>
            <li>
              Revisar la vista previa antes de imprimir.
            </li>
            <li>
              Comprobar que la impresora utilice el mismo tamaño y
              orientación configurados en el documento.
            </li>
          </ul>
        </div>
      </section>

      {/* Ejemplo práctico */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Ejemplo práctico: configuración de un folleto institucional
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Una institución educativa necesita elaborar un folleto para
          informar sobre sus cursos. Antes de incorporar los textos y las
          imágenes, se deben definir las características de la página.
        </p>

        <div className="overflow-x-auto rounded-xl border border-blue-200">
          <table className="w-full border-collapse text-left">
            <tbody>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold text-blue-900">
                  Tamaño
                </td>
                <td className="border-b border-blue-100 p-4">
                  A4
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold text-blue-900">
                  Orientación
                </td>
                <td className="border-b border-blue-100 p-4">
                  Horizontal
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold text-blue-900">
                  Márgenes
                </td>
                <td className="border-b border-blue-100 p-4">
                  1,5 cm
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold text-blue-900">
                  Distribución
                </td>
                <td className="border-b border-blue-100 p-4">
                  Tres secciones o paneles
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold text-blue-900">
                  Contenidos
                </td>
                <td className="border-b border-blue-100 p-4">
                  Nombre de la institución, cursos, información e inscripción
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-blue-900">
                  Resultado
                </td>
                <td className="p-4">
                  Folleto informativo preparado para imprimir
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 leading-relaxed">
          Esta planificación permite establecer previamente el espacio
          disponible y organizar los contenidos antes de comenzar el diseño.
        </p>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividades de aprendizaje
        </h2>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 1: Reconocer tamaños de papel
            </h3>
            <p className="leading-relaxed">
              Investigá las dimensiones de los formatos A4, A5, A3 y Carta.
              Indicá para qué tipo de publicaciones utilizarías cada uno.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 2: Comparar orientaciones
            </h3>
            <p className="leading-relaxed">
              Abrí una aplicación de edición y creá dos documentos: uno
              vertical y otro horizontal. Explicá qué tipo de publicación
              realizarías con cada orientación.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 3: Configurar una página
            </h3>
            <p className="leading-relaxed">
              Creá un documento A4 con orientación vertical y configurá
              márgenes de 2 cm. Guardá el archivo con el nombre
              "Configuración de página".
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 4: Organizar una publicación
            </h3>
            <p className="leading-relaxed">
              En un documento nuevo, distribuí un título, dos subtítulos,
              tres párrafos y dos imágenes. Aplicá criterios de alineación,
              espaciado y jerarquía visual para organizar la información.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 5: Diseñar una distribución en columnas
            </h3>
            <p className="leading-relaxed">
              Creá una página dividida en dos columnas. Incorporá información
              sobre una actividad institucional y organizá los textos e
              imágenes para que la lectura resulte clara.
            </p>
          </article>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Desafío integrador
        </h2>

        <div className="rounded-xl border border-blue-200 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            Planificación de un folleto informativo
          </h3>

          <p className="mb-4 leading-relaxed">
            Una institución necesita elaborar un folleto para difundir
            sus servicios y actividades. Antes de diseñarlo, deberás
            preparar la configuración y distribución de la página.
          </p>

          <p className="mb-3 leading-relaxed">
            Realizá las siguientes tareas:
          </p>

          <ul className="mb-4 list-inside list-disc space-y-2 leading-relaxed">
            <li>Seleccioná el tamaño y la orientación del papel.</li>
            <li>Configurá los márgenes del documento.</li>
            <li>Definí si utilizarás una, dos o tres columnas.</li>
            <li>Planificá dónde ubicarás títulos, textos e imágenes.</li>
            <li>Organizá la información en secciones.</li>
            <li>Guardá el documento para continuar trabajando en él.</li>
          </ul>

          <p className="leading-relaxed">
            Presentá el documento configurado y explicá por qué elegiste
            esa distribución para el folleto.
          </p>
        </div>
      </section>

    </div>
  );
}
