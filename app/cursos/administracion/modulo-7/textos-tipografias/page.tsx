import Link from "next/link";

export default function TextosTipografiasPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Textos y tipografías
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Los textos son uno de los elementos principales de una publicación
          gráfica. A través de ellos se transmite la información que se desea
          comunicar, mientras que las tipografías determinan la apariencia
          visual de las palabras y contribuyen a facilitar su lectura.
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed">
          En esta unidad aprenderás a incorporar y editar textos, seleccionar
          fuentes, modificar tamaños y colores, utilizar diferentes estilos
          y organizar la información mediante títulos, subtítulos y párrafos.
          También conocerás criterios para mejorar la legibilidad y mantener
          una presentación visual coherente.
        </p>
      </section>

      {/* Textos en publicaciones */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          El uso de textos en publicaciones gráficas
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Los textos permiten comunicar el mensaje principal y los detalles
          necesarios para que el lector comprenda una publicación. Su
          organización debe responder al objetivo del material y al público
          al que está dirigido.
        </p>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Título principal
            </h3>
            <p className="leading-relaxed">
              Es el texto más destacado de la publicación. Debe presentar
              el tema o mensaje principal y captar la atención del lector.
            </p>
            <p className="mt-3 text-xl font-bold text-blue-900">
              ¡Inscripciones abiertas!
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Subtítulos
            </h3>
            <p className="leading-relaxed">
              Permiten dividir la información en secciones y anticipar
              el contenido de cada una.
            </p>
            <p className="mt-3 text-lg font-semibold text-blue-800">
              Cursos disponibles
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Cuerpo del texto
            </h3>
            <p className="leading-relaxed">
              Contiene la información que desarrolla el mensaje. Debe
              redactarse de manera clara, utilizando oraciones comprensibles
              y evitando datos innecesarios.
            </p>
            <p className="mt-3 leading-relaxed">
              Aprendé herramientas informáticas para mejorar tus capacidades
              y desarrollar nuevas oportunidades laborales.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Información complementaria
            </h3>
            <p className="leading-relaxed">
              Incluye datos adicionales como fechas, horarios, direcciones,
              requisitos, teléfonos y medios de contacto.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-blue-900">
              Lugar: CFP 655 - Esquel | Inscripciones abiertas
            </p>
          </article>
        </div>
      </section>

      {/* Tipografías */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          ¿Qué es una tipografía?
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Una tipografía es el diseño visual de los caracteres que forman
          los textos. La elección de una fuente influye en la personalidad
          de la publicación y en la facilidad con la que se puede leer.
        </p>

        <div className="space-y-5">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Tipografías con serifas
            </h3>
            <p className="mb-3 leading-relaxed">
              Presentan pequeños remates o terminaciones en los extremos
              de las letras. Suelen utilizarse en libros, documentos e
              informes.
            </p>
            <div className="rounded-lg bg-blue-50 p-5">
              <p className="text-3xl text-blue-950" style={{ fontFamily: "Georgia, serif" }}>
                Ejemplo de tipografía serif
              </p>
              <p className="mt-2 text-sm text-blue-800">
                Ejemplo: Georgia, Times New Roman.
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Tipografías sin serifas
            </h3>
            <p className="mb-3 leading-relaxed">
              No presentan remates en los extremos de las letras. Tienen
              una apariencia sencilla y suelen utilizarse en carteles,
              publicaciones digitales y materiales informativos.
            </p>
            <div className="rounded-lg bg-blue-50 p-5">
              <p className="text-3xl text-blue-950" style={{ fontFamily: "Arial, sans-serif" }}>
                Ejemplo de tipografía sans serif
              </p>
              <p className="mt-2 text-sm text-blue-800">
                Ejemplo: Arial, Calibri, Verdana.
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Tipografías decorativas
            </h3>
            <p className="mb-3 leading-relaxed">
              Tienen diseños particulares y se utilizan para generar
              impacto visual o transmitir un estilo determinado. Es
              recomendable reservarlas para títulos o palabras destacadas.
            </p>
            <div className="rounded-lg bg-blue-50 p-5">
              <p className="text-3xl font-bold italic text-blue-950">
                ¡Gran oportunidad!
              </p>
              <p className="mt-2 text-sm text-blue-800">
                Se pueden utilizar fuentes especiales para destacar mensajes.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Formato de texto */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Formato y edición de textos
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Las aplicaciones de diseño ofrecen herramientas para modificar
          la apariencia de los textos. Estas opciones permiten destacar
          información, mejorar la lectura y mantener una composición
          visual ordenada.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Tipo de fuente
            </h3>
            <p className="leading-relaxed">
              Permite seleccionar el diseño de las letras según el estilo
              de la publicación.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Tamaño de fuente
            </h3>
            <p className="leading-relaxed">
              Determina las dimensiones de los caracteres. Los títulos
              suelen tener mayor tamaño que los párrafos.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Negrita
            </h3>
            <p className="leading-relaxed">
              Permite destacar palabras, títulos y datos importantes
              mediante un trazo más grueso.
            </p>
            <p className="mt-3 text-lg font-bold text-blue-900">
              Información importante
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Cursiva
            </h3>
            <p className="leading-relaxed">
              Presenta los caracteres inclinados y puede utilizarse
              para destacar expresiones o referencias.
            </p>
            <p className="mt-3 text-lg italic text-blue-900">
              Texto destacado en cursiva
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Subrayado
            </h3>
            <p className="leading-relaxed">
              Agrega una línea debajo de las palabras seleccionadas.
              Debe utilizarse con moderación para no recargar el diseño.
            </p>
            <p className="mt-3 text-lg text-blue-900 underline">
              Inscripciones abiertas
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Color de texto
            </h3>
            <p className="leading-relaxed">
              Permite modificar el color de las letras para establecer
              contrastes y destacar información.
            </p>
            <p className="mt-3 text-lg font-bold text-blue-700">
              Cursos gratuitos
            </p>
          </article>
        </div>
      </section>

      {/* Alineación */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Alineación de los textos
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          La alineación determina cómo se distribuyen las líneas de texto
          dentro de un espacio. Una elección adecuada facilita la lectura
          y contribuye al orden de la publicación.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Alineación izquierda
            </h3>
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-left leading-relaxed text-blue-950">
                Este texto comienza desde el margen izquierdo. Es una de
                las alineaciones más utilizadas para párrafos.
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Alineación centrada
            </h3>
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-center leading-relaxed text-blue-950">
                Este texto se distribuye alrededor del centro. Es útil
                para títulos e invitaciones.
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Alineación derecha
            </h3>
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-right leading-relaxed text-blue-950">
                Este texto termina en el margen derecho. Puede utilizarse
                para datos o elementos específicos.
              </p>
            </div>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Alineación justificada
            </h3>
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-justify leading-relaxed text-blue-950">
                Este texto se distribuye de manera que las líneas queden
                alineadas tanto a la izquierda como a la derecha. Es una
                opción frecuente en documentos extensos.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Jerarquía visual */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Jerarquía tipográfica
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          La jerarquía tipográfica consiste en establecer diferentes niveles
          de importancia entre los textos. Permite que el lector identifique
          primero el mensaje principal y luego acceda a la información
          complementaria.
        </p>

        <div className="rounded-xl border border-blue-200 p-6">
          <div className="space-y-4">
            <div>
              <p className="text-3xl font-bold text-blue-900">
                Feria de emprendedores
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Título principal
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold text-blue-800">
                Productos y servicios locales
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Subtítulo
              </p>
            </div>

            <div>
              <p className="leading-relaxed text-blue-950">
                Te invitamos a conocer las propuestas de emprendedores
                de nuestra comunidad y descubrir productos elaborados
                localmente.
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Texto descriptivo
              </p>
            </div>

            <div>
              <p className="font-bold text-blue-900">
                Sábado 15 de noviembre - 16:00 horas
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Información destacada
              </p>
            </div>

            <div>
              <p className="text-sm text-blue-800">
                Lugar: Salón de usos múltiples
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Información complementaria
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4 leading-relaxed">
          En este ejemplo, el tamaño, el peso y el color de los textos
          permiten reconocer rápidamente qué información es más importante.
        </p>
      </section>

      {/* Legibilidad */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Legibilidad y combinación de tipografías
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          La legibilidad es la facilidad con la que se pueden reconocer
          los caracteres y comprender un texto. En una publicación impresa
          es importante seleccionar fuentes y tamaños que permitan leer
          cómodamente la información.
        </p>

        <div className="rounded-xl border border-blue-200 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            Recomendaciones para mejorar la lectura
          </h3>

          <ul className="list-inside list-disc space-y-3 leading-relaxed">
            <li>
              Utilizar tipografías claras y fáciles de leer.
            </li>
            <li>
              Evitar tamaños demasiado pequeños para los textos principales.
            </li>
            <li>
              Mantener un contraste suficiente entre el texto y el fondo.
            </li>
            <li>
              Utilizar negrita y cursiva para destacar información puntual.
            </li>
            <li>
              Evitar combinar demasiadas tipografías en una misma publicación.
            </li>
            <li>
              Mantener una separación adecuada entre líneas y párrafos.
            </li>
            <li>
              Revisar la ortografía y la redacción antes de imprimir.
            </li>
          </ul>
        </div>
      </section>

      {/* Ejemplo práctico */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Ejemplo práctico: volante de inscripción
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Una institución educativa necesita elaborar un volante para
          informar que se encuentran abiertas las inscripciones a sus cursos.
          Para organizar el contenido se puede establecer la siguiente
          jerarquía:
        </p>

        <div className="mx-auto max-w-md rounded-xl border-2 border-blue-300 bg-white p-6 shadow-sm">
          <div className="border-b-2 border-blue-800 pb-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              CFP 655 - Esquel
            </p>
            <h3 className="mt-3 text-3xl font-black text-blue-900">
              ¡INSCRIPCIONES ABIERTAS!
            </h3>
          </div>

          <div className="py-5 text-center">
            <p className="text-xl font-bold text-blue-800">
              Cursos de formación profesional
            </p>
            <p className="mt-3 leading-relaxed text-blue-950">
              Aprendé herramientas informáticas y desarrollá nuevas
              capacidades para el mundo laboral.
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4">
            <p className="font-bold text-blue-900">
              Informes e inscripción
            </p>
            <p className="mt-2 text-sm text-blue-950">
              Chacabuco 1036 - Esquel
            </p>
          </div>

          <p className="mt-4 text-center text-sm font-semibold text-blue-800">
            ¡Te esperamos!
          </p>
        </div>

        <p className="mt-4 leading-relaxed">
          En este ejemplo se utiliza un título de gran tamaño para captar
          la atención, un subtítulo para identificar la propuesta y un
          texto breve para explicar la información. Los datos de contacto
          se presentan en un sector diferenciado.
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
              Actividad 1: Reconocer tipografías
            </h3>
            <p className="leading-relaxed">
              Buscá ejemplos de tipografías con serifas, sin serifas y
              decorativas. Escribí dos características de cada categoría
              e indicá en qué tipo de publicación las utilizarías.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 2: Aplicar formatos de texto
            </h3>
            <p className="leading-relaxed">
              En una aplicación de diseño, escribí un título y un párrafo.
              Modificá la fuente, el tamaño, el color y el estilo del texto.
              Guardá el documento con los diferentes formatos aplicados.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 3: Practicar alineaciones
            </h3>
            <p className="leading-relaxed">
              Escribí cuatro párrafos breves y aplicá una alineación
              diferente a cada uno: izquierda, centrada, derecha y
              justificada. Compará los resultados.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 4: Crear una jerarquía tipográfica
            </h3>
            <p className="leading-relaxed">
              Elaborá una composición con un título principal, dos
              subtítulos, un párrafo descriptivo y datos de contacto.
              Utilizá diferentes tamaños, colores y estilos para establecer
              niveles de importancia.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 5: Mejorar la legibilidad
            </h3>
            <p className="leading-relaxed">
              Diseñá un texto con una tipografía difícil de leer y un
              contraste poco adecuado. Luego modificá la fuente, el tamaño,
              el color y el espaciado para mejorar su presentación.
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
            Diseñar el contenido de un volante institucional
          </h3>

          <p className="mb-4 leading-relaxed">
            Una institución necesita promocionar una actividad de capacitación.
            Deberás diseñar la parte textual de un volante que permita
            informar al público sobre la propuesta.
          </p>

          <p className="mb-3 leading-relaxed">
            El volante deberá incluir:
          </p>

          <ul className="mb-4 list-inside list-disc space-y-2 leading-relaxed">
            <li>Nombre de la institución.</li>
            <li>Un título principal que llame la atención.</li>
            <li>Un subtítulo que identifique la actividad.</li>
            <li>Una descripción breve de la propuesta.</li>
            <li>Fecha, horario y lugar.</li>
            <li>Información de contacto.</li>
          </ul>

          <p className="mb-3 leading-relaxed">
            Aplicá los siguientes criterios:
          </p>

          <ul className="mb-4 list-inside list-disc space-y-2 leading-relaxed">
            <li>Seleccioná como máximo dos familias tipográficas.</li>
            <li>Utilizá diferentes tamaños para establecer jerarquías.</li>
            <li>Aplicá colores que permitan leer correctamente los textos.</li>
            <li>Organizá la información mediante alineaciones y espacios.</li>
            <li>Revisá la ortografía y la presentación final.</li>
          </ul>

          <p className="leading-relaxed">
            Guardá el trabajo para continuar incorporando imágenes y
            elementos gráficos en las próximas unidades.
          </p>
        </div>
      </section>
    </div>
  );
}
