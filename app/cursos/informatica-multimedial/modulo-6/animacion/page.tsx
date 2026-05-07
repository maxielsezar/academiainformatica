export default function AnimacionGifPhotoshopPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Crear una Animación en Photoshop y Guardarla como GIF
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Photoshop permite crear animaciones simples utilizando capas y la línea
          de tiempo. Estas animaciones pueden exportarse como archivos GIF para
          compartirlas en páginas web, redes sociales o presentaciones.
        </p>
      </section>

      {/* GIF */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un GIF?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un GIF es un formato de imagen animada que reproduce una secuencia
          de imágenes en forma continua. Se utiliza para crear animaciones cortas
          y livianas.
        </p>
      </section>

      {/* Línea de tiempo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La línea de tiempo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La línea de tiempo es la herramienta que permite organizar cuadros
          y controlar la animación dentro de Photoshop.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-3">
          <li>Se activa desde: <strong>Ventana → Línea de tiempo</strong></li>
          <li>Permite crear cuadros de animación</li>
          <li>Controla duración y repetición</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo crear una animación?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Abrir o crear un documento en Photoshop</li>
          <li>Crear varias capas con diferentes elementos o posiciones</li>
          <li>Abrir la línea de tiempo</li>
          <li>Seleccionar “Crear animación de cuadros”</li>
          <li>Crear nuevos cuadros utilizando las capas</li>
          <li>Modificar la visibilidad de las capas en cada cuadro</li>
          <li>Configurar el tiempo de cada cuadro</li>
          <li>Probar la animación con el botón reproducir</li>
        </ul>
      </section>

      {/* Guardar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo guardar la animación como GIF?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Ir a <strong>Archivo → Exportar → Guardar para web</strong></li>
          <li>Elegir formato <strong>GIF</strong></li>
          <li>Configurar calidad y tamaño</li>
          <li>Seleccionar repetición “Infinito” si se desea</li>
          <li>Guardar el archivo</li>
        </ul>
      </section>

      {/* Consejos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos para crear GIFs
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar pocos cuadros para reducir tamaño</li>
          <li>Mantener dimensiones pequeñas</li>
          <li>Evitar exceso de efectos</li>
          <li>Utilizar tiempos adecuados entre cuadros</li>
        </ul>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Dónde se utilizan los GIFs?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Redes sociales</li>
          <li>Páginas web</li>
          <li>Publicidad digital</li>
          <li>Memes y contenido interactivo</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Creá una animación simple en Photoshop:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Usá al menos 3 cuadros diferentes</li>
            <li>Animá texto o una figura</li>
            <li>Configurá tiempos de reproducción</li>
            <li>Exportá el archivo en formato GIF</li>
            <li>Probá la animación en el navegador</li>
          </ul>
        </div>
      </section>

    </div>
  );
}