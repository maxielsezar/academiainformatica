
export default function EstructurasCondicionalesPage() {
  return (
    <div className="space-y-14">
      {/* ENCABEZADO */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Estructuras de control y decisiones
        </h1>

        <p className="text-lg leading-relaxed">
          En programación no todas las instrucciones se ejecutan siempre de
          la misma manera. Muchas veces necesitamos que un programa evalúe
          una condición y, según el resultado, realice una acción u otra.
          En esta clase aprenderemos a utilizar estructuras condicionales
          para incorporar decisiones al sistema de gestión de reservas de
          nuestro hotel.
        </p>
      </section>

      {/* INTRODUCCION */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son las estructuras de control?
        </h2>

        <p className="leading-relaxed mb-4">
          Las estructuras de control son instrucciones que permiten
          modificar el orden en que se ejecuta un programa. Gracias a ellas
          podemos establecer condiciones, tomar decisiones y repetir
          determinadas operaciones.
        </p>

        <p className="leading-relaxed mb-4">
          Una de las estructuras más utilizadas es la estructura condicional.
          Permite evaluar una expresión lógica y ejecutar instrucciones
          diferentes dependiendo de si esa expresión es verdadera o falsa.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo en el sistema hotelero
          </h3>
          <p className="leading-relaxed">
            Cuando un empleado intenta registrar una reserva, el sistema
            debe comprobar si la habitación está disponible. Si está
            disponible, permite continuar. Si está ocupada durante ese
            período, informa que no se puede realizar la reserva.
          </p>
        </div>
      </section>

      {/* OPERADORES RELACIONALES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores relacionales
        </h2>

        <p className="leading-relaxed mb-4">
          Para construir condiciones necesitamos comparar valores. Los
          operadores relacionales permiten establecer relaciones entre
          dos datos y obtener un resultado lógico: verdadero o falso.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="5">
                <th className="border border-blue-200 p-3 text-left">
                  Operador
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Significado
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["=", "Igual que", "cantidadPersonas = 2"],
                ["<>", "Distinto de", "estadoReserva <> Cancelada"],
                [">", "Mayor que", "precioNoche > 50000"],
                ["<", "Menor que", "cantidadPersonas < 4"],
                [">=", "Mayor o igual que", "edad >= 18"],
                ["<=", "Menor o igual que", "capacidad <= 4"],
              ].map(([op, significado, ejemplo]) => (
                <tr key={op}>
                  <td className="border border-blue-200 p-3 font-mono font-bold">
                    {op}
                  </td>
                  <td className="border border-blue-200 p-3">
                    {significado}
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

      {/* OPERADORES LOGICOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores lógicos
        </h2>

        <p className="leading-relaxed mb-4">
          En algunas situaciones necesitamos evaluar más de una condición
          al mismo tiempo. Para ello utilizamos operadores lógicos, que
          permiten combinar expresiones y obtener un resultado final.
        </p>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              AND (Y)
            </h3>
            <p className="leading-relaxed mb-2">
              El resultado es verdadero solamente cuando todas las
              condiciones son verdaderas.
            </p>
            <div className=" rounded-lg p-3 font-mono text-sm">
              habitacionDisponible AND fechasValidas
            </div>
            <p className="text-sm mt-2">
              Para permitir una reserva, ambas condiciones deben cumplirse.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              OR (O)
            </h3>
            <p className="leading-relaxed mb-2">
              El resultado es verdadero cuando al menos una de las
              condiciones es verdadera.
            </p>
            <div className=" rounded-lg p-3 font-mono text-sm">
              metodoPago = "Efectivo" OR metodoPago = "Transferencia"
            </div>
            <p className="text-sm mt-2">
              El sistema acepta cualquiera de esos dos métodos de pago.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              NOT (NO)
            </h3>
            <p className="leading-relaxed mb-2">
              Invierte el resultado de una condición.
            </p>
            <div className=" rounded-lg p-3 font-mono text-sm">
              NOT habitacionDisponible
            </div>
            <p className="text-sm mt-2">
              Permite comprobar que una habitación no está disponible.
            </p>
          </div>
        </div>
      </section>

      {/* IF SIMPLE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura condicional simple: SI
        </h2>

        <p className="leading-relaxed mb-4">
          La estructura condicional simple permite ejecutar una instrucción
          únicamente cuando una condición se cumple. Si la condición es
          falsa, el programa continúa con la siguiente instrucción sin
          ejecutar el bloque condicional.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Sintaxis en pseudocódigo
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Si condicion Entonces

    instrucciones

FinSi`}
          </pre>
        </div>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Ejemplo: verificar la capacidad de una habitación
        </h3>

        <p className="leading-relaxed mb-4">
          El sistema debe comprobar que la cantidad de personas solicitada
          no supere la capacidad máxima de la habitación.
        </p>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Algoritmo VerificarCapacidad

    Definir cantidadPersonas Como Entero
    Definir capacidad Como Entero

    cantidadPersonas <- 3
    capacidad <- 4

    Si cantidadPersonas <= capacidad Entonces
        Escribir "La capacidad es suficiente"
    FinSi

FinAlgoritmo`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          Si la cantidad de personas es menor o igual a la capacidad de
          la habitación, el sistema muestra un mensaje indicando que
          puede continuar.
        </p>
      </section>

      {/* IF ELSE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura condicional doble: SI / SINO
        </h2>

        <p className="leading-relaxed mb-4">
          La estructura SI / SINO permite establecer dos caminos posibles.
          Si la condición es verdadera, se ejecuta un bloque de instrucciones.
          Si es falsa, se ejecuta otro bloque.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Sintaxis en pseudocódigo
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Si condicion Entonces

    instrucciones si es verdadero

Sino

    instrucciones si es falso

FinSi`}
          </pre>
        </div>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Ejemplo: verificar disponibilidad
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Algoritmo VerificarDisponibilidad

    Definir disponible Como Logico

    disponible <- Verdadero

    Si disponible Entonces
        Escribir "Habitacion disponible"
    Sino
        Escribir "Habitacion ocupada"
    FinSi

FinAlgoritmo`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          El sistema evalúa la variable disponible. Según su valor,
          muestra un mensaje diferente al usuario.
        </p>
      </section>

      {/* IF ANIDADO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Condicionales anidados
        </h2>

        <p className="leading-relaxed mb-4">
          Los condicionales anidados son estructuras SI / SINO que se
          encuentran dentro de otras estructuras condicionales. Permiten
          evaluar diferentes situaciones de manera progresiva.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo: validar una reserva
        </h3>

        <p className="leading-relaxed mb-4">
          Antes de registrar una reserva, el sistema debe comprobar que
          las fechas sean correctas y que la habitación esté disponible.
        </p>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Algoritmo ValidarReserva

    Definir fechasValidas Como Logico
    Definir disponible Como Logico

    fechasValidas <- Verdadero
    disponible <- Verdadero

    Si fechasValidas Entonces

        Si disponible Entonces
            Escribir "Reserva autorizada"
        Sino
            Escribir "Habitacion no disponible"
        FinSi

    Sino
        Escribir "Las fechas son incorrectas"
    FinSi

FinAlgoritmo`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          En este ejemplo, la disponibilidad solamente se comprueba cuando
          las fechas son válidas. Esto evita continuar con el proceso si
          los datos ingresados son incorrectos.
        </p>
      </section>

      {/* MULTIPLES CONDICIONES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Selección entre múltiples alternativas
        </h2>

        <p className="leading-relaxed mb-4">
          En algunas situaciones necesitamos evaluar diferentes valores
          de una misma variable. Para ello podemos utilizar una estructura
          de selección múltiple, como Segun en pseudocódigo o Select Case
          en VBA.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo: seleccionar el tipo de habitación
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Algoritmo TipoHabitacion

    Definir tipo Como Entero

    tipo <- 2

    Segun tipo Hacer

        1:
            Escribir "Habitacion individual"

        2:
            Escribir "Habitacion doble"

        3:
            Escribir "Habitacion familiar"

        De Otro Modo:
            Escribir "Tipo de habitacion no valido"

    FinSegun

FinAlgoritmo`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          Si el valor de tipo es 2, el programa informa que se trata
          de una habitación doble. Si recibe un valor no contemplado,
          muestra un mensaje de error.
        </p>
      </section>

      {/* TABLA VERDAD */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tablas de verdad
        </h2>

        <p className="leading-relaxed mb-4">
          Las tablas de verdad permiten analizar los resultados de combinar
          condiciones mediante operadores lógicos.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Operador AND
        </h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3">Condición A</th>
                <th className="border border-blue-200 p-3">Condición B</th>
                <th className="border border-blue-200 p-3">A AND B</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Verdadero", "Verdadero", "Verdadero"],
                ["Verdadero", "Falso", "Falso"],
                ["Falso", "Verdadero", "Falso"],
                ["Falso", "Falso", "Falso"],
              ].map((fila, i) => (
                <tr key={i}>
                  {fila.map((valor, j) => (
                    <td key={j} className="border border-blue-200 p-3 text-center">
                      {valor}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-bold text-blue-900 mb-3">
          Operador OR
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="5">
                <th className="border border-blue-200 p-3">Condición A</th>
                <th className="border border-blue-200 p-3">Condición B</th>
                <th className="border border-blue-200 p-3">A OR B</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Verdadero", "Verdadero", "Verdadero"],
                ["Verdadero", "Falso", "Verdadero"],
                ["Falso", "Verdadero", "Verdadero"],
                ["Falso", "Falso", "Falso"],
              ].map((fila, i) => (
                <tr key={i}>
                  {fila.map((valor, j) => (
                    <td key={j} className="border border-blue-200 p-3 text-center">
                      {valor}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* VBA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructuras condicionales en VBA
        </h2>

        <p className="leading-relaxed mb-4">
          En Microsoft Access podemos utilizar VBA para incorporar
          decisiones a los formularios y automatizar operaciones. La
          estructura If...Then...Else permite ejecutar diferentes
          instrucciones según una condición.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Sintaxis en VBA
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`If condicion Then

    ' Instrucciones si es verdadero

Else

    ' Instrucciones si es falso

End If`}
          </pre>
        </div>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Ejemplo: comprobar la capacidad de una habitación
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Dim cantidadPersonas As Integer
Dim capacidad As Integer

cantidadPersonas = 3
capacidad = 4

If cantidadPersonas <= capacidad Then

    MsgBox "La habitacion tiene capacidad suficiente"

Else

    MsgBox "La cantidad de personas supera la capacidad"

End If`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          El programa compara la cantidad de personas con la capacidad
          máxima. Si se cumple la condición, muestra un mensaje de
          confirmación. En caso contrario, informa el inconveniente.
        </p>
      </section>

      {/* SELECT CASE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Selección múltiple en VBA: Select Case
        </h2>

        <p className="leading-relaxed mb-4">
          Select Case permite evaluar una variable y ejecutar diferentes
          bloques de instrucciones según el valor que tenga. Es una
          alternativa útil cuando existen muchas opciones posibles.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo: identificar el estado de una reserva
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Dim estadoReserva As String

estadoReserva = "Confirmada"

Select Case estadoReserva

    Case "Pendiente"
        MsgBox "La reserva espera confirmacion"

    Case "Confirmada"
        MsgBox "La reserva esta confirmada"

    Case "Cancelada"
        MsgBox "La reserva fue cancelada"

    Case Else
        MsgBox "Estado no reconocido"

End Select`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          Esta estructura permite administrar los diferentes estados
          de las reservas de una manera ordenada y sencilla.
        </p>
      </section>

      {/* IMPLEMENTACION HOTEL */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación práctica: validar una reserva en Access
        </h2>

        <p className="leading-relaxed mb-4">
          Vamos a incorporar las primeras decisiones al formulario de
          reservas del sistema hotelero. Antes de guardar los datos,
          necesitamos comprobar que la cantidad de personas no supere
          la capacidad de la habitación y que las fechas sean correctas.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo de procedimiento VBA
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Private Sub cmdValidarReserva_Click()

    Dim cantidadPersonas As Integer
    Dim capacidad As Integer
    Dim fechaEntrada As Date
    Dim fechaSalida As Date

    cantidadPersonas = Me.CantidadPersonas
    capacidad = Me.cboHabitacion.Column(3)

    fechaEntrada = Me.FechaEntrada
    fechaSalida = Me.FechaSalida

    If cantidadPersonas <= 0 Then

        MsgBox "Ingrese una cantidad de personas valida", vbExclamation
        Exit Sub

    End If

    If cantidadPersonas > capacidad Then

        MsgBox "La habitacion no tiene capacidad suficiente", vbExclamation
        Exit Sub

    End If

    If fechaSalida <= fechaEntrada Then

        MsgBox "La fecha de salida debe ser posterior a la entrada", vbExclamation
        Exit Sub

    End If

    MsgBox "Los datos de la reserva son correctos", vbInformation

End Sub`}
          </pre>
        </div>

        <div className=" border border-blue-200 rounded-xl p-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-2">
            Consideraciones para implementarlo
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              El código debe colocarse en el evento Al hacer clic del
              botón de validación del formulario.
            </li>
            <li>
              Los nombres de los controles deben coincidir con los que
              tenga el formulario.
            </li>
            <li>
              El ejemplo supone que el cuarto campo de la lista desplegable
              cboHabitacion contiene la capacidad de la habitación. El
              índice de Column comienza en cero, por lo que Column(3)
              corresponde al cuarto campo.
            </li>
            <li>
              La validación de disponibilidad y los posibles solapamientos
              de reservas se incorporarán en una etapa posterior.
            </li>
          </ul>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 1: operadores y condiciones
            </h3>
            <p className="leading-relaxed">
              Escribí cinco condiciones que podrían utilizarse en el
              sistema hotelero. Por ejemplo, comprobar que una cantidad
              de personas sea mayor que cero. Indicá qué resultado lógico
              produce cada una utilizando diferentes operadores relacionales.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 2: validar la capacidad
            </h3>
            <p className="leading-relaxed">
              Una habitación tiene capacidad para cuatro personas.
              Diseñá un algoritmo que reciba la cantidad de huéspedes y
              determine si pueden alojarse. Si supera la capacidad,
              debe mostrar un mensaje de advertencia.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 3: calcular descuentos
            </h3>
            <p className="leading-relaxed">
              Diseñá un algoritmo que reciba el importe de una reserva.
              Si el importe es superior a $200.000, debe aplicar un
              descuento del 10%. En caso contrario, debe mantener el
              importe original. El sistema debe mostrar el total final.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 4: administrar estados de reservas
            </h3>
            <p className="leading-relaxed">
              Utilizá una estructura de selección múltiple para evaluar
              los siguientes estados: Pendiente, Confirmada, Cancelada
              y Finalizada. Para cada estado, el programa debe mostrar
              un mensaje diferente.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 5: programar una validación en VBA
            </h3>
            <p className="leading-relaxed">
              Escribí un procedimiento VBA que reciba el importe total
              de una reserva y el importe pagado. Si el pago es igual o
              superior al total, debe informar que la reserva está
              completamente pagada. Si es inferior, debe mostrar el
              saldo pendiente. También debe detectar si el importe
              pagado es negativo.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRADORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: validación inteligente de reservas
        </h2>

        <p className="leading-relaxed mb-4">
          Continuaremos desarrollando el sistema de gestión hotelera.
          En esta actividad vamos a diseñar la lógica necesaria para
          validar los datos antes de registrar una reserva.
        </p>

        <p className="leading-relaxed mb-4">
          El formulario deberá comprobar que todos los datos sean
          correctos y que se cumplan las condiciones necesarias para
          continuar con la operación.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Requerimientos
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Verificar que se haya seleccionado un huésped.
          </li>
          <li>
            Verificar que se haya seleccionado una habitación.
          </li>
          <li>
            Comprobar que la cantidad de personas sea mayor que cero.
          </li>
          <li>
            Comprobar que la cantidad de personas no supere la capacidad
            de la habitación.
          </li>
          <li>
            Verificar que la fecha de entrada sea válida.
          </li>
          <li>
            Verificar que la fecha de salida sea posterior a la fecha
            de entrada.
          </li>
          <li>
            Comprobar que la habitación no tenga otra reserva activa
            que se superponga con el período solicitado.
          </li>
          <li>
            Si todas las condiciones se cumplen, permitir continuar
            con el registro.
          </li>
          <li>
            Si alguna condición falla, mostrar un mensaje indicando
            el problema.
          </li>
        </ol>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Parte 1: diseño del algoritmo
        </h3>

        <p className="leading-relaxed">
          Representá el procedimiento utilizando pseudocódigo y un
          diagrama de flujo. Identificá todas las condiciones y los
          caminos posibles.
        </p>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Parte 2: implementación en VBA
        </h3>

        <p className="leading-relaxed">
          Incorporá las validaciones de huésped, habitación, capacidad
          y fechas en el formulario de reservas. Utilizá estructuras
          If...Then...Else y mensajes para informar los errores.
        </p>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Parte 3: pruebas
        </h3>

        <p className="leading-relaxed mb-3">
          Comprobá el funcionamiento utilizando al menos estas situaciones:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Reserva con todos los datos correctos.</li>
          <li>Reserva sin huésped seleccionado.</li>
          <li>Reserva con una cantidad de personas superior a la capacidad.</li>
          <li>Fecha de salida anterior a la fecha de entrada.</li>
          <li>Habitación con otra reserva que se superpone.</li>
        </ul>

        <div className=" border border-blue-200 rounded-xl p-5 mt-5">
          <p className="font-semibold text-blue-900 mb-2">
            Entrega esperada
          </p>
          <p className="leading-relaxed">
            Un algoritmo completo, su diagrama de flujo, el procedimiento
            VBA incorporado al formulario y un registro de las pruebas
            realizadas. El sistema deberá informar claramente por qué
            una reserva puede o no puede registrarse.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="border-t border-blue-200 pt-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Las estructuras condicionales permiten que un programa tome
          decisiones según los datos que recibe. Mediante operadores
          relacionales y lógicos podemos establecer reglas, validar
          información y controlar diferentes operaciones. En nuestro
          sistema hotelero utilizaremos estas herramientas para evitar
          errores al registrar reservas, administrar pagos y controlar
          la disponibilidad de las habitaciones.
        </p>
      </section>
    </div>
  );
}
