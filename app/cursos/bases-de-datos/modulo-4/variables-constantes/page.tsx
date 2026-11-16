
export default function VariablesConstantesPage() {
  return (
    <div className="space-y-14">
      {/* ENCABEZADO */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Variables, constantes y tipos de datos
        </h1>

        <p className="text-lg leading-relaxed">
          Los programas necesitan almacenar información para poder realizar
          cálculos, tomar decisiones y ejecutar diferentes operaciones.
          Para ello utilizan variables y constantes, que permiten guardar
          datos durante la ejecución de un procedimiento. En esta clase
          aprenderemos cómo funcionan y cómo aplicarlas al sistema de gestión
          de reservas de nuestro hotel.
        </p>
      </section>

      {/* VARIABLES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una variable?
        </h2>

        <p className="leading-relaxed mb-4">
          Una variable es un espacio de almacenamiento identificado por un
          nombre, donde un programa puede guardar un dato para utilizarlo
          durante la ejecución de una operación.
        </p>

        <p className="leading-relaxed mb-4">
          El valor almacenado en una variable puede cambiar. Por ejemplo,
          durante el registro de una reserva podemos almacenar el precio de
          una habitación, la cantidad de noches y el importe total.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo: variables de una reserva
          </h3>

          <div className="space-y-3">
            {[
              ["precioNoche", "$50.000"],
              ["cantidadNoches", "3"],
              ["importeTotal", "$150.000"],
            ].map(([nombre, valor]) => (
              <div
                key={nombre}
                className="flex justify-between gap-3 border-b border-blue-200 pb-2"
              >
                <span className="font-mono font-semibold text-blue-900">
                  {nombre}
                </span>
                <span className="font-semibold">{valor}</span>
              </div>
            ))}
          </div>

          <p className="text-sm mt-4">
            Cada variable almacena un dato que el programa puede consultar
            y utilizar en diferentes operaciones.
          </p>
        </div>
      </section>

      {/* DECLARACION Y ASIGNACION */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Declaración y asignación de variables
        </h2>

        <p className="leading-relaxed mb-4">
          Antes de utilizar una variable, generalmente debemos declararla.
          Declarar una variable significa indicar su nombre y el tipo de
          información que almacenará.
        </p>

        <p className="leading-relaxed mb-4">
          Luego podemos asignarle un valor. La asignación consiste en guardar
          un dato dentro de la variable. Si el programa necesita realizar
          nuevos cálculos, puede modificar ese valor.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo en pseudocódigo
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Algoritmo EjemploVariables

    Definir precioNoche Como Real
    Definir cantidadNoches Como Entero
    Definir importeTotal Como Real

    precioNoche <- 50000
    cantidadNoches <- 3

    importeTotal <- precioNoche * cantidadNoches

    Escribir importeTotal

FinAlgoritmo`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          En este ejemplo se declaran tres variables, se asignan valores a
          las primeras dos y luego se calcula el importe total utilizando
          una tercera variable.
        </p>

        <div className="border-l-4 border-blue-600 pl-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-2">
            Operador de asignación
          </h3>
          <p className="leading-relaxed">
            En pseudocódigo suele utilizarse el símbolo
            <strong> {"<-"} </strong>
            para indicar que un valor se almacena en una variable. Por
            ejemplo, <strong>cantidadNoches {"<-"} 3</strong> significa
            guardar el número 3 en la variable cantidadNoches.
          </p>
        </div>
      </section>

      {/* CONSTANTES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una constante?
        </h2>

        <p className="leading-relaxed mb-4">
          Una constante es un dato cuyo valor permanece fijo durante la
          ejecución de un programa. A diferencia de una variable, su
          contenido no debe modificarse una vez definido.
        </p>

        <p className="leading-relaxed mb-4">
          Las constantes son útiles cuando necesitamos utilizar un mismo
          valor en diferentes operaciones y queremos evitar modificaciones
          accidentales.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplos de constantes en el sistema hotelero
          </h3>

          <ul className="space-y-3">
            <li>
              <strong>PORCENTAJE_IVA:</strong> porcentaje impositivo utilizado
              en un cálculo, cuando corresponda.
            </li>
            <li>
              <strong>CAPACIDAD_MAXIMA:</strong> un límite definido para una
              determinada categoría de habitación, si el sistema establece
              ese valor como regla fija.
            </li>
            <li>
              <strong>MONEDA:</strong> código de moneda utilizado por el
              sistema, por ejemplo, ARS.
            </li>
          </ul>
        </div>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Ejemplo en pseudocódigo
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Algoritmo CalcularImporte

    Definir precioNoche Como Real
    Definir cantidadNoches Como Entero
    Definir importeTotal Como Real

    Constante DESCUENTO = 0.10

    precioNoche <- 50000
    cantidadNoches <- 3

    importeTotal <- precioNoche * cantidadNoches

    Escribir "Importe: ", importeTotal

FinAlgoritmo`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          En este ejemplo, DESCUENTO representa un valor fijo del 10%.
          En una implementación real, el descuento podría aplicarse
          solamente cuando se cumplan las condiciones comerciales
          correspondientes.
        </p>
      </section>

      {/* DIFERENCIAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencias entre variables y constantes
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Característica
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Variable
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Constante
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">Valor</td>
                <td className="border border-blue-200 p-3">Puede cambiar.</td>
                <td className="border border-blue-200 p-3">Permanece fijo.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Uso</td>
                <td className="border border-blue-200 p-3">
                  Almacenar información que puede modificarse.
                </td>
                <td className="border border-blue-200 p-3">
                  Almacenar valores que no deben cambiar.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Ejemplo</td>
                <td className="border border-blue-200 p-3">
                  precioNoche
                </td>
                <td className="border border-blue-200 p-3">
                  MONEDA
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* TIPOS DE DATOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de datos
        </h2>

        <p className="leading-relaxed mb-4">
          Cada variable debe almacenar información de una determinada
          naturaleza. Los tipos de datos permiten establecer qué clase de
          valor puede guardar una variable y qué operaciones se pueden
          realizar con él.
        </p>

        <div className="space-y-4">
          {[
            {
              nombre: "Entero",
              descripcion:
                "Almacena números sin parte decimal.",
              ejemplos:
                "cantidadNoches = 3, numeroHabitacion = 12.",
            },
            {
              nombre: "Real o decimal",
              descripcion:
                "Almacena números que pueden contener decimales.",
              ejemplos:
                "precioNoche = 50000.50, importeTotal = 150000.75.",
            },
            {
              nombre: "Cadena de texto",
              descripcion:
                "Almacena letras, palabras, números tratados como texto y otros caracteres.",
              ejemplos:
                'nombreHuesped = "María", dni = "30123456".',
            },
            {
              nombre: "Lógico o booleano",
              descripcion:
                "Almacena solamente dos estados: verdadero o falso.",
              ejemplos:
                "habitacionDisponible = Verdadero.",
            },
            {
              nombre: "Fecha y hora",
              descripcion:
                "Almacena fechas y horarios.",
              ejemplos:
                'fechaEntrada = "20/11/2026".',
            },
          ].map((item) => (
            <div
              key={item.nombre}
              className="border border-blue-200 rounded-xl p-5"
            >
              <h3 className="font-bold text-blue-900 mb-2">
                {item.nombre}
              </h3>
              <p className="leading-relaxed mb-2">{item.descripcion}</p>
              <p className="text-sm font-mono text-blue-800">
                {item.ejemplos}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NOMBRES DE VARIABLES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reglas para nombrar variables
        </h2>

        <p className="leading-relaxed mb-4">
          Los nombres de las variables deben ser claros y permitir reconocer
          qué información almacenan. Aunque las reglas específicas dependen
          del lenguaje de programación, existen recomendaciones generales.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="border border-green-300 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-3">
              Nombres recomendados
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>nombreHuesped</li>
              <li>precioNoche</li>
              <li>fechaEntrada</li>
              <li>cantidadPersonas</li>
              <li>importeTotal</li>
            </ul>
          </div>

          <div className="border border-red-300 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-3">
              Nombres poco recomendados
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>x</li>
              <li>dato1</li>
              <li>variable</li>
              <li>abc</li>
              <li>cosa</li>
            </ul>
          </div>
        </div>

        <p className="leading-relaxed mt-4">
          Es conveniente utilizar nombres descriptivos, evitar espacios y
          símbolos especiales, no comenzar con números y respetar las
          restricciones del lenguaje utilizado.
        </p>
      </section>

      {/* OPERACIONES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operaciones con variables
        </h2>

        <p className="leading-relaxed mb-4">
          Una vez almacenados los datos, podemos utilizar variables en
          diferentes operaciones matemáticas y lógicas.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Operador
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Operación
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["+", "Suma", "precio + adicional"],
                ["-", "Resta", "saldo = total - pagado"],
                ["*", "Multiplicación", "precio * noches"],
                ["/", "División", "importe / cantidad"],
                ["=", "Igualdad", "estado = activo"],
                [">", "Mayor que", "cantidad > 0"],
                ["<", "Menor que", "edad < 18"],
              ].map(([operador, operacion, ejemplo]) => (
                <tr key={operador}>
                  <td className="border border-blue-200 p-3 font-mono font-bold">
                    {operador}
                  </td>
                  <td className="border border-blue-200 p-3">
                    {operacion}
                  </td>
                  <td className="border border-blue-200 p-3 font-mono text-sm">
                    {ejemplo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* APLICACION EN ACCESS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Variables y tipos de datos en Microsoft Access
        </h2>

        <p className="leading-relaxed mb-4">
          En nuestro proyecto utilizaremos Microsoft Access para almacenar
          los datos en tablas y realizar operaciones mediante formularios,
          consultas, macros y código VBA.
        </p>

        <p className="leading-relaxed mb-4">
          Es importante distinguir los tipos de datos de las variables de
          programación de los tipos de datos que se configuran en los campos
          de una tabla. Ambos determinan cómo se almacena y utiliza la
          información, pero pertenecen a contextos diferentes.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo: tabla Reservas
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Campo</th>
                <th className="border border-blue-200 p-3 text-left">Tipo de dato en Access</th>
                <th className="border border-blue-200 p-3 text-left">Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["IdReserva", "Autonumeración", "15"],
                ["IdHuesped", "Número", "8"],
                ["IdHabitacion", "Número", "4"],
                ["FechaEntrada", "Fecha/Hora", "20/11/2026"],
                ["FechaSalida", "Fecha/Hora", "23/11/2026"],
                ["CantidadPersonas", "Número", "2"],
                ["EstadoReserva", "Texto corto", "Confirmada"],
                ["Observaciones", "Texto largo", "Llegada por la tarde"],
              ].map(([campo, tipo, ejemplo]) => (
                <tr key={campo}>
                  <td className="border border-blue-200 p-3 font-semibold">
                    {campo}
                  </td>
                  <td className="border border-blue-200 p-3">{tipo}</td>
                  <td className="border border-blue-200 p-3">{ejemplo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed mt-4">
          Estos campos permiten almacenar la información necesaria para
          registrar y administrar las reservas. En los procedimientos
          utilizaremos variables para recuperar esos valores, realizar
          cálculos y comprobar las condiciones necesarias.
        </p>
      </section>

      {/* VARIABLES EN VBA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Primer acercamiento a las variables en VBA
        </h2>

        <p className="leading-relaxed mb-4">
          VBA (Visual Basic for Applications) es el lenguaje que permite
          programar procedimientos y automatizaciones dentro de Microsoft
          Access.
        </p>

        <p className="leading-relaxed mb-4">
          En VBA podemos declarar variables mediante la instrucción
          <strong> Dim</strong> e indicar su tipo de dato.
        </p>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Dim precioNoche As Currency
Dim cantidadNoches As Integer
Dim importeTotal As Currency

precioNoche = 50000
cantidadNoches = 3

importeTotal = precioNoche * cantidadNoches

MsgBox "El importe total es: " & importeTotal`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          En este ejemplo:
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            <strong>Dim:</strong> declara una variable.
          </li>
          <li>
            <strong>Currency:</strong> almacena valores monetarios.
          </li>
          <li>
            <strong>Integer:</strong> almacena números enteros dentro de
            su rango permitido.
          </li>
          <li>
            <strong>As:</strong> indica el tipo de dato de la variable.
          </li>
          <li>
            <strong>MsgBox:</strong> muestra un mensaje en pantalla.
          </li>
        </ul>

        <div className=" border border-blue-200 rounded-xl p-5 mt-5">
          <p className="font-semibold text-blue-900 mb-2">
            Para tener en cuenta
          </p>
          <p className="leading-relaxed">
            En VBA también podemos utilizar tipos como String para texto,
            Date para fechas, Boolean para valores verdaderos o falsos,
            Long para números enteros de mayor rango y Double para valores
            numéricos con decimales. Para importes monetarios es conveniente
            utilizar Currency.
          </p>
        </div>
      </section>

      {/* EJEMPLO SISTEMA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación al sistema de gestión hotelera
        </h2>

        <p className="leading-relaxed mb-4">
          Vamos a utilizar variables para representar la información que
          interviene en el registro de una reserva y en el control de sus
          pagos.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo: calcular el saldo pendiente
        </h3>

        <p className="leading-relaxed mb-4">
          Cuando un huésped realiza una reserva, el sistema debe conocer el
          importe total y cuánto dinero ha pagado. Con esos valores puede
          calcular el saldo pendiente.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6">
          <p className="font-semibold text-blue-900 mb-3">
            Datos de ejemplo
          </p>
          <ul className="space-y-2">
            <li>Importe total de la reserva: $150.000</li>
            <li>Importe pagado: $90.000</li>
            <li>Saldo pendiente: $60.000</li>
          </ul>
          <div className="border-t border-blue-200 mt-4 pt-4 font-mono text-blue-900">
            saldoPendiente = importeTotal - importePagado
          </div>
        </div>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Implementación inicial en VBA
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Dim importeTotal As Currency
Dim importePagado As Currency
Dim saldoPendiente As Currency

importeTotal = 150000
importePagado = 90000

saldoPendiente = importeTotal - importePagado

MsgBox "Saldo pendiente: " & saldoPendiente`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          Más adelante utilizaremos esta lógica para que el formulario de
          reservas pueda mostrar el saldo pendiente a partir de los pagos
          registrados en la tabla Pagos.
        </p>
      </section>

      {/* ACTIVIDADES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 1: identificar variables y constantes
            </h3>
            <p className="leading-relaxed">
              Para el sistema hotelero, identificá diez datos que necesiten
              almacenarse. Indicá cuáles deberían representarse mediante
              variables y cuáles podrían ser constantes. Justificá cada
              elección.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 2: seleccionar tipos de datos
            </h3>
            <p className="leading-relaxed">
              Indicá qué tipo de dato utilizarías para almacenar cada uno
              de los siguientes elementos:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nombre y apellido del huésped.</li>
              <li>Número de habitación.</li>
              <li>Precio por noche.</li>
              <li>Fecha de entrada.</li>
              <li>Cantidad de personas.</li>
              <li>Estado de disponibilidad.</li>
              <li>Importe pagado.</li>
              <li>Correo electrónico.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 3: calcular el importe de una reserva
            </h3>
            <p className="leading-relaxed">
              Escribí un algoritmo en pseudocódigo que utilice las variables
              precioNoche, cantidadNoches e importeTotal. Asigná valores,
              calculá el importe y mostrá el resultado.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 4: calcular el saldo pendiente
            </h3>
            <p className="leading-relaxed">
              Una reserva tiene un importe total de $280.000 y el huésped
              realizó dos pagos: uno de $80.000 y otro de $100.000.
              Identificá las variables necesarias y diseñá un algoritmo
              que calcule cuánto dinero queda pendiente.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 5: primeras instrucciones en VBA
            </h3>
            <p className="leading-relaxed">
              Analizá el ejemplo de VBA presentado en esta clase. Luego
              escribí un procedimiento que declare las variables necesarias
              para calcular el importe de una reserva de cinco noches,
              utilizando un precio de $75.000 por noche. El procedimiento
              debe mostrar el resultado mediante un mensaje.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRADORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: variables del sistema hotelero
        </h2>

        <p className="leading-relaxed mb-4">
          Vamos a preparar las variables que utilizaremos en los próximos
          procedimientos del sistema de gestión hotelera.
        </p>

        <p className="leading-relaxed mb-4">
          El objetivo es identificar qué información necesita el sistema
          para registrar reservas, calcular importes, controlar pagos y
          consultar la disponibilidad de habitaciones.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Parte 1: definir las variables
        </h3>

        <p className="leading-relaxed mb-3">
          Elaborá una tabla con al menos quince variables que podrían
          utilizarse en el sistema. Incluí:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Nombre de la variable.</li>
          <li>Tipo de dato.</li>
          <li>Descripción de la información que almacena.</li>
          <li>Un ejemplo de valor.</li>
        </ul>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Parte 2: diseñar los cálculos
        </h3>

        <p className="leading-relaxed mb-3">
          Utilizando las variables definidas, escribí algoritmos para:
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Calcular el importe total de una reserva.</li>
          <li>Calcular el saldo pendiente de pago.</li>
          <li>Calcular el total de pagos realizados.</li>
          <li>Determinar la cantidad de noches de alojamiento.</li>
        </ol>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Parte 3: implementación inicial
        </h3>

        <p className="leading-relaxed">
          Elegí uno de los algoritmos anteriores y representalo mediante
          pseudocódigo y código VBA. Utilizá nombres descriptivos y tipos
          de datos adecuados.
        </p>

        <div className=" border border-blue-200 rounded-xl p-5 mt-5">
          <p className="font-semibold text-blue-900 mb-2">
            Entrega esperada
          </p>
          <p className="leading-relaxed">
            Un documento con el inventario de variables y constantes del
            sistema hotelero, los tipos de datos seleccionados y los
            algoritmos desarrollados. También se deberá incluir al menos
            un procedimiento escrito en VBA.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="border-t border-blue-200 pt-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Las variables y constantes permiten almacenar y organizar la
          información que necesita un programa. Los tipos de datos determinan
          qué clase de valores podemos utilizar y las operaciones que podemos
          realizar con ellos. En nuestro sistema hotelero, estos conceptos
          serán fundamentales para calcular reservas, controlar pagos,
          validar información y automatizar tareas administrativas mediante
          Microsoft Access y VBA.
        </p>
      </section>
    </div>
  );
}
