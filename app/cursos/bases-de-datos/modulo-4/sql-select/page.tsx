
export default function SqlSelectPage() {
  return (
    <div className="space-y-14">
      <div>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Consultas SQL de selección
        </h1>

        <p className="text-lg leading-relaxed">
          Las consultas de selección permiten recuperar información
          almacenada en una o varias tablas de una base de datos, sin
          modificar los registros originales.
        </p>

        <p className="leading-relaxed mt-4">
          En Microsoft Access utilizamos la instrucción SELECT para indicar
          qué campos queremos consultar, FROM para especificar las tablas
          de origen y WHERE para establecer condiciones de búsqueda.
          También podemos ordenar resultados, combinar tablas y realizar
          cálculos.
        </p>

        <p className="leading-relaxed mt-4">
          Durante este tema aplicaremos estas instrucciones al sistema de
          gestión hotelera que venimos desarrollando, con el objetivo de
          obtener información útil para la administración de huéspedes,
          habitaciones, reservas y pagos.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Qué es una consulta de selección?
        </h2>

        <p className="leading-relaxed">
          Una consulta de selección es una instrucción SQL que permite
          recuperar registros de una o varias tablas y mostrar únicamente
          la información que necesitamos.
        </p>

        <p className="leading-relaxed mt-4">
          A diferencia de las consultas de acción, las consultas de
          selección no modifican, agregan ni eliminan los datos originales.
          Su finalidad es obtener información para visualizarla, analizarla
          o utilizarla en formularios e informes.
        </p>

        <div className=" border-l-4 border-blue-700 p-5 rounded mt-6">
          <p className="font-bold text-blue-900">
            Ejemplos en el sistema hotelero
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Consultar todos los huéspedes registrados.</li>
            <li>Buscar habitaciones con capacidad para cuatro personas.</li>
            <li>Mostrar las reservas confirmadas.</li>
            <li>Consultar las reservas de un huésped determinado.</li>
            <li>Obtener las reservas correspondientes a un período.</li>
            <li>Consultar los pagos registrados.</li>
            <li>Mostrar información combinada de huéspedes y habitaciones.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. Estructura básica de SELECT
        </h2>

        <p className="leading-relaxed">
          La instrucción SELECT tiene una estructura básica que permite
          indicar qué información se desea recuperar y de dónde se obtendrá.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-5">
          <code>{`SELECT campo1, campo2
FROM NombreTabla;`}</code>
        </pre>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Función de cada elemento
        </h3>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>SELECT:</strong> indica qué campos se desean mostrar.
          </li>
          <li>
            <strong>campo1, campo2:</strong> representan los nombres de los
            campos que se quieren consultar.
          </li>
          <li>
            <strong>FROM:</strong> indica la tabla desde donde se recuperarán
            los datos.
          </li>
          <li>
            <strong>NombreTabla:</strong> identifica la tabla que contiene
            la información.
          </li>
          <li>
            <strong>;</strong> indica el final de la instrucción.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: consultar huéspedes
        </h3>

        <p>
          Queremos obtener el nombre, apellido y DNI de todos los huéspedes
          registrados en el hotel.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT Nombre, Apellido, DNI
FROM Huespedes;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          La consulta devuelve únicamente los tres campos indicados de
          todos los registros de la tabla Huespedes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Seleccionar todos los campos con el asterisco
        </h2>

        <p className="leading-relaxed">
          Cuando necesitamos consultar todos los campos de una tabla,
          podemos utilizar el símbolo asterisco (*), que representa la
          totalidad de sus columnas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT *
FROM Habitaciones;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          Esta instrucción devuelve todos los campos de la tabla
          Habitaciones, incluyendo número, tipo, capacidad, precio por noche,
          descripción y estado.
        </p>

        <div className=" rounded-lg p-5 mt-5">
          <p className="font-bold text-blue-900">
            ¿Cuándo conviene utilizar el asterisco?
          </p>
          <p className="mt-2">
            Es útil cuando necesitamos revisar rápidamente todos los datos
            de una tabla. Sin embargo, para consultas que utilizarán otros
            formularios o informes, suele ser mejor seleccionar únicamente
            los campos necesarios.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. Filtrar registros con WHERE
        </h2>

        <p className="leading-relaxed">
          La cláusula WHERE permite establecer condiciones para recuperar
          solamente los registros que cumplen determinados requisitos.
        </p>

        <p className="leading-relaxed mt-4">
          La condición se evalúa para cada registro. Si se cumple, el
          registro aparece en el resultado; de lo contrario, queda excluido.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT campo1, campo2
FROM NombreTabla
WHERE condicion;`}</code>
        </pre>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: habitaciones disponibles
        </h3>

        <p>
          Queremos mostrar las habitaciones cuyo estado registrado sea
          Disponible.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT NumeroHabitacion, TipoHabitacion, PrecioPorNoche
FROM Habitaciones
WHERE Estado = 'Disponible';`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          Access mostrará únicamente las habitaciones cuyo campo Estado
          tenga el valor Disponible.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: habitaciones por capacidad
        </h3>

        <p>
          Queremos consultar las habitaciones con capacidad para más de
          dos personas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT *
FROM Habitaciones
WHERE Capacidad > 2;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          El resultado incluirá únicamente las habitaciones cuya capacidad
          sea superior a dos personas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Operadores de comparación
        </h2>

        <p className="leading-relaxed">
          Los operadores de comparación permiten establecer condiciones
          sobre campos numéricos, textos y fechas.
        </p>

        <div className="overflow-x-auto mt-5">
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
                <td className="border p-3">Capacidad = 2</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">&lt;&gt;</td>
                <td className="border p-3">Distinto de</td>
                <td className="border p-3">Estado &lt;&gt; 'Disponible'</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">&gt;</td>
                <td className="border p-3">Mayor que</td>
                <td className="border p-3">PrecioPorNoche &gt; 80000</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">&lt;</td>
                <td className="border p-3">Menor que</td>
                <td className="border p-3">PrecioPorNoche &lt; 100000</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">&gt;=</td>
                <td className="border p-3">Mayor o igual que</td>
                <td className="border p-3">Capacidad &gt;= 3</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">&lt;=</td>
                <td className="border p-3">Menor o igual que</td>
                <td className="border p-3">Capacidad &lt;= 4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Aplicación práctica
        </h3>

        <p>
          El hotel quiere conocer las habitaciones cuyo precio por noche
          sea inferior a $500.000.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT NumeroHabitacion, TipoHabitacion, PrecioPorNoche
FROM Habitaciones
WHERE PrecioPorNoche < 100000;`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. Combinar condiciones con AND y OR
        </h2>

        <p className="leading-relaxed">
          En ocasiones necesitamos que una consulta evalúe más de una
          condición. Para eso utilizamos los operadores lógicos AND y OR.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Operador AND
        </h3>

        <p>
          AND permite combinar condiciones que deben cumplirse
          simultáneamente.
        </p>

        <div className=" p-5 rounded-lg mt-4">
          <p className="font-semibold text-blue-900">
            Ejemplo: habitaciones económicas y disponibles
          </p>
          <p className="mt-2">
            Queremos mostrar las habitaciones disponibles cuyo precio sea
            inferior a $500.000.
          </p>
          <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
            <code>{`SELECT NumeroHabitacion, PrecioPorNoche
FROM Habitaciones
WHERE Estado = 'Disponible'
AND PrecioPorNoche < 100000;`}</code>
          </pre>
          <p className="mt-3">
            Para aparecer en el resultado, la habitación debe estar
            disponible y tener un precio inferior al indicado.
          </p>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Operador OR
        </h3>

        <p>
          OR permite establecer condiciones alternativas. El registro
          aparecerá si se cumple al menos una de ellas.
        </p>

        <div className=" p-5 rounded-lg mt-4">
          <p className="font-semibold text-blue-900">
            Ejemplo: reservas confirmadas o pendientes
          </p>
          <pre className="bg-slate-950 text-green-300 p-4 rounded-lg overflow-x-auto mt-3">
            <code>{`SELECT IdReserva, FechaEntrada, EstadoReserva
FROM Reservas
WHERE EstadoReserva = 'Confirmada'
OR EstadoReserva = 'Pendiente';`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Operador NOT
        </h3>

        <p>
          NOT permite negar una condición y seleccionar los registros
          que no cumplen el criterio indicado.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT *
FROM Reservas
WHERE NOT EstadoReserva = 'Cancelada';`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          Esta consulta muestra las reservas cuyo estado no sea Cancelada.
          Si el campo contiene valores nulos, esos registros requieren una
          consideración adicional, porque NULL representa ausencia de un
          valor y no equivale a un texto vacío.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. Buscar textos con LIKE
        </h2>

        <p className="leading-relaxed">
          El operador LIKE permite buscar textos que coincidan con un patrón.
          Es especialmente útil cuando no conocemos el valor completo de un
          campo.
        </p>

        <p className="leading-relaxed mt-4">
          En el patrón de Access, el asterisco (*) representa una cantidad
          variable de caracteres y el signo de interrogación (?) representa
          un único carácter, utilizando la configuración habitual de
          comodines de Access.
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border p-3 text-left">Patrón</th>
                <th className="border p-3 text-left">Qué busca</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Like 'Gar*'</td>
                <td className="border p-3">Textos que comienzan con Gar.</td>
              </tr>
              <tr>
                <td className="border p-3">Like '*García*'</td>
                <td className="border p-3">Textos que contienen García.</td>
              </tr>
              <tr>
                <td className="border p-3">Like '*ez'</td>
                <td className="border p-3">Textos que terminan en ez.</td>
              </tr>
              <tr>
                <td className="border p-3">Like 'Mar?'</td>
                <td className="border p-3">Textos de cuatro caracteres que comienzan con Mar.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: buscar huéspedes por apellido
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT Nombre, Apellido, DNI
FROM Huespedes
WHERE Apellido LIKE 'Gar*';`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          La consulta muestra los huéspedes cuyos apellidos comienzan con
          Gar, por ejemplo García o Garay.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. Buscar valores dentro de un rango con BETWEEN
        </h2>

        <p className="leading-relaxed">
          BETWEEN permite seleccionar registros cuyo valor se encuentre
          comprendido entre dos límites. Los extremos del intervalo
          también están incluidos.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Ejemplo con números
        </h3>

        <p>
          Queremos consultar las habitaciones cuyo precio por noche esté
          entre $50.000 y $500.000.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT NumeroHabitacion, PrecioPorNoche
FROM Habitaciones
WHERE PrecioPorNoche BETWEEN 50000 AND 100000;`}</code>
        </pre>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo con fechas
        </h3>

        <p>
          Queremos consultar las reservas cuya fecha de entrada se encuentre
          entre el 1 y el 31 de diciembre de 2026.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT IdReserva, FechaEntrada, FechaSalida
FROM Reservas
WHERE FechaEntrada BETWEEN #12/01/2026# AND #12/31/2026#;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          En el ejemplo se utiliza un formato de fecha mes/día/año para
          evitar ambigüedades en la sintaxis SQL de Access. Es importante
          verificar la interpretación de las fechas en el entorno utilizado.
          La consulta filtra por FechaEntrada, no por cualquier reserva que
          se superponga con diciembre.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Consultar valores únicos con DISTINCT
        </h2>

        <p className="leading-relaxed">
          La palabra clave DISTINCT permite eliminar los valores duplicados
          del resultado de una consulta.
        </p>

        <p className="leading-relaxed mt-4">
          Por ejemplo, si queremos conocer qué estados de reserva existen
          en la tabla, no necesitamos mostrar el mismo estado muchas veces.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT DISTINCT EstadoReserva
FROM Reservas;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          El resultado mostrará cada estado una sola vez, por ejemplo
          Confirmada, Pendiente o Cancelada, siempre que esos valores
          existan en la tabla.
        </p>

        <div className=" rounded-lg p-5 mt-5">
          <p className="font-bold text-blue-900">
            Importante
          </p>
          <p className="mt-2">
            DISTINCT considera la combinación completa de los campos
            seleccionados. Si se seleccionan dos campos, eliminará las
            filas que tengan duplicada esa combinación de valores.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Ordenar resultados con ORDER BY
        </h2>

        <p className="leading-relaxed">
          La cláusula ORDER BY permite organizar los resultados de una
          consulta según uno o varios campos.
        </p>

        <ul className="list-disc pl-6 space-y-3 mt-4">
          <li>
            <strong>ASC:</strong> orden ascendente. Organiza de menor a mayor,
            de A a Z o desde la fecha más antigua.
          </li>
          <li>
            <strong>DESC:</strong> orden descendente. Organiza de mayor a
            menor, de Z a A o desde la fecha más reciente.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: ordenar huéspedes alfabéticamente
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT Nombre, Apellido, DNI
FROM Huespedes
ORDER BY Apellido ASC;`}</code>
        </pre>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: reservas más recientes
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT IdReserva, FechaReserva, EstadoReserva
FROM Reservas
ORDER BY FechaReserva DESC;`}</code>
        </pre>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ordenar por varios campos
        </h3>

        <p>
          Podemos indicar más de un campo para organizar los resultados.
          Por ejemplo, ordenar primero por apellido y después por nombre.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT Nombre, Apellido
