
export default function ValidacionNavegacionPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Validación y navegación de registros
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La validación de datos permite controlar que la información ingresada
          en una base de datos cumpla determinadas condiciones. La navegación
          de registros, por su parte, facilita desplazarse entre los datos,
          localizar información y realizar modificaciones desde los formularios
          de Microsoft Access.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este tema aprenderemos a establecer reglas para evitar errores de
          carga, configurar campos obligatorios, utilizar controles adecuados
          y navegar entre los registros de una aplicación administrativa.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de aprendizaje
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Comprender la importancia de validar los datos ingresados.</li>
          <li>Identificar errores frecuentes en la carga de información.</li>
          <li>Configurar campos obligatorios y reglas de validación.</li>
          <li>Utilizar máscaras de entrada y listas de opciones cuando corresponda.</li>
          <li>Navegar entre registros mediante formularios de Access.</li>
          <li>Buscar, localizar, modificar y verificar registros.</li>
        </ul>
      </section>

      {/* Concepto de validación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué es la validación de datos?
        </h2>

        <p className="leading-relaxed mb-4">
          La validación es el conjunto de controles que permiten determinar
          si un dato cumple las condiciones establecidas antes de aceptarlo.
          Su objetivo es reducir errores, evitar información incompleta y
          mantener la coherencia de los registros.
        </p>

        <p className="leading-relaxed mb-4">
          Por ejemplo, si una factura debe tener un importe mayor que cero,
          una regla de validación puede impedir que se registre un importe
          negativo. De manera similar, se puede exigir que un cliente tenga
          apellido y nombre antes de guardar su información.
        </p>

        <div className="rounded-xl border border-blue-200 p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplos de validación
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>El precio de un producto no debe ser negativo.</li>
            <li>La cantidad de artículos debe ser mayor que cero.</li>
            <li>El apellido de un estudiante debe estar informado.</li>
            <li>La fecha de una inscripción no debe ser posterior a la fecha actual, si esa es la regla del sistema.</li>
            <li>El estado de una factura debe elegirse entre las opciones permitidas.</li>
          </ul>
        </div>
      </section>

      {/* Tipos de errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Errores frecuentes en la carga de datos
        </h2>

        <div className="space-y-5">
          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Datos incompletos
            </h3>
            <p className="leading-relaxed">
              Se producen cuando falta información necesaria para identificar
              un registro o realizar una operación. Por ejemplo, registrar
              una factura sin indicar el número de comprobante.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Datos fuera de rango
            </h3>
            <p className="leading-relaxed">
              Ocurren cuando un valor no cumple los límites establecidos.
              Por ejemplo, ingresar una cantidad de productos menor que cero
              en una operación de compra.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Formatos incorrectos
            </h3>
            <p className="leading-relaxed">
              Aparecen cuando la información no respeta el formato esperado.
              Por ejemplo, ingresar una fecha en un campo que no admite ese
              valor o escribir letras en un campo numérico.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Valores no permitidos
            </h3>
            <p className="leading-relaxed">
              Se producen cuando se selecciona una opción que no corresponde
              con las definidas para el sistema. Una lista desplegable puede
              reducir este tipo de error.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Registros duplicados
            </h3>
            <p className="leading-relaxed">
              Suceden cuando se registra más de una vez una misma entidad
              sin que corresponda. Las claves principales y los índices
              únicos ayudan a prevenir duplicaciones en los campos que deben
              identificar registros de manera exclusiva.
            </p>
          </article>
        </div>
      </section>

      {/* Reglas y propiedades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Herramientas de validación en Access
        </h2>

        <div className="space-y-6">
          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Campo requerido
            </h3>

            <p className="leading-relaxed">
              La propiedad Requerido de un campo permite establecer si debe
              contener un valor. Es útil para información indispensable, como
              el nombre de un producto o la fecha de una operación.
            </p>

            <p className="mt-2">
              <strong>Ejemplo:</strong> el campo NombreProducto debe ser
              obligatorio para registrar un producto.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Regla de validación
            </h3>

            <p className="leading-relaxed">
              Permite definir una condición que debe cumplir un valor. Puede
              configurarse en un campo o en una tabla, según el alcance de
              la regla.
            </p>

            <div className="rounded-lg border border-blue-200 p-4 mt-3">
              <p className="font-semibold text-blue-900 mb-2">
                Ejemplos de expresiones
              </p>

              <ul className="space-y-3">
                <li>
                  <strong>Precio mayor o igual a cero:</strong>
                  <code className="block mt-1 bg-blue-50 rounded p-2">
                    &gt;=0
                  </code>
                </li>
                <li>
                  <strong>Cantidad mayor que cero:</strong>
                  <code className="block mt-1 bg-blue-50 rounded p-2">
                    &gt;0
                  </code>
                </li>
                <li>
                  <strong>Importe entre 0 y 100000:</strong>
                  <code className="block mt-1 bg-blue-50 rounded p-2">
                    Between 0 And 100000
                  </code>
                </li>
              </ul>

              <p className="text-sm text-blue-800 mt-3">
                Las expresiones deben adaptarse al campo y a las reglas reales
                de la organización. Los ejemplos utilizan la sintaxis habitual
                de Access en inglés; la configuración regional puede afectar
                algunos separadores y expresiones.
              </p>
            </div>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Texto de validación
            </h3>

            <p className="leading-relaxed">
              La propiedad Texto de validación permite mostrar un mensaje
              cuando el usuario intenta ingresar un valor que no cumple la
              regla establecida.
            </p>

            <p className="mt-2">
              <strong>Ejemplo:</strong> “El precio debe ser igual o mayor que
              cero”.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Máscara de entrada
            </h3>

            <p className="leading-relaxed">
              Ayuda a introducir ciertos datos siguiendo una estructura
              determinada. Puede ser útil para teléfonos, códigos o documentos,
              siempre que el formato elegido se adapte a los datos reales.
            </p>

            <p className="mt-2">
              <strong>Importante:</strong> una máscara organiza la entrada,
              pero no garantiza que el dato sea verdadero. Un número de
              documento con el formato correcto podría no corresponder a una
              persona real.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Listas desplegables
            </h3>

            <p className="leading-relaxed">
              Los cuadros combinados permiten seleccionar valores conocidos,
              como el estado de una factura o la categoría de un producto.
              Esto reduce las diferencias entre valores equivalentes escritos
              de distintas maneras.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Clave principal e índices únicos
            </h3>

            <p className="leading-relaxed">
              La clave principal identifica de forma exclusiva cada registro.
              Los índices únicos también pueden impedir que se repitan valores
              en campos que deben ser exclusivos, como un código de producto.
            </p>
          </article>
        </div>
      </section>

      {/* Validación paso a paso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Cómo configurar una validación
        </h2>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Abrir la base de datos y seleccionar la tabla que contiene el campo.
          </li>
          <li>
            Abrir la tabla en Vista Diseño.
          </li>
          <li>
            Seleccionar el campo que necesita una condición de validación.
          </li>
          <li>
            Configurar la propiedad Requerido si el campo debe contener un valor.
          </li>
          <li>
            Escribir una expresión en la propiedad Regla de validación cuando
            sea necesario.
          </li>
          <li>
            Ingresar un mensaje claro en Texto de validación.
          </li>
          <li>
            Guardar los cambios y probar valores correctos e incorrectos.
          </li>
        </ol>

        <p className="leading-relaxed mt-4">
          Las reglas también pueden configurarse en formularios, pero las
          restricciones importantes para la integridad de los datos conviene
          establecerlas en las tablas siempre que sea posible. Así se aplican
          independientemente del formulario utilizado para cargar la información.
        </p>
      </section>

      {/* Navegación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Navegación de registros
        </h2>

        <p className="leading-relaxed mb-4">
          La navegación permite desplazarse entre los registros de una tabla
          o formulario. Access ofrece una barra de navegación que suele
          ubicarse en la parte inferior del formulario cuando está habilitada.
        </p>

        <div className="rounded-xl border border-blue-200 p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Acciones de navegación
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Primer registro:</strong> muestra el primer registro
              disponible según el orden actual.
            </li>
            <li>
              <strong>Registro anterior:</strong> permite retroceder un registro.
            </li>
            <li>
              <strong>Registro siguiente:</strong> avanza al registro siguiente.
            </li>
            <li>
              <strong>Último registro:</strong> muestra el último registro
              disponible.
            </li>
            <li>
              <strong>Nuevo registro:</strong> permite iniciar la carga de
              otro registro.
            </li>
            <li>
              <strong>Indicador de registro:</strong> muestra la posición
              actual y permite escribir un número de registro para desplazarse.
            </li>
          </ul>
        </div>

        <p className="leading-relaxed mt-4">
          La navegación depende de los registros incluidos en el origen del
          formulario y de los filtros u ordenamientos aplicados. Si un
          formulario muestra solo una parte de los datos, la navegación se
          realiza dentro de ese conjunto.
        </p>
      </section>

      {/* Buscar y localizar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Búsqueda y localización de registros
        </h2>

        <p className="leading-relaxed mb-4">
          En bases de datos con muchos registros, avanzar uno por uno puede
          resultar poco práctico. Por eso, Access permite utilizar herramientas
          de búsqueda, filtros y controles que facilitan localizar la
          información necesaria.
        </p>

        <div className="space-y-5">
          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Buscar
            </h3>

            <p className="leading-relaxed">
              La herramienta Buscar permite localizar un texto o valor dentro
              de los datos disponibles. Puede utilizarse para encontrar un
              apellido, un código o una descripción.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Filtros
            </h3>

            <p className="leading-relaxed">
              Los filtros muestran únicamente los registros que cumplen una
              condición. Por ejemplo, pueden mostrar los productos de una
              categoría o las facturas que se encuentran pendientes.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Cuadros combinados de búsqueda
            </h3>

            <p className="leading-relaxed">
              Un cuadro combinado puede utilizarse para seleccionar un
              registro por su nombre o código. Según su configuración, el
              formulario puede mostrar el registro seleccionado o utilizar
              el valor para filtrar los datos.
            </p>
          </article>
        </div>
      </section>

      {/* Modificar registros */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Modificación y eliminación de registros
        </h2>

        <p className="leading-relaxed mb-4">
          Los formularios pueden permitir modificar o eliminar registros,
          dependiendo de sus propiedades y de los permisos establecidos.
          Estas operaciones deben realizarse con cuidado para evitar la
          pérdida de información.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            Localizar primero el registro que se desea modificar.
          </li>
          <li>
            Verificar que se trata del registro correcto.
          </li>
          <li>
            Actualizar únicamente los campos necesarios.
          </li>
          <li>
            Comprobar que los cambios se hayan guardado.
          </li>
          <li>
            Antes de eliminar, confirmar que la operación sea necesaria.
          </li>
          <li>
            Considerar las relaciones con otras tablas y la integridad
            referencial antes de borrar un registro.
          </li>
        </ul>

        <div className="rounded-xl border border-blue-200 p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Buena práctica
          </h3>

          <p className="leading-relaxed">
            En sistemas administrativos reales, no todos los usuarios
            deberían tener permiso para modificar o eliminar cualquier dato.
            Conviene definir responsabilidades y contar con copias de
            seguridad antes de realizar cambios importantes.
          </p>
        </div>
      </section>

      {/* Ejemplo práctico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Ejemplo práctico: control de productos
        </h2>

        <p className="leading-relaxed mb-4">
          Una librería necesita registrar productos y evitar que se ingresen
          precios negativos o cantidades de stock inferiores a cero.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Campo
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Tipo de dato
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Validación sugerida
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">IDProducto</td>
                <td className="border border-blue-200 p-3">Autonumeración</td>
                <td className="border border-blue-200 p-3">
                  Clave principal
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">NombreProducto</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
                <td className="border border-blue-200 p-3">
                  Requerido
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Precio</td>
                <td className="border border-blue-200 p-3">Moneda</td>
                <td className="border border-blue-200 p-3">
                  Regla: &gt;=0
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Stock</td>
                <td className="border border-blue-200 p-3">Número</td>
                <td className="border border-blue-200 p-3">
                  Regla: &gt;=0
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Categoría</td>
                <td className="border border-blue-200 p-3">Texto corto</td>
                <td className="border border-blue-200 p-3">
                  Selección desde opciones válidas
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">
          Prueba de funcionamiento
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Intentá guardar un producto con nombre y precio válidos.</li>
          <li>Probá ingresar un precio negativo.</li>
          <li>Probá ingresar un valor negativo en Stock.</li>
          <li>Intentá dejar vacío el nombre del producto.</li>
          <li>Verificá los mensajes y corregí los datos incorrectos.</li>
          <li>Utilizá la navegación para recorrer los productos cargados.</li>
        </ol>
      </section>

      {/* Actividades prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-8">
          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificar errores
            </h3>

            <p className="leading-relaxed mb-3">
              Analizá los siguientes datos registrados en una base de datos
              de productos e identificá qué problemas deberían corregirse.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-blue-200">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-200 p-3 text-left">Producto</th>
                    <th className="border border-blue-200 p-3 text-left">Precio</th>
                    <th className="border border-blue-200 p-3 text-left">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-200 p-3">Cuaderno</td>
                    <td className="border border-blue-200 p-3">2500</td>
                    <td className="border border-blue-200 p-3">20</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-3">Lápiz</td>
                    <td className="border border-blue-200 p-3">-500</td>
                    <td className="border border-blue-200 p-3">15</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-3">Carpeta</td>
                    <td className="border border-blue-200 p-3">1800</td>
                    <td className="border border-blue-200 p-3">-3</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 p-3">(Vacío)</td>
                    <td className="border border-blue-200 p-3">900</td>
                    <td className="border border-blue-200 p-3">10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Identificá todos los valores incorrectos o incompletos.</li>
              <li>Proponé una regla de validación para Precio.</li>
              <li>Proponé una regla de validación para Stock.</li>
              <li>Indicá qué campo debería ser obligatorio.</li>
              <li>Explicá cómo comprobarías las reglas en Access.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Configurar reglas de validación
            </h3>

            <p className="leading-relaxed mb-3">
              Creá una tabla Productos con los campos IDProducto,
              NombreProducto, Precio y Stock.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Definí IDProducto como clave principal.</li>
              <li>Configurá NombreProducto como campo requerido.</li>
              <li>Establecé una regla para que Precio sea mayor o igual que cero.</li>
              <li>Establecé una regla para que Stock sea mayor o igual que cero.</li>
              <li>Escribí mensajes de validación claros.</li>
              <li>Probá valores válidos e inválidos.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Navegación de registros
            </h3>

            <p className="leading-relaxed mb-3">
              Creá un formulario basado en una tabla con al menos diez
              productos diferentes.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Abrí el formulario en vista Formulario.</li>
              <li>Utilizá el control de navegación para ir al primer registro.</li>
              <li>Avanzá y retrocedé entre distintos registros.</li>
              <li>Accedé al último registro y luego al nuevo registro.</li>
              <li>Registrá qué información muestra el indicador de posición.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Búsqueda y modificación
            </h3>

            <p className="leading-relaxed mb-3">
              Utilizá una tabla de clientes con varios registros ficticios.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Buscá un cliente por apellido.</li>
              <li>Localizá otro registro mediante un código o documento.</li>
              <li>Aplicá un filtro para mostrar solo algunos registros.</li>
              <li>Modificá un dato de un cliente de prueba.</li>
              <li>Verificá que el cambio se haya guardado correctamente.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Prueba de calidad
            </h3>

            <p className="leading-relaxed mb-3">
              Revisá una tabla y su formulario para comprobar que los datos
              se puedan registrar y consultar sin errores.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Identificá tres campos que necesiten validación.</li>
              <li>Definí reglas adecuadas para esos campos.</li>
              <li>Probá la navegación entre registros.</li>
              <li>Localizá un registro utilizando la búsqueda.</li>
              <li>Documentá los errores encontrados y las correcciones realizadas.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Control de inscripciones a cursos
        </h2>

        <p className="leading-relaxed mb-4">
          Un centro de formación profesional necesita administrar las
          inscripciones de sus estudiantes. La base de datos actual presenta
          nombres incompletos, registros duplicados, fechas incorrectas y
          dificultades para localizar inscripciones.
        </p>

        <p className="leading-relaxed mb-6">
          Deberás diseñar una solución en Microsoft Access que incluya
          validaciones, formularios y herramientas de navegación para mejorar
          la calidad de los datos.
        </p>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          1. Crear las tablas
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Tabla</th>
                <th className="border border-blue-200 p-3 text-left">
                  Campos principales
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Estudiantes
                </td>
                <td className="border border-blue-200 p-3">
                  IDEstudiante, Apellido, Nombre, DNI, Teléfono
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Cursos
                </td>
                <td className="border border-blue-200 p-3">
                  IDCurso, NombreCurso, Duración
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Inscripciones
                </td>
                <td className="border border-blue-200 p-3">
                  IDInscripción, IDEstudiante, IDCurso, FechaInscripción, Estado
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          2. Establecer validaciones
        </h3>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Configurar las claves principales.</li>
          <li>Establecer como obligatorios los campos indispensables.</li>
          <li>Evitar la duplicación de identificadores.</li>
          <li>Crear reglas para impedir duraciones o cantidades no válidas.</li>
          <li>Utilizar cuadros combinados para seleccionar cursos y estudiantes.</li>
          <li>Definir opciones permitidas para el estado de una inscripción.</li>
        </ol>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          3. Crear y probar el formulario
        </h3>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Diseñar un formulario para registrar inscripciones.</li>
          <li>Cargar al menos cinco inscripciones ficticias.</li>
          <li>Intentar guardar un registro con un campo obligatorio vacío.</li>
          <li>Probar valores que incumplan las reglas establecidas.</li>
          <li>Navegar por los registros cargados.</li>
          <li>Buscar una inscripción y modificar un dato de prueba.</li>
          <li>Comprobar que los datos se mantengan coherentes con las relaciones.</li>
        </ol>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          4. Informe de resultados
        </h3>

        <p className="leading-relaxed mb-4">
          Elaborá un breve documento que incluya las reglas configuradas,
          los errores que pudiste prevenir, las herramientas de navegación
          utilizadas y las mejoras que aporta el formulario al trabajo
          administrativo.
        </p>

        <div className="rounded-xl border border-blue-200 p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Criterios de evaluación
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Correcta estructura de las tablas y relaciones.</li>
            <li>Configuración adecuada de las reglas de validación.</li>
            <li>Funcionamiento de los mensajes de error.</li>
            <li>Uso correcto de la navegación y la búsqueda.</li>
            <li>Capacidad para localizar y modificar registros.</li>
            <li>Calidad de las pruebas y de la documentación final.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          La validación contribuye a mantener datos completos, coherentes y
          adecuados para cada operación. La navegación permite recorrer,
          buscar y actualizar registros de manera eficiente. Ambas funciones
          son fundamentales para construir formularios administrativos
          confiables y facilitar el trabajo cotidiano con Microsoft Access.
        </p>
      </section>
    </div>
  );
}
