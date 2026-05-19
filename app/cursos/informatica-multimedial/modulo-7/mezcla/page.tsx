export default function MezclaAudioAudacityPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Mezcla de Audio en Audacity
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La mezcla de audio consiste en combinar diferentes pistas de sonido
          para crear un proyecto equilibrado y agradable de escuchar. En Audacity
          es posible mezclar voces, música y efectos de sonido de manera sencilla.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una mezcla de audio?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una mezcla de audio es el proceso de unir varias pistas y ajustar sus
          volúmenes, posiciones y efectos para obtener un resultado final más profesional.
        </p>
      </section>

      {/* Importar pistas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importar pistas de audio
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Agregar archivos:</strong> incorporar música o sonidos al proyecto. <br/>
             Archivo → Importar → Audio.
          </p>

          <p>
            <strong>Agregar grabaciones:</strong> crear nuevas pistas usando el micrófono. <br/>
             Presionar el botón grabar.
          </p>

          <p>
            <strong>Organizar pistas:</strong> mantener separado cada sonido. <br/>
             Una pista para voz, otra para música y otra para efectos.
          </p>

        </div>
      </section>

      {/* Ajustes de volumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ajuste de volumen
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Ganancia:</strong> controla el volumen de cada pista. <br/>
             Ajustar usando el control lateral de la pista.
          </p>

          <p>
            <strong>Balance:</strong> mueve el sonido hacia izquierda o derecha. <br/>
             Utilizar el control panorámico.
          </p>

          <p>
            <strong>Evitar saturación:</strong> controlar que el sonido no distorsione. <br/>
             Mantener niveles equilibrados.
          </p>

        </div>
      </section>

      {/* Sincronización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sincronización de pistas
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Mover clips:</strong> cambiar la posición del audio. <br/>
             Arrastrar la pista en la línea de tiempo.
          </p>

          <p>
            <strong>Alinear sonidos:</strong> hacer coincidir voz y música. <br/>
             Escuchar y ajustar tiempos.
          </p>

          <p>
            <strong>Usar zoom:</strong> mejorar precisión en la edición. <br/>
             Acercar la vista de las pistas.
          </p>

        </div>
      </section>

      {/* Aplicar efectos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación de efectos
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Fade In:</strong> entrada gradual de la música. <br/>
             Ideal para comienzos suaves.
          </p>

          <p>
            <strong>Fade Out:</strong> salida progresiva del sonido. <br/>
             Usado al finalizar una pista.
          </p>

          <p>
            <strong>Compresor:</strong> equilibra diferencias de volumen. <br/>
             Hace el audio más uniforme.
          </p>

          <p>
            <strong>Ecualización:</strong> mejora frecuencias del sonido. <br/>
             Ajusta graves y agudos.
          </p>

        </div>
      </section>

      {/* Exportación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Exportar la mezcla final
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando la mezcla esté terminada, el proyecto puede exportarse en
          formatos como MP3 o WAV para compartirlo o reproducirlo en distintos dispositivos. <br/>
           Archivo → Exportar → Elegir formato.
        </p>
      </section>

      {/* Consejos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos para una buena mezcla
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Escuchar con auriculares:</strong> permite detectar errores más fácilmente.
          </p>

          <p>
            <strong>No usar volumen excesivo:</strong> evita distorsión y saturación.
          </p>

          <p>
            <strong>Separar cada sonido:</strong> mejora la organización del proyecto.
          </p>

        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la mezcla de audio
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una buena mezcla mejora la calidad del proyecto, facilita la comprensión
          del contenido y brinda una experiencia sonora más profesional.
        </p>
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
            <li>Importar una pista musical</li>
            <li>Grabar una narración con micrófono</li>
            <li>Ajustar el volumen de ambas pistas</li>
            <li>Aplicar Fade In y Fade Out</li>
            <li>Exportar la mezcla final en formato MP3</li>
          </ul>

        </div>
      </section>

    </div>
  );
}