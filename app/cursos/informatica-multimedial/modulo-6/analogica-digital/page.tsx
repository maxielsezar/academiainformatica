export default function ImagenAnalogicaDigitalPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Imagen Analógica y Digital
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las imágenes pueden clasificarse en analógicas y digitales según la forma
          en que se crean, almacenan y reproducen. Comprender sus diferencias es clave
          para el uso correcto de herramientas de edición y medios digitales.
        </p>
      </section>

      {/* Imagen analógica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una imagen analógica?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es una imagen capturada mediante procesos físicos o químicos, como la
          fotografía tradicional con rollo. No está compuesta por píxeles y su
          calidad depende del soporte físico.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-3">
          <li>Se obtiene mediante cámaras analógicas</li>
          <li>Se revela en papel o negativo</li>
          <li>No puede editarse fácilmente sin digitalizarse</li>
        </ul>
      </section>

      {/* Imagen digital */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una imagen digital?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es una imagen formada por píxeles y almacenada en formato digital.
          Puede ser capturada con cámaras digitales o creada mediante software.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-3">
          <li>Se compone de píxeles</li>
          <li>Se puede editar fácilmente</li>
          <li>Se almacena en formatos como JPG o PNG</li>
        </ul>
      </section>

      {/* Diferencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias principales
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Analógica:</strong> soporte físico</li>
          <li><strong>Digital:</strong> formato electrónico</li>
          <li><strong>Analógica:</strong> difícil de modificar</li>
          <li><strong>Digital:</strong> fácil de editar</li>
          <li><strong>Analógica:</strong> calidad dependiente del material</li>
          <li><strong>Digital:</strong> calidad dependiente de la resolución</li>
        </ul>
      </section>

      {/* Conversión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conversión de analógica a digital
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las imágenes analógicas pueden convertirse a formato digital mediante
          el escaneo, lo que permite editarlas, almacenarlas y compartirlas
          fácilmente en dispositivos electrónicos.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Conocer la diferencia entre ambos tipos de imagen permite elegir el
          formato adecuado según el uso, ya sea para impresión, archivo o
          publicación digital.
        </p>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Respondé las siguientes consignas:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>¿Qué diferencia principal existe entre imagen analógica y digital?</li>
            <li>Nombrá un ejemplo de cada tipo</li>
            <li>¿Por qué es más fácil editar una imagen digital?</li>
          </ul>
        </div>
      </section>

    </div>
  );
}