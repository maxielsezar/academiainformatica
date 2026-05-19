export default function InterfazAudacityPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          La Interfaz de Audacity
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Audacity posee una interfaz simple y organizada que permite grabar,
          editar y reproducir audio fácilmente. Conocer cada parte de la pantalla
          ayuda a trabajar de manera más rápida y eficiente.
        </p>
      </section>

      {/* ¿Qué es la interfaz? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la interfaz?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La interfaz es el conjunto de herramientas, botones y paneles que
          aparecen en la ventana principal del programa. Desde allí se controlan
          todas las funciones de grabación y edición de audio.
        </p>
      </section>

      {/* Barra superior */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Barra de menús
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Archivo:</strong> crear, abrir, guardar y exportar proyectos.
          </p>

          <p>
            <strong>Editar:</strong> cortar, copiar, pegar y deshacer cambios.
          </p>

          <p>
            <strong>Ver:</strong> opciones de zoom y visualización.
          </p>

          <p>
            <strong>Efectos:</strong> aplicar mejoras y efectos al audio.
          </p>

          <p>
            <strong>Generar:</strong> crear silencios, tonos y sonidos.
          </p>

        </div>
      </section>

      {/* Controles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Controles de reproducción y grabación
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Play:</strong> reproduce el audio del proyecto. <br/>
             Botón verde.
          </p>

          <p>
            <strong>Pausa:</strong> detiene temporalmente la reproducción o grabación.
          </p>

          <p>
            <strong>Stop:</strong> finaliza la reproducción o grabación. <br/>
             Botón amarillo.
          </p>

          <p>
            <strong>Grabar:</strong> inicia una nueva grabación de audio. <br/>
             Botón rojo.
          </p>

        </div>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas principales
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Selección:</strong> permite elegir partes del audio.
          </p>

          <p>
            <strong>Envolvente:</strong> ajusta el volumen en distintas zonas.
          </p>

          <p>
            <strong>Desplazamiento:</strong> mueve clips de audio en la línea de tiempo.
          </p>

          <p>
            <strong>Zoom:</strong> acerca o aleja la visualización de la pista.
          </p>

        </div>
      </section>

      {/* Línea de tiempo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Línea de tiempo y pistas
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Línea de tiempo:</strong> muestra la duración del proyecto. <br/>
             Permite ubicar sonidos en distintos momentos.
          </p>

          <p>
            <strong>Pistas de audio:</strong> contienen grabaciones o sonidos importados.
          </p>

          <p>
            <strong>Forma de onda:</strong> representa visualmente el sonido. <br/>
             Las partes más altas indican mayor volumen.
          </p>

        </div>
      </section>

      {/* Paneles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paneles de configuración
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Selector de micrófono:</strong> elige el dispositivo de entrada.
          </p>

          <p>
            <strong>Selector de parlantes:</strong> define el dispositivo de salida.
          </p>

          <p>
            <strong>Control de volumen:</strong> ajusta niveles de grabación y reproducción.
          </p>

        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de conocer la interfaz
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Comprender la interfaz de Audacity facilita el trabajo de edición,
          mejora la organización del proyecto y permite utilizar el programa de
          forma más profesional.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">

          <p className="font-semibold mb-2">Actividad</p>

          Abrí Audacity e identificá las siguientes partes de la interfaz:

          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Barra de menús</li>
            <li>Botón de grabación</li>
            <li>Herramienta de selección</li>
            <li>Línea de tiempo</li>
            <li>Pistas de audio</li>
            <li>Controles de volumen</li>
          </ul>

        </div>
      </section>

    </div>
  );
}