
export default function PlanificacionProyectoPage() {
  return (
    <div className="space-y-14">
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Planificación del proyecto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La planificación del proyecto permite organizar las actividades
          necesarias para desarrollar un sistema informático. A partir del
          análisis del sistema, los objetivos, los requerimientos y el
          diagrama de entidad-relación, se deben establecer las tareas que
          se realizarán, el orden en que se ejecutarán, los recursos
          necesarios y los resultados esperados.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este módulo, la planificación servirá para organizar el
          desarrollo de una base de datos para oficina, desde la definición
          de sus necesidades hasta la preparación de una solución que pueda
          utilizarse para administrar información.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante planificar?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Antes de comenzar a crear tablas, relaciones, formularios y
          consultas, es conveniente determinar qué se debe hacer y cómo se
          organizará el trabajo. Una planificación adecuada ayuda a evitar
          improvisaciones y permite comprobar si se están cumpliendo los
          objetivos del proyecto.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Organizar las tareas
            </h3>
            <p className="leading-relaxed">
              Permite dividir el proyecto en actividades concretas y
              establecer un orden de realización.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Administrar el tiempo
            </h3>
            <p className="leading-relaxed">
              Ayuda a estimar cuánto tiempo se necesitará para completar
              cada actividad y el proyecto en su conjunto.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Identificar recursos
            </h3>
            <p className="leading-relaxed">
              Permite determinar qué equipos, programas, documentos e
              información serán necesarios.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Controlar los avances
            </h3>
            <p className="leading-relaxed">
              Facilita verificar qué tareas se completaron, cuáles están
              pendientes y qué aspectos deben corregirse.
            </p>
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etapas de planificación
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para organizar el desarrollo de una base de datos, se pueden
          establecer las siguientes etapas de trabajo.
        </p>

        <div className="space-y-4 max-w-4xl">
          <div className="flex gap-4 border border-blue-200 rounded-xl p-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Análisis de necesidades
              </h3>
              <p className="leading-relaxed">
                Identificar el problema, conocer a los usuarios y determinar
                qué información necesita administrar el sistema.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border border-blue-200 rounded-xl p-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Definición de objetivos y requerimientos
              </h3>
              <p className="leading-relaxed">
                Establecer los resultados que se esperan alcanzar y las
                funciones y condiciones que deberá cumplir la solución.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border border-blue-200 rounded-xl p-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Diseño de la base de datos
              </h3>
              <p className="leading-relaxed">
                Identificar entidades, atributos, claves y relaciones.
                Elaborar el diagrama entidad-relación y revisar la
                organización de los datos.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border border-blue-200 rounded-xl p-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Construcción
              </h3>
              <p className="leading-relaxed">
                Crear las tablas, definir los campos, establecer las claves
                y configurar las relaciones en Microsoft Access.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border border-blue-200 rounded-xl p-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
              5
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Pruebas y revisión
              </h3>
              <p className="leading-relaxed">
                Cargar datos de prueba, comprobar las relaciones, verificar
                las funciones previstas y corregir los problemas encontrados.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border border-blue-200 rounded-xl p-5">
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold">
              6
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Documentación y entrega
              </h3>
              <p className="leading-relaxed">
                Organizar los archivos del proyecto, documentar su
                funcionamiento y preparar la entrega de la base de datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recursos necesarios
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Antes de comenzar, es importante identificar los recursos que
          permitirán realizar las tareas planificadas.
        </p>

        <div className="overflow-x-auto max-w-4xl rounded-xl border border-blue-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-4 text-left border border-blue-200">
                  Recurso
                </th>
                <th className="p-4 text-left border border-blue-200">
                  Ejemplo
                </th>
                <th className="p-4 text-left border border-blue-200">
                  Utilidad
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border border-blue-200 font-semibold">
                  Hardware
                </td>
                <td className="p-4 border border-blue-200">
                  Computadora
                </td>
                <td className="p-4 border border-blue-200">
                  Desarrollar y utilizar la base de datos.
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-blue-200 font-semibold">
                  Software
                </td>
                <td className="p-4 border border-blue-200">
                  Microsoft Access
                </td>
                <td className="p-4 border border-blue-200">
                  Crear y administrar tablas, consultas, formularios e informes.
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-blue-200 font-semibold">
                  Información
                </td>
                <td className="p-4 border border-blue-200">
                  Requerimientos y datos de ejemplo
                </td>
                <td className="p-4 border border-blue-200">
                  Definir la estructura y comprobar su funcionamiento.
                </td>
              </tr>
              <tr>
                <td className="p-4 border border-blue-200 font-semibold">
                  Recursos humanos
                </td>
                <td className="p-4 border border-blue-200">
                  Usuarios y responsables del proyecto
                </td>
                <td className="p-4 border border-blue-200">
                  Aportar necesidades, validar resultados y organizar tareas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cronograma */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elaboración de un cronograma
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Un cronograma permite ordenar las actividades y estimar cuánto
          tiempo se destinará a cada una. Los plazos dependen de la
          complejidad del sistema, los recursos disponibles y el tiempo
          de trabajo del equipo.
        </p>

        <div className="overflow-x-auto max-w-5xl rounded-xl border border-blue-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left border border-blue-200">
                  Actividad
                </th>
                <th className="p-3 text-left border border-blue-200">
                  Duración estimada
                </th>
                <th className="p-3 text-left border border-blue-200">
                  Resultado esperado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-blue-200">
                  Análisis del sistema
                </td>
                <td className="p-3 border border-blue-200">
                  2 días
                </td>
                <td className="p-3 border border-blue-200">
                  Descripción del problema y de las necesidades.
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-blue-200">
                  Objetivos y requerimientos
                </td>
                <td className="p-3 border border-blue-200">
                  2 días
                </td>
                <td className="p-3 border border-blue-200">
                  Documento de requerimientos.
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-blue-200">
                  Diagrama entidad-relación
                </td>
                <td className="p-3 border border-blue-200">
                  2 días
                </td>
                <td className="p-3 border border-blue-200">
                  Modelo de datos revisado.
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-blue-200">
                  Construcción de la base de datos
                </td>
                <td className="p-3 border border-blue-200">
                  3 días
                </td>
                <td className="p-3 border border-blue-200">
                  Tablas y relaciones configuradas.
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-blue-200">
                  Pruebas y documentación
                </td>
                <td className="p-3 border border-blue-200">
                  1 día
                </td>
                <td className="p-3 border border-blue-200">
                  Base de datos revisada y documentada.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-blue-800 mt-3 max-w-3xl">
          Las duraciones son ilustrativas. Cada equipo deberá establecer
          plazos adecuados para su propio proyecto.
        </p>
      </section>

      {/* Seguimiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguimiento de las tareas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Durante el desarrollo es necesario revisar el avance de las tareas.
          Una forma sencilla de hacerlo es utilizar una tabla de seguimiento.
        </p>

        <div className="overflow-x-auto max-w-4xl rounded-xl border border-blue-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left border border-blue-200">
                  Tarea
                </th>
                <th className="p-3 text-left border border-blue-200">
                  Responsable
                </th>
                <th className="p-3 text-left border border-blue-200">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-blue-200">
                  Identificar entidades
                </td>
                <td className="p-3 border border-blue-200">
                  Integrante 1
                </td>
                <td className="p-3 border border-blue-200">
                  Completada
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-blue-200">
                  Revisar relaciones
                </td>
                <td className="p-3 border border-blue-200">
                  Integrante 2
                </td>
                <td className="p-3 border border-blue-200">
                  En proceso
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-blue-200">
                  Crear tablas en Access
                </td>
                <td className="p-3 border border-blue-200">
                  Equipo completo
                </td>
                <td className="p-3 border border-blue-200">
                  Pendiente
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          En proyectos individuales, el estudiante puede asumir todas las
          responsabilidades. En proyectos grupales, conviene distribuir las
          tareas y establecer quién revisará cada resultado.
        </p>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6 max-w-4xl">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar las tareas
            </h3>

            <p className="leading-relaxed">
              Retomá el sistema trabajado en las páginas anteriores.
              Elaborá una lista de al menos ocho tareas necesarias para
              desarrollarlo, desde el análisis inicial hasta la entrega
              de la base de datos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Identificar los recursos
            </h3>

            <p className="leading-relaxed">
              Determiná qué hardware, software, información y recursos
              humanos serán necesarios para llevar adelante tu proyecto.
              Explicá para qué se utilizará cada recurso.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Elaborar un cronograma
            </h3>

            <p className="leading-relaxed">
              Organizá las tareas en una tabla. Para cada una, indicá
              la duración estimada, la fecha de inicio, la fecha de
              finalización y el resultado esperado.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Distribuir responsabilidades
            </h3>

            <p className="leading-relaxed">
              Si trabajás en grupo, asigná responsables para las distintas
              tareas. Si el trabajo es individual, indicá qué actividades
              deberás completar y en qué orden. Explicá cómo verificarás
              que cada tarea esté terminada.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Anticipar dificultades
            </h3>

            <p className="leading-relaxed">
              Identificá tres problemas que podrían retrasar tu proyecto,
              como falta de información, errores en el diseño o dificultades
              para utilizar el software. Para cada uno, proponé una medida
              preventiva o una posible solución.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Planificar el desarrollo de la base de datos
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-r-xl max-w-4xl">
          <p className="leading-relaxed mb-5">
            Utilizá el análisis del sistema, los objetivos, los requerimientos
            y el diagrama entidad-relación elaborados anteriormente para
            construir el plan de trabajo de tu proyecto.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-3">
            El documento debe incluir:
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Nombre y descripción del proyecto.</li>
            <li>Objetivo general y objetivos específicos.</li>
            <li>Resumen de los requerimientos principales.</li>
            <li>Diagrama entidad-relación propuesto.</li>
            <li>Listado ordenado de tareas.</li>
            <li>Recursos necesarios para desarrollar el sistema.</li>
            <li>Cronograma con duración estimada para cada tarea.</li>
            <li>Responsables de las actividades, cuando corresponda.</li>
            <li>Posibles dificultades y medidas para resolverlas.</li>
            <li>Criterios para comprobar que el proyecto está terminado.</li>
          </ol>

          <div className="border border-blue-200 rounded-xl p-5 mt-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              Producto esperado
            </h3>

            <p className="leading-relaxed">
              Un plan de proyecto que organice las etapas necesarias para
              construir la base de datos, con tareas, recursos, plazos y
              resultados esperados. Este documento servirá como guía durante
              la implementación y permitirá controlar el avance del trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* Cierre del módulo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cierre del Módulo 2
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A lo largo de este módulo analizaste las necesidades de un sistema,
          definiste sus objetivos, estableciste requerimientos, representaste
          sus datos mediante un diagrama entidad-relación y organizaste las
          tareas para su desarrollo.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Antes de avanzar, revisá que los documentos elaborados sean
          coherentes entre sí. El siguiente paso será utilizar este trabajo
          de análisis y diseño para construir una base de datos que permita
          almacenar, relacionar y consultar información de manera organizada.
        </p>
      </section>
    </div>
  );
}
