export default function AnimacionesObjetosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Animaciones de Objetos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las animaciones permiten agregar movimiento a los elementos dentro de
          una diapositiva. Se pueden aplicar a textos, imágenes, tablas,
          gráficos, formas y otros objetos para mejorar la presentación del
          contenido y dirigir la atención del público.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a insertar, configurar y administrar animaciones para crear
          presentaciones más dinámicas y organizadas.
        </p>
      </section>

      {/* Qué son */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son las Animaciones?
        </h2>

        <p className="max-w-3xl mb-4">
          Las animaciones son efectos visuales aplicados a objetos dentro de una
          diapositiva. Permiten controlar cuándo y cómo aparece, se mueve o
          desaparece cada elemento.
        </p>

        <div className="border p-6 rounded-xl">

          <p>
            Ejemplo: hacer que un título aparezca primero y luego mostrar una
            imagen o una lista de elementos.
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

            <thead className="bg-blue-200">
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
                  Se aplican a objetos específicos.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Ocurren al cambiar de diapositiva.
                </td>

                <td className="border px-4 py-2">
                  Ocurren dentro de una misma diapositiva.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Aplicar */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Aplicar una Animación
        </h2>

        <div className="border p-6 rounded-xl">

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar el objeto.</li>
            <li>Ir a la pestaña <strong>Animaciones</strong>.</li>
            <li>Elegir un efecto.</li>
            <li>Configurar inicio y duración.</li>
            <li>Previsualizar el resultado.</li>
          </ol>

        </div>

      </section>

      {/* Tipos */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Animaciones
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Categoría
                </th>

                <th className="border px-4 py-2">
                  Función
                </th>

                <th className="border px-4 py-2">
                  Ejemplos
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Entrada
                </td>

                <td className="border px-4 py-2">
                  Mostrar objetos.
                </td>

                <td className="border px-4 py-2">
                  Aparecer, Desvanecer.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Énfasis
                </td>

                <td className="border px-4 py-2">
                  Resaltar elementos.
                </td>

                <td className="border px-4 py-2">
                  Girar, Crecer.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Salida
                </td>

                <td className="border px-4 py-2">
                  Ocultar objetos.
                </td>

                <td className="border px-4 py-2">
                  Desaparecer, Reducir.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Trayectoria
                </td>

                <td className="border px-4 py-2">
                  Mover objetos.
                </td>

                <td className="border px-4 py-2">
                  Línea, Curva.
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      {/* Panel */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Panel de Animación
        </h2>

        <p className="max-w-3xl mb-4">
          El panel de animación permite visualizar y controlar el orden en que
          ocurren los efectos.
        </p>

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Modificar secuencia.</li>
            <li>Eliminar animaciones.</li>
            <li>Cambiar duración.</li>
            <li>Agregar retrasos.</li>
            <li>Previsualizar resultados.</li>
          </ul>

        </div>

      </section>

      {/* Configuración */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración de Inicio
        </h2>

        <div className="overflow-x-auto">

          <table className="table-auto border border-gray-300 w-full">

            <thead className="bg-blue-200">
              <tr>
                <th className="border px-4 py-2">
                  Inicio
                </th>

                <th className="border px-4 py-2">
                  Funcionamiento
                </th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="border px-4 py-2">
                  Al hacer clic
                </td>

                <td className="border px-4 py-2">
                  Se activa manualmente.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Con anterior
                </td>

                <td className="border px-4 py-2">
                  Inicia junto a otra animación.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Después de anterior
                </td>

                <td className="border px-4 py-2">
                  Se ejecuta automáticamente luego.
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

        <div className="border p-6 rounded-xl">

          <ul className="list-disc list-inside space-y-2">
            <li>Usar animaciones con moderación.</li>
            <li>Priorizar efectos simples.</li>
            <li>Mantener consistencia visual.</li>
            <li>Evitar movimientos excesivos.</li>
            <li>Utilizar animaciones para reforzar el mensaje.</li>
          </ul>

        </div>

      </section>

      {/* Errores */}
      <section>

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Aplicar demasiadas animaciones.</li>
          <li>Usar efectos que distraen.</li>
          <li>Combinar estilos diferentes sin criterio.</li>
          <li>Crear tiempos de espera largos.</li>
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

            Crea una diapositiva con título, texto e imagen y aplica una
            animación distinta a cada elemento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Configura una secuencia usando el panel de animación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Utiliza una trayectoria para mover un objeto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Diseña una presentación de 4 diapositivas incorporando animaciones
            equilibradas.
          </div>

        </div>

      </section>

    </div>
  );
}