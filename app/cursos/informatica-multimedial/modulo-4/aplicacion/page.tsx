export default function AplicacionesMultimediaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Aplicaciones de la Multimedia
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La multimedia se utiliza en distintos ámbitos de la vida cotidiana,
          permitiendo comunicar información de manera más atractiva, dinámica
          e interactiva. Su uso se ha expandido gracias a las tecnologías
          digitales y el acceso a internet.
        </p>
      </section>

      {/* Ámbitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Dónde se utiliza la multimedia?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Educativa:</strong> plataformas de aprendizaje, cursos online, presentaciones.</li>
          <li><strong>Comercial:</strong> publicidad digital, marketing, promociones.</li>
          <li><strong>Recreativa:</strong> videojuegos, películas, entretenimiento.</li>
          <li><strong>Social:</strong> redes sociales, blogs, contenido digital.</li>
        </ul>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de aplicaciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunos ejemplos concretos del uso de la multimedia incluyen videos
          educativos en línea, publicidades animadas, aplicaciones interactivas
          y contenido en redes sociales que combina imágenes, texto y sonido.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de su uso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La multimedia permite mejorar la comunicación y captar la atención
          del público, facilitando la transmisión de ideas en distintos
          contextos como la educación, el trabajo y el entretenimiento.
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
            Proponé un ejemplo de uso de multimedia en el ámbito educativo y
            explicá qué elementos utilizarías.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Imaginá una publicidad y describí cómo usarías la multimedia para
            hacerla más atractiva.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Pensá en una aplicación o juego y explicá qué elementos multimedia
            incluye y para qué sirven.
          </div>

        </div>
      </section>

    </div>
  );
}