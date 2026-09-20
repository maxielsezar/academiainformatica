export default function IntroduccionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a las Bases de Datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una base de datos es una herramienta que permite almacenar,
          organizar y gestionar información de manera estructurada. En el
          ámbito de oficina, las bases de datos permiten registrar y
          consultar información de manera ordenada y facilitar la gestión
          de grandes cantidades de datos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este módulo aprenderemos los conceptos fundamentales de las
          bases de datos y su organización. Estos conocimientos serán
          necesarios para crear posteriormente tablas, establecer
          relaciones, realizar consultas y desarrollar formularios e
          informes.
        </p>
      </section>

      {/* ¿Qué es una base de datos? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una base de datos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una base de datos es un conjunto organizado de información que
          permite almacenar, consultar y gestionar datos relacionados.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Por ejemplo, una oficina puede necesitar registrar información
          sobre clientes, proveedores, productos, empleados o ventas. Una
          base de datos permite organizar esta información para facilitar su
          utilización y consulta.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-2">
            Ejemplo
          </p>

          <p className="leading-relaxed">
            Una librería puede utilizar una base de datos para registrar sus
            libros, clientes y ventas. De esta manera, la información puede
            mantenerse organizada y ser consultada cuando sea necesario.
          </p>
        </div>
      </section>

      {/* Bases de datos en la oficina */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Bases de datos en el ámbito de oficina
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las bases de datos pueden utilizarse en diferentes actividades
          administrativas y de gestión. Resultan especialmente útiles cuando
          es necesario trabajar con una cantidad considerable de información
          que debe mantenerse organizada.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-6 max-w-3xl">
          <li>Registrar información de clientes.</li>
          <li>Gestionar información de proveedores.</li>
          <li>Organizar productos y servicios.</li>
          <li>Registrar empleados.</li>
          <li>Administrar ventas y operaciones.</li>
          <li>Consultar información almacenada.</li>
        </ul>
      </section>

      {/* Bases de datos relacionales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Bases de datos relacionales
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una base de datos relacional, la información se organiza
          principalmente mediante tablas. Cada tabla contiene información
          relacionada con un determinado elemento o entidad.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Las diferentes tablas pueden relacionarse entre sí para organizar
          la información y evitar la repetición innecesaria de datos.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-800 p-5 rounded-r-xl mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900 mb-2">
            Ejemplo
          </p>

          <p className="leading-relaxed">
            Una oficina puede tener una tabla de <strong>Clientes</strong> y
            otra de <strong>Ventas</strong>. Ambas tablas pueden estar
            relacionadas para identificar qué ventas corresponden a cada
            cliente.
          </p>
        </div>
      </section>

      {/* Microsoft Access */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Microsoft Access
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Durante el curso utilizaremos Microsoft Access como herramienta
          para trabajar con bases de datos. A través de este programa
          aprenderemos a crear y administrar los diferentes elementos que
          forman parte de una base de datos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En las próximas páginas aprenderemos a crear tablas, definir sus
          campos y propiedades, establecer claves y relaciones, aplicar
          criterios de organización de los datos y trabajar con la
          información almacenada.
        </p>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-8 max-w-3xl">

          {/* Actividad 1 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Reconocer bases de datos
            </h3>

            <p className="leading-relaxed mb-4">
              Analizá las siguientes situaciones e indicá cuáles podrían
              requerir el uso de una base de datos.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Una librería que registra sus libros y clientes.</li>
              <li>Una persona que escribe una nota de texto.</li>
              <li>Una empresa que administra información de sus empleados.</li>
              <li>Un comercio que registra sus ventas.</li>
              <li>Una persona que realiza una lista de compras.</li>
            </ul>

            <p className="leading-relaxed mt-5">
              Justificá tus respuestas indicando qué tipo de información
              debería almacenarse en cada caso.
            </p>
          </div>

          {/* Actividad 2 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Identificar información
            </h3>

            <p className="leading-relaxed mb-4">
              Una oficina necesita registrar información de sus clientes.
              Pensá qué datos serían necesarios para identificar y contactar
              a cada cliente.
            </p>

            <p className="leading-relaxed mb-4">
              Elaborá una lista de al menos ocho datos que podrían
              registrarse.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Nombre.</li>
              <li>Apellido.</li>
              <li>DNI.</li>
              <li>Dirección.</li>
              <li>Teléfono.</li>
              <li>Correo electrónico.</li>
            </ul>

            <p className="leading-relaxed mt-5">
              Agregá al menos dos datos más y explicá por qué podrían ser
              útiles.
            </p>
          </div>

          {/* Actividad 3 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Datos organizados y desorganizados
            </h3>

            <p className="leading-relaxed mb-4">
              Compará las siguientes dos situaciones:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
              <p className="font-semibold text-blue-900 mb-2">
                Situación A
              </p>

              <p className="leading-relaxed">
                Una oficina guarda los datos de sus clientes en diferentes
                archivos y documentos, utilizando distintos formatos y sin
                una organización común.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="font-semibold text-blue-900 mb-2">
                Situación B
              </p>

              <p className="leading-relaxed">
                La misma oficina registra la información de sus clientes en
                una base de datos organizada.
              </p>
            </div>

            <p className="leading-relaxed mt-5">
              Respondé:
            </p>

            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                ¿Qué ventajas puede tener la información organizada?
              </li>
              <li>
                ¿Qué problemas podrían aparecer cuando los datos están
                desorganizados?
              </li>
              <li>
                ¿Qué información sería más fácil de consultar utilizando
                una base de datos?
              </li>
            </ul>
          </div>

          {/* Actividad 4 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Analizar una situación real
            </h3>

            <p className="leading-relaxed mb-4">
              Una escuela necesita organizar la información de sus
              estudiantes.
            </p>

            <p className="leading-relaxed mb-4">
              Analizá la situación y determiná qué información debería
              registrarse.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>¿Qué datos necesitaría registrar la escuela?</li>
              <li>¿Qué personas utilizarían esa información?</li>
              <li>¿Qué información necesitarían consultar?</li>
              <li>¿Qué problemas podrían aparecer si los datos no están organizados?</li>
              <li>
                ¿Qué ventajas tendría utilizar una base de datos?
              </li>
            </ul>

            <p className="leading-relaxed mt-5">
              Elaborá una propuesta inicial de cómo organizarías esa
              información.
            </p>
          </div>

          {/* Actividad 5 */}
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Reconocer elementos de una base de datos
            </h3>

            <p className="leading-relaxed mb-4">
              Pensá en una base de datos para una librería que necesita
              administrar sus clientes, libros y ventas.
            </p>

            <p className="leading-relaxed mb-4">
              Identificá qué información debería almacenarse y proponé qué
              tablas podrían ser necesarias.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>¿Qué información correspondería a los clientes?</li>
              <li>¿Qué información correspondería a los libros?</li>
              <li>¿Qué información correspondería a las ventas?</li>
              <li>¿Qué relación podría existir entre esas informaciones?</li>
            </ul>

            <p className="leading-relaxed mt-5">
              Realizá un esquema en papel o utilizando una herramienta
              digital.
            </p>
          </div>

        </div>
      </section>

      {/* Actividad Integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Integradora
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-800 rounded-r-xl p-6 max-w-3xl">

          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Analizar las necesidades de información de una organización
          </h3>

          <p className="leading-relaxed mb-4">
            Una organización necesita comenzar a organizar la información
            que utiliza diariamente. Actualmente los datos se encuentran
            distribuidos en diferentes documentos y resulta difícil
            encontrar rápidamente la información necesaria.
          </p>

          <p className="leading-relaxed mb-5">
            Como primera etapa del proyecto, deberás analizar la situación y
            determinar cómo podría utilizarse una base de datos para
            organizar la información.
          </p>

          <h4 className="font-bold text-blue-900 mb-3">
            Consignas
          </h4>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Elegí una organización, comercio, empresa o institución.
            </li>

            <li>
              Describí brevemente qué actividad realiza.
            </li>

            <li>
              Identificá qué información necesita registrar.
            </li>

            <li>
              Determiná quiénes utilizarían esa información.
            </li>

            <li>
              Identificá al menos tres conjuntos de información que deberían
              organizarse.
            </li>

            <li>
              Proponé qué tablas podrían utilizarse para almacenar esa
              información.
            </li>

            <li>
              Indicá qué ventajas tendría utilizar una base de datos en esa
              organización.
            </li>
          </ol>

          <div className="bg-white border border-blue-200 rounded-xl p-5 mt-6">
            <p className="font-semibold text-blue-900 mb-2">
              Producto final
            </p>

            <p className="leading-relaxed">
              Elaborá un documento con la descripción de la organización,
              las necesidades de información identificadas y una propuesta
              inicial de las tablas que podrían formar parte de su base de
              datos.
            </p>

            <p className="leading-relaxed mt-3">
              Este trabajo será utilizado como punto de partida para las
              siguientes actividades del módulo, donde se profundizará en la
              creación de tablas, campos, propiedades, claves y relaciones.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}