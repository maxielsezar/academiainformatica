export default function FormatoTextoImagenesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formato de Texto e Imágenes
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El formato permite mejorar la apariencia visual de una presentación.
          Aplicar correctamente estilos al texto y a las imágenes ayuda a que la
          información sea más clara, atractiva y profesional para el público.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a modificar el aspecto del texto y de las imágenes utilizando
          las herramientas de formato disponibles en PowerPoint.
        </p>
      </section>

      {/* Texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de Texto
        </h2>

        <p className="max-w-3xl mb-4">
          El texto puede personalizarse para destacar títulos, organizar ideas y
          mejorar la lectura de la presentación.
        </p>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead>
              <tr>
                <th className="border px-4 py-2">
                  Herramienta
                </th>

                <th className="border px-4 py-2">
                  Función
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Fuente
                </td>

                <td className="border px-4 py-2">
                  Cambiar el tipo de letra.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Tamaño
                </td>

                <td className="border px-4 py-2">
                  Modificar el tamaño del texto.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Color
                </td>

                <td className="border px-4 py-2">
                  Cambiar el color de las letras.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Negrita
                </td>

                <td className="border px-4 py-2">
                  Resaltar contenido importante.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Cursiva
                </td>

                <td className="border px-4 py-2">
                  Dar énfasis visual.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Subrayado
                </td>

                <td className="border px-4 py-2">
                  Destacar palabras específicas.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Aplicar formato */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Aplicar Formato al Texto
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar el texto.</li>
            <li>Ir a la pestaña <strong>Inicio</strong>.</li>
            <li>Utilizar el grupo <strong>Fuente</strong>.</li>
            <li>Aplicar tamaño, color y estilos.</li>
            <li>Visualizar el resultado.</li>
          </ol>

        </div>

      </section>

      {/* Organización */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de Párrafo
        </h2>

        <p className="mb-4 max-w-3xl">
          Además del formato individual del texto, también se puede organizar el
          contenido dentro de cada cuadro de texto.
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Alinear texto a izquierda, centro o derecha.</li>
          <li>Justificar párrafos.</li>
          <li>Crear listas con viñetas.</li>
          <li>Crear listas numeradas.</li>
          <li>Modificar sangrías y espaciado.</li>
        </ul>

      </section>

      {/* Imagen */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Insertar Imágenes
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Ir a <strong>Insertar</strong>.</li>
            <li>Seleccionar <strong>Imágenes</strong>.</li>
            <li>Elegir una imagen desde el dispositivo.</li>
            <li>Insertarla en la diapositiva.</li>
            <li>Ajustar tamaño y posición.</li>
          </ol>

        </div>

      </section>

      {/* Formato imágenes */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de Imágenes
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead>
              <tr>
                <th className="border px-4 py-2">
                  Herramienta
                </th>

                <th className="border px-4 py-2">
                  Función
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Recortar
                </td>

                <td className="border px-4 py-2">
                  Eliminar partes no necesarias.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Redimensionar
                </td>

                <td className="border px-4 py-2">
                  Cambiar tamaño.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Correcciones
                </td>

                <td className="border px-4 py-2">
                  Ajustar brillo y contraste.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Bordes
                </td>

                <td className="border px-4 py-2">
                  Aplicar marcos decorativos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Efectos
                </td>

                <td className="border px-4 py-2">
                  Sombras, reflejos y estilos.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Distribución */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organizar Imágenes en la Diapositiva
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Mantener alineación entre objetos.</li>
            <li>No cubrir texto importante.</li>
            <li>Usar imágenes de buena calidad.</li>
            <li>Dejar espacios visuales.</li>
            <li>Evitar exceso de elementos.</li>
          </ul>

        </div>

      </section>

      {/* Diseño */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas Visuales
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead>
              <tr>
                <th className="border px-4 py-2">
                  Recomendado
                </th>

                <th className="border px-4 py-2">
                  Evitar
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Pocas fuentes.
                </td>

                <td className="border px-4 py-2">
                  Muchas tipografías distintas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Texto breve.
                </td>

                <td className="border px-4 py-2">
                  Párrafos largos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Imágenes claras.
                </td>

                <td className="border px-4 py-2">
                  Imágenes pixeladas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Buen contraste.
                </td>

                <td className="border px-4 py-2">
                  Colores difíciles de leer.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Actividades */}
      <section className="mb-6">

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Crea una diapositiva con título y aplica distintos formatos al texto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Inserta tres imágenes y aplica recorte y efectos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Diseña una diapositiva manteniendo una apariencia profesional.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Crea una diapositiva donde combines texto e imágenes respetando
            alineación y espacios.
          </div>

        </div>

      </section>

    </div>
  );
}