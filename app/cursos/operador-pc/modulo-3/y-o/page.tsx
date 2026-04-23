export default function FuncionesYOExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Funciones Lógicas Y (AND) y O (OR) en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones Y y O permiten evaluar múltiples condiciones al mismo tiempo.
          Se utilizan junto con la función SI para tomar decisiones más complejas
          dentro de una planilla de cálculo.
        </p>
      </section>

      {/* Función Y */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Función Y
        </h2>

        <p className="max-w-3xl mb-4">
          La función Y devuelve VERDADERO solo si todas las condiciones se cumplen.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo:</p>
          <p>=Y(A1&gt;=6; B1&gt;=6)</p>
          <p>
            Devuelve VERDADERO si ambas celdas son mayores o iguales a 6.
          </p>
        </div>
      </section>

      {/* Función O */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Función O
        </h2>

        <p className="max-w-3xl mb-4">
          La función O devuelve VERDADERO si al menos una de las condiciones se cumple.
        </p>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo:</p>
          <p>=O(A1&gt;=6, B1&gt;=6)</p>
          <p>
            Devuelve VERDADERO si al menos una de las celdas es mayor o igual a 6.
          </p>
        </div>
      </section>

      {/* Combinación con SI */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Uso combinado con la función SI
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo con Y:</p>
          <p>=SI(Y(A1&gt;=6; B1&gt;=6), "Aprobado", "Desaprobado")</p>

          <p className="mt-2 font-semibold">Ejemplo con O:</p>
          <p>=SI(O(A1&gt;=6; B1&gt;=6), "Aprobado", "Desaprobado")</p>
        </div>
      </section>

      {/* Para qué sirven */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirven?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Evaluar múltiples condiciones al mismo tiempo.</li>
          <li>Tomar decisiones más complejas.</li>
          <li>Analizar resultados de forma automática.</li>
          <li>Crear reglas personalizadas en planillas.</li>
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
            Crea una tabla con:
            <br />
            Nombre | Nota 1 | Nota 2
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Agrega una columna "Resultado con Y":
            <br />
            El alumno aprueba solo si ambas notas son ≥ 6.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Agrega otra columna "Resultado con O":
            <br />
            El alumno aprueba si al menos una nota es ≥ 6.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Comprender la diferencia entre evaluar todas las condiciones (Y)
            o solo alguna de ellas (O).
          </div>

        </div>
      </section>

    </div>
  );
}