import Link from "next/link";

export default function IntroduccionPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Introducción a las publicaciones gráficas
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Las publicaciones gráficas son materiales visuales que permiten
          comunicar información, difundir actividades, promocionar productos
          y presentar servicios. Se utilizan en empresas, instituciones,
          comercios y organizaciones para transmitir mensajes de manera clara
          y atractiva, tanto en formato impreso como digital.
        </p>

        <p className="mt-4 max-w-3xl leading-relaxed">
          En este módulo aprenderás a reconocer los distintos tipos de
          publicaciones gráficas y sus características. También conocerás
          los elementos que intervienen en su diseño y cómo organizar textos,
          imágenes, colores y otros recursos para elaborar materiales
          destinados a informes o publicidad.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          ¿Qué es una publicación gráfica?
        </h2>

        <p className="mb-4 max-w-3xl leading-relaxed">
          Una publicación gráfica es un material de comunicación que combina
          elementos visuales y textos para transmitir un mensaje. Su diseño
          debe tener en cuenta el objetivo de la publicación, el público al
          que está dirigida y el medio por el cual será distribuida.
        </p>

        <div className="rounded-xl border border-blue-200 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            Elementos principales de una publicación
          </h3>

          <ul className="list-inside list-disc space-y-2 leading-relaxed">
            <li>
              <strong>Título:</strong> presenta el tema y permite identificar
              rápidamente el contenido.
            </li>
            <li>
              <strong>Texto:</strong> desarrolla la información que se desea
              comunicar.
            </li>
            <li>
              <strong>Imágenes:</strong> acompañan el mensaje y ayudan a
              transmitir ideas.
            </li>
            <li>
              <strong>Colores:</strong> permiten destacar información y
              establecer una identidad visual.
            </li>
            <li>
              <strong>Tipografías:</strong> determinan la apariencia de los
              textos y facilitan su lectura.
            </li>
            <li>
              <strong>Distribución:</strong> organiza los elementos dentro
              del espacio disponible.
            </li>
          </ul>
        </div>
      </section>

      {/* Tipos de publicaciones */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Tipos de publicaciones gráficas
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Existen diferentes tipos de publicaciones, cada una diseñada para
          cumplir una finalidad específica. Algunas buscan informar, otras
          promocionar productos o servicios y otras presentar contenidos
          institucionales.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Folletos
            </h3>
            <p className="leading-relaxed">
              Materiales que presentan información sobre una institución,
              producto, servicio o actividad. Pueden organizarse en una o
              varias secciones y utilizarse para entregar información al
              público.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Volantes
            </h3>
            <p className="leading-relaxed">
              Publicaciones generalmente breves que comunican promociones,
              eventos, avisos o información de interés. Suelen distribuirse
              de manera masiva.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Afiches y carteles
            </h3>
            <p className="leading-relaxed">
              Materiales diseñados para llamar la atención y transmitir un
              mensaje a través de títulos destacados, imágenes y textos
              breves. Se colocan en espacios visibles.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Invitaciones
            </h3>
            <p className="leading-relaxed">
              Publicaciones utilizadas para comunicar la realización de
              reuniones, actos, capacitaciones, eventos institucionales
              y celebraciones.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Informes gráficos
            </h3>
            <p className="leading-relaxed">
              Documentos que combinan textos, imágenes, tablas y gráficos
              para presentar resultados, estadísticas y actividades de
              una organización.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Catálogos
            </h3>
            <p className="leading-relaxed">
              Publicaciones que organizan y presentan productos o servicios,
              generalmente acompañados de imágenes, descripciones y datos
              relevantes.
            </p>
          </article>
        </div>
      </section>

      {/* Finalidad */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Finalidad de las publicaciones gráficas
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Antes de diseñar una publicación es importante definir qué se desea
          comunicar. El objetivo determina el tipo de material, la cantidad
          de información, el estilo visual y los recursos que se utilizarán.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Informar
            </h3>
            <p className="leading-relaxed">
              Comunicar horarios, procedimientos, novedades, actividades
              y servicios disponibles para un público determinado.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Promocionar
            </h3>
            <p className="leading-relaxed">
              Difundir productos, servicios, ofertas y propuestas mediante
              materiales visuales que despierten el interés del público.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Orientar
            </h3>
            <p className="leading-relaxed">
              Brindar indicaciones, instrucciones y referencias para facilitar
              la realización de trámites o actividades.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Presentar información
            </h3>
            <p className="leading-relaxed">
              Organizar datos y resultados de manera visual para facilitar
              su interpretación en informes y documentos institucionales.
            </p>
          </div>
        </div>
      </section>

      {/* Criterios de diseño */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Características de una buena publicación
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          Una publicación gráfica efectiva debe permitir que el lector
          identifique rápidamente el mensaje principal y encuentre la
          información que necesita. Para lograrlo, es necesario aplicar
          algunos criterios básicos de diseño.
        </p>

        <div className="rounded-xl border border-blue-200 p-6">
          <ul className="list-inside list-disc space-y-3 leading-relaxed">
            <li>
              <strong>Claridad:</strong> el mensaje debe ser fácil de
              comprender y evitar información innecesaria.
            </li>
            <li>
              <strong>Orden:</strong> los elementos deben estar distribuidos
              de manera lógica.
            </li>
            <li>
              <strong>Legibilidad:</strong> los textos deben tener tamaños
              y tipografías adecuados.
            </li>
            <li>
              <strong>Equilibrio visual:</strong> imágenes, textos y espacios
              deben mantener una composición organizada.
            </li>
            <li>
              <strong>Coherencia:</strong> los colores, estilos y recursos
              utilizados deben relacionarse con el objetivo de la publicación.
            </li>
            <li>
              <strong>Calidad:</strong> las imágenes y los textos deben
              conservar una buena presentación al imprimirse.
            </li>
          </ul>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Aplicación en el ámbito administrativo
        </h2>

        <p className="mb-6 max-w-3xl leading-relaxed">
          En el trabajo administrativo, las publicaciones gráficas permiten
          comunicar información de manera organizada y profesional. Pueden
          utilizarse para difundir actividades, informar sobre servicios,
          presentar resultados y orientar a las personas que concurren a
          una institución.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Instituciones educativas
            </h3>
            <p className="leading-relaxed">
              Elaborar afiches de inscripción, folletos informativos,
              invitaciones y carteles para actividades.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Organismos públicos
            </h3>
            <p className="leading-relaxed">
              Diseñar publicaciones con horarios de atención, requisitos
              de trámites, servicios y avisos importantes.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Empresas y comercios
            </h3>
            <p className="leading-relaxed">
              Crear volantes promocionales, catálogos, listas de servicios
              y materiales publicitarios.
            </p>
          </div>
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
              Actividad 1: Reconocer publicaciones gráficas
            </h3>
            <p className="leading-relaxed">
              Buscá ejemplos de folletos, volantes, afiches, carteles e
              invitaciones. Identificá qué tipo de publicación es cada uno
              y cuál es su finalidad.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 2: Analizar una publicación
            </h3>
            <p className="leading-relaxed">
              Seleccioná una publicación gráfica e identificá sus títulos,
              textos, imágenes, colores y distribución. Explicá qué elementos
              permiten comprender el mensaje.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 3: Identificar objetivos de comunicación
            </h3>
            <p className="leading-relaxed">
              Pensá en diferentes situaciones de una institución y determiná
              qué tipo de publicación utilizarías para informar, promocionar,
              orientar o presentar resultados.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 4: Comparar diseños
            </h3>
            <p className="leading-relaxed">
              Compará dos publicaciones diferentes. Analizá cuál presenta
              mejor organización, legibilidad y equilibrio visual. Justificá
              tu elección.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Actividad 5: Planificar una publicación
            </h3>
            <p className="leading-relaxed">
              Imaginá que una institución necesita difundir una actividad.
              Definí el público destinatario, el objetivo, el tipo de
              publicación y los elementos que incluirías en el diseño.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-blue-200 p-6">
        <h2 className="mb-4 text-2xl font-bold text-blue-800">
          Continuá aprendiendo
        </h2>

        <p className="mb-6 leading-relaxed">
          Ahora que conocés los distintos tipos de publicaciones gráficas
          y sus objetivos, vas a explorar las herramientas informáticas
          que permiten diseñarlas y editarlas.
        </p>

        <Link
          href="/cursos/administracion/modulo-7/herramientas-diseno"
          className="inline-flex rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Continuar con herramientas de diseño
        </Link>
      </section>
    </div>
  );
}
