export default function AnalisisSistemaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Análisis del sistema
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El análisis del sistema es el proceso mediante el cual se estudia una
          situación, organización o problema para comprender cómo funciona,
          identificar sus necesidades de información y determinar qué solución
          informática puede responder adecuadamente a esas necesidades.
        </p>
      </section>

      {/* ¿Qué es el análisis de sistemas? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el análisis de sistemas?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Analizar un sistema significa estudiar los elementos que lo
          componen, las actividades que se realizan, la información que se
          utiliza y la forma en que las diferentes partes se relacionan.
        </p>

        <p className="leading-relaxed max-w-3xl">
          Antes de comenzar a construir una base de datos o una aplicación es
          necesario comprender qué problema se desea resolver y qué
          información necesita la organización. De esta manera se evita
          desarrollar una solución que no responda a las necesidades reales
          de los usuarios.
        </p>
      </section>

      {/* Sistema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comprender el sistema
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Un sistema puede estar formado por personas, procesos, información,
          recursos y herramientas que trabajan de manera relacionada para
          alcanzar determinados objetivos.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Personas
            </h3>

            <p className="leading-relaxed">
              Son los usuarios que realizan actividades, ingresan información,
              consultan datos o utilizan los resultados proporcionados por el
              sistema.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Procesos
            </h3>

            <p className="leading-relaxed">
              Son las actividades y procedimientos que se realizan para
              desarrollar las tareas de la organización.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Información
            </h3>

            <p className="leading-relaxed">
              Comprende los datos que se registran, almacenan, consultan,
              modifican y utilizan durante las actividades.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Recursos
            </h3>

            <p className="leading-relaxed">
              Incluyen los recursos tecnológicos y materiales necesarios para
              realizar las actividades del sistema.
            </p>
          </div>

        </div>
      </section>

      {/* Problema y solución */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Del problema a la solución
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El análisis comienza con una situación concreta que necesita ser
          mejorada. El analista debe comprender esa situación antes de
          proponer una solución.
        </p>

        <div className="space-y-6 max-w-4xl">

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              1. Identificar la situación
            </h3>

            <p className="leading-relaxed">
              Se observa cómo se realizan actualmente las actividades y se
              identifican las dificultades o necesidades existentes.
            </p>
          </div>

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              2. Obtener información
            </h3>

            <p className="leading-relaxed">
              Se recopila información de los usuarios, procesos, documentos y
              datos que intervienen en la actividad.
            </p>
          </div>

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              3. Identificar necesidades
            </h3>

            <p className="leading-relaxed">
              Se determina qué información necesita la organización y qué
              operaciones debería permitir realizar la solución.
            </p>
          </div>

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              4. Proponer una solución
            </h3>

            <p className="leading-relaxed">
              A partir del análisis realizado se puede comenzar a definir una
              solución que responda a los objetivos y necesidades identificados.
            </p>
          </div>

        </div>
      </section>

      {/* Obtención de información */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Obtención de información
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para analizar correctamente un sistema es necesario obtener
          información de las personas que participan en él y de las actividades
          que se realizan.
        </p>

        <ul className="list-disc pl-6 space-y-3 max-w-3xl">
          <li>
            Observar cómo se realizan las actividades.
          </li>
          <li>
            Entrevistar a los usuarios.
          </li>
          <li>
            Analizar documentos utilizados por la organización.
          </li>
          <li>
            Identificar los datos que se registran.
          </li>
          <li>
            Identificar los datos que se consultan.
          </li>
          <li>
            Reconocer los problemas existentes en el procedimiento actual.
          </li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: sistema para una oficina
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una oficina registra actualmente sus clientes y ventas utilizando
          diferentes planillas de cálculo. Con el tiempo, la información se
          repite, resulta difícil encontrar determinados datos y no existe
          una estructura común para almacenar la información.
        </p>

        <p className="leading-relaxed max-w-3xl mb-6">
          Antes de crear una base de datos, el analista debería estudiar cómo
          trabaja la oficina y determinar qué información necesita administrar.
        </p>

        <div className="overflow-x-auto max-w-4xl">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 p-3">
                  Elemento
                </th>
                <th className="border border-blue-200 p-3">
                  Ejemplo
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">
                  Usuarios
                </td>
                <td className="border border-blue-200 p-3">
                  Personal administrativo
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">
                  Información
                </td>
                <td className="border border-blue-200 p-3">
                  Clientes, productos y ventas
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">
                  Actividades
                </td>
                <td className="border border-blue-200 p-3">
                  Registrar clientes y ventas
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">
                  Problema
                </td>
                <td className="border border-blue-200 p-3">
                  Información repetida y difícil de consultar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Relación con la base de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Del análisis al diseño de la base de datos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El análisis del sistema constituye una etapa fundamental antes de
          diseñar la base de datos. La información obtenida permitirá
          posteriormente identificar entidades, atributos y relaciones.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Necesidad
            </h3>

            <p className="leading-relaxed">
              ¿Qué problema o necesidad tiene la organización?
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Información
            </h3>

            <p className="leading-relaxed">
              ¿Qué datos necesita registrar y consultar?
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Diseño
            </h3>

            <p className="leading-relaxed">
              ¿Cómo se organizará la información?
            </p>
          </div>

        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-8 max-w-4xl">

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar un sistema
            </h3>

            <p className="leading-relaxed">
              Seleccionar una organización, comercio u oficina y describir
              brevemente cómo funciona, quiénes participan y qué actividades
              se realizan.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Identificar información
            </h3>

            <p className="leading-relaxed">
              Elaborar una lista de los datos que se registran, consultan y
              modifican durante las actividades de la organización seleccionada.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Detectar problemas
            </h3>

            <p className="leading-relaxed">
              Analizar cómo se administra actualmente la información e
              identificar problemas relacionados con duplicación, pérdida,
              dificultad de consulta o actualización de datos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Obtener requerimientos iniciales
            </h3>

            <p className="leading-relaxed">
              Realizar una entrevista simulada a un usuario de la organización
              y registrar las necesidades que debería resolver el nuevo sistema.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Describir la solución
            </h3>

            <p className="leading-relaxed">
              Elaborar una descripción inicial de una solución informática que
              permita mejorar la forma en que la organización administra su
              información.
            </p>
          </div>

        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Analizar un sistema real
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Continuando con la base de datos desarrollada durante el Módulo 1,
          seleccionar una organización o situación administrativa y realizar
          un análisis inicial del sistema que se desea desarrollar.
        </p>

        <ol className="list-decimal pl-6 space-y-3 max-w-3xl">
          <li>
            Describir la organización y las actividades que realiza.
          </li>

          <li>
            Identificar los usuarios que utilizarán el sistema.
          </li>

          <li>
            Identificar la información que se necesita administrar.
          </li>

          <li>
            Describir los procesos principales.
          </li>

          <li>
            Identificar los problemas existentes.
          </li>

          <li>
            Determinar las necesidades de información.
          </li>

          <li>
            Elaborar una primera descripción de la solución propuesta.
          </li>
        </ol>

        <div className="mt-6 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Producto de la actividad
          </h3>

          <p className="leading-relaxed">
            Un documento de análisis inicial que describa la organización,
            usuarios, actividades, información, problemas y necesidades que
            deberá contemplar el sistema. Este documento será utilizado en las
            siguientes páginas para definir los objetivos y requerimientos del
            sistema.
          </p>
        </div>
      </section>

    </div>
  );
}