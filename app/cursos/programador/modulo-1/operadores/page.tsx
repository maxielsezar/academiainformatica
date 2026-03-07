export default function OperadoresPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Operadores en Kotlin
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          Los operadores permiten realizar cálculos, comparaciones y
          evaluaciones lógicas dentro de un programa. Son fundamentales
          para construir expresiones y tomar decisiones.
        </p>
      </section>

      {/* Aritméticos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores Aritméticos
        </h2>

        <div className="grid md:grid-cols-2 gap-6 ">

          <div className=" border p-6 rounded-xl">
            <ul className="space-y-2">
              <li><strong>+</strong> → Suma</li>
              <li><strong>-</strong> → Resta</li>
              <li><strong>*</strong> → Multiplicación</li>
              <li><strong>/</strong> → División</li>
              <li><strong>%</strong> → Módulo (resto)</li>
            </ul>
          </div>

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
            <pre>
{`fun main() {
    val a = 10
    val b = 3

    println(a + b)
    println(a % b)
}`}
            </pre>
          </div>

        </div>
      </section>

      {/* Relacionales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores Relacionales
        </h2>

        <p className=" mb-6 max-w-3xl">
          Comparan dos valores y devuelven un resultado booleano
          (true o false).
        </p>

        <div className=" border p-6 rounded-xl ">
          <ul className="space-y-2">
            <li><strong>==</strong> → Igual</li>
            <li><strong>!=</strong> → Distinto</li>
            <li><strong>&gt;</strong> → Mayor que</li>
            <li><strong>&lt;</strong> → Menor que</li>
            <li><strong>&gt;=</strong> → Mayor o igual</li>
            <li><strong>&lt;=</strong> → Menor o igual</li>
          </ul>
        </div>
      </section>

      {/* Lógicos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores Lógicos
        </h2>

        <p className=" mb-6 max-w-3xl">
          Se utilizan para combinar expresiones booleanas.
        </p>

        <div className=" border p-6 rounded-xl ">
          <ul className="space-y-2">
            <li><strong>&&</strong> → AND (y)</li>
            <li><strong>||</strong> → OR (o)</li>
            <li><strong>!</strong> → NOT (negación)</li>
          </ul>
        </div>

        <div className="mt-6 bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <pre>
{`fun main() {
    val edad = 20
    val tieneDni = true

    println(edad >= 18 && tieneDni)
}`}
          </pre>
        </div>
      </section>

      {/* Tabla resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen de Operadores
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border ">
            <thead className="bg-blue-800">
              <tr>
                <th className="p-3 border">Tipo</th>
                <th className="p-3 border">Operadores</th>
                <th className="p-3 border">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Aritméticos</td>
                <td className="p-3 border">+, -, *, /, %</td>
                <td className="p-3 border">Numérico</td>
              </tr>
              <tr>
                <td className="p-3 border">Relacionales</td>
                <td className="p-3 border">==, !=, &gt;, &lt;</td>
                <td className="p-3 border">Boolean</td>
              </tr>
              <tr>
                <td className="p-3 border">Lógicos</td>
                <td className="p-3 border">&&, ||, !</td>
                <td className="p-3 border">Boolean</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Confundir <strong>=</strong> con <strong>==</strong>.</li>
          <li>No respetar el orden de precedencia.</li>
          <li>Usar operadores lógicos con datos que no son booleanos.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6 ">

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Calcular el resto de dividir 25 por 4.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Determinar si un número es mayor que 100.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Evaluar si una persona puede votar (edad ≥ 18).
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className=" border-l-4 border-blue-700 p-6 rounded-xl ">
          Crear un programa que determine si un número es par y mayor que 10.
          Utilizar operadores aritméticos, relacionales y lógicos.
        </div>
      </section>

    </div>
  );
}