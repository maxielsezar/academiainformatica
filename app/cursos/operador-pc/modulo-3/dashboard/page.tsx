export default function DashboardExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          Creación de Dashboards en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un dashboard es un panel visual que permite analizar información de forma
          rápida mediante gráficos, indicadores y tablas dinámicas. Los dashboards
          son muy utilizados en empresas para controlar ventas, stock, rendimiento
          y estadísticas.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a crear un dashboard profesional en Excel utilizando tablas,
          gráficos y segmentación de datos.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          ¿Qué es un Dashboard?
        </h2>

        <p className="max-w-3xl">
          Un dashboard es una hoja diseñada para mostrar información importante
          de manera visual e interactiva. Resume datos utilizando gráficos,
          indicadores y filtros dinámicos.
        </p>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Elementos de un Dashboard
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Tablas dinámicas.</li>
          <li>Gráficos dinámicos.</li>
          <li>Segmentación de datos.</li>
          <li>Indicadores y métricas.</li>
          <li>Formato visual profesional.</li>
        </ul>
      </section>

      {/* Tabla ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Ejemplo de Datos
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300 w-full text-left">
            <thead className="bg-green-200">
              <tr>
                <th className="border px-4 py-2">Vendedor</th>
                <th className="border px-4 py-2">Producto</th>
                <th className="border px-4 py-2">Mes</th>
                <th className="border px-4 py-2">Ventas</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Juan</td>
                <td className="border px-4 py-2">Notebook</td>
                <td className="border px-4 py-2">Enero</td>
                <td className="border px-4 py-2">$250000</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Ana</td>
                <td className="border px-4 py-2">Monitor</td>
                <td className="border px-4 py-2">Enero</td>
                <td className="border px-4 py-2">$180000</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Luis</td>
                <td className="border px-4 py-2">Teclado</td>
                <td className="border px-4 py-2">Febrero</td>
                <td className="border px-4 py-2">$90000</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">María</td>
                <td className="border px-4 py-2">Mouse</td>
                <td className="border px-4 py-2">Febrero</td>
                <td className="border px-4 py-2">$70000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Pasos para Crear un Dashboard
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <ol className="list-decimal list-inside space-y-2">
            <li>Organizar los datos en una tabla.</li>
            <li>Crear tablas dinámicas.</li>
            <li>Insertar gráficos dinámicos.</li>
            <li>Agregar segmentación de datos.</li>
            <li>Diseñar la hoja con colores y títulos.</li>
            <li>Mostrar indicadores importantes.</li>
          </ol>
        </div>
      </section>

      {/* Segmentación */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Segmentación de Datos
        </h2>

        <p className="max-w-3xl">
          La segmentación permite filtrar información visualmente mediante botones.
          Por ejemplo, se puede mostrar solamente un mes o un vendedor específico.
        </p>
      </section>

      {/* Indicadores */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Indicadores Importantes
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Total de ventas.</li>
          <li>Producto más vendido.</li>
          <li>Mejor vendedor.</li>
          <li>Ventas por mes.</li>
        </ul>
      </section>

      {/* Diseño */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Recomendaciones de Diseño
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Usar colores uniformes.</li>
          <li>No sobrecargar el panel.</li>
          <li>Utilizar títulos claros.</li>
          <li>Destacar la información importante.</li>
          <li>Organizar los gráficos correctamente.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          Actividad Práctica
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Crea una tabla de ventas con productos, vendedores y meses.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Inserta una tabla dinámica.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Crea gráficos dinámicos utilizando los datos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 4</p>
            Agrega segmentación de datos para filtrar información.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 5</p>
            Diseña un dashboard profesional con títulos y colores.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Crear un panel interactivo para analizar información de manera visual.
          </div>

        </div>
      </section>

    </div>
  );
}