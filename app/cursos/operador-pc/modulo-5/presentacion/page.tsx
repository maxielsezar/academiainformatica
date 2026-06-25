export default function PresentacionDiapositivasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Presentación de Diapositivas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La presentación de diapositivas es el modo utilizado para mostrar el
          contenido al público. En esta vista la presentación ocupa toda la
          pantalla y permite recorrer diapositivas utilizando transiciones,
          animaciones y herramientas de exposición.
        </p>
      </section>

      {/* Objetivo */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a ejecutar, controlar y configurar una presentación para
          realizar exposiciones claras, ordenadas y profesionales.
        </p>

      </section>

      {/* Qué es */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Presentación de Diapositivas?
        </h2>

        <p className="max-w-3xl mb-4">
          Es el modo de visualización donde las diapositivas se muestran una por
          una en pantalla completa. Durante la exposición se pueden utilizar
          efectos, recursos multimedia y herramientas de navegación.
        </p>

        <div className="border p-6 rounded-xl">
          <p>
            Este modo se utiliza habitualmente en clases, reuniones,
            capacitaciones y exposiciones profesionales.
          </p>
        </div>

      </section>

      {/* Iniciar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Iniciar una Presentación
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir la presentación.</li>
            <li>Ir a la pestaña <strong>Presentación con diapositivas</strong>.</li>
            <li>Seleccionar <strong>Desde el principio</strong> o <strong>Desde la diapositiva actual</strong>.</li>
            <li>También puede iniciarse presionando <strong>F5</strong>.</li>

          </ol>

        </div>

      </section>

      {/* Navegación */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Navegación Durante la Presentación
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="">

              <tr>
                <th className="border px-4 py-2">
                  Acción
                </th>

                <th className="border px-4 py-2">
                  Método
                </th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Siguiente diapositiva
                </td>

                <td className="border px-4 py-2">
                  Flecha derecha o clic.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Diapositiva anterior
                </td>

                <td className="border px-4 py-2">
                  Flecha izquierda.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Ir a una diapositiva específica
                </td>

                <td className="border px-4 py-2">
                  Escribir número + Enter.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Finalizar presentación
                </td>

                <td className="border px-4 py-2">
                  Tecla Esc.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Vista del presentador */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vista del Presentador
        </h2>

        <p className="max-w-3xl mb-4">
          PowerPoint incluye una vista especial para quien expone que permite
          acceder a herramientas adicionales sin que el público las vea.
        </p>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Visualizar notas del expositor.</li>
            <li>Ver miniaturas de diapositivas.</li>
            <li>Controlar tiempo de exposición.</li>
            <li>Avanzar o retroceder rápidamente.</li>
            <li>Usar herramientas de resaltado.</li>
          </ul>

        </div>

      </section>

      {/* Configuración */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración de la Presentación
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="">

              <tr>
                <th className="border px-4 py-2">
                  Configuración
                </th>

                <th className="border px-4 py-2">
                  Función
                </th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Mostrar diapositivas
                </td>

                <td className="border px-4 py-2">
                  Elegir cuáles se presentan.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Repetir automáticamente
                </td>

                <td className="border px-4 py-2">
                  Ejecutar presentación en ciclo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Cronometrar
                </td>

                <td className="border px-4 py-2">
                  Medir duración de cada diapositiva.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Modo ventana completa
                </td>

                <td className="border px-4 py-2">
                  Mostrar en pantalla completa.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Consejos */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos para una Buena Exposición
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Practicar antes de presentar.</li>
            <li>No leer toda la diapositiva.</li>
            <li>Hablar de forma clara.</li>
            <li>Utilizar poco texto.</li>
            <li>Controlar tiempos.</li>
            <li>Verificar multimedia antes de comenzar.</li>
          </ul>

        </div>

      </section>

      {/* Errores */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Frecuentes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Colocar demasiado contenido por diapositiva.</li>
          <li>Usar efectos excesivos.</li>
          <li>No revisar ortografía.</li>
          <li>Hablar demasiado rápido.</li>
          <li>No probar el archivo antes de exponer.</li>
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

            Ejecuta una presentación utilizando F5.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Practica avanzar y retroceder entre diapositivas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Configura una presentación automática.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Realiza una exposición de 3 minutos utilizando una presentación creada previamente.
          </div>

        </div>

      </section>

    </div>
  );
}