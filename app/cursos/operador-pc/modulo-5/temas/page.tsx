export default function TemasPlantillasPowerPointPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Temas y Plantillas en PowerPoint
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los temas y plantillas permiten diseñar presentaciones profesionales
          de manera rápida y organizada. Ayudan a mantener una apariencia
          uniforme entre todas las diapositivas y reducen el tiempo necesario
          para crear el diseño desde cero.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender qué son los temas y plantillas, conocer sus diferencias y
          aplicarlos correctamente al crear una presentación.
        </p>
      </section>

      {/* Definiciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los Temas y las Plantillas?
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead>
              <tr>
                <th className="border px-4 py-2">
                  Elemento
                </th>

                <th className="border px-4 py-2">
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Tema
                </td>

                <td className="border px-4 py-2">
                  Conjunto de colores, fuentes y estilos visuales aplicados a
                  toda la presentación.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Plantilla
                </td>

                <td className="border px-4 py-2">
                  Presentación prediseñada que incluye estructura, diseños,
                  contenido de ejemplo y estilos.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Temas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicar un Tema
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir la presentación.</li>
            <li>Ir a la pestaña <strong>Diseño</strong>.</li>
            <li>Buscar la sección <strong>Temas</strong>.</li>
            <li>Seleccionar el diseño deseado.</li>
            <li>Visualizar los cambios automáticamente.</li>
          </ol>

        </div>

      </section>

      {/* Componentes */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos que Modifica un Tema
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Colores
            </h3>

            <p>
              Cambia la paleta utilizada en títulos, fondos y objetos.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Tipografías
            </h3>

            <p>
              Define las fuentes para títulos y contenido.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Fondos
            </h3>

            <p>
              Modifica colores, degradados e imágenes de fondo.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Estilos
            </h3>

            <p>
              Cambia el aspecto de tablas, gráficos y formas.
            </p>
          </div>

        </div>

      </section>

      {/* Plantillas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una Presentación desde una Plantilla
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir PowerPoint.</li>
            <li>Seleccionar <strong>Nuevo</strong>.</li>
            <li>Explorar las plantillas disponibles.</li>
            <li>Elegir una categoría.</li>
            <li>Presionar <strong>Crear</strong>.</li>
            <li>Modificar el contenido de ejemplo.</li>
          </ol>

        </div>

      </section>

      {/* Cuándo usar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuándo Conviene Utilizar Plantillas?
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead>
              <tr>
                <th className="border px-4 py-2">
                  Situación
                </th>

                <th className="border px-4 py-2">
                  Beneficio
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Exposiciones escolares
                </td>

                <td className="border px-4 py-2">
                  Mejor organización visual.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Presentaciones laborales
                </td>

                <td className="border px-4 py-2">
                  Imagen profesional.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Proyectos rápidos
                </td>

                <td className="border px-4 py-2">
                  Ahorro de tiempo.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Informes visuales
                </td>

                <td className="border px-4 py-2">
                  Diseño consistente.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Buenas prácticas */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Usar un único tema en toda la presentación.</li>
          <li>Elegir colores con buen contraste.</li>
          <li>No mezclar muchas fuentes.</li>
          <li>Mantener coherencia visual.</li>
          <li>Priorizar plantillas simples y claras.</li>
        </ul>

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

            Crea una presentación nueva utilizando una plantilla prediseñada.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Aplica distintos temas y compara los resultados.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Modifica colores y tipografías manteniendo el mismo tema.
          </div>


        </div>

      </section>

    </div>
  );
}