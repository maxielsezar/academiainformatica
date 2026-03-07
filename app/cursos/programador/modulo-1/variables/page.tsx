export default function VariablesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Variables y Constantes en Kotlin
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          En programación, una variable es un espacio en memoria que permite
          almacenar datos que pueden modificarse durante la ejecución del programa.
          Una constante, en cambio, es un valor que no puede cambiar una vez definido.
        </p>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre Variable y Constante
        </h2>

        <div className="grid md:grid-cols-2 gap-6 ">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-blue-800 mb-2">Variable</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Se declara con <strong>var</strong></li>
              <li>Su valor puede cambiar</li>
              <li>Se usa para datos dinámicos</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-blue-800 mb-2">Constante</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Se declara con <strong>val</strong></li>
              <li>Su valor no puede cambiar</li>
              <li>Se usa para valores fijos</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Tipos de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Datos en Kotlin
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li><strong>Int:</strong> números enteros</li>
          <li><strong>Double:</strong> números decimales</li>
          <li><strong>String:</strong> texto</li>
          <li><strong>Boolean:</strong> verdadero o falso</li>
        </ul>
      </section>

      {/* Reglas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reglas para Nombrar Variables
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>No pueden comenzar con números.</li>
          <li>No pueden contener espacios.</li>
          <li>Deben ser descriptivas.</li>
          <li>Se recomienda usar camelCase (ej: edadAlumno).</li>
        </ul>
      </section>

      {/* Ejemplo en Kotlin */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Kotlin
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800">
          <pre className="leading-7">
{`fun main() {
    var edad: Int = 20
    val pi: Double = 3.1416
    var nombre: String = "Juan"
    var esMayor: Boolean = true

    println("Edad: $edad")
}`}
          </pre>
        </div>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Intentar cambiar el valor de una constante.</li>
          <li>Usar nombres poco descriptivos (a, b, x).</li>
          <li>No respetar el tipo de dato.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6 ">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Declarar una variable llamada <strong>precio</strong> de tipo Double
            y asignarle el valor 1500.50.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Declarar una constante llamada <strong>iva</strong> con valor 0.21.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crear un programa que almacene el nombre y la edad de una persona
            y los muestre por pantalla.
          </div>

        </div>
      </section>

      {/* Actividad integradora */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className=" border-l-4 border-blue-700 p-6 rounded-xl ">
          Crear un programa que declare una variable <strong>salario</strong> y una constante <strong>bono</strong>.  
          Calcular el salario final sumando ambos valores e imprimir el resultado.
        </div>
      </section>

    </div>
  );
}