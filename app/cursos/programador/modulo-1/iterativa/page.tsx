export default function EstructurasRepetitivasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Estructuras Repetitivas
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          Las estructuras repetitivas permiten ejecutar un bloque de código
          varias veces mientras se cumpla una condición o durante una cantidad
          determinada de repeticiones.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un bucle?
        </h2>

        <div className=" border p-6 rounded-xl  leading-relaxed">
          Un bucle (loop) es una estructura que repite instrucciones.
          <br /><br />
          Componentes principales:
          <br />
          1️⃣ Inicialización <br />
          2️⃣ Condición <br />
          3️⃣ Actualización <br />
        </div>
      </section>

      {/* While */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          while
        </h2>

        <p className=" mb-6 max-w-3xl">
          Ejecuta el bloque de código mientras la condición sea verdadera.
          Primero evalúa la condición.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <pre>
{`fun main() {
    var contador = 1

    while (contador <= 5) {
        println(contador)
        contador++
    }
}`}
          </pre>
        </div>
      </section>

      {/* Do While */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          do - while
        </h2>

        <p className=" mb-6 max-w-3xl">
          Ejecuta el bloque al menos una vez.
          Primero ejecuta y luego evalúa la condición.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <pre>
{`fun main() {
    var numero = 1

    do {
        println(numero)
        numero++
    } while (numero <= 5)
}`}
          </pre>
        </div>
      </section>

      {/* For */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          for (en Kotlin)
        </h2>

        <p className=" mb-6 max-w-3xl">
          Se usa cuando sabemos cuántas veces queremos repetir algo.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <pre>
{`fun main() {
    for (i in 1..5) {
        println(i)
    }
}`}
          </pre>
        </div>
      </section>

      {/* Variantes de for */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Variantes del for
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800 text-sm">
          <pre>
{`// Saltos de 2 en 2
for (i in 1..10 step 2) {
    println(i)
}

// Cuenta regresiva
for (i in 10 downTo 1) {
    println(i)
}`}
          </pre>
        </div>
      </section>

      {/* Comparación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comparación de Estructuras
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border ">
            <thead className="bg-blue-800">
              <tr>
                <th className="p-3 border">Estructura</th>
                <th className="p-3 border">Evalúa Antes</th>
                <th className="p-3 border">Evalúa Después</th>
                <th className="p-3 border">Uso común</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">while</td>
                <td className="p-3 border">✔</td>
                <td className="p-3 border">-</td>
                <td className="p-3 border">Repetición indefinida</td>
              </tr>
              <tr>
                <td className="p-3 border">do-while</td>
                <td className="p-3 border">-</td>
                <td className="p-3 border">✔</td>
                <td className="p-3 border">Menú interactivo</td>
              </tr>
              <tr>
                <td className="p-3 border">for</td>
                <td className="p-3 border">✔</td>
                <td className="p-3 border">-</td>
                <td className="p-3 border">Cantidad conocida</td>
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
          <li>No actualizar la variable del bucle (bucle infinito).</li>
          <li>Condiciones mal planteadas.</li>
          <li>Confundir el rango en el for.</li>
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
            Mostrar los números del 1 al 20 usando un for.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Mostrar los números pares del 1 al 50.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Mostrar los números del 30 al 1.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className=" border-l-4 border-blue-700 p-6 rounded-xl ">
          Crear un programa que:
          <br />
          ✔ Solicite 5 números al usuario <br />
          ✔ Calcule la suma total <br />
          ✔ Muestre el promedio final <br />
          Utilizar una estructura repetitiva.
        </div>
      </section>

    </div>
  );
}