export default function TiposComputadorasPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Tipos de Computadoras
      </h1>

      <p className="text-gray-700 mb-6">
        Las computadoras existen en diferentes formatos y tamaños dependiendo
        del uso que se les da. Algunas están diseñadas para uso personal,
        otras para empresas, educación o tareas específicas.
      </p>

      {/* Computadora de Escritorio */}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Computadora de escritorio (Desktop)
        </h2>

        <p className="text-gray-700 mb-4">
          Son las computadoras tradicionales utilizadas en oficinas,
          hogares y escuelas. Están compuestas por varios componentes
          separados como monitor, gabinete, teclado y mouse.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <strong>Características:</strong>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Mayor potencia que muchas laptops</li>
            <li>Permiten actualizar componentes fácilmente</li>
            <li>Ideales para trabajo prolongado</li>
          </ul>
        </div>
      </section>

      {/* Laptop */}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Laptop o Notebook
        </h2>

        <p className="text-gray-700 mb-4">
          Son computadoras portátiles que integran todos los componentes
          en un solo equipo: pantalla, teclado, batería y hardware interno.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <strong>Ventajas:</strong>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Portabilidad</li>
            <li>Funcionan con batería</li>
            <li>Ideales para estudio o trabajo móvil</li>
          </ul>
        </div>
      </section>

      {/* Tablets */}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Tablets
        </h2>

        <p className="text-gray-700 mb-4">
          Son dispositivos portátiles con pantalla táctil. Se utilizan
          principalmente para navegación web, lectura, entretenimiento
          y aplicaciones móviles.
        </p>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
          <strong>Características:</strong>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Pantalla táctil</li>
            <li>Sistema operativo móvil</li>
            <li>Muy portátiles</li>
          </ul>
        </div>
      </section>

      {/* Servidores */}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Servidores
        </h2>

        <p className="text-gray-700 mb-4">
          Son computadoras diseñadas para brindar servicios a otras
          computadoras dentro de una red. Se utilizan en empresas,
          centros de datos y servicios de internet.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <strong>Ejemplos de servicios:</strong>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Almacenamiento de archivos</li>
            <li>Hosting de páginas web</li>
            <li>Bases de datos</li>
          </ul>
        </div>
      </section>

      {/* Actividad */}

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Actividad práctica
        </h2>

        <div className="bg-gray-100 p-6 rounded-xl">
          <ol className="list-decimal ml-6 text-gray-700 space-y-2">
            <li>
              Escribí tres diferencias entre una computadora de escritorio
              y una laptop.
            </li>

            <li>
              Investigá qué tipo de computadora utilizan los servidores
              de internet.
            </li>

            <li>
              Identificá qué tipo de computadora usás habitualmente.
            </li>
          </ol>
        </div>
      </section>

    </div>
  )
}