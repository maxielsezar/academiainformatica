export default function FormatoCeldasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formato de Celdas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El formato de celdas permite modificar la apariencia y la forma en
          que se presentan los datos dentro de una planilla de cálculo.
          <br /><br />
          Aplicar correctamente el formato facilita la lectura de la
          información, permite destacar datos importantes y ayuda a presentar
          documentos administrativos de manera clara y profesional.
        </p>
      </section>

      {/* Qué es el formato de celdas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Formato de Celdas?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="leading-relaxed">
            El formato de una celda es el conjunto de características
            visuales y de presentación que se aplican a su contenido.
            <br /><br />
            El formato puede modificar aspectos como el tipo de número, la
            fuente, el tamaño del texto, la alineación, los bordes, el color
            de fondo y otras características.
            <br /><br />
            Es importante destacar que modificar el formato no necesariamente
            cambia el dato almacenado en la celda, sino principalmente la
            manera en que ese dato se muestra.
          </p>
        </div>
      </section>

      {/* Seleccionar celdas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seleccionar las Celdas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de aplicar un formato es necesario seleccionar la celda o
          conjunto de celdas sobre las que se desea trabajar.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Se puede seleccionar:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Una única celda.</li>
            <li>Varias celdas consecutivas.</li>
            <li>Una fila completa.</li>
            <li>Una columna completa.</li>
            <li>Un rango de celdas.</li>
            <li>Varias zonas de una hoja, según la herramienta utilizada.</li>
          </ul>
        </div>
      </section>

      {/* Fuente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fuente
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las herramientas de fuente permiten modificar la apariencia del
          texto contenido en las celdas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunas opciones son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Tipo de fuente.</li>
            <li>Tamaño de fuente.</li>
            <li>Negrita.</li>
            <li>Cursiva.</li>
            <li>Subrayado.</li>
            <li>Color de texto.</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Estas herramientas pueden utilizarse para diferenciar títulos,
            encabezados, subtítulos y datos importantes.
          </p>
        </div>
      </section>

      {/* Alineación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alineación
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La alineación permite determinar cómo se ubica el contenido dentro
          de una celda.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Alineación horizontal a la izquierda.</li>
            <li>Alineación horizontal centrada.</li>
            <li>Alineación horizontal a la derecha.</li>
            <li>Alineación vertical superior.</li>
            <li>Alineación vertical centrada.</li>
            <li>Alineación vertical inferior.</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Una correcta alineación permite organizar visualmente los datos y
            facilita su lectura.
          </p>
        </div>
      </section>

      {/* Ajuste de texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ajuste del Texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando el contenido de una celda es demasiado extenso, puede ser
          necesario ajustar el texto para que se muestre correctamente dentro
          de la celda.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            El ajuste de texto permite distribuir el contenido en varias
            líneas dentro de una misma celda.
            <br /><br />
            Esta herramienta resulta especialmente útil para encabezados y
            descripciones extensas.
          </p>
        </div>
      </section>

      {/* Bordes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Bordes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los bordes permiten delimitar visualmente las celdas y organizar
          mejor la información.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Se pueden utilizar para:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Separar columnas.</li>
            <li>Delimitar filas.</li>
            <li>Destacar encabezados.</li>
            <li>Crear tablas.</li>
            <li>Resaltar información importante.</li>
          </ul>
        </div>
      </section>

      {/* Relleno */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Color de Relleno
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El color de relleno permite modificar el fondo de una celda o
          conjunto de celdas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Puede utilizarse para destacar títulos, encabezados, totales o
            información que requiere especial atención.
            <br /><br />
            Es recomendable utilizar los colores de manera moderada para
            mantener una presentación clara y profesional.
          </p>
        </div>
      </section>

      {/* Formato numérico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato Numérico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato numérico determina cómo se muestran los valores
          almacenados en las celdas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunos formatos habituales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>General:</strong> utiliza una presentación estándar.</li>
            <li><strong>Número:</strong> permite mostrar cantidades numéricas.</li>
            <li><strong>Moneda:</strong> muestra valores económicos.</li>
            <li><strong>Porcentaje:</strong> muestra valores expresados como porcentajes.</li>
            <li><strong>Fecha:</strong> permite mostrar fechas con diferentes formatos.</li>
            <li><strong>Hora:</strong> permite mostrar horarios.</li>
            <li><strong>Texto:</strong> trata el contenido como texto.</li>
          </ul>
        </div>
      </section>

      {/* Moneda */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato Moneda
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato moneda permite presentar valores económicos de manera
          clara y uniforme.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p>
            Por ejemplo, un valor numérico como:
          </p>

          <p className="font-semibold mt-4">
            15000
          </p>

          <p className="mt-4">
            puede presentarse como un importe monetario:
          </p>

          <p className="font-semibold mt-4">
            $ 15.000
          </p>

          <p className="mt-6 leading-relaxed">
            El formato facilita la interpretación de los datos económicos en
            presupuestos, ventas, gastos y registros administrativos.
          </p>
        </div>
      </section>

      {/* Porcentaje */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato Porcentaje
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato porcentaje permite representar determinados valores como
          porcentajes.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p>
            Por ejemplo, un valor puede presentarse como:
          </p>

          <ul className="list-disc list-inside space-y-3 mt-4">
            <li>10%</li>
            <li>21%</li>
            <li>50%</li>
            <li>75%</li>
          </ul>

          <p className="mt-6">
            Es habitual utilizar este formato para descuentos, impuestos,
            comisiones y porcentajes de cumplimiento.
          </p>
        </div>
      </section>

      {/* Formato fecha */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de Fecha
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las fechas pueden presentarse utilizando diferentes formatos según
          las necesidades del documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Por ejemplo:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>24/09/2026</li>
            <li>24-09-2026</li>
            <li>24 de septiembre de 2026</li>
          </ul>
        </div>
      </section>

      {/* Copiar formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Copiar Formato
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Muchas aplicaciones permiten copiar únicamente el formato de una
          celda y aplicarlo a otras celdas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Esta herramienta permite mantener una apariencia uniforme sin
            tener que configurar nuevamente cada una de las características.
            <br /><br />
            Es especialmente útil cuando se trabaja con tablas extensas o
            documentos que contienen estructuras repetitivas.
          </p>
        </div>
      </section>

      {/* Formato de tablas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato Aplicado a Tablas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato de celdas permite mejorar la presentación de las tablas
          utilizadas para organizar información administrativa.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Una tabla puede incluir:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Títulos destacados.</li>
            <li>Encabezados diferenciados.</li>
            <li>Bordes.</li>
            <li>Alineación adecuada.</li>
            <li>Formatos numéricos.</li>
            <li>Formatos de fecha.</li>
            <li>Valores monetarios.</li>
            <li>Filas de totales destacadas.</li>
          </ul>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en Tareas Administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato de celdas es una herramienta importante para preparar
          documentos administrativos claros, ordenados y fáciles de
          interpretar.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Puede utilizarse para:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Preparar presupuestos.</li>
            <li>Organizar registros de ventas.</li>
            <li>Presentar informes.</li>
            <li>Controlar gastos.</li>
            <li>Registrar información de clientes.</li>
            <li>Organizar listas de productos.</li>
            <li>Preparar planillas de stock.</li>
            <li>Destacar resultados importantes.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar formatos coherentes en toda la planilla.</li>
          <li>Evitar utilizar demasiados colores.</li>
          <li>Destacar los encabezados de las tablas.</li>
          <li>Utilizar formatos numéricos adecuados.</li>
          <li>Mantener una alineación uniforme.</li>
          <li>Utilizar bordes para organizar la información.</li>
          <li>Evitar modificar el formato de manera innecesaria.</li>
          <li>Priorizar siempre la claridad y facilidad de lectura.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>
            Crear una tabla con información de diez productos. Aplicar
            diferentes formatos a los encabezados, datos y valores.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear una columna de precios y aplicar formato moneda.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Crear una columna de descuentos y aplicar formato porcentaje.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Crear una tabla de empleados. Aplicar diferentes formatos de
            fuente, alineación, bordes y colores de relleno.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Crear una planilla de gastos mensuales y aplicar un formato
            profesional que permita distinguir títulos, encabezados,
            importes y totales.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Imagina que trabajas como operador de informática en una oficina
          administrativa.

          <br /><br />

          Tu responsable te entrega una planilla con información de ventas
          y te solicita mejorar su presentación para poder entregarla a la
          dirección de la empresa.

          <br /><br />

          La planilla deberá contener:

          <br /><br />

          ✔ Título principal. <br />
          ✔ Encabezados claramente identificados. <br />
          ✔ Fechas correctamente formateadas. <br />
          ✔ Valores monetarios. <br />
          ✔ Porcentajes de descuento. <br />
          ✔ Bordes para organizar la tabla. <br />
          ✔ Alineación adecuada. <br />
          ✔ Una fila de totales destacada.

          <br /><br />

          Finalmente, deberás explicar qué decisiones tomaste al aplicar el
          formato y cómo estas decisiones mejoran la lectura y comprensión
          de la información.

        </div>
      </section>

    </div>
  );
}