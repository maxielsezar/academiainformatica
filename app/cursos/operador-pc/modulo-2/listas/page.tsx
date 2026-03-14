export default function ListasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Listas y Viñetas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las listas permiten organizar información de forma clara y ordenada.
          En Microsoft Word se pueden crear listas con viñetas, listas numeradas
          o listas con varios niveles para estructurar mejor el contenido de un
          documento.
        </p>
      </section>

      {/* Listas con viñetas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Listas con Viñetas
        </h2>

        <p className="mb-4 max-w-3xl">
          Las viñetas se utilizan cuando los elementos de una lista no necesitan
          seguir un orden específico.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">Ejemplo de lista con viñetas:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Teclado</li>
            <li>Mouse</li>
            <li>Monitor</li>
            <li>Impresora</li>
          </ul>
        </div>
      </section>

      {/* Listas numeradas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Listas Numeradas
        </h2>

        <p className="mb-4 max-w-3xl">
          Las listas numeradas se utilizan cuando los elementos deben seguir un
          orden específico, como pasos o instrucciones.
        </p>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">Ejemplo de lista numerada:</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>Abrir Microsoft Word.</li>
            <li>Crear un documento nuevo.</li>
            <li>Escribir el contenido.</li>
            <li>Guardar el documento.</li>
          </ol>
        </div>
      </section>

      {/* Listas multinivel */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Listas Multinivel
        </h2>

        <p className="mb-4 max-w-3xl">
          Las listas multinivel permiten crear subniveles dentro de una lista.
          Se utilizan para organizar información en diferentes categorías.
        </p>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Hardware
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Teclado</li>
                <li>Mouse</li>
                <li>Monitor</li>
              </ul>
            </li>
            <li>
              Software
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Sistema operativo</li>
                <li>Procesador de texto</li>
                <li>Navegador web</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* Cómo crear listas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Crear una Lista en Word
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar el texto que se desea convertir en lista.</li>
            <li>Ir a la pestaña <strong>Inicio</strong>.</li>
            <li>Elegir el botón de <strong>Viñetas</strong> o <strong>Numeración</strong>.</li>
            <li>Seleccionar el estilo de lista deseado.</li>
          </ol>
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
            Crea una lista con viñetas con cinco elementos de hardware.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribe una lista numerada con los pasos para encender una computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea una lista multinivel con categorías y subcategorías.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Cambia el estilo de viñetas de una lista existente.
          </div>

        </div>
      </section>

    </div>
  );
}