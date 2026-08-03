export default function AlmacenamientoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Almacenamiento de Información
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El almacenamiento es el proceso que permite guardar información
          digital para poder utilizarla posteriormente.
          <br /><br />
          En una computadora, los documentos, imágenes, videos, programas
          y otros archivos se almacenan en diferentes dispositivos y
          unidades de almacenamiento.
          <br /><br />
          Comprender cómo funciona el almacenamiento es fundamental para
          administrar correctamente la información y utilizar de manera
          eficiente los recursos de una computadora.
        </p>
      </section>

      {/* ¿Qué es? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el Almacenamiento?
        </h2>

        <div className="border p-6 rounded-xl">
          El <strong>almacenamiento</strong> es la capacidad de un
          dispositivo para guardar datos e información digital.
          <br /><br />
          A diferencia de la memoria RAM, que se utiliza principalmente
          mientras la computadora está funcionando, los dispositivos de
          almacenamiento permiten conservar la información incluso cuando
          el equipo se apaga.
          <br /><br />
          Gracias al almacenamiento podemos guardar documentos, fotografías,
          videos, programas y otros archivos para acceder a ellos más adelante.
        </div>
      </section>

      {/* Tipos de almacenamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Almacenamiento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Existen diferentes tecnologías y dispositivos utilizados para
          almacenar información digital.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Disco duro (HDD)
            </p>

            Los discos duros utilizan componentes mecánicos y magnéticos
            para almacenar información.
            <br /><br />
            Suelen ofrecer una gran capacidad de almacenamiento y son
            utilizados para guardar archivos y programas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Unidad de estado sólido (SSD)
            </p>

            Las unidades SSD utilizan memoria electrónica para almacenar
            información y no poseen partes mecánicas móviles.
            <br /><br />
            Generalmente ofrecen velocidades de lectura y escritura
            superiores a los discos duros tradicionales.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Memoria USB
            </p>

            Las memorias USB son dispositivos portátiles que permiten
            almacenar y transportar archivos de una computadora a otra.
            <br /><br />
            Son útiles para transferir documentos y realizar copias
            temporales de información.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Tarjetas de memoria
            </p>

            Son dispositivos de almacenamiento pequeños utilizados
            principalmente en teléfonos celulares, cámaras digitales
            y otros equipos electrónicos.
          </div>

        </div>
      </section>

      {/* HDD vs SSD */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias entre HDD y SSD
        </h2>

        <div className="border p-6 rounded-xl">

          <p className="mb-4">
            Aunque ambos dispositivos permiten almacenar información,
            existen diferencias importantes entre ellos.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Los HDD utilizan componentes mecánicos y los SSD no.</li>
            <li>Los SSD suelen ofrecer mayor velocidad de acceso a los datos.</li>
            <li>Los HDD suelen ofrecer una buena relación entre capacidad y costo.</li>
            <li>Los SSD son generalmente más resistentes a golpes y movimientos.</li>
            <li>Ambos pueden utilizarse para almacenar el sistema operativo, programas y archivos.</li>
          </ul>

        </div>
      </section>

      {/* Unidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Unidades de Almacenamiento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La capacidad de almacenamiento se mide utilizando diferentes
          unidades. Estas permiten expresar la cantidad de información
          que puede contener un dispositivo.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Bit
            </p>

            Es la unidad mínima de información digital y puede representar
            dos estados posibles.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Byte
            </p>

            Un byte está formado por 8 bits y se utiliza como una unidad
            básica para representar información digital.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Kilobyte (KB)
            </p>

            Unidad de almacenamiento utilizada para representar cantidades
            pequeñas de información.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Megabyte (MB)
            </p>

            Se utiliza para representar archivos de mayor tamaño, como
            imágenes, documentos y algunos archivos multimedia.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Gigabyte (GB)
            </p>

            Es una unidad habitual para expresar la capacidad de discos,
            memorias USB, teléfonos y otros dispositivos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Terabyte (TB)
            </p>

            Representa una capacidad de almacenamiento mucho mayor y se
            utiliza habitualmente en discos y sistemas destinados a
            almacenar grandes cantidades de información.
          </div>

        </div>
      </section>

      {/* Capacidad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidad de Almacenamiento
        </h2>

        <div className="border p-6 rounded-xl">
          La capacidad de almacenamiento indica cuánta información puede
          guardar un dispositivo.
          <br /><br />
          Por ejemplo, una unidad de almacenamiento con una capacidad
          mayor puede guardar una cantidad superior de documentos,
          imágenes, videos y programas.
          <br /><br />
          La capacidad necesaria depende del tipo de actividad que se
          realice y de la cantidad de información que se necesite almacenar.
        </div>
      </section>

      {/* Espacio disponible */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Espacio Disponible
        </h2>

        <div className="border p-6 rounded-xl">
          Una unidad de almacenamiento no siempre tiene disponible toda
          su capacidad total.
          <br /><br />
          Parte del espacio puede estar ocupado por el sistema operativo,
          programas, archivos personales y otros datos.
          <br /><br />
          Es importante controlar periódicamente el espacio disponible
          para evitar que una unidad se quede sin capacidad suficiente.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Eliminar archivos innecesarios.</li>
          <li>Vaciar periódicamente la Papelera de reciclaje.</li>
          <li>Desinstalar programas que ya no se utilizan.</li>
          <li>Revisar archivos grandes que ocupen mucho espacio.</li>
          <li>Utilizar dispositivos externos para almacenar información cuando sea necesario.</li>
          <li>Realizar copias de seguridad antes de eliminar información importante.</li>
        </ul>
      </section>

      {/* Archivos grandes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Administración de Archivos Grandes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunos archivos pueden ocupar una gran cantidad de espacio,
          especialmente los videos, imágenes de alta resolución y otros
          contenidos multimedia.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Para administrar correctamente el espacio:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Identificar qué archivos ocupan más espacio.</li>
            <li>Eliminar archivos que ya no sean necesarios.</li>
            <li>Transferir archivos importantes a otra unidad.</li>
            <li>Utilizar almacenamiento externo cuando sea necesario.</li>
            <li>Realizar copias de seguridad de la información importante.</li>
          </ul>

        </div>
      </section>

      {/* Almacenamiento externo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Almacenamiento Externo
        </h2>

        <div className="border p-6 rounded-xl">
          Los dispositivos de almacenamiento externo permiten guardar
          información fuera de la unidad principal de la computadora.
          <br /><br />
          Entre los dispositivos más utilizados se encuentran las
          memorias USB y los discos externos.
          <br /><br />
          Estos dispositivos pueden utilizarse para transportar archivos,
          ampliar la capacidad disponible o realizar copias de seguridad.
        </div>
      </section>

      {/* Nube */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Almacenamiento en la Nube
        </h2>

        <div className="border p-6 rounded-xl">
          El almacenamiento en la nube permite guardar información en
          servidores accesibles mediante Internet.
          <br /><br />
          Los archivos pueden estar disponibles desde diferentes dispositivos
          siempre que el usuario tenga acceso a la cuenta correspondiente
          y exista conexión a Internet.
          <br /><br />
          Este tipo de almacenamiento puede facilitar el acceso a documentos
          y el trabajo colaborativo.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Permite acceder a los archivos desde diferentes dispositivos.</li>
          <li>Facilita el intercambio de documentos.</li>
          <li>Puede facilitar el trabajo colaborativo.</li>
          <li>Permite mantener copias adicionales de información.</li>
          <li>Requiere prestar atención a la seguridad de las cuentas.</li>
        </ul>
      </section>

      {/* Copias de seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Copias de Seguridad
        </h2>

        <div className="border p-6 rounded-xl">
          Una copia de seguridad consiste en crear una copia adicional
          de los archivos importantes para poder recuperarlos en caso
          de pérdida o daño de la información original.
          <br /><br />
          Las copias de seguridad son especialmente importantes en
          entornos administrativos, donde se pueden manejar documentos
          de clientes, facturas, presupuestos e información empresarial.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Realizar copias de seguridad periódicas.</li>
          <li>Guardar las copias en una ubicación diferente.</li>
          <li>Proteger las copias frente al acceso no autorizado.</li>
          <li>Comprobar periódicamente que los archivos puedan recuperarse.</li>
          <li>Organizar correctamente la información respaldada.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas de Almacenamiento
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Mantener organizados los archivos y carpetas.</li>
          <li>Controlar periódicamente el espacio disponible.</li>
          <li>Eliminar archivos innecesarios.</li>
          <li>Realizar copias de seguridad de información importante.</li>
          <li>Utilizar dispositivos de almacenamiento adecuados para cada necesidad.</li>
          <li>Evitar almacenar información importante en un único dispositivo.</li>
          <li>Proteger los dispositivos externos contra pérdidas o daños.</li>
          <li>Mantener organizados los archivos almacenados en la nube.</li>
        </ul>
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
            Identificar qué dispositivos de almacenamiento posee la
            computadora utilizada en clase.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Consultar cuánto espacio total y cuánto espacio disponible
            tiene la unidad principal de la computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Identificar cinco archivos almacenados en la computadora
            y analizar cuánto espacio ocupa cada uno.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Investigar las diferencias entre un disco HDD y una unidad SSD.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Investigar qué servicio de almacenamiento en la nube se
            utiliza habitualmente y explicar para qué podría utilizarse
            en una oficina.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que trabajas como operador de informática en una oficina
          donde se almacenan documentos administrativos, planillas,
          facturas e información de clientes.
          <br /><br />

          La computadora principal tiene poco espacio disponible y la
          empresa necesita organizar y proteger su información.
          <br /><br />

          Propón una solución que contemple:

          <br /><br />

          ✔ Identificar qué archivos ocupan más espacio. <br />
          ✔ Eliminar información innecesaria. <br />
          ✔ Organizar correctamente los archivos y carpetas. <br />
          ✔ Utilizar un dispositivo de almacenamiento externo si fuera necesario. <br />
          ✔ Realizar copias de seguridad de los documentos importantes. <br />
          ✔ Considerar el uso de almacenamiento en la nube.
          <br /><br />

          Finalmente, explica qué tipo de almacenamiento utilizarías
          para cada situación y por qué es importante mantener varias
          copias de seguridad de la información administrativa.
        </div>
      </section>

    </div>
  );
}