export default function HardwareSoftwarePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Hardware y Software
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Una computadora está compuesta por dos grandes componentes:
          el <strong>hardware</strong> y el <strong>software</strong>.
          Ambos trabajan juntos para que el sistema funcione correctamente.
        </p>
      </section>

      {/* Hardware */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Hardware?
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          El hardware corresponde a todos los componentes físicos de la
          computadora, es decir, las partes que se pueden ver y tocar.
        </div>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-6">
          <li>Procesador (CPU)</li>
          <li>Memoria RAM</li>
          <li>Disco rígido o SSD</li>
          <li>Monitor</li>
          <li>Teclado</li>
          <li>Mouse</li>
          <li>Impresora</li>
        </ul>
      </section>

      {/* Software */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Software?
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          El software es el conjunto de programas que permiten que la
          computadora funcione y realice tareas específicas.
        </div>

        <ul className="list-disc list-inside space-y-3 text-gray-700 mt-6">
          <li>Sistema operativo</li>
          <li>Procesador de textos</li>
          <li>Navegadores web</li>
          <li>Programas de diseño</li>
          <li>Aplicaciones educativas</li>
        </ul>
      </section>

      {/* Relación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación entre Hardware y Software
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          El hardware necesita del software para funcionar, y el software
          necesita del hardware para ejecutarse.
          <br /><br />
          Por ejemplo:
          <br />
          ✔ El teclado (hardware) permite escribir en Word (software). <br />
          ✔ El monitor (hardware) muestra la información generada por un programa.
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6 text-gray-700">

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Escribir cinco ejemplos de hardware presentes en una computadora.
          </div>

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Escribir tres ejemplos de software que utilices habitualmente.
          </div>

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Explicar con tus palabras la diferencia entre hardware y software.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-xl text-gray-700">
          Hacer una lista de todos los componentes de hardware
          que tiene la computadora del aula y mencionar qué
          software se utiliza en ella durante las clases.
        </div>
      </section>

    </div>
  );
}