export default function TransicionesEntreDiapositivasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Transiciones entre Diapositivas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las transiciones son efectos visuales que se aplican al pasar de una
          diapositiva a otra durante una presentación. Utilizadas correctamente,
          ayudan a dar continuidad y mejorar la experiencia visual del público.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a insertar, configurar y utilizar transiciones para mejorar
          la presentación del contenido sin distraer al público.
        </p>
      </section>

      {/* Definición */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Transición?
        </h2>

        <p className="max-w-3xl mb-4">
          Una transición es el efecto que aparece cuando una diapositiva cambia
          hacia la siguiente. Se aplica a la diapositiva completa y define cómo
          ocurre el cambio visual.
        </p>

        <div className="border p-6 rounded-xl">

          <p>
            Ejemplo: una diapositiva puede aparecer mediante un desvanecimiento,
            desplazamiento o efecto de transformación.
          </p>

        </div>

      </section>

      {/* Diferencia */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre Transiciones y Animaciones
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="">
              <tr>
                <th className="border px-4 py-2">
                  Transiciones
                </th>

                <th className="border px-4 py-2">
                  Animaciones
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Se aplican a la diapositiva completa.
                </td>

                <td className="border px-4 py-2">
                  Se aplican a objetos individuales.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Ocurren al cambiar de diapositiva.
                </td>

                <td className="border px-4 py-2">
                  Ocurren dentro de una diapositiva.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Controlan el paso entre pantallas.
                </td>

                <td className="border px-4 py-2">
                  Controlan movimiento del contenido.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Insertar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Aplicar una Transición
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar una diapositiva.</li>
            <li>Ir a la pestaña <strong>Transiciones</strong>.</li>
            <li>Elegir un efecto.</li>
            <li>Visualizar el resultado.</li>
            <li>Configurar duración y opciones.</li>
            <li>Aplicar a una o todas las diapositivas.</li>
          </ol>

        </div>

      </section>

      {/* Tipos */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Transiciones
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="">
              <tr>
                <th className="border px-4 py-2">
                  Transición
                </th>

                <th className="border px-4 py-2">
                  Descripción
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Desvanecer
                </td>

                <td className="border px-4 py-2">
                  Cambio suave entre diapositivas.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Empujar
                </td>

                <td className="border px-4 py-2">
                  Una diapositiva desplaza a otra.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Barrido
                </td>

                <td className="border px-4 py-2">
                  Aparición progresiva.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Dividir
                </td>

                <td className="border px-4 py-2">
                  Cambio mediante apertura o cierre.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Transformación (Morph)
                </td>

                <td className="border px-4 py-2">
                  Genera cambios suaves entre objetos.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Configuración */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración de Transiciones
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="">
              <tr>
                <th className="border px-4 py-2">
                  Configuración
                </th>

                <th className="border px-4 py-2">
                  Función
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Duración
                </td>

                <td className="border px-4 py-2">
                  Tiempo que tarda el efecto.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Sonido
                </td>

                <td className="border px-4 py-2">
                  Agregar efectos de audio.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Aplicar a todas
                </td>

                <td className="border px-4 py-2">
                  Copia la transición al resto.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Avance
                </td>

                <td className="border px-4 py-2">
                  Manual o automático.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Recomendaciones */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Utilizar transiciones simples.</li>
            <li>Mantener el mismo estilo visual.</li>
            <li>Evitar exceso de efectos.</li>
            <li>Usar duraciones cortas.</li>
            <li>Priorizar la claridad del contenido.</li>
          </ul>

        </div>

      </section>

      {/* Errores */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Aplicar una transición diferente en cada diapositiva.</li>
          <li>Agregar sonidos innecesarios.</li>
          <li>Usar efectos muy lentos.</li>
          <li>Exagerar el movimiento.</li>
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

            Crea una presentación y aplica transiciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Configura diferentes tiempos de duración.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Aplica una misma transición a toda la presentación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Compara una presentación con y sin transiciones y analiza el
            resultado.
          </div>

        </div>

      </section>

    </div>
  );
}