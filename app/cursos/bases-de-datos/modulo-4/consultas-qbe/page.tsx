
export default function ConsultasQBEPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Consultas mediante QBE
        </h1>

        <p className="text-lg leading-relaxed">
          En una base de datos, las consultas permiten recuperar información
          específica almacenada en las tablas. A través de ellas podemos
          buscar registros, aplicar filtros, ordenar resultados y combinar
          información de diferentes tablas.
        </p>

        <p className="leading-relaxed mt-4">
          Microsoft Access ofrece una herramienta visual denominada QBE
          (Query By Example), que permite construir consultas indicando qué
          campos queremos mostrar y qué condiciones deben cumplir los datos,
          sin necesidad de escribir directamente instrucciones SQL.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué es una consulta?
        </h2>

        <p className="leading-relaxed">
          Una consulta es un objeto de una base de datos que permite obtener
          información a partir de una o varias tablas. En lugar de revisar
          todos los registros manualmente, podemos solicitarle a Access que
          muestre únicamente aquellos que cumplen determinadas condiciones.
        </p>

        <p className="leading-relaxed mt-4">
          Por ejemplo, en el sistema de gestión hotelera podemos utilizar
          consultas para:
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Consultar todas las reservas registradas.</li>
          <li>Buscar reservas confirmadas.</li>
          <li>Encontrar las reservas de un huésped determinado.</li>
          <li>Consultar las reservas realizadas durante un período.</li>
          <li>Mostrar las habitaciones disponibles.</li>
          <li>Obtener información de reservas, huéspedes y habitaciones en una misma consulta.</li>
          <li>Calcular importes estimados de las reservas.</li>
        </ul>

        <div className=" border-l-4 border-blue-700 p-4 mt-6 rounded">
          <p className="font-semibold text-blue-900">
            Ejemplo del sistema hotelero
          </p>
          <p className="mt-2">
            El encargado del hotel necesita conocer todas las reservas
            confirmadas que tienen fecha de entrada durante el mes de
            diciembre. En lugar de revisar la tabla completa de reservas,
            puede crear una consulta que filtre automáticamente los registros
            correspondientes.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. ¿Qué significa QBE?
        </h2>

        <p className="leading-relaxed">
          QBE significa Query By Example, que se traduce como consulta por
          ejemplo. Es una modalidad de construcción de consultas en la que
          el usuario indica visualmente qué información necesita y qué
          condiciones deben cumplirse.
        </p>

        <p className="leading-relaxed mt-4">
          En Microsoft Access, QBE se utiliza desde la Vista Diseño de una
          consulta. La herramienta presenta una cuadrícula donde se pueden
          seleccionar campos, establecer criterios, definir ordenamientos y
          decidir qué información aparecerá en el resultado.
        </p>

        <p className="leading-relaxed mt-4">
          Access interpreta las indicaciones realizadas en la cuadrícula y
          genera internamente la instrucción SQL correspondiente. Por eso,
          QBE y SQL están relacionados, pero no son lo mismo: QBE es una
          interfaz visual y SQL es un lenguaje utilizado para consultar y
          manipular bases de datos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. El entorno de diseño de consultas
        </h2>

        <p className="leading-relaxed">
          Para crear una consulta mediante QBE debemos utilizar la Vista
          Diseño de Access. Esta vista se divide en dos sectores principales:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-3">
              Sector superior
            </h3>
            <p>
              Contiene las tablas y consultas que se incorporan al diseño.
              También permite visualizar las relaciones entre ellas.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-3">
              Cuadrícula inferior
            </h3>
            <p>
              Permite seleccionar los campos que se utilizarán, establecer
              criterios, ordenar los resultados y decidir qué columnas se
              mostrarán.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Columnas de la cuadrícula QBE
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Fila</th>
                <th className="border border-blue-200 p-3 text-left">Función</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">Campo</td>
                <td className="border p-3">
                  Indica el campo que se utilizará en la consulta.
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Tabla</td>
                <td className="border p-3">
                  Identifica la tabla de origen del campo seleccionado.
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Orden</td>
                <td className="border p-3">
                  Permite ordenar los resultados de forma ascendente o
                  descendente.
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Mostrar</td>
                <td className="border p-3">
                  Determina si el campo aparecerá en los resultados.
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Criterios</td>
                <td className="border p-3">
                  Establece las condiciones que deben cumplir los registros.
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">O</td>
                <td className="border p-3">
                  Permite agregar condiciones alternativas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Crear una consulta de selección
        </h2>

        <p className="leading-relaxed">
          Las consultas de selección permiten recuperar y visualizar
          información sin modificar los registros originales de las tablas.
          Son las consultas más utilizadas para buscar, filtrar y organizar
          información.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Procedimiento para crear una consulta
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>Abrir la base de datos del sistema de gestión hotelera.</li>
          <li>Ingresar en la pestaña <strong>Crear</strong> de la cinta de opciones.</li>
          <li>Seleccionar <strong>Diseño de consulta</strong>.</li>
          <li>Agregar la tabla que contiene los datos que necesitamos.</li>
          <li>Incorporar los campos que queremos consultar.</li>
          <li>Establecer criterios u ordenamientos si son necesarios.</li>
          <li>Presionar el botón <strong>Ejecutar</strong>, identificado con un signo de exclamación rojo.</li>
          <li>Guardar la consulta con un nombre descriptivo.</li>
        </ol>

        <div className=" rounded-lg p-5 mt-6">
          <p className="font-bold text-blue-900 mb-2">
            Ejemplo: consultar todas las reservas
          </p>
          <p>
            Queremos obtener el listado de reservas registradas en el hotel,
            mostrando su identificador, huésped, habitación, fecha de entrada,
            fecha de salida y estado.
          </p>
          <p className="mt-3">
            Para ello, agregamos la tabla Reservas y seleccionamos los campos
            necesarios. Al ejecutar la consulta, Access mostrará los registros
            que contiene la tabla.
          </p>
          <p className="mt-3 font-semibold">
            Nombre sugerido: qryListadoReservas.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Criterios de búsqueda y filtrado
        </h2>

        <p className="leading-relaxed">
          Los criterios permiten limitar los resultados de una consulta.
          Se escriben en la fila Criterios de la cuadrícula QBE y pueden
          utilizar valores específicos, operadores de comparación o
          expresiones.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Criterios de texto
        </h3>

        <p>
          Permiten buscar registros que contengan un determinado valor en un
          campo de tipo texto.
        </p>

        <div className=" rounded-lg p-4 mt-4">
          <p className="font-semibold text-blue-900">Ejemplo</p>
          <p className="mt-2">
            Queremos consultar únicamente las reservas confirmadas. En la
            columna EstadoReserva escribimos:
          </p>
          <code className="block  border rounded p-3 mt-2 text-blue-900">
            "Confirmada"
          </code>
          <p className="mt-2">
            Access mostrará las reservas cuyo estado coincida con ese valor.
            El texto debe corresponder con los valores realmente utilizados
            en la tabla.
          </p>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Criterios numéricos
        </h3>

        <p>
          Permiten establecer condiciones utilizando operadores de
          comparación.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border p-3 text-left">Operador</th>
                <th className="border p-3 text-left">Significado</th>
                <th className="border p-3 text-left">Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">=</td>
                <td className="border p-3">Igual a</td>
                <td className="border p-3">= 2</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold"> &gt; </td>
                <td className="border p-3">Mayor que</td>
                <td className="border p-3"> &gt; 2 </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold"> &lt; </td>
                <td className="border p-3">Menor que</td>
                <td className="border p-3"> &lt; 5 </td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">&gt;=</td>
                <td className="border p-3">Mayor o igual que</td>
                <td className="border p-3">&gt;= 2</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">&lt;=</td>
                <td className="border p-3">Menor o igual que</td>
                <td className="border p-3">&lt;= 4</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">&lt;&gt;</td>
                <td className="border p-3">Distinto de</td>
                <td className="border p-3">&lt;&gt; 0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Por ejemplo, si queremos consultar habitaciones con capacidad para
          más de dos personas, escribimos <strong>&gt;2</strong> en la fila
          Criterios del campo Capacidad.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Criterios con fechas
        </h3>

        <p>
          También podemos filtrar registros utilizando campos de tipo fecha.
          Por ejemplo, para consultar las reservas cuya fecha de entrada sea
          posterior al 1 de diciembre de 2026, podemos utilizar el criterio:
        </p>

        <code className="block  p-3 rounded mt-3 text-blue-900">
          &gt; #01/12/2026#
        </code>

        <p className="mt-3">
          Access utiliza el símbolo # para delimitar valores de fecha
          constantes en sus expresiones. El formato de fecha debe interpretarse
          correctamente según la configuración regional del equipo.
        </p>

        <p className="mt-3">
          También podemos utilizar el operador Between para buscar registros
          comprendidos entre dos fechas:
        </p>

        <code className="block  p-3 rounded mt-3 text-blue-900">
          Between #01/12/2026# And #31/12/2026#
        </code>

        <p className="mt-3">
          Este criterio permite consultar las reservas cuya fecha de entrada
          se encuentre dentro del período indicado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Uso de comodines y búsquedas parciales
        </h2>

        <p className="leading-relaxed">
          En ocasiones no conocemos el valor completo que queremos buscar.
          Access permite utilizar el operador Like y comodines para encontrar
          coincidencias parciales.
        </p>

        <p className="leading-relaxed mt-4">
          En la configuración habitual de Access, el asterisco representa
          una cantidad variable de caracteres y el signo de interrogación
          representa un único carácter.
        </p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border p-3 text-left">Criterio</th>
                <th className="border p-3 text-left">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">
                  Like "Gar*"
                </td>
                <td className="border p-3">
                  Busca textos que comiencen con Gar.
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Like "*García*"
                </td>
                <td className="border p-3">
                  Busca textos que contengan García.
                </td>
              </tr>
              <tr>
                <td className="border p-3">
                  Like "Mar?"
                </td>
                <td className="border p-3">
                  Busca textos de cuatro caracteres que comiencen con Mar.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" rounded-lg p-5 mt-6">
          <p className="font-bold text-blue-900">
            Aplicación en el hotel
          </p>
          <p className="mt-2">
            Si el encargado necesita encontrar a un huésped cuyo apellido
            contiene la palabra García, puede agregar el campo Apellido a la
            consulta y escribir:
          </p>
          <code className="block  p-3 rounded mt-3">
            Like "*García*"
          </code>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Condiciones AND y OR
        </h2>

        <p className="leading-relaxed">
          QBE permite combinar diferentes criterios para obtener resultados
          más precisos. Las condiciones pueden relacionarse mediante los
          operadores lógicos AND (Y) y OR (O).
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Condición AND
        </h3>

        <p>
          Se utiliza cuando queremos que se cumplan todas las condiciones
          establecidas. En la cuadrícula QBE, los criterios ubicados en una
          misma fila se combinan mediante AND.
        </p>

        <div className=" p-4 rounded-lg mt-3">
          <p className="font-semibold text-blue-900">Ejemplo</p>
          <p className="mt-2">
            Consultar las reservas confirmadas cuya fecha de entrada sea
            posterior al 1 de diciembre de 2026.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>EstadoReserva: "Confirmada"</li>
            <li>FechaEntrada: &gt; #01/12/2026#</li>
          </ul>
          <p className="mt-2">
            Ambas condiciones deben cumplirse para que el registro aparezca.
          </p>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Condición OR
        </h3>

        <p>
          Se utiliza cuando queremos que se cumpla al menos una de las
          condiciones. En QBE, las condiciones ubicadas en filas diferentes
          se combinan mediante OR.
        </p>

        <div className=" p-4 rounded-lg mt-3">
          <p className="font-semibold text-blue-900">Ejemplo</p>
          <p className="mt-2">
            Consultar las reservas que estén confirmadas o pendientes.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Fila Criterios: "Confirmada"</li>
            <li>Fila O: "Pendiente"</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Ordenar los resultados
        </h2>

        <p className="leading-relaxed">
          Además de filtrar información, podemos organizar los resultados
          de una consulta mediante la fila Orden de la cuadrícula QBE.
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Ascendente:</strong> organiza los valores de menor a
            mayor, de A a Z o de la fecha más antigua a la más reciente.
          </li>
          <li>
            <strong>Descendente:</strong> organiza los valores de mayor a
            menor, de Z a A o de la fecha más reciente a la más antigua.
          </li>
        </ul>

        <div className=" p-4 rounded-lg mt-5">
          <p className="font-semibold text-blue-900">
            Ejemplo: ordenar reservas por fecha
          </p>
          <p className="mt-2">
            Si queremos mostrar primero las reservas más recientes,
            seleccionamos el campo FechaReserva y establecemos el orden
            Descendente.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Consultas con varias tablas
        </h2>

        <p className="leading-relaxed">
          Una de las principales ventajas de las consultas es que permiten
          combinar información almacenada en diferentes tablas.
        </p>

        <p className="leading-relaxed mt-4">
          En el sistema hotelero, la tabla Reservas contiene identificadores
          que permiten relacionar cada reserva con el huésped y la habitación
          correspondientes.
        </p>

        <p className="leading-relaxed mt-4">
          Para obtener un listado completo podemos agregar las tablas
          Reservas, Huéspedes y Habitaciones al diseño de la consulta.
          Access utilizará las relaciones definidas entre sus campos
          correspondientes:
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Reservas.IdHuesped con Huéspedes.IdHuesped.</li>
          <li>Reservas.IdHabitacion con Habitaciones.IdHabitacion.</li>
        </ul>

        <div className="border border-blue-200 rounded-lg p-5 mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo de consulta combinada
          </h3>
          <p>
            Queremos obtener un listado de reservas que incluya:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>IdReserva.</li>
            <li>Nombre y apellido del huésped.</li>
            <li>Número de habitación.</li>
            <li>Fecha de entrada y salida.</li>
            <li>Estado de la reserva.</li>
            <li>Precio por noche.</li>
          </ul>
          <p className="mt-3">
            Para lograrlo, seleccionamos los campos de las tres tablas
            correspondientes y ejecutamos la consulta.
          </p>
          <p className="font-semibold text-blue-900 mt-3">
            Nombre sugerido: qryReservasDetalle.
          </p>
        </div>

        <p className="leading-relaxed mt-5">
          Es importante que las relaciones entre las tablas estén correctamente
          definidas. Si no existen relaciones o las uniones no son correctas,
          Access puede mostrar registros duplicados o combinaciones de datos
          que no corresponden.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Consultas con parámetros
        </h2>

        <p className="leading-relaxed">
          Una consulta con parámetros solicita al usuario un dato cada vez
          que se ejecuta. De esta manera, no es necesario modificar el
          diseño de la consulta para buscar diferentes valores.
        </p>

        <p className="leading-relaxed mt-4">
          Por ejemplo, podemos crear una consulta que permita ingresar el
          apellido del huésped que deseamos encontrar.
        </p>

        <div className=" rounded-lg p-5 mt-5">
          <p className="font-bold text-blue-900">
            Ejemplo: buscar reservas por apellido
          </p>
          <ol className="list-decimal pl-6 mt-3 space-y-2">
            <li>Agregar las tablas Reservas y Huéspedes.</li>
            <li>Seleccionar los campos necesarios para el listado.</li>
            <li>Incorporar el campo Apellido.</li>
            <li>En la fila Criterios escribir el siguiente parámetro:</li>
          </ol>
          <code className="block  rounded p-3 mt-3">
            [Ingrese el apellido:]
          </code>
          <p className="mt-3">
            Al ejecutar la consulta, Access solicitará que se ingrese un
            apellido y mostrará las reservas que coincidan.
          </p>
        </div>

        <p className="leading-relaxed mt-5">
          También podemos utilizar parámetros para solicitar fechas, estados
          de reserva o números de habitación. Cuando una consulta utiliza
          parámetros, es recomendable definir su tipo de dato desde la opción
          Parámetros de la vista Diseño, para evitar interpretaciones
          incorrectas.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: consultar reservas entre dos fechas
        </h3>

        <p>
          En el campo FechaEntrada podemos escribir:
        </p>

        <code className="block  p-3 rounded mt-3 text-blue-900">
          Between [Ingrese fecha inicial:] And [Ingrese fecha final:]
        </code>

        <p className="mt-3">
          Al ejecutar la consulta, Access solicitará ambas fechas y devolverá
          las reservas cuya fecha de entrada esté comprendida entre ellas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          11. Campos calculados
        </h2>

        <p className="leading-relaxed">
          Las consultas también permiten crear campos calculados. Estos
          campos no necesitan existir previamente en una tabla, porque su
          valor se obtiene mediante una expresión que combina datos
          almacenados.
        </p>

        <p className="leading-relaxed mt-4">
          En el sistema hotelero podemos calcular la cantidad de noches
          de una reserva y el importe estimado de alojamiento.
        </p>

        <div className=" rounded-lg p-5 mt-5">
          <p className="font-bold text-blue-900">
            Ejemplo: calcular el importe de una reserva
          </p>
          <p className="mt-2">
            Si una habitación cuesta $65.000 por noche y el huésped reserva
            durante cuatro noches, el importe estimado será:
          </p>
          <p className="font-semibold text-blue-900 mt-3">
            4 × $65.000 = $260.000
          </p>
          <p className="mt-3">
            En la cuadrícula QBE podemos incorporar un campo calculado
            utilizando la siguiente expresión:
          </p>
          <code className="block  p-3 rounded mt-3 text-sm break-all">
            ImporteEstimado: DateDiff("d",[FechaEntrada],[FechaSalida])*[PrecioPorNoche]
          </code>
          <p className="mt-3">
            La función DateDiff calcula la diferencia entre las fechas en
            días. El resultado se multiplica por el precio de la habitación
            por noche.
          </p>
        </div>

        <p className="leading-relaxed mt-5">
          Este cálculo permite obtener un importe estimado de alojamiento.
          No incluye necesariamente descuentos, impuestos, cargos adicionales
          ni pagos realizados. Esos conceptos deberán contemplarse si se
          desea calcular el total definitivo de una reserva.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          12. Consultas para habitaciones disponibles
        </h2>

        <p className="leading-relaxed">
          En el sistema hotelero necesitamos conocer qué habitaciones pueden
          ofrecerse a los huéspedes. Una consulta sencilla puede mostrar
          aquellas habitaciones cuyo campo Estado contiene el valor
          "Disponible".
        </p>

        <div className=" p-5 rounded-lg mt-5">
          <p className="font-bold text-blue-900">
            Ejemplo de consulta
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Agregar la tabla Habitaciones.</li>
            <li>Seleccionar NumeroHabitacion, TipoHabitacion, Capacidad y PrecioPorNoche.</li>
            <li>Incorporar el campo Estado.</li>
            <li>En Criterios escribir "Disponible".</li>
            <li>Ejecutar la consulta.</li>
          </ul>
        </div>

        <p className="leading-relaxed mt-5">
          Sin embargo, existe una diferencia importante entre el estado
          registrado de una habitación y su disponibilidad real para un
          período determinado.
        </p>

        <p className="leading-relaxed mt-4">
          Una habitación puede figurar como disponible y tener una reserva
          confirmada para una fecha futura. Para determinar si puede reservarse
          entre dos fechas, es necesario comparar el período solicitado con
          las reservas existentes, considerando también las reservas
          canceladas y los estados correspondientes.
        </p>

        <p className="leading-relaxed mt-4">
          La lógica de disponibilidad requiere una consulta más elaborada
          que analice los posibles solapamientos entre fechas. Este será un
          aspecto fundamental para el funcionamiento del sistema hotelero.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          13. Guardar, modificar y visualizar consultas
        </h2>

        <p className="leading-relaxed">
          Una vez diseñada una consulta, podemos guardarla para utilizarla
          nuevamente desde el panel de navegación de Access.
        </p>

        <p className="leading-relaxed mt-4">
          Es recomendable utilizar nombres que describan claramente su
          finalidad. Por ejemplo:
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>qryListadoReservas.</li>
          <li>qryReservasConfirmadas.</li>
          <li>qryReservasPorHuesped.</li>
          <li>qryReservasPorPeriodo.</li>
          <li>qryHabitacionesDisponibles.</li>
          <li>qryReservasDetalle.</li>
        </ul>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Vistas de una consulta
        </h3>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Vista Diseño:</strong> permite crear o modificar la
            estructura de la consulta, seleccionar campos y establecer
            criterios.
          </li>
          <li>
            <strong>Vista Hoja de datos:</strong> muestra los resultados
            obtenidos al ejecutar la consulta.
          </li>
          <li>
            <strong>Vista SQL:</strong> permite visualizar la instrucción
            SQL que Access genera a partir del diseño realizado.
          </li>
        </ul>

        <div className=" rounded-lg p-5 mt-6">
          <p className="font-bold text-blue-900">
            Relación con el próximo tema
          </p>
          <p className="mt-2">
            Cuando construimos una consulta mediante QBE, Access genera
            internamente una instrucción SQL. En el próximo tema comenzaremos
            a estudiar el lenguaje SQL y aprenderemos a escribir consultas
            directamente mediante instrucciones.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <p className="leading-relaxed">
          Las siguientes actividades se realizan utilizando la base de datos
          del sistema de gestión hotelera desarrollado durante el curso.
          El objetivo es construir consultas que permitan recuperar
          información útil para las tareas administrativas del establecimiento.
        </p>

        <div className="space-y-6 mt-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 1: listado de reservas
            </h3>
            <p>
              Creá una consulta de selección utilizando la tabla Reservas.
              Incorporá los campos IdReserva, IdHuesped, IdHabitacion,
              FechaEntrada, FechaSalida y EstadoReserva.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Ejecutá la consulta.</li>
              <li>Guardala con el nombre qryListadoReservas.</li>
              <li>Explicá qué información permite obtener.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 2: reservas confirmadas
            </h3>
            <p>
              Creá una consulta que muestre únicamente las reservas cuyo
              EstadoReserva sea "Confirmada".
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Seleccioná los campos necesarios.</li>
              <li>Aplicá el criterio correspondiente.</li>
              <li>Ordená los resultados por FechaEntrada de forma ascendente.</li>
              <li>Guardá la consulta como qryReservasConfirmadas.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 3: búsqueda de huéspedes
            </h3>
            <p>
              Creá una consulta que permita buscar reservas utilizando el
              apellido de un huésped.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Incorporá las tablas Reservas y Huéspedes.</li>
              <li>Seleccioná los campos necesarios para identificar cada reserva.</li>
              <li>Utilizá un parámetro para solicitar el apellido.</li>
              <li>Probá la consulta con diferentes huéspedes.</li>
              <li>Guardala como qryReservasPorHuesped.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 4: reservas por período
            </h3>
            <p>
              Diseñá una consulta que permita buscar las reservas cuya
              FechaEntrada se encuentre entre dos fechas ingresadas por el
              usuario.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizá el operador Between.</li>
              <li>Configurá los parámetros de fecha.</li>
              <li>Ejecutá la consulta con diferentes períodos.</li>
              <li>Guardala como qryReservasPorPeriodo.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 5: detalle e importe estimado
            </h3>
            <p>
              Creá una consulta que combine las tablas Reservas y Habitaciones
              para mostrar el número de habitación, las fechas de entrada y
              salida y el precio por noche.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Incorporá un campo calculado llamado ImporteEstimado.</li>
              <li>Calculá la cantidad de noches mediante DateDiff.</li>
              <li>Multiplicá la cantidad de noches por el precio por noche.</li>
              <li>Comprobá el resultado con reservas de distinta duración.</li>
              <li>Guardá la consulta como qryImportesEstimados.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: consultas para la gestión hotelera
        </h2>

        <p className="leading-relaxed">
          El hotel necesita mejorar el acceso a la información para que el
          personal administrativo pueda consultar rápidamente el estado
          de las reservas, los datos de los huéspedes y la ocupación de las
          habitaciones.
        </p>

        <p className="leading-relaxed mt-4">
          Tu tarea consiste en diseñar un conjunto de consultas mediante QBE
          que permita resolver las siguientes necesidades:
        </p>

        <div className=" rounded-lg p-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Consultas que debe incluir el sistema
          </h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Listado general:</strong> mostrar todas las reservas
              con los datos del huésped y de la habitación.
            </li>
            <li>
              <strong>Reservas pendientes:</strong> mostrar únicamente las
              reservas cuyo estado sea Pendiente.
            </li>
            <li>
              <strong>Búsqueda por huésped:</strong> permitir ingresar un
              apellido y consultar sus reservas.
            </li>
            <li>
              <strong>Reservas por período:</strong> solicitar dos fechas
              y mostrar las reservas cuya fecha de entrada esté comprendida
              entre ellas.
            </li>
            <li>
              <strong>Importes estimados:</strong> calcular el costo de
              alojamiento de cada reserva según la cantidad de noches y
              el precio de la habitación.
            </li>
            <li>
              <strong>Habitaciones disponibles:</strong> mostrar las
              habitaciones cuyo estado registrado sea Disponible. Explicar
              por qué este resultado no garantiza por sí solo que estén
              libres para cualquier período.
            </li>
          </ol>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Entrega del trabajo
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Crear y guardar las seis consultas en Microsoft Access.</li>
          <li>Utilizar nombres descriptivos para cada consulta.</li>
          <li>Ejecutar cada una y comprobar que los resultados sean correctos.</li>
          <li>Presentar capturas de la Vista Diseño y de los resultados.</li>
          <li>Explicar qué necesidad administrativa resuelve cada consulta.</li>
        </ul>

        <div className="border-l-4 border-blue-700  p-5 rounded mt-6">
          <p className="font-bold text-blue-900">
            Objetivo de la actividad
          </p>
          <p className="mt-2">
            Construir consultas que permitan transformar los datos almacenados
            en las tablas en información útil para la administración del hotel,
            utilizando criterios, parámetros, relaciones y campos calculados.
          </p>
        </div>
      </section>
    </div>
  );
}
