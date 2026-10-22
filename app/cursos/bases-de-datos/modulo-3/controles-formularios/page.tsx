
export default function ControlesFormulariosPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Controles de formularios
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los controles son los elementos que se incorporan a un formulario
          para mostrar información, ingresar datos, seleccionar opciones y
          ejecutar acciones. En Microsoft Access permiten construir interfaces
          que facilitan el trabajo con los registros de una base de datos.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este tema aprenderemos a reconocer los principales controles,
          comprender su utilidad y utilizarlos en formularios destinados a
          tareas administrativas.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de aprendizaje
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Reconocer los principales controles de Microsoft Access.</li>
          <li>Diferenciar controles vinculados, independientes y calculados.</li>
          <li>Incorporar cuadros de texto, etiquetas y listas desplegables.</li>
          <li>Utilizar botones para ejecutar acciones dentro de un formulario.</li>
          <li>Organizar los controles para facilitar la carga y consulta de datos.</li>
        </ul>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué son los controles?
        </h2>

        <p className="leading-relaxed mb-4">
          Un control es un elemento visual de un formulario que permite
          mostrar información, ingresar valores, elegir alternativas o
          realizar una operación. Cada control cumple una función específica
          y contribuye a que el usuario pueda trabajar con la base de datos.
        </p>

        <p className="leading-relaxed mb-4">
          Por ejemplo, en un formulario para registrar estudiantes podemos
          utilizar un cuadro de texto para escribir el apellido, una lista
          desplegable para elegir el curso y un botón para guardar el registro.
        </p>

        <div className="rounded-xl border border-blue-200 p-5 space-y-3">
          <h3 className="font-bold text-blue-900">
            Ejemplo: formulario de inscripción
          </h3>

          <div className="space-y-1">
            <label className="block font-medium">Apellido y nombre</label>
            <input
              type="text"
              placeholder="Ingresar nombre completo"
              disabled
              className="w-full rounded-lg border border-blue-200 p-3"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-medium">Curso</label>
            <select
              disabled
              className="w-full rounded-lg border border-blue-200 p-3"
            >
              <option>Seleccionar curso</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="block font-medium">Fecha de inscripción</label>
            <input
              type="text"
              placeholder="DD/MM/AAAA"
              disabled
              className="w-full rounded-lg border border-blue-200 p-3"
            />
          </div>

          <p className="text-sm text-blue-800">
            Este ejemplo es ilustrativo. En Access, estos elementos se agregan
            desde la vista Diseño del formulario.
          </p>
        </div>
      </section>

      {/* Tipos de controles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Principales tipos de controles
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Cuadro de texto
            </h3>
            <p className="leading-relaxed">
              Permite mostrar o ingresar información, como nombres, apellidos,
              domicilios, fechas, cantidades o importes. Puede estar asociado
              a un campo de una tabla o consulta.
            </p>
            <p className="mt-2">
              <strong>Ejemplo:</strong> ingresar el apellido de un proveedor.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Etiqueta
            </h3>
            <p className="leading-relaxed">
              Presenta un texto descriptivo que identifica un campo o una
              sección. Generalmente no permite modificar datos de la base.
            </p>
            <p className="mt-2">
              <strong>Ejemplo:</strong> mostrar el texto “Fecha de nacimiento”
              junto al campo correspondiente.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Cuadro combinado
            </h3>
            <p className="leading-relaxed">
              Permite seleccionar un valor desde una lista desplegable.
              Puede utilizarse para elegir un curso, una categoría, una
              localidad o un proveedor.
            </p>
            <p className="mt-2">
              <strong>Ejemplo:</strong> seleccionar el estado de una factura:
              pendiente, pagada o vencida.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Cuadro de lista
            </h3>
            <p className="leading-relaxed">
              Muestra varias opciones en una lista visible para que el usuario
              pueda seleccionar una o más, según la configuración del control.
            </p>
            <p className="mt-2">
              <strong>Ejemplo:</strong> consultar las categorías disponibles
              en un sistema de inventario.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Casilla de verificación
            </h3>
            <p className="leading-relaxed">
              Representa una opción que puede estar activada o desactivada.
              Es útil para datos que admiten valores del tipo sí/no.
            </p>
            <p className="mt-2">
              <strong>Ejemplo:</strong> indicar si un pago fue recibido.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Botón de comando
            </h3>
            <p className="leading-relaxed">
              Permite ejecutar una acción, como guardar un registro, abrir otro
              formulario, imprimir un informe o cerrar la ventana.
            </p>
            <p className="mt-2">
              <strong>Ejemplo:</strong> incorporar un botón “Nuevo estudiante”
              para iniciar la carga de una inscripción.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Control de imagen
            </h3>
            <p className="leading-relaxed">
              Permite mostrar imágenes dentro del formulario, por ejemplo,
              el logotipo de una institución o una fotografía vinculada a un
              registro.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Control calculado
            </h3>
            <p className="leading-relaxed">
              Muestra un resultado obtenido mediante una expresión. No necesita
              corresponder directamente a un campo almacenado en una tabla.
            </p>
            <p className="mt-2">
              <strong>Ejemplo:</strong> calcular el importe total multiplicando
              la cantidad por el precio unitario.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos según su origen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Controles vinculados, independientes y calculados
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Tipo
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Características
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Vinculado
                </td>
                <td className="border border-blue-200 p-3">
                  Se asocia a un campo de una tabla o consulta y puede mostrar
                  o modificar su valor.
                </td>
                <td className="border border-blue-200 p-3">
                  Campo Apellido de un estudiante.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Independiente
                </td>
                <td className="border border-blue-200 p-3">
                  No está vinculado directamente a un campo de la tabla.
                  Puede mostrar información o servir para una acción.
                </td>
                <td className="border border-blue-200 p-3">
                  Título del formulario o botón de comando.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Calculado
                </td>
                <td className="border border-blue-200 p-3">
                  Obtiene su valor a partir de una expresión o fórmula.
                </td>
                <td className="border border-blue-200 p-3">
                  Total = Cantidad * Precio unitario.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed mt-4">
          La diferencia principal es el origen de la información. Los controles
          vinculados trabajan con campos de la fuente de datos, mientras que
          los independientes no guardan directamente su valor en esos campos.
          Los controles calculados presentan resultados obtenidos mediante
          expresiones.
        </p>
      </section>

      {/* Propiedades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Propiedades de los controles
        </h2>

        <p className="leading-relaxed mb-4">
          Cada control tiene propiedades que permiten modificar su aspecto y
          comportamiento. En Microsoft Access, estas propiedades se configuran
          desde la Hoja de propiedades, disponible al trabajar en la vista
          Diseño o en la vista Presentación.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Nombre:</strong> identifica al control dentro del formulario.
          </li>
          <li>
            <strong>Origen del control:</strong> indica el campo o expresión
            utilizada para mostrar el dato.
          </li>
          <li>
            <strong>Formato:</strong> define cómo se presentan valores, fechas,
            números y otros datos.
          </li>
          <li>
            <strong>Color y fuente:</strong> permiten adaptar la apariencia.
          </li>
          <li>
            <strong>Habilitado y bloqueado:</strong> determinan si el usuario
            puede interactuar con el control o modificar su contenido.
          </li>
          <li>
            <strong>Regla de validación:</strong> permite establecer condiciones
            para aceptar determinados valores, cuando corresponda.
          </li>
          <li>
            <strong>Texto de ayuda:</strong> puede orientar al usuario sobre
            el uso del control.
          </li>
        </ul>

        <div className="rounded-xl border border-blue-200 p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo práctico
          </h3>
          <p className="leading-relaxed">
            En un formulario de facturas, el control correspondiente al importe
            puede configurarse con formato de moneda. Un cuadro combinado puede
            mostrar los estados disponibles y un botón puede utilizarse para
            abrir el informe de la factura seleccionada.
          </p>
        </div>
      </section>

      {/* Incorporar controles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. ¿Cómo incorporar controles en Access?
        </h2>

        <ol className="list-decimal pl-6 space-y-3">
          <li>Abrir la base de datos y seleccionar el formulario.</li>
          <li>Abrir el formulario en vista Diseño.</li>
          <li>
            Ubicar las herramientas de controles en la cinta de opciones.
          </li>
          <li>
            Seleccionar el control que se desea incorporar, como un cuadro
            de texto, una etiqueta o un botón.
          </li>
          <li>
            Hacer clic en el lugar del formulario donde se desea ubicar el
            elemento o arrastrar para definir su tamaño.
          </li>
          <li>
            Ajustar sus propiedades y, si corresponde, definir su origen del
            control.
          </li>
          <li>
            Guardar los cambios y probar el formulario en vista Formulario.
          </li>
        </ol>

        <p className="leading-relaxed mt-4">
          Es importante comprobar que cada control muestre el dato correcto y
          que las acciones previstas funcionen. La ubicación, el tamaño y el
          orden de navegación también influyen en la facilidad de uso.
        </p>
      </section>

      {/* Recomendaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Recomendaciones para diseñar formularios
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Utilizar etiquetas claras y fáciles de comprender.</li>
          <li>Alinear los controles para que el formulario sea ordenado.</li>
          <li>Usar listas desplegables cuando existan opciones conocidas.</li>
          <li>Evitar controles innecesarios que compliquen la carga de datos.</li>
          <li>Aplicar formatos adecuados para fechas, importes y cantidades.</li>
          <li>Verificar el origen de cada control vinculado.</li>
          <li>Probar el formulario con datos de ejemplo antes de utilizarlo.</li>
          <li>Evitar mostrar información sensible a usuarios que no la necesitan.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-8">
          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificación de controles
            </h3>
            <p className="leading-relaxed mb-3">
              Observá un formulario de una base de datos existente o un ejemplo
              proporcionado por el docente.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Identificá los cuadros de texto y las etiquetas.</li>
              <li>Localizá las listas desplegables y casillas de verificación.</li>
              <li>Identificá los botones de comando.</li>
              <li>Explicá qué función cumple cada control.</li>
              <li>Registrá tus respuestas en una tabla.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Selección del control adecuado
            </h3>
            <p className="leading-relaxed mb-3">
              Para cada situación, indicá qué control utilizarías y justificá
              tu elección.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ingresar el apellido de un cliente.</li>
              <li>Elegir una categoría de productos.</li>
              <li>Indicar si una factura fue pagada.</li>
              <li>Mostrar el título “Registro de proveedores”.</li>
              <li>Calcular el total de una compra.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Formulario de estudiantes
            </h3>
            <p className="leading-relaxed mb-3">
              Creá una tabla llamada Estudiantes con los campos:
              IDEstudiante, Apellido, Nombre, DNI, FechaNacimiento y Activo.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Creá un formulario basado en la tabla.</li>
              <li>Verificá que los campos aparezcan como controles vinculados.</li>
              <li>Utilizá etiquetas descriptivas.</li>
              <li>Comprobá que el campo Activo permita representar sí/no.</li>
              <li>Cargá tres registros de prueba.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Formulario de facturas
            </h3>
            <p className="leading-relaxed mb-3">
              Diseñá un formulario para registrar facturas con los campos
              NúmeroFactura, Fecha, Cliente, Importe y Estado.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Usá cuadros de texto para el número y la fecha.</li>
              <li>Incorporá un cuadro combinado para el estado.</li>
              <li>Configurá el importe con formato de moneda.</li>
              <li>Ordená los controles por secuencia de carga.</li>
              <li>Probá el formulario con diferentes facturas.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Análisis de propiedades
            </h3>
            <p className="leading-relaxed mb-3">
              Elegí tres controles de un formulario y analizá sus propiedades.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Identificá el nombre de cada control.</li>
              <li>Determiná si está vinculado a un campo.</li>
              <li>Revisá sus propiedades de formato.</li>
              <li>Proponé una mejora para facilitar su utilización.</li>
              <li>Explicá cómo comprobarías que funciona correctamente.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Integrador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Formulario para una librería
        </h2>

        <p className="leading-relaxed mb-4">
          Una librería necesita registrar sus productos y facilitar la
          actualización de la información. Deberás crear un formulario en
          Microsoft Access que permita cargar y consultar los productos
          disponibles.
        </p>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          1. Crear la tabla Productos
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Campo</th>
                <th className="border border-blue-200 p-3 text-left">
                  Tipo de dato sugerido
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">IDProducto</td>
                <td className="border border-blue-200 p-3">Autonumeración</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">NombreProducto</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Categoría</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Precio</td>
                <td className="border border-blue-200 p-3">Moneda</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Stock</td>
                <td className="border border-blue-200 p-3">Número</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Disponible</td>
                <td className="border border-blue-200 p-3">Sí/No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          2. Diseñar el formulario
        </h3>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Crear un formulario basado en la tabla Productos.</li>
          <li>Incorporar etiquetas descriptivas para todos los campos.</li>
          <li>Configurar el campo Precio con formato de moneda.</li>
          <li>Utilizar una lista desplegable para la categoría.</li>
          <li>Mostrar Disponible mediante una casilla de verificación.</li>
          <li>Agregar un título y organizar los controles en secciones.</li>
        </ol>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          3. Probar y evaluar
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Cargar al menos cinco productos diferentes.</li>
          <li>Modificar el precio y el stock de un producto.</li>
          <li>Consultar los registros desde el formulario.</li>
          <li>Verificar que los datos se guarden correctamente en la tabla.</li>
          <li>Realizar una captura del formulario terminado.</li>
          <li>Explicar qué controles se utilizaron y por qué.</li>
        </ol>

        <div className="rounded-xl border border-blue-200 p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Entrega esperada
          </h3>
          <p className="leading-relaxed">
            Una base de datos de Access que contenga la tabla Productos, el
            formulario diseñado, al menos cinco registros de prueba y una
            breve explicación de los controles utilizados.
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Los controles son fundamentales para construir formularios claros y
          funcionales. Elegir el control adecuado, configurar sus propiedades
          y comprobar su funcionamiento permite mejorar la calidad de los datos
          y facilitar las tareas administrativas. En las próximas actividades
          profundizaremos en el diseño y formato de los formularios.
        </p>
      </section>
    </div>
  );
}
