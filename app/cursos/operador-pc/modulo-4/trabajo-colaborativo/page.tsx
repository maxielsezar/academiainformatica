export default function TrabajoColaborativoOnlinePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Trabajo Colaborativo Online
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El trabajo colaborativo online permite que varias personas trabajen
          simultáneamente sobre documentos, planillas, presentaciones y proyectos
          utilizando Internet. Esta modalidad es ampliamente utilizada en empresas,
          instituciones educativas y equipos de trabajo distribuidos geográficamente.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Comprender cómo utilizar herramientas digitales para compartir información,
          colaborar en tiempo real y gestionar trabajos grupales de manera eficiente.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Trabajo Colaborativo?
        </h2>

        <p className="max-w-3xl">
          Es una forma de trabajo en la que varias personas participan en una misma
          tarea utilizando herramientas digitales que permiten compartir información,
          comunicarse y editar documentos de forma conjunta.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas del Trabajo Colaborativo Online
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Permite trabajar desde cualquier lugar.</li>
          <li>Facilita la comunicación entre los integrantes.</li>
          <li>Reduce la duplicación de archivos.</li>
          <li>Permite visualizar cambios en tiempo real.</li>
          <li>Mejora la organización de proyectos.</li>
          <li>Favorece el trabajo en equipo.</li>
        </ul>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de Trabajo Colaborativo
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Herramienta</th>
                <th className="border px-4 py-2">Uso Principal</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Google Docs</td>
                <td className="border px-4 py-2">
                  Edición colaborativa de documentos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Google Sheets</td>
                <td className="border px-4 py-2">
                  Trabajo conjunto en planillas de cálculo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Google Slides</td>
                <td className="border px-4 py-2">
                  Creación colaborativa de presentaciones.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Google Drive</td>
                <td className="border px-4 py-2">
                  Almacenamiento y compartición de archivos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Microsoft OneDrive</td>
                <td className="border px-4 py-2">
                  Almacenamiento y colaboración en documentos Microsoft.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Microsoft Teams</td>
                <td className="border px-4 py-2">
                  Comunicación y trabajo en equipo.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Compartir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Compartir un Documento
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Crear o abrir un documento.</li>
            <li>Seleccionar la opción "Compartir".</li>
            <li>Ingresar el correo electrónico de los colaboradores.</li>
            <li>Asignar permisos de acceso.</li>
            <li>Enviar la invitación o compartir el enlace.</li>
          </ol>
        </div>
      </section>

      {/* Permisos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Permisos
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Permiso</th>
                <th className="border px-4 py-2">Acciones Permitidas</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Lector</td>
                <td className="border px-4 py-2">
                  Puede visualizar el contenido.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Comentador</td>
                <td className="border px-4 py-2">
                  Puede realizar comentarios y sugerencias.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Editor</td>
                <td className="border px-4 py-2">
                  Puede modificar el documento.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tiempo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Colaboración en Tiempo Real
        </h2>

        <p className="max-w-3xl">
          Una de las principales ventajas de las herramientas colaborativas es
          que permiten que varias personas trabajen al mismo tiempo sobre el mismo
          documento. Los cambios realizados por cada usuario se actualizan
          automáticamente para todos los participantes.
        </p>
      </section>

      {/* Historial */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Historial de Versiones
        </h2>

        <p className="max-w-3xl">
          Muchas plataformas permiten consultar versiones anteriores de un
          documento, identificar quién realizó cada cambio y restaurar versiones
          previas si fuera necesario.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas para el Trabajo Colaborativo
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Mantener una comunicación clara entre los integrantes.</li>
          <li>Organizar los archivos en carpetas.</li>
          <li>Asignar responsabilidades específicas.</li>
          <li>Utilizar nombres descriptivos para los documentos.</li>
          <li>Respetar el trabajo realizado por otros colaboradores.</li>
          <li>Revisar periódicamente los cambios realizados.</li>
        </ul>
      </section>

      {/* Caso práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Uso
        </h2>

        <div className="border p-6 rounded-xl">
          <p>
            Un grupo de estudiantes debe elaborar un informe. En lugar de enviar
            varias versiones por correo electrónico, crean un documento en Google
            Docs y cada integrante trabaja sobre el mismo archivo. Todos pueden
            ver los cambios en tiempo real, agregar comentarios y colaborar en la
            elaboración del trabajo final.
          </p>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crea un documento en Google Docs y compártelo con un compañero utilizando permisos de editor.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Solicita a un compañero que agregue contenido al documento compartido.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Agrega un comentario en una sección del documento y responde el comentario de otro participante.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Revisa el historial de versiones e identifica los cambios realizados por cada integrante.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad Integradora</p>
            En grupos de 2 o 3 integrantes, elaboren un informe sobre un tema de interés utilizando Google Docs. Todos los participantes deben colaborar en la edición del documento y compartir el enlace final con el docente.
          </div>

        </div>
      </section>

    </div>
  );
}