export default function IntroduccionProcesadorTextoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción al Procesador de Texto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un procesador de texto es un programa informático que permite crear,
          editar y dar formato a documentos digitales. Es una de las herramientas
          más utilizadas en la computadora para escribir cartas, informes,
          trabajos escolares y documentos profesionales.
        </p>
      </section>

      {/* Qué permite hacer */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué permite hacer un procesador de texto?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Escribir y editar documentos.</li>
          <li>Modificar el tamaño, tipo y color de la letra.</li>
          <li>Insertar imágenes y tablas.</li>
          <li>Organizar el texto en párrafos.</li>
          <li>Guardar documentos para usarlos más tarde.</li>
          <li>Imprimir documentos.</li>
        </ul>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Procesadores de Texto
        </h2>

        <p className="mb-4 max-w-3xl">
          Existen distintos programas que funcionan como procesadores de texto.
          Algunos de los más utilizados son:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Microsoft Word</li>
          <li>LibreOffice Writer</li>
          <li>Google Docs</li>
        </ul>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Usos del Procesador de Texto
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Los procesadores de texto se utilizan en muchas situaciones:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Crear cartas.</li>
            <li>Redactar informes.</li>
            <li>Realizar trabajos escolares.</li>
            <li>Elaborar currículums.</li>
            <li>Diseñar documentos profesionales.</li>
          </ul>
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
            Explica con tus palabras qué es un procesador de texto y para qué se utiliza.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Investiga qué procesador de texto tiene instalada tu computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Escribe tres ejemplos de documentos que se pueden crear con un procesador de texto.
          </div>

        </div>
      </section>

    </div>
  );
}