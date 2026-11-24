
export default function MacrosPage() {
  return (
    <div className="space-y-14">
      {/* INTRODUCCIÓN */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción a las macros en Access
        </h1>

        <p className="text-lg leading-relaxed">
          En Microsoft Access podemos automatizar diferentes tareas
          de una base de datos mediante herramientas que permiten
          ejecutar acciones de forma automática. Una de estas
          herramientas son las <strong>macros</strong>.
        </p>

        <p className="mt-4 leading-relaxed">
          Las macros permiten realizar operaciones como abrir
          formularios, mostrar mensajes, ejecutar consultas,
          aplicar filtros, guardar registros y controlar la
          navegación entre las distintas partes de una aplicación.
        </p>

        <p className="mt-4 leading-relaxed">
          A diferencia de la programación tradicional con VBA,
          las macros de Access se construyen principalmente
          seleccionando acciones y configurando sus parámetros
          mediante una interfaz visual.
        </p>

        <div className=" border-l-4 border-blue-700 p-5 rounded-lg mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Aplicación en nuestro proyecto hotelero
          </h3>
          <p>
            En el sistema de gestión de reservas utilizaremos macros
            para automatizar botones y eventos de los formularios.
            Por ejemplo, podremos abrir el formulario de huéspedes,
            mostrar mensajes de confirmación, ejecutar consultas
            y facilitar la navegación entre reservas, habitaciones
            y pagos.
          </p>
        </div>
      </section>

      {/* CONCEPTO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué es una macro?
        </h2>

        <p className="leading-relaxed">
          Una macro es un conjunto organizado de acciones que
          Microsoft Access ejecuta siguiendo una secuencia
          determinada. Cada acción realiza una tarea específica
          dentro de la base de datos.
        </p>

        <p className="mt-4 leading-relaxed">
          Por ejemplo, podemos crear una macro que, al presionar
          un botón:
        </p>

        <ol className="list-decimal pl-6 mt-4 space-y-2">
          <li>Muestre un mensaje al usuario.</li>
          <li>Abra el formulario de reservas.</li>
          <li>Posicione el formulario en un registro nuevo.</li>
        </ol>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo de una secuencia de acciones
        </h3>

        <div className="border border-blue-200 rounded-xl p-5">
          <div className="flex flex-col items-center gap-2">
            <div className="5 text-blue-900 rounded-lg p-4 w-full text-center font-semibold">
              El usuario presiona el botón "Nueva reserva"
            </div>
            <div className="text-blue-700 text-2xl">↓</div>
            <div className=" border border-blue-200 rounded-lg p-4 w-full text-center">
              Acción 1: Mostrar mensaje
            </div>
            <div className="text-blue-700 text-2xl">↓</div>
            <div className=" border border-blue-200 rounded-lg p-4 w-full text-center">
              Acción 2: Abrir formulario de reservas
            </div>
            <div className="text-blue-700 text-2xl">↓</div>
            <div className=" border border-blue-200 rounded-lg p-4 w-full text-center">
              Acción 3: Ir a un registro nuevo
            </div>
            <div className="text-blue-700 text-2xl">↓</div>
            <div className="bg-green-100 text-green-900 rounded-lg p-4 w-full text-center font-semibold">
              Formulario listo para cargar una reserva
            </div>
          </div>
        </div>
      </section>

      {/* MACROS Y VBA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Diferencias entre macros y VBA
        </h2>

        <p className="leading-relaxed">
          Tanto las macros como VBA permiten automatizar tareas
          en Access, pero utilizan métodos diferentes.
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="0">
                <th className="border border-blue-200 p-3 text-left">
                  Característica
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Macros
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  VBA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Creación
                </td>
                <td className="border border-blue-200 p-3">
                  Interfaz visual.
                </td>
                <td className="border border-blue-200 p-3">
                  Escritura de código.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Complejidad
                </td>
                <td className="border border-blue-200 p-3">
                  Adecuadas para automatizaciones habituales.
                </td>
                <td className="border border-blue-200 p-3">
                  Permite desarrollar operaciones más complejas.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Personalización
                </td>
                <td className="border border-blue-200 p-3">
                  Depende de las acciones disponibles.
                </td>
                <td className="border border-blue-200 p-3">
                  Mayor flexibilidad.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Ejemplo
                </td>
                <td className="border border-blue-200 p-3">
                  Abrir un formulario.
                </td>
                <td className="border border-blue-200 p-3">
                  Calcular importes y validar condiciones.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            ¿Cuál debemos utilizar?
          </h3>
          <p>
            Para tareas sencillas y habituales, una macro puede
            ser suficiente. Cuando necesitamos cálculos específicos,
            recorrer registros, aplicar algoritmos o controlar
            procesos complejos, VBA ofrece mayores posibilidades.
            Ambas herramientas pueden utilizarse dentro de una
            misma aplicación.
          </p>
        </div>
      </section>

      {/* CREAR MACROS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Crear una macro en Microsoft Access
        </h2>

        <p className="leading-relaxed">
          Access incluye un diseñador de macros que permite
          seleccionar acciones y configurar sus propiedades
          sin escribir instrucciones de programación.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Pasos para crear una macro
        </h3>

        <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
          <li>
            Abrir la base de datos del sistema de gestión hotelera.
          </li>
          <li>
            Ingresar en la pestaña <strong>Crear</strong> de la cinta
            de opciones.
          </li>
          <li>
            Seleccionar la opción <strong>Macro</strong>.
          </li>
          <li>
            Se abrirá el diseñador de macros.
          </li>
          <li>
            Seleccionar una acción de la lista disponible.
          </li>
          <li>
            Configurar los argumentos o propiedades de esa acción.
          </li>
          <li>
            Agregar otras acciones si es necesario.
          </li>
          <li>
            Guardar la macro con un nombre descriptivo.
          </li>
        </ol>

      
        <p className="text-sm text-blue-800 mt-2">
          Referencia visual del diseñador de macros de Microsoft Access.
          La apariencia puede variar según la versión del programa.
        </p>

        <div className="border-l-4 border-amber-500 p-5 rounded-lg mt-6">
          <strong className="text-amber-900">
            Importante
          </strong>
          <p className="mt-2">
            Las macros creadas mediante el diseñador se pueden
            guardar como objetos independientes de la base de datos
            o utilizar como macros incrustadas en eventos de
            formularios e informes.
          </p>
        </div>
      </section>

      {/* ACCIONES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Acciones principales de las macros
        </h2>

        <p className="leading-relaxed">
          Las acciones son las instrucciones que componen una macro.
          Cada acción tiene un propósito y puede requerir argumentos
          para determinar cómo debe ejecutarse.
        </p>

        <div className="space-y-5 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              A. MsgBox: mostrar mensajes
            </h3>
            <p>
              Permite mostrar un cuadro de mensaje al usuario.
              Se utiliza para informar resultados, advertencias
              o confirmaciones.
            </p>
            <p className="mt-3 font-semibold">Ejemplo hotelero:</p>
            <p>
              Mostrar un mensaje cuando se abre el formulario
              de reservas.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-3 overflow-x-auto">
{`MsgBox
Mensaje: "Bienvenido al sistema de reservas"
Tipo: Información
Título: "Sistema hotelero"`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              B. OpenForm: abrir formularios
            </h3>
            <p>
              Permite abrir un formulario de la base de datos.
              Podemos indicar su nombre, vista y modo de apertura.
            </p>
            <p className="mt-3 font-semibold">Ejemplo hotelero:</p>
            <p>
              Abrir el formulario de huéspedes desde el menú principal.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-3 overflow-x-auto">
{`OpenForm
Nombre del formulario: frmHuespedes
Vista: Formulario
Modo de datos: Editar`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              C. OpenReport: abrir informes
            </h3>
            <p>
              Permite abrir un informe para visualizar o imprimir
              información de la base de datos.
            </p>
            <p className="mt-3 font-semibold">Ejemplo hotelero:</p>
            <p>
              Abrir el informe de reservas para consultar las
              operaciones registradas.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-3 overflow-x-auto">
{`OpenReport
Nombre del informe: rptReservas
Vista: Vista preliminar`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              D. GoToRecord: desplazarse entre registros
            </h3>
            <p>
              Permite desplazarse a un registro determinado de un
              formulario o tabla abierta.
            </p>
            <p className="mt-3 font-semibold">Ejemplo hotelero:</p>
            <p>
              Posicionar el formulario de reservas en un registro nuevo.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-3 overflow-x-auto">
{`GoToRecord
Tipo de objeto: Formulario
Nombre del objeto: frmReservas
Registro: Nuevo`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              E. RunCommand: ejecutar comandos de Access
            </h3>
            <p>
              Permite ejecutar comandos incorporados en Microsoft
              Access, por ejemplo guardar el registro actual.
            </p>
            <p className="mt-3 font-semibold">Ejemplo hotelero:</p>
            <p>
              Guardar el registro que se está editando en el formulario.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-3 overflow-x-auto">
{`RunCommand
Comando: GuardarRegistro`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              F. SetValue: asignar valores
            </h3>
            <p>
              Permite establecer un valor en un campo o control.
              Es útil para completar automáticamente información.
            </p>
            <p className="mt-3 font-semibold">Ejemplo hotelero:</p>
            <p>
              Asignar el estado inicial de una reserva.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-3 overflow-x-auto">
{`SetValue
Elemento: [EstadoReserva]
Expresión: "Pendiente"`}
            </pre>
            <p className="text-sm text-blue-800 mt-3">
              La expresión debe apuntar al campo o control correcto
              según el contexto en el que se ejecute la macro.
            </p>
          </div>
        </div>
      </section>

      {/* MACROS INDEPENDIENTES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Macros independientes e incrustadas
        </h2>

        <p className="leading-relaxed">
          En Access podemos crear macros de diferentes maneras
          según dónde y cómo necesitemos utilizarlas.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Macros independientes
        </h3>

        <p className="leading-relaxed">
          Son objetos que se guardan con un nombre propio dentro
          de la base de datos. Pueden ejecutarse desde otros
          objetos, botones o procedimientos.
        </p>

        <p className="mt-3 leading-relaxed">
          Por ejemplo, podemos crear una macro llamada
          <code> mcrAbrirReservas</code> que abra el formulario
          de reservas.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Macros incrustadas
        </h3>

        <p className="leading-relaxed">
          Se crean directamente en una propiedad de evento de
          un formulario o informe. No necesitan guardarse como
          un objeto independiente.
        </p>

        <p className="mt-3 leading-relaxed">
          Por ejemplo, podemos incorporar una macro al evento
          Al hacer clic de un botón para abrir el formulario
          de huéspedes.
        </p>

      
        <div className=" rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            ¿Cuál conviene utilizar?
          </h3>
          <p>
            Las macros independientes son útiles cuando queremos
            reutilizar una secuencia de acciones. Las macros
            incrustadas son convenientes para automatizar eventos
            específicos de un formulario o informe.
          </p>
        </div>
      </section>

      {/* EVENTOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Macros asociadas a eventos
        </h2>

        <p className="leading-relaxed">
          Un evento es una acción o situación que ocurre dentro
          de Access y que puede activar una macro o un procedimiento.
          Por ejemplo, hacer clic en un botón, abrir un formulario
          o modificar un campo.
        </p>

        <p className="mt-4 leading-relaxed">
          Entre los eventos más utilizados encontramos:
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="5">
                <th className="border border-blue-200 p-3 text-left">
                  Evento
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  ¿Cuándo se ejecuta?
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo hotelero
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Al hacer clic
                </td>
                <td className="border border-blue-200 p-3">
                  Cuando el usuario presiona un control.
                </td>
                <td className="border border-blue-200 p-3">
                  Abrir el formulario de reservas.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Al cargar
                </td>
                <td className="border border-blue-200 p-3">
                  Cuando se carga un formulario.
                </td>
                <td className="border border-blue-200 p-3">
                  Mostrar un mensaje de bienvenida.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Antes de actualizar
                </td>
                <td className="border border-blue-200 p-3">
                  Antes de guardar los cambios de un control.
                </td>
                <td className="border border-blue-200 p-3">
                  Verificar un dato ingresado.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Después de actualizar
                </td>
                <td className="border border-blue-200 p-3">
                  Después de modificar un control.
                </td>
                <td className="border border-blue-200 p-3">
                  Actualizar un cálculo.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Al abrir
                </td>
                <td className="border border-blue-200 p-3">
                  Cuando se abre un formulario o informe.
                </td>
                <td className="border border-blue-200 p-3">
                  Preparar la pantalla de inicio.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-7 mb-3">
          Ejemplo: botón para abrir reservas
        </h3>

        <ol className="list-decimal pl-6 space-y-2 leading-relaxed">
          <li>Abrir el formulario de menú principal en vista Diseño.</li>
          <li>Seleccionar el botón de Reservas.</li>
          <li>Abrir la Hoja de propiedades.</li>
          <li>Ingresar en la pestaña Evento.</li>
          <li>Buscar la propiedad Al hacer clic.</li>
          <li>Seleccionar Generador de macros.</li>
          <li>Agregar la acción OpenForm.</li>
          <li>Indicar el formulario frmReservas.</li>
          <li>Guardar la macro y probar el botón.</li>
        </ol>
      </section>

      {/* CONDICIONES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Condiciones y control de acciones
        </h2>

        <p className="leading-relaxed">
          Las macros también permiten evaluar condiciones para
          decidir si una acción debe ejecutarse. Esto permite
          crear automatizaciones que respondan a diferentes
          situaciones.
        </p>

        <p className="mt-4 leading-relaxed">
          Por ejemplo, podemos mostrar un mensaje cuando una
          reserva no tiene seleccionado un huésped.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo: verificar si se seleccionó un huésped
        </h3>

        <p className="leading-relaxed">
          En una macro asociada al botón de una reserva podemos
          incorporar una condición que compruebe si el campo
          correspondiente está vacío.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Condición:
IsNull([cboHuesped])

Acción si se cumple:
MsgBox
Mensaje: "Debe seleccionar un huésped"
Tipo: Advertencia

Acción si no se cumple:
OpenForm
Nombre: frmReservas`}
        </pre>

        <p className="mt-4 leading-relaxed">
          En este ejemplo, el nombre cboHuesped representa un
          control de un formulario. La condición debe configurarse
          en la columna correspondiente del diseñador de macros.
        </p>

        <div className="border-l-4 border-amber-500 p-5 rounded-lg mt-6">
          <strong className="text-amber-900">
            A tener en cuenta
          </strong>
          <p className="mt-2">
            En las macros de Access, las condiciones se pueden
            combinar con acciones y grupos de acciones. Es importante
            comprobar el contexto de ejecución y utilizar los nombres
            reales de los controles y formularios.
          </p>
        </div>
      </section>

      {/* MACROS Y PROYECTO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Automatización del sistema de gestión hotelera
        </h2>

        <p className="leading-relaxed">
          En nuestro proyecto podemos incorporar macros para
          mejorar la experiencia de uso y facilitar las operaciones
          habituales.
        </p>

        <div className="space-y-5 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              A. Menú principal
            </h3>
            <p>
              Crear un formulario principal con botones que permitan
              acceder a las diferentes secciones del sistema.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Huéspedes.</li>
              <li>Habitaciones.</li>
              <li>Reservas.</li>
              <li>Pagos.</li>
              <li>Informes.</li>
            </ul>
            <p className="mt-3">
              Cada botón tendrá una macro con la acción OpenForm
              u OpenReport según corresponda.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              B. Nueva reserva
            </h3>
            <p>
              Crear una macro asociada al botón Nueva reserva
              que abra el formulario correspondiente y lo posicione
              en un registro nuevo.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Mostrar un mensaje informativo.</li>
              <li>Abrir el formulario de reservas.</li>
              <li>Ir a un registro nuevo.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              C. Consultar reservas
            </h3>
            <p>
              Crear una macro que abra una consulta guardada
              o un formulario de búsqueda para consultar las
              reservas registradas.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              D. Informes del hotel
            </h3>
            <p>
              Crear botones para abrir informes de ocupación,
              reservas por período y pagos registrados.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              E. Cerrar el sistema
            </h3>
            <p>
              Crear una macro para cerrar la aplicación o el
              objeto actual, utilizando la acción CloseWindow
              o la acción de cierre correspondiente.
            </p>
          </div>
        </div>
      </section>

      {/* MACROS Y CONSULTAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Relación entre macros y consultas
        </h2>

        <p className="leading-relaxed">
          Las macros pueden trabajar junto con las consultas
          de Access. Esto permite automatizar operaciones sobre
          los datos almacenados en las tablas.
        </p>

        <p className="mt-4 leading-relaxed">
          Una de las acciones que podemos utilizar es
          <code> OpenQuery</code>, que permite ejecutar o abrir
          una consulta guardada.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo: ejecutar una consulta de reservas
        </h3>

        <p className="leading-relaxed">
          Supongamos que tenemos una consulta guardada llamada
          qryReservasConfirmadas, que muestra las reservas cuyo
          estado es Confirmada.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`OpenQuery
Nombre de la consulta: qryReservasConfirmadas
Vista: Hoja de datos
Modo de datos: Solo lectura`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Al ejecutar la macro, Access abrirá la consulta y
          mostrará los registros que cumplan con sus criterios.
          En las próximas clases profundizaremos en la creación
          de consultas mediante QBE y SQL.
        </p>
      </section>

      {/* BUENAS PRACTICAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Buenas prácticas al utilizar macros
        </h2>

        <ul className="list-disc pl-6 space-y-3 leading-relaxed">
          <li>
            Utilizar nombres descriptivos para las macros.
          </li>
          <li>
            Organizar las acciones en una secuencia lógica.
          </li>
          <li>
            Verificar que los nombres de formularios, consultas
            e informes sean correctos.
          </li>
          <li>
            Comprobar las condiciones antes de ejecutar acciones
            que modifiquen información.
          </li>
          <li>
            Probar las macros con datos de ejemplo.
          </li>
          <li>
            Evitar acciones innecesarias que dificulten la
            comprensión de la automatización.
          </li>
          <li>
            Utilizar VBA cuando la operación requiera una lógica
            más compleja o un mayor control.
          </li>
          <li>
            Realizar copias de seguridad antes de probar macros
            que modifiquen o eliminen registros.
          </li>
        </ul>
      </section>

      {/* ACTIVIDADES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          11. Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: Primera macro
            </h3>
            <p>
              Crear una macro independiente llamada mcrBienvenida
              que muestre un mensaje al usuario cuando se ejecute.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizar la acción MsgBox.</li>
              <li>Configurar el texto del mensaje.</li>
              <li>Asignar un título.</li>
              <li>Guardar y ejecutar la macro.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: Abrir formularios
            </h3>
            <p>
              Crear una macro que permita abrir el formulario
              de huéspedes y otra que permita abrir el formulario
              de habitaciones.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizar la acción OpenForm.</li>
              <li>Configurar el nombre de cada formulario.</li>
              <li>Probar las dos macros.</li>
              <li>Explicar la diferencia entre ambas.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: Automatizar un botón
            </h3>
            <p>
              Abrir el formulario de menú principal y agregar
              un botón llamado Reservas.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Asociar una macro al evento Al hacer clic.</li>
              <li>Utilizar OpenForm para abrir frmReservas.</li>
              <li>Probar el funcionamiento del botón.</li>
              <li>Repetir el procedimiento con el formulario de pagos.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: Ejecutar una consulta
            </h3>
            <p>
              Crear una consulta guardada que muestre las reservas
              confirmadas y una macro que permita abrirla.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Crear la consulta qryReservasConfirmadas.</li>
              <li>Incorporar la acción OpenQuery.</li>
              <li>Ejecutar la macro.</li>
              <li>Comprobar que se muestran los registros esperados.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: Macro con condición
            </h3>
            <p>
              Crear una macro asociada a un botón del formulario
              de reservas que compruebe si se seleccionó un huésped.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizar una condición con IsNull.</li>
              <li>Mostrar una advertencia cuando no exista un huésped seleccionado.</li>
              <li>Evitar continuar con la operación si falta el dato.</li>
              <li>Probar el comportamiento con y sin huésped seleccionado.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTEGRADORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          12. Actividad integradora: Menú principal automatizado
        </h2>

        <p className="leading-relaxed">
          En esta actividad se deberá incorporar un menú principal
          al sistema de gestión hotelera y automatizar la navegación
          entre los distintos formularios e informes mediante macros.
        </p>

        <div className=" rounded-xl p-6 mt-5">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Proyecto: Panel de control del hotel
          </h3>

          <p>
            Crear un formulario principal que funcione como pantalla
            de inicio de la aplicación.
          </p>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 1: Diseño del menú
          </h4>
          <p>
            Incorporar los siguientes botones:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Administrar huéspedes.</li>
            <li>Consultar habitaciones.</li>
            <li>Registrar reservas.</li>
            <li>Registrar pagos.</li>
            <li>Consultar informes.</li>
            <li>Salir del sistema.</li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 2: Automatización
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Asociar una macro a cada botón.
            </li>
            <li>
              Utilizar OpenForm para abrir los formularios.
            </li>
            <li>
              Utilizar OpenReport para abrir los informes.
            </li>
            <li>
              Utilizar MsgBox para mostrar mensajes informativos.
            </li>
            <li>
              Configurar una acción para cerrar la aplicación.
            </li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 3: Validación
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Incorporar una macro con condición en el formulario
              de reservas.
            </li>
            <li>
              Comprobar que se haya seleccionado un huésped.
            </li>
            <li>
              Mostrar un mensaje cuando falte información.
            </li>
            <li>
              Verificar que los botones abran los objetos correctos.
            </li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 4: Pruebas
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ejecutar cada botón del menú.</li>
            <li>Comprobar la apertura de formularios e informes.</li>
            <li>Probar las condiciones de validación.</li>
            <li>Corregir errores de configuración.</li>
          </ul>
        </div>

        <div className="border border-blue-200 rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Entrega del trabajo
          </h3>
          <p>
            Presentar el formulario de menú principal terminado,
            las macros creadas y capturas de pantalla que demuestren
            el funcionamiento de cada botón. Explicar qué acciones
            se utilizaron y qué evento activa cada macro.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conclusión
        </h2>

        <p className="leading-relaxed">
          Las macros son herramientas importantes para automatizar
          tareas en Microsoft Access. Permiten simplificar operaciones,
          facilitar la navegación y mejorar la interacción de los
          usuarios con una aplicación.
        </p>

        <p className="mt-4 leading-relaxed">
          En nuestro sistema hotelero ya podemos automatizar el acceso
          a formularios, ejecutar consultas y controlar determinadas
          acciones mediante eventos.
        </p>

        <p className="mt-4 leading-relaxed">
          En la próxima clase estudiaremos las
          <strong> consultas mediante QBE (Query By Example)</strong>,
          una herramienta que permite consultar, seleccionar y
          organizar información de las tablas sin necesidad de
          escribir instrucciones SQL.
        </p>
      </section>
    </div>
  );
}
