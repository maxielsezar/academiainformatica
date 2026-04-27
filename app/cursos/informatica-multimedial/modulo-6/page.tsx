export default function ModuloEdicionImagenVideoPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Módulo: Edición de Imagen y Video
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          Creación, edición y mejora de contenidos visuales y audiovisuales para comunicar ideas de forma efectiva.
        </p>
      </section>

      {/* Introducción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿De qué trata este módulo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En este módulo vas a aprender a trabajar con imágenes y videos,
          utilizando herramientas digitales para editarlos y mejorarlos.
          Conocerás conceptos básicos como recorte, ajustes de color,
          uso de texto, transiciones y efectos. Estos conocimientos te permitirán
          crear contenido visual atractivo para distintos contextos.
        </p>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos que vas a ver
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Edición de Imágenes</h3>
            Ajustes básicos como brillo, contraste, recorte y rotación.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Formatos de Imagen</h3>
            Diferencias entre JPG, PNG y otros formatos comunes.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Edición de Video</h3>
            Corte de clips, unión de escenas y organización en línea de tiempo.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Efectos y Transiciones</h3>
            Aplicación de efectos visuales y transiciones entre escenas.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Texto en Multimedia</h3>
            Inserción de títulos, subtítulos y elementos gráficos.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Exportación de Proyectos</h3>
            Guardado de imágenes y videos en distintos formatos y calidades.
          </div>

        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del módulo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Comprender los conceptos básicos de edición de imagen</li>
          <li>Aprender a editar videos simples</li>
          <li>Utilizar herramientas digitales de edición</li>
          <li>Mejorar la calidad visual de contenidos</li>
          <li>Incorporar texto y efectos en multimedia</li>
          <li>Crear proyectos audiovisuales básicos</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades que vas a realizar
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            Edición de imágenes aplicando recorte, filtros y ajustes de color.
          </div>

          <div className="border p-6 rounded-xl">
            Creación de un video corto uniendo clips y agregando transiciones.
          </div>

          <div className="border p-6 rounded-xl">
            Incorporación de texto y títulos en imágenes y videos.
          </div>

          <div className="border p-6 rounded-xl">
            Exportación de un proyecto final en formato digital.
          </div>

        </div>
      </section>

      {/* Cierre */}
      <section className="mb-6">
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Este módulo te permitirá desarrollar habilidades para crear y editar
          contenido visual y audiovisual, mejorando la forma en que comunicás
          ideas a través de imágenes y videos.
        </div>
      </section>

    </div>
  );
}