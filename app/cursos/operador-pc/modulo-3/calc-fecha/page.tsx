export default function CalculosFechasExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Cálculos con Fechas en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Excel permite realizar cálculos con fechas de manera automática. Una de
          las operaciones más utilizadas es calcular la cantidad de días entre dos
          fechas, lo cual es muy útil para vencimientos, plazos y seguimiento de tareas.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a calcular la diferencia entre fechas utilizando Excel.
        </p>
      </section>

      {/* Resta de fechas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          1. Restar Fechas
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            En Excel, las fechas se pueden restar directamente:
          </p>

          <p><strong>Ejemplo:</strong></p>
          <p>=B2 - A2</p>

          <p>
            Si A2 = 01/09/2025 y B2 = 10/09/2025, el resultado será:
            <strong> 9 días</strong>
          </p>
        </div>
      </section>

      {/* HOY */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          2. Calcular días desde hoy
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Puedes calcular cuántos días han pasado desde una fecha hasta hoy:
          </p>

          <p><strong>Ejemplo:</strong></p>
          <p>=HOY() - A2</p>

          <p>
            Esto devuelve la cantidad de días desde la fecha en A2 hasta la fecha actual.
          </p>
        </div>
      </section>

      {/* DATEDIF */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          3. Función DATEDIF
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            La función DATEDIF permite calcular diferencias más específicas entre fechas.
          </p>

          <p><strong>Ejemplo:</strong></p>
          <p>=DATEDIF(A2, B2, "d")</p>

          <p>Devuelve la cantidad de días entre ambas fechas.</p>

          <p className="mt-2">
            También se puede usar:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>"m" → meses</li>
            <li>"y" → años</li>
          </ul>
        </div>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirve?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Calcular vencimientos de pagos.</li>
          <li>Controlar días de entrega.</li>
          <li>Medir duración de proyectos.</li>
          <li>Analizar tiempos entre eventos.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividad Práctica
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Escribe dos fechas en A2 y B2.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Calcula la diferencia en días usando una resta.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Usa la función DATEDIF para calcular días, meses y años.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 4</p>
            Usa la función HOY() para calcular cuántos días han pasado desde una fecha.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Comprender cómo trabajar con fechas y calcular diferencias automáticamente.
          </div>

        </div>
      </section>

    </div>
  );
}