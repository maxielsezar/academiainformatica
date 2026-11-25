export default function FolletosVolantesPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Diseño de folletos y volantes
        </h1>

        <p className="text-lg leading-relaxed ">
          Los folletos y volantes son publicaciones gráficas utilizadas para
          comunicar información, promocionar productos y servicios, difundir
          actividades o presentar propuestas institucionales. Se caracterizan
          por combinar textos, imágenes y elementos gráficos en un espacio
          reducido.
        </p>

        <p className="mt-4 leading-relaxed ">
          En esta clase aprenderemos a planificar y diseñar estos materiales,
          organizar su contenido, seleccionar imágenes y aplicar criterios
          visuales para lograr publicaciones claras, atractivas y adecuadas
          para su público.
        </p>
      </section>

      {/* Diferencias */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          1. ¿Qué es un folleto y qué es un volante?
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-blue-200  p-5">
            <h3 className="mb-3 text-xl font-bold text-blue-900">
              Folleto
            </h3>
            <p className="mb-3 leading-relaxed ">
              Es una publicación que puede contener varias secciones y
              presentar información más detallada sobre una institución,
              producto, servicio o actividad.
            </p>
            <p className="font-semibold text-blue-900">
              Características:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6 ">
              <li>Puede tener una o varias hojas.</li>
              <li>Puede incluir dobleces o pliegues.</li>
              <li>Permite desarrollar información más amplia.</li>
              <li>Combina textos, fotografías e ilustraciones.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200  p-5">
            <h3 className="mb-3 text-xl font-bold text-blue-900">
              Volante
            </h3>
            <p className="mb-3 leading-relaxed ">
              Es una publicación generalmente de una sola hoja, diseñada
              para transmitir un mensaje breve y captar rápidamente la
              atención del público.
            </p>
            <p className="font-semibold text-blue-900">
              Características:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6 ">
              <li>Generalmente utiliza una sola cara o ambas caras.</li>
              <li>Contiene información breve y directa.</li>
              <li>Destaca un mensaje principal.</li>
              <li>Es fácil de distribuir y reproducir.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="border border-blue-200 p-3">Aspecto</th>
                <th className="border border-blue-200 p-3">Folleto</th>
                <th className="border border-blue-200 p-3">Volante</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">Extensión</td>
                <td className="border border-blue-200 p-3">Una o varias secciones.</td>
                <td className="border border-blue-200 p-3">Generalmente una hoja.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">Información</td>
                <td className="border border-blue-200 p-3">Más detallada.</td>
                <td className="border border-blue-200 p-3">Breve y concreta.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">Diseño</td>
                <td className="border border-blue-200 p-3">Puede tener pliegues y paneles.</td>
                <td className="border border-blue-200 p-3">Distribución directa.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">Objetivo</td>
                <td className="border border-blue-200 p-3">Informar y presentar.</td>
                <td className="border border-blue-200 p-3">Comunicar y promocionar.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          2. Objetivos y usos de estas publicaciones
        </h2>

        <p className="mb-4 leading-relaxed ">
          Antes de comenzar un diseño, es necesario identificar qué se quiere
          comunicar y a quién está dirigido el material. El objetivo
          determinará el contenido, el estilo visual y la cantidad de
          información que se incluirá.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border border-blue-200 p-4">
            <h3 className="font-bold text-blue-900">
              Difusión institucional
            </h3>
            <p className="mt-1 ">
              Presentar una institución, sus servicios, actividades,
              horarios, ubicación y medios de contacto.
            </p>
          </div>

          <div className="rounded-lg border border-blue-200 p-4">
            <h3 className="font-bold text-blue-900">
              Promoción comercial
            </h3>
            <p className="mt-1 ">
              Comunicar ofertas, productos, descuentos, promociones y
              características de un servicio.
            </p>
          </div>

          <div className="rounded-lg border border-blue-200 p-4">
            <h3 className="font-bold text-blue-900">
              Información educativa
            </h3>
            <p className="mt-1 ">
              Difundir cursos, capacitaciones, jornadas, talleres y
              actividades de formación.
            </p>
          </div>

          <div className="rounded-lg border border-blue-200 p-4">
            <h3 className="font-bold text-blue-900">
              Comunicación de eventos
            </h3>
            <p className="mt-1 ">
              Informar fechas, lugares, horarios, requisitos e indicaciones
              para participar en una actividad.
            </p>
          </div>
        </div>
      </section>

      {/* Planificación */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          3. Planificación del contenido
        </h2>

        <p className="mb-4 leading-relaxed ">
          Un buen diseño comienza antes de abrir la aplicación. Primero
          debemos organizar la información que se va a comunicar y establecer
          cuáles son los datos más importantes.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Información que debemos definir
        </h3>

        <ol className="list-inside list-decimal space-y-3 ">
          <li>
            <strong>Objetivo:</strong> determinar qué se quiere comunicar,
            informar o promocionar.
          </li>
          <li>
            <strong>Público destinatario:</strong> identificar a quién está
            dirigida la publicación.
          </li>
          <li>
            <strong>Mensaje principal:</strong> establecer qué información
            debe destacarse.
          </li>
          <li>
            <strong>Información complementaria:</strong> reunir fechas,
            horarios, requisitos, precios o características.
          </li>
          <li>
            <strong>Datos de contacto:</strong> incluir teléfono, correo
            electrónico, dirección, redes sociales o sitio web cuando
            corresponda.
          </li>
          <li>
            <strong>Recursos visuales:</strong> seleccionar fotografías,
            logotipos, íconos y colores adecuados.
          </li>
        </ol>

        <div className="mt-6 rounded-xl border border-blue-200  p-5">
          <h3 className="mb-3 font-bold text-blue-900">
            Ejemplo: difusión de un curso
          </h3>
          <p className="mb-3 ">
            Una institución necesita promocionar un curso de informática.
            Antes de diseñar el volante, reúne la siguiente información:
          </p>

          <ul className="space-y-2 ">
            <li><strong>Objetivo:</strong> conseguir nuevos estudiantes.</li>
            <li><strong>Público:</strong> personas interesadas en aprender informática.</li>
            <li><strong>Mensaje principal:</strong> inscripción abierta.</li>
            <li><strong>Información:</strong> nombre del curso, duración y modalidad.</li>
            <li><strong>Contacto:</strong> dirección y sitio web de la institución.</li>
            <li><strong>Recursos:</strong> logotipo e imagen relacionada con la informática.</li>
          </ul>
        </div>
      </section>

      {/* Estructura del volante */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          4. Estructura de un volante
        </h2>

        <p className="mb-4 leading-relaxed ">
          Un volante debe presentar la información de manera rápida y
          ordenada. Para lograrlo, podemos dividir el espacio en diferentes
          sectores según la importancia de cada elemento.
        </p>

        <div className="mx-auto max-w-md overflow-hidden rounded-xl border-2 border-blue-300 bg-white shadow-sm">
          <div className="bg-blue-900 p-5 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-widest">
              Identificación institucional
            </p>
            <div className="mt-2 rounded-lg border border-white/50 p-3">
              LOGOTIPO
            </div>
          </div>

          <div className=" p-5 text-center">
            <p className="text-sm font-bold uppercase text-blue-700">
              Mensaje principal
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-blue-950">
              ¡INSCRIPCIONES ABIERTAS!
            </h3>
            <p className="mt-2 text-lg font-semibold text-blue-800">
              Curso de Informática
            </p>
          </div>

          <div className="p-5">
            <div className="mb-4 flex h-28 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
              Imagen ilustrativa
            </div>
            <ul className="space-y-2 text-sm ">
              <li>• Duración: 4 meses</li>
              <li>• Modalidad: presencial</li>
              <li>• Capacitación práctica</li>
            </ul>
          </div>

          <div className="bg-blue-800 p-5 text-center text-white">
            <p className="font-bold">MÁS INFORMACIÓN</p>
            <p className="mt-1 text-sm">Dirección | Teléfono | Sitio web</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Esquema orientativo de distribución de los elementos de un volante.
          La composición puede variar según el objetivo y el estilo de diseño.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-blue-900">
          Elementos principales
        </h3>

        <ul className="list-disc space-y-2 pl-6 ">
          <li>
            <strong>Logotipo:</strong> identifica a la institución o empresa.
          </li>
          <li>
            <strong>Título:</strong> presenta el mensaje principal y debe
            destacarse visualmente.
          </li>
          <li>
            <strong>Imagen:</strong> acompaña y refuerza el contenido.
          </li>
          <li>
            <strong>Información:</strong> desarrolla los datos necesarios.
          </li>
          <li>
            <strong>Llamado a la acción:</strong> invita al lector a realizar
            algo, como inscribirse, consultar o participar.
          </li>
          <li>
            <strong>Contacto:</strong> facilita que el público pueda obtener
            más información.
          </li>
        </ul>
      </section>

      {/* Folleto plegable */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          5. Diseño de un folleto plegable
        </h2>

        <p className="mb-4 leading-relaxed ">
          Una alternativa frecuente es el folleto tríptico, que se obtiene
          al dividir una hoja en tres paneles y realizar dos pliegues. Esto
          permite organizar la información en diferentes secciones.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Distribución de un tríptico
        </h3>

        <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-lg border border-blue-300 text-center">
          <div className="bg-blue-100 p-3">
            <p className="text-sm font-bold text-blue-900">Panel 1</p>
            <p className="mt-2 text-xs ">
              Información complementaria
            </p>
          </div>
          <div className="bg-blue-200 p-3">
            <p className="text-sm font-bold text-blue-900">Panel 2</p>
            <p className="mt-2 text-xs ">
              Presentación y contenido
            </p>
          </div>
          <div className="bg-blue-300 p-3">
            <p className="text-sm font-bold text-blue-900">Panel 3</p>
            <p className="mt-2 text-xs ">
              Portada
            </p>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600">
          Esquema ilustrativo de una de las caras del tríptico. La distribución
          de los paneles puede ajustarse según el tipo de plegado.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-blue-900">
          ¿Qué información incluir en cada panel?
        </h3>

        <div className="space-y-4">
          <div className="rounded-lg border border-blue-200 p-4">
            <h4 className="font-bold text-blue-900">Portada</h4>
            <p className="mt-1 ">
              Nombre de la institución, título principal, imagen destacada
              y una frase que invite a conocer el contenido.
            </p>
          </div>

          <div className="rounded-lg border border-blue-200 p-4">
            <h4 className="font-bold text-blue-900">Presentación</h4>
            <p className="mt-1 ">
              Introducción al tema, descripción de la institución, producto
              o servicio.
            </p>
          </div>

          <div className="rounded-lg border border-blue-200 p-4">
            <h4 className="font-bold text-blue-900">Contenido principal</h4>
            <p className="mt-1 ">
              Características, beneficios, actividades, propuestas o
              información detallada.
            </p>
          </div>

          <div className="rounded-lg border border-blue-200 p-4">
            <h4 className="font-bold text-blue-900">Información de contacto</h4>
            <p className="mt-1 ">
              Dirección, teléfono, correo electrónico, redes sociales y
              otros medios de consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Criterios de diseño */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          6. Criterios para lograr un buen diseño
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Jerarquía visual
            </h3>
            <p className="">
              Los elementos deben organizarse según su importancia. El título
              y el mensaje principal tienen que destacarse por encima de la
              información secundaria.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Uso del color
            </h3>
            <p className="">
              Conviene seleccionar una paleta de colores coherente con la
              institución o el mensaje. El contraste entre texto y fondo
              debe permitir una lectura cómoda.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Tipografía legible
            </h3>
            <p className="">
              Se recomienda utilizar pocas tipografías y diferenciar títulos,
              subtítulos y textos mediante tamaños y estilos.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Imágenes de calidad
            </h3>
            <p className="">
              Las imágenes deben tener buena resolución, estar relacionadas
              con el contenido y no dificultar la lectura.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Espacios y distribución
            </h3>
            <p className="">
              Es importante evitar la acumulación de información. Los espacios
              libres ayudan a separar secciones y permiten identificar
              rápidamente cada contenido.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Claridad del mensaje
            </h3>
            <p className="">
              El lector debe comprender rápidamente qué se comunica y qué
              acción se espera que realice.
            </p>
          </div>
        </div>
      </section>


      {/* Impresión */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          7. Preparación del folleto o volante para imprimir
        </h2>

        <p className="mb-4 leading-relaxed ">
          Una vez terminado el diseño, debemos comprobar que el documento
          esté correctamente preparado para su impresión.
        </p>

        <ul className="list-disc space-y-3 pl-6 ">
          <li>
            Verificar el tamaño de papel, por ejemplo A4 o A5.
          </li>
          <li>
            Comprobar la orientación vertical u horizontal.
          </li>
          <li>
            Revisar márgenes y espacios de seguridad.
          </li>
          <li>
            Confirmar que no existan textos cortados o imágenes fuera de la
            página.
          </li>
          <li>
            Revisar ortografía, fechas, horarios y datos de contacto.
          </li>
          <li>
            Comprobar la calidad de las imágenes.
          </li>
          <li>
            Exportar el documento en PDF para conservar su presentación.
          </li>
          <li>
            Realizar una prueba de impresión antes de producir varias copias.
          </li>
        </ul>

        <div className="mt-6 rounded-xl border border-amber-300 p-5">
          <h3 className="mb-2 font-bold text-amber-900">
            Atención con los folletos plegables
          </h3>
          <p className="">
            Antes de imprimir un tríptico, es necesario verificar el orden
            de los paneles en ambas caras de la hoja. También se debe comprobar
            que el diseño coincida con la forma en que se realizará el plegado.
          </p>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          8. Aplicación en el ámbito laboral
        </h2>

        <p className="mb-4 leading-relaxed ">
          La elaboración de folletos y volantes es una tarea frecuente en
          oficinas, instituciones educativas, comercios y organizaciones.
          Permite comunicar información sin necesidad de elaborar documentos
          extensos.
        </p>

        <ul className="list-disc space-y-3 pl-6 ">
          <li>
            Diseñar volantes para anunciar inscripciones a cursos y
            capacitaciones.
          </li>
          <li>
            Crear folletos para presentar servicios de una institución.
          </li>
          <li>
            Elaborar materiales para comunicar horarios y procedimientos.
          </li>
          <li>
            Diseñar publicaciones para promocionar productos o actividades.
          </li>
          <li>
            Preparar materiales informativos para entregar a clientes o
            visitantes.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 1: Reconocimiento de publicaciones
            </h3>
            <p className="mb-3 ">
              Buscá ejemplos de folletos y volantes en Internet o en materiales
              impresos.
            </p>
            <ul className="list-disc space-y-2 pl-6 ">
              <li>Seleccioná dos folletos y dos volantes.</li>
              <li>Identificá el objetivo de cada publicación.</li>
              <li>Reconocé sus títulos, imágenes y datos de contacto.</li>
              <li>Explicá qué diferencias encontrás entre ellos.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 2: Planificación de un volante
            </h3>
            <p className="mb-3 ">
              Una institución necesita promocionar una jornada de capacitación.
              Antes de diseñar el volante, organizá la información necesaria.
            </p>
            <ul className="list-disc space-y-2 pl-6 ">
              <li>Definí el objetivo y el público destinatario.</li>
              <li>Redactá un título atractivo.</li>
              <li>Determiná qué información debe incluirse.</li>
              <li>Seleccioná una imagen adecuada.</li>
              <li>Establecé los datos de contacto que se mostrarán.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 3: Diseño de un volante institucional
            </h3>
            <p className="mb-3 ">
              Utilizando Word, Canva u otra aplicación disponible, diseñá un
              volante para difundir un curso de informática.
            </p>
            <ul className="list-disc space-y-2 pl-6 ">
              <li>Configurá una página A5 en orientación vertical.</li>
              <li>Incorporá un logotipo institucional.</li>
              <li>Agregá un título destacado y una imagen.</li>
              <li>Incluí duración, modalidad y descripción breve.</li>
              <li>Agregá información de contacto.</li>
              <li>Aplicá colores y tipografías coherentes.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 4: Diseño de un folleto tríptico
            </h3>
            <p className="mb-3 ">
              Diseñá un folleto tríptico para presentar los servicios de una
              institución educativa.
            </p>
            <ul className="list-disc space-y-2 pl-6 ">
              <li>Configurá una hoja A4 en orientación horizontal.</li>
              <li>Dividí el espacio en tres paneles por cada cara.</li>
              <li>Diseñá una portada con el nombre y logotipo de la institución.</li>
              <li>Distribuí la información en las secciones interiores.</li>
              <li>Incorporá imágenes y elementos gráficos.</li>
              <li>Reservá un espacio para los datos de contacto.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 5: Revisión y mejora de una publicación
            </h3>
            <p className="mb-3 ">
              Intercambiá tu volante o folleto con un compañero y revisá
              el diseño realizado.
            </p>
            <ul className="list-disc space-y-2 pl-6 ">
              <li>Comprobá que el mensaje principal se comprenda rápidamente.</li>
              <li>Revisá la legibilidad de los textos.</li>
              <li>Verificá que las imágenes tengan buena calidad.</li>
              <li>Identificá posibles errores de alineación o distribución.</li>
              <li>Proponé al menos tres mejoras y aplicalas al diseño.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integradora */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividad integradora: Campaña de difusión institucional
        </h2>

        <div className="rounded-xl border border-blue-300  p-6">
          <p className="mb-4 leading-relaxed ">
            El CFP 655 necesita difundir su propuesta de formación profesional
            y dar a conocer los cursos disponibles. Para ello, deberás elaborar
            dos publicaciones gráficas que comuniquen la oferta educativa de
            manera clara y atractiva.
          </p>

          <h3 className="mb-3 font-bold text-blue-900">
            Consigna
          </h3>

          <p className="mb-4 ">
            Elaborá las siguientes publicaciones utilizando una aplicación
            de diseño:
          </p>

          <div className="mb-5 space-y-4">
            <div className="rounded-lg p-4">
              <h4 className="font-bold text-blue-900">
                Producto 1: Volante de difusión
              </h4>
              <p className="mt-2 ">
                Diseñá un volante A5 para promocionar la inscripción a los
                cursos. Debe incluir un título principal, logotipo, imágenes,
                información de la propuesta educativa y datos de contacto.
              </p>
            </div>

            <div className="rounded-lg p-4">
              <h4 className="font-bold text-blue-900">
                Producto 2: Folleto institucional
              </h4>
              <p className="mt-2 ">
                Diseñá un folleto tríptico A4 horizontal que presente la
                institución, sus propuestas de formación, características
                de los cursos y medios de contacto.
              </p>
            </div>
          </div>

          <h3 className="mb-3 font-bold text-blue-900">
            Requisitos de diseño
          </h3>

          <ul className="mb-5 list-disc space-y-2 pl-6 ">
            <li>Utilizar una identidad visual coherente en ambas publicaciones.</li>
            <li>Incorporar imágenes de buena calidad.</li>
            <li>Utilizar tipografías legibles y jerarquías claras.</li>
            <li>Organizar correctamente los textos y elementos gráficos.</li>
            <li>Incluir información real y verificar su exactitud.</li>
            <li>Revisar la distribución de los paneles del tríptico.</li>
            <li>Exportar ambos trabajos en formato PDF.</li>
          </ul>

          <h3 className="mb-3 font-bold text-blue-900">
            Entrega
          </h3>

          <p className="mb-5 ">
            Presentá los dos archivos PDF y conservá también los archivos
            editables para permitir futuras modificaciones.
          </p>

          <h3 className="mb-3 font-bold text-blue-900">
            Criterios de evaluación
          </h3>

          <ul className="list-disc space-y-2 pl-6 ">
            <li>Planificación y organización del contenido.</li>
            <li>Claridad del mensaje y adecuación al público destinatario.</li>
            <li>Uso de imágenes y elementos gráficos.</li>
            <li>Aplicación de criterios de composición visual.</li>
            <li>Correcta distribución de la información en el tríptico.</li>
            <li>Legibilidad, ortografía y presentación general.</li>
            <li>Exportación y entrega de los archivos solicitados.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section className="rounded-xl border border-blue-200  p-6">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          Para recordar
        </h2>

        <p className="leading-relaxed ">
          Diseñar folletos y volantes requiere combinar planificación,
          organización de la información y recursos visuales. Una publicación
          efectiva no necesita contener muchos elementos, sino presentar los
          datos importantes de manera clara, ordenada y atractiva. Antes de
          finalizar, siempre debemos revisar el contenido y comprobar que el
          archivo esté correctamente preparado para compartir o imprimir.
        </p>
      </section>
    </div>
  );
}
