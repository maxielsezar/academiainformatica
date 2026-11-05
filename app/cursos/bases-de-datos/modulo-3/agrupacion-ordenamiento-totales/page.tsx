
export default function AgrupacionOrdenamientoTotalesPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Agrupación, ordenamiento y totales
        </h1>

        <p className="leading-relaxed mb-4">
          Los informes de Microsoft Access permiten organizar grandes
          cantidades de información mediante herramientas de agrupamiento,
          ordenamiento y cálculo de totales. Estas funciones facilitan la
          lectura de los datos y permiten obtener resúmenes útiles para
          el trabajo administrativo.
        </p>

        <p className="leading-relaxed">
          Por ejemplo, una empresa puede organizar sus productos por
          categoría, ordenar los registros alfabéticamente y calcular
          el valor total de sus existencias. De esta manera, un informe
          no solamente muestra datos, sino que también permite analizarlos
          y obtener información relevante.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Comprender la utilidad de agrupar registros en un informe.</li>
          <li>Aplicar diferentes criterios de ordenamiento.</li>
          <li>Organizar información mediante uno o varios niveles de agrupación.</li>
          <li>Calcular sumas, promedios, cantidades y otros totales.</li>
          <li>Utilizar subtotales y totales generales.</li>
          <li>Interpretar resultados para obtener información administrativa.</li>
        </ul>
      </section>

      {/* Agrupamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la agrupación de registros?
        </h2>

        <p className="leading-relaxed mb-4">
          La agrupación consiste en reunir registros que tienen un mismo
          valor en un campo determinado. Esto permite dividir la información
          en secciones y facilitar la consulta de datos relacionados.
        </p>

        <p className="leading-relaxed mb-4">
          En Access, un informe puede agrupar registros por diferentes
          campos, como categoría, localidad, proveedor, fecha o tipo de
          operación.
        </p>

        <div className=" border-l-4 border-blue-700 p-5 rounded-r-lg">
          <h3 className="font-bold text-blue-900 mb-2">
            Ejemplo: productos de una librería
          </h3>

          <p className="text-blue-950 leading-relaxed mb-3">
            Una librería tiene los siguientes productos:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-500">
                  <th className="border border-blue-200 p-2 text-left">Producto</th>
                  <th className="border border-blue-200 p-2 text-left">Categoría</th>
                  <th className="border border-blue-200 p-2 text-right">Precio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cuaderno", "Papelería", "$4.500"],
                  ["Carpeta", "Papelería", "$3.800"],
                  ["Novela", "Libros", "$12.000"],
                  ["Diccionario", "Libros", "$18.000"],
                  ["Bolígrafo", "Escritura", "$1.200"],
                ].map((item) => (
                  <tr key={item[0]}>
                    {item.map((dato) => (
                      <td key={dato} className="border border-blue-200 p-2">
                        {dato}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-blue-950 leading-relaxed mt-3">
            Si agrupamos por categoría, Access reunirá los productos
            correspondientes a Papelería, Libros y Escritura en secciones
            independientes.
          </p>
        </div>
      </section>

      {/* Resultado agrupado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo se presenta un informe agrupado
        </h2>

        <p className="leading-relaxed mb-4">
          Cuando se agrupan los registros, el informe puede mostrar un
          encabezado para cada grupo y, si es necesario, un pie con
          información resumida.
        </p>

        <div className="border border-blue-200 rounded-xl p-5">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplo de informe agrupado por categoría
          </h3>

          <div className="space-y-5">
            <div>
              <div className="bg-blue-100 text-blue-900 font-bold p-2 rounded-t-lg">
                Categoría: Papelería
              </div>
              <div className="p-3 border border-blue-100 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cuaderno</span>
                  <span>$4.500</span>
                </div>
                <div className="flex justify-between">
                  <span>Carpeta</span>
                  <span>$3.800</span>
                </div>
                <div className="border-t border-blue-200 pt-2 flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>$8.300</span>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-blue-100 text-blue-900 font-bold p-2 rounded-t-lg">
                Categoría: Libros
              </div>
              <div className="p-3 border border-blue-100 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Novela</span>
                  <span>$12.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Diccionario</span>
                  <span>$18.000</span>
                </div>
                <div className="border-t border-blue-200 pt-2 flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>$30.000</span>
                </div>
              </div>
            </div>

            <div className=" p-3 rounded-lg flex justify-between font-bold text-blue-900">
              <span>Total general</span>
              <span>$38.300</span>
            </div>
          </div>

          <p className="text-sm mt-3">
            Los valores son ilustrativos y representan una posible
            presentación de un informe con agrupaciones y subtotales.
          </p>
        </div>
      </section>

      {/* Ordenamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ordenamiento de registros
        </h2>

        <p className="leading-relaxed mb-4">
          El ordenamiento permite establecer en qué secuencia aparecerán
          los registros dentro de un informe. Se utiliza para facilitar
          la búsqueda y consulta de información.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Tipos de ordenamiento
        </h3>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-xl p-5">
            <h4 className="font-bold text-blue-900 mb-2">
              Orden ascendente
            </h4>
            <p className="leading-relaxed mb-2">
              Organiza los datos de menor a mayor o de la A a la Z,
              según el tipo de campo.
            </p>
            <p className="text-sm">
              Ejemplo: Ana, Carlos, Laura, Martín.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h4 className="font-bold text-blue-900 mb-2">
              Orden descendente
            </h4>
            <p className="leading-relaxed mb-2">
              Organiza los datos de mayor a menor o de la Z a la A.
            </p>
            <p className="text-sm">
              Ejemplo: Martín, Laura, Carlos, Ana.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Ejemplos según el tipo de campo
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Texto:</strong> ordenar productos alfabéticamente.
          </li>
          <li>
            <strong>Números:</strong> ordenar precios de menor a mayor.
          </li>
          <li>
            <strong>Fechas:</strong> organizar ventas desde la más antigua
            hasta la más reciente.
          </li>
          <li>
            <strong>Importes:</strong> identificar las operaciones de mayor
            valor.
          </li>
        </ul>
      </section>

      {/* Ordenamiento múltiple */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ordenamiento por varios campos
        </h2>

        <p className="leading-relaxed mb-4">
          En algunos informes es necesario utilizar más de un criterio
          de ordenamiento. Esto permite organizar los datos de manera
          más precisa.
        </p>

        <p className="leading-relaxed mb-4">
          Por ejemplo, una empresa puede ordenar sus clientes primero
          por localidad y luego por apellido. De esta forma, los clientes
          quedan separados por localidad y ordenados alfabéticamente
          dentro de cada grupo.
        </p>

        <div className=" rounded-xl p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo de ordenamiento múltiple
          </h3>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Primer criterio: localidad, en orden ascendente.</li>
            <li>Segundo criterio: apellido, en orden ascendente.</li>
            <li>Tercer criterio: nombre, en orden ascendente.</li>
          </ol>

          <p className="leading-relaxed mt-3">
            El resultado será un listado de clientes organizado por
            localidad y, dentro de cada localidad, por apellido y nombre.
          </p>
        </div>
      </section>

      {/* Totales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cálculo de totales en los informes
        </h2>

        <p className="leading-relaxed mb-4">
          Access permite realizar cálculos sobre los registros de un informe.
          Estas operaciones ayudan a resumir la información y obtener
          resultados que pueden utilizarse para el control administrativo.
        </p>

        <p className="leading-relaxed mb-5">
          Los cálculos pueden aplicarse a todos los registros o solamente
          a los que pertenecen a un grupo determinado.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Suma</h3>
            <p className="leading-relaxed">
              Permite sumar los valores de un campo numérico. Por ejemplo,
              calcular el total de ventas realizadas.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Promedio</h3>
            <p className="leading-relaxed">
              Calcula el valor promedio de un conjunto de registros.
              Por ejemplo, obtener el precio promedio de los productos.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Mínimo</h3>
            <p className="leading-relaxed">
              Identifica el valor más bajo de un campo. Puede utilizarse
              para conocer el precio mínimo de un producto.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Máximo</h3>
            <p className="leading-relaxed">
              Identifica el valor más alto. Por ejemplo, encontrar la venta
              de mayor importe.
            </p>
          </div>

          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-bold text-blue-900">Cuenta</h3>
            <p className="leading-relaxed">
              Permite contar los registros o los valores de un campo.
              Por ejemplo, conocer cuántos productos existen en una categoría.
            </p>
          </div>
        </div>
      </section>

      {/* Subtotales y total general */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Subtotales y totales generales
        </h2>

        <p className="leading-relaxed mb-4">
          Los subtotales representan resultados parciales calculados para
          cada grupo de registros. Los totales generales, en cambio,
          muestran el resultado correspondiente al conjunto completo
          de información.
        </p>

        <div className="border border-blue-200 rounded-xl p-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo: ventas por vendedor
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-500">
                  <th className="border border-blue-200 p-3 text-left">Vendedor</th>
                  <th className="border border-blue-200 p-3 text-right">Venta 1</th>
                  <th className="border border-blue-200 p-3 text-right">Venta 2</th>
                  <th className="border border-blue-200 p-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-blue-200 p-3">Ana</td>
                  <td className="border border-blue-200 p-3 text-right">$20.000</td>
                  <td className="border border-blue-200 p-3 text-right">$15.000</td>
                  <td className="border border-blue-200 p-3 text-right">$35.000</td>
                </tr>
                <tr>
                  <td className="border border-blue-200 p-3">Carlos</td>
                  <td className="border border-blue-200 p-3 text-right">$12.000</td>
                  <td className="border border-blue-200 p-3 text-right">$18.000</td>
                  <td className="border border-blue-200 p-3 text-right">$30.000</td>
                </tr>
                <tr className=" font-bold">
                  <td className="border border-blue-200 p-3" colSpan={3}>
                    Total general
                  </td>
                  <td className="border border-blue-200 p-3 text-right">
                    $65.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm mt-3">
            Los importes son ilustrativos. Cada subtotal corresponde a
            las ventas de un vendedor y el total general reúne todas
            las operaciones.
          </p>
        </div>
      </section>

      {/* Configuración en Access */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo configurar agrupaciones y ordenamientos en Access
        </h2>

        <p className="leading-relaxed mb-4">
          Access permite establecer criterios de agrupamiento y ordenamiento
          desde las herramientas disponibles en la vista Diseño o
          Presentación del informe.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Procedimiento general
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>Abrir la base de datos y seleccionar el informe.</li>
          <li>Ingresar a la vista Diseño o Presentación.</li>
          <li>Buscar la opción de Agrupar y ordenar en la pestaña Diseño de informe.</li>
          <li>Agregar un nivel de agrupamiento.</li>
          <li>Seleccionar el campo que se utilizará para agrupar los registros.</li>
          <li>Definir el criterio de ordenamiento ascendente o descendente.</li>
          <li>Agregar otros niveles si se necesitan criterios adicionales.</li>
          <li>Configurar las opciones de totales cuando corresponda.</li>
          <li>Guardar y revisar el resultado.</li>
        </ol>

        <div className=" border-l-4 border-blue-700 p-5 rounded-r-lg mt-5">
          <h3 className="font-bold text-blue-900 mb-2">
            Importante
          </h3>
          <p className="text-blue-950 leading-relaxed">
            La ubicación y los nombres de algunas herramientas pueden variar
            según la versión de Microsoft Access. Para obtener subtotales,
            es necesario utilizar las opciones de totalización disponibles
            para el campo y el nivel de agrupamiento correspondiente.
          </p>
        </div>
      </section>

      {/* Totales en Access */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo agregar totales a un informe
        </h2>

        <p className="leading-relaxed mb-4">
          Para calcular resultados en un informe se pueden utilizar las
          opciones de totales disponibles en el panel de agrupación y
          ordenamiento o incorporar controles calculados en las secciones
          correspondientes.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Ejemplo: calcular el total de ventas
        </h3>

        <p className="leading-relaxed mb-4">
          Supongamos que un informe contiene un campo llamado Importe.
          Para calcular el total general, podemos agregar un cuadro de texto
          en el pie del informe y utilizar una expresión de suma:
        </p>

        <div className="bg-blue-950 rounded-xl p-5 text-white">
          <p className="text-blue-200 text-sm mb-2">
            Expresión de Access
          </p>
          <code className="text-lg font-semibold">
            =Sum([Importe])
          </code>
        </div>

        <p className="leading-relaxed mt-4 mb-4">
          Si necesitamos calcular el subtotal de cada vendedor, podemos
          colocar una expresión equivalente en el pie del grupo correspondiente:
        </p>

        <div className="bg-blue-950 rounded-xl p-5 text-white">
          <p className="text-blue-200 text-sm mb-2">
            Subtotal por vendedor
          </p>
          <code className="text-lg font-semibold">
            =Sum([Importe])
          </code>
        </div>

        <p className="leading-relaxed mt-4">
          La diferencia está en la ubicación del control: en el pie de
          grupo se calcula el resultado de cada grupo, mientras que en
          el pie del informe se obtiene el resultado general.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Otras expresiones útiles
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Operación</th>
                <th className="border border-blue-200 p-3 text-left">Expresión</th>
                <th className="border border-blue-200 p-3 text-left">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">Suma</td>
                <td className="border border-blue-200 p-3"><code>=Sum([Importe])</code></td>
                <td className="border border-blue-200 p-3">Total de importes.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Promedio</td>
                <td className="border border-blue-200 p-3"><code>=Avg([Importe])</code></td>
                <td className="border border-blue-200 p-3">Promedio de importes.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Mínimo</td>
                <td className="border border-blue-200 p-3"><code>=Min([Importe])</code></td>
                <td className="border border-blue-200 p-3">Menor importe.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Máximo</td>
                <td className="border border-blue-200 p-3"><code>=Max([Importe])</code></td>
                <td className="border border-blue-200 p-3">Mayor importe.</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Cantidad</td>
                <td className="border border-blue-200 p-3"><code>=Count([IdVenta])</code></td>
                <td className="border border-blue-200 p-3">Cantidad de ventas con identificador.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed mt-4">
          Estas expresiones utilizan los nombres de funciones habituales
          de Access. El campo indicado debe existir en el origen de datos
          del informe y tener un tipo compatible con la operación.
        </p>
      </section>

      {/* Aplicaciones administrativas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicaciones en la gestión administrativa
        </h2>

        <p className="leading-relaxed mb-5">
          La agrupación, el ordenamiento y los totales pueden utilizarse
          en diferentes áreas de una organización.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              titulo: "Ventas",
              descripcion:
                "Agrupar las ventas por vendedor, ordenar por fecha y calcular los importes totales.",
            },
            {
              titulo: "Inventario",
              descripcion:
                "Agrupar productos por categoría, ordenar por nombre y calcular las cantidades disponibles.",
            },
            {
              titulo: "Clientes",
              descripcion:
                "Organizar los clientes por localidad y contar los registros de cada zona.",
            },
            {
              titulo: "Proveedores",
              descripcion:
                "Agrupar proveedores por rubro y ordenar sus datos alfabéticamente.",
            },
            {
              titulo: "Educación",
              descripcion:
                "Agrupar estudiantes por curso y calcular la cantidad de inscriptos.",
            },
            {
              titulo: "Administración",
              descripcion:
                "Resumir gastos por período y obtener totales mensuales.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className="border border-blue-200 rounded-xl p-5"
            >
              <h3 className="font-bold text-blue-900 mb-2">
                {item.titulo}
              </h3>
              <p className="leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: Agrupar productos por categoría
            </h3>

            <p className="leading-relaxed mb-3">
              Utilizando la base de datos de una librería, creá un informe
              que muestre los productos organizados por categoría.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Seleccioná la tabla o consulta Productos.</li>
              <li>Creá un informe con nombre, categoría y precio.</li>
              <li>Configurá la agrupación por categoría.</li>
              <li>Revisá que los productos aparezcan en el grupo correcto.</li>
              <li>Guardá el informe como ProductosPorCategoria.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: Ordenar registros
            </h3>

            <p className="leading-relaxed mb-3">
              Modificá un informe de clientes para presentar los datos
              de forma ordenada.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Ordená los clientes por apellido de A a Z.</li>
              <li>Agregá un segundo criterio por nombre.</li>
              <li>Creá una segunda versión ordenada por localidad.</li>
              <li>Compará los resultados.</li>
              <li>Guardá ambos informes con nombres descriptivos.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: Calcular totales y promedios
            </h3>

            <p className="leading-relaxed mb-3">
              Creá un informe que presente los precios de los productos
              de una librería.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Incluí nombre y precio de cada producto.</li>
              <li>Calculá el precio promedio.</li>
              <li>Identificá el precio mínimo.</li>
              <li>Identificá el precio máximo.</li>
              <li>Incorporá los resultados al pie del informe.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: Calcular subtotales por grupo
            </h3>

            <p className="leading-relaxed mb-3">
              Una empresa necesita conocer el importe total de ventas
              realizadas por cada vendedor.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Utilizá una tabla o consulta de ventas.</li>
              <li>Incluí vendedor, fecha e importe.</li>
              <li>Agrupá los registros por vendedor.</li>
              <li>Calculá el subtotal de cada vendedor.</li>
              <li>Incorporá un total general al final del informe.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: Analizar un informe administrativo
            </h3>

            <p className="leading-relaxed mb-3">
              Creá un informe que permita analizar los gastos mensuales
              de una organización.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Agrupá los gastos por categoría.</li>
              <li>Ordená los registros por fecha.</li>
              <li>Calculá el subtotal de cada categoría.</li>
              <li>Obtené el total general de gastos.</li>
              <li>Identificá cuál es la categoría con mayor gasto.</li>
              <li>Escribí una breve conclusión sobre los resultados.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Análisis de ventas de una librería
        </h2>

        <p className="leading-relaxed mb-4">
          Una librería necesita analizar las ventas realizadas durante
          un período para conocer el desempeño de sus vendedores,
          identificar los productos más vendidos y calcular los ingresos
          obtenidos.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Objetivo
        </h3>

        <p className="leading-relaxed mb-5">
          Crear informes que utilicen agrupaciones, ordenamientos y cálculos
          para resumir la información comercial y facilitar la toma
          de decisiones.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Estructura de datos sugerida
        </h3>

        <div className="space-y-4 mb-6">
          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              Tabla Vendedores
            </h4>
            <p className="text-sm">
              IdVendedor, Nombre, Apellido y Teléfono.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              Tabla Productos
            </h4>
            <p className="text-sm">
              IdProducto, Nombre, Categoría y Precio.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              Tabla Ventas
            </h4>
            <p className="text-sm">
              IdVenta, Fecha, IdVendedor e ImporteTotal.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              Tabla DetalleVentas
            </h4>
            <p className="text-sm">
              IdDetalle, IdVenta, IdProducto, Cantidad y PrecioUnitario.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Informes solicitados
        </h3>

        <div className="space-y-4 mb-6">
          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              1. Ventas por vendedor
            </h4>
            <p className="leading-relaxed">
              Agrupar las operaciones por vendedor, ordenar las ventas
              por fecha y calcular el subtotal vendido por cada uno.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              2. Productos por categoría
            </h4>
            <p className="leading-relaxed">
              Agrupar los productos por categoría, ordenarlos alfabéticamente
              y calcular la cantidad de productos de cada grupo.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              3. Resumen general de ventas
            </h4>
            <p className="leading-relaxed">
              Mostrar el total de operaciones, el importe acumulado,
              el promedio de venta y la operación de mayor importe.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Consignas de trabajo
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Creá o utilizá una base de datos que contenga las tablas
            indicadas y sus relaciones.
          </li>
          <li>
            Prepará las consultas necesarias para obtener los datos
            de los informes.
          </li>
          <li>
            Creá los tres informes solicitados.
          </li>
          <li>
            Aplicá agrupaciones y ordenamientos según las necesidades
            de cada documento.
          </li>
          <li>
            Incorporá subtotales y totales generales.
          </li>
          <li>
            Calculá promedios, cantidades y valores máximos cuando
            corresponda.
          </li>
          <li>
            Revisá que los resultados sean correctos y que los informes
            presenten los datos claramente.
          </li>
          <li>
            Elaborá una conclusión sobre la información obtenida.
          </li>
        </ol>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Entrega
        </h3>

        <p className="leading-relaxed">
          Presentá la base de datos de Access con las consultas y los
          tres informes terminados. Adjuntá capturas de pantalla y un
          documento breve que explique los resultados obtenidos,
          incluyendo el vendedor con mayor volumen de ventas y las
          categorías de productos más representativas.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Criterios de evaluación
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Correcta selección de los campos para agrupar y ordenar.</li>
          <li>Aplicación adecuada de los criterios de ordenamiento.</li>
          <li>Correcto cálculo de subtotales y totales generales.</li>
          <li>Uso apropiado de funciones de resumen.</li>
          <li>Claridad en la presentación de los informes.</li>
          <li>Interpretación de los resultados obtenidos.</li>
        </ul>
      </section>

      {/* Cierre */}
      <section className=" border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          La agrupación permite reunir registros relacionados, el
          ordenamiento establece la secuencia en que se presentan y
          los totales permiten resumir la información mediante cálculos.
          Estas herramientas de Microsoft Access son fundamentales para
          elaborar informes administrativos que faciliten el control,
          el análisis de datos y la toma de decisiones.
        </p>
      </section>
    </div>
  );
}
