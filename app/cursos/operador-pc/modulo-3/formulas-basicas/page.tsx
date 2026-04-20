export default function FormulasExcelPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Fórmulas Básicas en Excel
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las fórmulas permiten realizar cálculos automáticos en Excel. Son una
          de las herramientas más importantes de la planilla de cálculo, ya que
          permiten sumar, restar, multiplicar y dividir valores sin necesidad de
          hacerlo manualmente.
        </p>
      </section>

      {/* Qué es una fórmula */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          ¿Qué es una fórmula?
        </h2>

        <p className="max-w-3xl">
          Una fórmula es una expresión que realiza un cálculo utilizando los datos
          de las celdas. Todas las fórmulas comienzan con el signo igual (=).
        </p>
      </section>

      {/* Operaciones básicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Operaciones Básicas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Suma: +</li>
          <li>Resta: -</li>
          <li>Multiplicación: *</li>
          <li>División: /</li>
        </ul>
      </section>

      {/* Ejemplos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Ejemplos de Fórmulas
        </h2>

        <div className="border p-6 rounded-xl space-y-3">
          <p>Algunos ejemplos de fórmulas en Excel:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>=A1 + B1 → suma los valores de A1 y B1</li>
            <li>=A1 - B1 → resta los valores</li>
            <li>=A1 * B1 → multiplica los valores</li>
            <li>=A1 / B1 → divide los valores</li>
          </ul>
        </div>
      </section>

      {/* Uso práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-600 mb-6">
          Uso en la Vida Real
        </h2>

        <div className="border p-6 rounded-xl space-y-2">
          <p>Las fórmulas se utilizan en muchas situaciones, por ejemplo:</p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Calcular el total de una compra.</li>
            <li>Obtener el resultado de una suma de notas.</li>
            <li>Multiplicar precio por cantidad.</li>
            <li>Dividir gastos entre varias personas.</li>
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
            Escribe en Excel las siguientes operaciones utilizando fórmulas:
            <br />
            10 + 5
            <br />
            20 - 8
            <br />
            4 × 6
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            En una tabla, coloca:
            <br />
            Precio en A1 y Cantidad en B1.
            <br />
            En C1 calcula el total utilizando una fórmula.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Modifica los valores de precio o cantidad y observa cómo cambia el resultado automáticamente.
          </div>

        </div>
      </section>

    </div>
  );
}