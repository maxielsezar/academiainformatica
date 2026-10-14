export default function DiagramaEntidadRelacionPage() {
  return (
    <div className="space-y-14">
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diagrama de entidad-relación
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El diagrama de entidad-relación (DER) es una herramienta que permite
          representar gráficamente los datos que necesita administrar un
          sistema y las relaciones que existen entre ellos. Se utiliza durante
          el análisis y diseño de una base de datos para organizar la
          información antes de crear las tablas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En esta etapa vamos a retomar los requerimientos definidos
          anteriormente para identificar qué elementos deben representarse,
          qué información se necesita almacenar y cómo se relacionan los datos.
        </p>
      </section>

      {/* ¿Qué es un DER? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un diagrama de entidad-relación?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Es una representación visual del modelo de datos de un sistema.
          Permite comprender qué información se almacena y cómo se vinculan
          los distintos elementos del sistema.
        </p>

        <p className="leading-relaxed max-w-3xl">
          Antes de crear las tablas en Microsoft Access, el diagrama ayuda a
          detectar datos que faltan, relaciones incorrectas y posibles
          problemas en la organización de la información.
        </p>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de un diagrama de entidad-relación
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          <div className="border border-blue-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-4">
              E
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Entidades
            </h3>

            <p className="leading-relaxed">
              Representan los objetos, personas, lugares o conceptos sobre
              los que el sistema necesita guardar información.
            </p>

            <p className="leading-relaxed mt-3">
              Ejemplos: Cliente, Producto, Venta y Empleado.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-4">
              A
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Atributos
            </h3>

            <p className="leading-relaxed">
              Son las características o datos que describen a una entidad.
            </p>

            <p className="leading-relaxed mt-3">
              Ejemplos de Cliente: idCliente, nombre, apellido, teléfono y
              correo electrónico.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-4">
              R
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Relaciones
            </h3>

            <p className="leading-relaxed">
              Representan cómo se vinculan dos o más entidades dentro del
              sistema.
            </p>

            <p className="leading-relaxed mt-3">
              Ejemplo: un cliente realiza una o varias ventas.
            </p>
          </div>
        </div>
      </section>

      {/* Representación gráfica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo se representan los elementos?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          En la notación clásica de entidad-relación se utilizan símbolos
          gráficos para diferenciar los elementos del modelo.
        </p>

        <div className="space-y-5 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center gap-5 border border-blue-200 rounded-xl p-5">
            <div className="w-44 h-20 border-2 border-blue-800 rounded-lg flex items-center justify-center font-bold text-blue-900 shrink-0">
              CLIENTE
            </div>

            <p className="leading-relaxed">
              <strong>Rectángulo:</strong> representa una entidad, como
              Cliente o Producto.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 border border-blue-200 rounded-xl p-5">
            <div className="w-44 h-20 flex items-center justify-center shrink-0">
              <div className="w-28 h-12 border-2 border-blue-800 rotate-[-8deg] flex items-center justify-center">
                <span className="rotate-[8deg] text-blue-900 font-semibold">
                  nombre
                </span>
              </div>
            </div>

            <p className="leading-relaxed">
              <strong>Óvalo:</strong> representa un atributo en la notación
              clásica. Por ejemplo, nombre es un atributo de Cliente.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 border border-blue-200 rounded-xl p-5">
            <div className="w-44 h-20 flex items-center justify-center shrink-0">
              <div className="w-20 h-20 rotate-45 border-2 border-blue-800 flex items-center justify-center">
                <span className="-rotate-45 text-blue-900 font-semibold text-sm">
                  realiza
                </span>
              </div>
            </div>

            <p className="leading-relaxed">
              <strong>Rombo:</strong> representa una relación entre entidades,
              como Cliente realiza Venta.
            </p>
          </div>

          <p className="text-sm text-blue-800">
            Existen distintas notaciones para elaborar diagramas. En la
            práctica también se utiliza la notación de pata de cuervo, que
            permite representar las cardinalidades mediante símbolos en las
            conexiones.
          </p>
        </div>
      </section>

      {/* Claves */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Claves e identificación de entidades
        </h2>

        <p className="leading-relaxed max-w-3xl mb-5">
          Cada entidad debe contar con una forma de identificar de manera
          única sus registros. Para ello se utiliza una clave primaria,
          que luego se implementará en la tabla correspondiente.
        </p>

        <div className="overflow-x-auto max-w-4xl rounded-xl border border-blue-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-4 text-left border border-blue-200">
                  Entidad
                </th>
                <th className="p-4 text-left border border-blue-200">
                  Clave primaria
                </th>
                <th className="p-4 text-left border border-blue-200">
                  Otros atributos
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4 border border-blue-200">Cliente</td>
                <td className="p-4 border border-blue-200">idCliente</td>
                <td className="p-4 border border-blue-200">
                  nombre, apellido, teléfono
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-blue-200">Producto</td>
                <td className="p-4 border border-blue-200">idProducto</td>
                <td className="p-4 border border-blue-200">
                  nombre, precio, stock
                </td>
              </tr>

              <tr>
                <td className="p-4 border border-blue-200">Venta</td>
                <td className="p-4 border border-blue-200">idVenta</td>
                <td className="p-4 border border-blue-200">
                  fecha, idCliente
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          En algunos diagramas, la clave primaria se representa subrayando
          el atributo correspondiente. En el diseño de tablas de Access,
          se establecerá explícitamente mediante la opción Clave principal.
        </p>
      </section>

      {/* Cardinalidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cardinalidad de las relaciones
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          La cardinalidad indica cuántas instancias de una entidad pueden
          relacionarse con instancias de otra. Las relaciones más habituales
          son uno a uno, uno a muchos y muchos a muchos.
        </p>

        <div className="space-y-6 max-w-4xl">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Uno a uno (1:1)
            </h3>

            <p className="leading-relaxed mb-4">
              Una instancia de una entidad se relaciona con una sola instancia
              de la otra entidad, y viceversa.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="border-2 border-blue-800 rounded-lg px-5 py-3 font-semibold text-blue-900">
                Persona
              </div>

              <span className="text-blue-900 font-bold">1 ─── 1</span>

              <div className="border-2 border-blue-800 rounded-lg px-5 py-3 font-semibold text-blue-900">
                Documento
              </div>
            </div>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Uno a muchos (1:N)
            </h3>

            <p className="leading-relaxed mb-4">
              Una instancia de una entidad puede relacionarse con muchas
              instancias de otra. Cada venta, en este ejemplo, corresponde
              a un solo cliente.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="border-2 border-blue-800 rounded-lg px-5 py-3 font-semibold text-blue-900">
                Cliente
              </div>

              <span className="text-blue-900 font-bold">1 ─── N</span>

              <div className="border-2 border-blue-800 rounded-lg px-5 py-3 font-semibold text-blue-900">
                Venta
              </div>
            </div>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Muchos a muchos (N:M)
            </h3>

            <p className="leading-relaxed mb-4">
              Muchas instancias de una entidad pueden relacionarse con muchas
              instancias de la otra. Por ejemplo, una venta puede incluir
              varios productos y un producto puede aparecer en diferentes
              ventas.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="border-2 border-blue-800 rounded-lg px-5 py-3 font-semibold text-blue-900">
                Venta
              </div>

              <span className="text-blue-900 font-bold">N ─── M</span>

              <div className="border-2 border-blue-800 rounded-lg px-5 py-3 font-semibold text-blue-900">
                Producto
              </div>
            </div>

            <p className="leading-relaxed mt-5">
              Al implementar una relación muchos a muchos en una base de
              datos relacional, normalmente se crea una entidad o tabla
              intermedia. En este caso se puede utilizar DetalleVenta.
            </p>
          </div>
        </div>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: base de datos de una librería
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una librería necesita registrar sus clientes, productos y ventas.
          Para modelar la información, se identifican cuatro entidades:
          Cliente, Venta, DetalleVenta y Producto.
        </p>

        <div className="border border-blue-200 rounded-xl p-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border-2 border-blue-800 rounded-lg overflow-hidden">
              <h3 className="bg-blue-800 text-white font-bold p-3">
                CLIENTE
              </h3>
              <div className="p-4 space-y-2">
                <p className="font-semibold underline">idCliente</p>
                <p>nombre</p>
                <p>apellido</p>
                <p>telefono</p>
              </div>
            </div>

            <div className="border-2 border-blue-800 rounded-lg overflow-hidden">
              <h3 className="bg-blue-800 text-white font-bold p-3">
                VENTA
              </h3>
              <div className="p-4 space-y-2">
                <p className="font-semibold underline">idVenta</p>
                <p>fecha</p>
                <p>idCliente (FK)</p>
              </div>
            </div>

            <div className="border-2 border-blue-800 rounded-lg overflow-hidden">
              <h3 className="bg-blue-800 text-white font-bold p-3">
                DETALLEVENTA
              </h3>
              <div className="p-4 space-y-2">
                <p className="font-semibold underline">idDetalle</p>
                <p>idVenta (FK)</p>
                <p>idProducto (FK)</p>
                <p>cantidad</p>
                <p>precioUnitario</p>
              </div>
            </div>

            <div className="border-2 border-blue-800 rounded-lg overflow-hidden">
              <h3 className="bg-blue-800 text-white font-bold p-3">
                PRODUCTO
              </h3>
              <div className="p-4 space-y-2">
                <p className="font-semibold underline">idProducto</p>
                <p>titulo</p>
                <p>autor</p>
                <p>precio</p>
                <p>stock</p>
              </div>
            </div>
          </div>

          <p className="leading-relaxed mt-5">
            FK significa clave foránea: un campo que referencia la clave
            primaria de otra tabla. Las relaciones son Cliente 1:N Venta,
            Venta 1:N DetalleVenta y Producto 1:N DetalleVenta.
          </p>
        </div>
      </section>

      {/* Reglas para el diseño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones para elaborar un DER
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Identificar las entidades a partir de los requerimientos del sistema.
          </li>
          <li>
            Definir los atributos necesarios para cada entidad.
          </li>
          <li>
            Establecer una clave primaria para identificar cada registro.
          </li>
          <li>
            Determinar las relaciones y su cardinalidad.
          </li>
          <li>
            Evitar almacenar repetidamente los mismos datos sin necesidad.
          </li>
          <li>
            Comprobar que el diagrama responda a los objetivos y requerimientos.
          </li>
          <li>
            Revisar el modelo antes de comenzar a crear las tablas en Access.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6 max-w-4xl">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar entidades
            </h3>

            <p className="leading-relaxed">
              Retomá el sistema que venís trabajando y revisá los
              requerimientos definidos. Identificá al menos cuatro entidades
              principales y explicá qué información representa cada una.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Definir atributos y claves
            </h3>

            <p className="leading-relaxed">
              Para cada entidad identificada, proponé al menos cuatro
              atributos. Elegí una clave primaria que permita identificar
              cada registro de manera única.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Establecer relaciones
            </h3>

            <p className="leading-relaxed">
              Indicá qué entidades deben relacionarse. Para cada relación,
              escribí una descripción y determiná si es uno a uno, uno a
              muchos o muchos a muchos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Resolver una relación muchos a muchos
            </h3>

            <p className="leading-relaxed">
              Una venta puede incluir varios productos y cada producto puede
              aparecer en muchas ventas. Diseñá una entidad intermedia que
              permita representar esta relación. Indicá sus atributos y las
              claves que necesita.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Revisar un diagrama
            </h3>

            <p className="leading-relaxed">
              Elaborá un DER de una biblioteca con las entidades Libro,
              Autor, Socio y Préstamo. Definí los atributos principales,
              las claves y las relaciones. Revisá si un libro puede tener
              varios autores y explicá cómo representarías esa situación
              según las reglas de la biblioteca.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Diseñar el modelo de datos
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-r-xl max-w-4xl">
          <p className="leading-relaxed mb-4">
            Continuá con el sistema elegido en las actividades anteriores.
            Utilizá el documento de requerimientos para elaborar un diagrama
            de entidad-relación completo.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-3">
            El trabajo debe incluir:
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Nombre y descripción del sistema.</li>
            <li>Listado de entidades identificadas.</li>
            <li>Atributos de cada entidad.</li>
            <li>Clave primaria de cada entidad.</li>
            <li>Relaciones entre las entidades.</li>
            <li>Cardinalidad de cada relación.</li>
            <li>Entidades intermedias necesarias para resolver relaciones N:M.</li>
            <li>Una breve explicación de las decisiones tomadas.</li>
          </ol>

          <div className="border border-blue-200 rounded-xl p-5 mt-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              Producto esperado
            </h3>

            <p className="leading-relaxed">
              Un diagrama de entidad-relación que represente la estructura
              de datos propuesta para el sistema. Debe ser coherente con
              los objetivos y requerimientos definidos y servirá como base
              para planificar las tareas del proyecto y, posteriormente,
              implementar las tablas y relaciones en Microsoft Access.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}