export default function TextoDigitalPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          El Texto Digital
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El texto digital es la base de la comunicación en internet.
          Se caracteriza por ser flexible, interactivo y adaptable a distintos dispositivos.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el texto digital?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El texto digital es toda información escrita que se presenta en formato
          electrónico, como en páginas web, aplicaciones o redes sociales.
          A diferencia del texto tradicional, permite incluir enlaces, imágenes
          y contenido multimedia.
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características del texto digital
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Interactividad:</strong> permite hacer clic, navegar e interactuar.</li>
          <li><strong>Multimedia:</strong> integra imágenes, audio y video.</li>
          <li><strong>No lineal:</strong> no sigue un orden fijo de lectura.</li>
          <li><strong>Actualizable:</strong> se puede modificar fácilmente.</li>
          <li><strong>Accesible:</strong> se visualiza en distintos dispositivos.</li>
        </ul>
      </section>

      {/* Diferencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias con el texto tradicional
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>El texto digital es interactivo, el tradicional es estático.</li>
          <li>El digital puede incluir multimedia.</li>
          <li>La lectura digital es más dinámica y no lineal.</li>
          <li>El texto digital se puede actualizar fácilmente.</li>
        </ul>
      </section>

      {/* Función */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Función del texto en la multimedia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El texto en la multimedia cumple un rol fundamental: informa, guía al usuario,
          complementa imágenes y videos, y ayuda a organizar la información.
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4">
          <li>Transmitir información clara</li>
          <li>Guiar la navegación</li>
          <li>Reforzar contenido visual</li>
          <li>Captar la atención</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Usar títulos y subtítulos</li>
          <li>Escribir párrafos cortos</li>
          <li>Destacar información importante</li>
          <li>Evitar textos largos sin estructura</li>
        </ul>
      </section>

      {/* Lorem Ipsum */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Lorem Ipsum?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Lorem Ipsum es un texto de relleno utilizado en diseño gráfico y desarrollo web.
          Sirve para simular contenido real mientras se diseña una página.
        </p>
        <p className="leading-relaxed max-w-3xl mb-4">
          En word podemos usarlo utilizando =Lorem() 
        </p>

        <h3 className="font-semibold mb-2">¿Para qué se usa?</h3>
        <ul className="list-disc list-inside space-y-3">
          <li>Probar diseños antes de tener el contenido final</li>
          <li>Ver cómo se distribuye el texto en la pantalla</li>
          <li>Evaluar tipografías y estilos</li>
        </ul>

        <div className="border p-6 rounded-xl max-w-3xl mt-6">
          <p className="text-gray-600 italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
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
            Identificá ejemplos de texto digital en páginas web que uses diariamente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribí un texto corto usando texto digital.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Usá Lorem Ipsum para diseñar una página de prueba.
          </div>

        </div>
      </section>

    </div>
  );
}