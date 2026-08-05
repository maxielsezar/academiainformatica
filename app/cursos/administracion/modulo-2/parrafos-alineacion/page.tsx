
export default function ParrafosAlineacionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Párrafos y Alineación
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un documento profesional no depende únicamente del contenido que
          contiene, sino también de cómo está organizado y presentado.
          <br /><br />
          Los procesadores de textos ofrecen herramientas para organizar el
          contenido en párrafos, controlar los espacios entre ellos y aplicar
          diferentes tipos de alineación para mejorar la legibilidad y la
          apariencia del documento.
        </p>
      </section>

      {/* ¿Qué es un párrafo? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Párrafo?
        </h2>

        <div className="border p-6 rounded-xl">
          Un párrafo es un conjunto de oraciones relacionadas entre sí que
          desarrollan una misma idea.
          <br /><br />
          En un procesador de textos, cada vez que se presiona la tecla
          <strong> Enter</strong>, se crea un nuevo párrafo.
          <br /><br />
          Organizar correctamente los párrafos facilita la lectura y hace que
          los documentos resulten más claros y profesionales.
        </div>
      </section>

      {/* Alineación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alineación del Texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La alineación determina cómo se distribuye el texto respecto a los
          márgenes del documento.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Alineación Izquierda
            </p>

            El texto comienza siempre desde el margen izquierdo. Es la
            alineación utilizada por defecto en la mayoría de los documentos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Alineación Centrada
            </p>

            Coloca el texto en el centro de la página. Se utiliza
            principalmente para títulos y encabezados.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Alineación Derecha
            </p>

            El texto queda alineado con el margen derecho. Se utiliza en
            algunos documentos para fechas, firmas u otra información
            específica.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Alineación Justificada
            </p>

            Distribuye el texto uniformemente entre ambos márgenes,
            proporcionando una apariencia ordenada y profesional. Es muy
            utilizada en informes, manuales y documentos administrativos.
          </div>

        </div>

      </section>

      {/* Interlineado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Interlineado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El interlineado es el espacio vertical existente entre una línea de
          texto y la siguiente.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Los valores más utilizados son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Sencillo (1.0).</li>
            <li>1,15.</li>
            <li>1,5.</li>
            <li>Doble (2.0).</li>
          </ul>

          <br />

          Un interlineado adecuado mejora considerablemente la lectura del
          documento.

        </div>

      </section>

      {/* Espaciado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Espaciado entre Párrafos
        </h2>

        <div className="border p-6 rounded-xl">
          Además del interlineado, los procesadores de textos permiten agregar
          espacio antes o después de cada párrafo.
          <br /><br />
          Esta opción evita utilizar múltiples pulsaciones de la tecla Enter y
          mantiene una presentación uniforme en todo el documento.
        </div>
      </section>

      {/* Sangrías */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sangrías
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las sangrías permiten desplazar el texto respecto de los márgenes del
          documento para mejorar su organización visual.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <strong>Sangría izquierda</strong>
            <br /><br />
            Desplaza todo el párrafo hacia la derecha desde el margen izquierdo.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Sangría derecha</strong>
            <br /><br />
            Reduce el ancho del párrafo desplazando el margen derecho.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Sangría de primera línea</strong>
            <br /><br />
            Solo desplaza la primera línea del párrafo. Es muy utilizada en
            libros y documentos extensos.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Sangría francesa</strong>
            <br /><br />
            La primera línea permanece en el margen mientras que el resto del
            párrafo queda desplazado hacia la derecha.
          </div>

        </div>

      </section>

      {/* Tabulaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tabulaciones
        </h2>

        <div className="border p-6 rounded-xl">
          Las tabulaciones permiten alinear información en posiciones
          determinadas del documento utilizando la tecla <strong>Tab</strong>.
          <br /><br />
          Son muy útiles para organizar datos antes de utilizar tablas y para
          crear documentos administrativos con columnas simples.
        </div>
      </section>

      {/* Aplicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en Documentos Administrativos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En documentos administrativos es importante utilizar correctamente
          los párrafos para facilitar la lectura y transmitir una imagen
          profesional.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Los títulos suelen ir centrados o alineados a la izquierda.</li>
            <li>Los párrafos de informes generalmente se justifican.</li>
            <li>Las fechas pueden alinearse a la derecha.</li>
            <li>El interlineado debe mantenerse uniforme.</li>
            <li>Debe evitarse dejar espacios utilizando varias veces la tecla Enter.</li>

          </ul>

        </div>

      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar la alineación adecuada según el tipo de documento.</li>
          <li>Mantener el mismo interlineado en todo el documento.</li>
          <li>No utilizar espacios para alinear texto.</li>
          <li>Utilizar las herramientas de sangría en lugar de la barra espaciadora.</li>
          <li>Separar correctamente los párrafos.</li>
          <li>Revisar la presentación antes de imprimir o compartir el documento.</li>
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

            Escribir un texto de tres párrafos y aplicar una alineación
            diferente a cada uno.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Modificar el interlineado del documento utilizando los valores
            1,0; 1,5 y 2,0. Comparar cuál resulta más cómodo para la lectura.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Aplicar una sangría de primera línea a todos los párrafos del
            documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Crear un pequeño informe utilizando títulos centrados, texto
            justificado y espaciado uniforme entre párrafos.
          </div>

        </div>

      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Redacta un informe administrativo sobre una reunión de trabajo.
          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Un título centrado. <br />
          ✔ Una fecha alineada a la derecha. <br />
          ✔ Tres párrafos con texto justificado. <br />
          ✔ Interlineado de 1,5. <br />
          ✔ Sangría en la primera línea de cada párrafo. <br />
          ✔ Espaciado uniforme entre los párrafos.
          <br /><br />

          Al finalizar, revisa la presentación del documento y verifica que
          todos los elementos mantengan un formato consistente y profesional.
        </div>
      </section>

    </div>
  );
}
