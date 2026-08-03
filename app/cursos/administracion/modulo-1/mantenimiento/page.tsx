export default function MantenimientoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Mantenimiento de la Computadora
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El mantenimiento de una computadora comprende un conjunto de
          tareas destinadas a conservar el equipo en buenas condiciones
          de funcionamiento, mejorar su rendimiento y prevenir posibles
          problemas.
          <br /><br />
          En un entorno administrativo, mantener correctamente los equipos
          informáticos es fundamental para evitar interrupciones en el
          trabajo y proteger la información almacenada.
          <br /><br />
          El mantenimiento puede incluir tareas relacionadas con el hardware,
          el software, la limpieza del equipo, las actualizaciones y la
          organización de la información.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia del Mantenimiento
        </h2>

        <div className="border p-6 rounded-xl">
          El mantenimiento periódico ayuda a conservar el correcto
          funcionamiento de la computadora y permite detectar posibles
          problemas antes de que provoquen fallas mayores.
          <br /><br />
          Una computadora correctamente mantenida puede ofrecer un entorno
          de trabajo más estable y seguro para realizar las tareas diarias.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Prevenir fallas y problemas de funcionamiento.</li>
          <li>Mejorar la estabilidad del sistema.</li>
          <li>Conservar los componentes en buenas condiciones.</li>
          <li>Mantener actualizado el software.</li>
          <li>Proteger la información almacenada.</li>
          <li>Evitar interrupciones innecesarias en el trabajo.</li>
        </ul>
      </section>

      {/* Tipos de mantenimiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Mantenimiento
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El mantenimiento informático puede dividirse en diferentes tipos
          según el objetivo y el momento en que se realiza.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Mantenimiento preventivo
            </p>

            Son las tareas que se realizan de manera periódica para
            prevenir problemas y reducir la posibilidad de que ocurran
            fallas.
            <br /><br />
            Algunos ejemplos son la limpieza del equipo, la actualización
            del sistema y la revisión del espacio de almacenamiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Mantenimiento correctivo
            </p>

            Consiste en realizar acciones para solucionar un problema
            que ya se ha producido.
            <br /><br />
            Puede incluir la reparación o reemplazo de un componente
            defectuoso o la solución de un problema de software.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Mantenimiento predictivo
            </p>

            Consiste en controlar determinados indicadores del equipo
            para identificar posibles problemas antes de que se produzca
            una falla.
            <br /><br />
            Puede incluir la observación de temperaturas, rendimiento,
            estado de las unidades de almacenamiento y otros parámetros.
          </div>

        </div>
      </section>

      {/* Mantenimiento físico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Mantenimiento Físico
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El mantenimiento físico comprende las tareas relacionadas con
          los componentes y elementos externos de la computadora.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunas tareas de mantenimiento físico son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Limpiar periódicamente el teclado y el mouse.</li>
            <li>Limpiar la pantalla con productos adecuados.</li>
            <li>Eliminar el polvo acumulado en el gabinete.</li>
            <li>Mantener despejadas las entradas y salidas de aire.</li>
            <li>Revisar que los cables estén correctamente conectados.</li>
            <li>Mantener el equipo en un lugar limpio y ventilado.</li>
          </ul>

        </div>
      </section>

      {/* Limpieza */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Limpieza de la Computadora
        </h2>

        <div className="border p-6 rounded-xl">
          La acumulación de polvo puede afectar el funcionamiento de
          determinados componentes y dificultar la correcta ventilación
          del equipo.
          <br /><br />
          Por este motivo, es recomendable realizar tareas de limpieza
          periódicas utilizando herramientas y productos adecuados.
          <br /><br />
          Antes de realizar una limpieza interna, la computadora debe
          estar apagada y desconectada de la alimentación eléctrica.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Apagar y desconectar el equipo antes de limpiarlo.</li>
          <li>Utilizar herramientas adecuadas para retirar el polvo.</li>
          <li>No aplicar líquidos directamente sobre los componentes.</li>
          <li>Evitar utilizar productos abrasivos.</li>
          <li>Mantener las rejillas de ventilación libres de polvo.</li>
        </ul>
      </section>

      {/* Temperatura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Temperatura y Ventilación
        </h2>

        <div className="border p-6 rounded-xl">
          Los componentes internos de una computadora generan calor
          durante su funcionamiento.
          <br /><br />
          Una ventilación adecuada permite mantener una temperatura
          apropiada y ayuda a evitar problemas relacionados con el
          sobrecalentamiento.
          <br /><br />
          Por este motivo, es importante mantener despejadas las entradas
          y salidas de aire del equipo.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>No bloquear las rejillas de ventilación.</li>
          <li>Evitar colocar el equipo en lugares con poca circulación de aire.</li>
          <li>Mantener limpio el interior del gabinete.</li>
          <li>Observar si los ventiladores funcionan correctamente.</li>
          <li>Prestar atención a temperaturas anormalmente elevadas.</li>
        </ul>
      </section>

      {/* Mantenimiento de software */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Mantenimiento del Software
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El mantenimiento del software comprende diferentes tareas
          destinadas a mantener el sistema operativo y las aplicaciones
          en condiciones adecuadas de funcionamiento.
        </p>

        <div className="space-y-6 mt-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Actualizaciones
            </p>

            Mantener actualizado el sistema operativo y los programas
            permite incorporar mejoras y correcciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Eliminación de programas innecesarios
            </p>

            Desinstalar programas que ya no se utilizan puede ayudar
            a mantener el sistema organizado y liberar espacio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Limpieza de archivos
            </p>

            La eliminación de archivos temporales y otros datos
            innecesarios puede ayudar a liberar espacio de almacenamiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Seguridad
            </p>

            Es importante mantener actualizadas las herramientas de
            seguridad y prestar atención a los archivos y programas
            instalados en el equipo.
          </div>

        </div>
      </section>

      {/* Actualizaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actualización del Sistema
        </h2>

        <div className="border p-6 rounded-xl">
          Las actualizaciones permiten incorporar mejoras, correcciones
          y, en muchos casos, soluciones a problemas de seguridad.
          <br /><br />
          Por este motivo, es recomendable mantener actualizado el
          sistema operativo y los programas utilizados habitualmente.
          <br /><br />
          Antes de realizar actualizaciones importantes, especialmente
          en equipos utilizados para tareas críticas, es conveniente
          contar con copias de seguridad de la información importante.
        </div>
      </section>

      {/* Espacio almacenamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Control del Espacio de Almacenamiento
        </h2>

        <div className="border p-6 rounded-xl">
          Mantener suficiente espacio libre en las unidades de almacenamiento
          es importante para el funcionamiento adecuado del sistema y
          para poder guardar nuevos archivos.
          <br /><br />
          Es recomendable revisar periódicamente el espacio disponible
          y eliminar o trasladar archivos que ya no sean necesarios.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Eliminar archivos innecesarios.</li>
          <li>Vaciar la Papelera de reciclaje.</li>
          <li>Desinstalar programas que no se utilizan.</li>
          <li>Revisar archivos de gran tamaño.</li>
          <li>Trasladar archivos antiguos a un almacenamiento externo.</li>
          <li>Realizar copias de seguridad antes de eliminar información importante.</li>
        </ul>
      </section>

      {/* Antivirus */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad y Mantenimiento
        </h2>

        <div className="border p-6 rounded-xl">
          La seguridad informática forma parte del mantenimiento general
          de una computadora.
          <br /><br />
          Mantener actualizado el sistema, utilizar herramientas de
          seguridad y evitar la instalación de programas de origen
          desconocido ayuda a reducir los riesgos para la información.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Mantener actualizado el sistema operativo.</li>
          <li>Mantener actualizadas las herramientas de seguridad.</li>
          <li>Evitar descargar archivos de fuentes desconocidas.</li>
          <li>No instalar programas de procedencia dudosa.</li>
          <li>Realizar copias de seguridad periódicas.</li>
          <li>Utilizar contraseñas seguras.</li>
        </ul>
      </section>

      {/* Backup y mantenimiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Mantenimiento y Copias de Seguridad
        </h2>

        <div className="border p-6 rounded-xl">
          Las copias de seguridad son una parte fundamental del mantenimiento
          de la información.
          <br /><br />
          Antes de realizar tareas que puedan afectar archivos importantes,
          es recomendable comprobar que exista una copia de seguridad
          actualizada.
          <br /><br />
          Esto permite recuperar la información en caso de que ocurra
          un problema durante el mantenimiento.
        </div>
      </section>

      {/* Mantenimiento en oficinas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Mantenimiento en un Entorno Administrativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una oficina, el mantenimiento de los equipos informáticos
          debe realizarse de forma planificada para reducir interrupciones
          y mantener la continuidad de las tareas.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunas tareas pueden incluir:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Revisar periódicamente los equipos.</li>
            <li>Mantener actualizados los sistemas y programas.</li>
            <li>Controlar el espacio disponible.</li>
            <li>Realizar copias de seguridad.</li>
            <li>Comprobar el estado de los dispositivos.</li>
            <li>Registrar los problemas detectados.</li>
            <li>Informar las fallas que requieran asistencia técnica especializada.</li>
          </ul>

        </div>
      </section>

      {/* Plan de mantenimiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Plan de Mantenimiento
        </h2>

        <div className="border p-6 rounded-xl">
          Un plan de mantenimiento permite organizar las tareas que deben
          realizarse sobre los equipos informáticos.
          <br /><br />
          La planificación ayuda a establecer qué tareas se realizarán,
          con qué frecuencia y quién será responsable de llevarlas a cabo.
        </div>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Ejemplo de planificación:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Diariamente:</strong> observar el funcionamiento
              general del equipo.
            </li>

            <li>
              <strong>Semanalmente:</strong> revisar archivos y espacio
              de almacenamiento.
            </li>

            <li>
              <strong>Mensualmente:</strong> realizar tareas de limpieza
              y revisión general.
            </li>

            <li>
              <strong>Periódicamente:</strong> comprobar las copias de
              seguridad y realizar tareas de actualización.
            </li>
          </ul>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas de Mantenimiento
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Mantener limpio el equipo y su entorno.</li>
          <li>Evitar bloquear las entradas y salidas de aire.</li>
          <li>Mantener actualizado el sistema operativo.</li>
          <li>Desinstalar programas innecesarios.</li>
          <li>Controlar periódicamente el espacio de almacenamiento.</li>
          <li>Realizar copias de seguridad de información importante.</li>
          <li>Utilizar fuentes confiables para descargar programas.</li>
          <li>Registrar los problemas y fallas detectadas.</li>
          <li>Solicitar asistencia técnica cuando sea necesario.</li>
          <li>No realizar modificaciones internas sin los conocimientos adecuados.</li>
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
            Identificar cinco tareas de mantenimiento preventivo que
            puedan realizarse en una computadora de oficina.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Revisar el espacio disponible en la unidad principal de
            una computadora y determinar si es necesario liberar espacio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Elaborar una lista de programas instalados e identificar
            cuáles son necesarios y cuáles podrían desinstalarse.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Diseñar un calendario mensual de mantenimiento para una
            computadora utilizada en una oficina.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Explicar qué diferencia existe entre mantenimiento preventivo
            y mantenimiento correctivo.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Imagina que eres responsable del mantenimiento informático
          de una pequeña oficina que cuenta con varias computadoras
          utilizadas para tareas administrativas.
          <br /><br />

          Algunos equipos presentan lentitud, tienen poco espacio
          disponible y no cuentan con un plan organizado de mantenimiento.
          <br /><br />

          Diseña un plan de mantenimiento que contemple:

          <br /><br />

          ✔ Limpieza física de los equipos. <br />
          ✔ Revisión de ventilación y temperatura. <br />
          ✔ Actualización del sistema operativo y programas. <br />
          ✔ Control del espacio de almacenamiento. <br />
          ✔ Desinstalación de programas innecesarios. <br />
          ✔ Revisión de las herramientas de seguridad. <br />
          ✔ Realización de copias de seguridad. <br />
          ✔ Registro de las tareas realizadas. <br />
          ✔ Frecuencia de cada tarea.
          <br /><br />

          Finalmente, explica qué tareas realizarías como mantenimiento
          preventivo y cuáles realizarías únicamente si se presenta
          una falla en el equipo.
        </div>
      </section>

    </div>
  );
}