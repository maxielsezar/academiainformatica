export default function ContextoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diagrama de Contexto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El diagrama de contexto es una herramienta utilizada para representar
          un sistema desde una perspectiva general. Permite identificar el
          sistema que estamos desarrollando, las personas, organizaciones o
          sistemas externos que interactúan con él y la información que
          intercambian.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A diferencia de otros diagramas más detallados, el diagrama de
          contexto no muestra cómo está construido internamente el sistema.
          Su objetivo es establecer claramente los límites del sistema y su
          relación con el entorno.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un diagrama de contexto?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un diagrama de contexto representa al sistema como un único proceso o
          componente central y muestra las entidades externas que se comunican
          con él.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          También permite representar los principales flujos de información
          que entran y salen del sistema.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Un diagrama de contexto permite identificar:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>El sistema que se está desarrollando.</li>
            <li>Los actores o entidades externas.</li>
            <li>Los sistemas externos.</li>
            <li>La información que ingresa al sistema.</li>
            <li>La información que sale del sistema.</li>
            <li>Los límites del sistema.</li>
          </ul>
        </div>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo del diagrama
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El principal objetivo es obtener una visión general del sistema antes
          de analizar sus componentes internos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Esto permite comprender rápidamente quién interactúa con el sistema,
          qué información proporciona cada entidad externa y qué información
          recibe a cambio.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Delimitar el sistema
            </h3>

            <p>
              Permite establecer qué elementos forman parte del sistema y cuáles
              pertenecen al entorno.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Identificar interacciones
            </h3>

            <p>
              Permite visualizar las comunicaciones entre el sistema y las
              entidades externas.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Facilitar el análisis
            </h3>

            <p>
              Ayuda a comprender el funcionamiento general antes de analizar
              los procesos internos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Documentar
            </h3>

            <p>
              Forma parte de la documentación técnica y permite comunicar
              rápidamente el alcance del sistema.
            </p>
          </div>

        </div>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de un diagrama de contexto
        </h2>

        <div className="space-y-5 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Sistema
            </h3>

            <p>
              Se representa como el elemento central del diagrama. Resume todo
              el sistema que se está analizando.
            </p>

            <div className="border rounded-lg p-4 mt-4 text-center">
              <p className="font-semibold">
                Sistema de Ventas
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Entidades externas
            </h3>

            <p>
              Son las personas, organizaciones o sistemas externos que
              interactúan con el sistema.
            </p>

            <div className=" border rounded-lg p-4 mt-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Vendedor.</li>
                <li>Administrador.</li>
                <li>Cliente.</li>
                <li>Sistema de pagos.</li>
              </ul>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Flujos de información
            </h3>

            <p>
              Representan la información que se intercambia entre el sistema y
              las entidades externas.
            </p>

            <div className=" border rounded-lg p-4 mt-4">
              <p>
                Vendedor → Datos de venta → Sistema
              </p>

              <p className="mt-2">
                Sistema → Comprobante de venta → Vendedor
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sistema central */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El sistema como elemento central
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un diagrama de contexto todo el sistema se representa como una
          única unidad. No se muestran sus clases, tablas, ventanas o procesos
          internos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Esto permite concentrarse exclusivamente en las relaciones que el
          sistema mantiene con su entorno.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

          <div className="grid md:grid-cols-3 items-center gap-4 text-center">

            <div className="border rounded-lg p-5">
              <p className="font-semibold">
                Vendedor
              </p>
            </div>

            <div>
              <p className="mb-2">
                Datos de ventas
              </p>

              <p className="text-xl">
                →
              </p>

              <div className="border rounded-lg p-5 mt-4">
                <p className="font-semibold">
                  Sistema de Ventas
                </p>
              </div>

              <p className="text-xl mt-4">
                →
              </p>

              <p className="mt-2">
                Comprobantes
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <p className="font-semibold">
                Cliente
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Flujos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujos de información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los flujos de información muestran qué datos ingresan al sistema y
          qué información se genera como resultado de su funcionamiento.
        </p>

        <div className="space-y-4 max-w-4xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Información de entrada
            </h3>

            <p>
              Son los datos enviados desde una entidad externa hacia el
              sistema.
            </p>

            <div className=" border rounded-lg p-4 mt-4">
              <p>
                Datos del cliente, datos del producto y datos de la venta.
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Información de salida
            </h3>

            <p>
              Es la información que el sistema genera y entrega a una entidad
              externa.
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-4">
              <p>
                Comprobante, información de stock, resultados de consultas y
                reportes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diagrama de contexto del sistema de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Aplicando estos conceptos al sistema de ventas desarrollado durante
          el curso, podemos identificar diferentes entidades externas que
          interactúan con nuestra aplicación.
        </p>

        <div className="border rounded-xl p-6 max-w-4xl mt-6">

          <h3 className="font-semibold mb-4">
            Entidades externas
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Vendedor:</strong> registra clientes, productos y ventas.
            </li>

            <li>
              <strong>Administrador:</strong> administra información y
              consulta reportes.
            </li>

            <li>
              <strong>Cliente:</strong> proporciona información necesaria para
              realizar una venta.
            </li>

            <li>
              <strong>Sistema de pagos:</strong> puede intercambiar información
              relacionada con los pagos.
            </li>
          </ul>

        </div>
      </section>

      {/* Tabla flujos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujos del sistema de ventas
        </h2>

        <div className="overflow-x-auto max-w-5xl">
          <table className="w-full border-collapse border">

            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Entidad
                </th>

                <th className="border p-3 text-left">
                  Entrada al sistema
                </th>

                <th className="border p-3 text-left">
                  Salida del sistema
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-3">
                  Vendedor
                </td>

                <td className="border p-3">
                  Datos de clientes, productos y ventas
                </td>

                <td className="border p-3">
                  Confirmaciones, comprobantes y consultas
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Administrador
                </td>

                <td className="border p-3">
                  Solicitudes de administración
                </td>

                <td className="border p-3">
                  Reportes e información del sistema
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Cliente
                </td>

                <td className="border p-3">
                  Datos personales
                </td>

                <td className="border p-3">
                  Comprobante e información de la compra
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Sistema de pagos
                </td>

                <td className="border p-3">
                  Confirmación del pago
                </td>

                <td className="border p-3">
                  Datos de la operación de pago
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      {/* Diferencia casos de uso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diagrama de contexto vs. casos de uso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Ambos diagramas permiten analizar el sistema desde una perspectiva
          externa, pero tienen objetivos diferentes.
        </p>

        <div className="overflow-x-auto max-w-5xl mt-6">

          <table className="w-full border-collapse border">

            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Característica
                </th>

                <th className="border p-3 text-left">
                  Diagrama de contexto
                </th>

                <th className="border p-3 text-left">
                  Casos de uso
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border p-3">
                  Objetivo
                </td>

                <td className="border p-3">
                  Mostrar el sistema y su entorno
                </td>

                <td className="border p-3">
                  Mostrar funcionalidades e interacciones
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Nivel de detalle
                </td>

                <td className="border p-3">
                  Muy general
                </td>

                <td className="border p-3">
                  Mayor detalle funcional
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Elemento central
                </td>

                <td className="border p-3">
                  Sistema
                </td>

                <td className="border p-3">
                  Casos de uso
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  Flujos de datos
                </td>

                <td className="border p-3">
                  Sí
                </td>

                <td className="border p-3">
                  No es su objetivo principal
                </td>
              </tr>

            </tbody>

          </table>

        </div>
      </section>

      {/* Cómo construir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo construir un diagrama de contexto?
        </h2>

        <div className="border rounded-xl p-6 max-w-3xl">

          <ol className="list-decimal list-inside space-y-4">

            <li>
              Definir claramente cuál es el sistema que se va a representar.
            </li>

            <li>
              Establecer los límites del sistema.
            </li>

            <li>
              Identificar las personas y sistemas externos.
            </li>

            <li>
              Identificar la información que cada entidad proporciona.
            </li>

            <li>
              Identificar la información que cada entidad recibe.
            </li>

            <li>
              Representar los flujos de información.
            </li>

            <li>
              Revisar que el diagrama represente correctamente el alcance del
              sistema.
            </li>

          </ol>

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
              Mantener un nivel general
            </h3>

            <p>
              No incluir clases, tablas, métodos o detalles de implementación.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Definir correctamente los límites
            </h3>

            <p>
              Es importante determinar qué pertenece al sistema y qué forma
              parte de su entorno.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Nombrar claramente los flujos
            </h3>

            <p>
              Los flujos deben indicar de manera comprensible qué información
              se intercambia.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Relacionarlo con los requisitos
            </h3>

            <p>
              Las entidades y flujos representados deben tener relación con las
              necesidades reales del sistema.
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
          A partir de los requisitos y casos de uso definidos anteriormente,
          elaborar el diagrama de contexto del sistema de ventas.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">

          <h3 className="font-semibold mb-4">
            Consigna
          </h3>

          <ol className="list-decimal list-inside space-y-3">

            <li>
              Identificar el sistema que se va a representar.
            </li>

            <li>
              Definir sus límites.
            </li>

            <li>
              Identificar todos los actores y sistemas externos.
            </li>

            <li>
              Determinar qué información ingresa desde cada entidad.
            </li>

            <li>
              Determinar qué información entrega el sistema.
            </li>

            <li>
              Representar los flujos de información.
            </li>

            <li>
              Elaborar el diagrama de contexto.
            </li>

            <li>
              Comparar el resultado con los requisitos y casos de uso
              desarrollados anteriormente.
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
          El diagrama de contexto permite representar un sistema de manera
          general, mostrando sus límites, las entidades externas y los flujos
          de información que existen entre ellos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Es una herramienta especialmente útil durante la etapa de análisis
          porque permite obtener una visión global del sistema antes de avanzar
          hacia diseños más detallados.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold">
            Entidad externa → información → Sistema → información → Entidad
            externa
          </p>
        </div>

      </section>

    </div>
  );
}