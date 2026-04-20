export default function NavegacionWebPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Navegación Web
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La navegación web es el proceso de desplazarse entre distintas páginas
          y contenidos dentro de Internet utilizando un navegador. Es una acción
          cotidiana que permite acceder a información, comunicarse y utilizar
          servicios en línea.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la navegación web?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es la forma en que los usuarios interactúan con sitios web mediante
          enlaces, menús y botones. Permite moverse de una página a otra dentro
          de un mismo sitio o hacia otros sitios en Internet.
        </p>
      </section>

      {/* Navegador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un navegador?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un navegador web es un programa que permite acceder a páginas web.
          Interpreta el contenido de los sitios (HTML, imágenes, videos) y lo
          muestra de forma visual para el usuario.
        </p>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de la navegación web
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Barra de direcciones:</strong> donde se escribe la URL.</li>
          <li><strong>Hipervínculos:</strong> enlaces que permiten ir a otra página.</li>
          <li><strong>Botones de navegación:</strong> atrás, adelante y recargar.</li>
          <li><strong>Pestañas:</strong> permiten abrir varias páginas a la vez.</li>
          <li><strong>Menús:</strong> organizan el contenido dentro de un sitio.</li>
        </ul>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de navegación
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div>
            <h3 className="font-semibold text-lg">Navegación lineal</h3>
            <p className="leading-relaxed">
              El usuario sigue un recorrido paso a paso, como en un tutorial
              o presentación.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Navegación jerárquica</h3>
            <p className="leading-relaxed">
              Se organiza en niveles, como un árbol, donde se accede a
              diferentes secciones desde un menú principal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Navegación libre</h3>
            <p className="leading-relaxed">
              Permite al usuario moverse sin un orden específico mediante enlaces.
            </p>
          </div>

        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de la navegación web
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una buena navegación facilita el acceso a la información, mejora la
          experiencia del usuario y permite encontrar contenido de manera rápida
          y sencilla. Es fundamental en el diseño de cualquier sitio web.
        </p>
      </section>

      {/* Consejos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consejos para una buena navegación
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Utilizar menús claros y organizados</li>
          <li>Evitar exceso de enlaces innecesarios</li>
          <li>Incluir botones visibles</li>
          <li>Mantener una estructura simple</li>
          <li>Facilitar el regreso a la página principal</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Observá un sitio web que uses frecuentemente y respondé:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>¿Qué tipo de navegación utiliza?</li>
            <li>¿Es fácil encontrar la información?</li>
            <li>¿Qué elementos de navegación tiene?</li>
            <li>¿Qué mejorarías?</li>
          </ul>
        </div>
      </section>

    </div>
  );
}