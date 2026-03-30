export default function MultimediaComunicacionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          La Multimedia como medio de comunicación
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La multimedia representa una evolución en la forma de comunicarnos,
          ya que combina distintos lenguajes como texto, imagen, sonido y video
          en un solo mensaje. Esto permite transmitir información de manera más
          clara, dinámica y atractiva.
        </p>
      </section>

      {/* Multimedia como comunicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Un nuevo medio de comunicación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A diferencia de los medios tradicionales, la multimedia permite integrar
          múltiples recursos en un mismo entorno, facilitando la comprensión y
          captando mejor la atención del usuario. Es ampliamente utilizada en
          internet, redes sociales y plataformas digitales.
        </p>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de uso
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Redes sociales:</strong> combinan imágenes, videos y texto.</li>
          <li><strong>Videos educativos:</strong> explican contenidos con audio e imágenes.</li>
          <li><strong>Publicidad digital:</strong> utiliza animaciones y efectos visuales.</li>
          <li><strong>Páginas web:</strong> integran distintos elementos interactivos.</li>
        </ul>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de la multimedia
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Hace la información más atractiva.</li>
          <li>Facilita la comprensión de los contenidos.</li>
          <li>Permite mayor interacción con el usuario.</li>
          <li>Mejora la comunicación en distintos contextos.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Elegí una red social (Instagram, YouTube o TikTok) y describí qué
            elementos multimedia utiliza.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Explicá por qué esa plataforma es efectiva para comunicar información.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Pensá un ejemplo donde podrías usar multimedia para comunicar una idea
            (por ejemplo: una presentación, un video o una publicación).
          </div>

        </div>
      </section>

    </div>
  );
}