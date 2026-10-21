export default function ConceptoFormulariosPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Concepto y utilidad de los formularios
        </h1>

        <p className="max-w-4xl leading-relaxed">
          Los formularios son objetos de una base de datos que permiten
          interactuar con la información mediante una interfaz organizada.
          Facilitan el ingreso, la visualización, la búsqueda y la modificación
          de registros sin necesidad de trabajar directamente sobre las tablas.
        </p>

        <p className="mt-4 max-w-4xl leading-relaxed">
          En Microsoft Access, los formularios pueden vincularse con tablas o
          consultas para mostrar los datos almacenados y permitir que los
          usuarios realicen distintas operaciones. Su diseño permite organizar
          los campos, incorporar controles y presentar la información de
          acuerdo con las necesidades de cada tarea.
        </p>

        <p className="mt-4 max-w-4xl leading-relaxed">
          Por ejemplo, una oficina que administra clientes puede utilizar un
          formulario para registrar nombres, teléfonos, correos electrónicos y
          direcciones. De esta manera, todos los empleados trabajan con una
          estructura común y pueden cargar los datos de forma ordenada.
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
          <li>Definir qué es un formulario en una base de datos.</li>
          <li>
            Reconocer las principales funciones de los formularios en Access.
          </li>
          <li>
            Diferenciar el uso de formularios y tablas.
          </li>
          <li>
            Identificar situaciones administrativas en las que conviene
            utilizar formularios.
          </li>
          <li>
            Reconocer los elementos básicos que puede incluir un formulario.
          </li>
          <li>
            Comprender la relación entre los formularios y los datos almacenados.
          </li>
        </ul>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          ¿Qué es un formulario?
        </h2>

        <p className="mb-4 leading-relaxed">
          Un formulario es una interfaz que presenta los datos de manera
          organizada y permite al usuario interactuar con ellos. Puede incluir
          campos de texto, etiquetas, botones, listas desplegables, casillas
          de verificación y otros controles.
        </p>

        <p className="mb-4 leading-relaxed">
          En una base de datos relacional, los formularios suelen utilizarse
          para trabajar con registros de una tabla o con los resultados de una
          consulta. Cuando el formulario está configurado para permitir
          modificaciones, las operaciones realizadas pueden reflejarse en los
          datos de origen, según su configuración.
        </p>

        <div className="rounded-xl border border-blue-200 p-6">
          <h3 className="mb-4 text-lg font-bold text-blue-900">
            Ejemplo: formulario de clientes
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-5">
              <p className="mb-4 font-semibold text-blue-800">
                Datos del cliente
              </p>

              <div className="space-y-3">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Código
                  </label>
                  <div className="rounded-md border border-blue-200 px-3 py-2 text-blue-900">
                    001
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Nombre y apellido
                  </label>
                  <div className="rounded-md border border-blue-200 px-3 py-2 text-blue-900">
                    María González
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Teléfono
                  </label>
                  <div className="rounded-md border border-blue-200 px-3 py-2 text-blue-900">
                    2945-123456
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Correo electrónico
                  </label>
                  <div className="rounded-md border border-blue-200 px-3 py-2 text-blue-900">
                    maria@ejemplo.com
                  </div>
                </div>
              </div>

              <p className="mt-4 rounded-md bg-blue-700 px-4 py-2 text-center font-semibold text-white">
                Guardar registro
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <h4 className="mb-3 font-semibold text-blue-900">
                ¿Qué permite hacer?
              </h4>

              <ul className="list-disc space-y-3 pl-5 leading-relaxed">
                <li>Registrar un cliente nuevo.</li>
                <li>Consultar los datos de un cliente.</li>
                <li>Modificar información existente.</li>
                <li>Recorrer los registros disponibles.</li>
                <li>Buscar información cuando se incorporan las herramientas
                  correspondientes.</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-blue-900">
            Esta representación es un ejemplo visual con fines didácticos.
            Los campos y el botón no están conectados a una base de datos real.
          </p>
        </div>
      </section>

      {/* Diferencia entre tabla y formulario */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Diferencias entre tablas y formularios
        </h2>

        <p className="mb-5 leading-relaxed">
          Las tablas y los formularios cumplen funciones diferentes, aunque
          están relacionados. Las tablas almacenan los datos, mientras que los
          formularios ofrecen una manera más cómoda de trabajar con ellos.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-blue-200 p-3 text-left">
                  Característica
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Tabla
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Formulario
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                [
                  "Función principal",
                  "Almacenar los datos.",
                  "Facilitar la interacción con los datos.",
                ],
                [
                  "Presentación",
                  "Organiza registros en filas y campos en columnas.",
                  "Distribuye campos mediante un diseño personalizado.",
                ],
                [
                  "Ingreso de datos",
                  "Permite ingresar datos directamente en los registros.",
                  "Ofrece campos y controles para cargar información.",
                ],
                [
                  "Organización visual",
                  "Utiliza una estructura tabular.",
                  "Puede agrupar datos y acciones de manera flexible.",
                ],
                [
                  "Uso habitual",
                  "Administrar la estructura y los registros almacenados.",
                  "Facilitar tareas de carga, consulta y modificación.",
                ],
              ].map(([caracteristica, tabla, formulario]) => (
                <tr key={caracteristica}>
                  <td className="border border-blue-200 p-3 font-semibold">
                    {caracteristica}
                  </td>
                  <td className="border border-blue-200 p-3">{tabla}</td>
                  <td className="border border-blue-200 p-3">{formulario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 rounded-lg border-l-4 border-blue-700 p-5">
          <p className="leading-relaxed text-blue-950">
            <strong>Importante:</strong> un formulario no reemplaza a la tabla
            que almacena los datos. Es una herramienta para trabajar con ellos.
            Además, no todos los formularios permiten modificar registros: eso
            depende de su origen de datos y de sus propiedades.
          </p>
        </div>
      </section>

      {/* Utilidad */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          ¿Para qué se utilizan los formularios?
        </h2>

        <p className="mb-6 leading-relaxed">
          En las organizaciones, los formularios permiten estandarizar
          procedimientos y facilitar el trabajo diario. Su utilidad depende
          de la información que se necesita administrar y de las tareas que
          realizan los usuarios.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Registrar información
            </h3>
            <p className="leading-relaxed">
              Permiten incorporar nuevos clientes, proveedores, productos,
              empleados, turnos u operaciones comerciales.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Consultar registros
            </h3>
            <p className="leading-relaxed">
              Presentan los datos de cada registro en campos claramente
              identificados, facilitando su lectura.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Modificar información
            </h3>
            <p className="leading-relaxed">
              Cuando están habilitados para ello, permiten corregir teléfonos,
              actualizar direcciones o cambiar otros datos registrados.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Facilitar operaciones
            </h3>
            <p className="leading-relaxed">
              Pueden incorporar botones, listas y otros controles para ejecutar
              acciones o seleccionar opciones de manera sencilla.
            </p>
          </article>
        </div>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Elementos básicos de un formulario
        </h2>

        <p className="mb-5 leading-relaxed">
          Un formulario se construye mediante controles que cumplen funciones
          específicas. La selección de cada elemento debe responder a la
          información que se necesita mostrar o ingresar.
        </p>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Etiquetas</h3>
            <p className="leading-relaxed">
              Identifican los campos y explican qué información debe
              introducirse. Por ejemplo: Nombre, Dirección o Fecha de ingreso.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Cuadros de texto</h3>
            <p className="leading-relaxed">
              Permiten mostrar o ingresar valores como nombres, direcciones,
              códigos y números de teléfono.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Listas desplegables
            </h3>
            <p className="leading-relaxed">
              Permiten elegir una opción de un conjunto de valores, por
              ejemplo, una categoría de productos o una localidad.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">Botones</h3>
            <p className="leading-relaxed">
              Pueden utilizarse para ejecutar acciones, como abrir otro
              formulario, iniciar una búsqueda o cerrar una ventana.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Casillas de verificación
            </h3>
            <p className="leading-relaxed">
              Permiten representar valores de tipo verdadero o falso, como
              indicar si un producto está activo o si una tarea fue completada.
            </p>
          </article>
        </div>
      </section>

      {/* Tipos de formularios */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Tipos de formularios según su finalidad
        </h2>

        <p className="mb-5 leading-relaxed">
          Los formularios pueden diseñarse de distintas maneras según la tarea
          que deben facilitar. Algunos ejemplos habituales son:
        </p>

        <div className="space-y-5">
          <article className="rounded-xl p-6">
            <h3 className="mb-3 font-bold text-blue-900">
              Formulario de carga
            </h3>
            <p className="leading-relaxed text-blue-950">
              Se utiliza principalmente para incorporar registros nuevos.
              Por ejemplo, registrar los datos de un proveedor que comienza a
              trabajar con una empresa.
            </p>
          </article>

          <article className="rounded-xl p-6">
            <h3 className="mb-3 font-bold text-blue-900">
              Formulario de consulta
            </h3>
            <p className="leading-relaxed text-blue-950">
              Facilita la visualización de información ya registrada. Puede
              configurarse para impedir modificaciones cuando solo se necesita
              consultar los datos.
            </p>
          </article>

          <article className="rounded-xl p-6">
            <h3 className="mb-3 font-bold text-blue-900">
              Formulario de gestión
            </h3>
            <p className="leading-relaxed text-blue-950">
              Combina diferentes funciones para registrar, consultar y
              modificar información de una entidad, como clientes o productos.
            </p>
          </article>

          <article className="rounded-xl p-6">
            <h3 className="mb-3 font-bold text-blue-900">
              Formulario principal y subformulario
            </h3>
            <p className="leading-relaxed text-blue-950">
              Permite mostrar información relacionada en una misma interfaz.
              Por ejemplo, un formulario de clientes puede incluir un
              subformulario con las ventas realizadas por cada cliente, si la
              base de datos está correctamente relacionada.
            </p>
          </article>
        </div>
      </section>

      {/* Relación con los datos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          ¿Cómo se relaciona un formulario con la base de datos?
        </h2>

        <p className="mb-4 leading-relaxed">
          Para trabajar con registros, un formulario suele tener un origen de
          datos. Este puede ser una tabla o una consulta. Los controles del
          formulario se vinculan con los campos correspondientes para mostrar
          o permitir el ingreso de valores.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-blue-200 p-5 text-center">
            <div className="mb-3 text-3xl">🗃️</div>
            <h3 className="mb-2 font-bold text-blue-900">Tabla</h3>
            <p className="text-sm leading-relaxed">
              Almacena los registros y sus campos.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5 text-center">
            <div className="mb-3 text-3xl">📝</div>
            <h3 className="mb-2 font-bold text-blue-900">Formulario</h3>
            <p className="text-sm leading-relaxed">
              Presenta los datos mediante controles organizados.
            </p>
          </div>

          <div className="rounded-xl border border-blue-200 p-5 text-center">
            <div className="mb-3 text-3xl">👤</div>
            <h3 className="mb-2 font-bold text-blue-900">Usuario</h3>
            <p className="text-sm leading-relaxed">
              Interactúa con la información a través de la interfaz.
            </p>
          </div>
        </div>

        <p className="mt-5 leading-relaxed">
          Por ejemplo, si un formulario está vinculado con la tabla Productos,
          puede mostrar su código, descripción, precio y cantidad disponible.
          Al modificar un campo vinculado y guardar el registro, el cambio
          puede almacenarse en la tabla, siempre que las propiedades y los
          permisos lo permitan.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Recomendaciones para utilizar formularios
        </h2>

        <ul className="list-disc space-y-3 pl-6 leading-relaxed">
          <li>
            Utilizar etiquetas claras y relacionadas con los datos solicitados.
          </li>
          <li>
            Agrupar los campos según su finalidad, como datos personales y
            datos de contacto.
          </li>
          <li>
            Elegir controles apropiados para cada tipo de información.
          </li>
          <li>
            Evitar incluir campos o botones innecesarios.
          </li>
          <li>
            Verificar que el formulario esté vinculado con el origen de datos
            correcto.
          </li>
          <li>
            Probar el ingreso y la modificación de registros antes de utilizar
            el formulario en una situación real.
          </li>
          <li>
            Configurar permisos y restricciones adecuados cuando se trabaja
            con información importante.
          </li>
        </ul>
      </section>

      {/* Actividades prácticas */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividades prácticas
        </h2>

        <p className="mb-6 leading-relaxed">
          Resolvé las siguientes actividades. En cada caso, explicá tus
          decisiones y relacioná las respuestas con situaciones reales de una
          oficina.
        </p>

        <div className="space-y-6">
          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 1: comprender los formularios
            </h3>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Definí con tus palabras qué es un formulario.</li>
              <li>
                Explicá tres tareas que pueden realizarse mediante un
                formulario de Access.
              </li>
              <li>
                Indicá por qué puede ser más sencillo utilizar un formulario
                que trabajar directamente sobre una tabla.
              </li>
              <li>
                Mencioná dos situaciones en las que utilizarías formularios.
              </li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 2: identificar elementos
            </h3>

            <p className="mb-3 leading-relaxed">
              Una empresa necesita crear un formulario para registrar
              proveedores con los siguientes datos: código, razón social,
              CUIT, teléfono, correo electrónico y localidad.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Identificá los campos que debería contener el formulario.</li>
              <li>Proponé una etiqueta adecuada para cada campo.</li>
              <li>
                Indicá qué control utilizarías para seleccionar una localidad
                de una lista.
              </li>
              <li>
                Proponé dos acciones que podrían incorporarse a la interfaz.
              </li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 3: tabla o formulario
            </h3>

            <p className="mb-3 leading-relaxed">
              Indicá si cada situación corresponde principalmente al uso de
              una tabla o de un formulario. Justificá tus elecciones.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Almacenar los registros de todos los clientes.</li>
              <li>
                Mostrar los datos de un cliente en campos claramente
                identificados.
              </li>
              <li>Organizar los campos de una entidad dentro de una interfaz.</li>
              <li>Conservar los datos de los productos registrados.</li>
              <li>
                Facilitar la modificación de los datos de un proveedor.
              </li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 4: elegir el formulario adecuado
            </h3>

            <p className="mb-3 leading-relaxed">
              Leé las siguientes situaciones y proponé el tipo de formulario
              más apropiado.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>
                Un empleado necesita incorporar proveedores nuevos a una base
                de datos.
              </li>
              <li>
                El responsable de una oficina solo necesita consultar
                información y no debe modificarla.
              </li>
              <li>
                Una empresa necesita ver los datos de cada cliente junto con
                sus operaciones registradas.
              </li>
              <li>
                El encargado de un comercio necesita consultar y actualizar
                los datos de los productos.
              </li>
            </ol>

            <p className="mt-3 leading-relaxed">
              Para cada situación, explicá qué información debería mostrarse y
              qué operaciones tendría que permitir el formulario.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 5: diseñar un formulario administrativo
            </h3>

            <p className="mb-3 leading-relaxed">
              Diseñá en papel o mediante una herramienta digital un formulario
              para administrar productos de una librería.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Definí los campos que consideres necesarios.</li>
              <li>Organizá las etiquetas y los controles.</li>
              <li>Proponé botones o acciones para las tareas habituales.</li>
              <li>
                Explicá qué tabla o consulta podría utilizar como origen de
                datos.
              </li>
              <li>
                Justificá tres decisiones que ayuden a facilitar su uso.
              </li>
            </ol>
          </article>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividad integradora: formularios para una oficina
        </h2>

        <p className="mb-4 leading-relaxed">
          Una pequeña empresa necesita mejorar la manera en que registra la
          información de sus clientes. Actualmente, los empleados trabajan
          directamente sobre una tabla y tienen dificultades para identificar
          los campos, encontrar los registros y mantener una forma uniforme de
          cargar los datos.
        </p>

        <p className="mb-5 leading-relaxed">
          Tu tarea será analizar la situación y diseñar una propuesta de
          formulario que facilite el trabajo cotidiano.
        </p>

        <h3 className="mb-3 text-lg font-bold text-blue-900">
          Consignas de trabajo
        </h3>

        <ol className="list-decimal space-y-3 pl-6 leading-relaxed">
          <li>
            Identificá qué información necesita registrar la empresa sobre
            cada cliente.
          </li>
          <li>
            Proponé la estructura de la tabla que almacenará esos datos.
          </li>
          <li>
            Diseñá un formulario con etiquetas y controles adecuados para cada
            campo.
          </li>
          <li>
            Indicá qué acciones debería permitir realizar al usuario.
          </li>
          <li>
            Explicá cómo se vincularía el formulario con la tabla o consulta
            correspondiente.
          </li>
          <li>
            Describí cómo comprobarías que los registros se almacenan y
            modifican correctamente.
          </li>
        </ol>

        <div className="mt-6 rounded-xl border border-blue-200 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            Criterios de evaluación
          </h3>

          <ul className="list-disc space-y-2 pl-6 leading-relaxed">
            <li>Identificación adecuada de los datos necesarios.</li>
            <li>Organización lógica de los campos.</li>
            <li>Selección apropiada de controles.</li>
            <li>Claridad y facilidad de uso del diseño.</li>
            <li>Comprensión de la relación entre el formulario y los datos.</li>
            <li>Explicación de las pruebas necesarias para verificar su funcionamiento.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section className="rounded-xl border border-blue-200 p-6">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Los formularios de Microsoft Access permiten trabajar con los datos
          de una base de datos mediante una interfaz organizada. Pueden
          utilizarse para registrar, consultar y modificar información, siempre
          que su configuración lo permita.
        </p>

        <p className="mt-4 leading-relaxed">
          A diferencia de las tablas, que almacenan los registros, los
          formularios facilitan la interacción con ellos. Un diseño adecuado
          debe tener campos claros, controles apropiados y una estructura
          adaptada a las necesidades de quienes utilizarán el sistema.
        </p>

        <p className="mt-4 leading-relaxed">
          En el próximo tema aprenderás diferentes métodos para crear
          formularios en Microsoft Access y vincularlos con los datos de una
          base de datos.
        </p>
      </section>
    </div>
  );
}