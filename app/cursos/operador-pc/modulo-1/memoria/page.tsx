export default function MemoriaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Memoria RAM y Almacenamiento
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Las computadoras utilizan diferentes tipos de memoria para
          almacenar y procesar información. Algunas memorias son
          temporales y otras permiten guardar datos de forma permanente.
          <br /><br />
          Dos de los componentes más importantes son la
          <strong> memoria RAM </strong>
          y los dispositivos de
          <strong> almacenamiento</strong>.
        </p>
      </section>

      {/* Memoria RAM */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la Memoria RAM?
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          La memoria RAM (Random Access Memory) es la memoria que utiliza
          la computadora para almacenar temporalmente la información
          que está siendo utilizada en ese momento.
          <br /><br />
          Cuando abrimos un programa o un archivo, este se carga en la
          memoria RAM para que el procesador pueda trabajar con él
          rápidamente.
        </div>

        <p className="text-gray-700 mt-6">
          La memoria RAM se borra automáticamente cuando se apaga
          la computadora.
        </p>
      </section>

      {/* Características RAM */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de la RAM
        </h2>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Es una memoria temporal.</li>
          <li>Permite acceder rápidamente a los datos.</li>
          <li>Su contenido se pierde al apagar la computadora.</li>
          <li>Cuanta más RAM tenga una computadora, mejor podrá ejecutar múltiples programas.</li>
        </ul>
      </section>

      {/* Almacenamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Almacenamiento?
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          El almacenamiento es el lugar donde la computadora guarda
          información de forma permanente.
          <br /><br />
          Allí se almacenan documentos, programas, fotos, videos
          y el propio sistema operativo.
        </div>
      </section>

      {/* Tipos de almacenamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Almacenamiento
        </h2>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Disco rígido (HDD)</strong> – almacenamiento tradicional.</li>
          <li><strong>SSD</strong> – más rápido que el disco rígido.</li>
          <li><strong>Memoria USB</strong> – dispositivo portátil.</li>
          <li><strong>Tarjetas de memoria</strong> – utilizadas en cámaras y celulares.</li>
          <li><strong>Discos externos</strong> – almacenamiento adicional.</li>
        </ul>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre RAM y Almacenamiento
        </h2>

        <div className="bg-gray-50 border p-6 rounded-xl text-gray-700">
          Aunque ambos almacenan información, cumplen funciones
          diferentes dentro de la computadora.
          <br /><br />

          <strong>Memoria RAM</strong>  
          <br />
          ✔ Almacena información temporal.  
          ✔ Se utiliza mientras se ejecutan programas.  
          ✔ Se borra al apagar la computadora.

          <br /><br />

          <strong>Almacenamiento</strong>  
          <br />
          ✔ Guarda información permanentemente.  
          ✔ Contiene archivos, programas y sistema operativo.  
          ✔ Los datos permanecen aunque la computadora se apague.
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
            Explicar con tus palabras qué es la memoria RAM.
          </div>

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Mencionar tres dispositivos de almacenamiento.
          </div>

          <div className="bg-gray-50 border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Explicar la diferencia entre memoria RAM y almacenamiento.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-xl text-gray-700">
          Investigar cuánta memoria RAM y qué tipo de almacenamiento
          tiene la computadora que utilizas.
          <br /><br />
          Escribir:
          <br />
          ✔ Cantidad de memoria RAM.  
          ✔ Tipo de almacenamiento (HDD o SSD).  
          ✔ Capacidad total de almacenamiento.
        </div>
      </section>

    </div>
  );
}