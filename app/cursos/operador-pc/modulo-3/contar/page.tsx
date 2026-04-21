export default function ContarContarSiExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Funciones CONTAR y CONTAR.SI en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones CONTAR y CONTAR.SI permiten contar datos dentro de una
          planilla. Son muy útiles para analizar información, como saber cuántos
          alumnos aprobaron o cuántos valores cumplen una condición.
        </p>
      </section>

      {/* CONTAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Función CONTAR
        </h2>

        <p className="max-w-3xl mb-4">
          La función CONTAR cuenta la cantidad de celdas que contienen números.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo:</p>
          <p>=CONTAR(A1:A10)</p>
          <p>Cuenta cuántas celdas con números hay en ese rango.</p>
        </div>
      </section>

      {/* CONTAR.SI */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Función CONTAR.SI
        </h2>

        <p className="max-w-3xl mb-4">
          La función CONTAR.SI cuenta la cantidad de celdas que cumplen una condición específica.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo:</p>
          <p>=CONTAR.SI(A1:A10; "&gt;=6")</p>
          <p>Cuenta cuántos valores son mayores o iguales a 6.</p>
        </div>
      </section>

      {/* Para qué sirven */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirven?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Contar datos en una tabla.</li>
          <li>Analizar resultados automáticamente.</li>
          <li>Contar aprobados y desaprobados.</li>
          <li>Filtrar información según condiciones.</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividad Práctica: Análisis de Notas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Crea una planilla con una columna de notas (al menos 10 alumnos).
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Usa la función CONTAR para saber cuántas notas hay en total.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Usa CONTAR.SI para calcular:
            <ul className="list-disc list-inside mt-2">
              <li>Cuántos alumnos aprobaron (nota ≥ 6).</li>
              <li>Cuántos alumnos desaprobaron (nota &lt; 6).</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Analizar automáticamente el rendimiento del grupo utilizando funciones.
          </div>

        </div>
      </section>

    </div>
  );
}