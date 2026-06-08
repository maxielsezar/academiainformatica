export default function IntroduccionTestingPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción al Testing de Software
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El testing es una de las actividades más importantes dentro del
          desarrollo de software. Su objetivo es verificar que una aplicación
          funcione correctamente, cumpla los requisitos establecidos y detecte
          errores antes de que el sistema llegue a los usuarios finales.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este módulo utilizaremos como caso de estudio el sistema de ventas
          desarrollado anteriormente para aprender técnicas de prueba,
          verificación y mejora continua.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Testing?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El testing es el proceso de ejecutar una aplicación con el objetivo de
          encontrar errores y verificar que el comportamiento real coincida con
          el comportamiento esperado.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una prueba exitosa no es aquella que no encuentra errores, sino aquella
          que permite descubrir problemas antes de que afecten a los usuarios.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante realizar pruebas?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Detecta errores antes de la entrega del sistema.</li>
          <li>Reduce costos de mantenimiento.</li>
          <li>Mejora la calidad del software.</li>
          <li>Aumenta la confianza de los usuarios.</li>
          <li>Facilita futuras modificaciones.</li>
          <li>Reduce fallos en producción.</li>
        </ul>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicado al Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Supongamos que nuestro sistema permite registrar productos, clientes
          y ventas. Antes de entregarlo debemos verificar que todos los cálculos
          y operaciones funcionen correctamente.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Ejemplos de situaciones a verificar
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>¿Se calcula correctamente el subtotal?</li>
            <li>¿Se calcula correctamente el total de la venta?</li>
            <li>¿Se pueden ingresar cantidades negativas?</li>
            <li>¿Los precios pueden ser cero?</li>
            <li>¿Se guarda correctamente la información del cliente?</li>
            <li>¿Se muestran mensajes de error apropiados?</li>
          </ul>
        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del Testing
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Encontrar defectos.</li>
          <li>Verificar requisitos.</li>
          <li>Evaluar calidad.</li>
          <li>Reducir riesgos.</li>
          <li>Validar funcionalidades.</li>
          <li>Mejorar la experiencia del usuario.</li>
        </ul>
      </section>

      {/* Conceptos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conceptos importantes
        </h2>

        <div className="space-y-6 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Error (Error)
            </h3>
            <p>
              Equivocación cometida por el desarrollador durante la construcción
              del software.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Defecto (Bug)
            </h3>
            <p>
              Problema presente en el código que puede generar resultados
              incorrectos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Fallo (Failure)
            </h3>
            <p>
              Comportamiento incorrecto visible durante la ejecución del sistema.
            </p>
          </div>

        </div>
      </section>

      {/* Verificación y validación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Verificación vs Validación
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border max-w-4xl">
            <thead>
              <tr className="">
                <th className="border p-3">Verificación</th>
                <th className="border p-3">Validación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">
                  Comprueba que el software fue construido correctamente.
                </td>
                <td className="border p-3">
                  Comprueba que el software resuelve el problema correcto.
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Se enfoca en el código.
                </td>
                <td className="border p-3">
                  Se enfoca en las necesidades del usuario.
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Revisión técnica.
                </td>
                <td className="border p-3">
                  Prueba funcional.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Principios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principios básicos del Testing
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No es posible probar absolutamente todo.</li>
          <li>Las pruebas deben planificarse.</li>
          <li>Los errores suelen concentrarse en determinadas áreas.</li>
          <li>Las pruebas deben comenzar lo antes posible.</li>
          <li>Encontrar errores es parte del proceso de mejora continua.</li>
          <li>Las pruebas deben repetirse después de realizar cambios.</li>
        </ul>
      </section>

      {/* Ciclo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ciclo básico de Testing
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Analizar el requisito.</li>
          <li>Diseñar casos de prueba.</li>
          <li>Ejecutar las pruebas.</li>
          <li>Registrar resultados.</li>
          <li>Reportar errores encontrados.</li>
          <li>Corregir errores.</li>
          <li>Volver a ejecutar las pruebas.</li>
        </ol>
      </section>

      {/* Próximas unidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos en las próximas clases?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Diseño de casos de prueba.</li>
          <li>Pruebas de caja negra.</li>
          <li>Pruebas de caja blanca.</li>
          <li>Pruebas unitarias con JUnit.</li>
          <li>Assertions.</li>
          <li>Cobertura de código.</li>
          <li>Depuración de aplicaciones.</li>
          <li>Refactorización y mejora continua.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá con tus palabras qué es el testing y cuál es su objetivo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Mencioná tres beneficios de realizar pruebas en un sistema de ventas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificá cinco funcionalidades del sistema de ventas que deberían ser probadas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Explicá la diferencia entre verificación y validación.
          </div>

        </div>
      </section>

    </div>
  );
}