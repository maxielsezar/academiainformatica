
export default function TablasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Tablas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las tablas son una herramienta fundamental de los procesadores de
          textos, ya que permiten organizar información en filas y columnas de
          forma clara y ordenada.
          <br /><br />
          Son muy utilizadas en documentos administrativos para elaborar
          presupuestos, listados, cronogramas, inventarios, planillas de
          asistencia y muchos otros tipos de documentos.
        </p>
      </section>

      {/* ¿Qué es una tabla? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Tabla?
        </h2>

        <div className="border p-6 rounded-xl">
          Una tabla es una estructura formada por <strong>filas</strong> y
          <strong> columnas</strong> que permite organizar datos de manera
          sencilla.
          <br /><br />
          Cada intersección entre una fila y una columna recibe el nombre de
          <strong> celda</strong>, donde se puede escribir texto, números,
          imágenes u otros elementos.
        </div>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes de una Tabla
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <strong>Filas</strong>
            <br /><br />
            Son las divisiones horizontales de la tabla.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Columnas</strong>
            <br /><br />
            Son las divisiones verticales donde se organizan los datos.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Celdas</strong>
            <br /><br />
            Cada espacio donde se ingresa información dentro de la tabla.
          </div>

        </div>
      </section>

      {/* Crear tablas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una Tabla
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para insertar una tabla normalmente se utiliza la opción
          <strong> Insertar → Tabla</strong>, donde se selecciona la cantidad
          de filas y columnas necesarias.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Pasos generales:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar la pestaña <strong>Insertar</strong>.</li>
            <li>Hacer clic en <strong>Tabla</strong>.</li>
            <li>Elegir la cantidad de filas y columnas.</li>
            <li>Comenzar a completar la información.</li>
          </ol>

        </div>
      </section>

      {/* Edición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modificar una Tabla
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una vez creada, la tabla puede modificarse fácilmente para adaptarse
          a las necesidades del documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Agregar filas.</li>
            <li>Eliminar filas.</li>
            <li>Agregar columnas.</li>
            <li>Eliminar columnas.</li>
            <li>Modificar el tamaño de las celdas.</li>
            <li>Cambiar el ancho de las columnas.</li>
            <li>Modificar la altura de las filas.</li>
          </ul>

        </div>
      </section>

      {/* Combinar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar y Dividir Celdas
        </h2>

        <div className="border p-6 rounded-xl">
          Los procesadores de textos permiten unir varias celdas en una sola o
          dividir una celda en varias partes.
          <br /><br />
          Esta función resulta muy útil para crear encabezados, títulos o
          estructuras más complejas dentro de una tabla.
        </div>
      </section>

      {/* Formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de Tablas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato permite mejorar la presentación visual de la información.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <strong>Bordes</strong>
            <br /><br />
            Permiten delimitar las celdas y mejorar la organización de los
            datos.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Sombreado</strong>
            <br /><br />
            Agrega colores de fondo para destacar encabezados o información
            importante.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Alineación</strong>
            <br /><br />
            El contenido puede alinearse a la izquierda, al centro o a la
            derecha, tanto horizontal como verticalmente.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Estilos de Tabla</strong>
            <br /><br />
            Permiten aplicar diseños predeterminados con colores, bordes y
            formatos profesionales.
          </div>

        </div>
      </section>

      {/* Uso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicaciones en Administración
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las tablas son una de las herramientas más utilizadas en el ámbito
          administrativo para organizar información de manera eficiente.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Inventarios.</li>
            <li>Listados de clientes.</li>
            <li>Control de asistencia.</li>
            <li>Cronogramas de trabajo.</li>
            <li>Presupuestos.</li>
            <li>Planillas de seguimiento.</li>
            <li>Horarios de actividades.</li>
          </ul>

        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Utilizar Tablas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Organizan grandes cantidades de información.</li>
          <li>Facilitan la lectura.</li>
          <li>Permiten comparar datos rápidamente.</li>
          <li>Mejoran la presentación de los documentos.</li>
          <li>Favorecen el orden y la claridad.</li>
          <li>Son fáciles de editar y actualizar.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar títulos claros en cada columna.</li>
          <li>No sobrecargar las tablas con demasiada información.</li>
          <li>Mantener un diseño uniforme.</li>
          <li>Utilizar colores con moderación.</li>
          <li>Alinear correctamente los datos.</li>
          <li>Revisar que la información sea correcta antes de imprimir.</li>
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

            Crear una tabla de 5 columnas y 6 filas con información de
            productos de una oficina.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Aplicar un estilo de tabla y modificar el color del encabezado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Agregar una nueva columna para registrar el stock disponible de
            cada producto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Combinar las celdas de la primera fila para crear un título general
            para la tabla.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Diseña una tabla para el <strong>inventario de una empresa</strong>.
          <br /><br />

          La tabla deberá incluir como mínimo las siguientes columnas:

          <br /><br />

          ✔ Código del producto.<br />
          ✔ Nombre.<br />
          ✔ Categoría.<br />
          ✔ Cantidad disponible.<br />
          ✔ Precio unitario.<br />
          ✔ Estado (Disponible / Agotado).<br /><br />

          Luego aplica un estilo profesional, resalta el encabezado con un
          color de fondo, centra los títulos de las columnas y verifica que
          toda la información quede correctamente alineada y organizada.
        </div>
      </section>

    </div>
  );
}
