export default function DiagramaActividadesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diagramas de Actividades
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los diagramas de actividades son una herramienta de modelado UML
          utilizada para representar el flujo de trabajo de un proceso o
          funcionalidad de un sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Permiten visualizar las acciones que se realizan, las decisiones
          que pueden producirse y los diferentes caminos que puede seguir
          un proceso desde su inicio hasta su finalización.
        </p>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6 max-w-3xl">
          <p className="font-semibold text-blue-900">
            Idea clave
          </p>

          <p className="mt-2 leading-relaxed">
            Un diagrama de actividades permite responder:
            <strong> ¿qué pasos se siguen para completar un proceso?</strong>
          </p>
        </div>
      </section>

      {/* ¿Para qué sirve? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué sirve?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Representar el flujo de un proceso.</li>
          <li>Mostrar las actividades que realiza un sistema.</li>
          <li>Representar decisiones y diferentes caminos.</li>
          <li>Identificar actividades que pueden ejecutarse en paralelo.</li>
          <li>Comprender procesos complejos de manera visual.</li>
          <li>Detectar pasos innecesarios o problemas en un proceso.</li>
          <li>Documentar el funcionamiento de una aplicación.</li>
          <li>Facilitar la comunicación entre usuarios y desarrolladores.</li>
        </ul>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos principales
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Nodo inicial
            </h3>

            <p className="leading-relaxed">
              Indica el punto donde comienza el proceso.
            </p>

            <div className="mt-4 text-center text-2xl">
              ●
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad
            </h3>

            <p className="leading-relaxed">
              Representa una acción que se realiza durante el proceso.
            </p>

            <div className="mt-4 rounded-lg p-3 text-center">
              Registrar venta
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Flujo
            </h3>

            <p className="leading-relaxed">
              Las flechas indican el orden en que se ejecutan las actividades.
            </p>

            <div className="mt-4 text-center text-xl">
              Actividad → Actividad
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Decisión
            </h3>

            <p className="leading-relaxed">
              Permite representar una condición que determina qué camino
              seguirá el proceso.
            </p>

            <div className="mt-4 text-center text-2xl">
              ◇
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Nodo de combinación
            </h3>

            <p className="leading-relaxed">
              Permite unir diferentes caminos que vuelven a converger en
              una misma actividad.
            </p>

            <div className="mt-4 text-center">
              ─────────
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Nodo final
            </h3>

            <p className="leading-relaxed">
              Indica que el proceso o flujo de actividades ha terminado.
            </p>

            <div className="mt-4 text-center text-2xl">
              ◉
            </div>
          </div>

        </div>
      </section>

      {/* Flujo básico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura básica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un proceso sencillo puede representarse mediante una serie de
          actividades conectadas mediante flechas.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mt-6 max-w-4xl overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`        ●
        |
        v
   Iniciar proceso
        |
        v
   Realizar actividad
        |
        v
   Realizar actividad
        |
        v
        ◉`}
          </pre>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          El flujo comienza en el nodo inicial, atraviesa las diferentes
          actividades y finaliza en el nodo final.
        </p>
      </section>

      {/* Decisiones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Representación de decisiones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las características más importantes de los diagramas de
          actividades es la posibilidad de representar decisiones.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una decisión permite que el proceso tome diferentes caminos
          dependiendo del resultado de una condición.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mt-6 max-w-4xl overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`             Registrar venta
                    |
                    v
              ¿Stock disponible?
                 /        \\
               Sí          No
               |            |
               v            v
        Agregar producto   Mostrar error
               |            |
               \\            /
                \\          /
                 v        v
                  Final`}
          </pre>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          Las condiciones normalmente se expresan sobre las salidas de la
          decisión, por ejemplo <strong>[Sí]</strong> y <strong>[No]</strong>.
        </p>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: registrar una venta
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Veamos cómo podemos representar el proceso de registrar una venta
          en el sistema que estamos desarrollando.
        </p>

        <div className=" border rounded-xl p-6 mt-6 max-w-5xl">
          <p className="font-semibold mb-5">
            Flujo del proceso:
          </p>

          <div className="space-y-3 font-mono text-sm">
            <p>● Inicio</p>
            <p>↓</p>
            <p>Seleccionar cliente</p>
            <p>↓</p>
            <p>Seleccionar producto</p>
            <p>↓</p>
            <p>Ingresar cantidad</p>
            <p>↓</p>
            <p>¿Hay stock suficiente?</p>
            <p>├── [No] → Mostrar mensaje de error</p>
            <p>│</p>
            <p>└── [Sí] → Agregar producto a la venta</p>
            <p>↓</p>
            <p>Calcular total</p>
            <p>↓</p>
            <p>Confirmar venta</p>
            <p>↓</p>
            <p>Guardar venta</p>
            <p>↓</p>
            <p>◉ Fin</p>
          </div>
        </div>
      </section>

      {/* Carriles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Carriles de actividad
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los carriles de actividad, también conocidos como
          <em> swimlanes</em>, permiten dividir un diagrama para indicar
          quién o qué componente es responsable de cada actividad.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Son especialmente útiles cuando intervienen diferentes actores,
          departamentos o componentes del sistema.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6 max-w-5xl">

          <div className="border rounded-xl overflow-hidden">
            <div className="bg-blue-900 text-white p-3 font-semibold text-center">
              Vendedor
            </div>

            <div className="p-5 space-y-3 text-sm">
              <p>Seleccionar cliente</p>
              <p>Seleccionar producto</p>
              <p>Confirmar venta</p>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden">
            <div className="bg-blue-800 text-white p-3 font-semibold text-center">
              Sistema
            </div>

            <div className="p-5 space-y-3 text-sm">
              <p>Validar stock</p>
              <p>Calcular total</p>
              <p>Registrar venta</p>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden">
            <div className="bg-blue-700 text-white p-3 font-semibold text-center">
              Base de datos
            </div>

            <div className="p-5 space-y-3 text-sm">
              <p>Guardar venta</p>
              <p>Actualizar stock</p>
              <p>Confirmar operación</p>
            </div>
          </div>

        </div>
      </section>

      {/* Paralelismo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades paralelas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los diagramas de actividades también permiten representar tareas
          que pueden ejecutarse de manera paralela.
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-xl p-6 mt-6 max-w-4xl overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`                 Confirmar venta
                       |
                       v
                  ─────────
                  |       |
                  v       v
             Guardar    Actualizar
              venta       stock
                  |       |
                  v       v
                  ─────────
                       |
                       v
                      Fin`}
          </pre>
        </div>

        <p className="leading-relaxed max-w-3xl mt-5">
          En este ejemplo, después de confirmar la venta pueden realizarse
          dos operaciones independientes: guardar la venta y actualizar
          el stock.
        </p>
      </section>

      {/* Diferencia con secuencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diagrama de actividades vs. diagrama de secuencia
        </h2>

        <div className="overflow-x-auto max-w-5xl">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-4 text-left">
                  Característica
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Actividades
                </th>
                <th className="border border-gray-300 p-4 text-left">
                  Secuencia
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">
                  Enfoque
                </td>
                <td className="border border-gray-300 p-4">
                  Flujo del proceso
                </td>
                <td className="border border-gray-300 p-4">
                  Interacciones
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4">
                  Principal interés
                </td>
                <td className="border border-gray-300 p-4">
                  Qué actividades se realizan
                </td>
                <td className="border border-gray-300 p-4">
                  Qué mensajes se intercambian
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4">
                  Orden temporal
                </td>
                <td className="border border-gray-300 p-4">
                  Sí
                </td>
                <td className="border border-gray-300 p-4">
                  Sí
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4">
                  Decisiones
                </td>
                <td className="border border-gray-300 p-4">
                  Muy utilizadas
                </td>
                <td className="border border-gray-300 p-4">
                  Se representan mediante condiciones
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 p-4">
                  Uso principal
                </td>
                <td className="border border-gray-300 p-4">
                  Modelar procesos
                </td>
                <td className="border border-gray-300 p-4">
                  Modelar comunicaciones
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Relación con requerimientos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación con los requerimientos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los diagramas de actividades pueden construirse a partir de los
          requisitos y casos de uso definidos durante el análisis del sistema.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6 mt-6 max-w-4xl">
          <p className="font-semibold text-blue-900 mb-4">
            Ejemplo de transformación
          </p>

          <div className="space-y-3">
            <p>
              <strong>Requisito:</strong> El sistema debe permitir registrar
              una venta.
            </p>

            <p>
              <strong>Caso de uso:</strong> Registrar venta.
            </p>

            <p>
              <strong>Diagrama de actividades:</strong> Representa el flujo
              necesario para completar el registro de la venta.
            </p>
          </div>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Definir claramente el inicio y final del proceso.</li>
          <li>Utilizar nombres claros para las actividades.</li>
          <li>Representar las decisiones mediante condiciones.</li>
          <li>Evitar diagramas excesivamente complejos.</li>
          <li>Mantener un flujo lógico y fácil de seguir.</li>
          <li>Utilizar carriles cuando existan diferentes responsables.</li>
          <li>Verificar que el diagrama coincida con los requisitos.</li>
          <li>Utilizar el diagrama como apoyo para la documentación técnica.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className=" border border-blue-200 rounded-xl p-6 max-w-4xl">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Diseñar un diagrama de actividades
          </h3>

          <p className="leading-relaxed">
            A partir del caso de uso <strong>“Registrar una venta”</strong>,
            diseñar un diagrama de actividades que represente todo el proceso.
          </p>

          <p className="font-semibold mt-5 mb-3">
            El diagrama debe incluir:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Nodo inicial.</li>
            <li>Actividades principales.</li>
            <li>Al menos una decisión.</li>
            <li>Condiciones para cada camino.</li>
            <li>Actividades correspondientes a cada resultado.</li>
            <li>Nodo final.</li>
          </ul>

          <p className="mt-5 leading-relaxed">
            Como actividad adicional, incorporar carriles para diferenciar
            las acciones realizadas por el vendedor, el sistema y la base
            de datos.
          </p>
        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <div className="bg-blue-900 text-white rounded-xl p-6 max-w-4xl">
          <p className="leading-relaxed">
            Los diagramas de actividades permiten representar de forma visual
            el flujo de un proceso, incluyendo acciones, decisiones,
            caminos alternativos y actividades paralelas.
          </p>

          <p className="leading-relaxed mt-4">
            En el desarrollo de software son útiles para analizar requisitos,
            describir casos de uso, documentar procesos y facilitar el diseño
            de soluciones antes de comenzar con la implementación.
          </p>
        </div>
      </section>

    </div>
  );
}
