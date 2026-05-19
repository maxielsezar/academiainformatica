export default function EdicionPistasAudacityPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Edición de Pistas en Audacity
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Audacity permite editar pistas de audio de manera sencilla y profesional.
          Con sus herramientas es posible cortar, mover, combinar y mejorar sonidos
          para crear proyectos de audio más organizados y de mejor calidad.
        </p>
      </section>

      {/* ¿Qué es una pista? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una pista de audio?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una pista es una línea de audio dentro del proyecto. Cada pista puede
          contener grabaciones, música, efectos o sonidos independientes que luego
          se combinan en una edición final.
        </p>
      </section>

      {/* Herramientas básicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas básicas de edición
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Seleccionar:</strong> elegir una parte específica del audio. <br/>
             Hacer clic y arrastrar sobre la pista.
          </p>

          <p>
            <strong>Cortar:</strong> eliminar una sección del sonido. <br/>
             Seleccionar fragmento y presionar Ctrl + X.
          </p>

          <p>
            <strong>Copiar:</strong> duplicar partes de la pista. <br/>
             Utilizar Ctrl + C.
          </p>

          <p>
            <strong>Pegar:</strong> insertar audio copiado. <br/>
             Usar Ctrl + V.
          </p>

        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de pistas
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Mover pistas:</strong> cambiar la posición del audio. <br/>
             Arrastrar el clip con la herramienta desplazamiento.
          </p>

          <p>
            <strong>Dividir clips:</strong> separar una pista en varias partes. <br/>
             Seleccionar y usar dividir clip.
          </p>

          <p>
            <strong>Unir clips:</strong> combinar fragmentos de audio. <br/>
             Seleccionar las partes y usar unir.
          </p>

        </div>
      </section>

      {/* Ajustes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ajustes de audio
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Amplificar:</strong> aumenta el volumen del audio. <br/>
             Aplicar desde el menú efectos.
          </p>

          <p>
            <strong>Silenciar:</strong> quitar sonido en una parte específica. <br/>
             Seleccionar fragmento y usar silenciar.
          </p>

          <p>
            <strong>Normalizar:</strong> equilibrar el volumen de la pista. <br/>
             Aplicar efecto normalizar.
          </p>

          <p>
            <strong>Fade In y Fade Out:</strong> crear entradas y salidas suaves. <br/>
             Seleccionar audio y aplicar el efecto.
          </p>

        </div>
      </section>

      {/* Trabajo con varias pistas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Trabajo con múltiples pistas
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Agregar música:</strong> incorporar una pista musical al proyecto. <br/>
             Archivo → Importar → Audio.
          </p>

          <p>
            <strong>Combinar voz y música:</strong> mezclar distintos sonidos. <br/>
             Ajustar volumen de cada pista.
          </p>

          <p>
            <strong>Sincronizar pistas:</strong> alinear audios correctamente. <br/>
             Mover clips hasta coincidir en tiempo.
          </p>

        </div>
      </section>

      {/* Exportación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Exportación del proyecto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando la edición esté terminada, el proyecto puede exportarse en
          formatos como MP3 o WAV para compartirlo o reproducirlo en otros dispositivos. <br/>
           Archivo → Exportar → Elegir formato.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la edición de pistas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Editar pistas correctamente permite crear audios más claros,
          organizados y profesionales, mejorando la experiencia de quien escucha.
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
            <li>Importar una pista de música</li>
            <li>Grabar una pista de voz</li>
            <li>Recortar una parte del audio</li>
            <li>Aplicar Fade In y Fade Out</li>
            <li>Combinar ambas pistas y exportar en MP3</li>
          </ul>

        </div>
      </section>

    </div>
  );
}