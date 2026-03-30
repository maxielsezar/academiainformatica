export default function PresentacionMultimediaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Presentación conceptual de Multimedia
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La multimedia es la integración de diferentes tipos de información
          digital en un mismo entorno, como texto, imágenes, audio, video y
          animaciones. Su objetivo es comunicar ideas de manera más completa,
          atractiva e interactiva, facilitando la comprensión de los contenidos.
        </p>
      </section>

      {/* Concepto de multimedia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la Multimedia?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La multimedia combina distintos recursos digitales para transmitir
          información. A diferencia de los medios tradicionales, permite
          integrar múltiples formatos en una sola presentación, generando
          experiencias más dinámicas y participativas.
        </p>
      </section>

      {/* Elementos de la multimedia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de la Multimedia
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Texto:</strong> información escrita que comunica ideas.</li>
          <li><strong>Imagen:</strong> fotografías, ilustraciones o gráficos.</li>
          <li><strong>Audio:</strong> sonidos, música o narraciones.</li>
          <li><strong>Video:</strong> imágenes en movimiento con sonido.</li>
          <li><strong>Animación:</strong> gráficos con movimiento.</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la Multimedia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La multimedia permite mejorar la comunicación, hacer los contenidos
          más atractivos y facilitar el aprendizaje. Es ampliamente utilizada
          en la educación, el entretenimiento, la publicidad y las redes
          sociales.
        </p>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Escribí cinco ejemplos de multimedia que utilices en tu vida diaria
            (por ejemplo: redes sociales, videojuegos, plataformas educativas).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Elegí uno de los ejemplos y explicá qué elementos multimedia utiliza
            (texto, imagen, audio, video o animación).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Reflexioná: ¿Por qué creés que la multimedia es más efectiva que usar
            solo texto para comunicar información?
          </div>

        </div>
      </section>

    </div>
  );
}