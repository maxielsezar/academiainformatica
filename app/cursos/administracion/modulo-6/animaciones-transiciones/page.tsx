export default function AnimacionesTransicionesPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Animaciones y Transiciones
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las animaciones y las transiciones permiten mejorar la presentación
          de la información, destacar conceptos importantes y organizar la
          aparición de los elementos en una diapositiva. Su utilización debe
          facilitar la comprensión del contenido y no distraer al público.
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
            <li>
              Reconocer la diferencia entre animaciones y transiciones.
            </li>
            <li>
              Aplicar efectos de entrada, énfasis y salida a los objetos.
            </li>
            <li>
              Configurar la transición entre diapositivas.
            </li>
            <li>
              Establecer el orden y el momento de aparición de los elementos.
            </li>
            <li>
              Utilizar efectos visuales de manera clara y profesional.
            </li>
          </ul>
        </div>
      </section>

      {/* Animaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué son las animaciones?
        </h2>

        <p className="leading-relaxed mb-4">
          Las animaciones son efectos que se aplican a los objetos de una
          diapositiva, como textos, imágenes, gráficos y formas. Permiten
          controlar cómo aparecen, se destacan o desaparecen los elementos
          durante una presentación.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Efectos de entrada
            </h3>
            <p className="text-sm leading-relaxed">
              Determinan cómo aparece un objeto en la diapositiva. Por
              ejemplo, un título puede aparecer gradualmente o desplazarse
              desde un costado.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Efectos de énfasis
            </h3>
            <p className="text-sm leading-relaxed">
              Permiten destacar un objeto que ya está visible. Por ejemplo,
              resaltar una cifra importante o hacer que un elemento cambie
              temporalmente de tamaño.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Efectos de salida
            </h3>
            <p className="text-sm leading-relaxed">
              Controlan cómo desaparece un objeto de la diapositiva. Pueden
              utilizarse para retirar información antes de mostrar otro
              contenido.
            </p>
          </div>
        </div>
      </section>

      {/* Transiciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. ¿Qué son las transiciones?
        </h2>

        <p className="leading-relaxed mb-4">
          Las transiciones son efectos visuales que se producen al pasar de
          una diapositiva a otra. Se aplican a la diapositiva completa y
          permiten que el cambio de una sección a la siguiente sea más
          fluido.
        </p>

        <div className="border border-blue-200 rounded-xl p-6 space-y-4">
          <h3 className="font-bold text-blue-900">
            Ejemplos de transiciones
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Desvanecer:</strong> la diapositiva aparece o se
              reemplaza gradualmente.
            </li>
            <li>
              <strong>Empujar:</strong> una diapositiva desplaza a la
              anterior.
            </li>
            <li>
              <strong>Deslizar:</strong> el contenido entra desde una
              dirección determinada.
            </li>
            <li>
              <strong>Revelar:</strong> la nueva diapositiva se muestra
              mediante un efecto progresivo.
            </li>
          </ul>

          <p className="text-sm leading-relaxed">
            Los nombres y los efectos disponibles pueden variar según el
            programa utilizado para crear las presentaciones.
          </p>
        </div>
      </section>

      {/* Diferencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Diferencias entre animaciones y transiciones
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-50">
                <th className="border border-blue-200 p-3 text-left">
                  Característica
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Animaciones
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Transiciones
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">
                  Se aplican a
                </td>
                <td className="border border-blue-200 p-3">
                  Objetos dentro de una diapositiva.
                </td>
                <td className="border border-blue-200 p-3">
                  La diapositiva completa.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">
                  Función
                </td>
                <td className="border border-blue-200 p-3">
                  Controlar la aparición, el énfasis o la salida de objetos.
                </td>
                <td className="border border-blue-200 p-3">
                  Efectuar el cambio entre diapositivas.
                </td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">
                  Ejemplo
                </td>
                <td className="border border-blue-200 p-3">
                  Mostrar los puntos de una lista uno por uno.
                </td>
                <td className="border border-blue-200 p-3">
                  Pasar de la diapositiva de introducción a la de objetivos.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Configuración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Configuración de efectos
        </h2>

        <p className="leading-relaxed mb-4">
          Los programas de presentaciones permiten ajustar diferentes
          propiedades de los efectos para adaptarlos al contenido y al
          ritmo de la exposición.
        </p>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Duración
            </h3>
            <p className="leading-relaxed">
              Define cuánto tiempo tarda en ejecutarse una animación o
              transición. Los efectos demasiado lentos pueden interrumpir
              el ritmo de la presentación.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Inicio del efecto
            </h3>
            <p className="leading-relaxed">
              Permite establecer si el efecto comienza al hacer clic, junto
              con otro efecto o después de que finalice el efecto anterior.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Orden de aparición
            </h3>
            <p className="leading-relaxed">
              Determina la secuencia en la que se muestran los objetos.
              Organizar correctamente el orden ayuda a explicar la
              información paso a paso.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Vista previa
            </h3>
            <p className="leading-relaxed">
              Permite comprobar cómo se ejecutan los efectos antes de
              presentar el trabajo. Es importante revisar que no se
              superpongan elementos ni se pierda información.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Aplicación en el ámbito administrativo
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed mb-4">
            En una oficina, las animaciones y las transiciones pueden
            utilizarse para presentar informes, explicar procedimientos
            y comunicar resultados de manera ordenada.
          </p>

          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo: informe mensual de atención
          </h3>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              La primera diapositiva muestra el título del informe con
              una animación de entrada sencilla.
            </li>
            <li>
              La segunda presenta los objetivos del informe.
            </li>
            <li>
              La tercera muestra un gráfico con los resultados de atención.
            </li>
            <li>
              Los datos principales aparecen en orden para facilitar su
              explicación.
            </li>
            <li>
              Una transición uniforme conecta las diapositivas.
            </li>
          </ol>

          <p className="leading-relaxed mt-4">
            El objetivo no es utilizar la mayor cantidad de efectos
            posible, sino ayudar a que las personas comprendan la
            información presentada.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Buenas prácticas
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Utilizar efectos simples y coherentes con el propósito
              de la presentación.
            </li>
            <li>
              Mantener un estilo similar de transición entre diapositivas.
            </li>
            <li>
              Evitar sonidos y movimientos que distraigan al público.
            </li>
            <li>
              Comprobar el orden y la velocidad de aparición de los objetos.
            </li>
            <li>
              Revisar la presentación completa antes de exponerla.
            </li>
            <li>
              Asegurarse de que los efectos no dificulten la lectura
              de textos, cifras o gráficos.
            </li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: identificar los efectos
            </h3>
            <p className="leading-relaxed">
              Explicá con tus palabras qué diferencia existe entre una
              animación y una transición. Escribí dos ejemplos de cada una
              y señalá en qué situación utilizarías esos efectos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: animar una lista
            </h3>
            <p className="leading-relaxed">
              Creá una diapositiva titulada “Tareas administrativas”.
              Agregá una lista con cinco tareas y configurá una animación
              para que aparezcan de manera ordenada. Comprobá que el texto
              pueda leerse correctamente.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: aplicar transiciones
            </h3>
            <p className="leading-relaxed">
              Creá una presentación de cuatro diapositivas sobre un
              procedimiento de oficina. Aplicá una transición entre ellas
              y revisá la presentación en modo exposición.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: controlar el orden
            </h3>
            <p className="leading-relaxed">
              En una diapositiva incorporá un título, una imagen y tres
              datos relevantes. Configurá los efectos para que primero
              aparezca el título, luego la imagen y finalmente los datos.
              Verificá que el orden sea correcto.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: revisar una presentación
            </h3>
            <p className="leading-relaxed">
              Abrí una presentación existente o utilizá una creada en
              las actividades anteriores. Revisá sus animaciones y
              transiciones. Eliminá los efectos innecesarios y justificá
              qué cambios realizaste para mejorar la claridad.
            </p>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Actividad integradora
        </h2>

        <div className="border border-blue-300 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-blue-900">
            Presentación de un informe administrativo
          </h3>

          <p className="leading-relaxed">
            Elaborá una presentación digital de entre seis y ocho
            diapositivas para exponer un informe mensual de una oficina,
            institución o empresa ficticia.
          </p>

          <h3 className="font-bold text-blue-900">
            La presentación debe incluir:
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Una diapositiva de portada.</li>
            <li>Una presentación de los objetivos del informe.</li>
            <li>Una descripción de las tareas realizadas.</li>
            <li>Una diapositiva con datos o resultados.</li>
            <li>Una conclusión con propuestas de mejora.</li>
            <li>Animaciones para organizar la aparición de algunos objetos.</li>
            <li>Transiciones entre las diapositivas.</li>
          </ul>

          <h3 className="font-bold text-blue-900">
            Criterios de evaluación
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Uso adecuado de animaciones y transiciones.
            </li>
            <li>
              Orden lógico de aparición de los elementos.
            </li>
            <li>
              Claridad y legibilidad de la información.
            </li>
            <li>
              Coherencia visual entre las diapositivas.
            </li>
            <li>
              Ausencia de efectos innecesarios o distractores.
            </li>
          </ul>

          <p className="leading-relaxed">
            Al finalizar, exponé el informe frente a tus compañeros y
            explicá por qué elegiste esos efectos y cómo contribuyen a
            comunicar mejor la información.
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Las animaciones controlan el comportamiento de los objetos
          dentro de una diapositiva, mientras que las transiciones
          regulan el paso entre diapositivas. Cuando se utilizan de
          forma moderada y planificada, ambas herramientas ayudan a
          organizar la exposición y destacar la información importante.
        </p>

        <p className="leading-relaxed mt-4">
          En el próximo tema aprenderemos a incorporar sonido y video
          para enriquecer las presentaciones digitales.
        </p>

        <div className="mt-6">
          <a
            href="/cursos/administracion/modulo-6/sonido-video"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Continuar con Sonido y Video →
          </a>
        </div>
      </section>
    </div>
  );
}
