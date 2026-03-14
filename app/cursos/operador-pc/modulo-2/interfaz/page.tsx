export default function InterfazProcesadorTextoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Interfaz del Procesador de Texto (Word)
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La interfaz es el conjunto de elementos visuales que permiten
          interactuar con un programa. En un procesador de texto como
          Microsoft Word, la interfaz contiene herramientas que permiten
          escribir, editar y dar formato a los documentos de manera sencilla.
        </p>
      </section>

      {/* Componentes principales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de la Interfaz
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li><strong>Barra de título:</strong> muestra el nombre del documento y del programa.</li>
          <li><strong>Barra de herramientas de acceso rápido:</strong> contiene accesos a funciones como guardar o deshacer.</li>
          <li><strong>Cinta de opciones:</strong> organiza las herramientas en pestañas como Inicio, Insertar y Diseño.</li>
          <li><strong>Área de trabajo:</strong> espacio donde se escribe y edita el documento.</li>
          <li><strong>Reglas:</strong> ayudan a alinear texto e imágenes.</li>
          <li><strong>Barra de estado:</strong> muestra información del documento como número de páginas o palabras.</li>
        </ul>
      </section>

      {/* Cinta de opciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Cinta de Opciones
        </h2>

        <p className="mb-4 max-w-3xl">
          La cinta de opciones es uno de los elementos más importantes de
          Microsoft Word. Allí se encuentran organizadas todas las herramientas
          necesarias para trabajar con el documento.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Pestañas más utilizadas:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li><strong>Inicio:</strong> herramientas básicas de formato de texto.</li>
            <li><strong>Insertar:</strong> permite agregar imágenes, tablas y otros elementos.</li>
            <li><strong>Diseño:</strong> opciones para el estilo del documento.</li>
            <li><strong>Disposición:</strong> configuración de márgenes y orientación de página.</li>
            <li><strong>Revisar:</strong> herramientas de ortografía y comentarios.</li>
          </ul>
        </div>
      </section>

      {/* Área de trabajo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Área de Trabajo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El área de trabajo es la parte central del programa donde se
          visualiza el documento. En esta sección se escribe el texto,
          se insertan imágenes, tablas y se aplican distintos formatos
          al contenido.
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
            Abre Microsoft Word e identifica en la pantalla los
            elementos principales de la interfaz.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribe el nombre de tres pestañas que aparecen en
            la cinta de opciones y explica para qué sirve cada una.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea un documento nuevo y escribe un párrafo corto
            para familiarizarte con el área de trabajo.
          </div>

        </div>
      </section>

    </div>
  );
}