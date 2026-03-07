export default function BuenasPracticasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Buenas Prácticas en el Uso de la Computadora
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Utilizar correctamente una computadora no solo permite trabajar de
          forma más eficiente, sino que también ayuda a prolongar la vida útil
          del equipo y evitar la pérdida de información.
        </p>

        <p className="mt-4 leading-relaxed max-w-3xl">
          Las buenas prácticas incluyen hábitos de cuidado del hardware,
          organización de archivos, seguridad de la información y uso adecuado
          del sistema operativo.
        </p>
      </section>

      {/* Cuidado del equipo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cuidado del Equipo
        </h2>

        <ul className="list-disc list-inside space-y-4">
          <li>No colocar líquidos cerca de la computadora.</li>
          <li>Mantener el teclado y el monitor limpios.</li>
          <li>No golpear ni mover el equipo mientras está encendido.</li>
          <li>Evitar cubrir las salidas de ventilación del equipo.</li>
          <li>Apagar correctamente la computadora al finalizar el trabajo.</li>
        </ul>
      </section>

      {/* Organización de archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de Archivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Mantener los archivos organizados facilita encontrar información
          rápidamente y evita confusiones al trabajar con muchos documentos.
        </p>

        <ul className="list-disc list-inside mt-4 space-y-4">
          <li>Crear carpetas para cada tipo de archivo.</li>
          <li>Utilizar nombres claros y descriptivos.</li>
          <li>Evitar guardar todos los archivos en el escritorio.</li>
          <li>Eliminar archivos que ya no sean necesarios.</li>
        </ul>
      </section>

      {/* Seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Seguridad Informática Básica
        </h2>

        <ul className="list-disc list-inside space-y-4">
          <li>No abrir archivos de origen desconocido.</li>
          <li>Utilizar contraseñas seguras.</li>
          <li>No compartir información personal en sitios no confiables.</li>
          <li>Evitar instalar programas de fuentes desconocidas.</li>
          <li>Realizar copias de seguridad de archivos importantes.</li>
        </ul>
      </section>

      {/* Uso responsable */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso Responsable de la Computadora
        </h2>

        <ul className="list-disc list-inside space-y-4">
          <li>Guardar el trabajo con frecuencia.</li>
          <li>Cerrar correctamente los programas que no se utilizan.</li>
          <li>No instalar programas sin autorización en equipos compartidos.</li>
          <li>Respetar las normas de uso del equipo en el lugar de trabajo o estudio.</li>
        </ul>
      </section>

      {/* Ergonomía */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ergonomía y Postura
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La ergonomía se refiere a la forma correcta de utilizar la computadora
          para evitar problemas físicos como dolor de espalda, cuello o vista.
        </p>

        <ul className="list-disc list-inside mt-4 space-y-4">
          <li>Mantener la espalda recta al sentarse.</li>
          <li>Ubicar el monitor a la altura de los ojos.</li>
          <li>Descansar la vista cada cierto tiempo.</li>
          <li>Evitar usar la computadora durante muchas horas seguidas.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crear una lista de cinco buenas prácticas que ayuden a cuidar una computadora.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Organizar los archivos del escritorio creando carpetas para documentos,
            imágenes y trabajos prácticos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Analizar qué riesgos existen al descargar archivos de internet sin verificar su origen.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Elaborar una guía de buenas prácticas para el uso de computadoras
          en un aula o lugar de trabajo.  
          La guía debe incluir recomendaciones de seguridad,
          cuidado del equipo y organización de archivos.
        </div>
      </section>

    </div>
  );
}