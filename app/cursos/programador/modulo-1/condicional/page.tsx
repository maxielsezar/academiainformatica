export default function EstructuraCondicionalPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Estructuras Condicionales
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          Las estructuras condicionales permiten que un programa tome decisiones.
          Ejecutan un bloque de código solo si se cumple una condición.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una condición?
        </h2>

        <p className=" max-w-3xl leading-relaxed">
          Una condición es una expresión que devuelve un valor booleano:
          <strong> true</strong> o <strong>false</strong>.  
          Si la condición es verdadera, el programa ejecuta un bloque
          específico de instrucciones.
        </p>
      </section>

      {/* If simple */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          if (condición)
        </h2>


          <div className=" mb-6 leading-relaxed">
            <p>
              Ejecuta un bloque de código solo si la condición es verdadera.
            </p>
          </div>

          <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
            <pre>
{`fun main() {
    val edad = 20

    if (edad >= 18) {
        println("Es mayor de edad")
    }
}`}
            </pre>
          </div>

        
      </section>

      {/* If - else */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          if - else
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <pre>
{`fun main() {
    val numero = 5

    if (numero % 2 == 0) {
        println("Es par")
    } else {
        println("Es impar")
    }
}`}
          </pre>
        </div>
      </section>

      {/* If - else if */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          if - else if - else
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <pre>
{`fun main() {
    val nota = 7

    if (nota >= 9) {
        println("Excelente")
    } else if (nota >= 6) {
        println("Aprobado")
    } else {
        println("Desaprobado")
    }
}`}
          </pre>
        </div>
      </section>

      {/* When */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          when (estructura múltiple en Kotlin)
        </h2>

        <p className=" mb-6 max-w-3xl">
          En Kotlin, <strong>when</strong> reemplaza al clásico switch.
          Es más potente y flexible.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <pre>
{`fun main() {
    val dia = 3

    when (dia) {
        1 -> println("Lunes")
        2 -> println("Martes")
        3 -> println("Miércoles")
        else -> println("Otro día")
    }
}`}
          </pre>
        </div>
      </section>

      {/* Lógica del flujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona el flujo?
        </h2>

        <div className=" border p-6 rounded-xl  leading-relaxed">
          1. Se evalúa la condición. <br />
          2. Si es verdadera → se ejecuta el bloque correspondiente. <br />
          3. Si es falsa → se evalúan otras condiciones o se ejecuta el else. <br />
          4. El programa continúa su ejecución normal.
        </div>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Olvidar llaves cuando hay múltiples líneas.</li>
          <li>Confundir = con ==.</li>
          <li>No cubrir todos los casos posibles.</li>
          <li>Anidar demasiados if (poca legibilidad).</li>
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
            Crear un programa que determine si un número es positivo o negativo.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Determinar si una persona puede votar según su edad.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Clasificar una nota del 1 al 10 en:
            Desaprobado, Aprobado o Excelente.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl ">
          Crear un programa que determine si una persona puede ingresar
          a un evento.  
          Condiciones:
          - Edad mayor o igual a 18  
          - Tener entrada válida  
          Utilizar operadores lógicos.
        </div>
      </section>

    </div>
  );
}