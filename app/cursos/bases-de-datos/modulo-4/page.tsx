
import Link from "next/link";

export default function Modulo4Page() {
  const contenidos = [
    {
      numero: "01",
      titulo: "Introducción a la programación",
      descripcion:
        "Conceptos fundamentales de programación, lenguajes, instrucciones y su aplicación en bases de datos.",
      slug: "introduccion-programacion",
    },
    {
      numero: "02",
      titulo: "Algoritmos y resolución de problemas",
      descripcion:
        "Análisis de problemas, diseño de algoritmos, pseudocódigo y diagramas de flujo.",
      slug: "algoritmos",
    },
    {
      numero: "03",
      titulo: "Variables, constantes y tipos de datos",
      descripcion:
        "Almacenamiento temporal de información, tipos de datos, operadores y expresiones.",
      slug: "variables-constantes",
    },
    {
      numero: "04",
      titulo: "Estructuras de control y decisiones",
      descripcion:
        "Condicionales, comparaciones y estructuras que permiten tomar decisiones en un programa.",
      slug: "estructuras-condicionales",
    },
    {
      numero: "05",
      titulo: "Estructuras repetitivas",
      descripcion:
        "Bucles y repeticiones para automatizar tareas y procesar conjuntos de datos.",
      slug: "estructuras-repetitivas",
    },
    {
      numero: "06",
      titulo: "Procedimientos y funciones",
      descripcion:
        "Organización del código en bloques reutilizables para resolver tareas específicas.",
      slug: "procedimientos-funciones",
    },
    {
      numero: "07",
      titulo: "Introducción a las macros en Access",
      descripcion:
        "Automatización de operaciones mediante macros y acciones vinculadas a formularios e informes.",
      slug: "macros",
    },
    {
      numero: "08",
      titulo: "Consultas mediante QBE",
      descripcion:
        "Diseño de consultas mediante la cuadrícula de diseño de Access para recuperar y filtrar información.",
      slug: "consultas-qbe",
    },
    {
      numero: "09",
      titulo: "Introducción al lenguaje SQL",
      descripcion:
        "Conceptos básicos del lenguaje SQL y su utilización para consultar y administrar datos.",
      slug: "introduccion-sql",
    },
    {
      numero: "10",
      titulo: "Consultas SQL de selección",
      descripcion:
        "Recuperación de información mediante SELECT, FROM, WHERE y ORDER BY.",
      slug: "sql-select",
    },
    {
      numero: "11",
      titulo: "Consultas SQL de acción",
      descripcion:
        "Inserción, modificación y eliminación de registros mediante instrucciones SQL.",
      slug: "sql-accion",
    },
    {
      numero: "12",
      titulo: "Consultas SQL con agrupaciones y relaciones",
      descripcion:
        "Utilización de JOIN, GROUP BY, HAVING y funciones de agregación.",
      slug: "sql-agrupaciones-relaciones",
    },
    {
      numero: "13",
      titulo: "Integración de programación en Access",
      descripcion:
        "Aplicación de consultas, macros, procedimientos y funciones en una base de datos.",
      slug: "integracion-programacion",
    },
  
    {
      numero: "15",
      titulo: "Examen práctico integrador",
      descripcion:
        "Desarrollo de un sistema de gestión que integre los conocimientos del módulo.",
      slug: "examen",
    },
  ];

  return (
    <main className="space-y-16">
      {/* Encabezado */}
      <section>
        <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full mb-5">
          Módulo 4
        </span>

        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Programación
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          En este módulo aprenderás los fundamentos de la programación y su
          aplicación en la gestión de bases de datos. Conocerás cómo diseñar
          algoritmos, utilizar variables, tomar decisiones mediante estructuras
          de control y organizar instrucciones en procedimientos y funciones.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          También trabajarás con macros y consultas mediante QBE y SQL en
          Microsoft Access, incorporando herramientas que permiten automatizar
          tareas, procesar información y desarrollar soluciones para diferentes
          necesidades administrativas.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que desarrollarás
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Analizar problemas y diseñar algoritmos para resolverlos.",
            "Utilizar variables, constantes, operadores y expresiones.",
            "Aplicar estructuras condicionales y repetitivas.",
            "Crear procedimientos y funciones para organizar instrucciones.",
            "Automatizar operaciones mediante macros en Access.",
            "Diseñar consultas utilizando QBE y lenguaje SQL.",
            "Recuperar, filtrar, ordenar y modificar información.",
            "Integrar herramientas de programación en bases de datos.",
          ].map((capacidad, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl p-5 flex gap-3"
            >
              <span className="text-blue-700 font-bold text-xl">✓</span>
              <p className="leading-relaxed">{capacidad}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del módulo
        </h2>

        <p className="leading-relaxed mb-8 max-w-3xl">
          Los contenidos están organizados en unidades de aprendizaje. Ingresá
          a cada tema para consultar las explicaciones, ejemplos y actividades
          correspondientes.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {contenidos.map((contenido) => (
           
              <div className="flex items-start gap-4">
            
                <div>
                  <h3 className="font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {contenido.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {contenido.descripcion}
                  </p>
                  
                </div>
              </div>
          ))}
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el ámbito laboral
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Los conocimientos de programación permiten mejorar los sistemas de
          información utilizados en oficinas, comercios, instituciones y
          organizaciones. Mediante consultas, macros y procedimientos es
          posible reducir tareas manuales, agilizar procesos y obtener
          información de manera más eficiente.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Gestión administrativa
            </h3>
            <p className="text-sm leading-relaxed">
              Automatizar el registro de operaciones, calcular importes y
              consultar información de clientes y proveedores.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Control de inventario
            </h3>
            <p className="text-sm leading-relaxed">
              Consultar existencias, identificar productos con poco stock y
              generar listados para realizar reposiciones.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Administración de servicios
            </h3>
            <p className="text-sm leading-relaxed">
              Automatizar reservas, turnos, pagos y consultas para mejorar la
              organización de una institución o empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Proyecto integrador del módulo
        </h2>

        <div className=" border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Automatización de un sistema administrativo
          </h3>

          <p className="leading-relaxed mb-4">
            Como trabajo integrador, desarrollarás una solución que permita
            automatizar operaciones de una organización utilizando
            Microsoft Access.
          </p>

          <p className="font-semibold text-blue-900 mb-2">
            El proyecto deberá incorporar:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Algoritmos para resolver situaciones administrativas.</li>
            <li>Variables y estructuras de control.</li>
            <li>Procedimientos y funciones.</li>
            <li>Macros para automatizar acciones.</li>
            <li>Consultas diseñadas mediante QBE.</li>
            <li>Consultas SQL para recuperar y procesar información.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comenzá a aprender
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          La programación permite transformar instrucciones en soluciones
          concretas. A lo largo de este módulo vas a incorporar herramientas
          para automatizar tareas y aprovechar mejor las posibilidades que
          ofrecen las bases de datos.
        </p>

        <Link
          href="/cursos/bases-de-datos/modulo-4/introduccion-programacion"
          className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Comenzar el módulo
        </Link>
      </section>
    </main>
  );
}
