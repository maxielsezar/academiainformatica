export default function IntroduccionInterfazPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Introducción a la interfaz con el usuario
        </h1>

        <p className="max-w-4xl leading-relaxed">
          Una interfaz con el usuario es el conjunto de elementos que permiten
          que una persona interactúe con un sistema informático. A través de
          ella, el usuario puede ingresar información, consultar registros,
          ejecutar acciones y visualizar resultados.
        </p>

        <p className="mt-4 max-w-4xl leading-relaxed">
          En una base de datos, la interfaz cumple una función importante:
          permite trabajar con la información de manera organizada sin tener
          que operar directamente sobre las tablas. En Microsoft Access, los
          formularios y los informes son herramientas fundamentales para
          facilitar esta interacción.
        </p>

        <p className="mt-4 max-w-4xl leading-relaxed">
          Durante este módulo aprenderás a diseñar interfaces que respondan a
          las necesidades de una oficina, permitan registrar datos
          correctamente y presenten información de forma clara.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Objetivos de aprendizaje
        </h2>

        <p className="mb-4 leading-relaxed">
          Al finalizar este contenido, podrás:
        </p>

        <ul className="list-disc space-y-3 pl-6 leading-relaxed">
          <li>Comprender qué es una interfaz con el usuario.</li>
          <li>
            Reconocer la importancia de la interfaz en una base de datos.
          </li>
          <li>
            Identificar los elementos que facilitan la interacción con un
            sistema.
          </li>
          <li>
            Diferenciar la función de las tablas, los formularios y los
            informes en Microsoft Access.
          </li>
          <li>
            Reconocer características de una interfaz clara, ordenada y fácil
            de utilizar.
          </li>
        </ul>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          ¿Qué es una interfaz con el usuario?
        </h2>

        <p className="mb-4 leading-relaxed">
          Es el medio mediante el cual una persona se comunica con un programa.
          Puede incluir ventanas, botones, campos de texto, listas, menús,
          mensajes y otros controles que permiten realizar distintas
          operaciones.
        </p>

        <p className="mb-4 leading-relaxed">
          Por ejemplo, en un sistema para administrar clientes, una persona
          necesita ingresar nombres, apellidos, teléfonos y direcciones.
          Una interfaz adecuada presenta esos campos de manera ordenada y
          permite guardar la información sin tener que conocer cómo se
          almacenan internamente los datos.
        </p>

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-bold text-blue-900">
            Ejemplo de una interfaz administrativa
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <p className="mb-2 font-semibold text-blue-800">
                Formulario de clientes
              </p>
              <ul className="space-y-1 text-sm">
                <li>Nombre: María</li>
                <li>Apellido: González</li>
                <li>Teléfono: 2945-123456</li>
                <li>Correo: ejemplo@correo.com</li>
              </ul>
              <p className="mt-3 rounded-md bg-blue-100 px-3 py-2 text-center font-semibold text-blue-900">
                Guardar registro
              </p>
            </div>

            <div className="rounded-lg bg-white p-4">
              <p className="mb-2 font-semibold text-blue-800">
                Acciones disponibles
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Crear un cliente nuevo.</li>
                <li>• Consultar los datos registrados.</li>
                <li>• Modificar información existente.</li>
                <li>• Buscar un cliente determinado.</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-blue-900">
            Este ejemplo representa una interfaz conceptual. Los campos y
            botones reales se crearán posteriormente utilizando las
            herramientas de Microsoft Access.
          </p>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          ¿Por qué es importante una buena interfaz?
        </h2>

        <p className="mb-4 leading-relaxed">
          Una interfaz bien diseñada facilita las tareas cotidianas, reduce
          errores de carga y permite que diferentes personas utilicen el
          sistema de forma consistente.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Facilita el trabajo
            </h3>
            <p className="leading-relaxed">
              Presenta las opciones necesarias para realizar una tarea sin
              obligar al usuario a buscar cada función.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Reduce errores
            </h3>
            <p className="leading-relaxed">
              Organiza los campos y puede orientar al usuario para que ingrese
              información en el lugar correcto.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Mejora la comprensión
            </h3>
            <p className="leading-relaxed">
              Utiliza nombres, etiquetas y controles comprensibles para que
              las operaciones sean fáciles de identificar.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-3 font-bold text-blue-900">
              Organiza la información
            </h3>
            <p className="leading-relaxed">
              Agrupa los datos relacionados y facilita su consulta,
              actualización y presentación.
            </p>
          </article>
        </div>
      </section>

      {/* Elementos de la interfaz */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Elementos habituales de una interfaz
        </h2>

        <p className="mb-6 leading-relaxed">
          Las interfaces utilizan diferentes elementos para mostrar
          información y permitir que el usuario realice acciones. En Access,
          muchos de estos elementos se incorporan a los formularios.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-blue-200 p-3 text-left">
                  Elemento
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Función
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                [
                  "Etiqueta",
                  "Identifica un campo o explica una opción.",
                  "Nombre del cliente",
                ],
                [
                  "Cuadro de texto",
                  "Permite ingresar o mostrar datos.",
                  "Apellido",
                ],
                [
                  "Botón",
                  "Permite ejecutar una acción.",
                  "Guardar",
                ],
                [
                  "Lista desplegable",
                  "Permite seleccionar una opción de una lista.",
                  "Provincia",
                ],
                [
                  "Casilla de verificación",
                  "Permite indicar si una condición se cumple.",
                  "Cliente activo",
                ],
                [
                  "Mensaje",
                  "Informa al usuario sobre un resultado o un problema.",
                  "Registro guardado",
                ],
              ].map(([elemento, funcion, ejemplo]) => (
                <tr key={elemento}>
                  <td className="border border-blue-200 p-3 font-semibold">
                    {elemento}
                  </td>
                  <td className="border border-blue-200 p-3">{funcion}</td>
                  <td className="border border-blue-200 p-3">{ejemplo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Access */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          La interfaz en Microsoft Access
        </h2>

        <p className="mb-4 leading-relaxed">
          Microsoft Access permite crear diferentes objetos para almacenar,
          consultar y presentar la información de una base de datos. Cada
          objeto cumple una función específica.
        </p>

        <div className="space-y-4">
          <div className="rounded-lg border-l-4 border-blue-700 bg-blue-50 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Tablas</h3>
            <p className="leading-relaxed">
              Almacenan los datos organizados en registros y campos. Por
              ejemplo, una tabla Clientes puede contener el código, el nombre,
              el teléfono y el correo electrónico de cada cliente.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-blue-700 bg-blue-50 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Consultas</h3>
            <p className="leading-relaxed">
              Permiten seleccionar, filtrar y analizar datos según criterios
              determinados. Por ejemplo, consultar únicamente los clientes de
              una localidad.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-blue-700 bg-blue-50 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Formularios</h3>
            <p className="leading-relaxed">
              Facilitan el ingreso, la visualización y la modificación de
              registros mediante una interfaz organizada.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-blue-700 bg-blue-50 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Informes</h3>
            <p className="leading-relaxed">
              Presentan los datos de manera estructurada para facilitar su
              lectura, revisión, impresión o distribución.
            </p>
          </div>
        </div>

        <p className="mt-5 leading-relaxed">
          En este módulo nos concentraremos especialmente en los formularios y
          los informes, utilizando como base las tablas, relaciones y consultas
          trabajadas anteriormente.
        </p>
      </section>

      {/* Principios de diseño */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Principios para diseñar una interfaz clara
        </h2>

        <ul className="list-disc space-y-3 pl-6 leading-relaxed">
          <li>
            <strong>Claridad:</strong> utilizar etiquetas y nombres fáciles de
            comprender.
          </li>
          <li>
            <strong>Organización:</strong> agrupar los campos según el tipo de
            información que representan.
          </li>
          <li>
            <strong>Consistencia:</strong> mantener estilos y disposiciones
            similares en las distintas pantallas.
          </li>
          <li>
            <strong>Simplicidad:</strong> mostrar las opciones necesarias y
            evitar elementos que dificulten el trabajo.
          </li>
          <li>
            <strong>Prevención de errores:</strong> utilizar controles
            adecuados y validar los datos cuando corresponda.
          </li>
          <li>
            <strong>Legibilidad:</strong> elegir tamaños de letra, espacios y
            contrastes que permitan leer la información cómodamente.
          </li>
        </ul>
      </section>

      {/* Ejemplo práctico */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Ejemplo práctico: sistema de una librería
        </h2>

        <p className="mb-4 leading-relaxed">
          Imaginá que una librería necesita registrar clientes y consultar sus
          datos cuando realiza una venta. Si los empleados deben ingresar
          directamente en una tabla, podrían tener dificultades para localizar
          los campos o interpretar la información.
        </p>

        <p className="mb-4 leading-relaxed">
          Para facilitar el trabajo, se puede diseñar un formulario con los
          campos principales del cliente y botones para crear un registro,
          desplazarse entre clientes o buscar información. Luego, se puede
          preparar un informe que muestre el listado completo de clientes.
        </p>

        <div className="rounded-xl border border-blue-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-bold text-blue-900">
            Comparación de las herramientas
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold text-blue-800">
                Formulario
              </h4>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Facilita el ingreso de clientes.</li>
                <li>Permite visualizar un registro de forma organizada.</li>
                <li>Ayuda a modificar datos existentes.</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-blue-800">Informe</h4>
              <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                <li>Presenta un listado de clientes.</li>
                <li>Organiza los datos para su lectura.</li>
                <li>Facilita la impresión o distribución del listado.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades prácticas */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividades prácticas
        </h2>

        <p className="mb-6 leading-relaxed">
          Respondé las consignas en tu carpeta o documento de trabajo.
          Justificá tus respuestas y utilizá ejemplos relacionados con una
          oficina o una organización.
        </p>

        <div className="space-y-6">
          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 1: reconocer una interfaz
            </h3>
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Explicá con tus palabras qué es una interfaz con el usuario.</li>
              <li>
                Mencioná cinco elementos que podrían formar parte de ella.
              </li>
              <li>
                Indicá qué acciones podría realizar una persona mediante un
                formulario de clientes.
              </li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 2: identificar necesidades
            </h3>
            <p className="mb-3 leading-relaxed">
              Una oficina registra proveedores, pero sus empleados tienen
              dificultades para encontrar y actualizar la información.
            </p>
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Identificá dos problemas de la situación.</li>
              <li>Proponé tres funciones que debería ofrecer la interfaz.</li>
              <li>Explicá cómo ayudaría un formulario a resolver los problemas.</li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 3: tablas, formularios e informes
            </h3>
            <p className="mb-3 leading-relaxed">
              Una base de datos almacena información sobre productos de una
              librería.
            </p>
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Explicá qué información debería almacenarse en una tabla.</li>
              <li>
                Describí para qué serviría un formulario de productos.
              </li>
              <li>
                Proponé un informe que pudiera utilizar el responsable de la
                librería.
              </li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 4: evaluar el diseño
            </h3>
            <p className="mb-3 leading-relaxed">
              Imaginá un formulario que presenta veinte campos sin etiquetas,
              botones desordenados y textos difíciles de leer.
            </p>
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Identificá cuatro problemas de diseño.</li>
              <li>Proponé una mejora para cada problema.</li>
              <li>
                Explicá por qué la consistencia y la legibilidad son
                importantes.
              </li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 5: planificar un formulario
            </h3>
            <p className="mb-3 leading-relaxed">
              Diseñá en papel la estructura de un formulario para registrar
              clientes de una empresa.
            </p>
            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Definí al menos seis campos.</li>
              <li>Agregá etiquetas claras para cada campo.</li>
              <li>Proponé dos botones o acciones útiles.</li>
              <li>Explicá cómo organizarías visualmente los elementos.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividad integradora: diseñar la interfaz de una oficina
        </h2>

        <p className="mb-4 leading-relaxed">
          Una pequeña empresa necesita organizar los datos de sus clientes y
          disponer de un listado para consultar la información cuando sea
          necesario. Tu tarea será proponer una interfaz que permita realizar
          ambas operaciones.
        </p>

        <h3 className="mb-3 text-lg font-bold text-blue-900">
          Consignas
        </h3>

        <ol className="list-decimal space-y-3 pl-6 leading-relaxed">
          <li>
            Identificá qué datos de los clientes necesita registrar la empresa.
          </li>
          <li>
            Dibujá un formulario y ubicá los campos, etiquetas y acciones.
          </li>
          <li>
            Explicá cómo se utilizaría el formulario para registrar un cliente
            nuevo y modificar uno existente.
          </li>
          <li>
            Diseñá un ejemplo de informe con columnas para mostrar los datos
            principales.
          </li>
          <li>
            Describí tres decisiones de diseño que ayuden a mejorar la
            claridad y la facilidad de uso.
          </li>
          <li>
            Justificá cómo se relacionan las tablas, el formulario y el informe
            dentro de la solución propuesta.
          </li>
        </ol>

        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            Criterios de evaluación
          </h3>

          <ul className="list-disc space-y-2 pl-6 leading-relaxed">
            <li>Identificación correcta de las necesidades de información.</li>
            <li>Organización y claridad del formulario propuesto.</li>
            <li>Selección adecuada de campos y acciones.</li>
            <li>Diseño comprensible del informe.</li>
            <li>Justificación de las decisiones de diseño.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          La interfaz con el usuario es el medio que facilita la interacción
          con un sistema informático. En Microsoft Access, los formularios
          ayudan a trabajar con los registros y los informes permiten presentar
          la información de manera organizada. Un buen diseño debe priorizar
          la claridad, la consistencia, la legibilidad y las necesidades de
          quienes utilizarán el sistema.
        </p>

        <p className="mt-4 leading-relaxed">
          En el próximo tema vas a profundizar en los formularios, sus
          características y las situaciones en las que conviene utilizarlos.
        </p>
      </section>
    </div>
  );
}