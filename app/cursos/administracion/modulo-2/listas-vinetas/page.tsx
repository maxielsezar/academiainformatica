export default function ListasVinetasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Listas y Viñetas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las listas permiten organizar información de manera clara y ordenada,
          facilitando su lectura y comprensión.
          <br /><br />
          Son ampliamente utilizadas en documentos administrativos, informes,
          instructivos, procedimientos y presentaciones para enumerar elementos,
          pasos o características sin necesidad de redactar largos párrafos.
        </p>
      </section>

      {/* ¿Qué son? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son las Listas?
        </h2>

        <div className="border p-6 rounded-xl">
          Una lista es un conjunto de elementos organizados de forma vertical.
          Cada elemento representa una idea, una tarea, un dato o un paso de un
          procedimiento.
          <br /><br />
          Los procesadores de texto permiten crear listas automáticamente,
          manteniendo una presentación uniforme y profesional.
        </div>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Listas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Listas con Viñetas
            </p>

            Utilizan símbolos para identificar cada elemento de la lista.
            <br /><br />

            <ul className="list-disc list-inside space-y-2">
              <li>Computadora</li>
              <li>Impresora</li>
              <li>Monitor</li>
              <li>Teclado</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Listas Numeradas
            </p>

            Se utilizan cuando el orden de los elementos es importante.

            <br /><br />

            <ol className="list-decimal list-inside space-y-2">
              <li>Abrir el procesador de textos.</li>
              <li>Crear un documento nuevo.</li>
              <li>Escribir el contenido.</li>
              <li>Guardar el archivo.</li>
            </ol>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-3">
              Listas Multinivel
            </p>

            Permiten organizar información en distintos niveles jerárquicos.

            <br /><br />

            <ol className="list-decimal list-inside space-y-2">
              <li>Administración
                <ol className="list-[lower-alpha] list-inside ml-6 mt-2 space-y-1">
                  <li>Recursos Humanos</li>
                  <li>Contabilidad</li>
                </ol>
              </li>

              <li>Producción</li>
            </ol>
          </div>

        </div>
      </section>

      {/* Crear listas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una Lista
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La mayoría de los procesadores de texto permiten crear listas desde
          la pestaña <strong>Inicio</strong>, utilizando los botones
          <strong> Viñetas</strong> o <strong>Numeración</strong>.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Pasos generales:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Seleccionar el texto.</li>
            <li>Elegir Viñetas o Numeración.</li>
            <li>Seleccionar el estilo deseado.</li>
            <li>Continuar escribiendo los elementos.</li>
          </ol>

        </div>
      </section>

      {/* Personalización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Personalización de las Listas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los procesadores de texto permiten modificar la apariencia de las
          listas según las necesidades del documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Cambiar el símbolo de las viñetas.</li>
            <li>Elegir distintos formatos de numeración.</li>
            <li>Modificar el color y tamaño de las viñetas.</li>
            <li>Ajustar la sangría de la lista.</li>
            <li>Crear listas de varios niveles.</li>
          </ul>

        </div>
      </section>

      {/* Cuándo utilizar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuándo Utilizar Cada Tipo?
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <strong>Viñetas</strong>
            <br /><br />
            Se utilizan cuando el orden de los elementos no tiene importancia.
            Por ejemplo: materiales, características o recursos.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Numeración</strong>
            <br /><br />
            Se utiliza cuando los elementos siguen un orden específico,
            como instrucciones, procedimientos o etapas de un proceso.
          </div>

        </div>
      </section>

      {/* Uso administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso en Documentos Administrativos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En tareas administrativas las listas permiten presentar información
          de forma clara, ordenada y profesional.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">
            <li>Listado de tareas.</li>
            <li>Inventarios.</li>
            <li>Requisitos para trámites.</li>
            <li>Funciones de un puesto de trabajo.</li>
            <li>Pasos para realizar un procedimiento.</li>
            <li>Agenda de reuniones.</li>
            <li>Control de actividades.</li>
          </ul>

        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Utilizar Listas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Organizan mejor la información.</li>
          <li>Facilitan la lectura.</li>
          <li>Permiten identificar rápidamente los elementos.</li>
          <li>Mejoran la presentación del documento.</li>
          <li>Hacen los textos más claros y profesionales.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar el mismo estilo de lista en todo el documento.</li>
          <li>No mezclar viñetas y numeración sin necesidad.</li>
          <li>Mantener una sangría uniforme.</li>
          <li>Evitar listas demasiado extensas.</li>
          <li>Utilizar listas multinivel solo cuando sea necesario.</li>
          <li>Revisar que la numeración sea correcta.</li>
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

            Crear una lista con viñetas que incluya diez elementos de una
            oficina.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Elaborar una lista numerada con los pasos necesarios para guardar
            un documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Crear una lista multinivel representando la estructura de una
            empresa con al menos dos niveles.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Personalizar el estilo de las viñetas cambiando el símbolo y la
            sangría de la lista.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Diseña un documento titulado <strong>"Manual de Bienvenida para
          Empleados"</strong>.
          <br /><br />

          El documento deberá incluir:

          <br /><br />

          ✔ Una lista con viñetas para los beneficios de la empresa. <br />
          ✔ Una lista numerada con los pasos del proceso de ingreso. <br />
          ✔ Una lista multinivel que represente los distintos departamentos de
          la organización. <br />
          ✔ Un formato uniforme, ordenado y profesional en todas las listas.
        </div>
      </section>

    </div>
  );
}
