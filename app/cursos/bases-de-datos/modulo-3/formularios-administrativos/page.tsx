
export default function FormulariosAdministrativosPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Formularios para tareas administrativas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los formularios administrativos permiten registrar, consultar y
          actualizar información utilizada en las actividades cotidianas de
          una organización. En Microsoft Access, facilitan el trabajo con
          clientes, proveedores, productos, empleados, facturas, pagos,
          estudiantes e inscripciones.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En este tema aprenderemos a identificar las necesidades de una
          oficina, seleccionar los controles adecuados y diseñar formularios
          que permitan realizar tareas administrativas de manera ordenada,
          segura y eficiente.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de aprendizaje
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Reconocer las aplicaciones de los formularios en una oficina.</li>
          <li>Identificar los datos necesarios para cada tarea administrativa.</li>
          <li>Diseñar formularios para registrar y consultar información.</li>
          <li>Utilizar controles adecuados para cada tipo de dato.</li>
          <li>Relacionar los formularios con las tablas de una base de datos.</li>
          <li>Aplicar criterios de claridad, validación y facilidad de uso.</li>
        </ul>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué son los formularios administrativos?
        </h2>

        <p className="leading-relaxed mb-4">
          Son interfaces diseñadas para realizar operaciones relacionadas con
          la gestión de una organización. En lugar de trabajar directamente
          sobre las tablas, los usuarios utilizan formularios que presentan
          los campos necesarios de una manera más comprensible.
        </p>

        <p className="leading-relaxed mb-4">
          Por ejemplo, una persona encargada de la administración de un centro
          de formación puede utilizar un formulario para registrar estudiantes,
          asignarlos a cursos, actualizar sus datos de contacto y consultar
          sus inscripciones.
        </p>

        <div className="rounded-xl border border-blue-200 p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            ¿Qué tareas pueden realizar?
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Registrar nuevos datos.</li>
            <li>Consultar información existente.</li>
            <li>Modificar registros.</li>
            <li>Localizar personas, productos o documentos.</li>
            <li>Seleccionar opciones de listas predefinidas.</li>
            <li>Iniciar otras operaciones mediante botones.</li>
          </ul>
        </div>
      </section>

      {/* Ámbitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Formularios según el área administrativa
        </h2>

        <div className="space-y-6">
          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Administración de clientes
            </h3>

            <p className="leading-relaxed">
              Permiten registrar nombres, documentos, domicilios, teléfonos
              y correos electrónicos. También facilitan la consulta y
              actualización de los datos de contacto.
            </p>

            <p className="mt-2">
              <strong>Ejemplo:</strong> formulario de alta y modificación
              de clientes.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Gestión de proveedores
            </h3>

            <p className="leading-relaxed">
              Se utilizan para administrar los datos de las empresas o
              personas que suministran productos y servicios a una organización.
            </p>

            <p className="mt-2">
              <strong>Ejemplo:</strong> registrar razón social, CUIT,
              teléfono, correo y condiciones comerciales.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Gestión de productos e inventario
            </h3>

            <p className="leading-relaxed">
              Permiten cargar productos, actualizar precios, controlar
              cantidades y consultar la disponibilidad de mercadería.
            </p>

            <p className="mt-2">
              <strong>Ejemplo:</strong> formulario para registrar el ingreso
              de artículos a una librería.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Facturación y pagos
            </h3>

            <p className="leading-relaxed">
              Facilitan el registro de comprobantes, fechas, importes,
              vencimientos y estados de pago.
            </p>

            <p className="mt-2">
              <strong>Ejemplo:</strong> formulario para cargar una factura
              y registrar si fue abonada.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Administración de personal
            </h3>

            <p className="leading-relaxed">
              Permiten gestionar datos laborales, puestos, áreas, fechas de
              ingreso y otra información necesaria para la organización.
            </p>

            <p className="mt-2">
              <strong>Ejemplo:</strong> formulario de legajo de empleados,
              con acceso limitado a los usuarios autorizados.
            </p>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Gestión educativa
            </h3>

            <p className="leading-relaxed">
              Se utilizan para administrar estudiantes, cursos, inscripciones,
              asistencia y otros datos relacionados con las actividades
              de una institución educativa.
            </p>

            <p className="mt-2">
              <strong>Ejemplo:</strong> formulario de inscripción a cursos
              de un centro de formación profesional.
            </p>
          </article>
        </div>
      </section>

      {/* Datos y controles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Selección de los datos y controles
        </h2>

        <p className="leading-relaxed mb-4">
          Antes de crear un formulario, es necesario determinar qué información
          se debe registrar y qué operaciones realizará el usuario. A partir
          de esas necesidades se seleccionan los campos y los controles.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Dato o necesidad
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Control recomendado
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">
                  Nombre o apellido
                </td>
                <td className="border border-blue-200 p-3">
                  Cuadro de texto
                </td>
                <td className="border border-blue-200 p-3">
                  Nombre del cliente
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Fecha de operación
                </td>
                <td className="border border-blue-200 p-3">
                  Cuadro de texto con formato de fecha
                </td>
                <td className="border border-blue-200 p-3">
                  Fecha de factura
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Estado de una operación
                </td>
                <td className="border border-blue-200 p-3">
                  Cuadro combinado
                </td>
                <td className="border border-blue-200 p-3">
                  Pendiente, pagada o vencida
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Opción sí/no
                </td>
                <td className="border border-blue-200 p-3">
                  Casilla de verificación
                </td>
                <td className="border border-blue-200 p-3">
                  Producto disponible
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Búsqueda de registros
                </td>
                <td className="border border-blue-200 p-3">
                  Cuadro combinado u otros controles de búsqueda
                </td>
                <td className="border border-blue-200 p-3">
                  Seleccionar un cliente existente
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">
                  Ejecutar una operación
                </td>
                <td className="border border-blue-200 p-3">
                  Botón de comando
                </td>
                <td className="border border-blue-200 p-3">
                  Abrir un informe
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed mt-4">
          La elección del control depende de la información y de la tarea que
          se necesita realizar. Por ejemplo, una categoría con opciones
          limitadas puede seleccionarse desde una lista, mientras que un
          apellido requiere un campo de texto.
        </p>
      </section>

      {/* Formulario de clientes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Ejemplo: formulario de clientes
        </h2>

        <p className="leading-relaxed mb-4">
          Una empresa necesita registrar y actualizar la información de sus
          clientes. Para resolver esta necesidad, se puede crear una tabla
          Clientes y un formulario vinculado a ella.
        </p>

        <div className="rounded-xl border border-blue-200 p-5 space-y-4">
          <h3 className="text-lg font-bold text-blue-900">
            Registro de clientes
          </h3>

          <div className="space-y-1">
            <label className="block font-medium">Apellido y nombre</label>
            <input
              type="text"
              disabled
              placeholder="Ingresar apellido y nombre"
              className="w-full rounded-lg border border-blue-200 p-3"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-medium">Documento</label>
            <input
              type="text"
              disabled
              placeholder="Ingresar documento"
              className="w-full rounded-lg border border-blue-200 p-3"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-medium">Teléfono</label>
            <input
              type="text"
              disabled
              placeholder="Ingresar teléfono"
              className="w-full rounded-lg border border-blue-200 p-3"
            />
          </div>

          <div className="space-y-1">
            <label className="block font-medium">Correo electrónico</label>
            <input
              type="email"
              disabled
              placeholder="Ingresar correo electrónico"
              className="w-full rounded-lg border border-blue-200 p-3"
            />
          </div>

          <p className="text-sm text-blue-800">
            Modelo ilustrativo de los campos que podría contener el formulario.
            No guarda información ni representa un formulario conectado a Access.
          </p>
        </div>

        <h3 className="text-lg font-bold text-blue-900 mt-6 mb-3">
          Procedimiento
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Crear la tabla Clientes con los campos necesarios.</li>
          <li>Establecer un identificador único para cada cliente.</li>
          <li>Crear un formulario basado en la tabla.</li>
          <li>Organizar los campos y agregar etiquetas descriptivas.</li>
          <li>Aplicar formatos adecuados y guardar el formulario.</li>
          <li>Probar la carga, consulta y modificación de registros.</li>
        </ol>
      </section>

      {/* Formulario relacionado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Formularios relacionados con otras tablas
        </h2>

        <p className="leading-relaxed mb-4">
          En una base de datos administrativa, la información suele estar
          distribuida en varias tablas relacionadas. Un formulario puede
          utilizar datos de otras tablas para evitar que el usuario tenga
          que escribir repetidamente la misma información.
        </p>

        <p className="leading-relaxed mb-4">
          Por ejemplo, una tabla Inscripciones puede contener el identificador
          del estudiante y el identificador del curso. En el formulario,
          ambos pueden seleccionarse mediante cuadros combinados que muestran
          nombres comprensibles en lugar de identificadores numéricos.
        </p>

        <div className="rounded-xl border border-blue-200 p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo de relación
          </h3>

          <ul className="space-y-3">
            <li>
              <strong>Estudiantes:</strong> IDEstudiante, Apellido, Nombre.
            </li>
            <li>
              <strong>Cursos:</strong> IDCurso, NombreCurso, Duración.
            </li>
            <li>
              <strong>Inscripciones:</strong> IDInscripción, IDEstudiante,
              IDCurso, FechaInscripción.
            </li>
          </ul>

          <p className="leading-relaxed mt-4">
            El formulario de inscripción puede permitir elegir un estudiante
            y un curso existentes. Access almacena los identificadores
            correspondientes en la tabla Inscripciones, de acuerdo con la
            configuración del cuadro combinado y las relaciones de la base.
          </p>
        </div>
      </section>

      {/* Validación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Validación y calidad de los datos
        </h2>

        <p className="leading-relaxed mb-4">
          Un formulario administrativo debe ayudar a prevenir errores. Para
          ello, se pueden utilizar propiedades de los campos, reglas de
          validación y listas de opciones. También es importante revisar la
          información antes de guardar operaciones importantes.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Campos obligatorios:</strong> evitan que falte información
            indispensable.
          </li>
          <li>
            <strong>Reglas de validación:</strong> restringen los valores que
            se aceptan, según las necesidades del sistema.
          </li>
          <li>
            <strong>Máscaras de entrada:</strong> ayudan a mantener un formato
            uniforme para ciertos datos.
          </li>
          <li>
            <strong>Listas de opciones:</strong> reducen las diferencias en
            valores que deben pertenecer a un conjunto definido.
          </li>
          <li>
            <strong>Claves y relaciones:</strong> contribuyen a identificar
            registros y mantener la coherencia entre tablas.
          </li>
        </ul>

        <p className="leading-relaxed mt-4">
          La validación debe adaptarse a cada campo. Por ejemplo, un importe
          no debería admitir valores negativos si la operación no los permite.
          En cambio, un teléfono conviene almacenarlo como texto para conservar
          prefijos, espacios o ceros iniciales.
        </p>
      </section>

      {/* Seguridad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Seguridad y buenas prácticas administrativas
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>Solicitar únicamente los datos necesarios para la tarea.</li>
          <li>Proteger la información personal y confidencial.</li>
          <li>Limitar el acceso a datos sensibles según las responsabilidades.</li>
          <li>Verificar los datos antes de modificar o eliminar registros.</li>
          <li>Realizar copias de seguridad de la base de datos.</li>
          <li>Utilizar nombres claros para formularios y controles.</li>
          <li>Probar las operaciones con registros ficticios antes de usarlas.</li>
        </ul>

        <p className="leading-relaxed mt-4">
          Los formularios facilitan el acceso a la información, pero no
          reemplazan las medidas de seguridad de la base de datos y del entorno
          donde se almacena. La organización debe definir permisos, respaldos
          y procedimientos para proteger los datos.
        </p>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-8">
          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Identificación de necesidades administrativas
            </h3>

            <p className="leading-relaxed mb-3">
              Elegí una organización real o ficticia, como una librería,
              un comercio, una escuela o un centro de formación profesional.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Identificá tres tareas administrativas que realiza.</li>
              <li>Determiná qué información necesita registrar.</li>
              <li>Proponé un formulario para cada tarea.</li>
              <li>Enumerá los campos necesarios.</li>
              <li>Explicá qué ventajas aportaría cada formulario.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Formulario de proveedores
            </h3>

            <p className="leading-relaxed mb-3">
              Creá una tabla Proveedores con los campos IDProveedor,
              RazónSocial, CUIT, Teléfono, Correo y Localidad.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Establecé IDProveedor como clave principal.</li>
              <li>Creá un formulario basado en la tabla.</li>
              <li>Ordená los campos de manera lógica.</li>
              <li>Agregá etiquetas y un título descriptivo.</li>
              <li>Cargá cinco proveedores ficticios y verificá los resultados.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Formulario de facturación
            </h3>

            <p className="leading-relaxed mb-3">
              Diseñá un formulario para registrar facturas emitidas a clientes.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Definí los campos NúmeroFactura, Fecha, Cliente, Importe y Estado.</li>
              <li>Elegí los tipos de datos apropiados.</li>
              <li>Configurá el importe con formato de moneda.</li>
              <li>Utilizá opciones para seleccionar el estado de la factura.</li>
              <li>Probá el formulario con tres facturas ficticias.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Formulario de inscripción
            </h3>

            <p className="leading-relaxed mb-3">
              Creá las tablas Estudiantes, Cursos e Inscripciones y establecé
              las relaciones necesarias.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Definí una clave principal para cada tabla.</li>
              <li>Relacioná Inscripciones con Estudiantes y Cursos.</li>
              <li>Creá un formulario para cargar inscripciones.</li>
              <li>Utilizá cuadros combinados para seleccionar estudiantes y cursos.</li>
              <li>Registrá al menos cinco inscripciones de prueba.</li>
            </ol>
          </article>

          <article>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Evaluación de un formulario administrativo
            </h3>

            <p className="leading-relaxed mb-3">
              Revisá uno de los formularios que creaste y evaluá su calidad.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Comprobá que los campos sean claros y necesarios.</li>
              <li>Verificá el formato y la organización de los controles.</li>
              <li>Probá la carga y modificación de registros.</li>
              <li>Identificá posibles errores de ingreso de datos.</li>
              <li>Proponé y aplicá tres mejoras.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Administración de una librería
        </h2>

        <p className="leading-relaxed mb-4">
          Una librería necesita una base de datos que permita administrar sus
          productos, proveedores y compras. Actualmente registra parte de la
          información en planillas separadas, lo que provoca duplicación de
          datos y dificultades para localizar registros.
        </p>

        <p className="leading-relaxed mb-6">
          Deberás diseñar una solución en Microsoft Access que incluya las
          tablas necesarias y formularios para realizar las operaciones
          administrativas principales.
        </p>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          1. Diseñar las tablas
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Tabla
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Campos principales
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Proveedores
                </td>
                <td className="border border-blue-200 p-3">
                  IDProveedor, RazónSocial, CUIT, Teléfono, Correo
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Productos
                </td>
                <td className="border border-blue-200 p-3">
                  IDProducto, Nombre, Categoría, Precio, Stock, IDProveedor
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Compras
                </td>
                <td className="border border-blue-200 p-3">
                  IDCompra, Fecha, IDProveedor, NúmeroComprobante
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  DetalleCompras
                </td>
                <td className="border border-blue-200 p-3">
                  IDDetalle, IDCompra, IDProducto, Cantidad, PrecioUnitario
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed mb-6">
          Establecé las claves principales y las relaciones entre las tablas.
          Aplicá integridad referencial cuando corresponda y verificá que los
          tipos de datos sean adecuados.
        </p>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          2. Crear los formularios
        </h3>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Formulario de alta y modificación de proveedores.</li>
          <li>Formulario para registrar y consultar productos.</li>
          <li>Formulario para registrar compras.</li>
          <li>Formulario para cargar los detalles de cada compra.</li>
          <li>Cuadros combinados para seleccionar proveedores y productos.</li>
          <li>Controles con formatos adecuados para fechas, precios y cantidades.</li>
        </ol>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          3. Cargar y verificar información
        </h3>

        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>Cargá al menos cinco proveedores.</li>
          <li>Registrá diez productos de distintas categorías.</li>
          <li>Ingresá tres compras con sus respectivos detalles.</li>
          <li>Comprobá que los formularios guarden correctamente los datos.</li>
          <li>Verificá que las relaciones mantengan la coherencia de la información.</li>
          <li>Realizá una copia de seguridad de la base de datos.</li>
        </ol>

        <h3 className="text-lg font-bold text-blue-900 mb-3">
          4. Presentación del trabajo
        </h3>

        <p className="leading-relaxed mb-4">
          Entregá el archivo de Access, capturas de los formularios y una breve
          explicación de cómo cada formulario resuelve una necesidad
          administrativa de la librería.
        </p>

        <div className="rounded-xl border border-blue-200 p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Criterios de evaluación
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Correcta estructura y relación de las tablas.</li>
            <li>Selección apropiada de los campos y controles.</li>
            <li>Funcionamiento de los formularios.</li>
            <li>Organización y claridad de la interfaz.</li>
            <li>Coherencia y calidad de los datos registrados.</li>
            <li>Capacidad para explicar las decisiones de diseño.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Los formularios administrativos permiten transformar una base de
          datos en una herramienta práctica para el trabajo cotidiano. Su
          diseño debe responder a las necesidades reales de la organización,
          facilitar la carga y consulta de información y ayudar a mantener
          datos coherentes. Una buena solución combina tablas relacionadas,
          controles apropiados, validaciones y una interfaz clara.
        </p>
      </section>
    </div>
  );
}
