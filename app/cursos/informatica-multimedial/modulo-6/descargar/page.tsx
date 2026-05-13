export default function DescargarVideoY2MatePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Descargar Videos Utilizando Y2Mate
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Y2Mate es una herramienta online que permite convertir y descargar videos
          desde diferentes plataformas. Su funcionamiento es simple y no requiere
          instalar programas adicionales.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Y2Mate?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Y2Mate es un sitio web que permite descargar videos o extraer audio
          mediante el enlace del contenido.
        </p>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos para descargar un video
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Abrir YouTube y buscar el video deseado</li>
          <li>Copiar el enlace del video</li>
          <li>Ingresar al sitio de Y2Mate</li>
          <li>Pegar el enlace en el cuadro de búsqueda</li>
          <li>Seleccionar el formato y calidad</li>
          <li>Presionar el botón descargar</li>
        </ul>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos disponibles
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>MP4:</strong> formato de video</li>
          <li><strong>MP3:</strong> solo audio</li>
          <li>Diferentes resoluciones de calidad</li>
        </ul>
      </section>

      {/* Recomendaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Utilizar únicamente contenido con permiso de uso</li>
          <li>Evitar descargar archivos sospechosos</li>
          <li>No hacer clic en anuncios emergentes</li>
          <li>Revisar el formato antes de descargar</li>
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
            <li>Copiá el enlace de un video educativo</li>
            <li>Pegalo en Y2Mate</li>
            <li>Seleccioná formato MP4</li>
            <li>Elegí una calidad de descarga</li>
            <li>Guardá el archivo descargado</li>
          </ul>
        </div>
      </section>

    </div>
  );
}