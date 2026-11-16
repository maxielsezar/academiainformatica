
export default function EstructurasRepetitivasPage() {
  return (
    <div className="space-y-14">
      {/* INTRODUCCIÓN */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Estructuras repetitivas
        </h1>

        <p className="text-lg leading-relaxed">
          En programación, muchas veces necesitamos ejecutar una misma
          instrucción varias veces. Por ejemplo, recorrer una lista de
          reservas, contar la cantidad de habitaciones ocupadas, calcular
          el total de pagos registrados o verificar varios registros
          antes de confirmar una operación.
        </p>

        <p className="mt-4 leading-relaxed">
          Para resolver este tipo de situaciones utilizamos las
          <strong> estructuras repetitivas</strong>, también conocidas
          como ciclos o bucles. Estas estructuras permiten repetir un
          conjunto de instrucciones mientras se cumpla una condición
          o durante una cantidad determinada de veces.
        </p>

        <div className=" border-l-4 border-blue-700 p-5 rounded-lg mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Aplicación en nuestro proyecto hotelero
          </h3>
          <p>
            En el sistema de gestión de reservas del hotel utilizaremos
            ciclos para recorrer registros de huéspedes, reservas,
            habitaciones y pagos. De esta manera podremos automatizar
            procesos que, realizados manualmente, serían lentos y
            propensos a errores.
          </p>
        </div>
      </section>

      {/* CONCEPTO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué son las estructuras repetitivas?
        </h2>

        <p className="leading-relaxed">
          Una estructura repetitiva permite ejecutar una o varias
          instrucciones más de una vez. La repetición puede depender
          de una condición lógica o de un número determinado de
          iteraciones.
        </p>

        <p className="mt-4 leading-relaxed">
          Cada repetición del ciclo recibe el nombre de
          <strong> iteración</strong>. En cada iteración se ejecutan
          las instrucciones incluidas dentro del bloque repetitivo.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo: contar cinco reservas
        </h3>

        <p className="leading-relaxed">
          Supongamos que queremos mostrar los números del 1 al 5 para
          identificar cinco reservas. En lugar de escribir cinco
          instrucciones diferentes, podemos utilizar un ciclo.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`INICIO
    PARA contador DESDE 1 HASTA 5 HACER
        MOSTRAR contador
    FIN PARA
FIN`}
        </pre>

        <p className="mt-4 leading-relaxed">
          El ciclo se ejecutará cinco veces. En cada repetición,
          la variable contador tomará un nuevo valor: 1, 2, 3, 4 y 5.
        </p>
      </section>

      {/* PARTES DE UN CICLO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Elementos de una estructura repetitiva
        </h2>

        <p className="leading-relaxed">
          La mayoría de los ciclos utilizan algunos elementos
          fundamentales:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Inicialización</h3>
            <p>
              Establece el valor inicial de una variable que controla
              la repetición.
            </p>
            <code className="block mt-3  p-3 rounded">
              contador = 1
            </code>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Condición</h3>
            <p>
              Determina si el ciclo debe continuar ejecutándose o
              finalizar.
            </p>
            <code className="block mt-3  p-3 rounded">
              contador &lt;= 5
            </code>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Instrucciones</h3>
            <p>
              Son las operaciones que se ejecutan en cada repetición.
            </p>
            <code className="block mt-3  p-3 rounded">
              MOSTRAR contador
            </code>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Actualización</h3>
            <p>
              Modifica la variable de control para avanzar hacia
              la finalización del ciclo.
            </p>
            <code className="block mt-3  p-3 rounded">
              contador = contador + 1
            </code>
          </div>
        </div>

        <div className="border-l-4 border-amber-500 p-5 rounded-lg mt-6">
          <strong className="text-amber-900">Importante:</strong>
          <p className="mt-2">
            Si la variable de control no se actualiza correctamente,
            un ciclo puede repetirse indefinidamente. A esto se lo
            conoce como ciclo infinito.
          </p>
        </div>
      </section>

      {/* PARA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Ciclo PARA (FOR)
        </h2>

        <p className="leading-relaxed">
          El ciclo PARA se utiliza cuando conocemos de antemano
          cuántas veces queremos repetir una instrucción. Es útil
          para recorrer una cantidad determinada de elementos,
          realizar cálculos o generar listados.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo en pseudocódigo
        </h3>

        <p className="leading-relaxed">
          Queremos mostrar los números de habitación del 101 al 105.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`INICIO
    PARA numero DESDE 101 HASTA 105 HACER
        MOSTRAR "Habitación: ", numero
    FIN PARA
FIN`}
        </pre>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ciclo FOR en VBA
        </h3>

        <p className="leading-relaxed">
          En VBA, el ciclo PARA se implementa mediante la instrucción
          <strong> For...Next</strong>.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Private Sub btnMostrarHabitaciones_Click()

    Dim numero As Integer

    For numero = 101 To 105
        Debug.Print "Habitación: " & numero
    Next numero

End Sub`}
        </pre>

        <p className="mt-4 leading-relaxed">
          La instrucción <code>Debug.Print</code> muestra los resultados
          en la ventana Inmediato del editor de VBA. Para abrirla,
          podemos presionar <strong>Ctrl + G</strong> dentro del
          editor.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Utilizar STEP
        </h3>

        <p className="leading-relaxed">
          La instrucción <code>Step</code> permite establecer cuánto
          aumenta o disminuye la variable en cada repetición.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`For numero = 1 To 10 Step 2
    Debug.Print numero
Next numero`}
        </pre>

        <p className="mt-4 leading-relaxed">
          El resultado será 1, 3, 5, 7 y 9. También podemos utilizar
          un paso negativo para realizar una cuenta regresiva.
        </p>
      </section>

      {/* MIENTRAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Ciclo MIENTRAS (WHILE)
        </h2>

        <p className="leading-relaxed">
          El ciclo MIENTRAS permite repetir instrucciones mientras
          una condición sea verdadera. Se utiliza cuando no sabemos
          exactamente cuántas veces se repetirá el proceso.
        </p>

        <p className="mt-4 leading-relaxed">
          La condición se evalúa antes de ejecutar las instrucciones.
          Si es falsa desde el principio, el ciclo no se ejecuta
          ninguna vez.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo en pseudocódigo
        </h3>

        <p className="leading-relaxed">
          Queremos continuar mostrando habitaciones mientras el
          número sea menor o igual a 105.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`INICIO
    numero = 101

    MIENTRAS numero <= 105 HACER
        MOSTRAR "Habitación: ", numero
        numero = numero + 1
    FIN MIENTRAS
FIN`}
        </pre>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ciclo DO WHILE en VBA
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Private Sub btnContarHabitaciones_Click()

    Dim numero As Integer

    numero = 101

    Do While numero <= 105
        Debug.Print "Habitación: " & numero
        numero = numero + 1
    Loop

End Sub`}
        </pre>

        <p className="mt-4 leading-relaxed">
          En este ejemplo, el ciclo se repite mientras la variable
          numero sea menor o igual a 105. En cada vuelta aumenta
          su valor en una unidad.
        </p>
      </section>

      {/* HASTA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Ciclo REPETIR HASTA (DO UNTIL)
        </h2>

        <p className="leading-relaxed">
          El ciclo REPETIR HASTA ejecuta un conjunto de instrucciones
          hasta que una condición se vuelve verdadera. A diferencia
          de MIENTRAS, permite expresar la condición de finalización
          del proceso.
        </p>

        <p className="mt-4 leading-relaxed">
          En VBA podemos utilizar <code>Do Until...Loop</code>.
          Cuando la condición se cumple, el ciclo finaliza.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo en pseudocódigo
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`INICIO
    numero = 101

    REPETIR
        MOSTRAR "Habitación: ", numero
        numero = numero + 1
    HASTA QUE numero > 105
FIN`}
        </pre>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Ejemplo en VBA
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto mt-4">
{`Private Sub btnListarHabitaciones_Click()

    Dim numero As Integer

    numero = 101

    Do Until numero > 105
        Debug.Print "Habitación: " & numero
        numero = numero + 1
    Loop

End Sub`}
        </pre>

        <div className=" rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Diferencia entre WHILE y UNTIL
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Do While:</strong> repite mientras la condición
              sea verdadera.
            </li>
            <li>
              <strong>Do Until:</strong> repite hasta que la condición
              sea verdadera.
            </li>
          </ul>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Comparación de las estructuras repetitivas
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Estructura
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  ¿Cuándo se utiliza?
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  VBA
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  PARA
                </td>
                <td className="border border-blue-200 p-3">
                  Cuando conocemos la cantidad de repeticiones.
                </td>
                <td className="border border-blue-200 p-3">
                  For...Next
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  MIENTRAS
                </td>
                <td className="border border-blue-200 p-3">
                  Mientras una condición sea verdadera.
                </td>
                <td className="border border-blue-200 p-3">
                  Do While...Loop
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-semibold">
                  REPETIR HASTA
                </td>
                <td className="border border-blue-200 p-3">
                  Hasta que una condición se cumpla.
                </td>
                <td className="border border-blue-200 p-3">
                  Do Until...Loop
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5 leading-relaxed">
          También existen las variantes <code>Do...Loop While</code> y
          <code> Do...Loop Until</code>. Estas evalúan la condición al
          final, por lo que ejecutan el bloque al menos una vez.
        </p>
      </section>

      {/* APLICACIÓN HOTEL */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Aplicación en el sistema de gestión hotelera
        </h2>

        <p className="leading-relaxed">
          Las estructuras repetitivas permiten automatizar diferentes
          tareas del sistema que estamos construyendo. Algunos ejemplos
          son:
        </p>

        <div className="space-y-5 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              A. Contar reservas registradas
            </h3>
            <p>
              Recorrer los registros de la tabla Reservas y contabilizar
              cuántas reservas existen.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
{`Dim cantidad As Long
Dim rs As DAO.Recordset

Set rs = CurrentDb.OpenRecordset("Reservas")

cantidad = 0

Do While Not rs.EOF
    cantidad = cantidad + 1
    rs.MoveNext
Loop

Debug.Print "Total de reservas: " & cantidad

rs.Close
Set rs = Nothing`}
            </pre>
            <p className="text-sm mt-3 text-blue-800">
              El recordset permite recorrer registros de una tabla.
              EOF indica que se llegó al final de los registros.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              B. Calcular el total de pagos
            </h3>
            <p>
              Recorrer la tabla Pagos y sumar los importes de los
              pagos registrados.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
{`Dim totalPagos As Currency
Dim rs As DAO.Recordset

totalPagos = 0

Set rs = CurrentDb.OpenRecordset( _
    "SELECT Importe FROM Pagos WHERE EstadoPago = 'Pagado'")

Do While Not rs.EOF
    totalPagos = totalPagos + Nz(rs!Importe, 0)
    rs.MoveNext
Loop

Debug.Print "Total cobrado: " & totalPagos

rs.Close
Set rs = Nothing`}
            </pre>
            <p className="text-sm mt-3 text-blue-800">
              La función Nz evita que un valor nulo impida realizar
              la suma. El ejemplo considera los pagos cuyo estado
              sea Pagado.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              C. Recorrer las habitaciones
            </h3>
            <p>
              Consultar los registros de Habitaciones para contar
              cuántas se encuentran disponibles.
            </p>
            <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
{`Dim disponibles As Long
Dim rs As DAO.Recordset

disponibles = 0

Set rs = CurrentDb.OpenRecordset( _
    "SELECT Estado FROM Habitaciones")

Do While Not rs.EOF

    If rs!Estado = "Disponible" Then
        disponibles = disponibles + 1
    End If

    rs.MoveNext
Loop

Debug.Print "Habitaciones disponibles: " & disponibles

rs.Close
Set rs = Nothing`}
            </pre>
            <p className="text-sm mt-3 text-blue-800">
              El valor "Disponible" debe coincidir con los valores
              utilizados en el campo Estado de la tabla Habitaciones.
            </p>
          </div>
        </div>

        <div className="border-l-4 border-amber-500 p-5 rounded-lg mt-6">
          <strong className="text-amber-900">
            Consideraciones para trabajar con DAO
          </strong>
          <p className="mt-2">
            Los ejemplos utilizan DAO.Recordset y requieren que la
            biblioteca de objetos de Microsoft Access Database Engine
            esté disponible en el proyecto. Para ejecutarlos, se debe
            comprobar que los nombres de las tablas y campos coincidan
            exactamente con la base de datos del hotel.
          </p>
        </div>
      </section>

      {/* BUENAS PRÁCTICAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Buenas prácticas al utilizar ciclos
        </h2>

        <ul className="list-disc pl-6 space-y-3 leading-relaxed">
          <li>
            Inicializar correctamente las variables antes de comenzar
            una repetición.
          </li>
          <li>
            Verificar que la condición permita finalizar el ciclo.
          </li>
          <li>
            Actualizar la variable de control cuando corresponda.
          </li>
          <li>
            Cerrar los recordsets después de utilizarlos.
          </li>
          <li>
            Evitar recorrer registros innecesariamente cuando una
            consulta SQL puede resolver el cálculo de manera más
            sencilla.
          </li>
          <li>
            Probar los ciclos con pocos registros antes de utilizarlos
            con grandes cantidades de información.
          </li>
        </ul>
      </section>

      {/* ACTIVIDADES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: Contador de habitaciones
            </h3>
            <p>
              Crear un algoritmo que utilice un ciclo PARA para
              mostrar los números de las habitaciones desde la 101
              hasta la 110.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Escribir el pseudocódigo.</li>
              <li>Implementar el algoritmo con For...Next en VBA.</li>
              <li>Modificar el ciclo para mostrar solo números pares.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: Contador de reservas
            </h3>
            <p>
              Diseñar un algoritmo que reciba una cantidad de reservas
              y muestre un mensaje por cada una de ellas.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizar un ciclo MIENTRAS.</li>
              <li>Controlar la cantidad de repeticiones.</li>
              <li>Identificar qué variable permite finalizar el ciclo.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: Suma de pagos
            </h3>
            <p>
              Crear un algoritmo que permita ingresar los importes
              de cinco pagos y calcular el total recaudado.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizar un ciclo PARA.</li>
              <li>Declarar una variable acumuladora.</li>
              <li>Mostrar el total al finalizar.</li>
              <li>Implementar la solución en VBA.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: Verificación de habitaciones
            </h3>
            <p>
              Crear un algoritmo que solicite el estado de diferentes
              habitaciones y continúe mientras el usuario no ingrese
              la palabra "FIN".
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizar un ciclo MIENTRAS o REPETIR HASTA.</li>
              <li>Contabilizar las habitaciones disponibles.</li>
              <li>Contabilizar las habitaciones ocupadas.</li>
              <li>Mostrar ambos resultados al finalizar.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: Recorrido de registros en Access
            </h3>
            <p>
              Trabajar con la tabla Habitaciones de la base de datos
              del hotel.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Crear un procedimiento VBA que abra un Recordset.</li>
              <li>Recorrer todos los registros con Do While.</li>
              <li>Mostrar el número y tipo de cada habitación.</li>
              <li>Contabilizar la cantidad total de habitaciones.</li>
              <li>Cerrar correctamente el Recordset.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INTEGRADORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Actividad integradora: Procesamiento de información del hotel
        </h2>

        <p className="leading-relaxed">
          En esta actividad se deberán aplicar las estructuras
          repetitivas para desarrollar una funcionalidad de
          procesamiento de información dentro del sistema de
          gestión hotelera.
        </p>

        <div className=" rounded-xl p-6 mt-5">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Proyecto: Resumen general del hotel
          </h3>

          <p className="leading-relaxed">
            Desarrollar un procedimiento que recorra las tablas
            Habitaciones, Reservas y Pagos para obtener un resumen
            de la actividad del establecimiento.
          </p>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 1: Procesamiento de habitaciones
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Recorrer todos los registros de Habitaciones.</li>
            <li>Contar la cantidad total de habitaciones.</li>
            <li>Contar cuántas están disponibles.</li>
            <li>Contar cuántas están ocupadas.</li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 2: Procesamiento de reservas
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Recorrer todos los registros de Reservas.</li>
            <li>Contar la cantidad total de reservas.</li>
            <li>Contabilizar las reservas confirmadas.</li>
            <li>Contabilizar las reservas canceladas.</li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 3: Procesamiento de pagos
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Recorrer los registros de Pagos.</li>
            <li>Sumar los importes de los pagos realizados.</li>
            <li>Contar los pagos pendientes.</li>
            <li>Calcular el total recaudado.</li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Parte 4: Presentación de resultados
          </h4>
          <p>
            Mostrar un resumen en la ventana Inmediato o mediante
            cuadros de mensaje. El resumen deberá incluir:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Total de habitaciones.</li>
            <li>Habitaciones disponibles y ocupadas.</li>
            <li>Total de reservas confirmadas y canceladas.</li>
            <li>Total de pagos realizados y pendientes.</li>
            <li>Importe total recaudado.</li>
          </ul>

          <h4 className="font-bold text-blue-900 mt-5 mb-2">
            Requisitos técnicos
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Utilizar al menos dos tipos de estructuras repetitivas.</li>
            <li>Declarar correctamente las variables y acumuladores.</li>
            <li>Utilizar estructuras condicionales dentro de los ciclos.</li>
            <li>Trabajar con Recordset de DAO.</li>
            <li>Cerrar los objetos utilizados al finalizar.</li>
            <li>Comprobar el resultado con datos de prueba.</li>
          </ul>
        </div>

        <div className="border border-blue-200 rounded-xl p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Entrega del trabajo
          </h3>
          <p>
            Presentar el pseudocódigo de la solución, el procedimiento
            VBA implementado en Access y una captura de pantalla con
            los resultados obtenidos. Explicar qué estructuras
            repetitivas se utilizaron y por qué fueron seleccionadas.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conclusión
        </h2>

        <p className="leading-relaxed">
          Las estructuras repetitivas permiten automatizar tareas
          que requieren procesar múltiples datos. En nuestro sistema
          hotelero serán fundamentales para recorrer registros,
          realizar cálculos, generar estadísticas y procesar
          información de reservas, habitaciones y pagos.
        </p>

        <p className="mt-4 leading-relaxed">
          En la próxima clase estudiaremos los
          <strong> procedimientos y funciones</strong>, herramientas
          que permiten organizar el código en bloques reutilizables,
          facilitando el mantenimiento y la ampliación del sistema
          de gestión hotelera.
        </p>
      </section>
    </div>
  );
}
