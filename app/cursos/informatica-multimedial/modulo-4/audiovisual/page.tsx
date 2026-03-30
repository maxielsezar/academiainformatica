export default function ComunicacionAudiovisualPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Comunicación audiovisual
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La comunicación audiovisual es aquella que transmite información a
          través de la combinación de imagen y sonido. Es uno de los recursos
          más utilizados en la actualidad debido a su capacidad de captar la
          atención y facilitar la comprensión de los mensajes.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la comunicación audiovisual?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Este tipo de comunicación utiliza recursos visuales y auditivos de
          manera simultánea, permitiendo transmitir ideas, emociones e
          información de forma más completa. Se encuentra presente en medios
          como el cine, la televisión, internet y redes sociales.
        </p>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comparación con la comunicación verbal
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border mt-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Comunicación Verbal</th>
                <th className="border p-2">Comunicación Audiovisual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Se basa solo en palabras</td>
                <td className="border p-2">Combina imagen y sonido</td>
              </tr>
              <tr>
                <td className="border p-2">Menor impacto visual</td>
                <td className="border p-2">Mayor atractivo</td>
              </tr>
              <tr>
                <td className="border p-2">Puede ser más abstracta</td>
                <td className="border p-2">Más clara y directa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la comunicación audiovisual
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La comunicación audiovisual permite transmitir mensajes de manera
          más efectiva, ya que combina estímulos visuales y sonoros. Esto
          facilita el aprendizaje, mejora la comprensión y genera mayor
          impacto en el receptor.
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
            Buscá un video (educativo o publicitario) y describí qué mensaje transmite.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá qué elementos audiovisuales utiliza (imagen, música, voz, efectos).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Explicá por qué ese video es más efectivo que un texto escrito para comunicar esa idea.
          </div>

        </div>
      </section>

    </div>
  );
}