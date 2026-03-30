import CodeBlock from "@/app/components/CodeBlock"

export default function SintaxisPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Sintaxis en Kotlin
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          La sintaxis es el conjunto de reglas que determinan cómo debe
          escribirse el código para que el compilador lo entienda.
          Si la sintaxis es incorrecta, el programa no podrá ejecutarse.
        </p>
      </section>

      {/* Estructura básica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura básica de un programa
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <CodeBlock code =
{`fun main() {
    println("Hola Mundo")
}`}
          />
        </div>

        <p className=" mt-6 max-w-3xl">
          Todo programa en Kotlin comienza con la función principal
          <strong> main()</strong>.  
          Es el punto de inicio de la ejecución.
        </p>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes principales
        </h2>

        <div className=" border p-6 rounded-xl  space-y-4">

          <div>
            <strong>fun</strong> → Palabra reservada para declarar funciones.
          </div>

          <div>
            <strong>main()</strong> → Función principal.
          </div>

          <div>
            <strong>{`{ }`}</strong> → Delimitan bloques de código.
          </div>

          <div>
            <strong>println()</strong> → Imprime texto en consola.
          </div>

        </div>
      </section>

      {/* Declaración de variables */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Declaración de variables
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <CodeBlock code =
{`val nombre: String = "Juan"
var edad: Int = 25`}
          />
        </div>

        <ul className="list-disc list-inside mt-6 space-y-2 ">
          <li><strong>val</strong> → constante (no cambia).</li>
          <li><strong>var</strong> → variable (puede cambiar).</li>
          <li><strong>:</strong> indica el tipo de dato.</li>
        </ul>
      </section>

      {/* Tipos básicos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de datos básicos
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border ">
            <thead className="bg-blue-800">
              <tr>
                <th className="p-3 border">Tipo</th>
                <th className="p-3 border">Descripción</th>
                <th className="p-3 border">Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">Int</td>
                <td className="p-3 border">Números enteros</td>
                <td className="p-3 border">10</td>
              </tr>
              <tr>
                <td className="p-3 border">Double</td>
                <td className="p-3 border">Decimales</td>
                <td className="p-3 border">3.14</td>
              </tr>
              <tr>
                <td className="p-3 border">String</td>
                <td className="p-3 border">Texto</td>
                <td className="p-3 border">"Hola"</td>
              </tr>
              <tr>
                <td className="p-3 border">Boolean</td>
                <td className="p-3 border">true o false</td>
                <td className="p-3 border">true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Comentarios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comentarios
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono border border-gray-800">
          <CodeBlock code =
{`// Comentario de una línea

/*
   Comentario
   de varias líneas
*/`}
          />
        </div>

        <p className=" mt-6 max-w-3xl">
          Los comentarios no se ejecutan. Sirven para documentar el código.
        </p>
      </section>

      {/* Convenciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas de sintaxis
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Usar nombres descriptivos para variables.</li>
          <li>Respetar la indentación.</li>
          <li>No mezclar mayúsculas y minúsculas incorrectamente.</li>
          <li>Evitar código innecesario.</li>
        </ul>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores Comunes
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li>Olvidar llaves {`{ }`}.</li>
          <li>Escribir mal una palabra reservada.</li>
          <li>No cerrar comillas.</li>
          <li>Confundir tipos de datos.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6 ">

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crear un programa que imprima tu nombre y edad.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Declarar tres variables de distintos tipos y mostrarlas en pantalla.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Escribir un programa con comentarios explicando cada línea.
          </div>

        </div>
      </section>

    </div>
  );
}