import Link from "next/link";

export default function Modulo3Page() {
  const contenidos = [
    {
      numero: "01",
      titulo: "Introducción a la interfaz con el usuario",
      descripcion:
        "Comprender la importancia de diseñar interfaces que faciliten el uso de una base de datos y permitan acceder a la información de manera clara y organizada.",
      temas: [
        "Concepto de interfaz con el usuario",
        "Elementos de una interfaz",
        "Organización de la información",
        "Facilidad de uso y accesibilidad",
      ],
      href: "#introduccion",
    },
    {
      numero: "02",
      titulo: "Diseño y creación de formularios",
      descripcion:
        "Aprender a construir formularios en Microsoft Access para ingresar, consultar y modificar información almacenada en las tablas de una base de datos.",
      temas: [
        "Concepto y utilidad de los formularios",
        "Creación mediante asistentes y herramientas de diseño",
        "Cuadros de texto, etiquetas y botones",
        "Listas desplegables y controles",
        "Vinculación con tablas y consultas",
        "Organización y formato de formularios",
      ],
      href: "#formularios",
    },
    {
      numero: "03",
      titulo: "Diseño de formularios para tareas administrativas",
      descripcion:
        "Aplicar los conocimientos adquiridos para crear formularios que permitan gestionar registros de manera práctica y ordenada.",
      temas: [
        "Formularios para registrar clientes",
        "Formularios para gestionar productos",
        "Formularios para registrar ventas",
        "Navegación entre registros",
        "Validación y organización de datos",
      ],
      href: "#formularios-administrativos",
    },
    {
      numero: "04",
      titulo: "Creación y diseño de informes",
      descripcion:
        "Utilizar los informes de Access para presentar la información de una base de datos de forma organizada, legible y adecuada para su consulta o impresión.",
      temas: [
        "Concepto y finalidad de los informes",
        "Creación de informes mediante asistentes",
        "Diseño y formato de informes",
        "Agrupación y ordenamiento de datos",
        "Encabezados, pies de página y totales",
        "Vista previa e impresión",
      ],
      href: "#informes",
    },
    {
      numero: "05",
      titulo: "Informes para la gestión administrativa",
      descripcion:
        "Elaborar informes que permitan analizar la información registrada y comunicar resultados útiles para la toma de decisiones.",
      temas: [
        "Listados de clientes y proveedores",
        "Informes de ventas y productos",
        "Listados de registros pendientes",
        "Presentación de totales y resúmenes",
        "Exportación e impresión de informes",
      ],
      href: "#informes-administrativos",
    },
    {
      numero: "06",
      titulo: "Actividad integradora",
      descripcion:
        "Construir una interfaz de trabajo para una base de datos administrativa, incorporando formularios de carga y consulta e informes para presentar los datos.",
      temas: [
        "Diseño de formularios vinculados a las tablas",
        "Registro y modificación de información",
        "Diseño de informes a partir de los datos",
        "Verificación del funcionamiento",
        "Presentación del trabajo realizado",
      ],
      href: "#actividad-integradora",
    },
  ];

  return (
    <main className="space-y-16">
      {/* Encabezado */}
      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-8 md:p-12">
        <p className="mb-3 font-semibold uppercase tracking-wide text-blue-700">
          Operador de Bases de Datos para Oficina
        </p>

        <h1 className="mb-6 text-3xl font-bold text-blue-900 md:text-4xl">
          Módulo 3: Interfaz con el usuario
        </h1>

        <p className="mb-6 max-w-3xl text-lg leading-relaxed text-blue-950">
          En este módulo aprenderás a diseñar formularios e informes en
          Microsoft Access para facilitar la interacción con una base de datos.
          Vas a trabajar con herramientas que permiten ingresar, consultar,
          organizar y presentar información de manera clara y eficiente.
        </p>
      </section>

      {/* Introducción */}
      <section id="introduccion" className="space-y-5">
        <h2 className="text-2xl font-bold text-blue-800">
          ¿Qué vas a aprender?
        </h2>

        <p className="max-w-4xl leading-relaxed">
          Una base de datos no solo debe almacenar información correctamente.
          También necesita ofrecer herramientas que permitan trabajar con esos
          datos sin tener que acceder directamente a las tablas. Para eso,
          Microsoft Access dispone de formularios e informes.
        </p>

        <p className="max-w-4xl leading-relaxed">
          Los formularios facilitan la carga y modificación de registros,
          mientras que los informes permiten presentar los datos de forma
          ordenada para su lectura, análisis, impresión o distribución.
          Durante el módulo, desarrollarás interfaces relacionadas con
          situaciones habituales de una oficina.
        </p>
      </section>

      {/* Capacidades */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          Capacidades que desarrollarás
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              titulo: "Diseñar formularios",
              descripcion:
                "Crear interfaces para ingresar, consultar y modificar registros de una base de datos.",
            },
            {
              titulo: "Organizar la información",
              descripcion:
                "Distribuir campos y controles para que los datos puedan visualizarse y cargarse con facilidad.",
            },
            {
              titulo: "Elaborar informes",
              descripcion:
                "Presentar registros mediante listados organizados, agrupaciones y formatos adecuados.",
            },
            {
              titulo: "Aplicar criterios administrativos",
              descripcion:
                "Construir herramientas útiles para gestionar clientes, productos, ventas y otras operaciones.",
            },
          ].map((capacidad, index) => (
            <article
              key={index}
              className="rounded-xl border border-blue-200 p-6"
            >
              <h3 className="mb-3 text-lg font-bold text-blue-800">
                {capacidad.titulo}
              </h3>
              <p className="leading-relaxed text-blue-950">
                {capacidad.descripcion}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contenidos */}
      <section id="contenidos" className="space-y-8">
        <h2 className="text-2xl font-bold text-blue-800">
          Contenidos del módulo
        </h2>

        <p className="max-w-4xl leading-relaxed">
          Avanzá por los siguientes contenidos para conocer las herramientas,
          realizar las actividades prácticas y aplicarlas en el desarrollo de
          una base de datos funcional.
        </p>

        <div className="space-y-6">
          {contenidos.map((contenido) => (
            <article
              key={contenido.numero}
              id={contenido.href.replace("#", "")}
              className="rounded-xl border border-blue-200 p-6 md:p-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-800">
                  {contenido.numero}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    {contenido.titulo}
                  </h3>
                  <p className="mt-2 leading-relaxed text-blue-950">
                    {contenido.descripcion}
                  </p>
                </div>
              </div>

              <h4 className="mb-3 font-semibold text-blue-800">
                Temas principales
              </h4>

              <ul className="grid gap-2 sm:grid-cols-2">
                {contenido.temas.map((tema, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 font-bold text-blue-700">✓</span>
                    <span className="leading-relaxed text-blue-950">
                      {tema}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Aplicación laboral */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800">
          Aplicación en el ámbito laboral
        </h2>

        <p className="max-w-4xl leading-relaxed">
          En una oficina, las personas necesitan registrar operaciones y
          obtener información sin perder tiempo buscando datos manualmente.
          Los formularios y los informes permiten organizar estas tareas y
          mejorar el acceso a la información.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 font-bold text-blue-900">
              Gestión de clientes
            </h3>
            <p className="leading-relaxed text-blue-950">
              Formularios para registrar datos de contacto e informes para
              consultar el listado de clientes.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 font-bold text-blue-900">
              Administración de ventas
            </h3>
            <p className="leading-relaxed text-blue-950">
              Formularios para cargar operaciones e informes para revisar
              ventas realizadas y sus importes.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 font-bold text-blue-900">
              Control de productos
            </h3>
            <p className="leading-relaxed text-blue-950">
              Interfaces para administrar productos e informes para consultar
              precios, existencias y categorías.
            </p>
          </article>
        </div>
      </section>

      {/* Actividad integradora */}
      <section
        id="actividad-integradora"
        className="rounded-2xl border border-blue-200 p-8 md:p-10"
      >
        <h2 className="mb-5 text-2xl font-bold text-blue-900">
          Actividad integradora del módulo
        </h2>

        <p className="mb-6 max-w-4xl leading-relaxed text-blue-950">
          Vas a trabajar sobre una base de datos administrativa desarrollada en
          los módulos anteriores. El objetivo será crear una interfaz que
          permita utilizarla de manera sencilla y presentar la información
          mediante informes.
        </p>

        <h3 className="mb-3 text-lg font-bold text-blue-900">
          Consignas generales
        </h3>

        <ol className="mb-8 list-decimal space-y-3 pl-6 text-blue-950">
          <li>
            Revisá las tablas y relaciones de la base de datos existente.
          </li>
          <li>
            Diseñá un formulario para registrar información de una entidad
            principal, como clientes o productos.
          </li>
          <li>
            Incorporá controles adecuados para facilitar la carga y consulta
            de los registros.
          </li>
          <li>
            Creá un informe que presente los datos de manera organizada.
          </li>
          <li>
            Verificá que los formularios permitan trabajar con los registros y
            que el informe muestre la información esperada.
          </li>
          <li>
            Presentá el resultado y explicá las decisiones tomadas durante el
            diseño.
          </li>
        </ol>

        <p className="mb-6 leading-relaxed text-blue-950">
          La actividad se considerará completa cuando la base de datos cuente
          con formularios funcionales, al menos un informe correctamente
          diseñado y una presentación clara de la información.
        </p>

        <div className="rounded-xl border border-blue-200 p-5">
          <h3 className="mb-2 font-bold text-blue-900">
            Criterios de evaluación
          </h3>
          <ul className="space-y-2 text-blue-950">
            <li>✓ Relación correcta entre formularios y datos.</li>
            <li>✓ Organización y claridad de la interfaz.</li>
            <li>✓ Presentación adecuada de los informes.</li>
            <li>✓ Funcionamiento y consistencia de los registros.</li>
            <li>✓ Cumplimiento de las consignas y presentación del trabajo.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section className="rounded-2xl border border-blue-200 p-8 text-center md:p-10">
        <h2 className="mb-4 text-2xl font-bold">
          ¡Es hora de poner en práctica lo aprendido!
        </h2>

        <p className="mx-auto mb-6 max-w-2xl leading-relaxed">
          Comenzá con los conceptos de interfaz, avanzá con los formularios y
          los informes, y terminá integrando las herramientas en una base de
          datos administrativa.
        </p>

        <Link
          href="/cursos/bases-de-datos/modulo-3/introduccion-interfaz"
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-100"
        >
          Comenzar el módulo
        </Link>
      </section>
    </main>
  );
}