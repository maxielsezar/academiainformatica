export default function FuncionesLogicasPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones Lógicas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones lógicas permiten analizar datos y tomar decisiones
          automáticamente dentro de una planilla de cálculo. A partir de una
          condición, la planilla puede determinar si una situación se cumple o
          no y mostrar un resultado determinado.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Son especialmente útiles para clasificar información, verificar
          condiciones, controlar datos y automatizar decisiones en tareas
          administrativas.
        </p>
      </section>

      {/* Condiciones lógicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una condición lógica?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Una condición lógica compara uno o varios valores y determina si una
          afirmación es verdadera o falsa.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>Algunos ejemplos de condiciones son:</p>

          <ul className="list-disc list-inside space-y-3">
            <li>El importe es mayor que 10.000.</li>
            <li>La cantidad es igual a 50.</li>
            <li>El estado es "Pendiente".</li>
            <li>El total es menor o igual a 5.000.</li>
          </ul>

          <p>
            Para realizar estas comparaciones se utilizan operadores lógicos.
          </p>
        </div>
      </section>

      {/* Operadores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Operadores de comparación
        </h2>

        <div className="border p-6 rounded-xl overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-3 text-left">Operador</th>
                <th className="border p-3 text-left">Significado</th>
                <th className="border p-3 text-left">Ejemplo</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">=</td>
                <td className="border p-3">Igual a</td>
                <td className="border p-3">A1=100</td>
              </tr>

              <tr>
                <td className="border p-3">&gt;</td>
                <td className="border p-3">Mayor que</td>
                <td className="border p-3">A1&gt;100</td>
              </tr>

              <tr>
                <td className="border p-3">&lt;</td>
                <td className="border p-3">Menor que</td>
                <td className="border p-3">A1&lt;100</td>
              </tr>

              <tr>
                <td className="border p-3">&gt;=</td>
                <td className="border p-3">Mayor o igual que</td>
                <td className="border p-3">A1&gt;=100</td>
              </tr>

              <tr>
                <td className="border p-3">&lt;=</td>
                <td className="border p-3">Menor o igual que</td>
                <td className="border p-3">A1&lt;=100</td>
              </tr>

              <tr>
                <td className="border p-3">&lt;&gt;</td>
                <td className="border p-3">Distinto de</td>
                <td className="border p-3">A1&lt;&gt;100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SI */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Función SI
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>SI</strong> permite comprobar una condición y
          devolver un resultado si la condición es verdadera y otro resultado
          si es falsa.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>Su estructura básica es:</p>

          <pre className="p-4 rounded-lg overflow-x-auto">
            =SI(condición;valor_si_verdadero;valor_si_falso)
          </pre>

          <p>Por ejemplo:</p>

          <pre className="p-4 rounded-lg overflow-x-auto">
            =SI(A2&gt;=60;"Aprobado";"Desaprobado")
          </pre>

          <p>
            Si A2 contiene 60 o más, la fórmula mostrará "Aprobado". Si el
            valor es menor que 60, mostrará "Desaprobado".
          </p>
        </div>
      </section>

      {/* SI administrativo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          SI aplicado a tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función SI puede utilizarse para clasificar automáticamente
          registros según una determinada condición.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <p>
            Por ejemplo, para determinar si una factura está vencida:
          </p>

          <pre className="p-4 rounded-lg overflow-x-auto">
            =SI(B2&lt;HOY();"Vencida";"Vigente")
          </pre>

          <p>
            De esta manera, la planilla puede identificar automáticamente el
            estado de cada registro.
          </p>
        </div>
      </section>

      {/* Y */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Función Y
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>Y</strong> permite comprobar varias condiciones al
          mismo tiempo. Devuelve VERDADERO únicamente cuando todas las
          condiciones se cumplen.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className="p-4 rounded-lg overflow-x-auto">
            =Y(A2&gt;=18;B2="Activo")
          </pre>

          <p>
            En este ejemplo, ambas condiciones deben cumplirse para obtener el
            resultado VERDADERO.
          </p>
        </div>
      </section>

      {/* O */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Función O
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La función <strong>O</strong> permite comprobar varias condiciones y
          devuelve VERDADERO cuando al menos una de ellas se cumple.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className="p-4 rounded-lg overflow-x-auto">
            =O(A2="Pendiente";A2="Vencida")
          </pre>

          <p>
            El resultado será VERDADERO si el estado es "Pendiente" o
            "Vencida".
          </p>
        </div>
      </section>

      {/* SI + Y */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar SI con Y
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las funciones lógicas pueden combinarse para tomar decisiones que
          dependan de varias condiciones.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className="p-4 rounded-lg overflow-x-auto">
            =SI(Y(B2&gt;=10000;C2="Activo");"Beneficio";"Sin beneficio")
          </pre>

          <p>
            En este ejemplo, el registro debe tener un importe igual o superior
            a 10.000 y además encontrarse en estado "Activo".
          </p>
        </div>
      </section>

      {/* SI + O */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar SI con O
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          También es posible utilizar <strong>SI</strong> junto con
          <strong> O</strong> cuando una situación puede cumplirse de
          diferentes maneras.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className="p-4 rounded-lg overflow-x-auto">
            =SI(O(B2="Urgente";B2="Prioritario");"Atender";"Normal")
          </pre>

          <p>
            La fórmula mostrará "Atender" cuando el registro sea urgente o
            prioritario.
          </p>
        </div>
      </section>

      {/* SI anidado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones SI anidadas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Es posible utilizar una función SI dentro de otra función SI para
          clasificar información en diferentes categorías.
        </p>

        <div className="border p-6 rounded-xl space-y-4">
          <pre className="p-4 rounded-lg overflow-x-auto">
            =SI(A2&gt;=90;"Excelente";SI(A2&gt;=60;"Aprobado";"Desaprobado"))
          </pre>

          <p>
            En este ejemplo se establecen tres posibles resultados según el
            valor almacenado en A2.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Las funciones lógicas permiten automatizar decisiones que
          habitualmente se realizan al revisar planillas administrativas.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Identificar facturas vencidas.</li>
          <li>Clasificar clientes.</li>
          <li>Determinar si una venta cumple determinados requisitos.</li>
          <li>Identificar productos con bajo stock.</li>
          <li>Determinar si corresponde un descuento.</li>
          <li>Clasificar registros según su estado.</li>
          <li>Detectar operaciones que requieren atención.</li>
          <li>Automatizar controles administrativos.</li>
        </ul>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: control de stock
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una empresa necesita controlar el stock de sus productos. Si la
          cantidad disponible es menor o igual a 10 unidades, se debe mostrar
          un aviso.
        </p>

        <div className="border p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Producto</th>
                  <th className="border p-3 text-left">Stock</th>
                  <th className="border p-3 text-left">Estado</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Producto A</td>
                  <td className="border p-3">8</td>
                  <td className="border p-3">
                    =SI(B2&lt;=10;"Reponer";"Stock suficiente")
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Producto B</td>
                  <td className="border p-3">35</td>
                  <td className="border p-3">
                    =SI(B3&lt;=10;"Reponer";"Stock suficiente")
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="leading-relaxed mt-6">
            Al copiar la fórmula hacia las demás filas, cada producto será
            evaluado automáticamente.
          </p>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Definir claramente la condición que se desea evaluar.
          </li>
          <li>
            Utilizar operadores de comparación adecuados.
          </li>
          <li>
            Comprobar tanto el resultado verdadero como el resultado falso.
          </li>
          <li>
            Utilizar Y cuando todas las condiciones deben cumplirse.
          </li>
          <li>
            Utilizar O cuando alcanza con que se cumpla una condición.
          </li>
          <li>
            Evitar fórmulas excesivamente complejas cuando puedan resolverse
            mediante varias columnas auxiliares.
          </li>
          <li>
            Probar las fórmulas con diferentes valores antes de utilizarlas en
            una planilla definitiva.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Clasificación con SI
            </h3>

            <p className="leading-relaxed">
              Crear una planilla con nombres de empleados y cantidad de horas
              trabajadas. Utilizar SI para indicar "Cumple" cuando las horas
              sean iguales o superiores a un valor determinado y "No cumple"
              en caso contrario.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Control de stock
            </h3>

            <p className="leading-relaxed">
              Crear una lista de productos con sus cantidades disponibles.
              Utilizar SI para mostrar "Reponer" cuando el stock sea igual o
              inferior a 10 unidades.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Utilizar Y
            </h3>

            <p className="leading-relaxed">
              Crear una tabla de clientes y establecer dos condiciones para
              acceder a un beneficio. Utilizar Y para determinar si ambas
              condiciones se cumplen.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Utilizar O
            </h3>

            <p className="leading-relaxed">
              Crear una planilla de solicitudes administrativas. Utilizar O
              para identificar aquellas solicitudes que sean "Urgentes" o
              "Prioritarias".
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Combinar funciones
            </h3>

            <p className="leading-relaxed">
              Crear una planilla de ventas y utilizar SI combinado con Y u O
              para determinar automáticamente si una operación puede recibir
              un beneficio según diferentes condiciones.
            </p>
          </div>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          Crear una planilla para gestionar las ventas y el stock de un
          pequeño comercio. La planilla deberá analizar automáticamente la
          información y mostrar diferentes avisos según los datos registrados.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Utilizar SI para determinar si el stock requiere reposición.
          </li>
          <li>
            Utilizar Y para evaluar dos o más condiciones simultáneamente.
          </li>
          <li>
            Utilizar O para evaluar situaciones alternativas.
          </li>
          <li>
            Utilizar operadores de comparación.
          </li>
          <li>
            Crear al menos una condición con SI anidado.
          </li>
          <li>
            Presentar los resultados de forma clara y organizada.
          </li>
          <li>
            Probar la planilla modificando los valores para comprobar que las
            decisiones se actualicen automáticamente.
          </li>
        </ul>
      </section>

    </div>
  );
}