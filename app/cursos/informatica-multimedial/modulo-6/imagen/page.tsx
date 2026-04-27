export default function EdicionImagenPhotoshopPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Edición de Imagen con Photoshop
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Adobe Photoshop es una de las herramientas más utilizadas para la edición
          de imágenes. Permite retocar fotos, crear diseños y mejorar la calidad
          visual mediante múltiples herramientas y efectos.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Photoshop?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Photoshop es un programa de edición de imágenes digitales que permite
          modificar fotografías, crear composiciones y aplicar efectos visuales
          de forma profesional.
        </p>
      </section>

      {/* Herramientas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas básicas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Herramienta de selección:</strong> permite seleccionar partes de la imagen.</li>
          <li><strong>Recorte:</strong> ajusta el tamaño de la imagen.</li>
          <li><strong>Pincel:</strong> dibuja o retoca áreas.</li>
          <li><strong>Borrador:</strong> elimina partes de la imagen.</li>
          <li><strong>Texto:</strong> agrega palabras o títulos.</li>
        </ul>
      </section>

      {/* Capas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de capas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las capas permiten trabajar diferentes elementos de una imagen por separado.
          Esto facilita la edición sin modificar el contenido original.
        </p>
      </section>

      {/* Ajustes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ajustes de imagen
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Brillo y contraste</li>
          <li>Color y saturación</li>
          <li>Niveles y curvas</li>
          <li>Filtros y efectos</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos básicos para editar una imagen
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Abrir la imagen en Photoshop</li>
          <li>Duplicar la capa original</li>
          <li>Recortar o ajustar el encuadre</li>
          <li>Corregir brillo, contraste y color</li>
          <li>Agregar texto o efectos</li>
          <li>Guardar el archivo final</li>
        </ul>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos de archivo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>PSD:</strong> formato editable de Photoshop</li>
          <li><strong>JPG:</strong> imagen comprimida</li>
          <li><strong>PNG:</strong> permite transparencia</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la edición de imágenes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Editar imágenes permite mejorar su calidad, corregir errores y hacerlas
          más atractivas visualmente, lo cual es fundamental en el diseño gráfico
          y la comunicación digital.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Editá una imagen utilizando Photoshop. Debe incluir:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Recorte de la imagen</li>
            <li>Ajuste de brillo y contraste</li>
            <li>Aplicación de un filtro</li>
            <li>Agregar un texto</li>
            <li>Guardar en formato JPG o PNG</li>
          </ul>
        </div>
      </section>

    </div>
  );
}