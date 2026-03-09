export default function FuncionesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones
        </h1>

        <p className=" max-w-3xl leading-relaxed">
          Una función es un bloque de código que realiza una tarea específica.
          Permite organizar el programa en partes más pequeñas, reutilizar código
          y mejorar la claridad del programa.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué sirven las funciones?
        </h2>

        <div className="w-full border p-6 rounded-xl  space-y-3">
          <p>✔ Dividir el programa en partes más pequeñas.</p>
          <p>✔ Reutilizar código.</p>
          <p>✔ Facilitar el mantenimiento.</p>
          <p>✔ Mejorar la organización del programa.</p>
        </div>
      </section>

      {/* Sintaxis */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sintaxis de una función
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`fun nombreFuncion() {
    // instrucciones
}`}
          </pre>
        </div>
      </section>

      {/* Ejemplo simple */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo simple
        </h2>
      <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
        <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun saludar() {
    println("Hola, bienvenido al curso de programación")
}

fun main() {
    saludar()
}`}
          </pre>
        </div>

        <p className=" mt-6 max-w-3xl">
          La función <strong>saludar()</strong> se define una vez y luego puede
          ejecutarse cada vez que se la llame.
        </p>
      </section>

      {/* Parámetros */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones con parámetros
        </h2>

        <p className=" mb-6 max-w-3xl">
          Las funciones pueden recibir información para trabajar con ella.
          Esa información se llama <strong>parámetros</strong>.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`fun saludar(nombre: String) {
    println("Hola " + nombre)
}

fun main() {
    saludar("Ana")
}`}
          </pre>
        </div>
      </section>

      {/* Retorno */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones que retornan valores
        </h2>

        <p className=" mb-6 max-w-3xl">
          Algunas funciones realizan cálculos y devuelven un resultado.
          Para ello se utiliza la palabra <strong>return</strong>.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl font-mono text-sm border border-gray-800">
          <pre>
{`fun sumar(a: Int, b: Int): Int {
    return a + b
}

fun main() {
    val resultado = sumar(5, 3)
    println(resultado)
}`}
          </pre>
        </div>
      </section>

      {/* Función compacta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones de una sola línea
        </h2>

        <p className=" mb-6 max-w-3xl">
          Kotlin permite escribir funciones simples de forma más compacta.
        </p>

      <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
        <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7 min-w-[400px]">
{`fun multiplicar(a: Int, b: Int): Int = a * b`}
          </pre>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Usar nombres claros para las funciones.</li>
          <li>Cada función debe tener una tarea específica.</li>
          <li>No crear funciones demasiado largas.</li>
          <li>Reutilizar funciones cuando sea posible.</li>
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
            Crear una función que imprima "Bienvenido al curso".
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crear una función que reciba un número y muestre su cuadrado.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crear una función que reciba dos números y devuelva el mayor.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className=" border-l-4 border-blue-700 p-6 rounded-xl ">
          Crear un programa que tenga una función llamada 
          <strong> calcularPromedio </strong> que reciba tres números y
          devuelva el promedio.
        </div>
      </section>

    </div>
  );
}