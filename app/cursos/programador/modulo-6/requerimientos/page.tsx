export default function RequerimientosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Especificación de Requerimientos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Antes de comenzar a desarrollar un sistema es necesario comprender
          qué problema se desea resolver y cuáles son las necesidades de las
          personas que utilizarán la aplicación. Estas necesidades deben ser
          analizadas, organizadas y documentadas de manera clara.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          La especificación de requerimientos es el proceso mediante el cual se
          describen las funciones, características y condiciones que debe
          cumplir un sistema de software.
        </p>
      </section>

      {/* ¿Qué es un requerimiento? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un requerimiento?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un requerimiento es una necesidad, condición o funcionalidad que un
          sistema debe cumplir. Los requerimientos permiten definir qué se
          espera de una aplicación y sirven como guía durante el diseño,
          desarrollo y pruebas del software.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Ejemplo
          </h3>

          <p>
            Si una empresa necesita registrar las ventas realizadas durante el
            día, una necesidad podría expresarse de la siguiente manera:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-700 p-4 mt-4">
            <p className="font-medium">
              "El sistema debe permitir registrar una venta."
            </p>
          </div>

          <p className="mt-4">
            Esta necesidad puede convertirse en un requerimiento que deberá ser
            implementado posteriormente en el sistema.
          </p>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué son importantes los requerimientos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los requerimientos permiten establecer una base clara antes de
          comenzar a programar. Si no conocemos correctamente qué necesita el
          usuario, es posible desarrollar funcionalidades que no resuelvan el
          problema real.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Una correcta especificación de requerimientos permite:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Comprender las necesidades del usuario.</li>
            <li>Definir los objetivos del sistema.</li>
            <li>Organizar el desarrollo del proyecto.</li>
            <li>Evitar errores de interpretación.</li>
            <li>Facilitar la comunicación con el cliente.</li>
            <li>Diseñar correctamente la aplicación.</li>
            <li>Planificar las pruebas del sistema.</li>
            <li>Verificar que el software cumpla con lo solicitado.</li>
          </ul>
        </div>
      </section>

      {/* Proceso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Proceso de especificación de requerimientos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La definición de requerimientos no consiste simplemente en escribir
          una lista de funciones. Generalmente es necesario realizar un proceso
          de análisis para comprender correctamente el problema.
        </p>

        <div className="space-y-4 max-w-3xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              1. Identificación del problema
            </h3>

            <p>
              Se analiza qué situación necesita ser resuelta y cuál es el
              objetivo general del sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              2. Relevamiento de información
            </h3>

            <p>
              Se recopila información mediante entrevistas, reuniones,
              observación de procesos o análisis de sistemas existentes.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              3. Análisis de las necesidades
            </h3>

            <p>
              Se organizan las necesidades identificadas y se determina cuáles
              deben ser resueltas por el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              4. Definición de requerimientos
            </h3>

            <p>
              Las necesidades se transforman en requerimientos claros y
              específicos que servirán como guía para el desarrollo.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              5. Validación
            </h3>

            <p>
              Se verifica que los requerimientos representen correctamente las
              necesidades del usuario y que puedan ser comprendidos por el
              equipo de desarrollo.
            </p>
          </div>

        </div>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de un buen requerimiento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para que un requerimiento sea útil debe estar redactado de manera que
          todas las personas involucradas puedan comprenderlo correctamente.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Claro
            </h3>

            <p>
              Debe estar redactado utilizando un lenguaje comprensible y sin
              ambigüedades.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Completo
            </h3>

            <p>
              Debe contener la información necesaria para comprender qué debe
              realizar el sistema.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Consistente
            </h3>

            <p>
              No debe entrar en contradicción con otros requerimientos del
              sistema.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Verificable
            </h3>

            <p>
              Debe ser posible comprobar posteriormente si el sistema cumple o
              no con el requerimiento.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Necesario
            </h3>

            <p>
              Debe representar una necesidad real del usuario o del sistema.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Realizable
            </h3>

            <p>
              Debe ser posible implementarlo teniendo en cuenta los recursos y
              tecnologías disponibles.
            </p>
          </div>

        </div>
      </section>

      {/* Redacción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo redactar un requerimiento?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una forma sencilla y clara de redactar requerimientos consiste en
          indicar qué debe hacer el sistema.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold mb-4">
            Estructura recomendada:
          </p>

          <div className="bg-blue-50 border rounded-lg p-4">
            <p className="font-medium">
              El sistema debe + acción + información o condición.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">
              Ejemplos:
            </h3>

            <ul className="list-disc list-inside space-y-3">
              <li>
                El sistema debe permitir registrar nuevos clientes.
              </li>
              <li>
                El sistema debe permitir registrar productos.
              </li>
              <li>
                El sistema debe permitir modificar la información de un
                producto.
              </li>
              <li>
                El sistema debe permitir eliminar un cliente.
              </li>
              <li>
                El sistema debe calcular el total de una venta.
              </li>
              <li>
                El sistema debe almacenar la información en una base de datos.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Necesidad vs requerimiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre necesidad y requerimiento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una necesidad representa un problema o una situación que una persona
          desea resolver. Un requerimiento representa una característica
          específica que el sistema debe implementar para responder a esa
          necesidad.
        </p>

        <div className="overflow-x-auto max-w-4xl mt-6">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Necesidad
                </th>
                <th className="border p-3 text-left">
                  Requerimiento
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  La empresa necesita organizar la información de sus clientes.
                </td>
                <td className="border p-3">
                  El sistema debe permitir registrar, consultar, modificar y
                  eliminar clientes.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  La empresa necesita controlar los productos disponibles.
                </td>
                <td className="border p-3">
                  El sistema debe permitir registrar y actualizar la
                  información de los productos.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  La empresa necesita registrar las ventas realizadas.
                </td>
                <td className="border p-3">
                  El sistema debe permitir crear y almacenar una venta.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Caso práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Caso práctico: Sistema de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Utilizaremos el sistema de ventas desarrollado durante el curso como
          ejemplo para realizar la especificación de requerimientos.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Objetivo general del sistema
          </h3>

          <p>
            Desarrollar una aplicación que permita administrar clientes,
            productos y ventas, almacenando la información de manera
            organizada y permanente.
          </p>
        </div>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Necesidades identificadas
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Registrar clientes.</li>
            <li>Administrar productos.</li>
            <li>Controlar la información de las ventas.</li>
            <li>Calcular el total de cada venta.</li>
            <li>Consultar la información almacenada.</li>
            <li>Modificar o eliminar registros.</li>
            <li>Mantener los datos después de cerrar la aplicación.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo de especificación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de especificación de requerimientos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una especificación puede organizarse mediante una lista numerada que
          permita identificar cada requerimiento de manera individual.
        </p>

        <div className="space-y-4 max-w-4xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-01 — Registro de clientes
            </h3>

            <p>
              El sistema debe permitir registrar nuevos clientes indicando
              nombre, apellido, teléfono y correo electrónico.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-02 — Consulta de clientes
            </h3>

            <p>
              El sistema debe permitir consultar la lista de clientes
              registrados.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-03 — Registro de productos
            </h3>

            <p>
              El sistema debe permitir registrar productos indicando nombre,
              precio y cantidad disponible.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-04 — Registro de ventas
            </h3>

            <p>
              El sistema debe permitir registrar una venta asociando un cliente
              con uno o más productos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-05 — Cálculo del total
            </h3>

            <p>
              El sistema debe calcular automáticamente el importe total de cada
              venta realizada.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-06 — Persistencia de datos
            </h3>

            <p>
              El sistema debe almacenar la información de clientes, productos
              y ventas en una base de datos.
            </p>
          </div>

        </div>
      </section>

      {/* Documento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Documento de especificación de requerimientos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los requerimientos pueden reunirse en un documento que sirva como
          referencia para todas las personas involucradas en el proyecto.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Un documento básico puede incluir:
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Nombre del sistema.</li>
            <li>Descripción general.</li>
            <li>Objetivo del sistema.</li>
            <li>Problema que se desea resolver.</li>
            <li>Usuarios involucrados.</li>
            <li>Requerimientos funcionales.</li>
            <li>Requerimientos no funcionales.</li>
            <li>Restricciones del sistema.</li>
            <li>Diagramas relacionados.</li>
            <li>Criterios de validación.</li>
          </ol>
        </div>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores comunes al definir requerimientos
        </h2>

        <div className="space-y-4 max-w-3xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Requerimientos demasiado generales
            </h3>

            <p>
              Un requerimiento como "el sistema debe ser bueno" no permite saber
              exactamente qué debe implementarse.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Utilizar términos ambiguos
            </h3>

            <p>
              Expresiones como "rápido", "fácil" o "eficiente" pueden tener
              diferentes significados para distintas personas.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Mezclar necesidades con soluciones
            </h3>

            <p>
              Primero se debe comprender qué necesita el usuario. La tecnología
              que se utilizará para resolver el problema puede decidirse
              posteriormente.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              No validar con los usuarios
            </h3>

            <p>
              Los requerimientos deben ser revisados para comprobar que
              representan correctamente las necesidades reales.
            </p>
          </div>

        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La especificación de requerimientos es una etapa fundamental del
          desarrollo de software. Permite transformar las necesidades de los
          usuarios en una serie de condiciones claras que el sistema deberá
          cumplir.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una buena especificación ayuda a organizar el proyecto, diseñar la
          solución, desarrollar las funcionalidades correctas y comprobar
          posteriormente que el sistema cumple con los objetivos establecidos.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold">
            Antes de programar, debemos saber qué problema estamos resolviendo.
          </p>
        </div>
      </section>

    </div>
  );
}