export default function CasosUsoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diagramas de Casos de Uso
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los diagramas de casos de uso son una herramienta utilizada para
          representar las funcionalidades que ofrece un sistema y la forma en
          que los usuarios u otros sistemas interactúan con ellas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Forman parte del lenguaje UML y permiten visualizar el
          comportamiento esperado de un sistema desde el punto de vista de sus
          usuarios, sin necesidad de conocer todavía los detalles de
          programación.
        </p>
      </section>

      {/* Qué es UML */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es UML?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          UML (Unified Modeling Language) es un lenguaje estándar utilizado para
          representar, visualizar y documentar sistemas de software mediante
          diferentes tipos de diagramas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Los diagramas UML permiten representar diferentes aspectos de un
          sistema, como sus funcionalidades, estructura, comportamiento y
          relaciones entre sus componentes.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Algunos diagramas UML
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Diagramas de casos de uso.</li>
            <li>Diagramas de clases.</li>
            <li>Diagramas de secuencia.</li>
            <li>Diagramas de actividades.</li>
            <li>Diagramas de estados.</li>
            <li>Diagramas de componentes.</li>
          </ul>
        </div>
      </section>

      {/* Qué es caso de uso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un caso de uso?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un caso de uso representa una funcionalidad o conjunto de acciones
          que un sistema proporciona para alcanzar un objetivo determinado de
          un usuario.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Por ejemplo, en un sistema de ventas, "Registrar cliente" puede ser
          un caso de uso porque representa una funcionalidad concreta que el
          usuario puede realizar.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Ejemplos de casos de uso
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Iniciar sesión.</li>
            <li>Registrar cliente.</li>
            <li>Registrar producto.</li>
            <li>Consultar productos.</li>
            <li>Registrar venta.</li>
            <li>Consultar ventas.</li>
            <li>Generar reporte.</li>
          </ul>
        </div>
      </section>

      {/* Actores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actores
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un actor representa a una persona, organización, dispositivo o
          sistema externo que interactúa con el sistema que estamos
          desarrollando.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El actor no necesariamente tiene que ser una persona. También puede
          representar otro sistema que intercambia información con nuestra
          aplicación.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Usuario
            </h3>

            <p>
              Persona que utiliza directamente las funcionalidades de la
              aplicación.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Administrador
            </h3>

            <p>
              Usuario con permisos especiales para administrar información o
              configuraciones.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Sistema externo
            </h3>

            <p>
              Otro sistema que se comunica con nuestra aplicación.
            </p>
          </div>

        </div>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de un diagrama de casos de uso
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Actor
            </h3>

            <p>
              Representa quién interactúa con el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Caso de uso
            </h3>

            <p>
              Representa una funcionalidad que proporciona el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Límite del sistema
            </h3>

            <p>
              Permite diferenciar qué elementos pertenecen al sistema y cuáles
              son externos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Relaciones
            </h3>

            <p>
              Representan las interacciones y dependencias entre actores y
              casos de uso.
            </p>
          </div>

        </div>
      </section>

      {/* Relaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relaciones entre casos de uso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los casos de uso pueden relacionarse entre sí. Estas relaciones
          permiten representar funcionalidades que comparten comportamientos o
          que dependen unas de otras.
        </p>

        <div className="space-y-5 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Asociación
            </h3>

            <p>
              Representa la interacción entre un actor y un caso de uso.
            </p>

            <div className=" border rounded-lg p-4 mt-4">
              <p>
                Usuario → Registrar cliente
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              &lt;&lt;include&gt;&gt;
            </h3>

            <p>
              Se utiliza cuando un caso de uso siempre necesita ejecutar otro
              caso de uso como parte de su funcionamiento.
            </p>

            <div className=" border rounded-lg p-4 mt-4">
              <p>
                Registrar venta → &lt;&lt;include&gt;&gt; → Validar stock
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              &lt;&lt;extend&gt;&gt;
            </h3>

            <p>
              Se utiliza cuando un comportamiento adicional puede incorporarse
              a un caso de uso bajo determinadas condiciones.
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-4">
              <p>
                Generar reporte → &lt;&lt;extend&gt;&gt; → Exportar a PDF
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Generalización
            </h3>

            <p>
              Permite representar una relación de especialización entre
              actores o casos de uso.
            </p>
          </div>

        </div>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Casos de uso del sistema de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para construir el diagrama de casos de uso de nuestro sistema de
          ventas debemos comenzar identificando quiénes utilizan el sistema y
          qué funcionalidades necesitan realizar.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

          <h3 className="font-semibold mb-4">
            Actor principal
          </h3>

          <div className="bg-blue-50 border rounded-lg p-4">
            <p className="font-medium">
              Vendedor
            </p>
          </div>

          <h3 className="font-semibold mt-8 mb-4">
            Principales casos de uso
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Iniciar sesión.</li>
            <li>Gestionar clientes.</li>
            <li>Gestionar productos.</li>
            <li>Consultar stock.</li>
            <li>Registrar venta.</li>
            <li>Consultar ventas.</li>
            <li>Consultar información de clientes.</li>
            <li>Generar reportes.</li>
          </ul>

        </div>
      </section>

      {/* Tabla de casos de uso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Identificación de casos de uso
        </h2>

        <div className="overflow-x-auto max-w-5xl">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Código
                </th>
                <th className="border p-3 text-left">
                  Caso de uso
                </th>
                <th className="border p-3 text-left">
                  Actor
                </th>
                <th className="border p-3 text-left">
                  Objetivo
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">CU-01</td>
                <td className="border p-3">Iniciar sesión</td>
                <td className="border p-3">Vendedor</td>
                <td className="border p-3">
                  Acceder al sistema.
                </td>
              </tr>

              <tr>
                <td className="border p-3">CU-02</td>
                <td className="border p-3">Gestionar clientes</td>
                <td className="border p-3">Vendedor</td>
                <td className="border p-3">
                  Registrar y administrar clientes.
                </td>
              </tr>

              <tr>
                <td className="border p-3">CU-03</td>
                <td className="border p-3">Gestionar productos</td>
                <td className="border p-3">Vendedor</td>
                <td className="border p-3">
                  Registrar y administrar productos.
                </td>
              </tr>

              <tr>
                <td className="border p-3">CU-04</td>
                <td className="border p-3">Consultar stock</td>
                <td className="border p-3">Vendedor</td>
                <td className="border p-3">
                  Conocer la cantidad disponible de productos.
                </td>
              </tr>

              <tr>
                <td className="border p-3">CU-05</td>
                <td className="border p-3">Registrar venta</td>
                <td className="border p-3">Vendedor</td>
                <td className="border p-3">
                  Registrar una nueva operación de venta.
                </td>
              </tr>

              <tr>
                <td className="border p-3">CU-06</td>
                <td className="border p-3">Consultar ventas</td>
                <td className="border p-3">Vendedor</td>
                <td className="border p-3">
                  Consultar las ventas realizadas.
                </td>
              </tr>

              <tr>
                <td className="border p-3">CU-07</td>
                <td className="border p-3">Generar reportes</td>
                <td className="border p-3">Vendedor</td>
                <td className="border p-3">
                  Obtener información resumida de las operaciones.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cómo construir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo construir un diagrama de casos de uso?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para construir un diagrama de casos de uso debemos partir de los
          requerimientos del sistema. Los requisitos funcionales son una fuente
          fundamental para identificar los casos de uso.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">

          <ol className="list-decimal list-inside space-y-4">
            <li>
              Identificar los usuarios y sistemas externos.
            </li>

            <li>
              Identificar las funcionalidades principales.
            </li>

            <li>
              Relacionar cada actor con las funcionalidades que utiliza.
            </li>

            <li>
              Identificar relaciones entre casos de uso.
            </li>

            <li>
              Definir los límites del sistema.
            </li>

            <li>
              Representar todos los elementos mediante UML.
            </li>
          </ol>

        </div>
      </section>

      {/* De requisitos a casos de uso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          De los requisitos a los casos de uso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los requisitos funcionales y los casos de uso están directamente
          relacionados. Un requisito funcional describe una necesidad del
          sistema, mientras que un caso de uso permite representar esa
          funcionalidad desde la perspectiva de quien la utiliza.
        </p>

        <div className="space-y-4 max-w-4xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Requisito funcional
            </h3>

            <p>
              El sistema debe permitir registrar nuevos clientes.
            </p>
          </div>

          <div className="text-center text-xl">
            ↓
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Caso de uso
            </h3>

            <p>
              CU-02 — Registrar cliente
            </p>
          </div>

          <div className="text-center text-xl">
            ↓
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Actor
            </h3>

            <p>
              Vendedor
            </p>
          </div>

        </div>
      </section>

      {/* Especificación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Especificación de un caso de uso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El diagrama permite visualizar las funcionalidades de manera general,
          pero algunas veces es necesario documentar cada caso de uso con
          mayor detalle.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

          <h3 className="font-semibold mb-4">
            Ejemplo: Registrar venta
          </h3>

          <ul className="space-y-3">
            <li>
              <strong>Actor principal:</strong> Vendedor
            </li>

            <li>
              <strong>Objetivo:</strong> Registrar una nueva venta.
            </li>

            <li>
              <strong>Precondición:</strong> El usuario debe haber iniciado
              sesión.
            </li>

            <li>
              <strong>Flujo principal:</strong> El vendedor selecciona un
              cliente, agrega productos, indica las cantidades y confirma la
              venta.
            </li>

            <li>
              <strong>Resultado:</strong> La venta queda almacenada en la base
              de datos.
            </li>
          </ul>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Usar nombres claros
            </h3>

            <p>
              Los casos de uso deben describirse mediante acciones concretas,
              como "Registrar cliente" o "Consultar ventas".
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Evitar detalles técnicos
            </h3>

            <p>
              El diagrama debe representar qué hace el sistema y no cómo está
              programado internamente.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Mantener el diagrama simple
            </h3>

            <p>
              Deben incluirse las funcionalidades relevantes sin sobrecargar
              innecesariamente el diagrama.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Relacionarlo con los requisitos
            </h3>

            <p>
              Cada funcionalidad importante debería poder relacionarse con uno
              o más requisitos del sistema.
            </p>
          </div>

        </div>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A partir de los requisitos funcionales definidos para el sistema de
          ventas, elaborar un diagrama de casos de uso utilizando UML.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">

          <h3 className="font-semibold mb-4">
            Consigna
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Identificar todos los actores del sistema.
            </li>

            <li>
              Identificar los principales casos de uso.
            </li>

            <li>
              Relacionar cada actor con sus casos de uso.
            </li>

            <li>
              Identificar posibles relaciones
              <strong> include </strong> y
              <strong> extend </strong>.
            </li>

            <li>
              Definir el límite del sistema.
            </li>

            <li>
              Crear el diagrama utilizando una herramienta UML.
            </li>

            <li>
              Comparar el diagrama con los requisitos funcionales definidos
              anteriormente.
            </li>
          </ol>

        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los diagramas de casos de uso permiten representar las
          funcionalidades de un sistema y las interacciones que los actores
          tienen con ellas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Son especialmente útiles durante el análisis y diseño porque permiten
          transformar los requerimientos funcionales en una representación
          visual sencilla de comprender.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold">
            Actor → interactúa con → Caso de uso → representa una funcionalidad
            del sistema.
          </p>
        </div>
      </section>

    </div>
  );
}