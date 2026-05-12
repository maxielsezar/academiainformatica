export default function EdicionVideoClipchampPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Edición de Video con Clipchamp
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Clipchamp es un editor de video fácil de usar que permite crear y editar
          contenido audiovisual de forma rápida. Es ideal para principiantes y para
          la creación de videos para redes sociales, presentaciones y proyectos escolares.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Clipchamp?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Clipchamp es una herramienta de edición de video desarrollada por Microsoft.
          Funciona desde el navegador o como aplicación y permite combinar videos,
          imágenes, música, texto y efectos visuales.
        </p>
      </section>

      {/* Interfaz */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Partes principales de la interfaz
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Biblioteca multimedia</h3>
            <p className="leading-relaxed">
              Lugar donde se importan videos, imágenes y audios.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Vista previa</h3>
            <p className="leading-relaxed">
              Permite visualizar el proyecto mientras se edita.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Línea de tiempo</h3>
            <p className="leading-relaxed">
              Área donde se organizan clips, audio y efectos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Barra de herramientas</h3>
            <p className="leading-relaxed">
              Incluye opciones para texto, transiciones, filtros y efectos.
            </p>
          </div>

        </div>
      </section>

      {/* Funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones principales
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Recortar y dividir videos</li>
          <li>Agregar música y efectos de sonido</li>
          <li>Insertar texto y títulos</li>
          <li>Aplicar transiciones y filtros</li>
          <li>Agregar imágenes y stickers</li>
          <li>Exportar videos en distintos formatos</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo editar un video en Clipchamp?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear un nuevo proyecto</li>
          <li>Importar videos e imágenes</li>
          <li>Arrastrar archivos a la línea de tiempo</li>
          <li>Recortar o dividir clips</li>
          <li>Agregar texto, música y efectos</li>
          <li>Revisar el video en la vista previa</li>
          <li>Exportar el proyecto final</li>
        </ul>
      </section>

      {/* Exportar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Exportar el video
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez finalizada la edición, Clipchamp permite exportar el video
          en diferentes resoluciones como 720p o 1080p según la calidad deseada.
        </p>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué se utiliza?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Videos para redes sociales</li>
          <li>Presentaciones escolares</li>
          <li>Contenido para YouTube</li>
          <li>Publicidad digital</li>
          <li>Videos personales</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Creá un video corto utilizando Clipchamp:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Importá al menos 2 videos o imágenes</li>
            <li>Agregá un título</li>
            <li>Insertá música o sonido</li>
            <li>Aplicá una transición</li>
            <li>Exportá el video final</li>
          </ul>
        </div>
      </section>

    </div>
  );
}