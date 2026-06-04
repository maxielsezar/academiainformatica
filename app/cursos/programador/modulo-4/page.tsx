export default function Modulo4Page() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Módulo 4: Testing, Verificación y Mejora Continua del Sistema de Ventas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo se trabajará sobre el sistema de ventas desarrollado en
          los módulos anteriores. El objetivo será aprender a verificar el correcto
          funcionamiento del software, detectar errores, diseñar pruebas y aplicar
          mejoras que aumenten la calidad del código.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A diferencia de los módulos anteriores, el foco ya no estará en agregar
          nuevas funcionalidades sino en comprobar que las existentes funcionen
          correctamente y puedan mantenerse a largo plazo.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Comprender la importancia del testing en el desarrollo de software.</li>
          <li>Detectar errores antes de que lleguen al usuario final.</li>
          <li>Diseñar y ejecutar casos de prueba.</li>
          <li>Aplicar técnicas de verificación de código.</li>
          <li>Utilizar herramientas de depuración.</li>
          <li>Mejorar continuamente la calidad del sistema.</li>
          <li>Validar el correcto funcionamiento del sistema de ventas.</li>
        </ul>
      </section>

      {/* Sistema de referencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sistema de referencia del módulo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Durante todo el módulo se utilizará el sistema de ventas desarrollado
          anteriormente. Las actividades, pruebas y verificaciones se realizarán
          sobre sus clases principales.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Clases principales del sistema
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Producto</li>
            <li>Venta</li>
            <li>DetalleVenta</li>
            <li>Cliente</li>
          </ul>
        </div>
      </section>

      {/* Qué es testing */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Testing?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El testing es el proceso de ejecutar pruebas sobre una aplicación para
          verificar que cumple los requisitos esperados y detectar posibles fallos.
          Una prueba exitosa no es aquella que no encuentra errores, sino aquella
          que permite descubrir problemas antes de que afecten a los usuarios.
        </p>
      </section>

      {/* Áreas de prueba */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aspectos que serán evaluados
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Creación de productos.</li>
          <li>Cálculo de subtotales.</li>
          <li>Cálculo de totales de venta.</li>
          <li>Control de cantidades.</li>
          <li>Validación de precios.</li>
          <li>Registro de clientes.</li>
          <li>Manejo de errores.</li>
          <li>Validación de datos ingresados.</li>
        </ul>
      </section>

      {/* Temario */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del módulo
        </h2>

        <div className="space-y-4 max-w-4xl">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Testing
            </h3>
            <p>
              Conceptos básicos, objetivos de las pruebas y tipos de testing.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
               Casos de Prueba
            </h3>
            <p>
              Diseño de escenarios de prueba para el sistema de ventas.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
               Pruebas Unitarias
            </h3>
            <p>
              Verificación de métodos individuales utilizando JUnit.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
               Verificación de Código
            </h3>
            <p>
              Inspección y revisión de clases, métodos y validaciones.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
               Depuración
            </h3>
            <p>
              Uso del depurador para encontrar y corregir errores.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
                Mejora Continua
            </h3>
            <p>
              Refactorización y optimización del sistema de ventas.
            </p>
          </div>

        </div>
      </section>

      {/* Metodología */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Metodología de trabajo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cada unidad incluirá ejercicios prácticos sobre el sistema de ventas.
          Los estudiantes deberán ejecutar pruebas, detectar errores,
          documentar resultados y aplicar correcciones hasta lograr un sistema
          más robusto y confiable.
        </p>
      </section>

      {/* Resultado esperado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resultado esperado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Al finalizar el módulo, los estudiantes serán capaces de diseñar casos
          de prueba, ejecutar pruebas unitarias, depurar aplicaciones Java y
          mejorar la calidad de un sistema existente utilizando técnicas de
          testing y verificación profesional.
        </p>
      </section>

    </div>
  );
}