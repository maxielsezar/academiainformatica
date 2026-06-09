export default function MejoraContinuaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Mejora Continua en el Desarrollo de Software
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La mejora continua es una práctica fundamental en el desarrollo de
          software que busca optimizar constantemente la calidad del código,
          los procesos de trabajo y el producto final. No consiste únicamente
          en corregir errores, sino también en identificar oportunidades para
          hacer el sistema más eficiente, mantenible y confiable.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En esta unidad aplicaremos el concepto de mejora continua sobre el
          sistema de ventas desarrollado durante el curso.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la Mejora Continua?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La mejora continua es un proceso permanente de evaluación,
          corrección y optimización del software. Cada nueva versión del
          sistema debería ser mejor que la anterior.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold text-lg">
            Construir software no termina cuando funciona; continúa mientras
            existan oportunidades de mejorarlo.
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de la Mejora Continua
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Reducir errores.</li>
          <li>Mejorar la calidad del código.</li>
          <li>Facilitar el mantenimiento.</li>
          <li>Optimizar el rendimiento.</li>
          <li>Incrementar la satisfacción del usuario.</li>
          <li>Adaptar el sistema a nuevos requerimientos.</li>
        </ul>
      </section>

      {/* Ciclo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ciclo de Mejora Continua
        </h2>

        <div className="border rounded-xl p-6 max-w-3xl">
          <ol className="list-decimal list-inside space-y-3">
            <li>Analizar el sistema actual.</li>
            <li>Detectar problemas o debilidades.</li>
            <li>Proponer mejoras.</li>
            <li>Implementar cambios.</li>
            <li>Verificar resultados.</li>
            <li>Documentar las mejoras realizadas.</li>
          </ol>
        </div>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicado al Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Supongamos que nuestro sistema de ventas ya funciona correctamente,
          pero observamos algunos problemas:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Existen métodos muy largos.</li>
          <li>Hay código duplicado.</li>
          <li>Faltan validaciones.</li>
          <li>La interfaz es difícil de utilizar.</li>
          <li>Algunas clases tienen demasiadas responsabilidades.</li>
        </ul>

        <p className="leading-relaxed max-w-3xl mt-4">
          Todos estos puntos representan oportunidades de mejora.
        </p>
      </section>

      {/* Fuentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿De Dónde Surgen las Mejoras?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Resultados de pruebas unitarias.</li>
          <li>Errores encontrados por usuarios.</li>
          <li>Sesiones de depuración.</li>
          <li>Revisiones de código (Code Review).</li>
          <li>Solicitudes de nuevas funcionalidades.</li>
          <li>Análisis de rendimiento.</li>
        </ul>
      </section>

      {/* Refactorización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Refactorización
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una de las principales técnicas de mejora continua es la
          refactorización. Consiste en modificar la estructura interna del
          código sin cambiar su comportamiento externo.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p>
            El usuario no percibe cambios funcionales, pero el código se vuelve
            más limpio, mantenible y fácil de entender.
          </p>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Mejora
        </h2>

        <div className="border rounded-xl p-6 max-w-3xl">
          <h3 className="font-semibold mb-4">
            Situación Inicial
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>La clase Venta calcula descuentos.</li>
            <li>Genera comprobantes.</li>
            <li>Administra clientes.</li>
            <li>Calcula totales.</li>
          </ul>

          <h3 className="font-semibold mt-6 mb-4">
            Mejora Aplicada
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Separar responsabilidades en nuevas clases.</li>
            <li>Aplicar el principio SRP.</li>
            <li>Reducir el tamaño de los métodos.</li>
            <li>Eliminar duplicación de código.</li>
          </ul>
        </div>
      </section>

      {/* Métricas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Indicadores de Mejora
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunas métricas que permiten evaluar si el sistema está mejorando son:
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="border-collapse border border-gray-300">
            <thead>
              <tr className="">
                <th className="border p-3">Indicador</th>
                <th className="border p-3">Objetivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">
                  Cantidad de errores
                </td>
                <td className="border p-3">
                  Disminuir
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Cobertura de pruebas
                </td>
                <td className="border p-3">
                  Aumentar
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Código duplicado
                </td>
                <td className="border p-3">
                  Reducir
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Tiempo de mantenimiento
                </td>
                <td className="border p-3">
                  Reducir
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Satisfacción del usuario
                </td>
                <td className="border p-3">
                  Incrementar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Relación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación con Testing y Verificación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La mejora continua depende directamente de las actividades estudiadas
          anteriormente.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Las pruebas detectan errores.</li>
          <li>La verificación detecta problemas de diseño.</li>
          <li>La depuración encuentra las causas de los errores.</li>
          <li>La mejora continua utiliza esa información para optimizar el sistema.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas para la Mejora Continua
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Refactorizar periódicamente.</li>
          <li>Aplicar principios SOLID.</li>
          <li>Utilizar Clean Code.</li>
          <li>Realizar pruebas unitarias frecuentes.</li>
          <li>Documentar cambios importantes.</li>
          <li>Escuchar la retroalimentación de los usuarios.</li>
          <li>Revisar el código de manera colaborativa.</li>
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
            Analizar el sistema de ventas e identificar al menos cinco oportunidades de mejora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Detectar código duplicado y proponer una solución utilizando el principio DRY.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Refactorizar una clase aplicando el principio de Responsabilidad Única (SRP).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Diseñar una mejora para la interfaz gráfica del sistema de ventas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Elaborar un informe describiendo las mejoras realizadas y los beneficios obtenidos.
          </div>

        </div>
      </section>

    </div>
  );
}