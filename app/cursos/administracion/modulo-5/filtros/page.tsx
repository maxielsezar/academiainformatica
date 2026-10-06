export default function FiltrosPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Filtros
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los filtros permiten mostrar únicamente los registros de una tabla
          que cumplen determinadas condiciones. Son una herramienta muy útil
          para analizar grandes cantidades de información sin modificar los
          datos originales.
        </p>
      </section>

      {/* ¿Qué es un filtro? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un filtro?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un filtro permite ocultar temporalmente los registros que no
          cumplen una determinada condición y mostrar solamente aquellos que
          resultan relevantes para una consulta.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Una empresa posee una tabla con 500 ventas. Si necesita consultar
            solamente las ventas realizadas por un determinado cliente, puede
            aplicar un filtro sobre la columna <strong>Cliente</strong>.
          </p>

          <p className="leading-relaxed mt-4">
            Los demás registros no se eliminan: simplemente dejan de
            mostrarse mientras el filtro está activo.
          </p>
        </div>
      </section>

      {/* Tabla ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de tabla
        </h2>

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
                <td className="border p-3">01/09/2026</td>
                <td className="border p-3">Comercial Sur</td>
                <td className="border p-3">Teclado</td>
                <td className="border p-3">5</td>
                <td className="border p-3">$125.000</td>
              </tr>

              <tr>
                <td className="border p-3">03/09/2026</td>
                <td className="border p-3">Empresa Patagonia</td>
                <td className="border p-3">Mouse</td>
                <td className="border p-3">10</td>
                <td className="border p-3">$150.000</td>
              </tr>

              <tr>
                <td className="border p-3">05/09/2026</td>
                <td className="border p-3">Comercial Sur</td>
                <td className="border p-3">Monitor</td>
                <td className="border p-3">2</td>
                <td className="border p-3">$360.000</td>
              </tr>

              <tr>
                <td className="border p-3">08/09/2026</td>
                <td className="border p-3">Oficina Central</td>
                <td className="border p-3">Impresora</td>
                <td className="border p-3">1</td>
                <td className="border p-3">$120.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Por ejemplo, podemos aplicar un filtro en la columna
          <strong> Cliente</strong> para mostrar solamente las ventas de
          "Comercial Sur".
        </p>
      </section>

      {/* Activar filtros */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Activar un filtro
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para aplicar filtros es importante que la información esté
          organizada en una tabla con encabezados claros.
        </p>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Seleccionar la tabla o el rango de datos.</li>
          <li>Activar la herramienta de filtro.</li>
          <li>Observar las opciones que aparecen en los encabezados.</li>
          <li>Seleccionar la columna sobre la que se desea filtrar.</li>
          <li>Elegir la condición o los valores que se desean mostrar.</li>
          <li>Aplicar el filtro.</li>
        </ol>
      </section>

      {/* Filtros de texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filtros de texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los filtros de texto permiten seleccionar registros según el
          contenido de una columna.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Igual a
            </h3>

            <p className="leading-relaxed">
              Muestra solamente los registros cuyo contenido coincide
              exactamente con un determinado texto.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Contiene
            </h3>

            <p className="leading-relaxed">
              Muestra los registros que contienen una determinada palabra o
              parte de un texto.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Comienza con
            </h3>

            <p className="leading-relaxed">
              Permite mostrar los registros cuyo contenido comienza con
              determinados caracteres.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Termina con
            </h3>

            <p className="leading-relaxed">
              Permite mostrar los registros cuyo contenido termina con
              determinados caracteres.
            </p>
          </div>

        </div>
      </section>

      {/* Filtros numéricos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filtros numéricos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los filtros numéricos permiten seleccionar registros de acuerdo
          con valores y condiciones matemáticas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Igual a un valor.</li>
            <li>Mayor que un valor.</li>
            <li>Menor que un valor.</li>
            <li>Mayor o igual que un valor.</li>
            <li>Menor o igual que un valor.</li>
            <li>Entre dos valores.</li>
          </ul>
        </div>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Si una tabla contiene el importe de diferentes ventas, podemos
            filtrar para mostrar solamente las ventas superiores a
            <strong> $100.000</strong>.
          </p>
        </div>
      </section>

      {/* Filtros de fechas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filtros de fechas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando una columna contiene fechas, es posible utilizar filtros
          específicos para localizar registros correspondientes a
          determinados períodos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Una fecha determinada.</li>
            <li>Antes de una fecha.</li>
            <li>Después de una fecha.</li>
            <li>Entre dos fechas.</li>
            <li>Un determinado mes.</li>
            <li>Un determinado año.</li>
          </ul>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          Por ejemplo, una empresa puede filtrar una tabla de ventas para
          mostrar únicamente las operaciones realizadas durante septiembre.
        </p>
      </section>

      {/* Filtros múltiples */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicar varios filtros
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es posible aplicar filtros en más de una columna al mismo tiempo.
          Esto permite realizar consultas más específicas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Se puede filtrar una tabla de ventas para mostrar únicamente:
          </p>

          <ul className="list-disc list-inside space-y-3 mt-4">
            <li>Cliente: Comercial Sur.</li>
            <li>Producto: Monitor.</li>
            <li>Importe: superior a $100.000.</li>
          </ul>

          <p className="leading-relaxed mt-4">
            De esta manera se obtiene solamente la información que cumple
            todas las condiciones seleccionadas.
          </p>
        </div>
      </section>

      {/* Quitar filtros */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Quitar un filtro
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Aplicar un filtro no elimina los datos. Para volver a visualizar
          todos los registros simplemente se debe borrar o quitar el filtro
          aplicado.
        </p>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl mt-6">
          <li>Identificar la columna que tiene un filtro activo.</li>
          <li>Abrir las opciones del filtro.</li>
          <li>Seleccionar la opción para limpiar o quitar el filtro.</li>
          <li>Comprobar que vuelvan a mostrarse todos los registros.</li>
        </ol>
      </section>

      {/* Filtro y ordenamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre filtrar y ordenar
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Ordenar
            </h3>

            <p className="leading-relaxed">
              Cambia el orden en el que aparecen los registros, pero
              mantiene visibles todos los datos.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Filtrar
            </h3>

            <p className="leading-relaxed">
              Oculta temporalmente los registros que no cumplen las
              condiciones seleccionadas.
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
          Los filtros permiten realizar consultas rápidas sobre información
          administrativa sin necesidad de crear una tabla nueva para cada
          consulta.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplos de uso
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Mostrar clientes de una determinada localidad.</li>
            <li>Consultar ventas realizadas durante un período.</li>
            <li>Localizar productos con bajo stock.</li>
            <li>Mostrar empleados pertenecientes a un sector.</li>
            <li>Identificar facturas pendientes.</li>
            <li>Consultar gastos superiores a un determinado importe.</li>
            <li>Localizar trámites próximos a vencer.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Utilizar encabezados claros y descriptivos.
          </li>
          <li>
            Mantener una estructura uniforme en toda la tabla.
          </li>
          <li>
            Verificar qué filtros están activos antes de analizar los datos.
          </li>
          <li>
            Quitar los filtros cuando finalice una consulta.
          </li>
          <li>
            Evitar modificar datos mientras se realiza una consulta sin
            verificar previamente los registros visibles.
          </li>
          <li>
            Combinar filtros solamente cuando sea necesario para obtener
            consultas específicas.
          </li>
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
              Actividad 1: Filtrar clientes
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 20 clientes, incluyendo nombre,
              localidad, teléfono, correo electrónico y estado. Aplicar
              filtros para mostrar clientes de diferentes localidades.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 2: Filtrar ventas
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 20 ventas. Filtrar la información
              para mostrar únicamente las ventas superiores a un determinado
              importe.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 3: Filtrar por fechas
            </h3>

            <p className="leading-relaxed">
              Utilizar una tabla de ventas con diferentes fechas. Aplicar
              filtros para mostrar solamente las operaciones realizadas
              durante un mes determinado y luego durante un período de fechas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 4: Aplicar filtros múltiples
            </h3>

            <p className="leading-relaxed">
              Crear una tabla de productos con código, descripción,
              categoría, precio y stock. Aplicar varios filtros al mismo
              tiempo para encontrar productos de una determinada categoría
              cuyo stock sea inferior a una cantidad establecida.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 5: Consultas administrativas
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con información administrativa y elaborar al
              menos cinco consultas diferentes utilizando filtros. Registrar
              qué condiciones se utilizaron y qué información se obtuvo en
              cada caso.
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
          Una empresa posee un registro de ventas con al menos 30
          operaciones. La tabla deberá contener fecha, cliente, localidad,
          producto, categoría, cantidad, precio unitario, total y estado de
          la venta.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Aplicar filtros para resolver diferentes consultas administrativas,
          por ejemplo: ventas de un determinado cliente, ventas de una
          localidad, operaciones superiores a un importe, ventas realizadas
          durante un período y productos pertenecientes a una categoría
          determinada.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Finalmente, combinar filtros de diferentes columnas para obtener
          consultas más específicas y explicar qué información se obtuvo en
          cada caso. Al finalizar, quitar los filtros y verificar que todos
          los registros originales continúen disponibles.
        </p>
      </section>

    </div>
  );
}