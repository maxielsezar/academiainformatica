export default function TiposComputadorasPage() {
  return (
    <div className="space-y-14 ">

      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Tipos de Computadoras
      </h1>

      <p className=" mb-6">
        Las computadoras existen en diferentes formatos y tamaños dependiendo
        del uso que se les da. Algunas están diseñadas para uso personal,
        otras para empresas, educación o tareas específicas.
      </p>

      {/* Computadora de Escritorio */}

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Computadora de escritorio (Desktop)
        </h2>

        <p className=" mb-4">
          Son las computadoras tradicionales utilizadas en oficinas,
          hogares y escuelas. Están compuestas por varios componentes
          separados como monitor, gabinete, teclado y mouse.
        </p>

        <div className=" border-l-4 border-blue-500 p-4 rounded">
          <strong>Características:</strong>
          <ul className="list-disc ml-6 mt-2 ">
            <li>Mayor potencia que muchas laptops</li>
            <li>Permiten actualizar componentes fácilmente</li>
            <li>Ideales para trabajo prolongado</li>
          </ul>
        </div>
      </section>

      {/* Laptop */}

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Laptop o Notebook
        </h2>

        <p className=" mb-4">
          Son computadoras portátiles que integran todos los componentes
          en un solo equipo: pantalla, teclado, batería y hardware interno.
        </p>

        <div className="border-l-4 border-green-500 p-4 rounded">
          <strong>Ventajas:</strong>
          <ul className="list-disc ml-6 mt-2 ">
            <li>Portabilidad</li>
            <li>Funcionan con batería</li>
            <li>Ideales para estudio o trabajo móvil</li>
          </ul>
        </div>
      </section>

      {/* Tablets */}

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Tablets
        </h2>

        <p className=" mb-4">
          Son dispositivos portátiles con pantalla táctil. Se utilizan
          principalmente para navegación web, lectura, entretenimiento
          y aplicaciones móviles.
        </p>

        <div className="border-l-4 border-purple-500 p-4 rounded">
          <strong>Características:</strong>
          <ul className="list-disc ml-6 mt-2 ">
            <li>Pantalla táctil</li>
            <li>Sistema operativo móvil</li>
            <li>Muy portátiles</li>
          </ul>
        </div>
      </section>

      {/* Servidores */}

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Servidores
        </h2>

        <p className=" mb-4">
          Son computadoras diseñadas para brindar servicios a otras
          computadoras dentro de una red. Se utilizan en empresas,
          centros de datos y servicios de internet.
        </p>

        <div className=" border-l-4 border-yellow-500 p-4 rounded">
          <strong>Ejemplos de servicios:</strong>
          <ul className="list-disc ml-6 mt-2 ">
            <li>Almacenamiento de archivos</li>
            <li>Hosting de páginas web</li>
            <li>Bases de datos</li>
          </ul>
        </div>
      </section>

      {/* Actividad */}

      <section className="mt-10 mb-6">
        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
             Escribí tres diferencias entre una computadora de escritorio
              y una laptop.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Investigá qué tipo de computadora utilizan los servidores
              de internet.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificá qué tipo de computadora usás habitualmente.
          </div>

        </div>
      </section>

    </div>
  )
}