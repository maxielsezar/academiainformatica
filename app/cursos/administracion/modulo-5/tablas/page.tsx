export default function TablasPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Tablas y Gestión de Datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las tablas permiten organizar información de manera estructurada,
          facilitando su lectura, modificación, búsqueda, ordenamiento y
          análisis. En las tareas administrativas son especialmente útiles
          para trabajar con clientes, productos, ventas, gastos, empleados
          y otros registros.
        </p>
      </section>

      {/* ¿Qué es una tabla? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una tabla?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una tabla es un conjunto organizado de datos distribuido en filas
          y columnas. Cada fila representa generalmente un registro y cada
          columna contiene un tipo determinado de información.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo: tabla de clientes
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-3 text-left">ID</th>
                  <th className="border p-3 text-left">Nombre</th>
                  <th className="border p-3 text-left">Localidad</th>
                  <th className="border p-3 text-left">Teléfono</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">001</td>
                  <td className="border p-3">Juan Pérez</td>
                  <td className="border p-3">Esquel</td>
                  <td className="border p-3">2945-123456</td>
                </tr>

                <tr>
                  <td className="border p-3">002</td>
                  <td className="border p-3">María López</td>
                  <td className="border p-3">Trevelin</td>
                  <td className="border p-3">2945-654321</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de una tabla
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Encabezados:</strong> identifican qué información contiene
            cada columna.
          </li>
          <li>
            <strong>Filas:</strong> representan registros individuales.
          </li>
          <li>
            <strong>Columnas:</strong> contienen un determinado tipo de dato.
          </li>
          <li>
            <strong>Registros:</strong> conjunto de datos correspondientes a
            un elemento.
          </li>
          <li>
            <strong>Rango:</strong> conjunto de celdas que contiene la
            información de la tabla.
          </li>
        </ul>
      </section>

      {/* Crear tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una tabla
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para crear una tabla es necesario organizar previamente los datos.
          La primera fila debe contener encabezados claros y cada registro
          debe ocupar una fila diferente.
        </p>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Ingresar los encabezados de las columnas.</li>
          <li>Cargar los datos correspondientes.</li>
          <li>Seleccionar todo el rango de información.</li>
          <li>Utilizar la opción para insertar o convertir el rango en tabla.</li>
          <li>Elegir un formato apropiado.</li>
          <li>Verificar que los encabezados sean correctos.</li>
        </ol>
      </section>

      {/* Encabezados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Encabezados de las tablas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los encabezados permiten identificar rápidamente la información
          almacenada en cada columna. Deben ser claros, breves y representar
          correctamente los datos que contienen.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo administrativo
          </h3>

          <ul className="list-disc list-inside space-y-2">
            <li>Fecha</li>
            <li>Cliente</li>
            <li>Producto</li>
            <li>Cantidad</li>
            <li>Precio unitario</li>
            <li>Total</li>
            <li>Forma de pago</li>
          </ul>
        </div>
      </section>

      {/* Formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formato de una tabla
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato permite mejorar la presentación y facilitar la lectura
          de los datos. Se pueden utilizar diferentes estilos, bordes,
          formatos numéricos y colores para distinguir encabezados y
          registros.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-6">
          <li>Aplicar un formato diferenciado a los encabezados.</li>
          <li>Ajustar el ancho de las columnas.</li>
          <li>Utilizar formatos de moneda para importes.</li>
          <li>Utilizar formatos de fecha para fechas.</li>
          <li>Evitar una cantidad excesiva de colores.</li>
          <li>Mantener una presentación uniforme.</li>
        </ul>
      </section>

      {/* Filas y columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar y eliminar datos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las tablas permiten incorporar nuevos registros y modificar los
          existentes. También es posible agregar o eliminar columnas cuando
          cambia la información que se necesita administrar.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Una empresa inicialmente registra nombre, teléfono y localidad
            de sus clientes. Posteriormente decide registrar también el
            correo electrónico. En ese caso puede incorporar una nueva
            columna a la tabla.
          </p>
        </div>
      </section>

      {/* Gestión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Gestión de datos mediante tablas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una tabla facilita diferentes tareas de gestión de información.
          Puede combinarse con herramientas de ordenamiento, filtros,
          fórmulas, funciones y gráficos para analizar los datos.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Ordenar
            </h3>
            <p className="leading-relaxed">
              Permite organizar los registros según diferentes criterios,
              como nombre, fecha, cantidad o importe.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Filtrar
            </h3>
            <p className="leading-relaxed">
              Permite mostrar solamente los registros que cumplen determinadas
              condiciones.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Calcular
            </h3>
            <p className="leading-relaxed">
              Las fórmulas y funciones permiten realizar cálculos sobre los
              datos registrados.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Analizar
            </h3>
            <p className="leading-relaxed">
              Los datos pueden utilizarse para generar resúmenes y gráficos
              que faciliten la toma de decisiones administrativas.
            </p>
          </div>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un entorno administrativo, las tablas pueden utilizarse para
          centralizar información y facilitar el seguimiento de las
          operaciones de una organización.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo: registro de ventas
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Fecha</th>
                  <th className="border p-3 text-left">Cliente</th>
                  <th className="border p-3 text-left">Producto</th>
                  <th className="border p-3 text-left">Cantidad</th>
                  <th className="border p-3 text-left">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">10/09/2026</td>
                  <td className="border p-3">Comercial Sur</td>
                  <td className="border p-3">Producto A</td>
                  <td className="border p-3">5</td>
                  <td className="border p-3">$25.000</td>
                </tr>

                <tr>
                  <td className="border p-3">11/09/2026</td>
                  <td className="border p-3">Empresa Patagonia</td>
                  <td className="border p-3">Producto B</td>
                  <td className="border p-3">3</td>
                  <td className="border p-3">$18.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mt-6">
            A partir de esta tabla se pueden ordenar las ventas, filtrar por
            cliente, calcular totales y representar la información mediante
            gráficos.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Utilizar encabezados claros y descriptivos.</li>
          <li>Mantener un único tipo de dato por columna.</li>
          <li>Evitar filas o columnas innecesariamente vacías.</li>
          <li>Mantener formatos consistentes.</li>
          <li>Revisar los datos antes de realizar cálculos.</li>
          <li>Guardar periódicamente el archivo.</li>
          <li>Realizar copias de seguridad de información importante.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 1: Tabla de clientes
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 10 clientes. Incluir las columnas:
              ID, nombre, apellido, localidad, teléfono, correo electrónico
              y fecha de registro. Aplicar un formato diferenciado a los
              encabezados.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 2: Registro de ventas
            </h3>

            <p className="leading-relaxed">
              Crear una tabla para registrar 15 ventas. Incluir fecha,
              cliente, producto, cantidad, precio unitario y total. Utilizar
              fórmulas para calcular automáticamente el importe de cada venta.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 3: Gestión de productos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla de productos con código, descripción, categoría,
              precio, stock y proveedor. Aplicar formatos adecuados para los
              precios y cantidades.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 4: Organizar información
            </h3>

            <p className="leading-relaxed">
              Tomar una lista de datos desorganizada y transformarla en una
              tabla correctamente estructurada. Identificar los encabezados,
              separar los datos en columnas y eliminar información duplicada
              o innecesaria.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 5: Tabla administrativa
            </h3>

            <p className="leading-relaxed">
              Diseñar una tabla para una situación administrativa real, como
              control de asistencia, registro de gastos, inventario,
              proveedores o seguimiento de trámites. Aplicar formato,
              fórmulas y herramientas de gestión de datos.
            </p>
          </div>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una pequeña empresa necesita organizar la información de sus
          operaciones. Crear un libro de cálculo con una tabla de clientes,
          una tabla de productos y una tabla de ventas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Cada tabla deberá contar con encabezados claros, formatos adecuados
          y datos correctamente organizados. En la tabla de ventas se deberán
          utilizar fórmulas para calcular los importes. Luego, ordenar y
          filtrar la información para obtener diferentes consultas sobre las
          operaciones realizadas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Finalmente, presentar las tablas de manera clara y explicar qué
          información puede obtenerse a partir de ellas para facilitar las
          tareas administrativas.
        </p>
      </section>

    </div>
  );
}