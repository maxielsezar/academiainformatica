import Link from "next/link";

export default function HerramientasDisenoPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Herramientas y aplicaciones de diseño gráfico
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Las aplicaciones de diseño gráfico permiten crear y modificar
          publicaciones destinadas a la impresión o a la difusión digital.
          Mediante estas herramientas es posible combinar textos, imágenes,
          formas, colores y otros elementos visuales para elaborar folletos,
          volantes, afiches, carteles e informes.
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed">
          En esta unidad conocerás diferentes programas y herramientas de
          edición, sus características principales y las funciones que
          permiten organizar los elementos de una publicación. También
          aprenderás a reconocer qué aplicación resulta conveniente según
          el tipo de trabajo que necesites realizar.
        </p>
      </section>

      {/* Aplicaciones */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Aplicaciones para crear publicaciones gráficas
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Existen diferentes aplicaciones que permiten diseñar materiales
          gráficos. Algunas están orientadas a la edición de documentos,
          mientras que otras ofrecen herramientas específicas para trabajar
          con imágenes, ilustraciones y composiciones visuales.
        </p>

        <div className="space-y-5">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Microsoft Publisher
            </h3>
            <p className="leading-relaxed">
              Es una aplicación orientada al diseño de publicaciones. Permite
              crear folletos, tarjetas, invitaciones, carteles y otros
              materiales mediante plantillas y herramientas de composición.
            </p>
            <p className="mt-3 leading-relaxed">
              Facilita la distribución de textos e imágenes dentro de una
              página y permite preparar documentos para imprimir.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Microsoft Word
            </h3>
            <p className="leading-relaxed">
              Aunque es principalmente un procesador de textos, permite
              elaborar publicaciones sencillas como volantes, invitaciones,
              carteles e informes con imágenes y elementos gráficos.
            </p>
            <p className="mt-3 leading-relaxed">
              Cuenta con herramientas para insertar cuadros de texto,
              imágenes, formas, tablas y modificar el diseño de página.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Canva
            </h3>
            <p className="leading-relaxed">
              Es una herramienta de diseño gráfico que permite crear
              publicaciones mediante plantillas y elementos prediseñados.
              Se utiliza para elaborar afiches, folletos, volantes,
              invitaciones y materiales publicitarios.
            </p>
            <p className="mt-3 leading-relaxed">
              Ofrece recursos para incorporar textos, fotografías,
              ilustraciones, íconos y formas.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              GIMP
            </h3>
            <p className="leading-relaxed">
              Es un programa de edición de imágenes que permite retocar
              fotografías, modificar colores, recortar imágenes y trabajar
              con capas.
            </p>
            <p className="mt-3 leading-relaxed">
              Puede utilizarse para preparar imágenes que luego se incorporan
              en folletos, afiches y otras publicaciones.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 text-lg font-bold text-blue-900">
              Inkscape
            </h3>
            <p className="leading-relaxed">
              Es una aplicación de diseño vectorial que permite crear
              ilustraciones, logotipos, íconos, diagramas y otros elementos
              gráficos.
            </p>
            <p className="mt-3 leading-relaxed">
              Trabaja con objetos que pueden modificarse en tamaño y forma
              sin perder calidad por ampliación.
            </p>
          </article>
        </div>
      </section>

      {/* Tipos de herramientas */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Herramientas principales de diseño
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Aunque cada aplicación tiene una interfaz diferente, muchas
          comparten herramientas que permiten realizar tareas similares
          durante la creación de una publicación.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Herramientas de texto
            </h3>
            <p className="leading-relaxed">
              Permiten agregar títulos, subtítulos y párrafos, modificar
              tipografías, tamaños, colores, alineación y estilos.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Herramientas de imágenes
            </h3>
            <p className="leading-relaxed">
              Permiten insertar fotografías e ilustraciones, recortarlas,
              cambiar su tamaño, ajustar su posición y modificar su
              apariencia.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Herramientas de formas
            </h3>
            <p className="leading-relaxed">
              Permiten incorporar rectángulos, círculos, líneas, flechas y
              otros elementos para organizar y destacar información.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Herramientas de color
            </h3>
            <p className="leading-relaxed">
              Permiten seleccionar colores para textos, fondos, bordes y
              formas, manteniendo una composición visual coherente.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Herramientas de organización
            </h3>
            <p className="leading-relaxed">
              Permiten alinear, distribuir, agrupar, ordenar y posicionar
              los diferentes objetos dentro de la página.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Herramientas de exportación
            </h3>
            <p className="leading-relaxed">
              Permiten guardar o convertir los trabajos en formatos como
              PDF o imagen para compartirlos o prepararlos para su impresión.
            </p>
          </article>
        </div>
      </section>

      {/* Interfaz */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Reconocimiento del entorno de trabajo
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Para utilizar una aplicación de diseño es importante reconocer
          las partes principales de su interfaz. Aunque pueden cambiar
          según el programa, generalmente incluyen los siguientes elementos:
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Barra de menús y opciones
            </h3>
            <p className="leading-relaxed">
              Contiene comandos para crear, abrir, guardar, editar y configurar
              los documentos.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Barra de herramientas
            </h3>
            <p className="leading-relaxed">
              Reúne accesos directos a funciones de selección, texto,
              imágenes, formas y edición.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Área de trabajo
            </h3>
            <p className="leading-relaxed">
              Es el espacio donde se construye la publicación y se ubican
              los diferentes elementos gráficos.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Panel de propiedades
            </h3>
            <p className="leading-relaxed">
              Permite modificar las características del objeto seleccionado,
              como tamaño, posición, color, borde y formato.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Opciones de visualización
            </h3>
            <p className="leading-relaxed">
              Permiten ampliar o reducir la vista, recorrer el documento
              y revisar la composición general.
            </p>
          </div>
        </div>
      </section>

      {/* Selección de aplicación */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          ¿Qué aplicación conviene utilizar?
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          La elección depende del tipo de publicación que se desea crear,
          las herramientas disponibles y el nivel de edición necesario.
          No todos los trabajos requieren utilizar un programa especializado.
        </p>

        <div className="overflow-x-auto rounded-xl border border-blue-200">
          <table className="w-full min-w-150 border-collapse text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="border-b border-blue-200 p-4 text-blue-900">
                  Aplicación
                </th>
                <th className="border-b border-blue-200 p-4 text-blue-900">
                  Uso principal
                </th>
                <th className="border-b border-blue-200 p-4 text-blue-900">
                  Ejemplos
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold">
                  Publisher
                </td>
                <td className="border-b border-blue-100 p-4">
                  Diseño de publicaciones
                </td>
                <td className="border-b border-blue-100 p-4">
                  Folletos, tarjetas y carteles
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold">
                  Word
                </td>
                <td className="border-b border-blue-100 p-4">
                  Documentos y diseños sencillos
                </td>
                <td className="border-b border-blue-100 p-4">
                  Invitaciones, volantes e informes
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold">
                  Canva
                </td>
                <td className="border-b border-blue-100 p-4">
                  Diseño mediante plantillas
                </td>
                <td className="border-b border-blue-100 p-4">
                  Afiches, folletos y publicidad
                </td>
              </tr>
              <tr>
                <td className="border-b border-blue-100 p-4 font-semibold">
                  GIMP
                </td>
                <td className="border-b border-blue-100 p-4">
                  Edición de imágenes
                </td>
                <td className="border-b border-blue-100 p-4">
                  Fotografías y recursos visuales
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">
                  Inkscape
                </td>
                <td className="p-4">
                  Diseño vectorial
                </td>
                <td className="p-4">
                  Logotipos, íconos e ilustraciones
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Buenas prácticas de trabajo
        </h2>

        <div className="rounded-xl border border-blue-200 p-6">
          <ul className="list-inside list-disc space-y-3 leading-relaxed">
            <li>
              Elegir la aplicación de acuerdo con el tipo de publicación.
            </li>
            <li>
              Guardar el documento periódicamente para evitar perder cambios.
            </li>
            <li>
              Organizar los archivos e imágenes utilizados en el proyecto.
            </li>
            <li>
              Utilizar imágenes de buena calidad y contar con autorización
              para su uso cuando corresponda.
            </li>
            <li>
              Mantener una distribución ordenada de los elementos.
            </li>
            <li>
              Revisar los textos y corregir errores antes de finalizar.
            </li>
            <li>
              Exportar una copia del trabajo en un formato adecuado para
              compartir o imprimir.
            </li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividades de aprendizaje
        </h2>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 1: Reconocer aplicaciones
            </h3>
            <p className="leading-relaxed">
              Investigá las características de Microsoft Word, Canva y GIMP. Escribí qué tipo de trabajos permite realizar cada
              aplicación.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 2: Identificar herramientas
            </h3>
            <p className="leading-relaxed">
              Abrí una aplicación de diseño y reconocé las herramientas
              disponibles para insertar textos, imágenes, formas y colores.
              Registrá sus nombres y funciones.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 3: Explorar el entorno de trabajo
            </h3>
            <p className="leading-relaxed">
              Identificá la barra de herramientas, el área de trabajo,
              los menús y las opciones de edición de una aplicación.
              Realizá una descripción de cada sector.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 4: Seleccionar una aplicación
            </h3>
            <p className="leading-relaxed">
              Indicá qué aplicación utilizarías para crear un folleto,
              editar una fotografía, diseñar un logotipo y elaborar
              una invitación. Justificá tus elecciones.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 5: Primer contacto con el diseño
            </h3>
            <p className="leading-relaxed">
              Abrí una aplicación de tu elección, creá un documento nuevo
              e incorporá un título, un cuadro de texto, una imagen y una
              forma geométrica. Guardá el archivo con el nombre
              "Practica de diseño".
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
            Selección de herramientas para una institución
          </h3>

          <p className="mb-4 leading-relaxed">
            Una institución necesita elaborar diferentes materiales para
            comunicar sus actividades: un folleto informativo, un afiche
            para anunciar una inscripción y un informe con imágenes.
          </p>

          <p className="mb-3 leading-relaxed">
            Tu tarea consiste en:
          </p>

          <ul className="mb-4 list-inside list-disc space-y-2 leading-relaxed">
            <li>Identificar qué aplicación utilizarías para cada material.</li>
            <li>Seleccionar las herramientas necesarias para diseñarlos.</li>
            <li>Explicar qué elementos gráficos incorporarías.</li>
            <li>Indicar cómo guardarías y prepararías los archivos.</li>
          </ul>

          <p className="leading-relaxed">
            Presentá tus decisiones en un documento breve y justificá
            por qué las aplicaciones elegidas resultan adecuadas para
            cada trabajo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border border-blue-200 p-6">
        <h2 className="mb-4 text-2xl font-bold text-blue-800">
          Continuá aprendiendo
        </h2>

        <p className="mb-6 leading-relaxed">
          Ahora que conocés las aplicaciones y herramientas de diseño,
          vas a aprender a configurar una página y organizar los elementos
          que forman parte de una publicación gráfica.
        </p>

        <Link
          href="/cursos/administracion/modulo-7/configuracion-pagina"
          className="inline-flex rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Continuar con configuración de página
        </Link>
      </section>
    </div>
  );
}
