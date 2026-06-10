export default function PluginsExtensionesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Plugins y Extensiones del Navegador
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los plugins y extensiones son complementos que permiten agregar nuevas
          funciones a los navegadores web. Gracias a ellos es posible mejorar la
          productividad, aumentar la seguridad, bloquear publicidad, traducir
          páginas web y realizar muchas otras tareas.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Conocer qué son los plugins y extensiones, para qué sirven y cómo
          instalarlos, administrarlos y eliminarlos de forma segura.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los Plugins y Extensiones?
        </h2>

        <p className="max-w-3xl">
          Son pequeños programas que se integran al navegador web para agregar
          funcionalidades adicionales. Permiten personalizar la experiencia de
          navegación y adaptar el navegador a las necesidades de cada usuario.
        </p>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre Plugin y Extensión
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="">
              <tr>
                <th className="border px-4 py-2">Concepto</th>
                <th className="border px-4 py-2">Descripción</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Plugin</td>
                <td className="border px-4 py-2">
                  Complemento que agrega funciones específicas al navegador o a
                  determinadas aplicaciones web.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Extensión</td>
                <td className="border px-4 py-2">
                  Herramienta que amplía las capacidades del navegador mediante
                  nuevas funciones integradas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Utilidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para Qué Sirven?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Bloquear publicidad.</li>
          <li>Traducir páginas web.</li>
          <li>Guardar contraseñas.</li>
          <li>Capturar pantallas.</li>
          <li>Mejorar la seguridad durante la navegación.</li>
          <li>Gestionar tareas y productividad.</li>
          <li>Tomar notas mientras se navega.</li>
        </ul>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplos de Extensiones Populares
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="">
              <tr>
                <th className="border px-4 py-2">Extensión</th>
                <th className="border px-4 py-2">Función</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Google Traductor</td>
                <td className="border px-4 py-2">
                  Traduce páginas web automáticamente.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">AdBlock</td>
                <td className="border px-4 py-2">
                  Bloquea anuncios publicitarios.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">LastPass</td>
                <td className="border px-4 py-2">
                  Gestiona contraseñas de forma segura.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Grammarly</td>
                <td className="border px-4 py-2">
                  Ayuda a corregir errores de escritura.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Google Keep</td>
                <td className="border px-4 py-2">
                  Permite guardar notas rápidamente.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Instalación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Instalar una Extensión
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Abrir la tienda de extensiones del navegador.</li>
            <li>Buscar la extensión deseada.</li>
            <li>Leer la descripción y los permisos solicitados.</li>
            <li>Seleccionar "Agregar al navegador".</li>
            <li>Confirmar la instalación.</li>
            <li>Verificar que la extensión aparezca en la barra del navegador.</li>
          </ol>
        </div>
      </section>

      {/* Administración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Administrar Extensiones
        </h2>

        <p className="max-w-3xl mb-4">
          Los navegadores permiten gestionar las extensiones instaladas para
          habilitarlas, deshabilitarlas o eliminarlas cuando sea necesario.
        </p>

        <div className="border p-6 rounded-xl">
          <ul className="list-disc list-inside space-y-2">
            <li>Activar una extensión.</li>
            <li>Desactivar temporalmente una extensión.</li>
            <li>Eliminar una extensión que ya no se utiliza.</li>
            <li>Actualizar extensiones instaladas.</li>
            <li>Revisar permisos de acceso.</li>
          </ul>
        </div>
      </section>

      {/* Seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad y Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Instalar extensiones únicamente desde fuentes oficiales.</li>
          <li>Leer las opiniones y valoraciones de otros usuarios.</li>
          <li>Revisar los permisos solicitados antes de instalar.</li>
          <li>Eliminar extensiones que no se utilicen.</li>
          <li>Mantener las extensiones actualizadas.</li>
          <li>Evitar instalar demasiadas extensiones innecesarias.</li>
        </ul>
      </section>

      {/* Ventajas y desventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas y Desventajas
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full">
            <thead className="">
              <tr>
                <th className="border px-4 py-2">Ventajas</th>
                <th className="border px-4 py-2">Desventajas</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  Mayor productividad.
                </td>
                <td className="border px-4 py-2">
                  Algunas consumen recursos del sistema.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Nuevas funcionalidades.
                </td>
                <td className="border px-4 py-2">
                  Pueden afectar el rendimiento del navegador.
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-2">
                  Mejor experiencia de navegación.
                </td>
                <td className="border px-4 py-2">
                  Algunas pueden presentar riesgos de privacidad.
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
            <p className="font-semibold mb-2">Actividad 1</p>
            Investiga tres extensiones populares para Google Chrome o Microsoft Edge e indica para qué sirven.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Instala una extensión de traducción y prueba su funcionamiento en una página en otro idioma.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Revisa las extensiones instaladas en tu navegador y anota cuáles utilizas con frecuencia.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Desactiva temporalmente una extensión y observa si cambia el comportamiento del navegador.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad Integradora</p>
            Crea una tabla comparativa con cinco extensiones diferentes indicando nombre, función principal, ventajas y posibles riesgos de seguridad.
          </div>

        </div>
      </section>

    </div>
  );
}