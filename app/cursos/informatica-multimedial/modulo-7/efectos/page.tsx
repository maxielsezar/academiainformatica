export default function EfectosSonidoAudacityPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Efectos de Sonido en Audacity
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Audacity incluye distintos efectos de sonido que permiten mejorar,
          modificar y darle mayor calidad a las grabaciones de audio. Estos
          efectos son muy utilizados en podcasts, música, videos y proyectos multimedia.
        </p>
      </section>

      {/* ¿Qué son? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los efectos de sonido?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los efectos de sonido son herramientas que modifican el audio para
          mejorar su calidad, cambiar su apariencia sonora o generar sensaciones
          especiales en quien escucha.
        </p>
      </section>

      {/* Efectos básicos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Efectos básicos de Audacity
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Amplificar:</strong> aumenta el volumen del audio. <br/>
            👉 Seleccionar pista y aplicar efecto amplificar.
          </p>

          <p>
            <strong>Normalizar:</strong> equilibra el volumen general. <br/>
            👉 Aplicar desde el menú efectos.
          </p>

          <p>
            <strong>Reducción de ruido:</strong> elimina sonidos de fondo. <br/>
            👉 Capturar perfil de ruido y aplicar reducción.
          </p>

          <p>
            <strong>Fade In:</strong> crea una entrada gradual del sonido. <br/>
            👉 Aplicar al inicio de la pista.
          </p>

          <p>
            <strong>Fade Out:</strong> crea una salida suave del audio. <br/>
            👉 Aplicar al final de la pista.
          </p>

        </div>
      </section>

      {/* Efectos especiales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Efectos especiales
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Eco:</strong> agrega repeticiones al sonido. <br/>
            👉 Usado para crear sensación de espacio.
          </p>

          <p>
            <strong>Reverb:</strong> simula sonido en ambientes grandes. <br/>
            👉 Genera profundidad y ambiente.
          </p>

          <p>
            <strong>Cambiar tono:</strong> modifica la altura del sonido. <br/>
            👉 Puede hacer la voz más aguda o grave.
          </p>

          <p>
            <strong>Cambiar velocidad:</strong> acelera o ralentiza el audio. <br/>
            👉 Mantiene o modifica la duración según configuración.
          </p>

        </div>
      </section>

      {/* Cómo aplicar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo aplicar un efecto
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Paso 1:</strong> seleccionar una parte o toda la pista. <br/>
            👉 Arrastrar sobre el audio.
          </p>

          <p>
            <strong>Paso 2:</strong> abrir el menú efectos. <br/>
            👉 Ir a Efectos en la barra superior.
          </p>

          <p>
            <strong>Paso 3:</strong> elegir el efecto deseado. <br/>
            👉 Configurar opciones y presionar aceptar.
          </p>

        </div>
      </section>

      {/* Uso de efectos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de efectos en proyectos
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Podcasts:</strong> mejorar claridad de voz y volumen.
          </p>

          <p>
            <strong>Música:</strong> agregar profundidad y calidad sonora.
          </p>

          <p>
            <strong>Videos:</strong> crear ambientes y efectos especiales.
          </p>

          <p>
            <strong>Narraciones:</strong> hacer el audio más profesional.
          </p>

        </div>
      </section>

      {/* Recomendaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones al usar efectos
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>No exagerar:</strong> demasiados efectos pueden arruinar el audio.
          </p>

          <p>
            <strong>Escuchar antes de guardar:</strong> revisar el resultado final.
          </p>

          <p>
            <strong>Guardar una copia:</strong> mantener el audio original sin modificar.
          </p>

        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de los efectos de sonido
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los efectos permiten mejorar la calidad del audio y darle una identidad
          más profesional y atractiva a cualquier proyecto multimedia.
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
            <li>Importar un archivo de audio</li>
            <li>Aplicar reducción de ruido</li>
            <li>Agregar un efecto de eco</li>
            <li>Usar Fade In y Fade Out</li>
            <li>Exportar el resultado final en formato MP3</li>
          </ul>

        </div>
      </section>

    </div>
  );
}