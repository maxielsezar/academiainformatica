export default function FechaHoraExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Funciones de Fecha y Hora en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Excel permite trabajar con fechas y horas de manera automática mediante
          funciones específicas. Estas herramientas son muy útiles para organizar
          información, calcular tiempos y mantener datos actualizados.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Objetivo
        </h2>

        <p className="max-w-3xl">
          Aprender a utilizar las funciones de fecha y hora en Excel aplicándolas
          en casos prácticos.
        </p>
      </section>

      {/* HOY */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          1. Función HOY()
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p><strong>Fórmula:</strong> =HOY()</p>
          <p>Devuelve la fecha actual del sistema.</p>

          <p className="mt-2">
            <strong>Diferencia:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fecha manual: queda fija y no cambia.</li>
            <li>=HOY(): se actualiza automáticamente cada día.</li>
          </ul>
        </div>
      </section>

      {/* AHORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          2. Función AHORA()
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p><strong>Fórmula:</strong> =AHORA()</p>
          <p>Devuelve la fecha y hora actual.</p>

          <p className="mt-2">
            <strong>¿Qué ocurre al actualizar?</strong>
          </p>
          <p>
            Cada vez que se recalcula la hoja o se abre el archivo, la función
            muestra la fecha y hora actualizadas.
          </p>
        </div>
      </section>

      {/* DIA MES AÑO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          3. Funciones DIA, MES y AÑO
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>
            Si en la celda A2 tenemos la fecha: <strong>29/09/2025</strong>
          </p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>=DIA(A2) → devuelve <strong>29</strong></li>
            <li>=MES(A2) → devuelve <strong>9</strong></li>
            <li>=AÑO(A2) → devuelve <strong>2025</strong></li>
          </ul>
        </div>
      </section>

      {/* FECHA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          4. Función FECHA
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p><strong>Fórmula:</strong> =FECHA(2025;12;25)</p>

          <p className="mt-2">
            Excel mostrará la fecha: <strong>25/12/2025</strong>
          </p>

          <p>
            Esta función permite construir una fecha a partir de año, mes y día.
          </p>
        </div>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirven estas funciones?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Registrar fechas automáticamente.</li>
          <li>Trabajar con vencimientos.</li>
          <li>Calcular días, meses o años.</li>
          <li>Automatizar reportes con fechas actuales.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividad Práctica
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Ejercicio 1</p>
            Inserta la fecha actual usando =HOY() y compárala con una fecha escrita manualmente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Ejercicio 2</p>
            Inserta la función =AHORA() y observa cómo cambia al actualizar la hoja.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Ejercicio 3</p>
            Escribe una fecha y usa DIA, MES y AÑO para separar sus partes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Ejercicio 4</p>
            Usa la función FECHA para crear una fecha específica.
          </div>

        </div>
      </section>

    </div>
  );
}