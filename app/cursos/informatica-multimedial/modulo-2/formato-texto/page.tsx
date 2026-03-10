export default function FormatoTextoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formato de Texto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El formato de texto permite cambiar la apariencia del contenido
          de un documento. En Microsoft Word se pueden modificar distintos
          aspectos como el tipo de letra, el tamaño, el color y los estilos
          del texto para mejorar la presentación y facilitar la lectura.
        </p>
      </section>

      {/* Tipo de letra */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipo de Letra (Fuente)
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            La fuente define el estilo de las letras que se utilizan en el
            documento.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Arial</li>
            <li>Calibri</li>
            <li>Times New Roman</li>
            <li>Verdana</li>
          </ul>

          <p className="mt-4">
            Elegir una fuente adecuada ayuda a que el documento sea más claro
            y profesional.
          </p>
        </div>
      </section>

      {/* Tamaño de letra */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tamaño de Letra
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El tamaño de letra determina qué tan grande o pequeño se verá el
          texto. Se mide en puntos (pt).
        </p>

        <div className="border p-6 rounded-xl mt-4">
          <ul className="list-disc list-inside space-y-2">
            <li>10–12 pt → tamaño común para párrafos.</li>
            <li>14–18 pt → subtítulos.</li>
            <li>20 pt o más → títulos principales.</li>
          </ul>
        </div>
      </section>

      {/* Estilos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estilos de Texto
        </h2>

        <p className="mb-4 max-w-3xl">
          Los estilos permiten destacar partes importantes del documento.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Negrita</strong> → resalta palabras importantes.</li>
            <li><em>Cursiva</em> → se usa para títulos o citas.</li>
            <li><u>Subrayado</u> → destaca información relevante.</li>
          </ul>
        </div>
      </section>

      {/* Color */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Color de Texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Word permite cambiar el color de las letras para resaltar títulos,
          destacar conceptos importantes o mejorar la presentación visual
          del documento.
        </p>

        <div className="border p-6 rounded-xl mt-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Negro → uso general en documentos.</li>
            <li>Azul → títulos o encabezados.</li>
            <li>Rojo → advertencias o información importante.</li>
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
            Escribe un título y cambia el tipo de letra del texto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Cambia el tamaño del título a 20 puntos y el del párrafo a 12 puntos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Aplica negrita a una palabra importante del texto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Cambia el color de un título para destacarlo.
          </div>

        </div>
      </section>

    </div>
  );
}