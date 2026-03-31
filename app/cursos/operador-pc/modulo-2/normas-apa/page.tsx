export default function NormasAPATrabajoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Trabajo Práctico: Aplicación de las Normas APA
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El estilo APA (American Psychological Association) es uno de los
          formatos más utilizados para la presentación de trabajos académicos.
          Permite organizar la información de forma clara, ordenada y
          profesional.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este trabajo práctico deberás crear un documento académico
          utilizando las normas APA y desarrollar un contenido relacionado con
          los conceptos de <strong>hardware</strong> y <strong>software</strong>,
          incluyendo imágenes que acompañen la explicación.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo del Trabajo
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            El objetivo de esta actividad es aprender a estructurar un trabajo
            académico aplicando correctamente las normas APA y comprender la
            relación entre el hardware y el software en los sistemas
            informáticos.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Aplicar formato académico según normas APA.</li>
            <li>Organizar un documento utilizando títulos y subtítulos.</li>
            <li>Insertar imágenes y figuras correctamente.</li>
            <li>Explicar conceptos de hardware y software.</li>
          </ul>
        </div>
      </section>

      {/* Carátula */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Creación de la Carátula
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            La carátula es la primera página del trabajo y debe contener los
            siguientes elementos:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Número de página en la esquina superior derecha.</li>
            <li>Título del trabajo centrado y en negrita. (3–4 líneas debajo del borde superior).</li>
            <li>Nombre del estudiante.</li>
            <li>Nombre de la institución.</li>
            <li>Nombre del curso.</li>
            <li>Nombre del profesor.</li>
            <li>Fecha de entrega.</li>
          </ul>
        </div>
      </section>

      {/* Formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato General del Documento
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Elemento</th>
                <th className="p-3 font-semibold">Configuración</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">Fuente</td>
                <td className="p-3">
                  Times New Roman 12, Calibri 11 o Arial 11
                </td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Márgenes</td>
                <td className="p-3">2.54 cm en todos los lados</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Sangria</td>
                <td className="p-3">Primera línea de cada párrafo con sangría de 1.27 cm.</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Interlineado</td>
                <td className="p-3">Doble espacio</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Alineación</td>
                <td className="p-3">Texto alineado a la izquierda</td>
              </tr>
              <tr>
                <td className="p-3">Encabezado</td>
                <td className="p-3">Número de página, en la esquina superior derecha de cada hoja, incluida la carátula.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Encabezados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Niveles de Titulos en APA
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Nivel 1: Centrado y en negrita.</li>
            <li>Nivel 2: Alineado a la izquierda y en negrita.</li>
            <li>Nivel 3: Alineado a la izquierda, negrita y cursiva.</li>
            <li>Nivel 4: Alineado a la izquierda, negrita con punto final.</li>
            <li>Nivel 5: Alineado a la izquierda, negrita, cursiva y punto final.</li>
          </ul>
        </div>
      </section>

      {/* Tablas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Creación de Tablas con Formato APA
        </h2>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Cada tabla debe llevar un título en la parte superior, siguiendo las normas APA.</li>
            <li>Las tablas deben estar numeradas en orden de aparición (Tabla 1, Tabla 2, etc.).</li>
            <li>Incluir una nota debajo de la tabla si es necesario para aclarar términos técnicos.</li>
            <li>Mantener un diseño claro, simple y legible.</li>
          </ul>
        </div>
        <h2 className="text-2xl font-bold text-blue-800 mb-6 mt-6">
            Ejemplo de Tabla en Formato APA        
          </h2>
          <h3>Tabla 1</h3>
          
        <div className="border rounded-xl overflow-hidden max-w-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Categoría</th>
                <th className="p-3 font-semibold">Opción A</th>
                <th className="p-3 font-semibold">Opción B</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">Característica 1</td>
                <td className="p-3">Valor A1</td>
                <td className="p-3">Valor B1</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Característica 2</td>
                <td className="p-3">Valor A2</td>
                <td className="p-3">Valor B2</td>
              </tr>
              <tr className="">
                <td className="p-3">Característica 3</td>
                <td className="p-3">Valor A3</td>
                <td className="p-3">Valor B3</td>
              </tr>

            </tbody>
          </table>
        </div>
          <p>Nota. Este es un ejemplo de tabla en formato APA.</p>
      </section>

      {/* Imágenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Inserción de Imágenes y Figuras
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            En las normas APA las imágenes se consideran <strong>figuras</strong>.
          </p>

          <ol className="list-disc list-inside space-y-2">
            <li><strong>número de la figura:</strong> (por ejemplo, Figura 1) es el primer item que debemos agregar. Se debe usar negrita. Numere las figuras en el orden en que aparecen en tu documento.</li>
            <li><strong>título:</strong> debe aparece una línea debajo del número de la figura. Dé a cada figura un título breve pero descriptivo. Utilice cursiva en el título.</li>
            <li><strong>imagen:</strong> inserte el gráfico, fotografía, dibujo u otra ilustración.</li>
            <li><strong>leyenda:</strong> debe colocarse dentro de los bordes de la figura y puede ser usada para explicar los símbolos utilizados en la imagen de la figura. (Ejemplo de leyenda: “los puntos cuadrados representan ganancias y los puntos redondos pérdidas”).</li>
            <li><strong>nota:</strong> Agregue cualquier contenido que necesites describir que no pueden entenderse solo por el título o por la imagen por si misma (por ejemplo, definiciones de abreviaturas, atribución de derechos de autor). Incluya notas de figuras solo según sea necesario.</li>
          </ol>
        </div>
      </section>
      {/* Referencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Referencias
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
         Al final del trabajo, en una página nueva, se deben incluir <strong>todas</strong> las fuentes citadas en el texto. </p>

          <ol className="list-disc list-inside space-y-2">
            <li>El título debe ser <strong>Referencias</strong>, centrado y en negrita.</li>
            <li>Las entradas deben ir en orden alfabético por apellido del autor.</li>
            <li>Cada referencia debe llevar sangría francesa</li>
          </ol>
        </div>
      </section>
{/* Actividades */}
<section>
  <h2 className="text-2xl font-bold text-blue-800 mb-6">
    Actividades Prácticas
  </h2>

  <div className="space-y-6">

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 1</p>
      Crear la carátula del documento utilizando las normas APA.
      La carátula debe incluir el título del trabajo, nombre del
      estudiante, institución, curso, profesor y fecha.
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 2</p>
      Crear una tabla de contenido automática utilizando la
      herramienta de Word. Para ello deberás utilizar los estilos
      de <strong>Título 1</strong> y <strong>Título 2</strong> en las
      secciones del documento.
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 3</p>
      Crear una sección titulada <strong>Hardware</strong> donde
      expliques qué es el hardware y cuál es su función dentro
      de una computadora.
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 4</p>
      Dentro de la sección de hardware, crear una sección que incluya
      <strong> componentes internos</strong> de la computadora.
      La sección debe contener el nombre del componente y una breve
      descripción de su función. Ademas incluir una tabla de comparación de CPU (AMD e Intel)  y otra tabla de comparación entre discos SSD y HDD
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 5</p>
      Crear una sección de <strong>periféricos de entrada</strong>.
      Cada elemento debe incluir una breve descripción.
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 6</p>
      Crear una sección de <strong>periféricos de salida</strong>.
      Cada dispositivo debe incluir una breve descripción.
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 7</p>
      Crear una nueva sección titulada <strong>Software</strong>.
      Explicar qué es el software y cuál es su función dentro
      de un sistema informático.
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 8</p>
      Crear una sección con ejemplos de <strong>sistemas operativos </strong>
      e incluir una breve descripción de cada uno.

    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 9</p>
      Crear una sección con ejemplos de <strong>procesadores de texto </strong>
    y explicar para qué se utilizan.
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 10</p>
      Insertar imágenes representativas de los componentes de hardware
      y de los programas de software explicados en el documento.
      Las imágenes deben colocarse como <strong>figuras </strong>
       siguiendo el formato de las normas APA.
    </div>

    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 11</p>
      Escribir una conclusión final donde expliques la relación
      entre hardware y software y por qué ambos son necesarios
      para el funcionamiento de una computadora.
    </div>
    <div className="border p-6 rounded-xl">
      <p className="font-semibold mb-2">Actividad 12</p>
      Incluir una tabla de contenido en la hoja siguente a la caratula
    </div>

  </div>
</section>

    </div>
  );
}