FROM Huespedes
ORDER BY Apellido ASC, Nombre ASC;`}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          11. Limitar resultados con TOP
        </h2>

        <p className="leading-relaxed">
          Access permite utilizar TOP para recuperar una cantidad limitada
          de registros de una consulta.
        </p>

        <p className="leading-relaxed mt-4">
          Por ejemplo, podemos obtener las cinco habitaciones más caras
          del hotel.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT TOP 5 NumeroHabitacion, TipoHabitacion, PrecioPorNoche
FROM Habitaciones
ORDER BY PrecioPorNoche DESC;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          La cláusula ORDER BY organiza las habitaciones desde el precio
          más alto y TOP 5 limita el resultado a cinco registros.
        </p>

        <p className="leading-relaxed mt-4">
          Si existen varios registros con el mismo valor en el límite,
          Access puede devolver más registros que los indicados cuando se
          utiliza WITH TIES. Esta opción no debe agregarse a una consulta
          de Access, ya que no forma parte de su sintaxis habitual.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          12. Consultas con parámetros
        </h2>

        <p className="leading-relaxed">
          Una consulta con parámetros permite solicitar un dato al usuario
          cada vez que se ejecuta. De esta forma, no es necesario modificar
          la instrucción SQL para realizar búsquedas diferentes.
        </p>

        <p className="leading-relaxed mt-4">
          En Access podemos utilizar parámetros entre corchetes. Para
          evitar que Access interprete incorrectamente los valores
          ingresados, es recomendable declarar sus tipos de datos mediante
          la opción Parámetros de la consulta.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: buscar reservas por estado
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`PARAMETERS [Ingrese el estado:] Text (255);
SELECT IdReserva, FechaEntrada, FechaSalida, EstadoReserva
FROM Reservas
WHERE EstadoReserva = [Ingrese el estado:];`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          Al ejecutar la consulta, Access solicitará el estado que queremos
          buscar. El usuario podrá ingresar, por ejemplo, Confirmada o
          Pendiente.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: consultar reservas por período
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`PARAMETERS
    [Ingrese fecha inicial:] DateTime,
    [Ingrese fecha final:] DateTime;
