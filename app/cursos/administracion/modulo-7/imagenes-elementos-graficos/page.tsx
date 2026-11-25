export default function ImagenesElementosGraficosPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Imágenes y elementos gráficos
        </h1>

        <p className="text-lg leading-relaxed ">
          Las imágenes y los elementos gráficos permiten complementar la
          información escrita, transmitir ideas y mejorar la presentación
          visual de una publicación. En informes, folletos, volantes y afiches,
          estos recursos ayudan a captar la atención y facilitan la comprensión
          del mensaje.
        </p>

        <p className="mt-4 leading-relaxed ">
          En esta clase aprenderemos a insertar, modificar y organizar
          imágenes, formas, íconos y otros recursos gráficos utilizando
          aplicaciones de diseño y edición.
        </p>
      </section>

      {/* Importancia de los recursos gráficos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          1. La importancia de las imágenes en una publicación
        </h2>

        <p className="mb-4 leading-relaxed ">
          Una imagen puede transmitir información de manera rápida y directa.
          Por eso, es importante seleccionar recursos visuales que tengan
          relación con el contenido y ayuden a comunicar el objetivo de la
          publicación.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-blue-200  p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Informar
            </h3>
            <p className="">
              Utilizar fotografías, ilustraciones o gráficos para explicar
              procedimientos, presentar productos o acompañar información.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200  p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Atraer la atención
            </h3>
            <p className="">
              Incorporar imágenes destacadas que permitan captar el interés
              del público y destacar el tema principal.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200  p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Organizar la información
            </h3>
            <p className="">
              Utilizar íconos, líneas y formas para separar secciones y
              facilitar la lectura.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200  p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Reforzar la identidad
            </h3>
            <p className="">
              Incorporar logotipos, colores institucionales y elementos
              visuales que identifiquen a una organización.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de imágenes */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          2. Tipos de imágenes y formatos
        </h2>

        <p className="mb-4 leading-relaxed ">
          Existen diferentes tipos de imágenes digitales. Conocer sus
          características permite elegir el formato adecuado según el uso
          que tendrá la publicación.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Imágenes de mapa de bits
        </h3>

        <p className="mb-4 leading-relaxed ">
          Están formadas por pequeños puntos llamados píxeles. Son utilizadas
          principalmente para fotografías e imágenes con muchos detalles y
          variaciones de color.
        </p>

        <ul className="mb-6 list-disc space-y-2 pl-6 ">
          <li>
            <strong>JPG o JPEG:</strong> formato muy utilizado para fotografías.
            Reduce el tamaño del archivo, aunque puede perder parte de la
            calidad original.
          </li>
          <li>
            <strong>PNG:</strong> permite conservar buena calidad y utilizar
            fondos transparentes. Es útil para logotipos e imágenes con
            elementos gráficos.
          </li>
          <li>
            <strong>GIF:</strong> admite animaciones sencillas y una cantidad
            limitada de colores. Se utiliza principalmente en contenidos
            digitales.
          </li>
        </ul>

        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Imágenes vectoriales
        </h3>

        <p className="mb-4 leading-relaxed ">
          Se construyen mediante líneas, curvas, puntos y formas definidas
          matemáticamente. A diferencia de las imágenes de mapa de bits,
          pueden ampliarse o reducirse sin perder nitidez.
        </p>

        <ul className="list-disc space-y-2 pl-6 ">
          <li>
            <strong>SVG:</strong> formato vectorial utilizado en logotipos,
            íconos e ilustraciones.
          </li>
          <li>
            <strong>PDF:</strong> permite conservar la presentación de un
            documento y puede contener elementos vectoriales e imágenes.
            Es muy utilizado para compartir publicaciones listas para imprimir.
          </li>
        </ul>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="border border-blue-200 p-3">Formato</th>
                <th className="border border-blue-200 p-3">Características</th>
                <th className="border border-blue-200 p-3">Uso habitual</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">JPG</td>
                <td className="border border-blue-200 p-3">
                  Comprime fotografías y puede perder calidad.
                </td>
                <td className="border border-blue-200 p-3">
                  Fotografías.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">PNG</td>
                <td className="border border-blue-200 p-3">
                  Conserva calidad y admite transparencia.
                </td>
                <td className="border border-blue-200 p-3">
                  Logotipos e imágenes gráficas.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">GIF</td>
                <td className="border border-blue-200 p-3">
                  Admite animaciones sencillas.
                </td>
                <td className="border border-blue-200 p-3">
                  Contenidos digitales.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">SVG</td>
                <td className="border border-blue-200 p-3">
                  Vectorial y escalable sin pérdida de nitidez.
                </td>
                <td className="border border-blue-200 p-3">
                  Íconos, logotipos e ilustraciones.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">PDF</td>
                <td className="border border-blue-200 p-3">
                  Conserva la presentación del documento.
                </td>
                <td className="border border-blue-200 p-3">
                  Documentos para compartir e imprimir.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Insertar imágenes */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          3. Insertar imágenes en una publicación
        </h2>

        <p className="mb-4 leading-relaxed ">
          Las aplicaciones de diseño permiten incorporar imágenes almacenadas
          en la computadora o disponibles en bibliotecas de recursos. El
          procedimiento puede variar según el programa, pero generalmente
          consiste en seleccionar la opción de insertar imagen y elegir el
          archivo correspondiente.
        </p>

        <div className="rounded-xl border border-blue-200  p-5">
          <h3 className="mb-3 font-bold text-blue-900">
            Procedimiento general
          </h3>

          <ol className="list-inside list-decimal space-y-2 ">
            <li>Abrir el documento o diseño en el que se trabajará.</li>
            <li>Ingresar al menú Insertar o a la herramienta de imágenes.</li>
            <li>Seleccionar la opción para cargar una imagen desde el equipo.</li>
            <li>Buscar y seleccionar el archivo deseado.</li>
            <li>Insertar la imagen y ubicarla dentro de la composición.</li>
            <li>Modificar su tamaño y posición según las necesidades.</li>
          </ol>
        </div>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-blue-900">
          Selección de imágenes adecuadas
        </h3>

        <p className="leading-relaxed ">
          Antes de insertar una imagen, debemos comprobar que tenga relación
          con el contenido, que sea clara y que su calidad resulte suficiente
          para el tamaño en el que se utilizará. Una imagen demasiado pequeña
          puede verse pixelada cuando se amplía.
        </p>
      </section>

      {/* Edición de imágenes */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          4. Edición y modificación de imágenes
        </h2>

        <p className="mb-4 leading-relaxed ">
          Una vez insertada una imagen, podemos modificar diferentes
          características para adaptarla al diseño de la publicación.
        </p>

        <div className="space-y-5">
          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Cambiar el tamaño
            </h3>
            <p className="leading-relaxed ">
              Permite ampliar o reducir una imagen. Es importante mantener
              sus proporciones para evitar que se vea estirada o deformada.
              Para ello, se deben utilizar los controladores de las esquinas
              o activar la opción de mantener relación de aspecto, según el
              programa utilizado.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Recortar
            </h3>
            <p className="leading-relaxed ">
              Permite eliminar partes de una imagen que no son necesarias,
              concentrando la atención en el elemento principal.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Girar y voltear
            </h3>
            <p className="leading-relaxed ">
              Permite cambiar la orientación de una imagen, girarla o invertirla
              horizontal o verticalmente.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Ajustar brillo, contraste y color
            </h3>
            <p className="leading-relaxed ">
              Permite mejorar la apariencia de una fotografía, modificar su
              iluminación y resaltar determinados detalles.
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-blue-900">
              Aplicar transparencia
            </h3>
            <p className="leading-relaxed ">
              Permite hacer que una imagen o forma sea parcialmente
              transparente para integrarla mejor con el fondo y otros
              elementos de la composición.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-amber-300 p-5">
          <h3 className="mb-2 font-bold text-amber-900">
            Recomendación importante
          </h3>
          <p className="">
            Evitá ampliar excesivamente imágenes pequeñas. Al hacerlo, los
            píxeles pueden hacerse visibles y la imagen pierde nitidez.
            Siempre que sea posible, utilizá una imagen original de buena
            resolución.
          </p>
        </div>
      </section>

      {/* Elementos gráficos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          5. Formas y elementos gráficos
        </h2>

        <p className="mb-4 leading-relaxed ">
          Además de las fotografías, las publicaciones pueden incorporar
          formas y elementos gráficos que ayudan a organizar y destacar la
          información.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Formas geométricas</h3>
            <p className="">
              Rectángulos, círculos, líneas, flechas y otras figuras que
              permiten crear recuadros, separadores y fondos.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Íconos</h3>
            <p className="">
              Representaciones visuales sencillas que comunican ideas o
              identifican información, como teléfono, ubicación, correo
              electrónico o calendario.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Logotipos</h3>
            <p className="">
              Elementos visuales que identifican a una institución, empresa,
              organización o emprendimiento.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Líneas y separadores</h3>
            <p className="">
              Se utilizan para dividir secciones, conectar información y
              ordenar los contenidos de una publicación.
            </p>
          </div>
        </div>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-blue-900">
          Modificar las formas
        </h3>

        <p className="mb-4 leading-relaxed ">
          Las aplicaciones permiten cambiar el aspecto de las formas mediante
          diferentes propiedades:
        </p>

        <ul className="list-disc space-y-2 pl-6 ">
          <li>Color de relleno.</li>
          <li>Color, grosor y estilo del contorno.</li>
          <li>Tamaño y orientación.</li>
          <li>Transparencia.</li>
          <li>Orden de ubicación delante o detrás de otros objetos.</li>
        </ul>
      </section>

      {/* Organización */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          6. Organización y composición de elementos
        </h2>

        <p className="mb-4 leading-relaxed ">
          Una publicación puede contener textos, fotografías, logotipos,
          formas e íconos. Para lograr un resultado ordenado, es necesario
          organizar correctamente todos estos elementos.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Posición y alineación
        </h3>

        <p className="mb-4 leading-relaxed ">
          Los elementos deben ubicarse de manera coherente. La alineación
          permite mantener un orden visual y facilita la lectura.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Agrupar elementos
        </h3>

        <p className="mb-4 leading-relaxed ">
          La agrupación permite seleccionar y mover varios objetos como si
          fueran uno solo. Por ejemplo, se puede agrupar un ícono con un texto
          explicativo para mantenerlos juntos al modificar el diseño.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Orden de los objetos
        </h3>

        <p className="mb-4 leading-relaxed ">
          Cuando varios elementos se superponen, podemos modificar cuál queda
          delante y cuál detrás. Esto permite crear fondos, recuadros y
          composiciones con diferentes niveles.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-blue-900">
          Equilibrio visual
        </h3>

        <p className="leading-relaxed ">
          Es importante distribuir los elementos de manera equilibrada,
          evitando concentrar demasiada información en una sola zona. También
          conviene dejar espacios libres para que la publicación resulte
          clara y fácil de leer.
        </p>
      </section>

      {/* Derechos de uso */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          7. Uso responsable de imágenes y recursos gráficos
        </h2>

        <p className="mb-4 leading-relaxed ">
          No todas las imágenes disponibles en Internet pueden utilizarse
          libremente. Muchas fotografías, ilustraciones y diseños están
          protegidos por derechos de autor.
        </p>

        <p className="mb-4 leading-relaxed ">
          Antes de incorporar un recurso a una publicación, es necesario
          verificar las condiciones de uso. Algunas imágenes requieren
          autorización, otras permiten su utilización con atribución al autor
          y algunas cuentan con licencias que habilitan determinados usos.
        </p>

        <div className="rounded-xl border border-blue-200  p-5">
          <h3 className="mb-3 font-bold text-blue-900">
            Buenas prácticas
          </h3>
          <ul className="list-disc space-y-2 pl-6 ">
            <li>Utilizar imágenes propias cuando sea posible.</li>
            <li>Consultar las licencias de los recursos descargados.</li>
            <li>Respetar las condiciones de atribución al autor.</li>
            <li>No eliminar marcas de autoría ni utilizar imágenes sin permiso.</li>
            <li>Guardar información sobre el origen de los recursos utilizados.</li>
          </ul>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          8. Aplicación en el ámbito laboral
        </h2>

        <p className="mb-4 leading-relaxed ">
          En tareas administrativas y de comunicación institucional, el uso
          de imágenes y elementos gráficos permite elaborar publicaciones más
          claras y profesionales.
        </p>

        <ul className="list-disc space-y-3 pl-6 ">
          <li>
            Incorporar el logotipo de una institución en informes y documentos.
          </li>
          <li>
            Crear recuadros e íconos para destacar información importante.
          </li>
          <li>
            Preparar publicaciones con fotografías de actividades institucionales.
          </li>
          <li>
            Diseñar materiales informativos para comunicar servicios y eventos.
          </li>
          <li>
            Organizar imágenes y textos para facilitar la comprensión de un
            documento.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          9. Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 1: Reconocimiento de formatos
            </h3>
            <p className="mb-3 ">
              Buscá en tu computadora cinco imágenes con diferentes formatos
              y registrá sus extensiones.
            </p>
            <ul className="list-disc space-y-1 pl-6 ">
              <li>Identificá cuáles son JPG, PNG, GIF o SVG.</li>
              <li>Indicá cuáles utilizarías para fotografías y cuáles para logotipos.</li>
              <li>Explicá qué ventajas tiene cada formato.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 2: Inserción y edición de imágenes
            </h3>
            <p className="mb-3 ">
              Abrí una aplicación de diseño e insertá tres imágenes relacionadas
              con una institución educativa.
            </p>
            <ul className="list-disc space-y-1 pl-6 ">
              <li>Modificá el tamaño de cada imagen manteniendo sus proporciones.</li>
              <li>Recortá una de ellas para destacar un elemento.</li>
              <li>Gir á una imagen y modificá su posición.</li>
              <li>Compará el resultado original con el modificado.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 3: Creación de elementos gráficos
            </h3>
            <p className="mb-3 ">
              Creá una composición que incluya diferentes formas e íconos.
            </p>
            <ul className="list-disc space-y-1 pl-6 ">
              <li>Insertá un rectángulo, un círculo y una flecha.</li>
              <li>Modificá los colores de relleno y contorno.</li>
              <li>Agregá tres íconos relacionados con una oficina.</li>
              <li>Organizá los elementos para que formen una composición ordenada.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 4: Organización de objetos
            </h3>
            <p className="mb-3 ">
              Elaborá una composición con un logotipo, una imagen, un título y
              una forma de fondo.
            </p>
            <ul className="list-disc space-y-1 pl-6 ">
              <li>Modificá el orden de los objetos para que algunos queden delante y otros detrás.</li>
              <li>Alineá los elementos.</li>
              <li>Agrupá el logotipo con el texto que lo identifica.</li>
              <li>Mové el grupo y comprobá que sus elementos permanezcan juntos.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Actividad 5: Selección responsable de imágenes
            </h3>
            <p className="mb-3 ">
              Buscá tres imágenes que podrían utilizarse en una publicación
              institucional.
            </p>
            <ul className="list-disc space-y-1 pl-6 ">
              <li>Registrá el sitio de donde obtuviste cada imagen.</li>
              <li>Investigá si cuentan con condiciones de uso o licencia.</li>
              <li>Indicá si pueden utilizarse libremente o si requieren autorización.</li>
              <li>Seleccioná una imagen adecuada para una publicación impresa.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Integradora */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          10. Actividad integradora: Composición gráfica institucional
        </h2>

        <div className="rounded-xl border border-blue-300  p-6">
          <p className="mb-4 leading-relaxed ">
            Una institución necesita preparar una composición gráfica para
            acompañar la difusión de sus actividades. El objetivo es crear
            una pieza visual que combine imágenes, textos y elementos gráficos
            de manera clara y ordenada.
          </p>

          <h3 className="mb-3 font-bold text-blue-900">
            Consigna
          </h3>

          <p className="mb-4 ">
            Utilizando una aplicación de diseño, elaborá una composición
            institucional que incluya:
          </p>

          <ul className="mb-5 list-disc space-y-2 pl-6 ">
            <li>Un logotipo o identificación institucional.</li>
            <li>Dos imágenes relacionadas con la actividad.</li>
            <li>Un título y un texto breve.</li>
            <li>Al menos tres elementos gráficos, como formas, líneas o íconos.</li>
            <li>Una combinación de colores coherente.</li>
            <li>Una distribución ordenada de todos los elementos.</li>
          </ul>

          <h3 className="mb-3 font-bold text-blue-900">
            Requisitos técnicos
          </h3>

          <ul className="mb-5 list-disc space-y-2 pl-6 ">
            <li>Configurar una página en tamaño A4.</li>
            <li>Mantener las proporciones de las imágenes.</li>
            <li>Utilizar recursos gráficos de buena calidad.</li>
            <li>Alinear y agrupar los elementos cuando corresponda.</li>
            <li>Guardar el archivo editable y exportar una versión en PDF.</li>
          </ul>

          <h3 className="mb-3 font-bold text-blue-900">
            Criterios de evaluación
          </h3>

          <ul className="list-disc space-y-2 pl-6 ">
            <li>Selección adecuada de imágenes y recursos gráficos.</li>
            <li>Correcta modificación del tamaño y recorte de imágenes.</li>
            <li>Uso apropiado de formas, íconos y logotipos.</li>
            <li>Organización, alineación y equilibrio visual.</li>
            <li>Respeto por las condiciones de uso de los recursos.</li>
            <li>Presentación final y correcta exportación del archivo.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section className="rounded-xl border border-blue-200  p-6">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          Para recordar
        </h2>

        <p className="leading-relaxed ">
          Las imágenes y los elementos gráficos cumplen una función importante
          en la comunicación visual. Aprender a seleccionarlos, editarlos y
          organizarlos permite crear publicaciones más atractivas, claras y
          profesionales. La calidad de los recursos, su correcta ubicación y
          el respeto por los derechos de uso son aspectos fundamentales en
          cualquier trabajo de diseño.
        </p>
      </section>

    </div>
  );
}
