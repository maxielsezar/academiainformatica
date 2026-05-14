export default function SubirVideoYoutubePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Cómo Subir un Video a YouTube
        </h1>

        <p className="leading-relaxed max-w-3xl">
          YouTube es una plataforma que permite compartir videos con personas
          de todo el mundo. Subir contenido es un proceso sencillo que requiere
          una cuenta de Google y un video preparado para publicar.
        </p>
      </section>

      {/* Qué se necesita */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué se necesita?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Una cuenta de Google</li>
          <li>Acceso a YouTube</li>
          <li>Un video guardado en la computadora o celular</li>
          <li>Conexión a internet</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos para subir un video
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Ingresar a YouTube e iniciar sesión</li>
          <li>Hacer clic en el botón “Crear”</li>
          <li>Seleccionar “Subir video”</li>
          <li>Elegir el archivo desde el dispositivo</li>
          <li>Esperar a que el video se cargue</li>
        </ul>
      </section>

      {/* Configuración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración del video
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Título:</strong> nombre del video que verán los usuarios.
          </p>

          <p>
            <strong>Descripción:</strong> información sobre el contenido.
          </p>

          <p>
            <strong>Miniatura:</strong> imagen de portada del video.
          </p>

          <p>
            <strong>Privacidad:</strong> puede ser público, oculto o privado.
          </p>

        </div>
      </section>

      {/* Publicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Publicar el video
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez completada la configuración, se presiona el botón
          “Publicar” para que el video quede disponible en YouTube.
        </p>
      </section>

      {/* Consejos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos importantes
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar títulos claros y descriptivos</li>
          <li>Agregar miniaturas llamativas</li>
          <li>Verificar la calidad del audio y video</li>
          <li>Respetar derechos de autor</li>
          <li>Agregar etiquetas y categorías</li>
        </ul>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos compatibles
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>MP4</li>
          <li>MOV</li>
          <li>AVI</li>
          <li>WMV</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>

          Realizá las siguientes acciones:
          
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Ingresá a YouTube con tu cuenta</li>
            <li>Subí un video corto</li>
            <li>Agregá un título y descripción</li>
            <li>Elegí una miniatura</li>
            <li>Configurá el video como público</li>
          </ul>
        </div>
      </section>

    </div>
  );
}