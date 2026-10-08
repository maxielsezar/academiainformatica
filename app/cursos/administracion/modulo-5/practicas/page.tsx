export default function PracticasPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Prácticas Integradoras
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En estas prácticas se integran los contenidos trabajados durante el
          módulo de planillas de cálculo. El objetivo es resolver situaciones
          administrativas utilizando datos, formatos, fórmulas, funciones,
          filtros, tablas, gráficos y tablas dinámicas.
        </p>
      </section>

      {/* Práctica 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Práctica 1: Registro de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una pequeña empresa necesita organizar las ventas realizadas durante
          un mes. Crear una planilla que permita registrar y analizar todas las
          operaciones.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Datos a registrar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Fecha</li>
            <li>Cliente</li>
            <li>Vendedor</li>
            <li>Producto</li>
            <li>Categoría</li>
            <li>Cantidad</li>
            <li>Precio unitario</li>
            <li>Importe total</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-900 mt-6 mb-4">
            Actividades
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Crear la tabla de ventas.</li>
            <li>Aplicar formato a los encabezados.</li>
            <li>Calcular el importe total mediante una fórmula.</li>
            <li>Aplicar formato monetario a los importes.</li>
            <li>Ordenar las ventas de mayor a menor importe.</li>
            <li>Aplicar filtros para consultar determinados vendedores.</li>
            <li>Crear un gráfico de columnas con las ventas.</li>
            <li>Crear una tabla dinámica que resuma las ventas por vendedor.</li>
          </ol>
        </div>
      </section>

      {/* Práctica 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Práctica 2: Control de gastos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una organización necesita controlar sus gastos mensuales para
          conocer en qué categorías se utiliza el presupuesto.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Datos a registrar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Fecha</li>
            <li>Concepto</li>
            <li>Categoría</li>
            <li>Responsable</li>
            <li>Medio de pago</li>
            <li>Importe</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-900 mt-6 mb-4">
            Actividades
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Crear una tabla con al menos 30 gastos.</li>
            <li>Aplicar formatos adecuados a fechas y valores monetarios.</li>
            <li>Calcular el gasto total.</li>
            <li>Obtener el gasto promedio.</li>
            <li>Identificar el gasto mayor y el menor.</li>
            <li>Utilizar filtros para consultar una categoría.</li>
            <li>Crear un gráfico circular con los gastos por categoría.</li>
            <li>Crear una tabla dinámica con el total por categoría.</li>
          </ol>
        </div>
      </section>

      {/* Práctica 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Práctica 3: Control de stock
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un comercio necesita controlar los productos disponibles y detectar
          aquellos que requieren reposición.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Datos a registrar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Código del producto</li>
            <li>Producto</li>
            <li>Categoría</li>
            <li>Proveedor</li>
            <li>Stock actual</li>
            <li>Stock mínimo</li>
            <li>Precio unitario</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-900 mt-6 mb-4">
            Actividades
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Cargar al menos 25 productos.</li>
            <li>Aplicar formato de tabla.</li>
            <li>Utilizar una función lógica para indicar si es necesario reponer.</li>
            <li>Ordenar los productos por stock.</li>
            <li>Aplicar filtros por categoría.</li>
            <li>Identificar los productos con menor stock.</li>
            <li>Crear un gráfico de barras con las cantidades disponibles.</li>
            <li>Crear una tabla dinámica para resumir el stock por categoría.</li>
          </ol>
        </div>
      </section>

      {/* Práctica 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Práctica 4: Registro de clientes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una empresa desea organizar la información de sus clientes y
          obtener diferentes estadísticas a partir de los datos registrados.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Datos a registrar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Nombre y apellido</li>
            <li>Localidad</li>
            <li>Teléfono</li>
            <li>Correo electrónico</li>
            <li>Fecha de alta</li>
            <li>Tipo de cliente</li>
            <li>Estado</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-900 mt-6 mb-4">
            Actividades
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Cargar al menos 30 clientes.</li>
            <li>Utilizar funciones de texto para normalizar nombres y apellidos.</li>
            <li>Utilizar funciones de fechas para analizar las altas.</li>
            <li>Ordenar los clientes por localidad.</li>
            <li>Aplicar filtros por tipo y estado.</li>
            <li>Crear una tabla dinámica con la cantidad de clientes por localidad.</li>
            <li>Crear un gráfico que represente la distribución de clientes.</li>
          </ol>
        </div>
      </section>

      {/* Práctica 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Práctica 5: Presupuesto mensual
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una persona necesita organizar sus ingresos y gastos mensuales para
          conocer cuánto dinero dispone y cuáles son sus principales gastos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Datos a registrar
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Fecha</li>
            <li>Concepto</li>
            <li>Tipo de movimiento</li>
            <li>Categoría</li>
            <li>Importe</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-900 mt-6 mb-4">
            Actividades
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>Crear un registro de ingresos y gastos.</li>
            <li>Utilizar funciones lógicas para clasificar los movimientos.</li>
            <li>Calcular el total de ingresos.</li>
            <li>Calcular el total de gastos.</li>
            <li>Obtener el saldo disponible.</li>
            <li>Analizar los gastos por categoría.</li>
            <li>Crear un gráfico comparativo de ingresos y gastos.</li>
            <li>Crear una tabla dinámica para analizar los movimientos.</li>
          </ol>
        </div>
      </section>

      {/* Práctica 6 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Práctica 6: Informe administrativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          A partir de una tabla de datos proporcionada por el docente, elaborar
          un informe administrativo que permita presentar los principales
          resultados obtenidos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            El informe deberá incluir
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Una tabla correctamente organizada.</li>
            <li>Formatos adecuados para cada tipo de dato.</li>
            <li>Fórmulas y funciones.</li>
            <li>Filtros y ordenamiento.</li>
            <li>Una tabla dinámica.</li>
            <li>Al menos dos gráficos.</li>
            <li>Una conclusión basada en los datos.</li>
          </ul>
        </div>
      </section>

      {/* Práctica 7 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Práctica 7: Análisis de ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear una planilla destinada al análisis de las ventas de una empresa
          durante un período de seis meses.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            El trabajo deberá permitir
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Conocer el total vendido.</li>
            <li>Calcular el promedio de ventas.</li>
            <li>Identificar la venta más alta y la más baja.</li>
            <li>Comparar vendedores.</li>
            <li>Comparar productos.</li>
            <li>Analizar las ventas por período.</li>
            <li>Filtrar información.</li>
            <li>Crear tablas dinámicas.</li>
            <li>Representar resultados mediante gráficos.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recomendaciones para las prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Mantener los datos organizados y sin registros incompletos.
          </li>
          <li>
            Utilizar encabezados claros para todas las columnas.
          </li>
          <li>
            Aplicar formatos coherentes.
          </li>
          <li>
            Utilizar fórmulas en lugar de realizar cálculos manualmente.
          </li>
          <li>
            Verificar los resultados antes de presentar el trabajo.
          </li>
          <li>
            Utilizar gráficos solamente cuando aporten información útil.
          </li>
          <li>
            Mantener separada la información original de los análisis cuando
            sea necesario.
          </li>
          <li>
            Guardar periódicamente el archivo para evitar pérdida de información.
          </li>
        </ul>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear desde cero un libro de cálculo para una pequeña empresa.
          El archivo deberá contener diferentes hojas para organizar la
          información de clientes, productos, ventas y gastos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En las hojas correspondientes deberán utilizarse formatos, fórmulas,
          funciones matemáticas, funciones lógicas, funciones de texto y
          funciones de fechas. También deberán incorporarse filtros, ordenamiento
          de datos y tablas correctamente estructuradas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Finalmente, elaborar tablas dinámicas y gráficos que permitan
          analizar la información y preparar una presentación clara de los
          resultados obtenidos. El trabajo deberá incluir una conclusión
          administrativa basada en los datos.
        </p>
      </section>

    </div>
  );
}