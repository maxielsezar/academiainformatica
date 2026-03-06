import Image from "next/image";

export default function AlgoritmoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Concepto de Algoritmo
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          Un algoritmo es una secuencia finita y ordenada de pasos que permiten
          resolver un problema. En programación, los algoritmos representan
          la base lógica sobre la cual se construyen los programas.
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de un Algoritmo
        </h2>

        <ul className="list-disc list-inside space-y-3 ">
          <li><strong>Preciso:</strong> cada paso debe estar claramente definido.</li>
          <li><strong>Ordenado:</strong> los pasos deben seguir una secuencia lógica.</li>
          <li><strong>Finito:</strong> debe finalizar en algún momento.</li>
          <li><strong>Definido:</strong> siempre produce el mismo resultado con la misma entrada.</li>
        </ul>
      </section>

      {/* Fases */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fases para Resolver un Problema
        </h2>

        <ol className="list-decimal list-inside space-y-3 ">
          <li>Análisis del problema.</li>
          <li>Identificación de datos de entrada.</li>
          <li>Definición del proceso.</li>
          <li>Determinación del resultado (salida).</li>
          <li>Prueba y verificación.</li>
        </ol>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo Práctico
        </h2>

        <p className=" mb-4">
          Problema: Calcular el promedio de tres números.
        </p>

        <div className=" border p-6 rounded-xl  space-y-2">
          <p><strong>Entrada:</strong> número1, número2, número3</p>
          <p><strong>Proceso:</strong> sumar los tres números y dividir por 3</p>
          <p><strong>Salida:</strong> promedio</p>
        </div>
      </section>

      {/* Pseudocódigo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Representación en Pseudocódigo
        </h2>

       <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800">
        <pre className="grid grid-cols-[40px_1fr] gap-x-4 leading-7">
            <span className="text-gray-500">1</span><span>Inicio</span>
            <span className="text-gray-500">2</span><span>  Leer numero1</span>
            <span className="text-gray-500">3</span><span>  Leer numero2</span>
            <span className="text-gray-500">4</span><span>  Leer numero3</span>
            <span className="text-gray-500">5</span><span>  promedio = (numero1 + numero2 + numero3) / 3</span>
            <span className="text-gray-500">6</span><span>  Escribir promedio</span>
            <span className="text-gray-500">7</span><span>Fin</span>
        </pre>
        </div>
      </section>

        {/* Diagramas de Flujo */}
        <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
            ¿Cómo se Construye un Diagrama de Flujo?
        </h2>

        <p className=" leading-relaxed mb-6 max-w-3xl">
            Un diagrama de flujo es la representación gráfica de un algoritmo.
            Permite visualizar el orden de ejecución de las instrucciones mediante
            símbolos estandarizados conectados por flechas.
        </p>

        {/* Símbolos */}
        <div className="space-y-6 ">

            <div className=" border p-6 rounded-xl">
            <h3 className="font-semibold text-blue-800 mb-2">
                Símbolos Básicos
            </h3>

            <ul className="list-disc list-inside space-y-2">
                <li><strong>Óvalo:</strong> indica Inicio o Fin del algoritmo.</li>
                <li><strong>Paralelogramo:</strong> representa Entrada o Salida de datos.</li>
                <li><strong>Rectángulo:</strong> indica un Proceso o cálculo.</li>
                <li><strong>Rombo:</strong> representa una Decisión (condición).</li>
                <li><strong>Flechas:</strong> indican la dirección del flujo.</li>
            </ul>
            </div>

            {/* Imagen del Diagrama */}
            <div className="mt-8 flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-md border">
                <Image
                src="/diagramas/promedio.png"
                alt="Diagrama de flujo del cálculo del promedio"
                width={600}
                height={800}
                className="rounded-lg"
                />
            </div>
            </div>
            {/* Pasos para construir */}
            <div className=" border p-6 rounded-xl">
            <h3 className="font-semibold text-blue-800 mb-2">
                Pasos para Construir un Diagrama de Flujo
            </h3>

            <ol className="list-decimal list-inside space-y-2">
                <li>Definir claramente el problema.</li>
                <li>Identificar datos de entrada y salida.</li>
                <li>Ordenar los pasos del proceso.</li>
                <li>Seleccionar el símbolo adecuado para cada paso.</li>
                <li>Conectar los símbolos mediante flechas.</li>
                <li>Verificar que el flujo sea lógico y tenga inicio y fin.</li>
            </ol>
            </div>

            {/* Aplicación al ejemplo */}
            <div className="border-l-4 border-blue-700 p-6 rounded-xl">
            <h3 className="font-semibold mb-2 text-blue-900">
                Aplicación al Ejemplo del Promedio
            </h3>

            <p>
                Para el algoritmo del promedio:
            </p>

            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Inicio → símbolo óvalo</li>
                <li>Leer número1, número2, número3 → paralelogramo</li>
                <li>Calcular promedio → rectángulo</li>
                <li>Mostrar promedio → paralelogramo</li>
                <li>Fin → símbolo óvalo</li>
            </ul>
            </div>

        </div>
        </section>
      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6 ">

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Diseñar el algoritmo para calcular el área de un rectángulo.
            <br />
            Identificar: entrada, proceso y salida.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Diseñar un algoritmo que determine si un número es positivo o negativo.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Diseñar un algoritmo que calcule el total a pagar por la compra de
            un producto, considerando precio y cantidad.
          </div>
        <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Diseñar un algoritmo que permita ingresar la edad de una persona
          y determine si es mayor o menor de edad.  
          Luego, representar el algoritmo en pseudocódigo.
          </div>

        </div>
      </section>
    </div>
  );
}