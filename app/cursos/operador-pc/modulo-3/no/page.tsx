export default function FuncionNOExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Función NO en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La función NO permite invertir el resultado de una condición. Es decir,
          convierte un valor VERDADERO en FALSO, y un valor FALSO en VERDADERO.
          Se utiliza junto con otras funciones como SI, Y y O para crear
          condiciones más avanzadas.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es la función NO?
        </h2>

        <p className="max-w-3xl">
          Es una función lógica que cambia el resultado de una condición por su opuesto.
          Si una condición es verdadera, NO la convierte en falsa, y viceversa.
        </p>
      </section>

      {/* Sintaxis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Sintaxis
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Estructura:</p>
          <p>=NO(condición)</p>

          <p className="mt-2">Ejemplo:</p>
          <p>=NO(A1&gt;=6)</p>
          <p>
            Devuelve VERDADERO si A1 es menor a 6.
          </p>
        </div>
      </section>

      {/* Uso con SI */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Uso combinado con SI
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p className="font-semibold">Ejemplo:</p>
          <p>=SI(NO(A1&gt;=6), "Desaprobado", "Aprobado")</p>

          <p className="mt-2">
            En este caso, la lógica se invierte: si la condición no se cumple,
            el resultado será "Desaprobado".
          </p>
        </div>
      </section>

      {/* Para qué sirve */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Para qué sirve?
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Invertir condiciones.</li>
          <li>Crear reglas más complejas.</li>
          <li>Evitar escribir condiciones opuestas manualmente.</li>
          <li>Mejorar la lógica en funciones combinadas.</li>
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
            Nombre | Nota
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Usa la función SI para indicar si el alumno aprueba o desaprueba.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Crea otra columna utilizando la función NO para invertir la lógica.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Objetivo</p>
            Comprender cómo invertir condiciones y mejorar la lógica en Excel.
          </div>

        </div>
      </section>

    </div>
  );
}