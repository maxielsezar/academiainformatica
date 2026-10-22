
export default function TextosImagenesGraficosPage() {
  return (
    <div className="space-y-14">
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Textos, Imágenes y Gráficos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las presentaciones digitales permiten combinar textos, imágenes
          y gráficos para comunicar información de manera clara y visual.
          Estos elementos ayudan a explicar conceptos, destacar ideas
          importantes y presentar datos de forma organizada.
          <br /><br />
          Los editores de presentaciones incluyen herramientas para insertar
          cuadros de texto, modificar el formato de las letras, incorporar
          imágenes, crear formas y representar información mediante gráficos.
          <br /><br />
          En este tema aprenderás a utilizar estos recursos, modificar sus
          propiedades y organizarlos dentro de las diapositivas para elaborar
          presentaciones adecuadas a diferentes situaciones laborales.
        </p>
      </section>

      {/* Cuadros de texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cuadros de Texto
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          Los cuadros de texto permiten incorporar información escrita en
          una diapositiva. Pueden utilizarse para agregar títulos, subtítulos,
          explicaciones, listas, aclaraciones y conclusiones.
          <br /><br />
          Según la aplicación, es posible insertar cuadros de texto
          independientes o escribir directamente en los espacios reservados
          por el diseño de la diapositiva.
          <br /><br />

          <p className="font-semibold mb-3">
            Operaciones habituales:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Insertar un nuevo cuadro de texto.</li>
            <li>Escribir, corregir y eliminar contenido.</li>
            <li>Modificar el tamaño y el tipo de letra.</li>
            <li>Aplicar negrita, cursiva y subrayado.</li>
            <li>Cambiar el color del texto.</li>
            <li>Alinear párrafos y organizar listas.</li>
            <li>Mover y cambiar el tamaño del cuadro.</li>
          </ul>
        </div>
      </section>

      {/* Formato de texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato y Presentación del Texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato permite modificar la apariencia del texto para mejorar
          su legibilidad y destacar la información más importante.
          Las decisiones de formato deben facilitar la lectura y mantener
          una apariencia coherente en toda la presentación.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Tipo de letra:</strong> define la apariencia de los
              caracteres.
            </li>
            <li>
              <strong>Tamaño:</strong> determina las dimensiones de las letras
              y debe adaptarse a la distancia desde la que se leerá.
            </li>
            <li>
              <strong>Negrita:</strong> permite destacar títulos y conceptos
              importantes.
            </li>
            <li>
              <strong>Color:</strong> ayuda a diferenciar elementos, siempre
              que exista suficiente contraste con el fondo.
            </li>
            <li>
              <strong>Alineación:</strong> organiza el texto a la izquierda,
              a la derecha, centrado o justificado, según las opciones
              disponibles.
            </li>
            <li>
              <strong>Viñetas y numeración:</strong> permiten presentar
              enumeraciones y listas de manera ordenada.
            </li>
            <li>
              <strong>Espaciado:</strong> ayuda a separar líneas, párrafos
              y bloques de información.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            En una presentación conviene evitar los párrafos extensos.
            Es preferible resumir las ideas principales mediante frases
            breves y desarrollar los detalles durante la exposición oral.
          </p>
        </div>
      </section>

      {/* Imágenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Inserción de Imágenes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las imágenes permiten ilustrar ideas, mostrar situaciones,
          representar productos y complementar la información escrita.
          Pueden provenir de archivos almacenados en el equipo o de otras
          fuentes disponibles en la aplicación.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Pasos generales para insertar una imagen:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir la diapositiva donde se desea agregar la imagen.</li>
            <li>Acceder al menú o herramienta de inserción.</li>
            <li>Seleccionar la opción para insertar una imagen.</li>
            <li>Buscar y seleccionar el archivo correspondiente.</li>
            <li>Confirmar la inserción.</li>
            <li>Ajustar el tamaño y la ubicación dentro de la diapositiva.</li>
          </ol>

          <p className="mt-4 leading-relaxed">
            Los nombres exactos de los comandos pueden variar entre
            Microsoft PowerPoint, LibreOffice Impress y Presentaciones
            de Google, pero el procedimiento general es similar.
          </p>
        </div>
      </section>

      {/* Edición de imágenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Edición y Ajuste de Imágenes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Después de insertar una imagen, es posible modificar sus dimensiones
          y posición para integrarla al diseño. Algunas aplicaciones también
          permiten recortar la imagen, ajustar sus colores y aplicar efectos.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Cambiar el tamaño:</strong> permite ampliar o reducir
              la imagen para adaptarla al espacio disponible.
            </li>
            <li>
              <strong>Recortar:</strong> elimina partes de la imagen que
              no son necesarias para el propósito de la diapositiva.
            </li>
            <li>
              <strong>Mover:</strong> permite ubicar la imagen en el sector
              más adecuado.
            </li>
            <li>
              <strong>Girar:</strong> modifica la orientación del elemento.
            </li>
            <li>
              <strong>Alinear:</strong> permite ordenar la imagen respecto
              de otros objetos.
            </li>
            <li>
              <strong>Ordenar:</strong> permite cambiar su posición delante
              o detrás de otros elementos superpuestos.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Es recomendable conservar las proporciones originales al cambiar
            el tamaño, para evitar que las personas, los objetos o los
            logotipos aparezcan deformados.
          </p>
        </div>
      </section>

      {/* Selección de imágenes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Selección y Uso Responsable de Imágenes
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          No todas las imágenes son adecuadas para una presentación.
          Es importante elegir recursos que estén relacionados con el tema,
          tengan una calidad suficiente y puedan utilizarse legalmente.
          <br /><br />

          <p className="font-semibold mb-3">
            Recomendaciones:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Seleccionar imágenes relacionadas con el contenido.</li>
            <li>Evitar imágenes borrosas o de baja resolución.</li>
            <li>No deformar las proporciones originales.</li>
            <li>Evitar utilizar demasiadas imágenes en una misma diapositiva.</li>
            <li>Comprobar que la imagen se visualice correctamente.</li>
            <li>Respetar los derechos de autor y las condiciones de uso.</li>
            <li>Indicar la fuente cuando corresponda.</li>
          </ul>
        </div>
      </section>

      {/* Formas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formas y Elementos Gráficos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las formas son objetos gráficos que permiten destacar información,
          crear esquemas, señalar elementos y organizar visualmente una
          diapositiva. Se pueden combinar con textos e imágenes para explicar
          conceptos de manera sencilla.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunos elementos gráficos habituales:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Rectángulos y cuadrados:</strong> permiten crear
              recuadros, etiquetas y bloques de información.
            </li>
            <li>
              <strong>Círculos y óvalos:</strong> sirven para destacar
              elementos o representar conceptos.
            </li>
            <li>
              <strong>Líneas y flechas:</strong> muestran conexiones,
              recorridos o relaciones.
            </li>
            <li>
              <strong>Flechas de dirección:</strong> ayudan a explicar
              secuencias y procedimientos.
            </li>
            <li>
              <strong>Formas con texto:</strong> permiten combinar una figura
              con una explicación breve.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Las formas pueden modificarse mediante opciones de relleno,
            contorno, tamaño y posición. Es importante utilizarlas con
            moderación para que ayuden a comprender la información.
          </p>
        </div>
      </section>

      {/* Gráficos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Gráficos para Representar Información
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los gráficos permiten representar datos de manera visual y facilitan
          la comparación de cantidades, la identificación de diferencias
          y la observación de tendencias.
          Son especialmente útiles cuando una presentación incluye resultados,
          estadísticas o información numérica.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Gráfico de columnas:</strong> permite comparar valores
              entre diferentes categorías.
            </li>
            <li>
              <strong>Gráfico de barras:</strong> facilita la comparación
              de categorías, especialmente cuando sus nombres son extensos.
            </li>
            <li>
              <strong>Gráfico de líneas:</strong> permite observar cambios
              y tendencias a lo largo del tiempo.
            </li>
            <li>
              <strong>Gráfico circular:</strong> representa proporciones
              de un total cuando las categorías son apropiadas para este tipo
              de comparación.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            El tipo de gráfico debe elegirse según la información que se desea
            comunicar. No todos los gráficos son adecuados para cualquier
            conjunto de datos.
          </p>
        </div>
      </section>

      {/* Creación de gráficos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Creación y Modificación de Gráficos
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          Para crear un gráfico, generalmente se utiliza la herramienta
          de inserción de gráficos y se selecciona el tipo que mejor representa
          los datos.
          <br /><br />

          <p className="font-semibold mb-3">
            Procedimiento general:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar la diapositiva donde se incluirá el gráfico.</li>
            <li>Acceder a la opción para insertar un gráfico.</li>
            <li>Elegir el tipo de gráfico adecuado.</li>
            <li>Ingresar o modificar los datos que se representarán.</li>
            <li>Agregar un título descriptivo.</li>
            <li>Revisar las etiquetas, categorías y valores.</li>
            <li>Ajustar el tamaño y la posición del gráfico.</li>
          </ol>

          <p className="mt-4 leading-relaxed">
            Las opciones disponibles dependen del programa. Algunas
            aplicaciones permiten modificar los datos dentro del propio
            editor, mientras que otras ofrecen integración con planillas
            de cálculo.
          </p>
        </div>
      </section>

      {/* Ejemplo administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Aplicación Administrativa
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una oficina necesita presentar la cantidad de trámites recibidos
          durante tres meses. En lugar de mostrar solamente una lista de
          números, puede utilizar un gráfico de columnas para comparar
          los resultados.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Datos de ejemplo:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-blue-200 p-3">Mes</th>
                  <th className="border border-blue-200 p-3">
                    Trámites recibidos
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-200 p-3">Abril</td>
                  <td className="border border-blue-200 p-3">120</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">Mayo</td>
                  <td className="border border-blue-200 p-3">150</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">Junio</td>
                  <td className="border border-blue-200 p-3">135</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 leading-relaxed">
            Con estos datos se puede crear un gráfico de columnas cuyo título
            sea <strong>Trámites recibidos por mes</strong>. De esta forma,
            el público puede identificar rápidamente que mayo fue el mes
            con mayor cantidad de trámites.
          </p>
        </div>
      </section>

      {/* Organización de elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de Textos, Imágenes y Gráficos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Combinar diferentes elementos requiere cuidar la distribución
          y la relación entre ellos. Cada objeto debe cumplir una función
          y contribuir a comunicar el mensaje de la diapositiva.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Colocar títulos que expliquen el contenido.</li>
            <li>Ubicar las imágenes cerca del texto relacionado.</li>
            <li>Utilizar gráficos con títulos y etiquetas comprensibles.</li>
            <li>Mantener espacios suficientes entre los elementos.</li>
            <li>Evitar superposiciones que dificulten la lectura.</li>
            <li>Conservar una jerarquía visual clara.</li>
            <li>Revisar el resultado en modo presentación.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Resumir los textos y destacar las ideas principales.</li>
          <li>Utilizar fuentes legibles y tamaños adecuados.</li>
          <li>Seleccionar imágenes relacionadas con el tema.</li>
          <li>Conservar las proporciones al cambiar el tamaño de las imágenes.</li>
          <li>Utilizar gráficos que representen correctamente los datos.</li>
          <li>Comprobar los valores antes de presentar un gráfico.</li>
          <li>Mantener colores y estilos coherentes.</li>
          <li>Evitar llenar las diapositivas con demasiados elementos.</li>
          <li>Respetar los derechos de uso de los recursos visuales.</li>
        </ul>
      </section>

      {/* Actividades prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1: cuadros de texto
            </p>

            Creá una diapositiva sobre un servicio de una institución.
            Incorporá un título, un subtítulo y un cuadro de texto con una
            breve descripción. Modificá el tipo de letra, el tamaño, el color
            y la alineación para establecer una jerarquía visual.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2: inserción y edición de imágenes
            </p>

            Insertá una imagen relacionada con el servicio presentado.
            Cambiá su tamaño y posición, practicá el recorte si está disponible
            y comprobá que no se haya deformado. Indicá de dónde obtuviste
            la imagen y verificá sus condiciones de uso.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3: formas y esquemas
            </p>

            Creá una diapositiva que explique un procedimiento administrativo
            sencillo, por ejemplo, la recepción de una solicitud. Utilizá
            rectángulos para representar las etapas y flechas para indicar
            el orden en que se realizan.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4: creación de un gráfico
            </p>

            Utilizá los datos de trámites recibidos de abril, mayo y junio
            que aparecen en esta página. Insertá un gráfico de columnas,
            agregá un título y revisá que los meses y los valores sean
            correctos. Escribí una conclusión breve sobre los resultados.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5: combinación de recursos
            </p>

            Elaborá una diapositiva que combine un título, un texto breve,
            una imagen y un gráfico. Organizá los elementos para que se
            comprendan fácilmente y evitá que se superpongan. Mostrá el
            resultado a un compañero y pedile que identifique la idea
            principal que comunica.
          </div>
        </div>
      </section>

      {/* Desafío integrador */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 bg-blue-50 p-6 rounded-xl">
          <p className="leading-relaxed">
            Imaginá que trabajás en el área administrativa de una institución
            y debés preparar una presentación para comunicar los servicios
            disponibles y mostrar los resultados de las actividades realizadas
            durante el último trimestre.
          </p>

          <br />

          <p className="font-semibold">
            La presentación debe incluir:
          </p>

          <br />

          <ul className="list-disc list-inside space-y-3">
            <li>Una diapositiva con el título y los datos de la institución.</li>
            <li>Un cuadro de texto con la descripción de un servicio.</li>
            <li>Una imagen pertinente y correctamente proporcionada.</li>
            <li>Un esquema elaborado con formas y flechas.</li>
            <li>Un gráfico que represente datos de una actividad.</li>
            <li>Títulos claros y un diseño visual coherente.</li>
          </ul>

          <br />

          <p className="font-semibold">
            Al finalizar:
          </p>

          <br />

          <ul className="list-disc list-inside space-y-3">
            <li>Comprobá que los textos se puedan leer con facilidad.</li>
            <li>Verificá que los datos del gráfico sean correctos.</li>
            <li>Revisá la ubicación y el tamaño de las imágenes.</li>
            <li>Corregí los elementos desalineados o superpuestos.</li>
            <li>Guardá la presentación con un nombre descriptivo.</li>
          </ul>

          <br />

          <p className="leading-relaxed">
            Finalmente, explicá qué función cumple cada recurso utilizado
            y por qué elegiste esa forma de presentar la información.
          </p>
        </div>
      </section>
    </div>
  );
}
