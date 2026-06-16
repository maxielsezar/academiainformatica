export default function CreacionGuardadoPresentacionesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Creación y Guardado de Presentaciones
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Crear una presentación consiste en organizar información utilizando
          diapositivas que pueden incluir texto, imágenes, gráficos, videos y
          otros recursos multimedia. Guardar correctamente el trabajo permite
          conservar los cambios realizados y continuar editándolo más adelante.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a crear una nueva presentación, agregar diapositivas y guardar
          el archivo en distintos formatos para compartir o continuar trabajando.
        </p>
      </section>

      {/* Crear presentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo Crear una Presentación Nueva?
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir Microsoft PowerPoint.</li>
            <li>Seleccionar <strong>Nuevo</strong>.</li>
            <li>Elegir <strong>Presentación en blanco</strong> o una plantilla.</li>
            <li>Agregar un título y subtítulo inicial.</li>
            <li>Insertar nuevas diapositivas según sea necesario.</li>
            <li>Guardar el archivo antes de comenzar a trabajar.</li>
          </ol>

        </div>
      </section>

      {/* Crear diapositivas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear y Administrar Diapositivas
        </h2>

        <p className="max-w-3xl mb-4">
          Una presentación está formada por varias diapositivas. Cada una puede
          tener un diseño diferente según el contenido que se quiera mostrar.
        </p>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Acción
                </th>

                <th className="border px-4 py-2">
                  Procedimiento
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Agregar diapositiva
                </td>

                <td className="border px-4 py-2">
                  Inicio → Nueva diapositiva
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Duplicar diapositiva
                </td>

                <td className="border px-4 py-2">
                  Clic derecho → Duplicar
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Eliminar diapositiva
                </td>

                <td className="border px-4 py-2">
                  Seleccionar → Supr
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Cambiar orden
                </td>

                <td className="border px-4 py-2">
                  Arrastrar en el panel lateral
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Guardar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar una Presentación
        </h2>

        <p className="max-w-3xl mb-4">
          Guardar significa almacenar el archivo para poder abrirlo nuevamente en
          el futuro sin perder el trabajo realizado.
        </p>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Ir al menú <strong>Archivo</strong>.</li>
            <li>Seleccionar <strong>Guardar</strong> o <strong>Guardar como</strong>.</li>
            <li>Elegir la carpeta de destino.</li>
            <li>Escribir el nombre del archivo.</li>
            <li>Seleccionar el formato.</li>
            <li>Presionar Guardar.</li>
          </ol>

        </div>

      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre Guardar y Guardar Como
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Guardar
                </th>

                <th className="border px-4 py-2">
                  Guardar Como
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Actualiza el archivo existente.
                </td>

                <td className="border px-4 py-2">
                  Crea una nueva copia del archivo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Conserva nombre y ubicación.
                </td>

                <td className="border px-4 py-2">
                  Permite cambiar nombre o carpeta.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos de Archivo
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Formato
                </th>

                <th className="border px-4 py-2">
                  Uso
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  .pptx
                </td>

                <td className="border px-4 py-2">
                  Presentación editable.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  .pdf
                </td>

                <td className="border px-4 py-2">
                  Compartir sin modificaciones.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  .ppsx
                </td>

                <td className="border px-4 py-2">
                  Abrir directamente como presentación.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  .odp
                </td>

                <td className="border px-4 py-2">
                  Compatible con LibreOffice.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Autoguardado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardado Automático
        </h2>

        <div className="border p-6 rounded-xl">

          <p>
            Algunas versiones de PowerPoint permiten activar el guardado
            automático para almacenar cambios continuamente mientras se trabaja,
            reduciendo el riesgo de pérdida de información.
          </p>

        </div>

      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones al Guardar
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Guardar periódicamente.</li>
          <li>Usar nombres descriptivos.</li>
          <li>Crear carpetas organizadas.</li>
          <li>Conservar una copia de respaldo.</li>
          <li>Exportar una copia en PDF.</li>
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

            Crea una presentación nueva con 5 diapositivas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Guarda el archivo como MiPrimeraPresentacion.pptx.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Exporta una copia en formato PDF.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Duplica una diapositiva y cambia su contenido.
          </div>

        </div>

      </section>

    </div>
  );
}