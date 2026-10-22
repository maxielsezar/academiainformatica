
export default function DisenoDiapositivasPage() {
  return (
    <div className="space-y-14">
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diseño y Estructura de Diapositivas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El diseño de las diapositivas es fundamental para comunicar
          información de manera clara, ordenada y atractiva. Una buena
          presentación no consiste solamente en incorporar textos e imágenes,
          sino también en organizar los elementos para facilitar su lectura
          y comprensión.
          <br /><br />
          Los editores de presentaciones ofrecen herramientas para modificar
          el tamaño de las diapositivas, seleccionar diseños predeterminados,
          configurar fondos, organizar objetos y mantener una apariencia
          uniforme en todo el documento.
          <br /><br />
          En este tema aprenderás a estructurar una presentación, elegir
          diseños adecuados y distribuir la información según el objetivo
          de la exposición.
        </p>
      </section>

      {/* Estructura de una presentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Estructura de una Presentación
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          Una presentación debe organizarse siguiendo una secuencia lógica
          que permita comprender el tema desde su introducción hasta sus
          conclusiones.
          <br /><br />
          Antes de diseñar las diapositivas, es conveniente definir qué
          información se desea comunicar y en qué orden se presentará.
          <br /><br />
          Una estructura habitual puede incluir:
          <ul className="list-disc list-inside space-y-3 mt-4">
            <li>
              <strong>Portada:</strong> presenta el título del trabajo,
              el autor, la institución y la fecha, cuando corresponda.
            </li>
            <li>
              <strong>Introducción:</strong> explica el tema y el objetivo
              de la presentación.
            </li>
            <li>
              <strong>Desarrollo:</strong> organiza las ideas principales,
              los datos, los ejemplos y las explicaciones.
            </li>
            <li>
              <strong>Conclusión:</strong> resume los resultados o las ideas
              más importantes.
            </li>
            <li>
              <strong>Cierre:</strong> puede incluir agradecimientos,
              información de contacto o fuentes consultadas.
            </li>
          </ul>
        </div>
      </section>

      {/* Diseños predeterminados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diseños Predeterminados de Diapositivas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los diseños predeterminados permiten distribuir el contenido
          utilizando espacios reservados para títulos, textos, imágenes
          y otros elementos. Su uso facilita la organización y ayuda
          a mantener una estructura coherente.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Diapositiva de título:</strong> se utiliza para la
              portada y destaca el nombre de la presentación.
            </li>
            <li>
              <strong>Título y contenido:</strong> permite incorporar un
              encabezado y un área principal para desarrollar una idea.
            </li>
            <li>
              <strong>Dos contenidos:</strong> divide el espacio para
              comparar información o mostrar dos grupos de elementos.
            </li>
            <li>
              <strong>Comparación:</strong> permite presentar dos elementos
              junto con sus respectivos títulos y descripciones, cuando
              la aplicación ofrece este diseño.
            </li>
            <li>
              <strong>Solo título:</strong> deja el resto de la diapositiva
              disponible para distribuir los objetos manualmente.
            </li>
            <li>
              <strong>En blanco:</strong> permite construir la composición
              desde cero, sin espacios reservados.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            La elección del diseño depende del contenido. Por ejemplo,
            para presentar los objetivos de un proyecto puede utilizarse
            un diseño con título y lista; para comparar dos propuestas,
            puede ser más conveniente una distribución en dos columnas.
          </p>
        </div>
      </section>

      {/* Tamaño y orientación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tamaño y Orientación de las Diapositivas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El tamaño de la diapositiva determina las proporciones del espacio
          donde se organizará el contenido. Debe elegirse teniendo en cuenta
          el dispositivo o medio en el que se mostrará la presentación.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Aspectos que se deben considerar:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Formato panorámico:</strong> suele utilizarse en
              pantallas actuales, proyectores y monitores.
            </li>
            <li>
              <strong>Formato tradicional:</strong> puede ser necesario
              para equipos o materiales preparados con proporciones anteriores.
            </li>
            <li>
              <strong>Orientación horizontal:</strong> es habitual en
              presentaciones proyectadas.
            </li>
            <li>
              <strong>Orientación vertical:</strong> puede resultar útil
              para diseños destinados a pantallas verticales o determinados
              materiales gráficos, según las posibilidades del programa.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Es recomendable definir el tamaño antes de avanzar demasiado
            en el diseño, ya que cambiar las proporciones puede afectar
            la ubicación y el tamaño de los objetos.
          </p>
        </div>
      </section>

      {/* Organización visual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización Visual del Contenido
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La organización visual permite identificar rápidamente qué
          información es más importante y cómo se relacionan los elementos
          de una diapositiva.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Principios básicos de organización:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Jerarquía:</strong> destacar los títulos y las ideas
              principales por encima de los detalles secundarios.
            </li>
            <li>
              <strong>Alineación:</strong> ubicar los elementos siguiendo
              referencias comunes para mantener el orden.
            </li>
            <li>
              <strong>Distribución:</strong> repartir el contenido para
              evitar sectores demasiado cargados o vacíos sin propósito.
            </li>
            <li>
              <strong>Proximidad:</strong> agrupar los elementos relacionados
              para que se interpreten como parte de una misma idea.
            </li>
            <li>
              <strong>Contraste:</strong> diferenciar textos y fondos para
              facilitar la lectura.
            </li>
            <li>
              <strong>Consistencia:</strong> utilizar criterios de diseño
              similares a lo largo de toda la presentación.
            </li>
          </ul>
        </div>
      </section>

      {/* Fondos y colores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fondos, Colores y Rellenos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El fondo es la superficie sobre la que se ubican los textos,
          imágenes y demás objetos. Su elección influye en la apariencia
          general y en la facilidad con la que se puede leer el contenido.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Opciones habituales de diseño:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Color sólido:</strong> utiliza un único color como
              fondo de la diapositiva.
            </li>
            <li>
              <strong>Degradado:</strong> combina dos o más colores mediante
              una transición gradual.
            </li>
            <li>
              <strong>Imagen de fondo:</strong> utiliza una fotografía
              o ilustración como parte del diseño.
            </li>
            <li>
              <strong>Tramas y texturas:</strong> agregan patrones visuales
              cuando la aplicación dispone de estas opciones.
            </li>
            <li>
              <strong>Relleno de formas:</strong> permite aplicar colores
              u otros rellenos a objetos insertados en la diapositiva.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Para una presentación administrativa conviene utilizar fondos
            que no compitan con la información. Los textos deben conservar
            un contraste suficiente y los colores deben emplearse con
            un criterio consistente.
          </p>
        </div>
      </section>

      {/* Tipografía y texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipografía y Legibilidad
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          La tipografía comprende las características visuales de las letras,
          como su familia, tamaño, grosor y estilo. Una elección adecuada
          facilita la lectura desde la distancia y ayuda a organizar
          la información.
          <br /><br />

          <p className="font-semibold mb-3">
            Recomendaciones:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar fuentes fáciles de leer.</li>
            <li>Destacar los títulos respecto del texto secundario.</li>
            <li>Evitar mezclar demasiadas familias tipográficas.</li>
            <li>Utilizar negrita para resaltar conceptos importantes.</li>
            <li>Evitar párrafos demasiado extensos.</li>
            <li>Comprobar la legibilidad en el tamaño de pantalla previsto.</li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Una diapositiva no debe funcionar como una página de un documento
            extenso. Es preferible resumir las ideas principales y desarrollar
            las explicaciones oralmente o mediante notas de apoyo.
          </p>
        </div>
      </section>

      {/* Alineación y distribución */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alineación, Tamaño y Posición de los Objetos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los editores de presentaciones permiten modificar la posición
          y el tamaño de los objetos para distribuirlos de manera ordenada.
          Algunas aplicaciones incluyen herramientas para alinear y distribuir
          varios elementos al mismo tiempo.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Alinear:</strong> ubicar varios objetos respecto
              de un borde o de sus centros.
            </li>
            <li>
              <strong>Distribuir:</strong> mantener espacios regulares entre
              diferentes objetos.
            </li>
            <li>
              <strong>Agrupar:</strong> unir varios elementos para moverlos
              o modificarlos como conjunto.
            </li>
            <li>
              <strong>Ordenar:</strong> colocar un objeto delante o detrás
              de otro cuando se superponen.
            </li>
            <li>
              <strong>Redimensionar:</strong> cambiar las dimensiones
              conservando, cuando corresponda, las proporciones originales.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Estas herramientas son especialmente útiles cuando una diapositiva
            contiene logotipos, imágenes, títulos y otros elementos que deben
            mantener una disposición equilibrada.
          </p>
        </div>
      </section>

      {/* Consistencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uniformidad y Consistencia del Diseño
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          Una presentación uniforme utiliza criterios visuales similares
          en todas sus diapositivas. Esto facilita reconocer que el contenido
          pertenece al mismo trabajo y evita cambios de estilo innecesarios.
          <br /><br />

          <p className="font-semibold mb-3">
            Para mantener la consistencia se recomienda:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Utilizar una paleta de colores limitada.</li>
            <li>Mantener estilos similares para los títulos.</li>
            <li>Repetir criterios de alineación y márgenes.</li>
            <li>Ubicar los logotipos de manera coherente.</li>
            <li>Usar diseños compatibles con el objetivo de la presentación.</li>
            <li>Evitar cambiar de fondo y tipografía sin una razón clara.</li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Cuando el programa dispone de temas o patrones de diapositivas,
            estas funciones pueden ayudar a aplicar un mismo estilo a todo
            el documento.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El Diseño en las Tareas Administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En el ámbito administrativo, una presentación puede utilizarse
          para comunicar resultados, explicar procedimientos, presentar
          servicios o compartir propuestas de mejora.
          <br /><br />
          El diseño debe responder al propósito del trabajo y al público
          destinatario. No requiere adornos excesivos: necesita una estructura
          clara y una distribución que permita comprender los datos.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplo: presentación de un informe mensual
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              Diapositiva 1: título del informe, área responsable y fecha.
            </li>
            <li>
              Diapositiva 2: objetivos y período analizado.
            </li>
            <li>
              Diapositiva 3: principales actividades realizadas.
            </li>
            <li>
              Diapositiva 4: resultados presentados mediante un gráfico.
            </li>
            <li>
              Diapositiva 5: dificultades y oportunidades de mejora.
            </li>
            <li>
              Diapositiva 6: conclusiones y próximos pasos.
            </li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas de Diseño
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Definir el objetivo antes de comenzar a diseñar.</li>
          <li>Organizar el contenido antes de crear las diapositivas.</li>
          <li>Utilizar un diseño adecuado para cada tipo de información.</li>
          <li>Evitar sobrecargar las diapositivas con textos extensos.</li>
          <li>Elegir colores que permitan leer el contenido con claridad.</li>
          <li>Mantener una apariencia uniforme en toda la presentación.</li>
          <li>Utilizar imágenes relacionadas con el tema.</li>
          <li>Revisar la alineación y distribución de los objetos.</li>
          <li>Comprobar el resultado en modo presentación.</li>
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
              Actividad 1: estructura de una presentación
            </p>

            Creá una presentación de cinco diapositivas sobre un tema
            relacionado con la informática. Organizá el contenido en portada,
            introducción, desarrollo, ejemplos y conclusión. Escribí qué
            información incluirías en cada una.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2: elección de diseños
            </p>

            Creá tres diapositivas utilizando diferentes diseños
            predeterminados: título y contenido, dos contenidos y diapositiva
            en blanco. Explicá en qué situación sería conveniente utilizar
            cada uno.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3: fondos y colores
            </p>

            Diseñá dos diapositivas sobre el mismo tema. Utilizá un fondo
            claro en la primera y uno oscuro en la segunda. Ajustá los colores
            del texto para que se pueda leer correctamente. Compará ambos
            resultados y justificá cuál elegirías.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4: organización de objetos
            </p>

            Insertá un título, una imagen y tres formas en una diapositiva.
            Practicá las herramientas de alineación, distribución, agrupación
            y cambio de tamaño, cuando estén disponibles. Procurá que los
            elementos queden ordenados y no se superpongan innecesariamente.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5: diseño administrativo
            </p>

            Elaborá una portada y dos diapositivas para un informe mensual
            de una oficina. Incluí el título del informe, el área responsable,
            la fecha y un resumen de actividades. Mantené los mismos colores,
            estilos de títulos y criterios de alineación.
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
            Imaginá que trabajás en el área administrativa de una institución.
            Tu responsable te solicita preparar una presentación para una
            reunión en la que se comunicarán las actividades realizadas,
            los resultados obtenidos y las propuestas para el próximo período.
          </p>

          <br />

          <p className="font-semibold">
            Diseñá una presentación que cumpla con las siguientes condiciones:
          </p>

          <br />

          <ul className="list-disc list-inside space-y-3">
            <li>Incluir una portada con el título y la fecha.</li>
            <li>Organizar el contenido en una secuencia lógica.</li>
            <li>Utilizar diseños adecuados para cada diapositiva.</li>
            <li>Aplicar una combinación coherente de colores y tipografías.</li>
            <li>Incorporar al menos una imagen y una forma.</li>
            <li>Alinear y distribuir los elementos para facilitar la lectura.</li>
            <li>Crear una diapositiva final con conclusiones y propuestas.</li>
          </ul>

          <br />

          <p className="leading-relaxed">
            Al finalizar, reproducí la presentación y revisá cada diapositiva.
            Comprobá que los textos sean legibles, que los elementos estén
            ordenados y que el diseño mantenga una apariencia uniforme.
            Guardá el archivo con un nombre descriptivo y explicá qué
            decisiones de diseño tomaste para mejorar la comunicación.
          </p>
        </div>
      </section>
    </div>
  );
}