SELECT IdReserva, FechaEntrada, FechaSalida, EstadoReserva
FROM Reservas
WHERE FechaEntrada BETWEEN [Ingrese fecha inicial:]
AND [Ingrese fecha final:];`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          La consulta solicita dos fechas y muestra las reservas cuya
          FechaEntrada se encuentre dentro del período indicado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          13. Combinar información de varias tablas con JOIN
        </h2>

        <p className="leading-relaxed">
          En una base de datos relacional, la información se distribuye
          en distintas tablas para evitar duplicaciones y mantener una
          estructura organizada.
        </p>

        <p className="leading-relaxed mt-4">
          Cuando necesitamos mostrar información relacionada, podemos
          utilizar JOIN para combinar registros de diferentes tablas.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          INNER JOIN
        </h3>

        <p className="leading-relaxed">
          INNER JOIN devuelve los registros que tienen coincidencias
          entre las tablas relacionadas según la condición de unión.
        </p>

        <p className="leading-relaxed mt-4">
          En el sistema hotelero, la tabla Reservas contiene IdHuesped,
          que permite relacionar cada reserva con los datos de la tabla
          Huespedes.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT Reservas.IdReserva,
       Huespedes.Nombre,
       Huespedes.Apellido,
       Reservas.FechaEntrada,
       Reservas.FechaSalida
FROM Huespedes
INNER JOIN Reservas
ON Huespedes.IdHuesped = Reservas.IdHuesped;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          Esta consulta muestra las reservas junto con el nombre y apellido
          de los huéspedes correspondientes.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Relacionar reservas, huéspedes y habitaciones
        </h3>

        <p>
          También podemos combinar tres tablas para obtener un listado
          más completo de las reservas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT Reservas.IdReserva,
       Huespedes.Nombre,
       Huespedes.Apellido,
       Habitaciones.NumeroHabitacion,
       Reservas.FechaEntrada,
       Reservas.FechaSalida,
       Reservas.EstadoReserva
FROM (Huespedes
INNER JOIN Reservas
ON Huespedes.IdHuesped = Reservas.IdHuesped)
INNER JOIN Habitaciones
ON Reservas.IdHabitacion = Habitaciones.IdHabitacion;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          El resultado permite consultar quién realizó la reserva, qué
          habitación solicitó y cuáles son las fechas correspondientes.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          LEFT JOIN
        </h3>

        <p className="leading-relaxed">
          LEFT JOIN permite mostrar todos los registros de la tabla ubicada
          a la izquierda de la unión, aunque no tengan coincidencias en la
          tabla de la derecha. En esos casos, los campos de la segunda tabla
          aparecerán con valores nulos.
        </p>

        <p className="leading-relaxed mt-4">
          Por ejemplo, podemos consultar todos los huéspedes, incluso
          aquellos que todavía no realizaron reservas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT Huespedes.IdHuesped,
       Huespedes.Nombre,
       Huespedes.Apellido,
       Reservas.IdReserva
FROM Huespedes
LEFT JOIN Reservas
ON Huespedes.IdHuesped = Reservas.IdHuesped;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          En Access, cuando se combinan varias tablas mediante JOIN, es
          importante respetar el uso de paréntesis y la estructura de las
          uniones, especialmente cuando se agregan más de dos tablas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          14. Crear campos calculados en una consulta SELECT
        </h2>

        <p className="leading-relaxed">
          SQL permite realizar operaciones matemáticas sobre los campos
          de una tabla y mostrar los resultados como columnas calculadas.
          Estos valores se generan al ejecutar la consulta y no necesitan
          almacenarse previamente.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Ejemplo: calcular el importe de alojamiento
        </h3>

        <p>
          En el sistema hotelero queremos conocer el importe estimado de
          cada reserva, multiplicando la cantidad de noches por el precio
          por noche.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT Reservas.IdReserva,
       Reservas.FechaEntrada,
       Reservas.FechaSalida,
       Habitaciones.PrecioPorNoche,
       DateDiff("d", [FechaEntrada], [FechaSalida])
           AS CantidadNoches,
       DateDiff("d", [FechaEntrada], [FechaSalida])
           * Habitaciones.PrecioPorNoche
           AS ImporteEstimado
FROM Reservas
INNER JOIN Habitaciones
ON Reservas.IdHabitacion = Habitaciones.IdHabitacion;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          La función DateDiff calcula la diferencia entre las fechas
          expresada en días. Después, el resultado se multiplica por
          PrecioPorNoche.
        </p>

        <div className=" rounded-lg p-5 mt-5">
          <p className="font-bold text-blue-900">
            Ejemplo de cálculo
          </p>
          <p className="mt-2">
            Una reserva tiene una duración de cuatro noches y el precio
            de la habitación es de $65.000 por noche.
          </p>
          <p className="text-lg font-bold text-blue-900 mt-3">
            4 × $65.000 = $260.000
          </p>
          <p className="mt-2">
            El importe calculado representa el costo estimado del
            alojamiento, sin contemplar otros cargos, descuentos o pagos.
          </p>
        </div>

        <p className="leading-relaxed mt-5">
          Para este cálculo se supone que FechaEntrada y FechaSalida
          contienen fechas válidas y que FechaSalida es posterior a
          FechaEntrada. En una aplicación real también debemos validar
          esos datos antes de registrar una reserva.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          15. Funciones de agregación
        </h2>

        <p className="leading-relaxed">
          Las funciones de agregación permiten realizar cálculos sobre
          conjuntos de registros y obtener resultados resumidos.
          Son útiles para elaborar estadísticas y reportes administrativos.
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border p-3 text-left">Función</th>
                <th className="border p-3 text-left">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">COUNT()</td>
                <td className="border p-3">Cuenta registros o valores no nulos.</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">SUM()</td>
                <td className="border p-3">Suma valores numéricos.</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">AVG()</td>
                <td className="border p-3">Calcula el promedio.</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">MIN()</td>
                <td className="border p-3">Obtiene el valor mínimo.</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">MAX()</td>
                <td className="border p-3">Obtiene el valor máximo.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: contar huéspedes
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT COUNT(*) AS TotalHuespedes
FROM Huespedes;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          Esta consulta devuelve la cantidad total de registros de la
          tabla Huespedes.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-3">
          Ejemplo: calcular el precio promedio
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-lg overflow-x-auto mt-4">
          <code>{`SELECT AVG(PrecioPorNoche) AS PrecioPromedio
