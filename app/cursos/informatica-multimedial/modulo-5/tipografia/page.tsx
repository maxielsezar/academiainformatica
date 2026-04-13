export default function DescargarFuentesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Descargar Fuentes Gratuitas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las fuentes tipográficas son una parte fundamental del diseño digital.
          Existen muchas opciones gratuitas que podés descargar para mejorar
          la apariencia de tus trabajos.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una fuente tipográfica?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una fuente tipográfica es el estilo o diseño de las letras.
          Se utiliza para comunicar mensajes y transmitir sensaciones
          como formalidad, modernidad o creatividad.
        </p>
      </section>

      {/* Sitios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sitios para descargar fuentes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Google Fonts:</strong> fuentes gratuitas y fáciles de usar.</li>
          <li><strong>DaFont:</strong> gran variedad de estilos creativos.</li>
          <li><strong>Font Squirrel:</strong> fuentes gratuitas para uso comercial.</li>
          <li><strong>1001 Fonts:</strong> colección amplia de tipografías.</li>
        </ul>
      </section>

      {/* Cómo descargar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo descargar una fuente?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Ingresar a una página de fuentes.</li>
          <li>Elegir una tipografía.</li>
          <li>Hacer clic en descargar.</li>
          <li>Descomprimir el archivo (.zip).</li>
        </ul>
      </section>

      {/* Cómo instalar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo instalar una fuente?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Windows:</strong> abrir el archivo y hacer clic en "Instalar".</li>
          <li><strong>Mac:</strong> abrir la fuente y presionar "Instalar fuente".</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de las fuentes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Elegir correctamente una fuente mejora la legibilidad y ayuda a
          transmitir mejor el mensaje. Además, influye en el diseño y la
          experiencia del usuario.
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
            Buscá y descargá una fuente desde internet e instalala en tu computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Probá diferentes fuentes en un documento y compará cuál es más legible.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Elegí una fuente adecuada para un afiche educativo y explicá por qué la seleccionaste.
          </div>

        </div>
      </section>

    </div>
  );
}