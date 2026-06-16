export default function InterfazPowerPointPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Interfaz de PowerPoint
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La interfaz de PowerPoint es el conjunto de herramientas y áreas de
          trabajo que permiten crear, editar y presentar diapositivas. Conocer
          cada parte de la pantalla facilita trabajar de forma más rápida y
          organizada.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Identificar las principales partes de la interfaz de PowerPoint y
          comprender para qué sirve cada una.
        </p>
      </section>

      {/* Interfaz */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes de la Interfaz
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Elemento
                </th>

                <th className="border px-4 py-2">
                  Función
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Barra de título
                </td>

                <td className="border px-4 py-2">
                  Muestra el nombre de la presentación abierta.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Barra de acceso rápido
                </td>

                <td className="border px-4 py-2">
                  Permite acceder rápidamente a Guardar, Deshacer y Rehacer.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Cinta de opciones
                </td>

                <td className="border px-4 py-2">
                  Contiene todas las herramientas organizadas por pestañas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Panel de diapositivas
                </td>

                <td className="border px-4 py-2">
                  Permite visualizar y ordenar las diapositivas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Área de trabajo
                </td>

                <td className="border px-4 py-2">
                  Lugar donde se diseña y edita cada diapositiva.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Panel de notas
                </td>

                <td className="border px-4 py-2">
                  Espacio para agregar notas del expositor.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Barra de estado
                </td>

                <td className="border px-4 py-2">
                  Muestra información sobre la presentación y controles de zoom.
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      {/* Cinta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Cinta de Opciones
        </h2>

        <p className="mb-4 max-w-3xl">
          Es el área principal donde se encuentran las herramientas de trabajo.
          Está organizada en pestañas.
        </p>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-3">
            <li><strong>Inicio:</strong> edición básica de diapositivas.</li>

            <li><strong>Insertar:</strong> imágenes, tablas, gráficos y multimedia.</li>

            <li><strong>Diseño:</strong> temas y apariencia visual.</li>

            <li><strong>Transiciones:</strong> efectos entre diapositivas.</li>

            <li><strong>Animaciones:</strong> movimiento de objetos.</li>

            <li><strong>Presentación:</strong> configuración de exposición.</li>

            <li><strong>Revisar:</strong> comentarios y ortografía.</li>

            <li><strong>Vista:</strong> organización del espacio de trabajo.</li>
          </ul>

        </div>
      </section>

      {/* Área central */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Área de Trabajo
        </h2>

        <p className="max-w-3xl mb-4">
          Es el espacio central donde se construye cada diapositiva. Allí se
          agregan textos, imágenes, formas, videos y otros elementos.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="text-center font-mono">
            Panel de Diapositivas | Área de Edición | Panel de Notas
          </p>
        </div>
      </section>

      {/* Panel */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Panel de Diapositivas
        </h2>

        <p className="max-w-3xl">
          Se encuentra generalmente en el lado izquierdo y muestra miniaturas de
          todas las diapositivas creadas. Permite:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4">
          <li>Agregar nuevas diapositivas.</li>
          <li>Cambiar el orden.</li>
          <li>Duplicar contenido.</li>
          <li>Eliminar diapositivas.</li>
          <li>Visualizar la estructura de la presentación.</li>
        </ul>
      </section>

      {/* Barra inferior */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Barra de Estado y Zoom
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Visualizar cantidad de diapositivas.</li>

            <li>Cambiar entre vistas.</li>

            <li>Acercar o alejar el contenido.</li>

            <li>Iniciar la presentación rápidamente.</li>
          </ul>

        </div>
      </section>

      {/* Vistas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modos de Vista
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Vista
                </th>

                <th className="border px-4 py-2">
                  Uso
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Normal
                </td>

                <td className="border px-4 py-2">
                  Crear y editar diapositivas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Clasificador
                </td>

                <td className="border px-4 py-2">
                  Reorganizar diapositivas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Lectura
                </td>

                <td className="border px-4 py-2">
                  Revisar presentación.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Presentación
                </td>

                <td className="border px-4 py-2">
                  Mostrar diapositivas al público.
                </td>
              </tr>

            </tbody>

          </table>

        </div>
      </section>

      {/* Atajos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Atajos Útiles
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Ctrl + N → Nueva presentación.</li>
            <li>Ctrl + M → Nueva diapositiva.</li>
            <li>Ctrl + S → Guardar.</li>
            <li>Ctrl + Z → Deshacer.</li>
            <li>F5 → Iniciar presentación.</li>
            <li>Esc → Salir de la presentación.</li>
          </ul>

        </div>
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

            Abre PowerPoint e identifica cada componente de la interfaz.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crea una presentación con 3 diapositivas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Cambia entre los distintos modos de vista y describe las diferencias.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Utiliza al menos tres atajos de teclado y registra cuáles fueron.
          </div>

        </div>

      </section>

    </div>
  );
}