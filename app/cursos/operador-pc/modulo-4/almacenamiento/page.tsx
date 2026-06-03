export default function GoogleDrivePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Almacenamiento en la Nube: Google Drive
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Google Drive es un servicio de almacenamiento en la nube que permite
          guardar archivos en Internet y acceder a ellos desde cualquier dispositivo
          con conexión. Además, facilita compartir documentos y trabajar de forma
          colaborativa con otras personas.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Conocer el funcionamiento de Google Drive y aprender a almacenar,
          organizar y compartir archivos utilizando la nube.
        </p>
      </section>

      {/* Qué es la nube */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Almacenamiento en la Nube?
        </h2>

        <p className="max-w-3xl">
          El almacenamiento en la nube consiste en guardar archivos en servidores
          remotos accesibles a través de Internet. Esto permite acceder a la
          información desde diferentes dispositivos sin necesidad de utilizar
          pendrives o discos externos.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas del Almacenamiento en la Nube
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Acceso a los archivos desde cualquier lugar.</li>
          <li>Respaldo automático de información.</li>
          <li>Compartir archivos fácilmente.</li>
          <li>Trabajo colaborativo en tiempo real.</li>
          <li>Reducción del uso de dispositivos físicos de almacenamiento.</li>
        </ul>
      </section>

      {/* Qué es Drive */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Google Drive?
        </h2>

        <p className="max-w-3xl">
          Google Drive es la plataforma de almacenamiento en la nube de Google.
          Cada usuario dispone de espacio para guardar documentos, imágenes,
          videos, planillas y otros tipos de archivos.
        </p>
      </section>

      {/* Acceso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo Acceder a Google Drive?
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Ingresar a tu cuenta de Google.</li>
            <li>Abrir el menú de aplicaciones de Google.</li>
            <li>Seleccionar Google Drive.</li>
            <li>Acceder a tus archivos almacenados.</li>
          </ol>
        </div>
      </section>

      {/* Interfaz */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos Principales de Google Drive
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">Elemento</th>
                <th className="border px-4 py-2">Función</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Mi Unidad</td>
                <td className="border px-4 py-2">
                  Contiene los archivos y carpetas personales.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Compartidos conmigo</td>
                <td className="border px-4 py-2">
                  Archivos compartidos por otros usuarios.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Recientes</td>
                <td className="border px-4 py-2">
                  Muestra los archivos utilizados recientemente.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Papelera</td>
                <td className="border px-4 py-2">
                  Almacena archivos eliminados temporalmente.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Nuevo</td>
                <td className="border px-4 py-2">
                  Permite crear carpetas o subir archivos.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Subir archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Subir Archivos a Google Drive
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Hacer clic en "Nuevo".</li>
            <li>Seleccionar "Subir archivo".</li>
            <li>Elegir el archivo desde la computadora.</li>
            <li>Esperar que finalice la carga.</li>
            <li>Verificar que el archivo aparezca en Mi Unidad.</li>
          </ol>
        </div>
      </section>

      {/* Carpetas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización mediante Carpetas
        </h2>

        <p className="max-w-3xl">
          Para mantener la información organizada es recomendable crear carpetas
          según categorías, proyectos, materias o tipos de documentos.
        </p>

        <div className="border p-6 rounded-xl mt-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Documentos Personales</li>
            <li>Estudios</li>
            <li>Trabajo</li>
            <li>Fotos</li>
            <li>Proyectos</li>
          </ul>
        </div>
      </section>

      {/* Compartir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Compartir Archivos
        </h2>

        <p className="max-w-3xl mb-4">
          Google Drive permite compartir archivos con otras personas mediante un enlace.
        </p>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar el archivo.</li>
            <li>Hacer clic en "Compartir".</li>
            <li>Ingresar el correo electrónico del destinatario o generar un enlace.</li>
            <li>Definir permisos de acceso.</li>
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
                <th className="border px-4 py-2">Acción Permitida</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Lector</td>
                <td className="border px-4 py-2">
                  Solo puede visualizar el archivo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Comentador</td>
                <td className="border px-4 py-2">
                  Puede visualizar y agregar comentarios.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Editor</td>
                <td className="border px-4 py-2">
                  Puede modificar el contenido.
                </td>
              </tr>
            </tbody>
          </table>
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
            Accede a Google Drive con tu cuenta de Google e identifica las secciones principales.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea una carpeta llamada "Curso Operador de PC".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Sube un documento de Word y una planilla de Excel a la carpeta creada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Comparte uno de los archivos con un compañero utilizando el permiso de lector.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 5</p>
            Genera un enlace compartido y verifica los permisos configurados.
          </div>

        </div>
      </section>

    </div>
  );
}