FROM Habitaciones;`}</code>
        </pre>

        <p className="leading-relaxed mt-4">
          El resultado muestra el precio promedio por noche de las
          habitaciones registradas.
        </p>

        <p className="leading-relaxed mt-4">
          Estas funciones pueden combinarse con GROUP BY para obtener
          resultados agrupados. Este tipo de consultas se desarrollará
          con mayor profundidad en el tema de agrupaciones y relaciones.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          16. Diferencia entre una consulta y una tabla
        </h2>

        <p className="leading-relaxed">
          Es importante comprender que una consulta de selección no crea
          una copia permanente de los registros ni modifica la información
          almacenada en las tablas.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-3">
              Tabla
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Almacena información.</li>
              <li>Contiene registros y campos.</li>
              <li>Conserva los datos de la base.</li>
              <li>Puede recibir modificaciones.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 text-lg mb-3">
              Consulta de selección
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recupera información.</li>
              <li>Aplica filtros y ordenamientos.</li>
              <li>Puede combinar tablas.</li>
              <li>No modifica los registros originales.</li>
            </ul>
          </div>
        </div>

        <p className="leading-relaxed mt-5">
          Las consultas guardadas en Access conservan su definición y
          pueden ejecutarse nuevamente para obtener resultados actualizados
          según los datos existentes en ese momento.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <p className="leading-relaxed">
          Las siguientes actividades deben realizarse desde la Vista SQL
          de Microsoft Access, utilizando la base de datos del sistema de
          gestión hotelera. En cada ejercicio se deberá escribir, ejecutar,
          comprobar y guardar la consulta correspondiente.
        </p>

        <div className="space-y-6 mt-6">
          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 1: consultas básicas
            </h3>
            <p>
              Diseñá dos consultas SQL utilizando la tabla Huespedes.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                La primera debe mostrar todos los campos de los huéspedes.
              </li>
              <li>
                La segunda debe mostrar únicamente Nombre, Apellido,
                DNI y Telefono.
              </li>
              <li>
                Guardá las consultas como qryTodosLosHuespedes y
                qryDatosBasicosHuespedes.
              </li>
              <li>
                Explicá la diferencia entre utilizar SELECT * y seleccionar
                campos específicos.
              </li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 2: filtros y condiciones
            </h3>
            <p>
              El hotel necesita consultar las habitaciones disponibles
              con capacidad para más de dos personas y un precio por noche
              inferior a $500.000.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Utilizá la cláusula WHERE.</li>
              <li>Combiná las condiciones mediante AND.</li>
              <li>Mostrá número, tipo, capacidad y precio.</li>
              <li>Guardá la consulta como qryHabitacionesFiltradas.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 3: búsquedas de huéspedes y reservas
            </h3>
            <p>
              Diseñá consultas que permitan buscar huéspedes cuyo apellido
              comience con una letra o grupo de letras determinado y
              consultar reservas según su estado.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Utilizá LIKE para la búsqueda por apellido.</li>
              <li>Utilizá WHERE para filtrar por EstadoReserva.</li>
              <li>Probá las consultas con diferentes valores.</li>
              <li>Guardalas con nombres descriptivos.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 4: reservas por período
            </h3>
            <p>
              Creá una consulta que permita obtener las reservas cuya
              FechaEntrada se encuentre comprendida entre dos fechas.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Utilizá BETWEEN.</li>
              <li>Configurá dos parámetros de tipo fecha.</li>
              <li>Ejecutá la consulta con diferentes períodos.</li>
              <li>Ordená los resultados por FechaEntrada.</li>
              <li>Guardá la consulta como qryReservasPorPeriodoSQL.</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mb-3">
              Actividad 5: combinar tablas y calcular importes
            </h3>
            <p>
              Diseñá una consulta que combine Reservas, Huespedes y
              Habitaciones para obtener un listado completo de las reservas.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Utilizá INNER JOIN para relacionar las tablas.</li>
              <li>Mostrá el nombre y apellido del huésped.</li>
              <li>Incluí el número de habitación y las fechas de la reserva.</li>
              <li>Incorporá el precio por noche.</li>
              <li>Agregá un campo calculado ImporteEstimado.</li>
              <li>Guardá la consulta como qryDetalleReservasSQL.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: consultas para la administración del hotel
        </h2>

        <p className="leading-relaxed">
          El hotel necesita disponer de un conjunto de consultas SQL que
          permita obtener información precisa para organizar las tareas
          administrativas y atender las solicitudes de los huéspedes.
        </p>

        <p className="leading-relaxed mt-4">
          Como responsable del desarrollo del sistema, deberás construir
          las siguientes consultas de selección.
        </p>

        <div className=" rounded-lg p-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Consultas solicitadas
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Listado de huéspedes:</strong> mostrar nombre,
              apellido, DNI, teléfono y correo electrónico.
            </li>
            <li>
              <strong>Habitaciones disponibles:</strong> mostrar número,
              tipo, capacidad y precio de las habitaciones cuyo estado
              registrado sea Disponible.
            </li>
            <li>
              <strong>Reservas confirmadas:</strong> obtener todas las
              reservas confirmadas, ordenadas por fecha de entrada.
            </li>
            <li>
              <strong>Búsqueda por apellido:</strong> permitir buscar
              huéspedes mediante un parámetro y mostrar sus reservas.
            </li>
            <li>
              <strong>Reservas por período:</strong> solicitar una fecha
              inicial y otra final para consultar las entradas comprendidas
              dentro del intervalo.
            </li>
            <li>
              <strong>Detalle de reservas:</strong> combinar huéspedes,
              habitaciones y reservas para mostrar toda la información
              necesaria.
            </li>
            <li>
              <strong>Importes estimados:</strong> calcular la cantidad
              de noches y el costo de alojamiento de cada reserva.
            </li>
            <li>
              <strong>Estadísticas:</strong> obtener la cantidad total
              de huéspedes y el precio promedio de las habitaciones.
            </li>
          </ol>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-8 mb-4">
          Entrega del trabajo
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Crear las ocho consultas en Microsoft Access.</li>
          <li>Escribir las instrucciones en la Vista SQL.</li>
          <li>Guardar cada consulta con un nombre descriptivo.</li>
          <li>Ejecutar y verificar que los resultados sean correctos.</li>
          <li>Presentar capturas de las instrucciones y sus resultados.</li>
          <li>Explicar las cláusulas y operadores utilizados.</li>
          <li>Indicar qué necesidad administrativa resuelve cada consulta.</li>
        </ul>

        <div className="border-l-4 border-blue-700  p-5 rounded mt-6">
          <p className="font-bold text-blue-900">
            Objetivo de la actividad
          </p>
          <p className="mt-2">
            Desarrollar consultas SQL de selección que permitan recuperar,
            filtrar, ordenar y combinar información de distintas tablas,
            aplicando los conocimientos adquiridos para mejorar el
            funcionamiento del sistema de gestión hotelera.
          </p>
        </div>
      </section>
    </div>
  );
}
