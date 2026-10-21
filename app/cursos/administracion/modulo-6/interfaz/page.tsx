
export default function InterfazPresentacionesPage() {
  return (
    <div className="space-y-14">
      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Interfaz y Herramientas del Editor de Presentaciones
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La interfaz de un editor de presentaciones está formada por
          diferentes elementos que permiten crear, organizar, modificar y
          visualizar diapositivas.
          <br /><br />
          Conocer la ubicación y función de cada herramienta facilita el
          trabajo y permite diseñar presentaciones de manera más eficiente.
          <br /><br />
          Existen diferentes aplicaciones para crear presentaciones digitales,
          como Microsoft PowerPoint, LibreOffice Impress y Presentaciones de
          Google. Aunque su apariencia puede variar, muchas de sus herramientas
          y funciones son similares.
        </p>
      </section>

      {/* Ventana principal */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Ventana Principal
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          La ventana principal es el espacio donde se desarrolla el trabajo
          con la presentación.
          <br /><br />
          Desde ella se pueden crear diapositivas, incorporar textos e imágenes,
          modificar el diseño, aplicar efectos y reproducir el resultado.
          <br /><br />
          La distribución exacta de los elementos depende del programa
          utilizado, pero generalmente incluye una barra de herramientas,
          un panel de diapositivas y un área central de edición.
        </div>
      </section>

      {/* Elementos de la interfaz */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principales Elementos de la Interfaz
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para trabajar correctamente es importante reconocer los elementos
          que permiten acceder a las funciones del programa y modificar
          el contenido de cada diapositiva.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Barra de título:</strong> muestra el nombre del archivo
              y, según la aplicación, información sobre el documento abierto.
            </li>

            <li>
              <strong>Menú o cinta de opciones:</strong> reúne las herramientas
              para insertar elementos, modificar el diseño, aplicar efectos
              y configurar la presentación.
            </li>

            <li>
              <strong>Barra de herramientas de acceso rápido:</strong> permite
              acceder a funciones frecuentes, como guardar o deshacer cambios,
              cuando la aplicación dispone de ella.
            </li>

            <li>
              <strong>Panel de diapositivas:</strong> muestra las diapositivas
              en miniatura y permite seleccionarlas, duplicarlas, eliminarlas
              y cambiar su orden.
            </li>

            <li>
              <strong>Área de trabajo:</strong> es el espacio central donde
              se diseña y modifica la diapositiva seleccionada.
            </li>

            <li>
              <strong>Panel de formato:</strong> permite modificar propiedades
              de los objetos seleccionados, como el tamaño, el color,
              la alineación o el tipo de letra.
            </li>

            <li>
              <strong>Notas del orador:</strong> permiten agregar recordatorios
              o explicaciones para acompañar una exposición, si la aplicación
              ofrece esta función.
            </li>

            <li>
              <strong>Barra de estado:</strong> muestra información del
              documento y puede incluir controles de vista y zoom.
            </li>

            <li>
              <strong>Controles de zoom:</strong> permiten ampliar o reducir
              la visualización de la diapositiva sin modificar necesariamente
              su tamaño real.
            </li>
          </ul>
        </div>
      </section>

      {/* Panel de diapositivas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El Panel de Diapositivas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El panel de diapositivas presenta una vista en miniatura de cada
          diapositiva que forma parte de la presentación. Desde este espacio
          se puede administrar la secuencia del contenido.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Operaciones habituales:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Seleccionar una diapositiva para editarla.</li>
            <li>Insertar una nueva diapositiva.</li>
            <li>Duplicar una diapositiva existente.</li>
            <li>Eliminar diapositivas que ya no se necesitan.</li>
            <li>Modificar el orden arrastrando las miniaturas.</li>
            <li>Aplicar diseños diferentes a cada diapositiva.</li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Por ejemplo, una presentación administrativa puede comenzar con
            una portada, continuar con los objetivos, presentar los resultados
            y finalizar con las conclusiones.
          </p>
        </div>
      </section>

      {/* Área de trabajo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El Área de Trabajo
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          El área de trabajo es el espacio donde se construye visualmente
          cada diapositiva. Allí se agregan y organizan los diferentes
          elementos que forman parte de la presentación.
          <br /><br />
          Es posible insertar cuadros de texto, imágenes, formas, gráficos
          y otros recursos. Cada objeto puede seleccionarse para modificar
          sus propiedades y su ubicación.
          <br /><br />
          Es importante distinguir entre el área de edición y la presentación
          en pantalla completa: la primera se utiliza para trabajar y la
          segunda permite observar cómo verá el contenido el público.
        </div>
      </section>

      {/* Diapositivas y diseños */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diseños y Distribución de las Diapositivas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los diseños predeterminados permiten organizar los elementos de
          una diapositiva de acuerdo con el tipo de información que se desea
          comunicar.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunos diseños habituales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Diapositiva de título:</strong> se utiliza para presentar
              el nombre del trabajo y sus autores.
            </li>

            <li>
              <strong>Título y contenido:</strong> permite incluir un título
              y un espacio para texto, imágenes u otros elementos.
            </li>

            <li>
              <strong>Dos contenidos:</strong> facilita comparar información
              o distribuir elementos en dos sectores.
            </li>

            <li>
              <strong>Solo título:</strong> permite diseñar libremente el
              resto de la diapositiva.
            </li>

            <li>
              <strong>En blanco:</strong> ofrece un espacio sin marcadores
              predeterminados para organizar los elementos manualmente.
            </li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Elegir un diseño apropiado ayuda a mantener el orden y facilita
            la lectura de la información.
          </p>
        </div>
      </section>

      {/* Selección y edición de objetos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Selección y Edición de Objetos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los elementos incorporados en una diapositiva se denominan objetos.
          Cada uno puede seleccionarse y modificarse para adaptarlo al diseño
          de la presentación.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Acciones básicas con los objetos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Seleccionar un objeto haciendo clic sobre él.</li>
            <li>Moverlo para cambiar su ubicación.</li>
            <li>Modificar su tamaño mediante los controladores.</li>
            <li>Copiarlo, cortarlo y pegarlo.</li>
            <li>Eliminarlo cuando ya no sea necesario.</li>
            <li>Cambiar sus colores, bordes y otras propiedades.</li>
            <li>Organizar su posición respecto de otros objetos.</li>
          </ul>

          <p className="mt-4 leading-relaxed">
            Antes de modificar un elemento es importante comprobar que esté
            seleccionado el objeto correcto para evitar cambios accidentales.
          </p>
        </div>
      </section>

      {/* Herramientas básicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas Básicas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los editores de presentaciones incluyen herramientas para administrar
          el archivo, organizar el contenido y preparar su visualización.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Crear, abrir y guardar presentaciones.</li>
            <li>Insertar y eliminar diapositivas.</li>
            <li>Seleccionar y cambiar el orden de las diapositivas.</li>
            <li>Insertar cuadros de texto.</li>
            <li>Incorporar imágenes, formas y gráficos.</li>
            <li>Modificar el diseño y el fondo.</li>
            <li>Aplicar formato a los textos.</li>
            <li>Deshacer y rehacer operaciones.</li>
            <li>Utilizar las opciones de vista y zoom.</li>
            <li>Reproducir la presentación para comprobar su resultado.</li>
          </ul>
        </div>
      </section>

      {/* Guardado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardado y Organización del Archivo
        </h2>

        <div className="border border-blue-200 p-6 rounded-xl">
          Las presentaciones deben guardarse para conservar el trabajo
          realizado y permitir su edición posterior.
          <br /><br />
          Al guardar un archivo por primera vez, generalmente se debe elegir
          un nombre, una ubicación y un formato. El formato de presentación
          editable permite continuar modificando el contenido.
          <br /><br />
          Algunas aplicaciones también permiten exportar el trabajo a PDF
          para facilitar su distribución o impresión.
          <br /><br />
          Se recomienda utilizar nombres descriptivos, guardar los archivos
          en carpetas organizadas y conservar copias de seguridad cuando
          el documento sea importante.
        </div>
      </section>

      {/* Interfaz en administración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Interfaz en las Tareas Administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una oficina, las presentaciones digitales pueden utilizarse
          para comunicar resultados, explicar procedimientos, presentar
          proyectos y compartir información con compañeros o responsables.
          <br /><br />
          Conocer la interfaz permite trabajar con mayor rapidez, mantener
          organizado el material y preparar presentaciones adecuadas para
          cada situación.
        </p>

        <div className="border border-blue-200 p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunas situaciones habituales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Crear una portada para un informe de gestión.</li>
            <li>Organizar los temas de una reunión.</li>
            <li>Insertar gráficos con resultados de una actividad.</li>
            <li>Agregar imágenes para explicar un procedimiento.</li>
            <li>Reordenar diapositivas para mejorar la exposición.</li>
            <li>Guardar una versión editable y exportar una copia en PDF.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Identificar las herramientas antes de comenzar a trabajar.</li>
          <li>Guardar periódicamente los cambios realizados.</li>
          <li>Utilizar nombres claros para los archivos.</li>
          <li>Mantener las diapositivas ordenadas.</li>
          <li>Elegir diseños adecuados al contenido.</li>
          <li>Comprobar qué objeto está seleccionado antes de editarlo.</li>
          <li>Evitar incorporar elementos que dificulten la lectura.</li>
          <li>Reproducir la presentación antes de compartirla.</li>
          <li>Verificar que el archivo se haya guardado correctamente.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Abrí un editor de presentaciones e identificá la barra de título,
            el menú o cinta de opciones, el panel de diapositivas, el área de
            trabajo y la barra de estado. Escribí la función de cada elemento.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Creá una presentación nueva e insertá cinco diapositivas.
            Organizalas en el siguiente orden: portada, introducción,
            desarrollo, ejemplos y conclusión.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Seleccioná una diapositiva y probá las opciones para duplicarla,
            cambiarla de posición y eliminarla. Luego dejá la presentación
            con el orden original de cinco diapositivas.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Insertá un cuadro de texto y una forma en una diapositiva.
            Cambiá su posición y tamaño, modificá sus propiedades y practicá
            las operaciones de copiar, pegar y deshacer.
          </div>

          <div className="border border-blue-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 5</p>
            Guardá la presentación con el nombre
            <strong> Practica_Interfaz_Apellido</strong>. Cerrá el archivo,
            volvé a abrirlo y comprobá que se conservaron las diapositivas
            y los cambios realizados.
          </div>
        </div>
      </section>

      {/* Desafío integrador */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700  p-6 rounded-xl">
          <p className="leading-relaxed">
            Imaginá que comenzás a trabajar como operador de informática
            en una oficina. Tu responsable te solicita preparar una presentación
            para una reunión de equipo sobre las actividades realizadas
            durante el mes.
          </p>

          <br />

          <p className="font-semibold">
            Antes de comenzar a incorporar el contenido, debés:
          </p>

          <br />

          <ul className="list-disc list-inside space-y-3">
            <li>Identificar las principales partes de la interfaz.</li>
            <li>Crear una presentación nueva.</li>
            <li>Insertar y ordenar las diapositivas necesarias.</li>
            <li>Elegir un diseño para la portada y el contenido.</li>
            <li>Practicar la selección y edición de objetos.</li>
            <li>Guardar el archivo con un nombre adecuado.</li>
          </ul>

          <br />

          <p className="leading-relaxed">
            Finalmente, explicá qué herramientas utilizarías para organizar
            la presentación y cómo comprobarías que el archivo quedó guardado
            correctamente. No es necesario desarrollar todavía el informe
            completo: el objetivo es familiarizarte con el entorno de trabajo.
          </p>
        </div>
      </section>
    </div>
  );
}
