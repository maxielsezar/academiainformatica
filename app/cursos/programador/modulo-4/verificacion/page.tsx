export default function VerificacionCodigoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Verificación de Código
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La verificación de código es una actividad que permite comprobar que
          el software fue construido correctamente y cumple con los requisitos
          establecidos durante el diseño.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A diferencia de las pruebas unitarias, donde ejecutamos el programa,
          en la verificación analizamos el código fuente para detectar posibles
          errores, malas prácticas o incumplimientos de los requisitos.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la Verificación?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La verificación busca responder la siguiente pregunta:
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6 bg-gray-50">
          <p className="font-semibold text-lg">
            ¿Estamos construyendo correctamente el software?
          </p>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Para responder esta pregunta se revisan clases, métodos,
          validaciones, cálculos, estructura del código y cumplimiento de los
          requisitos definidos para el sistema.
        </p>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Verificación vs Testing
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Verificación</th>
                <th className="border p-3">Testing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">
                  Analiza el código fuente.
                </td>
                <td className="border p-3">
                  Ejecuta el software.
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Detecta problemas de diseño.
                </td>
                <td className="border p-3">
                  Detecta errores de ejecución.
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Se enfoca en cómo fue construido.
                </td>
                <td className="border p-3">
                  Se enfoca en cómo funciona.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de la Verificación
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Detectar errores antes de ejecutar el sistema.</li>
          <li>Comprobar que se cumplen los requisitos.</li>
          <li>Identificar código duplicado.</li>
          <li>Verificar validaciones de datos.</li>
          <li>Mejorar la calidad del software.</li>
          <li>Facilitar el mantenimiento futuro.</li>
        </ul>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicado al Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En nuestro sistema de ventas debemos verificar que todas las clases
          respeten los requisitos definidos durante el análisis y diseño.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Clases principales
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Cliente</li>
            <li>Producto</li>
            <li>DetalleVenta</li>
            <li>Venta</li>
          </ul>
        </div>
      </section>

      {/* Verificar producto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Verificación de la Clase Producto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunas preguntas que podemos realizar durante la revisión:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>¿El nombre del producto es obligatorio?</li>
          <li>¿El precio puede ser negativo?</li>
          <li>¿Los atributos están encapsulados?</li>
          <li>¿Existen getters y setters necesarios?</li>
          <li>¿La clase tiene una única responsabilidad?</li>
        </ul>
      </section>

      {/* Verificar cliente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Verificación de la Clase Cliente
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>¿El cliente posee nombre y documento?</li>
          <li>¿Se validan datos vacíos?</li>
          <li>¿Los atributos son privados?</li>
          <li>¿Existen datos innecesarios?</li>
          <li>¿La clase cumple el principio SRP?</li>
        </ul>
      </section>

      {/* Verificar detalle */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Verificación de la Clase DetalleVenta
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>¿La cantidad puede ser negativa?</li>
          <li>¿El subtotal se calcula correctamente?</li>
          <li>¿Existe duplicación de cálculos?</li>
          <li>¿Se reutilizan métodos correctamente?</li>
          <li>¿Los nombres de variables son claros?</li>
        </ul>
      </section>

      {/* Verificar venta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Verificación de la Clase Venta
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>¿El total se calcula correctamente?</li>
          <li>¿Se pueden agregar detalles de venta?</li>
          <li>¿Se controla una venta vacía?</li>
          <li>¿Las responsabilidades están bien distribuidas?</li>
          <li>¿Se cumple la lógica del negocio?</li>
        </ul>
      </section>

      {/* Checklist */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Checklist de Verificación
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Control</th>
                <th className="border p-3">Verificado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Variables privadas</td>
                <td className="border p-3">☐</td>
              </tr>
              <tr>
                <td className="border p-3">Validación de datos</td>
                <td className="border p-3">☐</td>
              </tr>
              <tr>
                <td className="border p-3">Métodos correctamente nombrados</td>
                <td className="border p-3">☐</td>
              </tr>
              <tr>
                <td className="border p-3">Sin código duplicado</td>
                <td className="border p-3">☐</td>
              </tr>
              <tr>
                <td className="border p-3">Responsabilidad única</td>
                <td className="border p-3">☐</td>
              </tr>
              <tr>
                <td className="border p-3">Cumple requisitos funcionales</td>
                <td className="border p-3">☐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Code Review */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Code Review
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las técnicas más utilizadas para la verificación es la revisión
          de código (Code Review). Consiste en que otro desarrollador analice el
          código para detectar errores, problemas de diseño o posibles mejoras.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Esta práctica es muy común en equipos profesionales y ayuda a mantener
          estándares de calidad en todo el proyecto.
        </p>
      </section>

      {/* Relación con Clean Code */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación con Clean Code
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Durante la verificación también se revisa que el código siga buenas
          prácticas como:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Nombres descriptivos.</li>
          <li>Métodos pequeños.</li>
          <li>Evitar duplicación de código (DRY).</li>
          <li>Mantener la simplicidad (KISS).</li>
          <li>Alta cohesión y bajo acoplamiento.</li>
          <li>Aplicación de principios SOLID.</li>
        </ul>
      </section>

      {/* Beneficios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Beneficios de la Verificación
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Menor cantidad de errores.</li>
          <li>Mayor calidad del software.</li>
          <li>Facilidad de mantenimiento.</li>
          <li>Menor costo de corrección.</li>
          <li>Mejor comprensión del código.</li>
          <li>Mayor confiabilidad del sistema.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>
            Revisar la clase Producto utilizando el checklist de verificación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Identificar posibles validaciones faltantes en la clase Cliente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Verificar que el cálculo de subtotal y total cumpla los requisitos del sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Realizar una revisión de código entre compañeros y documentar observaciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Elaborar un informe de verificación con los problemas encontrados y las mejoras propuestas.
          </div>

        </div>
      </section>

    </div>
  );
}