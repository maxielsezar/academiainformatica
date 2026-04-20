export default function FuncionesExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Funciones en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones son fórmulas predefinidas que permiten realizar cálculos
          de manera más rápida y sencilla. En lugar de escribir una fórmula larga,
          Excel ofrece funciones listas para usar como SUMA o PROMEDIO.
        </p>
      </section>

      {/* Qué es una función */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es una función?
        </h2>

        <p className="max-w-3xl">
          Una función es una fórmula que ya está programada en Excel y que se utiliza
          para realizar cálculos específicos. Las funciones también comienzan con el
          signo igual (=).
        </p>
      </section>

      {/* Funciones básicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Funciones Básicas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>SUMA: suma un conjunto de valores.</li>
          <li>PROMEDIO: calcula el promedio.</li>
          <li>MAX: devuelve el valor más alto.</li>
          <li>MIN: devuelve el valor más bajo.</li>
        </ul>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplos de Funciones
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <p>Algunos ejemplos de funciones en Excel:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>=SUMA(A1:A5) → suma los valores desde A1 hasta A5</li>
            <li>=PROMEDIO(A1:A5) → calcula el promedio</li>
            <li>=MAX(A1:A5) → obtiene el valor mayor</li>
            <li>=MIN(A1:A5) → obtiene el valor menor</li>
          </ul>
        </div>
      </section>

      {/* Uso práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Uso en la Vida Real
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Las funciones se utilizan en muchas situaciones, por ejemplo:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Sumar una lista de gastos.</li>
            <li>Calcular el promedio de notas.</li>
            <li>Encontrar el valor más alto de ventas.</li>
            <li>Identificar el valor más bajo en un registro.</li>
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
            Crea una tabla con 5 números y calcula la suma utilizando la función SUMA.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Calcula el promedio de esos mismos valores utilizando PROMEDIO.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identifica el valor máximo y mínimo usando las funciones MAX y MIN.
          </div>

        </div>
      </section>

    </div>
  );
}