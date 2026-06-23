export default function InsercionAudioVideoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Inserción de Audio y Video
        </h1>

        <p className="leading-relaxed max-w-3xl">
          PowerPoint permite incorporar recursos multimedia como audios y videos
          para enriquecer las presentaciones. Estos elementos ayudan a captar la
          atención del público y permiten explicar conceptos de forma más visual
          y dinámica.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a insertar, configurar y utilizar archivos de audio y video
          dentro de una presentación para mejorar la comunicación del contenido.
        </p>
      </section>

      {/* Multimedia */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los Recursos Multimedia?
        </h2>

        <p className="max-w-3xl mb-4">
          Son elementos que combinan diferentes tipos de contenido digital para
          complementar una presentación.
        </p>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Recurso
                </th>

                <th className="border px-4 py-2">
                  Uso
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Audio
                </td>

                <td className="border px-4 py-2">
                  Música, narraciones o efectos sonoros.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Video
                </td>

                <td className="border px-4 py-2">
                  Explicaciones visuales, demostraciones o presentaciones.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Audio */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Insertar Audio
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir la diapositiva deseada.</li>
            <li>Ir a la pestaña <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Audio</strong>.</li>
            <li>Elegir <strong>Audio en este dispositivo</strong>.</li>
            <li>Seleccionar el archivo.</li>
            <li>Insertarlo y configurar su reproducción.</li>
          </ol>

        </div>

      </section>

      {/* Configuración audio */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Opciones de Reproducción del Audio
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Opción
                </th>

                <th className="border px-4 py-2">
                  Función
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Al hacer clic
                </td>

                <td className="border px-4 py-2">
                  Inicia el sonido manualmente.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Automáticamente
                </td>

                <td className="border px-4 py-2">
                  Comienza al abrir la diapositiva.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Repetir
                </td>

                <td className="border px-4 py-2">
                  Reproduce continuamente.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Ocultar durante presentación
                </td>

                <td className="border px-4 py-2">
                  No muestra el ícono de audio.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Video */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Insertar Video
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar la diapositiva.</li>
            <li>Ir a <strong>Insertar</strong>.</li>
            <li>Elegir <strong>Video</strong>.</li>
            <li>Seleccionar el archivo desde el equipo.</li>
            <li>Insertar el contenido.</li>
            <li>Configurar reproducción y tamaño.</li>
          </ol>

        </div>

      </section>

      {/* Formatos */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos Compatibles Frecuentes
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Tipo
                </th>

                <th className="border px-4 py-2">
                  Formatos
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Audio
                </td>

                <td className="border px-4 py-2">
                  MP3, WAV, M4A
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Video
                </td>

                <td className="border px-4 py-2">
                  MP4, MOV, AVI
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Configuración video */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Opciones de Configuración del Video
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Reproducir automáticamente.</li>
          <li>Iniciar con clic.</li>
          <li>Recortar duración.</li>
          <li>Ajustar volumen.</li>
          <li>Reproducir en pantalla completa.</li>
          <li>Mostrar controles multimedia.</li>
        </ul>

      </section>

      {/* Buenas prácticas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones para Usar Multimedia
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Utilizar archivos livianos.</li>
            <li>Evitar videos demasiado largos.</li>
            <li>Verificar que el sonido funcione.</li>
            <li>Probar la presentación antes de exponer.</li>
            <li>Usar multimedia solo cuando aporte valor.</li>
          </ul>

        </div>

      </section>

      {/* Problemas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Problemas Comunes
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Problema
                </th>

                <th className="border px-4 py-2">
                  Posible solución
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  El video no reproduce
                </td>

                <td className="border px-4 py-2">
                  Revisar formato del archivo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  No se escucha el audio
                </td>

                <td className="border px-4 py-2">
                  Verificar volumen y configuración.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Archivo muy pesado
                </td>

                <td className="border px-4 py-2">
                  Comprimir contenido multimedia.
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
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Inserta un archivo de audio en una diapositiva.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Configura el audio para reproducirse automáticamente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Inserta un video y ajusta su tamaño.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Crea una presentación que combine texto, imágenes y contenido multimedia.
          </div>

        </div>

      </section>

    </div>
  );
}