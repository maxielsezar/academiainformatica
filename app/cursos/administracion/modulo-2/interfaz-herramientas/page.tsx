export default function InterfazHerramientasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Interfaz y Herramientas del Procesador de Textos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La interfaz de un procesador de textos está formada por diferentes
          elementos que permiten crear, editar y administrar documentos.
          Conocer la ubicación y función de estas herramientas facilita el
          trabajo y permite utilizar el programa de manera más eficiente.
          <br /><br />
          Aunque la apariencia puede variar entre aplicaciones como Microsoft
          Word, LibreOffice Writer o Google Docs, muchas de sus herramientas
          principales cumplen funciones similares.
        </p>
      </section>

      {/* Interfaz */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la Interfaz?
        </h2>

        <div className="border p-6 rounded-xl">
          La interfaz de usuario es el conjunto de elementos visuales y
          controles que permiten interactuar con el procesador de textos.
          <br /><br />
          A través de la interfaz, el usuario puede acceder a las diferentes
          funciones del programa, escribir contenido, modificar documentos
          y configurar su presentación.
        </div>
      </section>

      {/* Elementos principales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos Principales de la Interfaz
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La interfaz de un procesador de textos suele incluir diferentes
          elementos que permiten acceder rápidamente a las funciones más
          utilizadas.
        </p>

        <div className="space-y-6 mt-6">

          {/* Barra de título */}
          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Barra de título
            </p>

            Muestra información relacionada con el documento abierto y el
            programa que se está utilizando.
          </div>

          {/* Barra de acceso rápido */}
          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Barra de herramientas de acceso rápido
            </p>

            Permite acceder rápidamente a funciones utilizadas con frecuencia,
            como guardar, deshacer o rehacer acciones.
          </div>

          {/* Menú */}
          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Menú o cinta de opciones
            </p>

            Agrupa diferentes herramientas y comandos relacionados con
            las tareas que pueden realizarse en el documento.
          </div>

          {/* Área de trabajo */}
          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Área de trabajo
            </p>

            Es el espacio principal donde se escribe y se edita el contenido
            del documento.
          </div>

          {/* Regla */}
          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Regla
            </p>

            Permite visualizar y ajustar elementos relacionados con la
            distribución del documento, como márgenes, sangrías y tabulaciones.
          </div>

          {/* Barras de desplazamiento */}
          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Barras de desplazamiento
            </p>

            Permiten desplazarse por las diferentes partes del documento
            cuando su contenido supera el área visible.
          </div>

          {/* Barra de estado */}
          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Barra de estado
            </p>

            Muestra información relacionada con el documento, como la
            cantidad de páginas, palabras u otros datos según el programa.
          </div>

        </div>
      </section>

      {/* Herramientas de edición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de Edición
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las herramientas de edición permiten modificar el contenido
          de un documento y corregir errores durante su elaboración.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Seleccionar texto.</li>
            <li>Cortar contenido.</li>
            <li>Copiar contenido.</li>
            <li>Pegar contenido.</li>
            <li>Deshacer acciones.</li>
            <li>Rehacer acciones.</li>
            <li>Buscar palabras o frases.</li>
            <li>Reemplazar texto.</li>
          </ul>

        </div>
      </section>

      {/* Herramientas de formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de Formato
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las herramientas de formato permiten modificar la apariencia
          del contenido para mejorar su presentación y facilitar la lectura.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Tipo y tamaño de fuente
            </p>

            Permiten seleccionar el estilo de letra y establecer su tamaño.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Negrita
            </p>

            Permite resaltar palabras o fragmentos de texto utilizando
            un estilo de mayor intensidad visual.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Cursiva
            </p>

            Permite aplicar una inclinación al texto para diferenciar
            o destacar determinados contenidos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Subrayado
            </p>

            Permite agregar una línea debajo del texto seleccionado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Color de texto
            </p>

            Permite modificar el color de las letras para destacar
            determinados elementos del documento.
          </div>

        </div>
      </section>

      {/* Herramientas de párrafo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de Párrafo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las herramientas de párrafo permiten controlar la organización
          y distribución del texto dentro del documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Alineación izquierda.</li>
            <li>Alineación centrada.</li>
            <li>Alineación derecha.</li>
            <li>Alineación justificada.</li>
            <li>Interlineado.</li>
            <li>Sangrías.</li>
            <li>Espaciado entre párrafos.</li>
            <li>Listas numeradas.</li>
            <li>Listas con viñetas.</li>
          </ul>

        </div>
      </section>

      {/* Insertar elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas para Insertar Elementos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los procesadores de textos permiten incorporar diferentes elementos
          para complementar la información del documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Imágenes.</li>
            <li>Tablas.</li>
            <li>Formas y elementos gráficos.</li>
            <li>Enlaces.</li>
            <li>Encabezados.</li>
            <li>Pies de página.</li>
            <li>Números de página.</li>
            <li>Símbolos.</li>
          </ul>

        </div>
      </section>

      {/* Zoom */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Zoom y Visualización
        </h2>

        <div className="border p-6 rounded-xl">
          La herramienta de zoom permite aumentar o reducir la visualización
          del documento en pantalla.
          <br /><br />
          Modificar el nivel de zoom no cambia el tamaño real del texto
          ni afecta la impresión del documento. Solamente modifica la forma
          en que el contenido se visualiza en pantalla.
        </div>
      </section>

      {/* Atajos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Atajos de Teclado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los atajos de teclado permiten ejecutar determinadas acciones
          utilizando combinaciones de teclas, agilizando el trabajo
          con documentos.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li><strong>Ctrl + C:</strong> copiar.</li>
            <li><strong>Ctrl + X:</strong> cortar.</li>
            <li><strong>Ctrl + V:</strong> pegar.</li>
            <li><strong>Ctrl + Z:</strong> deshacer.</li>
            <li><strong>Ctrl + Y:</strong> rehacer.</li>
            <li><strong>Ctrl + A:</strong> seleccionar todo.</li>
            <li><strong>Ctrl + F:</strong> buscar.</li>
            <li><strong>Ctrl + G:</strong> guardar.</li>
            <li><strong>Ctrl + P:</strong> imprimir.</li>
          </ul>

        </div>
      </section>

      {/* Personalización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Personalización del Espacio de Trabajo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los procesadores de textos permiten adaptar diferentes elementos
          de la interfaz y del documento según las necesidades del usuario.
          <br /><br />
          Conocer estas opciones permite trabajar de manera más cómoda
          y acceder rápidamente a las herramientas que se utilizan con
          mayor frecuencia.
        </p>
      </section>

      {/* Uso administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de las Herramientas en Documentos Administrativos
        </h2>

        <div className="border p-6 rounded-xl">
          En el ámbito administrativo, conocer las herramientas de un
          procesador de textos permite crear documentos claros, organizados
          y profesionales.
          <br /><br />
          Por ejemplo, se puede utilizar la negrita para destacar títulos,
          la alineación para organizar el contenido, las tablas para presentar
          información y los encabezados para identificar un documento.
          <br /><br />
          El objetivo no es utilizar todas las herramientas disponibles,
          sino seleccionar aquellas que permitan comunicar la información
          de manera clara y ordenada.
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Conocer la ubicación de las herramientas principales.</li>
          <li>Utilizar formatos de texto de manera coherente.</li>
          <li>Evitar utilizar demasiados tipos de fuentes en un documento.</li>
          <li>Utilizar títulos y subtítulos para organizar la información.</li>
          <li>Aplicar herramientas de formato según el objetivo del documento.</li>
          <li>Utilizar atajos de teclado para agilizar tareas frecuentes.</li>
          <li>Revisar el documento antes de guardarlo o imprimirlo.</li>
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
            Identificar en la interfaz del procesador de textos utilizado
            las siguientes herramientas: barra de título, barra de herramientas,
            área de trabajo, regla y barra de estado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear un documento y escribir un texto breve. Aplicar negrita,
            cursiva, subrayado y diferentes tamaños de fuente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Escribir un texto y aplicar las cuatro alineaciones disponibles:
            izquierda, centrada, derecha y justificada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Crear una lista utilizando viñetas y otra utilizando numeración.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Utilizar los atajos de teclado Ctrl + C, Ctrl + V, Ctrl + Z y
            Ctrl + G para realizar diferentes acciones sobre un documento.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que trabajas en una oficina y debes crear una comunicación
          interna destinada a todos los empleados de la organización.
          <br /><br />

          Utilizando un procesador de textos, crea un documento que incluya:

          <br /><br />

          ✔ Un título principal. <br />
          ✔ Un subtítulo. <br />
          ✔ Varios párrafos de información. <br />
          ✔ Texto destacado utilizando negrita. <br />
          ✔ Una lista con viñetas. <br />
          ✔ Una imagen relacionada con el contenido. <br />
          ✔ Un encabezado o pie de página. <br />
          ✔ Una presentación ordenada y profesional.
          <br /><br />

          Finalmente, guarda el documento utilizando un nombre descriptivo
          y colócalo dentro de una carpeta destinada a documentos administrativos.
        </div>
      </section>

    </div>
  );
}
