export default function IntroduccionExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Introducción a la Planilla de Cálculo (Excel)
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una planilla de cálculo es un programa informático que permite organizar
          información en forma de tablas y realizar cálculos automáticos mediante
          fórmulas. Es una herramienta fundamental para trabajar con números,
          datos y estadísticas en distintos ámbitos como el estudio, el trabajo
          y la vida cotidiana.
        </p>
      </section>

      {/* Qué permite hacer */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué permite hacer una planilla de cálculo?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Ingresar y organizar datos en tablas.</li>
          <li>Realizar cálculos automáticos.</li>
          <li>Aplicar fórmulas y funciones.</li>
          <li>Crear gráficos para representar información.</li>
          <li>Ordenar y analizar datos.</li>
          <li>Guardar y compartir archivos.</li>
        </ul>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplos de Programas de Planilla de Cálculo
        </h2>

        <p className="mb-4 max-w-3xl">
          Existen distintos programas que funcionan como planillas de cálculo.
          Algunos de los más utilizados son:
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>Microsoft Excel</li>
          <li>LibreOffice Calc</li>
          <li>Google Sheets</li>
        </ul>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Usos de la Planilla de Cálculo
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Las planillas de cálculo se utilizan en muchas situaciones:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Realizar presupuestos.</li>
            <li>Controlar gastos personales.</li>
            <li>Registrar ventas o productos.</li>
            <li>Calcular notas o promedios.</li>
            <li>Organizar información de manera clara.</li>
          </ul>
        </div>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explica con tus palabras qué es una planilla de cálculo y para qué se utiliza.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Investiga qué programa de planilla de cálculo tiene instalada tu computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Escribe tres ejemplos de situaciones en las que usarías Excel en tu vida diaria.
          </div>

        </div>
      </section>

    </div>
  );
}