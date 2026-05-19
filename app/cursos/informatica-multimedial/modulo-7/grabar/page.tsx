export default function GrabarMicrofonoAudacityPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Cómo grabar audio con micrófono en Audacity
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Audacity permite grabar voz y sonidos utilizando un micrófono conectado
          a la computadora. Es una herramienta ideal para crear podcasts,
          narraciones, entrevistas y proyectos multimedia.
        </p>
      </section>

      {/* Preparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Preparación del micrófono
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Conectar el micrófono:</strong> asegurarse de que esté conectado correctamente. <br/>
             Puede ser USB o entrada de audio tradicional.
          </p>

          <p>
            <strong>Verificar el dispositivo:</strong> comprobar que la computadora detecte el micrófono. <br/>
             Revisar configuración de sonido del sistema.
          </p>

          <p>
            <strong>Elegir el micrófono en Audacity:</strong> seleccionar el dispositivo correcto. <br/>
             Usar el menú desplegable de entrada de audio.
          </p>

        </div>
      </section>

      {/* Configuración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración de grabación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Canales de grabación:</strong> elegir mono o estéreo. <br/>
             Para voz generalmente se usa mono.
          </p>

          <p>
            <strong>Control de volumen:</strong> ajustar el nivel del micrófono. <br/>
             Evitar que el audio llegue al color rojo.
          </p>

          <p>
            <strong>Frecuencia:</strong> configurar calidad de grabación. <br/>
             Usar 44100 Hz para grabaciones comunes.
          </p>

        </div>
      </section>

      {/* Grabación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo grabar audio
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Iniciar grabación:</strong> comenzar a capturar sonido. <br/>
             Presionar el botón rojo de grabar.
          </p>

          <p>
            <strong>Hablar al micrófono:</strong> mantener distancia adecuada. <br/>
             Hablar claro y evitar ruidos externos.
          </p>

          <p>
            <strong>Pausar grabación:</strong> detener temporalmente sin finalizar. <br/>
             Utilizar el botón pausa.
          </p>

          <p>
            <strong>Finalizar grabación:</strong> terminar el audio grabado. <br/>
             Presionar el botón stop.
          </p>

        </div>
      </section>

      {/* Mejora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Mejorar la calidad del audio
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Reducción de ruido:</strong> elimina sonidos de fondo. <br/>
             Aplicar desde el menú efectos.
          </p>

          <p>
            <strong>Amplificar:</strong> aumentar el volumen de la voz. <br/>
             Seleccionar pista y aplicar amplificar.
          </p>

          <p>
            <strong>Normalizar:</strong> equilibrar el volumen general. <br/>
             Usar efecto normalizar.
          </p>

        </div>
      </section>

      {/* Guardado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar y exportar
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez terminada la grabación, se puede guardar el proyecto para seguir
          editándolo o exportarlo en formatos como MP3 o WAV. <br/>
           Archivo → Exportar → Elegir formato.
        </p>
      </section>

      {/* Consejos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos para una buena grabación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Usar auriculares:</strong> evita que el sonido se vuelva a grabar.
          </p>

          <p>
            <strong>Grabar en un lugar silencioso:</strong> mejora la claridad del audio.
          </p>

          <p>
            <strong>Mantener distancia estable:</strong> evita cambios bruscos de volumen.
          </p>

        </div>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">

          <p className="font-semibold mb-2">Actividad</p>

          Utilizando Audacity, realizá las siguientes tareas:

          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Conectar y configurar un micrófono</li>
            <li>Grabar una presentación de voz de 30 segundos</li>
            <li>Aplicar reducción de ruido</li>
            <li>Subir el volumen utilizando amplificar</li>
            <li>Exportar el archivo en formato MP3</li>
          </ul>

        </div>
      </section>

    </div>
  );
}