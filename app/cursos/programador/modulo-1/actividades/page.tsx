export default function ActividadesArraysPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividades Prácticas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta sección vas a aplicar conceptos de programación utilizando arreglos,
          bucles y funciones en Kotlin. Cada actividad está pensada para reforzar
          la lógica y la resolución de problemas.
        </p>
      </section>

      {/* Actividad 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 1: Mazo de Cartas Españolas
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear un programa que imprima un mazo de cartas españolas
            <strong> sin incluir el 8 ni el 9</strong>.
          </p>

          <p>
            El mazo español está compuesto por los siguientes palos:
            <strong> Espadas, Bastos, Oro y Copas</strong>.
            Cada palo contiene cartas numeradas del 1 al 12,
            pero en este ejercicio se deben excluir los números 8 y 9.
          </p>

          <p>
            El programa debe recorrer los palos y los valores usando estructuras repetitivas
            (for o while) y mostrar en pantalla cada carta en formato:
          </p>

          <div className="bg-[#0f172a] text-gray-100 p-4 rounded-xl font-mono text-sm">
            1 de Espadas  
            2 de Espadas  
            ...  
            12 de Copas
          </div>

          <p>
            Este ejercicio permite practicar el uso de arreglos, bucles anidados
            y condiciones para excluir valores específicos.
          </p>
        </div>
      </section>

      {/* Actividad 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 2: Días del Mes de Marzo
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear un programa que imprima todos los días del mes de marzo,
            indicando también el día de la semana correspondiente.
          </p>

          <p>
            Se debe utilizar un arreglo con los nombres de los días:
            <strong> Domingo, Lunes, Martes, Miércoles, Jueves, Viernes, Sábado</strong>.
          </p>

          <p>
            El programa debe recorrer los 31 días del mes y asignar correctamente
            el día de la semana a cada fecha.
          </p>

          <p>
            La salida debe tener el siguiente formato:
          </p>

          <div className="bg-[#0f172a] text-gray-100 p-4 rounded-xl font-mono text-sm">
            Domingo 1 de Marzo  
            Lunes 2 de Marzo  
            Martes 3 de Marzo  
            ...
          </div>

          <p>
            Este ejercicio ayuda a comprender el uso de índices cíclicos,
            arreglos y lógica de calendario.
          </p>
        </div>
      </section>

     {/* Actividad 3 */}
    <section>
    <h2 className="text-2xl font-bold text-blue-800 mb-6">
        Actividad 3: Conversión a Binario
    </h2>

    <div className="border p-6 rounded-xl space-y-4">
        <p>
        Crear una función que reciba un número entero y retorne
        su representación en binario.
        </p>

        <p>
        El sistema binario utiliza únicamente los dígitos
        <strong> 0 y 1</strong>.
        </p>

        <p className="font-semibold">
        ¿Cómo convertir un número a binario?
        </p>

        <p>
        Para convertir un número decimal a binario se debe:
        </p>

        <ul className="list-disc list-inside space-y-2">
        <li>Dividir el número entre 2</li>
        <li>Guardar el resto (0 o 1)</li>
        <li>Volver a dividir el resultado entre 2</li>
        <li>Repetir hasta que el número sea 0</li>
        <li>Leer los restos de abajo hacia arriba</li>
        </ul>

        <p className="font-semibold">Ejemplo paso a paso (10 → binario):</p>

        <div className="bg-[#0f172a] text-gray-100 p-4 rounded-xl font-mono text-sm">
        10 ÷ 2 = 5  → resto 0 <br/>
        5 ÷ 2 = 2   → resto 1 <br/>
        2 ÷ 2 = 1   → resto 0 <br/>
        1 ÷ 2 = 0   → resto 1 <br/><br/>

        Resultado: 1010
        </div>

        <p>
        El resultado se obtiene leyendo los restos desde el último
        hasta el primero.
        </p>

        <p>
        Este ejercicio permite trabajar con funciones, bucles
        y lógica matemática paso a paso.
        </p>
    </div>
    </section>

      {/* Actividad 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 4: Conteo de Saludos
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que calcule cuántos saludos se realizan
            en una sala, dado un número de personas.
          </p>

          <p>
            Cada persona saluda a todas las demás una sola vez.
          </p>

          <div className="bg-[#0f172a] text-gray-100 p-4 rounded-xl font-mono text-sm">
            n * (n - 1) / 2
          </div>

          <p>
            Este ejercicio refuerza la lógica matemática y el uso de funciones.
          </p>
        </div>
      </section>

      {/* Actividad 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 5: King Kong (FizzBuzz)
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear un programa que imprima los números del 1 al 100,
            pero aplicando las siguientes reglas:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Si el número es múltiplo de 3, imprimir <strong>"King"</strong>.</li>
            <li>Si el número es múltiplo de 5, imprimir <strong>"Kong"</strong>.</li>
            <li>Si es múltiplo de ambos (3 y 5), imprimir <strong>"King Kong"</strong>.</li>
            <li>Si no cumple ninguna condición, imprimir el número.</li>
          </ul>

          <p>
            Ejemplo de salida:
          </p>

          <div className="bg-[#0f172a] text-gray-100 p-4 rounded-xl font-mono text-sm">
            1  
            2  
            King  
            4  
            Kong  
            King  
            ...
          </div>

          <p>
            Este ejercicio es para practicar condicionales,
            operadores matemáticos y estructuras repetitivas.
          </p>
        </div>
      </section>

      {/* Actividad 6 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 6: Palíndromo
        </h2>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Crear una función que determine si una palabra es un palíndromo.
          </p>

          <p>
            Un palíndromo es una palabra que se lee igual de izquierda a derecha
            que de derecha a izquierda.
          </p>

          <p>
            Ejemplos:
          </p>

          <div className="bg-[#0f172a] text-gray-100 p-4 rounded-xl font-mono text-sm">
            "oso" → true  
            "reconocer" → true  
            "hola" → false
          </div>

          <p>
            El programa debe:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Recibir una palabra</li>
            <li>Invertirla</li>
            <li>Compararla con la original</li>
          </ul>

          <p>
            Este ejercicio permite trabajar con strings, funciones
            y lógica de comparación.
          </p>
        </div>
      </section>

    </div>
  );
}