export default function HardwarePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Hardware de la Computadora
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El hardware está formado por todos los componentes físicos de una
          computadora, es decir, aquellos elementos que podemos ver y tocar.
          Estos componentes trabajan en conjunto para permitir que el equipo
          pueda procesar información y ejecutar diferentes tareas.
          <br /><br />
          Para un operador de informática es importante reconocer los
          principales componentes de hardware, conocer su función y comprender
          cómo se relacionan entre sí dentro de un sistema informático.
        </p>
      </section>

      {/* ¿Qué es el hardware? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Hardware?
        </h2>

        <div className="border p-6 rounded-xl">
          La palabra <strong>hardware</strong> hace referencia al conjunto
          de componentes físicos y electrónicos que forman parte de una
          computadora.
          <br /><br />
          Algunos componentes se encuentran dentro del gabinete, mientras
          que otros se conectan externamente y permiten al usuario
          interactuar con el equipo.
          <br /><br />
          Por ejemplo, el teclado, el mouse, el monitor, la memoria RAM,
          el procesador y el disco SSD son componentes de hardware.
        </div>
      </section>

      {/* Hardware interno y externo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Hardware Interno y Externo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los componentes físicos de una computadora pueden clasificarse
          de acuerdo con su ubicación y función.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Hardware interno
            </p>

            Son los componentes que se encuentran dentro del gabinete
            o estructura principal de la computadora.

            <br /><br />

            Algunos ejemplos son:

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Placa madre.</li>
              <li>Procesador.</li>
              <li>Memoria RAM.</li>
              <li>Disco SSD o disco rígido.</li>
              <li>Fuente de alimentación.</li>
              <li>Placa de video.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Hardware externo
            </p>

            Son los dispositivos que se conectan al equipo y permiten
            introducir información, visualizar resultados o realizar
            diferentes tareas.

            <br /><br />

            Algunos ejemplos son:

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Monitor.</li>
              <li>Teclado.</li>
              <li>Mouse.</li>
              <li>Impresora.</li>
              <li>Escáner.</li>
              <li>Cámara web.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Placa madre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Placa Madre
        </h2>

        <div className="border p-6 rounded-xl">
          La <strong>placa madre</strong>, también conocida como
          <strong> motherboard</strong>, es uno de los componentes
          principales de una computadora.
          <br /><br />
          En ella se conectan diferentes componentes del equipo, como el
          procesador, la memoria RAM y las unidades de almacenamiento.
          También permite la comunicación entre los diferentes elementos
          del sistema.
          <br /><br />
          Por este motivo, la placa madre funciona como una plataforma
          fundamental que permite integrar y conectar los componentes
          de la computadora.
        </div>
      </section>

      {/* Procesador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Procesador (CPU)
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>procesador</strong>, también conocido como
          <strong> CPU</strong>, es uno de los componentes principales
          encargados de ejecutar instrucciones y realizar operaciones.
          <br /><br />
          El procesador recibe instrucciones de los programas y trabaja
          junto con otros componentes para procesar los datos.
          <br /><br />
          Su rendimiento depende de diferentes características, como la
          cantidad de núcleos, la frecuencia de funcionamiento y la
          arquitectura utilizada.
        </div>
      </section>

      {/* Memoria RAM */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Memoria RAM
        </h2>

        <div className="border p-6 rounded-xl">
          La <strong>memoria RAM</strong> es un tipo de memoria utilizada
          para almacenar temporalmente los datos y programas que se están
          utilizando en un determinado momento.
          <br /><br />
          A diferencia de una unidad de almacenamiento, la memoria RAM
          pierde su contenido cuando la computadora se apaga.
          <br /><br />
          Una mayor cantidad de memoria RAM puede permitir trabajar con
          más programas simultáneamente, dependiendo también del resto
          de los componentes del equipo.
        </div>
      </section>

      {/* Almacenamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Dispositivos de Almacenamiento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los dispositivos de almacenamiento permiten guardar información,
          programas y archivos para utilizarlos posteriormente.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Disco rígido (HDD)</strong>
          </p>
          Es un dispositivo de almacenamiento que utiliza componentes
          mecánicos y magnéticos para guardar información.

          <br /><br />

          <p className="mb-2">
            <strong>Unidad SSD</strong>
          </p>
          Es un dispositivo de almacenamiento que utiliza memoria
          electrónica y generalmente ofrece velocidades de lectura y
          escritura superiores a las de un disco rígido tradicional.

          <br /><br />

          <p className="mb-2">
            <strong>Pendrive</strong>
          </p>
          Es un dispositivo portátil que permite almacenar y transportar
          archivos entre diferentes computadoras.

          <br /><br />

          <p className="mb-2">
            <strong>Almacenamiento externo</strong>
          </p>
          También es posible utilizar discos externos y otros dispositivos
          para realizar copias de seguridad o transportar información.

        </div>
      </section>

      {/* Fuente de alimentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fuente de Alimentación
        </h2>

        <div className="border p-6 rounded-xl">
          La <strong>fuente de alimentación</strong> es el componente
          encargado de proporcionar energía eléctrica a los diferentes
          componentes internos de la computadora.
          <br /><br />
          Convierte la energía eléctrica disponible en la instalación
          en los diferentes voltajes que necesitan los componentes del
          equipo para funcionar correctamente.
          <br /><br />
          Una fuente adecuada y de buena calidad es importante para
          garantizar un funcionamiento estable y seguro del sistema.
        </div>
      </section>

      {/* Placa de video */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Placa de Video o GPU
        </h2>

        <div className="border p-6 rounded-xl">
          La <strong>GPU</strong> o unidad de procesamiento gráfico es
          el componente encargado de procesar información relacionada
          con la generación y representación de imágenes.
          <br /><br />
          Algunas computadoras utilizan gráficos integrados dentro del
          procesador, mientras que otras cuentan con una placa de video
          dedicada.
          <br /><br />
          En actividades administrativas básicas, los gráficos integrados
          suelen ser suficientes. Las placas de video dedicadas son
          especialmente importantes para tareas que requieren un mayor
          procesamiento gráfico.
        </div>
      </section>

      {/* Periféricos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Periféricos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los periféricos son dispositivos que permiten ampliar las
          capacidades de una computadora y facilitar la interacción
          entre el usuario y el sistema.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Entrada
            </p>

            Permiten ingresar datos a la computadora.

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Teclado.</li>
              <li>Mouse.</li>
              <li>Escáner.</li>
              <li>Micrófono.</li>
              <li>Cámara web.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Salida
            </p>

            Permiten visualizar o recibir los resultados procesados.

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Monitor.</li>
              <li>Impresora.</li>
              <li>Parlantes.</li>
              <li>Proyector.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Entrada y salida
            </p>

            Permiten enviar y recibir información.

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Pantallas táctiles.</li>
              <li>Discos externos.</li>
              <li>Memorias USB.</li>
              <li>Dispositivos de red.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Relación entre componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo trabajan juntos los componentes?
        </h2>

        <div className="border p-6 rounded-xl">
          Los componentes de una computadora no funcionan de manera
          independiente. Todos trabajan en conjunto para ejecutar las
          tareas solicitadas por el usuario.
          <br /><br />

          Por ejemplo, cuando una persona abre un documento:

          <br /><br />

          ✔ El almacenamiento contiene el archivo. <br />
          ✔ El procesador ejecuta las instrucciones necesarias. <br />
          ✔ La memoria RAM mantiene temporalmente la información utilizada. <br />
          ✔ El monitor muestra el contenido del documento. <br />
          ✔ El teclado y el mouse permiten interactuar con el programa.
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>
            Explicar con tus propias palabras qué es el hardware y
            mencionar cinco ejemplos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Clasificar los siguientes componentes como hardware interno
            o externo: teclado, procesador, monitor, memoria RAM,
            mouse, placa madre y disco SSD.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Investigar las características de la computadora que utilizas
            habitualmente e identificar el procesador, la cantidad de
            memoria RAM y la capacidad de almacenamiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Explicar cuál es la diferencia entre la memoria RAM y una
            unidad de almacenamiento SSD o HDD.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que una oficina necesita comprar una computadora
          para realizar tareas administrativas.
          <br /><br />

          El equipo será utilizado para:

          <br /><br />

          ✔ Crear documentos. <br />
          ✔ Trabajar con planillas de cálculo. <br />
          ✔ Utilizar correo electrónico. <br />
          ✔ Navegar por Internet. <br />
          ✔ Realizar videollamadas. <br />
          ✔ Almacenar documentos administrativos.
          <br /><br />

          Identifica qué componentes de hardware considerarías importantes
          para este equipo y explica qué función cumple cada uno.
          <br /><br />

          Finalmente, indica qué componentes priorizarías para obtener
          un equipo equilibrado para el trabajo administrativo.
        </div>
      </section>

    </div>
  );
}