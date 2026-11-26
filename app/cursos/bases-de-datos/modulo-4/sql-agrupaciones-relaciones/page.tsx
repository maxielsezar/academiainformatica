
export default function SqlAgrupacionesRelacionesPage() {
  return (
    <div className="space-y-14">
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Consultas SQL con agrupaciones y relaciones
        </h1>

        <p className="text-lg leading-relaxed">
          En un sistema de gestión, muchas veces necesitamos obtener
          información que se encuentra distribuida en diferentes tablas.
          Por ejemplo, conocer el nombre de los huéspedes que realizaron
          reservas, identificar qué habitaciones fueron ocupadas o calcular
          cuánto dinero ingresó al hotel durante un período determinado.
        </p>

        <p className="leading-relaxed mt-4">
          Para resolver estas situaciones utilizamos las relaciones entre
          tablas y las consultas SQL con agrupaciones. Estas herramientas
          permiten combinar información, organizar registros y obtener
          resultados resumidos que facilitan la toma de decisiones.
        </p>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Objetivo de la clase
          </h3>
          <p>
            Aprender a relacionar tablas mediante JOIN y agrupar información
            utilizando GROUP BY y funciones de resumen, aplicándolas al
            sistema de gestión de reservas del hotel.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          1. ¿Por qué necesitamos relacionar tablas?
        </h2>

        <p className="leading-relaxed">
          En nuestra base de datos del hotel, la información está organizada
          en diferentes tablas para evitar duplicaciones y mantener los
          datos ordenados.
        </p>

        <p className="leading-relaxed mt-4">
          Por ejemplo, la tabla Reservas almacena el identificador del
          huésped y el identificador de la habitación, pero no necesita
          repetir todos los datos personales del huésped ni toda la
          descripción de la habitación.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Huespedes</h3>
            <p className="text-sm mb-3">
              Contiene los datos personales de cada huésped.
            </p>
            <pre className="bg-slate-950 text-green-300 p-3 rounded-lg text-sm overflow-x-auto">
{`IdHuesped
Nombre
Apellido
DNI
Telefono`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Reservas</h3>
            <p className="text-sm mb-3">
              Registra las reservas realizadas.
            </p>
            <pre className="bg-slate-950 text-green-300 p-3 rounded-lg text-sm overflow-x-auto">
{`IdReserva
IdHuesped
IdHabitacion
FechaEntrada
FechaSalida
EstadoReserva`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Habitaciones</h3>
            <p className="text-sm mb-3">
              Almacena la información de las habitaciones.
            </p>
            <pre className="bg-slate-950 text-green-300 p-3 rounded-lg text-sm overflow-x-auto">
{`IdHabitacion
NumeroHabitacion
TipoHabitacion
Capacidad
PrecioPorNoche
Estado`}
            </pre>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Pagos</h3>
            <p className="text-sm mb-3">
              Registra los pagos realizados por las reservas.
            </p>
            <pre className="bg-slate-950 text-green-300 p-3 rounded-lg text-sm overflow-x-auto">
{`IdPago
IdReserva
FechaPago
Importe
MetodoPago
EstadoPago`}
            </pre>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Relaciones entre las tablas
        </h3>

        <p className="leading-relaxed">
          Las tablas se conectan mediante claves primarias y claves
          foráneas. En nuestro sistema tenemos las siguientes relaciones:
        </p>

        <div className="rounded-xl p-5 mt-5 space-y-4">
          <div>
            <p className="font-bold text-blue-900">Huespedes → Reservas</p>
            <p className="text-sm">
              Un huésped puede realizar muchas reservas. Cada reserva
              pertenece a un huésped.
            </p>
          </div>
          <div className="border-t border-blue-200 pt-4">
            <p className="font-bold text-blue-900">Habitaciones → Reservas</p>
            <p className="text-sm">
              Una habitación puede aparecer en muchas reservas a lo largo
              del tiempo. Cada reserva corresponde a una habitación.
            </p>
          </div>
          <div className="border-t border-blue-200 pt-4">
            <p className="font-bold text-blue-900">Reservas → Pagos</p>
            <p className="text-sm">
              Una reserva puede tener uno o varios pagos. Cada pago
              corresponde a una reserva.
            </p>
          </div>
        </div>

        <p className="leading-relaxed mt-5">
          Estas relaciones permiten consultar información de varias tablas
          sin tener que duplicar los datos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          2. JOIN: combinar información de varias tablas
        </h2>

        <p className="leading-relaxed">
          La instrucción <strong>JOIN</strong> permite combinar registros
          de dos o más tablas utilizando un campo relacionado. De esta
          manera podemos obtener información que se encuentra distribuida
          en diferentes partes de la base de datos.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          INNER JOIN: coincidencias entre tablas
        </h3>

        <p className="leading-relaxed">
          INNER JOIN devuelve solamente los registros que tienen una
          coincidencia en ambas tablas, según la condición de relación.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT Campos
FROM Tabla1
INNER JOIN Tabla2
ON Tabla1.CampoRelacionado = Tabla2.CampoRelacionado;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: mostrar las reservas con los datos del huésped
        </h3>

        <p className="leading-relaxed">
          Necesitamos obtener un listado de reservas que incluya el nombre,
          apellido y DNI del huésped, además de las fechas de entrada y
          salida.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    Huespedes.Nombre,
    Huespedes.Apellido,
    Huespedes.DNI,
    Reservas.FechaEntrada,
    Reservas.FechaSalida,
    Reservas.EstadoReserva
FROM Huespedes
INNER JOIN Reservas
ON Huespedes.IdHuesped = Reservas.IdHuesped;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          La consulta combina los datos personales de Huespedes con los
          datos de las reservas. El campo IdHuesped permite identificar
          qué reservas pertenecen a cada persona.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          LEFT JOIN: conservar todos los registros de la primera tabla
        </h3>

        <p className="leading-relaxed">
          LEFT JOIN devuelve todos los registros de la tabla ubicada a la
          izquierda, incluso cuando no existe una coincidencia en la
          segunda tabla. Cuando no hay coincidencia, los campos de la
          segunda tabla aparecen como NULL.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    Huespedes.Nombre,
    Huespedes.Apellido,
    Reservas.IdReserva
FROM Huespedes
LEFT JOIN Reservas
ON Huespedes.IdHuesped = Reservas.IdHuesped;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Esta consulta permite mostrar todos los huéspedes, incluso
          aquellos que todavía no realizaron ninguna reserva.
        </p>

        <div className="rounded-xl p-5 mt-6">
          <h4 className="font-bold text-blue-900 mb-2">
            Diferencia entre INNER JOIN y LEFT JOIN
          </h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>INNER JOIN:</strong> muestra únicamente las
              coincidencias entre ambas tablas.
            </li>
            <li>
              <strong>LEFT JOIN:</strong> muestra todos los registros de
              la primera tabla y las coincidencias de la segunda.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          3. Relacionar más de dos tablas
        </h2>

        <p className="leading-relaxed">
          En muchas situaciones necesitamos combinar tres o más tablas
          para obtener información completa. SQL permite encadenar varias
          operaciones JOIN utilizando las claves relacionadas.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: reservas, huéspedes y habitaciones
        </h3>

        <p className="leading-relaxed">
          El hotel necesita un listado que muestre el nombre del huésped,
          el número de habitación, el tipo de habitación y las fechas
          de la reserva.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    Huespedes.Nombre,
    Huespedes.Apellido,
    Habitaciones.NumeroHabitacion,
    Habitaciones.TipoHabitacion,
    Reservas.FechaEntrada,
    Reservas.FechaSalida
FROM
    (Huespedes
    INNER JOIN Reservas
    ON Huespedes.IdHuesped = Reservas.IdHuesped)
    INNER JOIN Habitaciones
    ON Reservas.IdHabitacion = Habitaciones.IdHabitacion;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          En esta consulta Access combina primero los huéspedes con sus
          reservas y luego incorpora los datos de las habitaciones.
          Los paréntesis permiten establecer correctamente el orden
          de las relaciones cuando se utilizan varios JOIN.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Ejemplo: consultar reservas y pagos
        </h3>

        <p className="leading-relaxed">
          También podemos relacionar las tablas Reservas y Pagos para
          consultar cuánto dinero se registró en cada reserva.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    Reservas.IdReserva,
    Reservas.FechaEntrada,
    Pagos.FechaPago,
    Pagos.Importe,
    Pagos.MetodoPago,
    Pagos.EstadoPago
FROM Reservas
INNER JOIN Pagos
ON Reservas.IdReserva = Pagos.IdReserva;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          De esta manera podemos consultar los pagos asociados a cada
          reserva. Si una reserva tiene varios pagos, aparecerá una fila
          por cada pago registrado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          4. GROUP BY: agrupar registros
        </h2>

        <p className="leading-relaxed">
          La cláusula <strong>GROUP BY</strong> permite agrupar registros
          que tienen el mismo valor en uno o varios campos. Se utiliza
          principalmente junto con funciones de resumen para obtener
          estadísticas.
        </p>

        <p className="leading-relaxed mt-4">
          Por ejemplo, podemos contar cuántas reservas realizó cada
          huésped, calcular los ingresos por método de pago o conocer
          cuántas habitaciones existen de cada tipo.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Estructura general
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT CampoAgrupacion, FuncionResumen(Campo)
FROM Tabla
GROUP BY CampoAgrupacion;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: cantidad de reservas por huésped
        </h3>

        <p className="leading-relaxed">
          El hotel necesita saber cuántas reservas realizó cada huésped.
          Para ello agrupamos por identificador y utilizamos COUNT.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    IdHuesped,
    COUNT(*) AS CantidadReservas
FROM Reservas
GROUP BY IdHuesped;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          El resultado muestra un registro por cada huésped que tenga
          reservas y la cantidad total de reservas que realizó.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Ejemplo: cantidad de habitaciones por tipo
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    TipoHabitacion,
    COUNT(*) AS Cantidad
FROM Habitaciones
GROUP BY TipoHabitacion;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Esta consulta permite conocer cuántas habitaciones individuales,
          dobles, matrimoniales o familiares tiene el hotel.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          5. Funciones de resumen
        </h2>

        <p className="leading-relaxed">
          Las funciones de resumen permiten realizar cálculos sobre un
          conjunto de registros. Se utilizan frecuentemente junto con
          GROUP BY, aunque algunas también pueden utilizarse sin agrupar
          para obtener un resultado general.
        </p>

        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse border border-blue-200 text-sm">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">
                  Función
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Utilidad
                </th>
                <th className="border border-blue-200 p-3 text-left">
                  Ejemplo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3 font-bold">COUNT</td>
                <td className="border border-blue-200 p-3">
                  Cuenta registros o valores.
                </td>
                <td className="border border-blue-200 p-3">
                  Cantidad de reservas.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-bold">SUM</td>
                <td className="border border-blue-200 p-3">
                  Suma valores numéricos.
                </td>
                <td className="border border-blue-200 p-3">
                  Total de pagos.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-bold">AVG</td>
                <td className="border border-blue-200 p-3">
                  Calcula el promedio.
                </td>
                <td className="border border-blue-200 p-3">
                  Precio promedio de habitaciones.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-bold">MIN</td>
                <td className="border border-blue-200 p-3">
                  Obtiene el valor mínimo.
                </td>
                <td className="border border-blue-200 p-3">
                  Menor precio por noche.
                </td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3 font-bold">MAX</td>
                <td className="border border-blue-200 p-3">
                  Obtiene el valor máximo.
                </td>
                <td className="border border-blue-200 p-3">
                  Mayor importe de pago.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          COUNT: contar registros
        </h3>

        <p className="leading-relaxed">
          Permite contar cuántos registros existen en un conjunto de datos.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT COUNT(*) AS TotalReservas
FROM Reservas;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          SUM: sumar importes
        </h3>

        <p className="leading-relaxed">
          Permite calcular la suma de los valores de un campo numérico.
          Por ejemplo, podemos obtener el total de pagos confirmados.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT SUM(Importe) AS TotalIngresos
FROM Pagos
WHERE EstadoPago = 'Confirmado';`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          AVG: calcular promedios
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT AVG(PrecioPorNoche) AS PrecioPromedio
FROM Habitaciones;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          MIN y MAX: obtener extremos
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    MIN(PrecioPorNoche) AS PrecioMinimo,
    MAX(PrecioPorNoche) AS PrecioMaximo
FROM Habitaciones;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Estas funciones permiten obtener estadísticas generales sin
          necesidad de mostrar cada registro individualmente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          6. GROUP BY combinado con JOIN
        </h2>

        <p className="leading-relaxed">
          Una de las aplicaciones más importantes consiste en combinar
          tablas relacionadas y luego agrupar sus registros. Así podemos
          obtener estadísticas que incluyan información de distintas
          partes de la base de datos.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: cantidad de reservas por huésped
        </h3>

        <p className="leading-relaxed">
          En lugar de mostrar solamente el identificador del huésped,
          queremos obtener su nombre y apellido junto con la cantidad
          de reservas realizadas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    Huespedes.Nombre,
    Huespedes.Apellido,
    COUNT(Reservas.IdReserva) AS CantidadReservas
FROM Huespedes
INNER JOIN Reservas
ON Huespedes.IdHuesped = Reservas.IdHuesped
GROUP BY
    Huespedes.IdHuesped,
    Huespedes.Nombre,
    Huespedes.Apellido;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          La consulta relaciona huéspedes y reservas, agrupa los registros
          por persona y cuenta cuántas reservas corresponden a cada una.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Ejemplo: ingresos por método de pago
        </h3>

        <p className="leading-relaxed">
          El hotel necesita conocer cuánto dinero recibió mediante cada
          método de pago.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    MetodoPago,
    COUNT(*) AS CantidadPagos,
    SUM(Importe) AS TotalIngresado
FROM Pagos
WHERE EstadoPago = 'Confirmado'
GROUP BY MetodoPago;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          El resultado permite comparar los ingresos registrados mediante
          efectivo, transferencia, tarjeta u otros medios utilizados
          por el hotel.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Ejemplo: ingresos por huésped
        </h3>

        <p className="leading-relaxed">
          También podemos relacionar las tablas Huespedes, Reservas y Pagos
          para calcular cuánto dinero pagó cada huésped.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    Huespedes.IdHuesped,
    Huespedes.Nombre,
    Huespedes.Apellido,
    SUM(Pagos.Importe) AS TotalPagado
FROM
    (Huespedes
    INNER JOIN Reservas
    ON Huespedes.IdHuesped = Reservas.IdHuesped)
    INNER JOIN Pagos
    ON Reservas.IdReserva = Pagos.IdReserva
WHERE Pagos.EstadoPago = 'Confirmado'
GROUP BY
    Huespedes.IdHuesped,
    Huespedes.Nombre,
    Huespedes.Apellido;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Esta consulta combina tres tablas y agrupa los pagos por huésped.
          De esta manera podemos obtener el importe total registrado para
          cada persona.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          7. HAVING: filtrar grupos
        </h2>

        <p className="leading-relaxed">
          Hasta ahora utilizamos WHERE para filtrar registros antes de
          agruparlos. Sin embargo, cuando necesitamos establecer condiciones
          sobre los resultados de una agrupación, utilizamos
          <strong> HAVING</strong>.
        </p>

        <div className="p-5 rounded-xl mt-5">
          <h3 className="font-bold text-blue-900 mb-2">
            Diferencia entre WHERE y HAVING
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>WHERE:</strong> filtra registros individuales antes
              de realizar la agrupación.
            </li>
            <li>
              <strong>HAVING:</strong> filtra los grupos después de
              aplicar GROUP BY.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo: huéspedes con más de dos reservas
        </h3>

        <p className="leading-relaxed">
          El hotel quiere identificar a los huéspedes que realizaron más
          de dos reservas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    IdHuesped,
    COUNT(*) AS CantidadReservas
FROM Reservas
GROUP BY IdHuesped
HAVING COUNT(*) > 2;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Primero se agrupan las reservas por huésped y luego HAVING
          conserva solamente los grupos que tienen más de dos registros.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Ejemplo: métodos de pago con ingresos superiores a $100.000
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    MetodoPago,
    SUM(Importe) AS TotalIngresado
FROM Pagos
WHERE EstadoPago = 'Confirmado'
GROUP BY MetodoPago
HAVING SUM(Importe) > 100000;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          En este caso WHERE selecciona primero los pagos confirmados.
          Luego GROUP BY agrupa por método de pago y HAVING muestra
          solamente los métodos cuyo total supera los $100.000.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          8. ORDER BY: ordenar los resultados agrupados
        </h2>

        <p className="leading-relaxed">
          Podemos combinar GROUP BY y ORDER BY para presentar los
          resultados en un orden determinado. Por ejemplo, mostrar primero
          los huéspedes con mayor cantidad de reservas.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    IdHuesped,
    COUNT(*) AS CantidadReservas
FROM Reservas
GROUP BY IdHuesped
ORDER BY COUNT(*) DESC;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          La palabra DESC ordena de mayor a menor. Si utilizamos ASC,
          los resultados se ordenan de menor a mayor.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Orden de las cláusulas SQL
        </h3>

        <p className="leading-relaxed">
          Cuando combinamos las diferentes instrucciones, debemos respetar
          el orden de escritura de la consulta:
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT Campos, FuncionResumen(Campo)
FROM Tabla
INNER JOIN OtraTabla
ON CondicionRelacion
WHERE CondicionRegistros
GROUP BY CamposAgrupacion
HAVING CondicionGrupos
ORDER BY CampoOrden;`}
        </pre>

        <div className="rounded-xl p-5 mt-5">
          <h4 className="font-bold text-blue-900 mb-2">
            Recordá el orden
          </h4>
          <p className="font-semibold text-blue-800">
            SELECT → FROM → JOIN → WHERE → GROUP BY → HAVING → ORDER BY
          </p>
          <p className="text-sm mt-2">
            No todas las consultas necesitan utilizar todas estas cláusulas.
            Se incorporan según la información que necesitamos obtener.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          9. Consultas de resumen aplicadas al hotel
        </h2>

        <p className="leading-relaxed">
          Con los conocimientos adquiridos podemos construir consultas
          que funcionen como informes estadísticos para la administración
          del establecimiento.
        </p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-3">
          Ejemplo 1: cantidad de reservas por estado
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    EstadoReserva,
    COUNT(*) AS Cantidad
FROM Reservas
GROUP BY EstadoReserva
ORDER BY COUNT(*) DESC;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Ejemplo 2: promedio de precios por tipo de habitación
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    TipoHabitacion,
    AVG(PrecioPorNoche) AS PrecioPromedio
FROM Habitaciones
GROUP BY TipoHabitacion;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Ejemplo 3: total de pagos por reserva
        </h3>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    Reservas.IdReserva,
    SUM(Pagos.Importe) AS TotalPagado
FROM Reservas
INNER JOIN Pagos
ON Reservas.IdReserva = Pagos.IdReserva
WHERE Pagos.EstadoPago = 'Confirmado'
GROUP BY Reservas.IdReserva
ORDER BY SUM(Pagos.Importe) DESC;`}
        </pre>

        <h3 className="text-xl font-bold text-blue-800 mt-8 mb-3">
          Ejemplo 4: huéspedes con y sin reservas
        </h3>

        <p className="leading-relaxed">
          Si queremos incluir también a los huéspedes que todavía no
          realizaron reservas, podemos utilizar LEFT JOIN.
        </p>

        <pre className="bg-slate-950 text-green-300 p-5 rounded-xl overflow-x-auto text-sm">
{`SELECT
    Huespedes.IdHuesped,
    Huespedes.Nombre,
    Huespedes.Apellido,
    COUNT(Reservas.IdReserva) AS CantidadReservas
FROM Huespedes
LEFT JOIN Reservas
ON Huespedes.IdHuesped = Reservas.IdHuesped
GROUP BY
    Huespedes.IdHuesped,
    Huespedes.Nombre,
    Huespedes.Apellido;`}
        </pre>

        <p className="mt-4 leading-relaxed">
          Es importante utilizar COUNT(Reservas.IdReserva) y no COUNT(*)
          en este caso. Así, los huéspedes sin reservas obtendrán un
          resultado de cero y no se contará la fila que genera el LEFT JOIN
          con valores nulos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          10. Consideraciones importantes al trabajar con JOIN y GROUP BY
        </h2>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              1. Verificar las relaciones
            </h3>
            <p>
              Antes de combinar tablas, identificar las claves primarias
              y foráneas que permiten relacionarlas.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              2. Utilizar alias descriptivos
            </h3>
            <p>
              Podemos asignar nombres cortos a las tablas para simplificar
              consultas extensas. Por ejemplo, Huespedes AS H y Reservas AS R.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              3. Agrupar los campos correctamente
            </h3>
            <p>
              Cuando se utilizan funciones de resumen, los campos que se
              muestran sin una función de resumen deben incluirse en
              GROUP BY.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              4. Evitar contar registros incorrectamente
            </h3>
            <p>
              Al relacionar tablas, una fila puede repetirse si existen
              varios registros relacionados. Por ejemplo, una reserva
              puede tener varios pagos. Debemos elegir cuidadosamente
              qué registros queremos contar o sumar.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-2">
              5. Interpretar correctamente los resultados
            </h3>
            <p>
              Un total de pagos registrados no siempre representa el total
              de una reserva ni el ingreso definitivo del hotel. Es
              necesario considerar el estado de los pagos y las condiciones
              del informe.
            </p>
          </div>
        </div>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Atención: duplicación de importes
          </h3>
          <p>
            Si una reserva tiene varios pagos, al relacionar Reservas con
            Pagos se genera una fila por cada pago. Si después sumamos
            importes de otras tablas que también tienen varios registros
            relacionados, podemos duplicar valores sin darnos cuenta.
            Siempre debemos revisar la estructura de las relaciones y
            el nivel de detalle de cada consulta.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          11. Actividades prácticas
        </h2>

        <p className="leading-relaxed mb-6">
          Realizá las siguientes actividades utilizando la base de datos
          del sistema de gestión hotelera. Guardá cada consulta con un
          nombre descriptivo y verificá los resultados obtenidos.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: huéspedes y reservas
            </h3>
            <p className="leading-relaxed">
              Elaborá una consulta SQL que relacione las tablas Huespedes
              y Reservas mediante INNER JOIN.
            </p>
            <p className="mt-3">La consulta debe mostrar:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nombre y apellido del huésped.</li>
              <li>DNI.</li>
              <li>Identificador de la reserva.</li>
              <li>Fecha de entrada y fecha de salida.</li>
              <li>Estado de la reserva.</li>
            </ul>
            <p className="mt-3">
              Guardá la consulta como <code>qryReservasPorHuesped</code>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: cantidad de reservas por estado
            </h3>
            <p className="leading-relaxed">
              Elaborá una consulta que utilice GROUP BY y COUNT para
              determinar cuántas reservas existen en cada estado.
            </p>
            <p className="mt-3">
              El resultado debe mostrar el estado de la reserva y la
              cantidad de registros correspondientes. Ordená los resultados
              desde el estado con mayor cantidad de reservas hasta el menor.
            </p>
            <p className="mt-3">
              Guardá la consulta como <code>qryCantidadReservasPorEstado</code>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: ingresos por método de pago
            </h3>
            <p className="leading-relaxed">
              Elaborá una consulta utilizando GROUP BY y SUM para calcular
              el total de pagos confirmados por cada método de pago.
            </p>
            <p className="mt-3">
              La consulta debe mostrar el método de pago, la cantidad de
              pagos y el importe total ingresado. Utilizá WHERE para
              considerar únicamente los pagos confirmados.
            </p>
            <p className="mt-3">
              Guardá la consulta como <code>qryIngresosPorMetodoPago</code>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: huéspedes frecuentes
            </h3>
            <p className="leading-relaxed">
              Elaborá una consulta que relacione Huespedes y Reservas,
              agrupe los registros por huésped y cuente cuántas reservas
              realizó cada persona.
            </p>
            <p className="mt-3">
              Utilizá HAVING para mostrar únicamente los huéspedes que
              tengan más de dos reservas. El resultado debe incluir
              nombre, apellido y cantidad de reservas.
            </p>
            <p className="mt-3">
              Guardá la consulta como <code>qryHuespedesFrecuentes</code>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: habitaciones y precios
            </h3>
            <p className="leading-relaxed">
              Elaborá una consulta que agrupe las habitaciones por
              TipoHabitacion y calcule:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>La cantidad de habitaciones de cada tipo.</li>
              <li>El precio promedio por noche.</li>
              <li>El precio mínimo.</li>
              <li>El precio máximo.</li>
            </ul>
            <p className="mt-3">
              Guardá la consulta como <code>qryResumenHabitaciones</code>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          12. Actividad integradora: informe estadístico del hotel
        </h2>

        <div className="border border-blue-200 rounded-xl p-6">
          <p className="leading-relaxed">
            La administración del hotel necesita conocer el funcionamiento
            del establecimiento para tomar decisiones. Como responsable
            de la base de datos, deberás construir un conjunto de consultas
            SQL que permitan generar un informe estadístico.
          </p>

          <h3 className="font-bold text-blue-900 mt-5 mb-3">
            Consignas
          </h3>

          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Crear una consulta que relacione huéspedes, reservas y
              habitaciones para mostrar quién realizó cada reserva y
              qué habitación utilizó.
            </li>
            <li>
              Crear una consulta que cuente la cantidad de reservas
              realizadas por cada huésped.
            </li>
            <li>
              Crear una consulta que calcule la cantidad de habitaciones
              disponibles de cada tipo, según el campo Estado de la tabla
              Habitaciones.
            </li>
            <li>
              Crear una consulta que calcule el total de pagos confirmados
              por cada reserva.
            </li>
            <li>
              Crear una consulta que agrupe los ingresos por método de pago
              y ordene los resultados de mayor a menor.
            </li>
            <li>
              Crear una consulta que identifique los huéspedes que
              realizaron más de dos reservas.
            </li>
          </ol>

          <h3 className="font-bold text-blue-900 mt-6 mb-3">
            Entrega del trabajo
          </h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Guardar todas las consultas con nombres descriptivos.
            </li>
            <li>
              Presentar el código SQL de cada consulta.
            </li>
            <li>
              Incluir capturas de pantalla de los resultados obtenidos.
            </li>
            <li>
              Explicar qué tablas se relacionaron y mediante qué campos.
            </li>
            <li>
              Explicar qué función de resumen se utilizó y qué información
              permite obtener.
            </li>
            <li>
              Elaborar una breve conclusión sobre la información que
              aportan las consultas a la administración del hotel.
            </li>
          </ul>

          <div className="border-t border-blue-200 mt-6 pt-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Criterios de evaluación
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Identifica correctamente las relaciones entre tablas.
              </li>
              <li>
                Utiliza INNER JOIN y LEFT JOIN de acuerdo con la información
                que necesita obtener.
              </li>
              <li>
                Aplica GROUP BY para agrupar registros.
              </li>
              <li>
                Utiliza COUNT, SUM, AVG, MIN y MAX correctamente.
              </li>
              <li>
                Diferencia y aplica WHERE y HAVING.
              </li>
              <li>
                Presenta consultas ordenadas y resultados coherentes.
              </li>
              <li>
                Interpreta la información obtenida y explica su utilidad
                para el hotel.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conclusión
        </h2>

        <p className="leading-relaxed">
          Las consultas SQL con relaciones y agrupaciones permiten obtener
          información mucho más completa que una consulta sobre una sola
          tabla. JOIN combina datos relacionados, GROUP BY organiza los
          registros en grupos y las funciones de resumen permiten calcular
          cantidades, sumas, promedios y valores extremos.
        </p>

        <p className="leading-relaxed mt-4">
          En nuestro sistema de gestión hotelera, estas herramientas
          permiten generar informes sobre huéspedes, reservas, habitaciones
          e ingresos, facilitando el control y la administración del
          establecimiento.
        </p>

        <div className="border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <h3 className="font-bold text-blue-900 mb-2">
            Próximo tema: integración de programación en Access
          </h3>
          <p>
            En la próxima clase vamos a integrar los conocimientos de
            programación, consultas SQL, macros y VBA para automatizar
            diferentes operaciones del sistema de gestión de reservas
            del hotel.
          </p>
        </div>
      </section>
    </div>
  );
}
