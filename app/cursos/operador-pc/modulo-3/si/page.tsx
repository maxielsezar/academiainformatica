export default function FuncionSIExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Función SI en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La función SI permite tomar decisiones dentro de una planilla de cálculo.
          Evalúa una condición y devuelve un resultado si se cumple, y otro diferente
          si no se cumple. Es una de las funciones más importantes de Excel.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es la función SI?
        </h2>

        <p className="max-w-3xl">
          Es una función lógica que permite evaluar una condición. Dependiendo del
          resultado (verdadero o falso), Excel devuelve un valor distinto.
        </p>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Estructura de la función
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Sintaxis:</p>
          <p>=SI(condición, valor_si_verdadero, valor_si_falso)</p>

          <p className="mt-2">Ejemplo:</p>
          <p>=SI(A1&gt;=6, "Aprobado", "Desaprobado")</p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Cómo funciona?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Evalúa una condición (por ejemplo: A1 ≥ 6).</li>
          <li>Si se cumple → muestra un resultado.</li>
          <li>Si no se cumple → muestra otro resultado.</li>
        </ul>
      </section>

      {/* Uso práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Uso en la Vida Real
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>La función SI se utiliza para:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Determinar si un alumno aprueba o desaprueba.</li>
            <li>Clasificar datos automáticamente.</li>
            <li>Tomar decisiones basadas en condiciones.</li>
          </ul>
        </div>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Actividad Práctica: Resultado de Notas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Crea una tabla con:
            <br />
            Nombre | Nota
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Agrega una columna llamada "Resultado".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Usa la función SI para mostrar:
            <br />
            "Aprobado" si la nota es mayor o igual a 6
            <br />
            "Desaprobado" si es menor a 6
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Automatizar la evaluación de los alumnos utilizando lógica en Excel.
          </div>

        </div>
      </section>

    </div>
  );
}