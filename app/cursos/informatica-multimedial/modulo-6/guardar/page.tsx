export default function GuardarImagenPhotoshopPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Guardar Imágenes en Photoshop y Modos de Color (RGB y CMYK)
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Guardar correctamente una imagen en Photoshop es fundamental para asegurar
          su calidad y compatibilidad según el uso que se le dará. Además, elegir
          el modo de color adecuado (RGB o CMYK) es clave para obtener buenos resultados.
        </p>
      </section>

      {/* Guardar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo guardar una imagen en Photoshop?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Archivo → Guardar como:</strong> permite elegir formato y ubicación.</li>
          <li><strong>Elegir formato:</strong> JPG, PNG, PSD, entre otros.</li>
          <li><strong>Configurar calidad:</strong> especialmente en JPG.</li>
          <li><strong>Exportar:</strong> usar "Exportar como" para web o redes sociales.</li>
        </ul>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos más utilizados
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>PSD:</strong> archivo editable con capas</li>
          <li><strong>JPG:</strong> imagen comprimida, ideal para fotos</li>
          <li><strong>PNG:</strong> permite transparencia</li>
        </ul>
      </section>

      {/* RGB */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es RGB?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          RGB (Rojo, Verde y Azul) es un modelo de color utilizado en pantallas.
          Combina estos tres colores para crear todos los demás.
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-3">
          <li>Se usa en computadoras, celulares y televisores</li>
          <li>Mayor brillo y variedad de colores</li>
          <li>Ideal para web y redes sociales</li>
        </ul>
      </section>

      {/* CMYK */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es CMYK?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          CMYK (Cian, Magenta, Amarillo y Negro) es un modelo de color utilizado
          en impresión. Mezcla tintas para reproducir colores en papel.
        </p>

        <ul className="list-disc list-inside space-y-2 max-w-3xl mt-3">
          <li>Se usa para imprimir folletos, revistas y carteles</li>
          <li>Menor brillo que RGB</li>
          <li>Colores más cercanos al resultado en papel</li>
        </ul>
      </section>

      {/* Diferencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias entre RGB y CMYK
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>RGB:</strong> para pantallas</li>
          <li><strong>CMYK:</strong> para impresión</li>
          <li><strong>RGB:</strong> colores más brillantes</li>
          <li><strong>CMYK:</strong> colores más apagados pero reales en papel</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante elegir bien?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Si se utiliza el modo incorrecto, los colores pueden verse diferentes
          al resultado final. Por ejemplo, una imagen en RGB puede cambiar al
          imprimirla si no se convierte a CMYK.
        </p>
      </section>

      {/* Consejos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar RGB para redes sociales y páginas web</li>
          <li>Usar CMYK para trabajos impresos</li>
          <li>Convertir el modo de color antes de guardar</li>
          <li>Revisar los colores antes de imprimir</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Realizá lo siguiente en Photoshop:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Abrí una imagen</li>
            <li>Guardala en formato JPG</li>
            <li>Convertí el modo de color a CMYK</li>
            <li>Guardá una copia en ese modo</li>
            <li>Compará las diferencias de color</li>
          </ul>
        </div>
      </section>

    </div>
  );
}