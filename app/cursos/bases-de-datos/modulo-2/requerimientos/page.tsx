export default function RequerimientosSistemaPage() {
  return (
    <div className="space-y-14">
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Requerimientos del sistema
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vez identificados los problemas, analizados los procesos y
          definidos los objetivos del sistema, es necesario establecer qué
          debe hacer la solución informática y qué condiciones debe cumplir.
          Para ello se definen los requerimientos del sistema, que servirán
          como guía para diseñar la base de datos y desarrollar la aplicación.
        </p>
      </section>

      {/* ¿Qué son los requerimientos? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los requerimientos del sistema?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Los requerimientos son descripciones de las funciones, características
          y condiciones que debe cumplir un sistema para responder a las
          necesidades de sus usuarios.
        </p>

        <p className="leading-relaxed max-w-3xl">
          Se elaboran a partir de la información obtenida durante el análisis
          del sistema y deben mantener una relación directa con los objetivos
          definidos para el proyecto.
        </p>
      </section>

      {/* Relación con los objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          De los objetivos a los requerimientos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Un objetivo expresa qué se quiere conseguir. Un requerimiento
          especifica una función o condición que debe cumplir el sistema para
          contribuir a alcanzar ese objetivo.
        </p>

        <div className="overflow-x-auto max-w-4xl rounded-xl border border-blue-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-4 text-left border border-blue-200">
                  Objetivo
                </th>
                <th className="p-4 text-left border border-blue-200">
                  Requerimiento asociado
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4 border border-blue-200">
                  Organizar la información de los clientes.
                </td>
                <td className="p-4 border border-blue-200">
                  El sistema deberá permitir registrar, consultar, modificar
                  y eliminar clientes según los permisos establecidos.
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-blue-200">
                  Gestionar los productos de una empresa.
                </td>
                <td className="p-4 border border-blue-200">
                  El sistema deberá almacenar el código, nombre, precio y
                  stock de cada producto.
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-blue-200">
                  Consultar las ventas realizadas.
                </td>
                <td className="p-4 border border-blue-200">
                  El sistema deberá permitir consultar las ventas por fecha,
                  cliente y número de operación.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tipos de requerimientos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de requerimientos
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Requerimientos funcionales
            </h3>

            <p className="leading-relaxed mb-4">
              Describen las operaciones que el sistema debe permitir realizar.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Registrar clientes.</li>
              <li>Administrar productos.</li>
              <li>Registrar ventas.</li>
              <li>Buscar información.</li>
              <li>Generar informes.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Requerimientos no funcionales
            </h3>

            <p className="leading-relaxed mb-4">
              Describen condiciones de funcionamiento, calidad y uso que debe
              cumplir el sistema.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Facilidad de uso.</li>
              <li>Protección de la información.</li>
              <li>Tiempo de respuesta adecuado.</li>
              <li>Control de acceso según los usuarios.</li>
              <li>Integridad de los datos almacenados.</li>
            </ul>
          </div>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          En una base de datos de oficina, ambos tipos son importantes:
          no alcanza con definir qué información se registra; también hay que
          considerar cómo se protege, se mantiene y se consulta.
        </p>
      </section>

      {/* Requerimientos de información */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requerimientos de información
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Durante el análisis también es necesario identificar qué información
          deberá almacenar y administrar el sistema. Esta tarea permite
          anticipar las entidades, los campos y las relaciones que luego
          formarán parte del diseño de la base de datos.
        </p>

        <div className="border border-blue-200 rounded-xl p-6 max-w-4xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Ejemplo: base de datos de una librería
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Clientes:</strong> código, nombre, apellido, teléfono
              y correo electrónico.
            </li>
            <li>
              <strong>Productos:</strong> código, título, autor, precio y stock.
            </li>
            <li>
              <strong>Ventas:</strong> número de venta, fecha, cliente e importe.
            </li>
            <li>
              <strong>Detalle de venta:</strong> venta, producto, cantidad y
              precio aplicado.
            </li>
          </ul>

          <p className="leading-relaxed mt-5">
            Estos datos son un punto de partida. Antes de crear las tablas,
            hay que verificar con los usuarios qué información necesitan y
            cómo se relacionan las operaciones de la librería.
          </p>
        </div>
      </section>

      {/* Cómo redactar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo redactar un requerimiento?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Los requerimientos deben redactarse con un lenguaje claro,
          específico y verificable. Conviene evitar expresiones ambiguas como
          "el sistema debe ser bueno" o "debe funcionar correctamente".
        </p>

        <div className="space-y-4 max-w-4xl">
          <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-xl">
            <h3 className="font-bold text-red-900 mb-2">
              Redacción poco precisa
            </h3>
            <p className="leading-relaxed">
              El sistema debe permitir administrar los productos de forma fácil.
            </p>
          </div>

          <div className="border-l-4 border-blue-700  p-5 rounded-r-xl">
            <h3 className="font-bold text-blue-900 mb-2">
              Redacción más precisa
            </h3>
            <p className="leading-relaxed">
              El sistema deberá permitir registrar, consultar, modificar y
              dar de baja productos, identificando cada uno mediante un código
              único.
            </p>
          </div>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          Una buena práctica consiste en asignar un identificador a cada
          requerimiento, describirlo y establecer cómo se comprobará su
          cumplimiento.
        </p>
      </section>

      {/* Tabla de requerimientos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Registro de requerimientos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Para organizar el trabajo se puede utilizar una tabla que permita
          documentar cada requerimiento y hacer un seguimiento durante el
          desarrollo del proyecto.
        </p>

        <div className="overflow-x-auto max-w-5xl rounded-xl border border-blue-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-3 text-left border border-blue-200">
                  Código
                </th>
                <th className="p-3 text-left border border-blue-200">
                  Requerimiento
                </th>
                <th className="p-3 text-left border border-blue-200">
                  Tipo
                </th>
                <th className="p-3 text-left border border-blue-200">
                  Verificación
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 border border-blue-200">RF-01</td>
                <td className="p-3 border border-blue-200">
                  Registrar clientes.
                </td>
                <td className="p-3 border border-blue-200">Funcional</td>
                <td className="p-3 border border-blue-200">
                  Comprobar que se pueda guardar un cliente.
                </td>
              </tr>

              <tr>
                <td className="p-3 border border-blue-200">RF-02</td>
                <td className="p-3 border border-blue-200">
                  Consultar productos por código.
                </td>
                <td className="p-3 border border-blue-200">Funcional</td>
                <td className="p-3 border border-blue-200">
                  Buscar un producto existente.
                </td>
              </tr>

              <tr>
                <td className="p-3 border border-blue-200">RNF-01</td>
                <td className="p-3 border border-blue-200">
                  Restringir el acceso a funciones administrativas.
                </td>
                <td className="p-3 border border-blue-200">
                  No funcional
                </td>
                <td className="p-3 border border-blue-200">
                  Verificar los permisos de los usuarios.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-blue-800 mt-3 max-w-3xl">
          RF significa requerimiento funcional y RNF significa requerimiento
          no funcional.
        </p>
      </section>

      {/* Relación con la base de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          De los requerimientos al diseño de la base de datos
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Los requerimientos permiten determinar qué datos se necesitan,
          cuáles son las operaciones que deben realizarse y qué información
          deberá obtenerse. Con esta información se podrán identificar las
          entidades, sus atributos y las relaciones entre ellas.
        </p>

        <div className="grid md:grid-cols-4 gap-4 max-w-5xl">
          {[
            {
              numero: "1",
              titulo: "Objetivos",
              descripcion: "Definir qué se quiere lograr.",
            },
            {
              numero: "2",
              titulo: "Requerimientos",
              descripcion: "Precisar qué debe cumplir el sistema.",
            },
            {
              numero: "3",
              titulo: "Entidades",
              descripcion: "Identificar los datos que se necesitan.",
            },
            {
              numero: "4",
              titulo: "Relaciones",
              descripcion: "Establecer cómo se vinculan los datos.",
            },
          ].map((item) => (
            <div
              key={item.numero}
              className="border border-blue-200 rounded-xl p-5"
            >
              <div className="w-9 h-9 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold mb-4">
                {item.numero}
              </div>

              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {item.titulo}
              </h3>

              <p className="leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Actividades prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6 max-w-4xl">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar requerimientos
            </h3>

            <p className="leading-relaxed">
              Retomá el sistema que analizaste en las páginas anteriores.
              Identificá al menos cinco necesidades de sus usuarios y redactá
              un requerimiento para cada una.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Clasificar requerimientos
            </h3>

            <p className="leading-relaxed mb-3">
              Clasificá los siguientes requerimientos como funcionales o no
              funcionales y justificá tus respuestas.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Registrar un nuevo cliente.</li>
              <li>Proteger el acceso a información confidencial.</li>
              <li>Buscar una venta por fecha.</li>
              <li>Presentar una interfaz fácil de comprender.</li>
              <li>Generar un informe de ventas mensuales.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Mejorar la redacción
            </h3>

            <p className="leading-relaxed mb-3">
              Reescribí los siguientes requerimientos para que sean más
              precisos y verificables:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>El sistema debe trabajar rápido.</li>
              <li>La base de datos debe ser ordenada.</li>
              <li>El usuario debe poder manejar los clientes.</li>
              <li>Los informes deben ser buenos.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Identificar datos necesarios
            </h3>

            <p className="leading-relaxed">
              Para el sistema que estás desarrollando, elaborá una lista de
              los datos que deben registrarse. Agrupalos según el elemento
              al que pertenecen, por ejemplo, clientes, productos, ventas o
              proveedores.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Verificar requerimientos
            </h3>

            <p className="leading-relaxed">
              Elegí cinco requerimientos de tu sistema y definí una prueba
              sencilla para comprobar si cada uno se cumple. Registrá el
              resultado esperado y cómo verificarías su cumplimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Especificación de requerimientos
        </h2>

        <div className="border-l-4 border-blue-700  p-6 rounded-r-xl max-w-4xl">
          <p className="leading-relaxed mb-4">
            Continuá con el sistema trabajado en las actividades de análisis,
            análisis estructurado y objetivos. Elaborá un documento que
            describa los requerimientos necesarios para su desarrollo.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-3">
            El documento debe incluir:
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Nombre y descripción breve del sistema.</li>
            <li>Problema que se busca resolver y objetivo general.</li>
            <li>Al menos cinco objetivos específicos.</li>
            <li>Una lista de requerimientos funcionales.</li>
            <li>Una lista de requerimientos no funcionales.</li>
            <li>Los datos que será necesario almacenar.</li>
            <li>Una forma de verificar el cumplimiento de cada requerimiento.</li>
          </ol>

          <div className="border border-blue-200 rounded-xl p-5 mt-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              Producto esperado
            </h3>

            <p className="leading-relaxed">
              Un documento de especificación de requerimientos que permita
              comprender qué debe hacer el sistema y qué información necesita
              administrar. Este documento será la base para elaborar el
              diagrama de entidad-relación en la próxima etapa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}