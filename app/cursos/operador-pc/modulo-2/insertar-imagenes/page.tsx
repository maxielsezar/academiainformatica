import Image from "next/image"

export default function InsertarImagenesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Insertar Imágenes
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las imágenes permiten mejorar la presentación de un documento
          y ayudan a explicar información de manera visual. En Microsoft Word
          es posible insertar fotografías, ilustraciones o gráficos para
          complementar el contenido del texto.
        </p>
      </section>

      {/* Insertar imagen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Insertar una Imagen
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Hacer clic en la pestaña <strong>Insertar</strong>.</li>
            <li>Seleccionar la opción <strong>Imágenes</strong>.</li>
            <li>Elegir una imagen desde la computadora.</li>
            <li>Hacer clic en <strong>Insertar</strong>.</li>
          </ol>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Imagen en un Documento
        </h2>

        <div className="flex justify-center">
          <Image
            src="/word/imagen-documento.png"
            alt="Imagen insertada en un documento de Word"
            width={700}
            height={400}
            className="w-full max-w-2xl h-auto rounded-xl"
          />
        </div>
      </section>

      {/* Ajustar tamaño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cambiar el Tamaño de una Imagen
        </h2>

        <p className="mb-4 max-w-3xl">
          Una vez insertada la imagen, se puede modificar su tamaño
          arrastrando las esquinas de la imagen con el mouse.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Seleccionar la imagen.</li>
            <li>Arrastrar los puntos de las esquinas.</li>
            <li>Mantener la proporción para evitar deformar la imagen.</li>
          </ul>
        </div>
      </section>

      {/* Posición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Posición de la Imagen
        </h2>

        <p className="mb-4 max-w-3xl">
          Word permite elegir cómo se ubica la imagen respecto al texto.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>En línea con el texto.</li>
            <li>Texto ajustado alrededor de la imagen.</li>
            <li>Detrás del texto.</li>
            <li>Delante del texto.</li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Inserta una imagen en un documento de Word.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Cambia el tamaño de la imagen para que se adapte al documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Prueba diferentes opciones de ajuste de texto alrededor de la imagen.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Inserta dos imágenes y ubícalas en distintas partes del documento.
          </div>

        </div>
      </section>

    </div>
  )
}