
export default function DisenoFormulariosPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diseño y formato de formularios
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El diseño de formularios en Microsoft Access consiste en organizar
          los campos, controles, etiquetas y botones para facilitar la carga,
          consulta y modificación de información. Un formulario bien diseñado
          permite trabajar de manera ordenada, reduce errores y mejora la
          experiencia del usuario.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este tema aprenderemos a distribuir los elementos de un formulario,
          aplicar formatos visuales, organizar la información por secciones y
          establecer criterios de diseño adecuados para aplicaciones
          administrativas.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de aprendizaje
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Comprender los principios básicos del diseño de formularios.</li>
          <li>Organizar campos y controles de manera clara y coherente.</li>
          <li>Modificar tamaños, colores, fuentes y alineaciones.</li>
          <li>Utilizar encabezados, secciones y grupos de controles.</li>
          <li>Mejorar la navegación y la facilidad de uso.</li>
          <li>Aplicar criterios de diseño a formularios administrativos.</li>
        </ul>
      </section>

      {/* Importancia del diseño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. La importancia del diseño
        </h2>

        <p className="leading-relaxed mb-4">
          Un formulario no debe limitarse a mostrar todos los campos de una
          tabla. Su diseño debe ayudar al usuario a comprender qué información
          necesita ingresar, en qué orden debe hacerlo y cómo puede realizar
          las operaciones disponibles.
        </p>

        <p className="leading-relaxed mb-4">
          Por ejemplo, un formulario de inscripción a un curso puede organizar
          los datos personales en una sección, la información del curso en otra
          y los datos administrativos en una tercera. Esta distribución hace
          que la carga sea más sencilla y reduce las confusiones.
        </p>

        <div className="rounded-xl border border-blue-200 p-5 space-y-3">
          <h3 className="font-bold text-blue-900">
            Características de un buen formulario
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Presenta títulos y etiquetas descriptivas.</li>
            <li>Mantiene una distribución ordenada de los controles.</li>
            <li>Utiliza colores y fuentes fáciles de leer.</li>
            <li>Agrupa los datos relacionados.</li>
            <li>Destaca las acciones importantes.</li>
            <li>Evita información y elementos innecesarios.</li>
          </ul>
        </div>
      </section>

      {/* Principios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Principios básicos de diseño
        </h2>

        <div className="space-y-6">
          <article>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Organización
            </h3>
            <p className="leading-relaxed">
              Los controles deben ubicarse siguiendo un orden lógico. En un
              formulario de clientes, por ejemplo, conviene colocar primero
              el apellido y el nombre, luego los datos de contacto y finalmente
              la información complementaria.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Alineación
            </h3>
            <p className="leading-relaxed">
              Las etiquetas y los campos deben mantener una alineación
              consistente. Esto facilita la lectura y permite localizar
              rápidamente cada dato.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Consistencia
            </h3>
            <p className="leading-relaxed">
              Los formularios de una misma aplicación deben compartir criterios
              visuales, como tipos de letra, colores, títulos y ubicación de
              los botones.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Legibilidad
            </h3>
            <p className="leading-relaxed">
              Los textos deben tener un tamaño adecuado y un contraste suficiente
              con el fondo. Es preferible utilizar una fuente sencilla y evitar
              combinaciones de colores que dificulten la lectura.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              Simplicidad
            </h3>
            <p className="leading-relaxed">
              Se deben incluir únicamente los controles necesarios para la
              tarea. Un formulario recargado puede confundir al usuario y
              aumentar la posibilidad de cometer errores.
            </p>
          </article>
        </div>
      </section>

      {/* Partes de un formulario */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Secciones de un formulario
        </h2>

        <p className="leading-relaxed mb-4">
          Microsoft Access permite organizar un formulario mediante distintas
          secciones. Cada una cumple una función dentro de la presentación de
          los datos.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-blue-200 p-4">
            <h3 className="font-bold text-blue-800 mb-2">
              Encabezado del formulario
            </h3>
            <p className="leading-relaxed">
              Se utiliza para presentar el título, el nombre de la institución,
              un logotipo u otra información que identifique el formulario.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-4">
            <h3 className="font-bold text-blue-800 mb-2">
              Detalle
            </h3>
            <p className="leading-relaxed">
              Es la sección principal. Contiene los controles que muestran o
              permiten editar los datos del registro, como nombres, fechas,
              importes y domicilios.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-4">
            <h3 className="font-bold text-blue-800 mb-2">
              Pie del formulario
            </h3>
            <p className="leading-relaxed">
              Puede utilizarse para incluir instrucciones, información
              complementaria o botones de acción, según el diseño y las
              necesidades de la aplicación.
            </p>
          </div>
        </div>

        <p className="leading-relaxed mt-4">
          Las secciones disponibles pueden variar según el tipo de formulario
          y la configuración utilizada. No todos los formularios necesitan
          mostrar un encabezado o un pie.
        </p>
      </section>

      {/* Formato visual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Formato visual de los controles
        </h2>

        <p className="leading-relaxed mb-4">
          Las propiedades de formato permiten adaptar la apariencia de cada
          elemento. En la vista Diseño o Presentación se pueden seleccionar
          controles y modificar sus características desde la cinta de opciones
          o la Hoja de propiedades.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Propiedad
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Función
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo de uso
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Fuente
                </td>
                <td className="border border-blue-200 p-3">
                  Define el tipo de letra y su apariencia.
                </td>
                <td className="border border-blue-200 p-3">
                  Usar una fuente sencilla y legible.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Tamaño
                </td>
                <td className="border border-blue-200 p-3">
                  Determina el tamaño del texto.
                </td>
                <td className="border border-blue-200 p-3">
                  Destacar el título con un tamaño mayor.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Color de fuente
                </td>
                <td className="border border-blue-200 p-3">
                  Modifica el color del texto.
                </td>
                <td className="border border-blue-200 p-3">
                  Utilizar un color oscuro sobre un fondo claro.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Color de fondo
                </td>
                <td className="border border-blue-200 p-3">
                  Cambia el fondo de un control o una sección.
                </td>
                <td className="border border-blue-200 p-3">
                  Diferenciar visualmente el encabezado.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Bordes
                </td>
                <td className="border border-blue-200 p-3">
                  Permiten delimitar determinados elementos.
                </td>
                <td className="border border-blue-200 p-3">
                  Separar visualmente grupos de información.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Alineación
                </td>
                <td className="border border-blue-200 p-3">
                  Define cómo se posicionan los elementos o su contenido.
                </td>
                <td className="border border-blue-200 p-3">
                  Alinear etiquetas y campos de texto.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Diseño paso a paso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Cómo diseñar un formulario en Access
        </h2>

        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Seleccionar la fuente de datos.</strong>
            <p className="mt-1">
              Identificar la tabla o consulta que proporcionará los datos del
              formulario.
            </p>
          </li>
          <li>
            <strong>Crear o abrir el formulario.</strong>
            <p className="mt-1">
              Utilizar el asistente de formularios o crear el formulario desde
              la vista Diseño.
            </p>
          </li>
          <li>
            <strong>Distribuir los controles.</strong>
            <p className="mt-1">
              Organizar los campos por orden de importancia y agrupar aquellos
              que pertenecen a una misma categoría.
            </p>
          </li>
          <li>
            <strong>Agregar títulos y etiquetas.</strong>
            <p className="mt-1">
              Identificar el propósito del formulario y describir claramente
              cada dato solicitado.
            </p>
          </li>
          <li>
            <strong>Aplicar formato.</strong>
            <p className="mt-1">
              Ajustar tamaños, fuentes, colores, bordes y alineaciones para
              lograr una presentación coherente.
            </p>
          </li>
          <li>
            <strong>Revisar los controles.</strong>
            <p className="mt-1">
              Verificar que los campos estén vinculados correctamente y que
              los controles de selección permitan elegir los valores previstos.
            </p>
          </li>
          <li>
            <strong>Probar el formulario.</strong>
            <p className="mt-1">
              Cambiar a la vista Formulario, cargar registros de prueba y
              comprobar la navegación y el guardado de la información.
            </p>
          </li>
        </ol>
      </section>

      {/* Distribución */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Organización y distribución de controles
        </h2>

        <p className="leading-relaxed mb-4">
          Access ofrece herramientas para alinear, cambiar el tamaño y
          organizar varios controles. Estas funciones son especialmente útiles
          cuando un formulario contiene muchos campos.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Alinear:</strong> permite ubicar varios controles sobre
            una misma línea o borde.
          </li>
          <li>
            <strong>Distribuir:</strong> ayuda a mantener separaciones
            uniformes entre los elementos.
          </li>
          <li>
            <strong>Cambiar tamaño:</strong> permite igualar el ancho o el
            alto de varios controles.
          </li>
          <li>
            <strong>Agrupar visualmente:</strong> facilita distinguir datos
            personales, información administrativa y observaciones.
          </li>
          <li>
            <strong>Orden de tabulación:</strong> establece la secuencia en
            la que el usuario recorre los controles al presionar la tecla Tab.
          </li>
        </ul>

        <div className="rounded-xl border border-blue-200 p-5 mt-6">
          <h3 className="font-bold text-blue-800 mb-2">
            Consejo de diseño
          </h3>
          <p className="leading-relaxed">
            Si un formulario se utiliza para cargar datos repetidamente,
            conviene organizar los campos según el orden habitual de trabajo.
            Un buen orden de tabulación reduce el uso del mouse y agiliza
            las tareas administrativas.
          </p>
        </div>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Errores comunes en el diseño
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Utilizar demasiados colores o estilos de fuente diferentes.</li>
          <li>Colocar etiquetas lejos de los campos que identifican.</li>
          <li>Dejar controles superpuestos o con tamaños desproporcionados.</li>
          <li>Utilizar nombres poco claros para los campos.</li>
          <li>Mostrar información que no resulta necesaria para la tarea.</li>
          <li>No comprobar el orden de tabulación.</li>
          <li>No probar el formulario después de modificar su diseño.</li>
        </ul>

        <p className="leading-relaxed mt-4">
          La revisión final debe considerar tanto la apariencia como el
          funcionamiento. Un formulario puede verse bien y, sin embargo,
          contener controles mal vinculados o una navegación poco práctica.
        </p>
      </section>

      {/* Actividades prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-8">
          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Análisis de un formulario
            </h3>

            <p className="leading-relaxed mb-3">
              Observá un formulario de Microsoft Access existente o un ejemplo
              presentado por el docente.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Identificá el encabezado y la sección de detalle.</li>
              <li>Analizá la distribución de los controles.</li>
              <li>Observá las fuentes, los colores y los tamaños.</li>
              <li>Identificá tres aspectos positivos del diseño.</li>
              <li>Proponé tres mejoras concretas.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Mejorar la presentación
            </h3>

            <p className="leading-relaxed mb-3">
              Creá un formulario basado en una tabla de clientes que contenga
              los campos IDCliente, Apellido, Nombre, Teléfono y Correo.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Organizá los campos en un orden lógico.</li>
              <li>Agregá un título en el encabezado.</li>
              <li>Alineá las etiquetas con sus respectivos controles.</li>
              <li>Aplicá una combinación de colores sencilla.</li>
              <li>Guardá el formulario y compará su aspecto antes y después.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Formulario de inscripción
            </h3>

            <p className="leading-relaxed mb-3">
              Diseñá un formulario para registrar estudiantes de un centro de
              formación profesional.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Creá una sección para datos personales.</li>
              <li>Organizá en otro grupo la información de contacto.</li>
              <li>Incorporá los datos del curso seleccionado.</li>
              <li>Destacá el título y mantené un formato uniforme.</li>
              <li>Probá la carga de al menos tres estudiantes.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Alineación y navegación
            </h3>

            <p className="leading-relaxed mb-3">
              Utilizá un formulario con al menos seis controles y mejorá su
              organización.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Alineá las etiquetas y los campos.</li>
              <li>Igualá el ancho de los controles que lo requieran.</li>
              <li>Distribuí los elementos para mantener espacios uniformes.</li>
              <li>Revisá el orden de tabulación.</li>
              <li>Probá la navegación utilizando la tecla Tab.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Evaluación de usabilidad
            </h3>

            <p className="leading-relaxed mb-3">
              Intercambiá tu formulario con un compañero para que lo utilice
              sin recibir explicaciones previas.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Pedile que cargue un registro completo.</li>
              <li>Observá si comprende las etiquetas y los campos.</li>
              <li>Registrá las dificultades que encuentre.</li>
              <li>Realizá al menos tres mejoras.</li>
              <li>Explicá cómo los cambios facilitan el uso del formulario.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Sistema de inscripción a cursos
        </h2>

        <p className="leading-relaxed mb-4">
          Un centro de formación profesional necesita mejorar el formulario
          que utiliza para registrar a los estudiantes que se inscriben en sus
          cursos. El formulario actual contiene muchos campos desordenados,
          etiquetas poco claras y un diseño que dificulta la carga.
        </p>

        <p className="leading-relaxed mb-6">
          Tu tarea será crear una tabla, diseñar el formulario correspondiente
          y aplicar criterios de organización, formato y facilidad de uso.
        </p>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          1. Crear la tabla Estudiantes
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Campo
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Tipo de dato sugerido
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">IDEstudiante</td>
                <td className="border border-blue-200 p-3">Autonumeración</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Apellido</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Nombre</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">DNI</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Teléfono</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Curso</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">FechaInscripción</td>
                <td className="border border-blue-200 p-3">Fecha/Hora</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          2. Diseñar el formulario
        </h3>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Crear un formulario basado en la tabla Estudiantes.</li>
          <li>Agregar el título “Inscripción a cursos”.</li>
          <li>Agrupar los datos personales en una sección visual.</li>
          <li>Separar la información del curso y de la inscripción.</li>
          <li>Aplicar fuentes, colores y tamaños coherentes.</li>
          <li>Alinear los controles y revisar el orden de tabulación.</li>
          <li>Verificar que todos los campos estén correctamente vinculados.</li>
        </ol>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          3. Probar el formulario
        </h3>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Cargar al menos cinco estudiantes ficticios.</li>
          <li>Comprobar que los registros se guarden correctamente.</li>
          <li>Modificar un dato y verificar el resultado.</li>
          <li>Recorrer los campos utilizando la tecla Tab.</li>
          <li>Pedir a otro compañero que pruebe el formulario.</li>
        </ol>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          4. Presentación del trabajo
        </h3>

        <p className="leading-relaxed mb-4">
          Entregá la base de datos de Access y una captura del formulario
          terminado. Acompañá el trabajo con una breve explicación de las
          decisiones de diseño que tomaste.
        </p>

        <div className="rounded-xl border border-blue-200 p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Criterios de evaluación
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Correcta creación de la tabla y el formulario.</li>
            <li>Organización lógica de los campos.</li>
            <li>Uso adecuado de títulos y etiquetas.</li>
            <li>Coherencia de fuentes, colores y alineaciones.</li>
            <li>Funcionamiento correcto y navegación sencilla.</li>
            <li>Capacidad para justificar las decisiones de diseño.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          El diseño de formularios es una parte importante del desarrollo de
          una base de datos. Organizar los controles, aplicar formatos
          consistentes y facilitar la navegación permite construir interfaces
          más claras, reducir errores y mejorar las tareas administrativas.
          Antes de utilizar un formulario en una situación real, siempre es
          recomendable probarlo y realizar los ajustes necesarios.
        </p>
      </section>
    </div>
  );
}
