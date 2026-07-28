export default function ComponentesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Componentes Internos de la Computadora
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Dentro del gabinete de una computadora se encuentran diferentes
          componentes electrónicos que trabajan en conjunto para permitir
          el funcionamiento del equipo.
          <br /><br />
          Cada componente cumple una función específica y se comunica con
          los demás para procesar información, ejecutar programas y
          almacenar datos.
          <br /><br />
          Conocer estos componentes permite comprender mejor cómo funciona
          una computadora y facilita la identificación de sus características
          y necesidades de mantenimiento.
        </p>
      </section>

      {/* Placa madre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Placa Madre (Motherboard)
        </h2>

        <div className="border p-6 rounded-xl">
          La <strong>placa madre</strong> es la principal tarjeta electrónica
          de una computadora.
          <br /><br />
          En ella se conectan y comunican gran parte de los componentes
          internos del equipo, como el procesador, la memoria RAM y las
          unidades de almacenamiento.
          <br /><br />
          También incorpora diferentes conectores y puertos que permiten
          conectar dispositivos internos y externos.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Conecta los principales componentes del equipo.</li>
          <li>Permite la comunicación entre los diferentes dispositivos.</li>
          <li>Proporciona conectores para ampliar las capacidades del equipo.</li>
          <li>Permite instalar diferentes componentes compatibles.</li>
        </ul>
      </section>

      {/* Procesador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Procesador (CPU)
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>procesador</strong>, también conocido como
          <strong> CPU</strong>, es el componente encargado de ejecutar
          instrucciones y realizar operaciones necesarias para el
          funcionamiento de los programas.
          <br /><br />
          Cuando utilizamos una aplicación, el procesador interpreta y
          ejecuta las instrucciones que forman parte de ese programa.
          <br /><br />
          Su rendimiento depende de diferentes características, como la
          arquitectura, la cantidad de núcleos y la frecuencia de
          funcionamiento.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Núcleos</strong>
          </p>
          Permiten que el procesador pueda realizar diferentes tareas
          simultáneamente.

          <br /><br />

          <p className="mb-2">
            <strong>Frecuencia</strong>
          </p>
          Se expresa habitualmente en GHz y representa la velocidad de
          funcionamiento del procesador.

          <br /><br />

          <p className="mb-2">
            <strong>Procesador integrado</strong>
          </p>
          Algunos procesadores incorporan gráficos integrados que permiten
          generar imágenes sin necesidad de una placa de video dedicada.

        </div>
      </section>

      {/* Memoria RAM */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Memoria RAM
        </h2>

        <div className="border p-6 rounded-xl">
          La <strong>memoria RAM</strong> es una memoria de acceso rápido
          utilizada para almacenar temporalmente los datos y programas
          que están siendo utilizados por el sistema.
          <br /><br />
          Cuando abrimos un programa, parte de la información necesaria
          para ejecutarlo se carga en la memoria RAM.
          <br /><br />
          La RAM es una memoria <strong>volátil</strong>, lo que significa
          que pierde su contenido cuando la computadora se apaga.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Permite ejecutar programas y aplicaciones.</li>
          <li>Facilita el trabajo con varias aplicaciones simultáneamente.</li>
          <li>Su capacidad se mide habitualmente en GB.</li>
          <li>Es más rápida que las unidades de almacenamiento.</li>
          <li>Su contenido se pierde al apagar el equipo.</li>
        </ul>
      </section>

      {/* Almacenamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Unidades de Almacenamiento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las unidades de almacenamiento permiten guardar de forma
          permanente el sistema operativo, los programas y los archivos
          del usuario.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Disco Rígido (HDD)
            </p>

            Utiliza platos magnéticos y componentes mecánicos para
            almacenar información.

            <br /><br />

            Sus principales características son:

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Gran capacidad de almacenamiento.</li>
              <li>Menor velocidad que un SSD.</li>
              <li>Posee componentes mecánicos móviles.</li>
              <li>Puede utilizarse para almacenar grandes cantidades de datos.</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Unidad SSD
            </p>

            Utiliza memoria electrónica para almacenar información y no
            posee partes mecánicas móviles.

            <br /><br />

            Sus principales características son:

            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Mayor velocidad de lectura y escritura.</li>
              <li>Menor tiempo de acceso a los datos.</li>
              <li>Mayor resistencia a movimientos y golpes.</li>
              <li>Permite iniciar el sistema y abrir programas rápidamente.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Fuente de alimentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fuente de Alimentación
        </h2>

        <div className="border p-6 rounded-xl">
          La <strong>fuente de alimentación</strong> es el componente
          encargado de suministrar energía eléctrica a los diferentes
          componentes internos de la computadora.
          <br /><br />
          Convierte la energía eléctrica proveniente de la instalación
          eléctrica en los niveles de tensión adecuados para los componentes
          del equipo.
          <br /><br />
          La potencia de una fuente se expresa habitualmente en
          <strong> watts (W)</strong>. Es importante utilizar una fuente
          adecuada para los componentes instalados.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Proporciona energía a los componentes internos.</li>
          <li>Permite el funcionamiento estable del equipo.</li>
          <li>Debe contar con potencia suficiente para el sistema.</li>
          <li>Una fuente de buena calidad ayuda a proteger los componentes.</li>
        </ul>
      </section>

      {/* Sistema de refrigeración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sistema de Refrigeración
        </h2>

        <div className="border p-6 rounded-xl">
          Los componentes internos generan calor durante su funcionamiento.
          Por este motivo, las computadoras utilizan sistemas de
          refrigeración que permiten mantener temperaturas adecuadas.
          <br /><br />
          El sistema de refrigeración puede incluir ventiladores,
          disipadores de calor y otros sistemas diseñados para facilitar
          la circulación del aire y reducir la temperatura.
          <br /><br />
          Una refrigeración adecuada ayuda a mantener la estabilidad y
          el correcto funcionamiento del equipo.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Disipador</strong>
          </p>
          Es un componente diseñado para absorber y transferir el calor
          generado por componentes como el procesador.

          <br /><br />

          <p className="mb-2">
            <strong>Ventilador</strong>
          </p>
          Ayuda a mover el aire dentro del gabinete y expulsar el calor.

          <br /><br />

          <p className="mb-2">
            <strong>Pasta térmica</strong>
          </p>
          Es un material que facilita la transferencia de calor entre
          el procesador y el disipador.

        </div>
      </section>

      {/* Placa de video */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Placa de Video (GPU)
        </h2>

        <div className="border p-6 rounded-xl">
          La <strong>GPU</strong> o unidad de procesamiento gráfico es
          el componente encargado de procesar y generar información
          relacionada con las imágenes que se muestran en el monitor.
          <br /><br />
          Algunas computadoras utilizan gráficos integrados, mientras
          que otras incorporan una placa de video dedicada.
          <br /><br />
          Las placas de video dedicadas cuentan con su propio procesador
          gráfico y, en muchos casos, con memoria propia.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Procesa información gráfica.</li>
          <li>Permite generar imágenes y video.</li>
          <li>Puede estar integrada en el procesador.</li>
          <li>Puede utilizarse como componente dedicado.</li>
          <li>Es especialmente importante para tareas gráficas exigentes.</li>
        </ul>
      </section>

      {/* Ranuras y conectores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ranuras y Conectores de la Placa Madre
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La placa madre posee diferentes ranuras y conectores que permiten
          instalar componentes y conectar dispositivos.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="mb-2">
            <strong>Ranuras de memoria RAM</strong>
          </p>
          Permiten instalar los módulos de memoria RAM.

          <br /><br />

          <p className="mb-2">
            <strong>Ranuras PCI Express</strong>
          </p>
          Permiten conectar diferentes tarjetas de expansión, como placas
          de video y otros dispositivos.

          <br /><br />

          <p className="mb-2">
            <strong>Conectores SATA</strong>
          </p>
          Se utilizan para conectar determinadas unidades de almacenamiento
          y otros dispositivos compatibles.

          <br /><br />

          <p className="mb-2">
            <strong>Conectores de alimentación</strong>
          </p>
          Permiten suministrar energía eléctrica a la placa madre y
          diferentes componentes.

        </div>
      </section>

      {/* Funcionamiento conjunto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funcionamiento Conjunto de los Componentes
        </h2>

        <div className="border p-6 rounded-xl">
          Los componentes internos trabajan de manera coordinada para
          permitir que la computadora funcione.
          <br /><br />

          Por ejemplo, cuando abrimos un programa:

          <br /><br />

          ✔ La unidad de almacenamiento contiene el programa. <br />
          ✔ El sistema operativo solicita que se ejecute. <br />
          ✔ El procesador procesa las instrucciones. <br />
          ✔ La información necesaria se carga en la memoria RAM. <br />
          ✔ La placa madre permite la comunicación entre los componentes. <br />
          ✔ La GPU procesa la información gráfica cuando es necesario. <br />
          ✔ El monitor muestra el resultado al usuario.
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
            Explicar con tus propias palabras cuál es la función de la
            placa madre y por qué es importante dentro de una computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Elaborar una tabla comparativa entre la memoria RAM y una
            unidad SSD, indicando su función, velocidad y forma de
            almacenamiento de la información.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Investigar las características de la computadora que utilizas
            e identificar el modelo del procesador, cantidad de memoria RAM,
            tipo de almacenamiento y modelo de placa madre.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Explicar qué podría ocurrir si una computadora tuviera un
            sistema de refrigeración insuficiente.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Una oficina necesita adquirir una computadora para realizar
          tareas administrativas durante varios años.
          <br /><br />

          El equipo será utilizado principalmente para trabajar con
          documentos, planillas de cálculo, correo electrónico,
          videollamadas y navegación por Internet.
          <br /><br />

          Analiza qué componentes internos deberían considerarse al
          seleccionar el equipo.
          <br /><br />

          Explica:

          <br /><br />

          ✔ Qué importancia tiene el procesador. <br />
          ✔ Cuánta memoria RAM sería conveniente considerar. <br />
          ✔ Qué tipo de almacenamiento elegirías y por qué. <br />
          ✔ Qué función cumple la placa madre. <br />
          ✔ Por qué es importante contar con una fuente adecuada. <br />
          ✔ Por qué es necesario mantener una correcta refrigeración.
          <br /><br />

          Finalmente, realiza una propuesta de computadora equilibrada
          para una oficina administrativa y justifica la elección de
          cada componente.
        </div>
      </section>

    </div>
  );
}