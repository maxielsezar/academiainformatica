export default function RequisitosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Requisitos Funcionales y No Funcionales
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vez identificadas las necesidades de un sistema, es necesario
          clasificarlas y describirlas de manera organizada. Una de las
          clasificaciones más importantes en el desarrollo de software divide
          los requisitos en requisitos funcionales y requisitos no funcionales.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Los requisitos funcionales describen lo que el sistema debe hacer,
          mientras que los requisitos no funcionales describen cómo debe
          comportarse o qué características de calidad debe cumplir.
        </p>
      </section>

      {/* Idea principal */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La diferencia principal
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">
              Requisitos Funcionales
            </h3>

            <p>
              Describen las funciones, servicios y operaciones que el sistema
              debe proporcionar a los usuarios.
            </p>

            <p className="mt-4 font-medium">
              Responden a la pregunta:
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-3">
              <p>¿Qué debe hacer el sistema?</p>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3">
              Requisitos No Funcionales
            </h3>

            <p>
              Describen características de calidad, restricciones y condiciones
              que debe cumplir el sistema durante su funcionamiento.
            </p>

            <p className="mt-4 font-medium">
              Responden a preguntas como:
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-3">
              <p>
                ¿Cómo debe funcionar el sistema?
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Requisitos funcionales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos Funcionales
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los requisitos funcionales especifican las acciones que el sistema
          debe poder realizar. Generalmente están relacionados con las tareas
          que un usuario puede ejecutar dentro de la aplicación.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Ejemplos de funciones
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Registrar información.</li>
            <li>Consultar datos.</li>
            <li>Modificar registros.</li>
            <li>Eliminar información.</li>
            <li>Realizar cálculos.</li>
            <li>Generar reportes.</li>
            <li>Iniciar sesión.</li>
            <li>Buscar información.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplos sistema ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos funcionales del sistema de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En nuestro sistema de ventas podemos identificar diferentes
          funcionalidades que deben estar disponibles para los usuarios.
        </p>

        <div className="space-y-4 max-w-4xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-01 — Gestión de clientes
            </h3>

            <p>
              El sistema debe permitir registrar nuevos clientes.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-02 — Consulta de clientes
            </h3>

            <p>
              El sistema debe permitir visualizar la lista de clientes
              registrados.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-03 — Modificación de clientes
            </h3>

            <p>
              El sistema debe permitir modificar la información de un cliente
              existente.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-04 — Eliminación de clientes
            </h3>

            <p>
              El sistema debe permitir eliminar clientes registrados.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-05 — Gestión de productos
            </h3>

            <p>
              El sistema debe permitir registrar nuevos productos indicando
              nombre, precio y cantidad disponible.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-06 — Consulta de productos
            </h3>

            <p>
              El sistema debe permitir visualizar los productos disponibles.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-07 — Registro de ventas
            </h3>

            <p>
              El sistema debe permitir registrar una venta asociada a un
              cliente y uno o más productos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-08 — Cálculo del total
            </h3>

            <p>
              El sistema debe calcular automáticamente el importe total de una
              venta.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-09 — Consulta de ventas
            </h3>

            <p>
              El sistema debe permitir consultar las ventas realizadas.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RF-10 — Persistencia de información
            </h3>

            <p>
              El sistema debe almacenar la información de clientes, productos
              y ventas de manera permanente.
            </p>
          </div>

        </div>
      </section>

      {/* Cómo identificar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo identificar un requisito funcional?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una forma sencilla de identificar un requisito funcional es pensar en
          las acciones que los usuarios deben poder realizar dentro del sistema.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Podemos preguntarnos:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>¿Qué información debe registrar el usuario?</li>
            <li>¿Qué información debe consultar?</li>
            <li>¿Qué datos puede modificar?</li>
            <li>¿Qué información puede eliminar?</li>
            <li>¿Qué cálculos debe realizar el sistema?</li>
            <li>¿Qué reportes debe generar?</li>
            <li>¿Qué procesos debe automatizar?</li>
          </ul>
        </div>
      </section>

      {/* No funcionales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos No Funcionales
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los requisitos no funcionales no describen una función específica,
          sino las características y condiciones que debe cumplir el sistema.
          Están relacionados con la calidad, seguridad, rendimiento y facilidad
          de uso de la aplicación.
        </p>
      </section>

      {/* Categorías */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principales categorías de requisitos no funcionales
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Rendimiento
            </h3>

            <p>
              Define la velocidad y capacidad de respuesta que debe tener el
              sistema.
            </p>

            <p className="mt-3 text-sm">
              Ejemplo: El sistema debe mostrar los resultados de una búsqueda
              en menos de 3 segundos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Seguridad
            </h3>

            <p>
              Define cómo se protegerá la información y quiénes podrán acceder
              a determinadas funcionalidades.
            </p>

            <p className="mt-3 text-sm">
              Ejemplo: Solo los usuarios autorizados podrán acceder al sistema.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Usabilidad
            </h3>

            <p>
              Define qué tan fácil debe ser utilizar la aplicación.
            </p>

            <p className="mt-3 text-sm">
              Ejemplo: La interfaz debe ser clara y permitir realizar las
              principales tareas sin conocimientos técnicos.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Confiabilidad
            </h3>

            <p>
              Define la capacidad del sistema para funcionar correctamente y
              evitar la pérdida de información.
            </p>

            <p className="mt-3 text-sm">
              Ejemplo: El sistema debe conservar la información almacenada
              después de cerrar la aplicación.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Compatibilidad
            </h3>

            <p>
              Define los sistemas, dispositivos o tecnologías con los que debe
              funcionar la aplicación.
            </p>

            <p className="mt-3 text-sm">
              Ejemplo: La aplicación debe funcionar en sistemas operativos
              Windows.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Mantenibilidad
            </h3>

            <p>
              Define la facilidad con la que el sistema puede ser modificado,
              corregido o ampliado en el futuro.
            </p>

            <p className="mt-3 text-sm">
              Ejemplo: El sistema debe estar organizado en componentes
              independientes para facilitar su mantenimiento.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de requisitos no funcionales
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RNF-01 — Rendimiento
            </h3>

            <p>
              El sistema debe responder a las acciones del usuario en un tiempo
              adecuado.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RNF-02 — Persistencia
            </h3>

            <p>
              La información registrada debe almacenarse de manera permanente
              en una base de datos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RNF-03 — Usabilidad
            </h3>

            <p>
              La interfaz debe ser clara y permitir a los usuarios identificar
              fácilmente las principales funcionalidades.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RNF-04 — Seguridad
            </h3>

            <p>
              El acceso a las funcionalidades del sistema debe estar controlado
              según el tipo de usuario.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              RNF-05 — Compatibilidad
            </h3>

            <p>
              La aplicación debe poder ejecutarse correctamente en el entorno
              tecnológico definido para el proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comparación entre ambos tipos de requisitos
        </h2>

        <div className="overflow-x-auto max-w-4xl">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-3 text-left">
                  Requisito Funcional
                </th>
                <th className="border p-3 text-left">
                  Requisito No Funcional
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">
                  El sistema debe permitir registrar clientes.
                </td>
                <td className="border p-3">
                  El sistema debe proteger la información de los clientes.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  El sistema debe permitir registrar productos.
                </td>
                <td className="border p-3">
                  El sistema debe responder rápidamente al consultar productos.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  El sistema debe calcular el total de una venta.
                </td>
                <td className="border p-3">
                  El cálculo debe realizarse correctamente y sin demoras.
                </td>
              </tr>

              <tr>
                <td className="border p-3">
                  El sistema debe permitir consultar ventas.
                </td>
                <td className="border p-3">
                  La información debe conservarse después de cerrar la
                  aplicación.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Identificación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo identificar cada tipo de requisito
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-4">
              Si la frase describe una acción...
            </h3>

            <p>
              Probablemente estamos frente a un requisito funcional.
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-4">
              El sistema debe generar un reporte de ventas.
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-4">
              Si describe una característica o condición...
            </h3>

            <p>
              Probablemente estamos frente a un requisito no funcional.
            </p>

            <div className="bg-blue-50 border rounded-lg p-4 mt-4">
              El reporte debe generarse en menos de 5 segundos.
            </div>
          </div>

        </div>
      </section>

      {/* Ejercicio */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejercicio de análisis
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Lee los siguientes requisitos e intenta identificar si se trata de un
          requisito funcional o no funcional.
        </p>

        <div className="space-y-4 max-w-3xl mt-6">

          <div className="border rounded-xl p-5">
            <p>
              1. El sistema debe permitir registrar nuevos usuarios.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <p>
              2. El sistema debe solicitar una contraseña para acceder.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <p>
              3. La información debe almacenarse de forma permanente.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <p>
              4. El sistema debe permitir buscar productos por nombre.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <p>
              5. La interfaz debe ser fácil de utilizar.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <p>
              6. El sistema debe generar un comprobante de venta.
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
          Los requisitos funcionales describen las funciones que debe realizar
          un sistema, mientras que los requisitos no funcionales establecen las
          condiciones, restricciones y características de calidad que debe
          cumplir.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold">
            Requisito funcional = ¿Qué hace el sistema?
          </p>

          <p className="font-semibold mt-3">
            Requisito no funcional = ¿Cómo debe comportarse el sistema?
          </p>
        </div>
      </section>

    </div>
  );
}