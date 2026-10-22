export default function SonidoVideoPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Sonido y Video en Presentaciones Digitales
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La incorporación de sonido y video permite enriquecer las
          presentaciones digitales, explicar procedimientos y comunicar
          información de una manera más dinámica. Para lograr una presentación
          efectiva, es importante seleccionar recursos adecuados, insertarlos
          correctamente y comprobar que funcionen durante la exposición.
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
            <li>Reconocer los usos del sonido y el video en una presentación.</li>
            <li>Insertar archivos de audio y video en una diapositiva.</li>
            <li>Configurar la reproducción de los recursos multimedia.</li>
            <li>Organizar los elementos multimedia dentro de una presentación.</li>
            <li>Comprobar que los archivos se reproduzcan correctamente.</li>
            <li>Utilizar recursos audiovisuales con criterios de claridad y accesibilidad.</li>
          </ul>
        </div>
      </section>

      {/* Sonido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. Incorporación de sonido
        </h2>

        <p className="leading-relaxed mb-4">
          El sonido puede utilizarse para acompañar una explicación, presentar
          una narración, reproducir una entrevista o incluir una grabación
          relacionada con el contenido. También puede emplearse música de
          fondo cuando sea apropiada para el objetivo de la presentación.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Usos del audio
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Agregar una narración explicativa.</li>
              <li>Reproducir entrevistas o testimonios.</li>
              <li>Incluir grabaciones de capacitación.</li>
              <li>Acompañar una presentación institucional.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Formatos habituales
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>MP3:</strong> utilizado para archivos de audio
                comprimidos.
              </li>
              <li>
                <strong>WAV:</strong> utilizado para audio sin compresión
                en muchos casos.
              </li>
              <li>
                <strong>M4A:</strong> formato de audio utilizado en diversos
                dispositivos y aplicaciones.
              </li>
            </ul>

            <p className="text-sm mt-3 leading-relaxed">
              La compatibilidad depende del programa, el sistema operativo
              y la versión utilizada.
            </p>
          </div>
        </div>
      </section>

      {/* Insertar audio */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Cómo insertar un archivo de audio
        </h2>

        <p className="leading-relaxed mb-4">
          En programas como Microsoft PowerPoint o LibreOffice Impress,
          la inserción de audio se realiza desde las opciones multimedia.
          Los nombres de los menús pueden variar según la aplicación.
        </p>

        <div className="border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Procedimiento general
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Abrí la presentación y seleccioná la diapositiva donde querés
              incorporar el sonido.
            </li>
            <li>
              Buscá la opción <strong>Insertar</strong> y luego la herramienta
              de audio o multimedia.
            </li>
            <li>
              Seleccioná el archivo de audio desde la computadora.
            </li>
            <li>
              Ubicá el icono del audio en la diapositiva, si el programa lo
              muestra.
            </li>
            <li>
              Configurá la reproducción según las opciones disponibles:
              al hacer clic, automáticamente o mediante otros controles.
            </li>
            <li>
              Reproducí la presentación para comprobar que el sonido se
              escuche correctamente.
            </li>
          </ol>
        </div>
      </section>

      {/* Video */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Incorporación de video
        </h2>

        <p className="leading-relaxed mb-4">
          Los videos permiten mostrar procedimientos, demostraciones,
          entrevistas y explicaciones que serían difíciles de representar
          únicamente con texto o imágenes. Deben seleccionarse de acuerdo
          con el propósito de la exposición y la duración disponible.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Usos del video
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Demostrar el funcionamiento de un programa.</li>
              <li>Explicar un procedimiento administrativo.</li>
              <li>Presentar una capacitación breve.</li>
              <li>Mostrar un producto o servicio.</li>
              <li>Complementar un informe con material audiovisual.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Formatos habituales
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>MP4:</strong> formato ampliamente utilizado para
                video.
              </li>
              <li>
                <strong>MOV:</strong> formato de video utilizado en distintos
                dispositivos y programas.
              </li>
              <li>
                <strong>WMV:</strong> formato de video asociado al entorno
                de Windows.
              </li>
            </ul>

            <p className="text-sm mt-3 leading-relaxed">
              Antes de insertar un archivo, verificá que sea compatible
              con el programa de presentaciones.
            </p>
          </div>
        </div>
      </section>

      {/* Insertar video */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Cómo insertar un archivo de video
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Seleccioná la diapositiva donde se mostrará el video.
            </li>
            <li>
              Ingresá en el menú <strong>Insertar</strong> y buscá la opción
              de video o multimedia.
            </li>
            <li>
              Elegí el archivo almacenado en la computadora o la alternativa
              en línea, si está disponible.
            </li>
            <li>
              Ajustá el tamaño y la posición del video dentro de la diapositiva.
            </li>
            <li>
              Configurá las opciones de reproducción que permita la aplicación.
            </li>
            <li>
              Reproducí la presentación para verificar el video, el sonido
              y la duración.
            </li>
          </ol>

          <div className="mt-5 rounded-lg bg-blue-50 border border-blue-100 p-4">
            <p className="leading-relaxed">
              <strong>Importante:</strong> si utilizás un video o audio
              externo, comprobá si queda incorporado al archivo de presentación
              o si depende de una ruta, un vínculo o una conexión a Internet.
              Esto puede afectar su reproducción en otra computadora.
            </p>
          </div>
        </div>
      </section>

      {/* Configuración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Configuración de la reproducción
        </h2>

        <p className="leading-relaxed mb-4">
          Después de insertar un archivo multimedia, es necesario revisar
          cómo y cuándo se reproducirá. Una configuración adecuada permite
          mantener el control de la exposición y evitar interrupciones.
        </p>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Inicio de la reproducción
            </h3>

            <p className="leading-relaxed">
              Según el programa, el audio o video puede comenzar al hacer
              clic, automáticamente al llegar a la diapositiva o mediante
              una acción específica del presentador.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Volumen y controles
            </h3>

            <p className="leading-relaxed">
              Ajustá el volumen y verificá que sea posible iniciar, pausar
              o detener la reproducción cuando sea necesario. Evitá que
              el audio resulte demasiado bajo o demasiado alto.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Duración y recorte
            </h3>

            <p className="leading-relaxed">
              Cuando la aplicación lo permita, seleccioná el fragmento
              relevante del archivo. Un video breve y relacionado con el
              tema suele ser más útil que una grabación extensa.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Reproducción en otras computadoras
            </h3>

            <p className="leading-relaxed">
              Probá la presentación en el equipo donde se realizará la
              exposición. Revisá los archivos vinculados, la compatibilidad
              de formatos, los parlantes y la conexión a Internet si se
              utiliza contenido en línea.
            </p>
          </div>
        </div>
      </section>

      {/* Uso responsable */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Buenas prácticas para utilizar sonido y video
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Elegir archivos directamente relacionados con el contenido.
            </li>
            <li>
              Evitar videos demasiado largos que interrumpan la exposición.
            </li>
            <li>
              Comprobar el sonido antes de presentar el trabajo.
            </li>
            <li>
              Mantener una calidad de imagen y audio adecuada.
            </li>
            <li>
              Incluir subtítulos o una explicación alternativa cuando sea
              posible y resulte necesario.
            </li>
            <li>
              Verificar que los archivos se reproduzcan sin depender de
              ubicaciones que no estarán disponibles.
            </li>
            <li>
              Respetar los derechos de autor y las condiciones de uso
              del material audiovisual.
            </li>
            <li>
              Evitar la reproducción automática de sonidos que puedan
              distraer o sorprender al público.
            </li>
          </ul>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Aplicación en el ámbito administrativo
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo: capacitación sobre atención al público
          </h3>

          <p className="leading-relaxed mb-4">
            Una oficina necesita capacitar a su personal sobre la atención
            de consultas y la recepción de documentación. Para explicar
            el procedimiento, se prepara una presentación con los siguientes
            recursos:
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Una portada con el nombre de la capacitación.
            </li>
            <li>
              Una diapositiva con las etapas del procedimiento.
            </li>
            <li>
              Un video breve que muestra una situación de atención al público.
            </li>
            <li>
              Una narración de audio que explica los pasos principales.
            </li>
            <li>
              Una diapositiva final con recomendaciones y conclusiones.
            </li>
          </ol>

          <p className="leading-relaxed mt-4">
            El material audiovisual complementa la información escrita
            y permite que los participantes observen ejemplos concretos
            de situaciones laborales.
          </p>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: reconocer los recursos multimedia
            </h3>

            <p className="leading-relaxed">
              Elaborá una tabla con tres columnas: recurso, función y
              ejemplo de uso. Incluí al menos tres usos del audio y tres
              usos del video en una presentación laboral o educativa.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: insertar un audio
            </h3>

            <p className="leading-relaxed">
              Creá una presentación de dos diapositivas sobre las tareas
              de una oficina. Insertá un archivo de audio relacionado
              con el tema y configurá su reproducción. Comprobá que
              el sonido funcione correctamente.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: incorporar un video
            </h3>

            <p className="leading-relaxed">
              Creá una diapositiva sobre un procedimiento administrativo
              e insertá un video breve que ayude a explicarlo. Ajustá su
              tamaño y posición, y verificá que pueda reproducirse durante
              la presentación.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: configurar la reproducción
            </h3>

            <p className="leading-relaxed">
              Utilizá una presentación que contenga audio o video. Revisá
              las opciones disponibles para iniciar, pausar y detener
              la reproducción. Probá los efectos en el modo presentación
              y registrá cualquier inconveniente.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: evaluar un recurso audiovisual
            </h3>

            <p className="leading-relaxed">
              Seleccioná un video que podría utilizarse en una capacitación.
              Analizá su duración, claridad, relación con el tema, calidad
              de sonido y utilidad para el público. Escribí una breve
              justificación sobre su conveniencia.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Actividad integradora
        </h2>

        <div className="border border-blue-300 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-blue-900">
            Crear una presentación multimedia de capacitación
          </h3>

          <p className="leading-relaxed">
            Elaborá una presentación digital de entre seis y ocho diapositivas
            destinada a capacitar al personal de una oficina sobre un
            procedimiento administrativo. Podés elegir la recepción de
            documentación, la atención al público, la organización de archivos
            o la gestión de turnos.
          </p>

          <h3 className="font-bold text-blue-900">
            Requisitos del trabajo
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Incluir una portada y una introducción al procedimiento.
            </li>
            <li>
              Explicar los pasos principales mediante texto e imágenes.
            </li>
            <li>
              Incorporar al menos un archivo de audio o una narración.
            </li>
            <li>
              Insertar un video breve relacionado con el procedimiento,
              si se dispone de uno adecuado.
            </li>
            <li>
              Utilizar animaciones y transiciones de manera moderada.
            </li>
            <li>
              Revisar el funcionamiento de todos los recursos multimedia.
            </li>
            <li>
              Preparar una conclusión con recomendaciones para el personal.
            </li>
          </ul>

          <h3 className="font-bold text-blue-900">
            Criterios de evaluación
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Claridad y organización de la información.</li>
            <li>Inserción correcta de los recursos multimedia.</li>
            <li>Relación entre el audio, el video y el contenido.</li>
            <li>Funcionamiento de los archivos durante la exposición.</li>
            <li>Uso responsable de los recursos audiovisuales.</li>
          </ul>

          <p className="leading-relaxed">
            Presentá el trabajo frente a tus compañeros y explicá cómo
            los recursos seleccionados contribuyen a comprender el
            procedimiento administrativo.
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          El sonido y el video amplían las posibilidades de una presentación
          digital porque permiten incorporar explicaciones, demostraciones
          y ejemplos. Su utilidad depende de una selección adecuada, una
          configuración correcta y una comprobación previa de su
          funcionamiento.
        </p>

        <p className="leading-relaxed mt-4">
          En el próximo tema trabajaremos con herramientas de dibujo y
          recursos gráficos para crear y adaptar elementos visuales.
        </p>

        <div className="mt-6">
          <a
            href="/cursos/administracion/modulo-6/herramientas-graficas"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Continuar con Herramientas Gráficas →
          </a>
        </div>
      </section>
    </div>
  );
}
