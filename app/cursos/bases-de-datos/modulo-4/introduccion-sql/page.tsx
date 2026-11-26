
export default function IntroduccionSQLPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Introducción al lenguaje SQL
        </h1>

        <p className="text-lg leading-relaxed">
          En los temas anteriores aprendimos a construir consultas mediante
          QBE, utilizando las herramientas visuales de Microsoft Access.
          Ahora vamos a conocer el lenguaje SQL, que permite realizar
          consultas directamente mediante instrucciones escritas.
        </p>

        <p className="leading-relaxed mt-4">
          SQL es una herramienta fundamental para trabajar con bases de datos
          relacionales. Permite recuperar información, aplicar condiciones,
          combinar tablas, ordenar resultados y modificar los datos
          almacenados.
        </p>

        <p className="leading-relaxed mt-4">
          Durante este tema utilizaremos SQL para continuar desarrollando
          nuestro sistema de gestión de reservas de un hotel.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué es SQL?
        </h2>

        <p className="leading-relaxed">
          SQL significa Structured Query Language, que se traduce como
          Lenguaje de Consulta Estructurado. Es un lenguaje utilizado para
          comunicarse con los sistemas de gestión de bases de datos
          relacionales.
        </p>

        <p className="leading-relaxed mt-4">
          Mediante instrucciones SQL podemos indicar qué información
          necesitamos obtener, qué registros queremos modificar o qué
          operaciones deben realizarse sobre las tablas.
        </p>

        <div className=" border-l-4 border-blue-700 p-5 rounded mt-6">
          <p className="font-bold text-blue-900">
            Ejemplo aplicado al hotel
          </p>
          <p className="mt-2">
            El encargado necesita consultar todas las reservas confirmadas.
            En lugar de utilizar la cuadrícula de diseño de Access, puede
            escribir una instrucción SQL que solicite esos registros.
          </p>
        </div>

        <p className="leading-relaxed mt-5">
          SQL es utilizado por diferentes sistemas de bases de datos, como
          Microsoft Access, MySQL, PostgreSQL, SQL Server, Oracle y SQLite.
          Aunque comparten muchas instrucciones, pueden existir diferencias
          de sintaxis y funciones entre los distintos sistemas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. ¿Para qué se utiliza SQL?
        </h2>

        <p className="leading-relaxed">
          SQL permite realizar distintas operaciones sobre una base de datos.
          Sus instrucciones se pueden organizar según la finalidad que
          cumplen.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Consultar información
            </h3>
            <p>
              Permite recuperar registros de una o varias tablas, aplicar
              filtros, ordenar resultados y realizar cálculos.
            </p>
            <p className="font-semibold text-blue-800 mt-3">SELECT</p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Insertar información
            </h3>
            <p>
              Permite incorporar nuevos registros a las tablas de una base
              de datos.
            </p>
            <p className="font-semibold text-blue-800 mt-3">INSERT INTO</p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Modificar información
            </h3>
            <p>
              Permite actualizar los valores de los registros existentes
              según determinadas condiciones.
            </p>
            <p className="font-semibold text-blue-800 mt-3">UPDATE</p>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Eliminar información
            </h3>
            <p>
              Permite eliminar registros de una tabla cuando cumplen
              determinadas condiciones.
            </p>
            <p className="font-semibold text-blue-800 mt-3">DELETE</p>
          </div>
        </div>

        <p className="leading-relaxed mt-5">
          También existen instrucciones para crear y modificar la estructura
          de las bases de datos, como CREATE TABLE y ALTER TABLE. En este
          módulo nos concentraremos principalmente en las consultas y en las
          operaciones necesarias para el sistema hotelero.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Relación entre QBE y SQL en Access
        </h2>

        <p className="leading-relaxed">
          Microsoft Access permite trabajar con consultas de dos maneras
          principales: mediante herramientas visuales QBE o escribiendo
          directamente instrucciones SQL.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className=" rounded-lg p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-3">
              QBE: diseño visual
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seleccionar tablas.</li>
              <li>Agregar campos.</li>
              <li>Establecer criterios.</li>
              <li>Ordenar resultados.</li>
              <li>Ejecutar la consulta.</li>
            </ul>
          </div>

          <div className=" rounded-lg p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-3">
              SQL: instrucciones escritas
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Escribir SELECT.</li>
              <li>Indicar los campos.</li>
              <li>Seleccionar las tablas.</li>
              <li>Establecer condiciones.</li>
              <li>Ejecutar la instrucción.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Ejemplo: obtener todas las reservas
        </h3>

        <p>
          En QBE seleccionaríamos la tabla Reservas y agregaríamos los campos
          que queremos visualizar. En SQL podemos escribir:
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT *
FROM Reservas;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          La instrucción solicita todos los campos de la tabla Reservas.
          El asterisco representa todos los campos y el punto y coma indica
          el final de la instrucción.
        </p>

        <p className="leading-relaxed mt-4">
          Si construimos una consulta mediante QBE y luego abrimos su Vista
          SQL, podremos observar la instrucción que Access generó a partir
          de nuestro diseño.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Estructura básica de una instrucción SQL
        </h2>

        <p className="leading-relaxed">
          Las instrucciones SQL se construyen mediante palabras clave,
          nombres de tablas, nombres de campos, operadores y valores.
          Cada elemento cumple una función específica.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Componentes principales
        </h3>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Palabras clave:</strong> indican qué operación se desea
            realizar, por ejemplo SELECT, FROM, WHERE y ORDER BY.
          </li>
          <li>
            <strong>Tablas:</strong> identifican de dónde se obtendrán o
            sobre qué datos se trabajará.
          </li>
          <li>
            <strong>Campos:</strong> indican qué columnas se necesitan.
          </li>
          <li>
            <strong>Operadores:</strong> permiten comparar valores o combinar
            condiciones.
          </li>
          <li>
            <strong>Valores:</strong> son los datos utilizados como criterios
            de búsqueda.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Ejemplo explicado
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto">
          <code>{`SELECT FechaEntrada, FechaSalida, EstadoReserva
FROM Reservas
WHERE EstadoReserva = 'Confirmada';`}</code>
        </pre>

        <div className="space-y-3 mt-5">
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-bold text-blue-900">SELECT</p>
            <p>Indica qué campos queremos obtener.</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-bold text-blue-900">FROM</p>
            <p>Indica de qué tabla se recuperarán los datos.</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-bold text-blue-900">WHERE</p>
            <p>Establece la condición que deben cumplir los registros.</p>
          </div>
        </div>

        <p className="leading-relaxed mt-5">
          El resultado será un listado de reservas que tengan el estado
          Confirmada, mostrando únicamente las fechas de entrada y salida
          junto con su estado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Palabras clave fundamentales
        </h2>

        <p className="leading-relaxed">
          Para comenzar a trabajar con SQL es importante reconocer las
          instrucciones más utilizadas en las consultas.
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border p-3 text-left">Palabra clave</th>
                <th className="border p-3 text-left">Función</th>
                <th className="border p-3 text-left">Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-bold">SELECT</td>
                <td className="border p-3">Selecciona campos.</td>
                <td className="border p-3">SELECT Nombre</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">FROM</td>
                <td className="border p-3">Indica la tabla de origen.</td>
                <td className="border p-3">FROM Huespedes</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">WHERE</td>
                <td className="border p-3">Filtra registros.</td>
                <td className="border p-3">WHERE Capacidad &gt; 2</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">ORDER BY</td>
                <td className="border p-3">Ordena resultados.</td>
                <td className="border p-3">ORDER BY Apellido</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">AND</td>
                <td className="border p-3">Combina condiciones que deben cumplirse.</td>
                <td className="border p-3">AND Capacidad &gt; 2</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">OR</td>
                <td className="border p-3">Permite condiciones alternativas.</td>
                <td className="border p-3">OR Estado = 'Disponible'</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">GROUP BY</td>
                <td className="border p-3">Agrupa registros.</td>
                <td className="border p-3">GROUP BY EstadoReserva</td>
              </tr>
              <tr>
                <td className="border p-3 font-bold">JOIN</td>
                <td className="border p-3">Relaciona información de tablas.</td>
                <td className="border p-3">INNER JOIN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Tipos de datos y valores en SQL
        </h2>

        <p className="leading-relaxed">
          Al escribir instrucciones SQL debemos respetar el tipo de dato
          de cada campo. Los valores de texto, números y fechas se expresan
          de manera diferente.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Valores de texto
        </h3>

        <p>
          Los textos se escriben entre comillas simples en las expresiones
          SQL de Access.
        </p>

        <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
          <code>{`SELECT *
FROM Huespedes
WHERE Apellido = 'García';`}</code>
        </pre>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Valores numéricos
        </h3>

        <p>
          Los números se escriben directamente, sin comillas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
          <code>{`SELECT *
FROM Habitaciones
WHERE Capacidad >= 3;`}</code>
        </pre>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Valores de fecha
        </h3>

        <p>
          En Microsoft Access, las fechas constantes se delimitan con
          símbolos #.
        </p>

        <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
          <code>{`SELECT *
FROM Reservas
WHERE FechaEntrada >= #12/01/2026#;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          Es importante comprobar cómo interpreta Access las fechas según
          la configuración regional del equipo. En consultas con parámetros
          también debemos definir correctamente el tipo de dato esperado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Operadores de comparación y operadores lógicos
        </h2>

        <p className="leading-relaxed">
          SQL utiliza operadores para comparar valores y establecer
          condiciones sobre los registros.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Operadores de comparación
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border p-3 text-left">Operador</th>
                <th className="border p-3 text-left">Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-3">=</td><td className="border p-3">Igual a.</td></tr>
              <tr><td className="border p-3">&lt;&gt;</td><td className="border p-3">Distinto de.</td></tr>
              <tr><td className="border p-3">&gt;</td><td className="border p-3">Mayor que.</td></tr>
              <tr><td className="border p-3">&lt;</td><td className="border p-3">Menor que.</td></tr>
              <tr><td className="border p-3">&gt;=</td><td className="border p-3">Mayor o igual que.</td></tr>
              <tr><td className="border p-3">&lt;=</td><td className="border p-3">Menor o igual que.</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Operadores lógicos
        </h3>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>AND:</strong> todas las condiciones deben cumplirse.
          </li>
          <li>
            <strong>OR:</strong> permite que se cumpla una condición u otra.
          </li>
          <li>
            <strong>NOT:</strong> niega una condición.
          </li>
        </ul>

        <div className=" rounded-lg p-5 mt-5">
          <p className="font-bold text-blue-900">
            Ejemplo: habitaciones para huéspedes
          </p>
          <p className="mt-2">
            Queremos consultar habitaciones disponibles con capacidad para
            al menos tres personas.
          </p>
          <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
            <code>{`SELECT *
FROM Habitaciones
WHERE Estado = 'Disponible'
AND Capacidad >= 3;`}</code>
          </pre>
          <p className="mt-3">
            La habitación debe cumplir ambas condiciones para aparecer
            en el resultado.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Comentarios, formato y buenas prácticas
        </h2>

        <p className="leading-relaxed">
          Las instrucciones SQL deben escribirse de manera ordenada para
          facilitar su lectura y evitar errores.
        </p>

        <ul className="list-disc pl-6 space-y-3 mt-4">
          <li>
            Utilizar nombres de tablas y campos que coincidan exactamente
            con los definidos en la base de datos.
          </li>
          <li>
            Separar las diferentes partes de una consulta en líneas distintas.
          </li>
          <li>
            Utilizar espacios y sangrías para mejorar la legibilidad.
          </li>
          <li>
            Comprobar que los valores utilizados como criterios coincidan
            con los datos almacenados.
          </li>
          <li>
            Ejecutar las consultas con diferentes datos de prueba.
          </li>
          <li>
            Tener especial cuidado con las consultas que modifican o eliminan
            información.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Comentarios en SQL
        </h3>

        <p>
          En los sistemas que admiten comentarios SQL se puede utilizar
          -- para agregar aclaraciones en el código. Sin embargo, la Vista
          SQL de Access tiene particularidades y no admite necesariamente
          todos los comentarios de otros motores. Por eso, estos ejemplos
          son ilustrativos y no deben agregarse a una consulta de Access
          sin comprobar su compatibilidad.
        </p>

        <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
          <code>{`-- Consultar las reservas confirmadas
SELECT *
FROM Reservas
WHERE EstadoReserva = 'Confirmada';`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Trabajar con SQL desde Microsoft Access
        </h2>

        <p className="leading-relaxed">
          Access permite escribir y ejecutar instrucciones SQL desde el
          entorno de consultas.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-4">
          Procedimiento
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>Abrir la base de datos del sistema hotelero.</li>
          <li>Ingresar en la pestaña Crear.</li>
          <li>Seleccionar Diseño de consulta.</li>
          <li>Si aparece la ventana para agregar tablas, cerrarla sin seleccionar ninguna.</li>
          <li>Ingresar en la opción Vista y seleccionar Vista SQL.</li>
          <li>Escribir la instrucción SQL en el editor.</li>
          <li>Presionar Ejecutar para visualizar el resultado.</li>
          <li>Guardar la consulta con un nombre descriptivo.</li>
        </ol>

        <div className=" rounded-lg p-5 mt-6">
          <p className="font-bold text-blue-900">
            Primera prueba
          </p>
          <p className="mt-2">
            Escribí la siguiente instrucción en la Vista SQL:
          </p>
          <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
            <code>{`SELECT Nombre, Apellido, DNI
FROM Huespedes;`}</code>
          </pre>
          <p className="mt-3">
            Al ejecutar la consulta, Access mostrará el nombre, apellido y
            DNI de todos los huéspedes registrados.
          </p>
        </div>

        <p className="leading-relaxed mt-5">
          En este módulo utilizaremos principalmente instrucciones SQL
          compatibles con Microsoft Access. Algunas funciones, formatos
          y operadores pueden variar cuando se trabaja con otros sistemas
          gestores de bases de datos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <p className="leading-relaxed">
          Las siguientes actividades tienen como objetivo familiarizarse
          con la escritura de instrucciones SQL y reconocer sus componentes.
          Todas deben realizarse sobre la base de datos del sistema de
          gestión hotelera.
        </p>

        <div className="space-y-6 mt-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 1: primera consulta SQL
            </h3>
            <p>
              Abrí la Vista SQL de Microsoft Access y escribí una instrucción
              que permita mostrar todos los campos de la tabla Huéspedes.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizá SELECT y FROM.</li>
              <li>Ejecutá la consulta.</li>
              <li>Guardala como qryTodosLosHuespedes.</li>
              <li>Explicá la función de cada palabra clave utilizada.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 2: seleccionar campos específicos
            </h3>
            <p>
              Escribí una consulta que muestre el número de habitación,
              tipo de habitación, capacidad y precio por noche de todos
              los registros de la tabla Habitaciones.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Seleccioná únicamente los campos solicitados.</li>
              <li>Ejecutá la consulta.</li>
              <li>Guardala como qryDatosHabitaciones.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 3: filtrar información
            </h3>
            <p>
              Creá una consulta que permita mostrar únicamente las reservas
              confirmadas.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizá la cláusula WHERE.</li>
              <li>Aplicá el criterio sobre EstadoReserva.</li>
              <li>Comprobá los resultados.</li>
              <li>Guardá la consulta como qrySQLReservasConfirmadas.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 4: combinar condiciones
            </h3>
            <p>
              Diseñá una consulta que muestre las habitaciones disponibles
              cuya capacidad sea igual o superior a tres personas.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizá el operador AND.</li>
              <li>Combiná una condición de texto y una condición numérica.</li>
              <li>Ejecutá la consulta y analizá los resultados.</li>
              <li>Guardala como qryHabitacionesCapacidad.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 5: ordenar resultados
            </h3>
            <p>
              Creá una consulta que muestre todas las reservas y las ordene
              desde la fecha de entrada más reciente hasta la más antigua.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Utilizá SELECT y FROM.</li>
              <li>Incorporá la cláusula ORDER BY.</li>
              <li>Utilizá el orden descendente.</li>
              <li>Guardá la consulta como qryReservasOrdenadas.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: consultas SQL para el hotel
        </h2>

        <p className="leading-relaxed">
          El hotel necesita contar con consultas escritas en SQL para
          obtener información de sus huéspedes, habitaciones y reservas.
          Como responsable del desarrollo del sistema, deberás construir
          un conjunto de consultas que facilite las tareas administrativas.
        </p>

        <div className=" rounded-lg p-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Consultas que deberás desarrollar
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Huéspedes:</strong> mostrar nombre, apellido, DNI y
              teléfono de todos los huéspedes.
            </li>
            <li>
              <strong>Habitaciones:</strong> mostrar las habitaciones con
              capacidad para más de dos personas.
            </li>
            <li>
              <strong>Reservas confirmadas:</strong> obtener todas las
              reservas cuyo estado sea Confirmada.
            </li>
            <li>
              <strong>Reservas por fecha:</strong> consultar las reservas
              cuya fecha de entrada sea posterior a una fecha determinada.
            </li>
            <li>
              <strong>Habitaciones económicas:</strong> mostrar las
              habitaciones disponibles cuyo precio por noche sea inferior
              a $100.000.
            </li>
            <li>
              <strong>Ordenamiento:</strong> obtener el listado de reservas
              ordenado por fecha de entrada descendente.
            </li>
          </ol>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Entrega del trabajo
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Crear las seis consultas en Microsoft Access.</li>
          <li>Escribir las instrucciones en la Vista SQL.</li>
          <li>Guardar cada consulta con un nombre descriptivo.</li>
          <li>Ejecutar y verificar los resultados.</li>
          <li>Presentar capturas de las instrucciones y de los resultados.</li>
          <li>Explicar qué información permite obtener cada consulta.</li>
        </ul>

        <div className="border-l-4 border-blue-700  p-5 rounded mt-6">
          <p className="font-bold text-blue-900">
            Objetivo de la actividad
          </p>
          <p className="mt-2">
            Aplicar las instrucciones básicas de SQL para recuperar y
            organizar información de la base de datos hotelera, comprendiendo
            cómo se construyen las consultas y cómo se relacionan sus
            diferentes componentes.
          </p>
        </div>
      </section>
    </div>
  );
}
