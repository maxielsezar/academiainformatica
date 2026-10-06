export default function AnalisisEstructuradoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Análisis estructurado
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El análisis estructurado es una forma organizada de estudiar un
          sistema, identificando sus procesos, información, entradas y
          salidas. Permite representar de manera clara cómo funciona un
          sistema antes de comenzar con el diseño de la solución informática.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el análisis estructurado?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          El análisis estructurado busca dividir un sistema complejo en partes
          más pequeñas y fáciles de comprender. De esta manera es posible
          estudiar cada proceso, determinar qué información utiliza y
          establecer qué resultados produce.
        </p>

        <p className="leading-relaxed max-w-3xl">
          Este enfoque permite pasar de una descripción general del problema a
          una representación más detallada del funcionamiento del sistema.
        </p>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos que se analizan
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Entradas
            </h3>

            <p className="leading-relaxed">
              Son los datos o información que ingresan al sistema para ser
              procesados.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Procesos
            </h3>

            <p className="leading-relaxed">
              Son las actividades que transforman o utilizan la información
              recibida.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Almacenamiento
            </h3>

            <p className="leading-relaxed">
              Representa la información que debe conservarse para ser utilizada
              posteriormente.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Salidas
            </h3>

            <p className="leading-relaxed">
              Son los resultados obtenidos luego del procesamiento de la
              información.
            </p>
          </div>

        </div>
      </section>

      {/* Descomposición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Descomposición del sistema
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una característica importante del análisis estructurado es dividir
          las actividades generales en procesos más pequeños. Esto permite
          estudiar cada parte del sistema de manera independiente y comprender
          mejor cómo se relacionan.
        </p>

        <div className="border border-blue-200 rounded-lg p-6 max-w-4xl">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Ejemplo: sistema de ventas
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>Registrar cliente.</li>
            <li>Registrar producto.</li>
            <li>Registrar venta.</li>
            <li>Actualizar información de productos.</li>
            <li>Generar comprobante.</li>
            <li>Consultar ventas realizadas.</li>
          </ol>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          En lugar de considerar el sistema de ventas como una única actividad,
          se lo divide en diferentes procesos que pueden analizarse y
          documentarse por separado.
        </p>
      </section>

      {/* Flujo de información */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujo de información
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          El análisis estructurado también permite observar cómo circula la
          información dentro del sistema. Para cada proceso se puede determinar
          qué información recibe, qué operaciones realiza y qué información
          genera.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">

          <div className="border border-blue-200 rounded-lg p-5 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Entrada
            </h3>

            <p className="leading-relaxed">
              Datos proporcionados por el usuario o por otro proceso.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Proceso
            </h3>

            <p className="leading-relaxed">
              Operación realizada sobre los datos recibidos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Salida
            </h3>

            <p className="leading-relaxed">
              Información generada como resultado del proceso.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de análisis estructurado
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Supongamos que una oficina necesita registrar una nueva venta.
          Podemos analizar este proceso identificando sus entradas, operaciones
          y salidas.
        </p>

        <div className="overflow-x-auto max-w-4xl">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 p-3">
                  Elemento
                </th>
                <th className="border border-blue-200 p-3">
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">
                  Entrada
                </td>
                <td className="border border-blue-200 p-3">
                  Cliente, productos y cantidades.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">
                  Proceso
                </td>
                <td className="border border-blue-200 p-3">
                  Registrar la venta y calcular el importe.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">
                  Almacenamiento
                </td>
                <td className="border border-blue-200 p-3">
                  Guardar los datos de la venta.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">
                  Salida
                </td>
                <td className="border border-blue-200 p-3">
                  Comprobante o información de la venta registrada.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del análisis estructurado
        </h2>

        <ul className="list-disc pl-6 space-y-3 max-w-3xl">
          <li>
            Permite dividir un sistema complejo en partes más sencillas.
          </li>

          <li>
            Facilita la comprensión de los procesos.
          </li>

          <li>
            Permite identificar las entradas y salidas de información.
          </li>

          <li>
            Ayuda a detectar información necesaria para cada proceso.
          </li>

          <li>
            Facilita la comunicación entre usuarios y desarrolladores.
          </li>

          <li>
            Sirve como base para las etapas posteriores de diseño.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-8 max-w-4xl">

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar entradas y salidas
            </h3>

            <p className="leading-relaxed">
              Seleccionar un proceso administrativo y determinar qué
              información ingresa y qué resultado se obtiene.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Dividir un proceso
            </h3>

            <p className="leading-relaxed">
              Tomar una actividad general, como registrar una venta, y
              dividirla en procesos más pequeños.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Analizar un flujo de información
            </h3>

            <p className="leading-relaxed">
              Representar mediante una descripción paso a paso cómo se mueve
              la información durante un proceso de la organización.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Identificar almacenamiento
            </h3>

            <p className="leading-relaxed">
              Determinar qué información debe conservarse después de ejecutar
              cada proceso y dónde podría almacenarse.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Analizar un proceso real
            </h3>

            <p className="leading-relaxed">
              Elegir un proceso de la organización seleccionada en la página
              anterior y documentar sus entradas, procesos, almacenamiento y
              salidas.
            </p>
          </div>

        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Estructurar el sistema
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Continuando con el análisis realizado en la actividad integradora
          anterior, descomponer el sistema seleccionado en sus principales
          procesos y analizar el flujo de información de cada uno.
        </p>

        <ol className="list-decimal pl-6 space-y-3 max-w-3xl">
          <li>
            Recuperar la descripción del sistema realizada anteriormente.
          </li>

          <li>
            Identificar los principales procesos de la organización.
          </li>

          <li>
            Dividir cada proceso en actividades más pequeñas.
          </li>

          <li>
            Identificar las entradas de cada proceso.
          </li>

          <li>
            Identificar los datos que deben almacenarse.
          </li>

          <li>
            Determinar las salidas o resultados de cada proceso.
          </li>

          <li>
            Documentar el flujo de información.
          </li>
        </ol>

        <div className="mt-6 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Producto de la actividad
          </h3>

          <p className="leading-relaxed">
            Un documento de análisis estructurado que describa los principales
            procesos del sistema, sus entradas, información almacenada y
            salidas. Este trabajo será utilizado como base para definir los
            objetivos y requerimientos del sistema.
          </p>
        </div>
      </section>

    </div>
  );
}