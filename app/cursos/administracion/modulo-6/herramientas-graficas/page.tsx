export default function HerramientasGraficasPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Herramientas de Dibujo y Recursos Gráficos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las herramientas de dibujo y los recursos gráficos permiten crear,
          modificar y organizar elementos visuales dentro de una presentación.
          Mediante líneas, formas, flechas, diagramas, iconos e imágenes es
          posible representar procesos, destacar información y comunicar
          conceptos de manera clara y ordenada.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos?
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="mb-4">
            Al finalizar este tema, podrás:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Reconocer las herramientas de dibujo de un editor de presentaciones.</li>
            <li>Insertar y modificar formas, líneas, flechas y conectores.</li>
            <li>Personalizar colores, bordes, rellenos y tamaños.</li>
            <li>Organizar y alinear objetos dentro de una diapositiva.</li>
            <li>Incorporar imágenes, iconos y recursos gráficos.</li>
            <li>Crear diagramas sencillos para representar información y procesos.</li>
          </ul>
        </div>
      </section>

      {/* Herramientas de dibujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. Herramientas de dibujo
        </h2>

        <p className="leading-relaxed mb-4">
          Los editores de presentaciones incluyen herramientas que permiten
          dibujar elementos directamente sobre las diapositivas. Estas
          herramientas sirven para señalar información, establecer relaciones
          y construir representaciones visuales.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Líneas y conectores
            </h3>

            <p className="leading-relaxed">
              Permiten unir objetos, marcar recorridos y mostrar relaciones
              entre diferentes elementos. Las flechas también indican
              direcciones o secuencias.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Formas geométricas
            </h3>

            <p className="leading-relaxed">
              Incluyen rectángulos, cuadrados, círculos, óvalos y otras
              figuras que pueden utilizarse para encerrar conceptos,
              destacar datos o diseñar esquemas.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Flechas y símbolos
            </h3>

            <p className="leading-relaxed">
              Facilitan la representación de movimientos, decisiones,
              relaciones y pasos de un procedimiento.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Dibujo libre
            </h3>

            <p className="leading-relaxed">
              Permite trazar líneas y formas personalizadas mediante el
              mouse, un lápiz digital u otro dispositivo compatible.
              Puede utilizarse para realizar anotaciones o esquemas simples.
            </p>
          </div>
        </div>
      </section>

      {/* Insertar formas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Insertar y modificar formas
        </h2>

        <p className="leading-relaxed mb-4">
          Las formas se pueden insertar desde las herramientas de dibujo
          del programa. Una vez agregadas, es posible cambiar su tamaño,
          posición, color, contorno y otras propiedades.
        </p>

        <div className="border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Procedimiento general
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Abrí una presentación y seleccioná la diapositiva en la que
              trabajarás.
            </li>
            <li>
              Ingresá en el menú de inserción y buscá la opción
              <strong> Formas</strong> o la herramienta equivalente.
            </li>
            <li>
              Seleccioná la figura que necesitás.
            </li>
            <li>
              Hacé clic y arrastrá sobre la diapositiva para dibujarla.
            </li>
            <li>
              Modificá su tamaño y ubicación utilizando los controladores
              de selección.
            </li>
            <li>
              Configurá el relleno, el contorno y otros atributos disponibles.
            </li>
            <li>
              Si la forma admite texto, agregá una etiqueta breve y clara.
            </li>
          </ol>

          <p className="leading-relaxed mt-4">
            Las opciones y los nombres de las herramientas pueden variar
            entre Microsoft PowerPoint, LibreOffice Impress y otros
            editores de presentaciones.
          </p>
        </div>
      </section>

      {/* Personalización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Personalización de los elementos gráficos
        </h2>

        <p className="leading-relaxed mb-4">
          Los elementos gráficos pueden adaptarse al diseño de la presentación
          para mantener una apariencia uniforme. Es importante seleccionar
          colores y tamaños que permitan reconocer los elementos sin
          sobrecargar las diapositivas.
        </p>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Relleno
            </h3>

            <p className="leading-relaxed">
              Permite cambiar el color interior de una forma o utilizar
              otros tipos de relleno, como degradados, texturas o imágenes,
              cuando el programa lo permite.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Contorno
            </h3>

            <p className="leading-relaxed">
              Define el borde de una figura. Se pueden modificar el color,
              el grosor y, según la aplicación, el tipo de línea.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Tamaño y posición
            </h3>

            <p className="leading-relaxed">
              Permiten ajustar las dimensiones y ubicar los objetos en
              el lugar adecuado. Mantener proporciones y alineaciones
              ayuda a lograr un diseño ordenado.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Efectos visuales
            </h3>

            <p className="leading-relaxed">
              Algunas aplicaciones permiten aplicar sombras, transparencias
              y otros efectos. Conviene utilizarlos de manera moderada para
              que no dificulten la lectura.
            </p>
          </div>
        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Organización y alineación de objetos
        </h2>

        <p className="leading-relaxed mb-4">
          Cuando una diapositiva contiene varios elementos, es necesario
          organizarlos para que la información sea fácil de interpretar.
          Las herramientas de alineación y distribución permiten mantener
          distancias regulares y una composición equilibrada.
        </p>

        <div className="border border-blue-200 rounded-xl p-6 space-y-4">
          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Alinear
            </h3>
            <p className="leading-relaxed">
              Permite ubicar dos o más objetos respecto de un borde o
              de sus centros, por ejemplo, alinearlos a la izquierda,
              a la derecha o al centro.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Distribuir
            </h3>
            <p className="leading-relaxed">
              Ayuda a mantener espacios iguales entre varios elementos
              horizontales o verticales.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Agrupar y desagrupar
            </h3>
            <p className="leading-relaxed">
              Permite tratar varios objetos como una unidad para moverlos
              o cambiar su tamaño en conjunto. Al desagruparlos, vuelven
              a editarse individualmente.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Orden de superposición
            </h3>
            <p className="leading-relaxed">
              Determina qué objeto queda delante o detrás de otro. Esta
              opción es útil cuando se combinan formas, imágenes y textos.
            </p>
          </div>
        </div>
      </section>

      {/* Recursos gráficos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Imágenes, iconos y clip-arts
        </h2>

        <p className="leading-relaxed mb-4">
          Además de dibujar formas, es posible incorporar recursos gráficos
          creados previamente. Estos elementos ayudan a representar ideas
          y a complementar la información escrita.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Imágenes
            </h3>

            <p className="text-sm leading-relaxed">
              Fotografías o ilustraciones que muestran objetos, situaciones,
              personas, productos o espacios relacionados con el tema.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Iconos
            </h3>

            <p className="text-sm leading-relaxed">
              Símbolos visuales sencillos que representan acciones,
              servicios, herramientas o conceptos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Clip-arts e ilustraciones
            </h3>

            <p className="text-sm leading-relaxed">
              Recursos gráficos prediseñados que pueden utilizarse para
              acompañar explicaciones y esquemas.
            </p>
          </div>
        </div>

        <div className="border border-blue-200 rounded-xl p-6 mt-4">
          <h3 className="font-bold text-blue-900 mb-3">
            Adaptar una imagen
          </h3>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Insertá la imagen desde un archivo o recurso disponible.</li>
            <li>Ajustá su tamaño para que se adapte a la diapositiva.</li>
            <li>Recortá las zonas que no sean necesarias, si corresponde.</li>
            <li>Ubicala cerca del texto o concepto que representa.</li>
            <li>Comprobá que conserve una buena calidad y proporción.</li>
            <li>Verificá los permisos de uso y mencioná la fuente cuando corresponda.</li>
          </ol>
        </div>
      </section>

      {/* Diagramas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Crear diagramas y esquemas
        </h2>

        <p className="leading-relaxed mb-4">
          Los diagramas permiten representar procesos, jerarquías y relaciones
          entre conceptos. Son útiles cuando se necesita explicar una secuencia
          de tareas o mostrar cómo se organiza una institución.
        </p>

        <div className="border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplo: circuito de recepción de documentación
          </h3>

          <div className="flex flex-col items-center gap-3">
            <div className="w-full max-w-xs rounded-lg border-2 border-blue-500  p-3 text-center font-semibold text-blue-900">
              Recepción del documento
            </div>

            <div className="text-blue-700 text-2xl" aria-hidden="true">
              ↓
            </div>

            <div className="w-full max-w-xs rounded-lg border-2 border-blue-500  p-3 text-center font-semibold text-blue-900">
              Verificación de datos
            </div>

            <div className="text-blue-700 text-2xl" aria-hidden="true">
              ↓
            </div>

            <div className="w-full max-w-xs rounded-lg border-2 border-blue-500  p-3 text-center font-semibold text-blue-900">
              Registro en el sistema
            </div>

            <div className="text-blue-700 text-2xl" aria-hidden="true">
              ↓
            </div>

            <div className="w-full max-w-xs rounded-lg border-2 border-blue-500  p-3 text-center font-semibold text-blue-900">
              Archivo y seguimiento
            </div>
          </div>

          <p className="text-sm leading-relaxed mt-5">
            Este esquema representa una secuencia de trabajo. En el editor
            de presentaciones se puede construir utilizando rectángulos,
            conectores y flechas.
          </p>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Aplicación en el ámbito administrativo
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo: presentación de la estructura de una oficina
          </h3>

          <p className="leading-relaxed mb-4">
            Una institución necesita explicar cómo se distribuyen las tareas
            entre sus áreas. Para hacerlo, se puede elaborar una diapositiva
            con un diagrama organizativo.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Utilizar rectángulos para identificar cada área.
            </li>
            <li>
              Incorporar líneas para mostrar las relaciones entre sectores.
            </li>
            <li>
              Diferenciar los niveles mediante colores institucionales.
            </li>
            <li>
              Agregar iconos que representen funciones o servicios.
            </li>
            <li>
              Mantener textos breves y un tamaño de letra legible.
            </li>
          </ul>

          <p className="leading-relaxed mt-4">
            El resultado permite comprender la organización de la oficina
            de forma visual, sin necesidad de leer una descripción extensa.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Buenas prácticas
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Utilizar formas y símbolos que sean fáciles de reconocer.
            </li>
            <li>
              Mantener una paleta de colores coherente en toda la presentación.
            </li>
            <li>
              Evitar agregar demasiados objetos en una misma diapositiva.
            </li>
            <li>
              Alinear y distribuir los elementos para lograr una composición ordenada.
            </li>
            <li>
              Usar imágenes de buena calidad y relacionadas con el contenido.
            </li>
            <li>
              Comprobar que los textos dentro de las formas puedan leerse.
            </li>
            <li>
              Agrupar los objetos que deban desplazarse como una unidad.
            </li>
            <li>
              Respetar los derechos de autor de las imágenes y recursos utilizados.
            </li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: explorar las herramientas
            </h3>

            <p className="leading-relaxed">
              Abrí un editor de presentaciones y creá una diapositiva de
              prueba. Insertá un rectángulo, un círculo, una flecha, una
              línea y una forma con texto. Cambiá sus colores y tamaños.
              Identificá qué herramienta utilizaste para cada elemento.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: diseñar un esquema
            </h3>

            <p className="leading-relaxed">
              Elaborá un diagrama con los pasos para organizar una carpeta
              de documentación administrativa. Utilizá formas para representar
              cada tarea y flechas para indicar el orden. Asegurate de que
              el procedimiento pueda comprenderse sin explicaciones adicionales.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: personalizar elementos
            </h3>

            <p className="leading-relaxed">
              Creá una diapositiva sobre los servicios de una institución.
              Incorporá cuatro formas con títulos breves. Aplicá colores,
              contornos y tamaños coherentes, y alineá los elementos para
              que queden ordenados.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: incorporar recursos gráficos
            </h3>

            <p className="leading-relaxed">
              Diseñá una diapositiva sobre atención al público. Insertá al
              menos dos imágenes o iconos, ajustá su tamaño y agregá un texto
              explicativo. Revisá que los recursos sean pertinentes y que
              no dificulten la lectura.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: mejorar una diapositiva
            </h3>

            <p className="leading-relaxed">
              Seleccioná una diapositiva que contenga varios elementos.
              Revisá la alineación, la distribución, los colores y el orden
              de superposición. Agrupá los objetos relacionados y realizá
              los cambios necesarios para mejorar la presentación visual.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Actividad integradora
        </h2>

        <div className="border border-blue-300 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-blue-900">
            Diseñar un procedimiento administrativo con recursos gráficos
          </h3>

          <p className="leading-relaxed">
            Elaborá una presentación de entre cinco y siete diapositivas
            para explicar un procedimiento administrativo. Podés elegir
            la recepción de documentos, la gestión de turnos, el archivo
            de expedientes o la atención de consultas.
          </p>

          <h3 className="font-bold text-blue-900">
            Requisitos del trabajo
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Crear una portada con el título del procedimiento.</li>
            <li>Explicar el objetivo y los pasos principales.</li>
            <li>Diseñar un diagrama con formas, líneas y conectores.</li>
            <li>Incorporar al menos dos imágenes, iconos o ilustraciones.</li>
            <li>Personalizar rellenos, contornos y colores.</li>
            <li>Utilizar herramientas de alineación y distribución.</li>
            <li>Finalizar con recomendaciones o conclusiones.</li>
          </ul>

          <h3 className="font-bold text-blue-900">
            Criterios de evaluación
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Uso adecuado de las herramientas de dibujo.</li>
            <li>Claridad del diagrama y de las relaciones representadas.</li>
            <li>Correcta organización y alineación de los objetos.</li>
            <li>Coherencia entre las imágenes y la información presentada.</li>
            <li>Legibilidad, orden y uniformidad visual.</li>
          </ul>

          <p className="leading-relaxed">
            Presentá el trabajo al grupo y explicá cómo los recursos gráficos
            permiten comprender el procedimiento de forma más rápida y sencilla.
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section className=" border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Las herramientas de dibujo y los recursos gráficos permiten
          transformar información escrita en representaciones visuales.
          El uso de formas, conectores, imágenes y diagramas facilita
          la explicación de procedimientos y relaciones, siempre que
          los elementos estén organizados y sean fáciles de interpretar.
        </p>

        <p className="leading-relaxed mt-4">
          En el próximo tema aprenderemos a preparar, revisar y distribuir
          una presentación para compartirla con otras personas.
        </p>
      </section>
    </div>
  );
}
