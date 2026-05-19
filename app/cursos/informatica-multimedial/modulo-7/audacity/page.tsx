export default function HerramientasAudacityPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Herramientas de Audacity
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Audacity es uno de los programas más utilizados para grabar y editar
          audio. Cuenta con herramientas que permiten cortar, mejorar y mezclar
          sonidos de manera sencilla y profesional.
        </p>
      </section>

      {/* Selección */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de selección
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Herramienta de selección:</strong> permite elegir partes del audio. <br/>
             Hacer clic y arrastrar sobre la pista.
          </p>

          <p>
            <strong>Herramienta de envolvente:</strong> ajusta el volumen en distintas partes. <br/>
             Crear puntos y moverlos para subir o bajar el sonido.
          </p>

          <p>
            <strong>Herramienta de desplazamiento:</strong> mueve clips en la línea de tiempo. <br/>
             Arrastrar el audio hacia otra posición.
          </p>

        </div>
      </section>

      {/* Edición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de edición
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Cortar:</strong> elimina una parte seleccionada del audio. <br/>
             Seleccionar fragmento y presionar Ctrl + X.
          </p>

          <p>
            <strong>Copiar y pegar:</strong> duplica partes del sonido. <br/>
             Usar Ctrl + C y Ctrl + V.
          </p>

          <p>
            <strong>Silenciar:</strong> elimina el sonido de un fragmento sin borrarlo. <br/>
             Seleccionar y usar la opción silenciar.
          </p>

          <p>
            <strong>Dividir clip:</strong> separa un audio en diferentes partes. <br/>
             Seleccionar y usar dividir clip.
          </p>

        </div>
      </section>

      {/* Grabación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de grabación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Grabar:</strong> crea una nueva pista de audio. <br/>
             Presionar el botón rojo de grabación.
          </p>

          <p>
            <strong>Pausar:</strong> detiene temporalmente la grabación o reproducción. <br/>
             Presionar el botón pausa.
          </p>

          <p>
            <strong>Detener:</strong> finaliza la grabación o reproducción. <br/>
             Presionar el botón stop.
          </p>

        </div>
      </section>

      {/* Efectos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Efectos de audio
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Reducción de ruido:</strong> elimina sonidos de fondo. <br/>
             Seleccionar ruido y aplicar el efecto.
          </p>

          <p>
            <strong>Eco:</strong> agrega repetición al sonido. <br/>
             Aplicar efecto eco desde el menú efectos.
          </p>

          <p>
            <strong>Amplificar:</strong> aumenta el volumen del audio. <br/>
             Seleccionar pista y aplicar amplificar.
          </p>

          <p>
            <strong>Fade In / Fade Out:</strong> crea entradas y salidas suaves. <br/>
             Seleccionar parte del audio y aplicar efecto.
          </p>

        </div>
      </section>

      {/* Exportación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Exportación de audio
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Audacity permite exportar proyectos en distintos formatos como MP3,
          WAV y OGG. <br/>
           Ir a Archivo → Exportar → Elegir formato.
        </p>
      </section>

      {/* Navegación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de navegación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Zoom:</strong> acerca o aleja la vista de la pista. <br/>
             Usar Ctrl + rueda del mouse.
          </p>

          <p>
            <strong>Reproducir:</strong> escucha el proyecto de audio. <br/>
             Presionar el botón play.
          </p>

        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de las herramientas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Conocer estas herramientas permite editar audio con mayor precisión,
          mejorar grabaciones y crear proyectos sonoros de mejor calidad.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>

          Abrí Audacity y realizá las siguientes tareas:

          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Grabar una pista de voz</li>
            <li>Recortar una parte del audio</li>
            <li>Aplicar reducción de ruido</li>
            <li>Agregar un efecto de eco</li>
            <li>Exportar el proyecto en formato MP3</li>
          </ul>
        </div>
      </section>

    </div>
  );
}