
export default function EdicionFormatoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Edición y Formato de Texto
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una de las principales funciones de un procesador de textos es
          permitir editar y dar formato al contenido de un documento.
          <br /><br />
          Editar consiste en modificar el texto ya escrito, mientras que
          aplicar formato permite mejorar su apariencia para lograr una
          presentación clara, ordenada y profesional.
          <br /><br />
          Estas herramientas son utilizadas diariamente en oficinas,
          empresas e instituciones para elaborar documentos de calidad.
        </p>
      </section>

      {/* Edición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la Edición de Texto?
        </h2>

        <div className="border p-6 rounded-xl">
          Editar un documento significa realizar modificaciones sobre el
          contenido existente.
          <br /><br />
          Estas modificaciones pueden incluir agregar información,
          eliminar palabras, corregir errores ortográficos, reorganizar
          párrafos o reemplazar parte del contenido.
        </div>
      </section>

      {/* Herramientas de edición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas de Edición
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Seleccionar texto
            </p>

            Antes de modificar un texto es necesario seleccionarlo.
            La selección puede realizarse utilizando el mouse o el teclado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Cortar
            </p>

            Elimina el contenido seleccionado y lo almacena temporalmente
            en el portapapeles para pegarlo posteriormente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Copiar
            </p>

            Duplica el contenido seleccionado sin eliminar el original,
            permitiendo reutilizarlo en otro lugar del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Pegar
            </p>

            Inserta en el documento el contenido almacenado previamente
            mediante la opción Cortar o Copiar.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Deshacer y Rehacer
            </p>

            Permiten revertir la última acción realizada o recuperarla
            nuevamente si fue deshecha por error.
          </div>

        </div>
      </section>

      {/* Formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Formato de Texto?
        </h2>

        <div className="border p-6 rounded-xl">
          El formato de texto comprende todas las características visuales
          que pueden aplicarse al contenido de un documento.
          <br /><br />
          Modificar el formato permite destacar información importante,
          mejorar la organización del documento y facilitar su lectura.
        </div>
      </section>

      {/* Fuente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipo y Tamaño de Fuente
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La fuente determina el diseño de las letras utilizadas en el
          documento, mientras que el tamaño establece sus dimensiones.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Arial.</li>
            <li>Calibri.</li>
            <li>Times New Roman.</li>
            <li>Verdana.</li>
            <li>Tahoma.</li>
          </ul>

          <br />

          Para documentos administrativos suelen utilizarse tamaños entre
          11 y 12 puntos por ofrecer buena legibilidad.
        </div>
      </section>

      {/* Estilos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estilos de Texto
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <strong>Negrita</strong>
            <br /><br />
            Resalta títulos, subtítulos o palabras importantes.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Cursiva</strong>
            <br /><br />
            Se utiliza para destacar palabras, expresiones extranjeras o
            referencias especiales.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Subrayado</strong>
            <br /><br />
            Agrega una línea debajo del texto seleccionado para llamar
            la atención sobre determinada información.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Tachado</strong>
            <br /><br />
            Permite indicar información eliminada sin borrarla
            completamente.
          </div>

        </div>
      </section>

      {/* Color */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Color y Resaltado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Además del formato tradicional, los procesadores de textos
          permiten modificar el color de las letras y aplicar resaltados
          para destacar información específica.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Cambiar el color del texto.</li>
            <li>Aplicar color de resaltado.</li>
            <li>Utilizar colores para diferenciar información.</li>
            <li>Destacar advertencias o información importante.</li>
          </ul>

        </div>
      </section>

      {/* Buscar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buscar y Reemplazar
        </h2>

        <div className="border p-6 rounded-xl">
          La herramienta Buscar permite localizar rápidamente una palabra
          o frase dentro de un documento.
          <br /><br />
          La opción Reemplazar permite cambiar automáticamente una palabra
          por otra en todo el documento, ahorrando tiempo cuando existen
          muchas repeticiones.
        </div>
      </section>

      {/* Portapapeles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El Portapapeles
        </h2>

        <div className="border p-6 rounded-xl">
          El portapapeles es una memoria temporal donde se almacena la
          información copiada o cortada hasta que se pega en otro lugar.
          <br /><br />
          Puede utilizarse para mover o duplicar texto dentro del mismo
          documento o entre distintos documentos.
        </div>
      </section>
    

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del Formato en Documentos Administrativos
        </h2>

        <div className="border p-6 rounded-xl">
          Un documento bien presentado transmite profesionalismo y facilita
          la comprensión de la información.
          <br /><br />
          El uso adecuado de títulos, negritas, tamaños de fuente y colores
          permite organizar el contenido y dirigir la atención del lector
          hacia los puntos más importantes.
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar una o dos fuentes como máximo.</li>
          <li>Evitar el uso excesivo de colores.</li>
          <li>Aplicar negrita únicamente donde sea necesario.</li>
          <li>Mantener un formato uniforme en todo el documento.</li>
          <li>Revisar la ortografía antes de finalizar el trabajo.</li>
          <li>Guardar periódicamente los cambios realizados.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Escribir un texto breve y aplicar diferentes tipos y tamaños
            de fuente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Utilizar negrita, cursiva y subrayado para destacar distintas
            partes del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Copiar un párrafo y pegarlo al final del documento utilizando
            los atajos de teclado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Utilizar la herramienta Buscar para localizar una palabra y
            luego reemplazarla por otra.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Elabora un comunicado interno para una empresa. El documento debe
          incluir un título, subtítulos, varios párrafos, palabras destacadas
          en negrita, texto en cursiva, una lista y diferentes tamaños de
          fuente para organizar la información. Finalmente, revisa la ortografía
          y guarda el archivo con un nombre descriptivo.
        </div>
      </section>

    </div>
  );
}

