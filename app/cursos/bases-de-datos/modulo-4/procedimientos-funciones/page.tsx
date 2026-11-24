
export default function ProcedimientosFuncionesPage() {
  return (
    <div className="space-y-14">
      {/* INTRODUCCIÓN */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Procedimientos y funciones
        </h1>

        <p className="text-lg leading-relaxed">
          A medida que un programa crece, aumenta la cantidad de
          instrucciones necesarias para resolver diferentes tareas.
          Si escribimos todo el código dentro de un único procedimiento,
          puede resultar difícil comprenderlo, modificarlo y encontrar
          errores.
        </p>

        <p className="mt-4 leading-relaxed">
          Para organizar mejor un programa utilizamos
          <strong> procedimientos y funciones</strong>. Estos permiten
          dividir un problema en partes más pequeñas, asignar una tarea
          específica a cada bloque de código y reutilizarlo cuando sea
          necesario.
        </p>

        <div className=" border-l-4 border-blue-700 p-5 rounded-lg mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Aplicación en nuestro proyecto hotelero
          </h3>
          <p>
            En el sistema de gestión hotelera podemos crear procedimientos
            para registrar reservas, limpiar formularios, actualizar
            estados y mostrar mensajes. También podemos crear funciones
            para calcular importes, verificar disponibilidad y obtener
            cantidades o totales.
          </p>
        </div>
      </section>

      {/* CONCEPTO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué son los procedimientos y las funciones?
        </h2>

        <p className="leading-relaxed">
          Son bloques de código que agrupan instrucciones relacionadas
          con una tarea determinada. En lugar de escribir las mismas
          instrucciones muchas veces, podemos definirlas una sola vez
          y ejecutarlas desde distintos lugares del programa.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Procedimiento (Sub)
            </h3>
            <p className="leading-relaxed">
              Es un bloque de código que realiza una tarea. Puede
              recibir información mediante parámetros, pero no devuelve
              directamente un valor como resultado.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-4 overflow-x-auto">
{`Sub MostrarMensaje()

    MsgBox "Bienvenido al sistema"

End Sub`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Función (Function)
            </h3>
            <p className="leading-relaxed">
              Es un bloque de código que realiza una operación y
              devuelve un resultado que puede utilizarse en otra
              expresión o procedimiento.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-4 overflow-x-auto">
{`Function Sumar(a As Double, b As Double) As Double

    Sumar = a + b

End Function`}
            </pre>
          </div>
        </div>
      </section>

      {/* SUB */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Procedimientos en VBA: Sub
        </h2>

        <p className="leading-relaxed">
          En VBA, los procedimientos se definen mediante la palabra
          clave <code>Sub</code> y finalizan con <code>End Sub</code>.
          Dentro de ellos se escriben las instrucciones que queremos
          ejecutar.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Estructura general
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto">
{`Sub NombreDelProcedimiento()

    ' Instrucciones que realizará

End Sub`}
        </pre>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo: mostrar un mensaje
        </h3>

        <p className="leading-relaxed">
          En el sistema hotelero podemos crear un procedimiento que
          muestre un mensaje cuando el usuario ingresa al formulario
          principal.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Sub MostrarBienvenida()

    MsgBox "Sistema de Gestión Hotelera", vbInformation, "Bienvenida"

End Sub`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Para ejecutar este procedimiento desde otro procedimiento
          utilizamos su nombre:
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Private Sub Form_Load()

    MostrarBienvenida

End Sub`}
        </pre>

        <p className="mt-4 leading-relaxed">
          El evento <code>Form_Load</code> se ejecuta cuando se carga
          el formulario. En este ejemplo, llama al procedimiento
          MostrarBienvenida.
        </p>
      </section>

      {/* FUNCIONES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Funciones en VBA: Function
        </h2>

        <p className="leading-relaxed">
          Las funciones permiten realizar cálculos y devolver un
          resultado. Se definen con la palabra clave
          <code> Function</code> y finalizan con <code>End Function</code>.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Estructura general
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto">
{`Function NombreFuncion() As TipoDeDato

    ' Instrucciones

    NombreFuncion = resultado

End Function`}
        </pre>

        <p className="mt-4 leading-relaxed">
          En VBA, el valor de retorno se asigna al nombre de la propia
          función. El tipo de dato indicado después de
          <code> As</code> determina qué clase de resultado devuelve.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo: calcular el importe de una reserva
        </h3>

        <p className="leading-relaxed">
          El importe de una reserva depende del precio por noche y
          de la cantidad de noches contratadas. Podemos crear una
          función que realice este cálculo.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Public Function CalcularImporte( _
    precioNoche As Currency, _
    cantidadNoches As Integer) As Currency

    CalcularImporte = precioNoche * cantidadNoches

End Function`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Para utilizarla desde un procedimiento:
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Private Sub btnCalcular_Click()

    Dim importe As Currency

    importe = CalcularImporte(65000, 4)

    MsgBox "Importe total: $" & Format(importe, "#,##0.00")

End Sub`}
        </pre>

        <div className=" rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Resultado del ejemplo
          </h3>
          <p>
            Precio por noche: $65.000
          </p>
          <p>
            Cantidad de noches: 4
          </p>
          <p className="text-xl font-bold text-blue-900 mt-2">
            Importe total: $260.000
          </p>
        </div>
      </section>

      {/* PARÁMETROS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Parámetros y argumentos
        </h2>

        <p className="leading-relaxed">
          Los parámetros permiten que un procedimiento o función
          reciba información desde el lugar donde es llamado.
          Gracias a ellos, podemos utilizar el mismo bloque de código
          con diferentes datos.
        </p>

        <p className="mt-4 leading-relaxed">
          Por ejemplo, la función CalcularImporte recibe dos parámetros:
          el precio por noche y la cantidad de noches. Cada vez que
          la ejecutamos podemos enviarle valores diferentes.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Dim importe1 As Currency
Dim importe2 As Currency
Dim importe3 As Currency

importe1 = CalcularImporte(65000, 4)
importe2 = CalcularImporte(65000, 2)
importe3 = CalcularImporte(80000, 7)

Debug.Print importe1
Debug.Print importe2
Debug.Print importe3`}
        </pre>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Reserva
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Precio por noche
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Noches
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Importe
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">1</td>
                <td className="border border-blue-200 p-3">$65.000</td>
                <td className="border border-blue-200 p-3">4</td>
                <td className="border border-blue-200 p-3">$260.000</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">2</td>
                <td className="border border-blue-200 p-3">$65.000</td>
                <td className="border border-blue-200 p-3">2</td>
                <td className="border border-blue-200 p-3">$130.000</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">3</td>
                <td className="border border-blue-200 p-3">$80.000</td>
                <td className="border border-blue-200 p-3">7</td>
                <td className="border border-blue-200 p-3">$560.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-7 mb-3">
          Parámetros por valor y por referencia
        </h3>

        <p className="leading-relaxed">
          En VBA podemos indicar cómo se recibe un parámetro:
        </p>

        <ul className="list-disc pl-6 mt-4 space-y-3">
          <li>
            <strong>ByVal:</strong> el procedimiento recibe una copia
            del valor. Si modifica el parámetro, no modifica la
            variable original.
          </li>
          <li>
            <strong>ByRef:</strong> el procedimiento puede modificar
            la variable original mediante la referencia recibida.
            Es el comportamiento predeterminado de VBA.
          </li>
        </ul>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Sub AplicarDescuento(ByVal importe As Currency)

    importe = importe * 0.9

End Sub

Sub Ejemplo()

    Dim total As Currency

    total = 100000

    AplicarDescuento total

    Debug.Print total

End Sub`}
        </pre>

        <p className="mt-4 leading-relaxed">
          En este caso, aunque el procedimiento modifica su parámetro,
          la variable total conserva su valor original porque se
          utilizó ByVal.
        </p>

        <p className="mt-4 leading-relaxed">
          Si quisiéramos modificar la variable original, podríamos
          utilizar <code>ByRef</code>.
        </p>
      </section>

      {/* DIFERENCIAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Diferencias entre procedimientos y funciones
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Característica
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Sub
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Function
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Objetivo
                </td>
                <td className="border border-blue-200 p-3">
                  Ejecutar una tarea.
                </td>
                <td className="border border-blue-200 p-3">
                  Calcular y devolver un resultado.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Devuelve valor
                </td>
                <td className="border border-blue-200 p-3">No directamente.</td>
                <td className="border border-blue-200 p-3">Sí.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Palabra clave
                </td>
                <td className="border border-blue-200 p-3">Sub</td>
                <td className="border border-blue-200 p-3">Function</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Finalización
                </td>
                <td className="border border-blue-200 p-3">End Sub</td>
                <td className="border border-blue-200 p-3">End Function</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  Ejemplo hotelero
                </td>
                <td className="border border-blue-200 p-3">
                  Mostrar los datos de una reserva.
                </td>
                <td className="border border-blue-200 p-3">
                  Calcular el importe de una reserva.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* PROCEDIMIENTOS PRIVADOS Y PUBLICOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Procedimientos públicos y privados
        </h2>

        <p className="leading-relaxed">
          En VBA podemos establecer desde dónde se permite utilizar
          un procedimiento o función. Para esto se utilizan las
          palabras clave <code>Public</code> y <code>Private</code>.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Public</h3>
            <p>
              Permite utilizar el procedimiento o función desde
              diferentes módulos del proyecto, siempre que sea
              accesible desde ellos.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-3 overflow-x-auto">
{`Public Function ObtenerTotal() As Currency

    ObtenerTotal = 150000

End Function`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Private</h3>
            <p>
              Restringe su utilización al módulo donde fue declarado.
              Es útil para tareas internas de un formulario.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg mt-3 overflow-x-auto">
{`Private Sub LimpiarFormulario()

    Me.txtNombre = Null
    Me.txtApellido = Null

End Sub`}
            </pre>
          </div>
        </div>

        <p className="mt-5 leading-relaxed">
          Por ejemplo, una función general para calcular importes
          puede declararse como pública en un módulo estándar.
          En cambio, un procedimiento que limpia controles de un
          formulario puede declararse privado dentro de ese formulario.
        </p>
      </section>

      {/* MODULOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Módulos de código en Access
        </h2>

        <p className="leading-relaxed">
          Microsoft Access permite organizar los procedimientos y
          funciones dentro de módulos. Esto facilita mantener el
          código ordenado y reutilizarlo en diferentes formularios
          y objetos de la base de datos.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Módulos de formulario
        </h3>

        <p className="leading-relaxed">
          Cada formulario puede tener su propio módulo de código.
          Allí se escriben procedimientos relacionados con sus
          controles y eventos.
        </p>

        <p className="mt-3 leading-relaxed">
          Por ejemplo, el formulario de reservas puede contener
          procedimientos para validar fechas, calcular importes
          y limpiar los campos.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Módulos estándar
        </h3>

        <p className="leading-relaxed">
          Son módulos independientes de los formularios. Permiten
          guardar funciones y procedimientos generales que pueden
          utilizarse desde diferentes partes del sistema.
        </p>

        <p className="mt-3 leading-relaxed">
          Para crear uno, en Access podemos ingresar en la pestaña
          <strong> Crear</strong> y seleccionar <strong>Módulo</strong>.
          Luego se abre el editor de VBA para escribir el código.
        </p>

        <div className=" rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Organización recomendada para el proyecto
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Formulario de reservas: validaciones y operaciones
              relacionadas con el registro.
            </li>
            <li>
              Formulario de pagos: procedimientos para registrar
              pagos y actualizar estados.
            </li>
            <li>
              Módulo estándar: funciones generales de cálculo,
              consultas y procesamiento de información.
            </li>
          </ul>
        </div>
      </section>

      {/* EJEMPLO INTEGRADOR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Aplicación práctica: funciones para el sistema hotelero
        </h2>

        <p className="leading-relaxed">
          Ahora vamos a integrar los conocimientos mediante algunos
          procedimientos y funciones que pueden formar parte del
          sistema de gestión de reservas.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          A. Función para calcular la cantidad de noches
        </h3>

        <p className="leading-relaxed">
          Una reserva tiene una fecha de entrada y una fecha de salida.
          Podemos calcular la cantidad de noches utilizando la función
          DateDiff.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Public Function CalcularNoches( _
    fechaEntrada As Date, _
    fechaSalida As Date) As Long

    If fechaSalida <= fechaEntrada Then
        CalcularNoches = 0
    Else
        CalcularNoches = DateDiff("d", fechaEntrada, fechaSalida)
    End If

End Function`}
        </pre>

        <p className="mt-4 leading-relaxed">
          La función devuelve cero cuando las fechas no representan
          una estadía válida. Si la salida es posterior a la entrada,
          devuelve la diferencia en días.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-7 mb-3">
          B. Función para calcular el importe de una reserva
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Public Function CalcularTotalReserva( _
    precioNoche As Currency, _
    fechaEntrada As Date, _
    fechaSalida As Date) As Currency

    Dim noches As Long

    noches = CalcularNoches(fechaEntrada, fechaSalida)

    CalcularTotalReserva = precioNoche * noches

End Function`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Esta función utiliza otra función que ya creamos.
          De esta manera evitamos repetir el cálculo de noches
          y mantenemos el código organizado.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-7 mb-3">
          C. Procedimiento para limpiar el formulario de reservas
        </h3>

        <p className="leading-relaxed">
          Después de registrar una reserva, podemos limpiar los
          controles para permitir una nueva carga.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Private Sub LimpiarFormularioReserva()

    Me.cboHuesped = Null
    Me.cboHabitacion = Null
    Me.FechaEntrada = Null
    Me.FechaSalida = Null
    Me.CantidadPersonas = Null
    Me.Observaciones = Null

End Sub`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Los nombres de los controles son ilustrativos y deben
          coincidir con los nombres utilizados en el formulario
          real del proyecto.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-7 mb-3">
          D. Utilizar las funciones desde un botón
        </h3>

        <p className="leading-relaxed">
          Podemos combinar las funciones anteriores en un evento
          de botón del formulario de reservas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Private Sub btnCalcularTotal_Click()

    Dim noches As Long
    Dim total As Currency
    Dim precio As Currency

    If IsNull(Me.FechaEntrada) Or IsNull(Me.FechaSalida) Then
        MsgBox "Complete las fechas de la reserva.", vbExclamation
        Exit Sub
    End If

    If IsNull(Me.cboHabitacion) Then
        MsgBox "Seleccione una habitación.", vbExclamation
        Exit Sub
    End If

    precio = Nz(Me.cboHabitacion.Column(3), 0)

    noches = CalcularNoches(Me.FechaEntrada, Me.FechaSalida)

    If noches <= 0 Then
        MsgBox "La fecha de salida debe ser posterior a la entrada.", vbExclamation
        Exit Sub
    End If

    total = CalcularTotalReserva( _
        precio, Me.FechaEntrada, Me.FechaSalida)

    Me.txtTotalReserva = total

    MsgBox "Cantidad de noches: " & noches & vbCrLf & _
           "Total de la reserva: $" & Format(total, "#,##0.00"), _
           vbInformation, "Cálculo de reserva"

End Sub`}
        </pre>

        <div className="border-l-4 border-amber-500 p-5 rounded-lg mt-6">
          <strong className="text-amber-900">
            Importante para implementar el ejemplo
          </strong>
          <p className="mt-2">
            Se supone que el cuadro combinado cboHabitacion tiene
            el precio por noche en su cuarta columna. En Access,
            Column comienza en cero, por lo que Column(3) representa
            la cuarta columna. También se supone que existe un cuadro
            de texto llamado txtTotalReserva. Estos nombres y la
            configuración del cuadro combinado deben adaptarse al
            formulario real.
          </p>
          <p className="mt-2">
            Las funciones públicas de cálculo deben colocarse en un
            módulo estándar para poder reutilizarlas desde distintos
            formularios. El procedimiento que utiliza Me pertenece
            al módulo del formulario de reservas.
          </p>
        </div>
      </section>

      {/* BUENAS PRACTICAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Buenas prácticas al programar
        </h2>

        <ul className="list-disc pl-6 space-y-3 leading-relaxed">
          <li>
            Asignar nombres claros y descriptivos a los procedimientos
            y funciones.
          </li>
          <li>
            Crear bloques de código pequeños, cada uno con una tarea
            específica.
          </li>
          <li>
            Utilizar funciones cuando se necesite obtener un resultado.
          </li>
          <li>
            Utilizar procedimientos para ejecutar acciones.
          </li>
          <li>
            Reutilizar código en lugar de repetir instrucciones.
          </li>
          <li>
            Declarar correctamente los parámetros y los tipos de datos.
          </li>
          <li>
            Comprobar los datos recibidos antes de realizar cálculos
            u operaciones.
          </li>
          <li>
            Organizar las funciones generales en módulos estándar.
          </li>
          <li>
            Agregar comentarios cuando una operación necesite
            explicación.
          </li>
        </ul>
      </section>

      {/* ACTIVIDADES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: Crear un procedimiento
            </h3>
            <p>
              Crear un procedimiento llamado MostrarDatosHotel que
              muestre mediante un cuadro de mensaje el nombre del
              establecimiento, su dirección y un mensaje de bienvenida.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizar Sub y End Sub.</li>
              <li>Ejecutar el procedimiento desde otro procedimiento.</li>
              <li>Modificar el mensaje y volver a probarlo.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: Función para calcular importes
            </h3>
            <p>
              Crear una función llamada CalcularImporte que reciba
              el precio por noche y la cantidad de noches y devuelva
              el importe total.
            </p>
            <p className="mt-3 font-semibold">Probar con los siguientes datos:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>$65.000 durante 4 noches.</li>
              <li>$65.000 durante 2 noches.</li>
              <li>$80.000 durante 7 noches.</li>
            </ul>
            <p className="mt-3">
              Mostrar los resultados mediante Debug.Print o MsgBox.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: Función para calcular noches
            </h3>
            <p>
              Crear una función que reciba una fecha de entrada
              y una fecha de salida y devuelva la cantidad de noches
              de la reserva.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizar DateDiff.</li>
              <li>Verificar que la salida sea posterior a la entrada.</li>
              <li>Devolver cero cuando las fechas no sean válidas.</li>
              <li>Probar con diferentes períodos de estadía.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: Procedimiento con parámetros
            </h3>
            <p>
              Crear un procedimiento llamado MostrarDatosHuesped
              que reciba como parámetros el nombre y el apellido
              de un huésped.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Recibir los datos mediante parámetros.</li>
              <li>Mostrar el nombre completo en un cuadro de mensaje.</li>
              <li>Ejecutar el procedimiento con tres huéspedes diferentes.</li>
              <li>Identificar cuáles son los parámetros y cuáles los argumentos.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: Módulo de funciones del hotel
            </h3>
            <p>
              Crear un módulo estándar llamado modHotel que contenga
              funciones y procedimientos generales para el sistema.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Crear una función para calcular el importe de una reserva.</li>
              <li>Crear una función para calcular la cantidad de noches.</li>
              <li>Crear un procedimiento para mostrar un mensaje de bienvenida.</li>
              <li>Crear un procedimiento que muestre un resumen de una reserva.</li>
              <li>Probar cada bloque de código desde un formulario o procedimiento.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTEGRADORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          11. Actividad integradora: Módulo de gestión de reservas
        </h2>

        <p className="leading-relaxed">
          En esta actividad se deberá organizar parte de la lógica
          del sistema hotelero mediante procedimientos y funciones
          reutilizables.
        </p>

        <div className=" rounded-xl p-6 mt-5">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Proyecto: Automatización de operaciones de reservas
          </h3>

          <p>
            Crear un módulo estándar llamado modReservas y utilizarlo
            desde el formulario de reservas para realizar cálculos
            y operaciones.
          </p>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 1: Funciones
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Crear una función CalcularNoches que reciba dos fechas
              y devuelva la cantidad de noches.
            </li>
            <li>
              Crear una función CalcularTotalReserva que reciba
              el precio por noche y las fechas de entrada y salida.
            </li>
            <li>
              Crear una función CalcularSaldo que reciba el importe
              total de la reserva y los pagos realizados y devuelva
              el saldo pendiente.
            </li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 2: Procedimientos
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Crear un procedimiento para mostrar el resumen de una reserva.
            </li>
            <li>
              Crear un procedimiento para limpiar los controles
              del formulario.
            </li>
            <li>
              Crear un procedimiento para mostrar el resultado
              de los cálculos.
            </li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 3: Integración con Access
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Incorporar las funciones al módulo estándar.
            </li>
            <li>
              Utilizar las funciones desde el formulario de reservas.
            </li>
            <li>
              Crear un botón para calcular el importe total.
            </li>
            <li>
              Crear un botón para mostrar el saldo pendiente.
            </li>
            <li>
              Utilizar un procedimiento para limpiar el formulario
              después de completar una operación.
            </li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 4: Pruebas
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Probar reservas de diferentes cantidades de noches.
            </li>
            <li>
              Comprobar cálculos con distintos precios por habitación.
            </li>
            <li>
              Verificar el cálculo del saldo cuando existen pagos parciales.
            </li>
            <li>
              Comprobar que las fechas inválidas no generen importes incorrectos.
            </li>
          </ul>
        </div>

        <div className="border border-blue-200 rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Entrega del trabajo
          </h3>
          <p>
            Presentar el código del módulo estándar, los procedimientos
            y funciones implementados, el formulario integrado y
            capturas de las pruebas realizadas. Explicar la función
            de cada bloque de código y justificar cuándo se utilizó
            Sub y cuándo Function.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conclusión
        </h2>

        <p className="leading-relaxed">
          Los procedimientos y funciones permiten organizar un
          programa en bloques independientes y reutilizables.
          Gracias a ellos podemos evitar la repetición de código,
          facilitar el mantenimiento y desarrollar aplicaciones
          más ordenadas.
        </p>

        <p className="mt-4 leading-relaxed">
          En nuestro sistema hotelero ya podemos separar las
          operaciones de cálculo, validación y presentación de
          información. En la próxima clase comenzaremos a trabajar
          con las <strong>macros en Microsoft Access</strong>,
          herramientas que permiten automatizar acciones mediante
          una secuencia de instrucciones y eventos.
        </p>
      </section>
    </div>
  );
}
