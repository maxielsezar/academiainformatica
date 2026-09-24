export default function DatosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Tipos de Datos en una Planilla de Cálculo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las planillas de cálculo permiten almacenar diferentes tipos de
          información dentro de las celdas. Identificar correctamente cada
          tipo de dato es fundamental para poder organizar la información y
          realizar cálculos posteriormente.
          <br /><br />
          Una celda puede contener texto, números, fechas, horas, porcentajes,
          valores monetarios, fórmulas y otros tipos de información.
        </p>
      </section>

      {/* Qué es un dato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Dato?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="leading-relaxed">
            Un dato es una unidad de información que puede ser ingresada y
            almacenada dentro de una celda de una planilla de cálculo.
            <br /><br />
            Los datos pueden representar información utilizada para registrar,
            organizar, consultar o procesar diferentes situaciones.
            <br /><br />
            Por ejemplo, una planilla administrativa puede contener nombres de
            clientes, cantidades de productos, fechas de operaciones y valores
            de ventas.
          </p>
        </div>
      </section>

      {/* Texto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos de Texto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los datos de texto representan información formada principalmente
          por caracteres y palabras. Generalmente se utilizan para identificar
          personas, productos, lugares, categorías o descripciones.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Juan Pérez</li>
            <li>Administración</li>
            <li>Producto A</li>
            <li>Esquel</li>
            <li>Proveedor</li>
            <li>Computadora portátil</li>
          </ul>
        </div>
      </section>

      {/* Números */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos Numéricos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los datos numéricos representan cantidades que pueden utilizarse
          para realizar operaciones matemáticas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>10</li>
            <li>250</li>
            <li>1250,50</li>
            <li>75</li>
            <li>1000</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Los números pueden utilizarse posteriormente en operaciones como
            sumas, restas, multiplicaciones, divisiones y otras funciones.
          </p>
        </div>
      </section>

      {/* Fechas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fechas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las fechas permiten registrar momentos específicos y organizar
          información cronológicamente.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>24/09/2026</li>
            <li>01/10/2026</li>
            <li>15/12/2026</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Las fechas pueden utilizarse para controlar vencimientos,
            registrar operaciones, ordenar información y calcular períodos
            de tiempo.
          </p>
        </div>
      </section>

      {/* Horas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Horas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las planillas también permiten registrar horarios y utilizarlos para
          organizar actividades o realizar determinados cálculos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>08:00</li>
            <li>12:30</li>
            <li>16:45</li>
            <li>18:00</li>
          </ul>

          <p className="mt-6">
            Pueden utilizarse, por ejemplo, para registrar horarios de
            entrada y salida de empleados.
          </p>
        </div>
      </section>

      {/* Porcentajes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Porcentajes
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los porcentajes permiten representar proporciones y son utilizados
          frecuentemente en tareas administrativas, comerciales y contables.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>10%</li>
            <li>21%</li>
            <li>50%</li>
            <li>75%</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Por ejemplo, un porcentaje puede utilizarse para representar un
            descuento, un impuesto o el nivel de cumplimiento de una tarea.
          </p>
        </div>
      </section>

      {/* Moneda */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Valores Monetarios
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los valores monetarios representan importes económicos y son muy
          utilizados en planillas administrativas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>$ 15.000</li>
            <li>$ 25.500</li>
            <li>$ 125.750,50</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Pueden utilizarse para registrar precios, ventas, gastos,
            presupuestos, salarios y otros movimientos económicos.
          </p>
        </div>
      </section>

      {/* Fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una fórmula es una expresión que permite realizar cálculos utilizando
          los valores almacenados en diferentes celdas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplos:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>=A1+B1</strong> — suma dos valores.</li>
            <li><strong>=A1-B1</strong> — realiza una resta.</li>
            <li><strong>=A1*B1</strong> — realiza una multiplicación.</li>
            <li><strong>=A1/B1</strong> — realiza una división.</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Las fórmulas permiten automatizar cálculos y evitar realizar
            operaciones manualmente.
          </p>
        </div>
      </section>

      {/* Funciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Funciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las funciones son herramientas que permiten realizar cálculos y
          operaciones específicas sobre los datos de una planilla.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunas funciones habituales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>SUMA:</strong> permite sumar diferentes valores.</li>
            <li><strong>PROMEDIO:</strong> calcula el promedio de un conjunto de valores.</li>
            <li><strong>MAX:</strong> identifica el valor máximo.</li>
            <li><strong>MIN:</strong> identifica el valor mínimo.</li>
            <li><strong>CONTAR:</strong> permite contar determinados datos.</li>
          </ul>
        </div>
      </section>

      {/* Datos y formato */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Datos y Formato
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El formato permite determinar cómo se muestran los datos dentro de
          una hoja. Un mismo tipo de información puede presentarse de
          diferentes maneras según las necesidades del documento.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunos formatos habituales:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Número.</li>
            <li>Moneda.</li>
            <li>Porcentaje.</li>
            <li>Fecha.</li>
            <li>Hora.</li>
            <li>Texto.</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Elegir correctamente el formato ayuda a mejorar la lectura y
            comprensión de la información.
          </p>
        </div>
      </section>

      {/* Importancia de identificar datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de Identificar Correctamente los Datos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Identificar correctamente los datos es importante porque las
          planillas utilizan esta información para realizar cálculos,
          ordenar registros, aplicar filtros y generar gráficos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Una correcta identificación permite:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Realizar cálculos correctamente.</li>
            <li>Ordenar información.</li>
            <li>Aplicar filtros.</li>
            <li>Crear gráficos.</li>
            <li>Utilizar funciones.</li>
            <li>Evitar errores en los resultados.</li>
            <li>Mejorar la organización de la información.</li>
          </ul>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en Tareas Administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En las tareas administrativas es habitual trabajar con diferentes
          tipos de datos dentro de una misma planilla.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Por ejemplo, una planilla de ventas puede contener:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>Fecha:</strong> fecha de la operación.</li>
            <li><strong>Cliente:</strong> nombre del cliente.</li>
            <li><strong>Producto:</strong> producto vendido.</li>
            <li><strong>Cantidad:</strong> cantidad de unidades.</li>
            <li><strong>Precio:</strong> valor del producto.</li>
            <li><strong>Descuento:</strong> porcentaje aplicado.</li>
            <li><strong>Total:</strong> resultado del cálculo.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Ingresar los datos de manera consistente.</li>
          <li>Utilizar formatos adecuados para cada tipo de información.</li>
          <li>Evitar mezclar diferentes tipos de datos en una misma columna.</li>
          <li>Revisar los datos antes de realizar cálculos.</li>
          <li>Utilizar fechas con un formato uniforme.</li>
          <li>Utilizar valores numéricos cuando se necesiten realizar operaciones.</li>
          <li>Evitar ingresar información innecesaria.</li>
          <li>Verificar que los resultados obtenidos sean coherentes.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>
            Crear una tabla con tres columnas: <strong>Nombre</strong>,
            <strong> Edad</strong> y <strong>Ciudad</strong>. Ingresar los
            datos de diez personas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear una tabla con diferentes productos e ingresar su nombre,
            cantidad, precio y fecha de ingreso.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Crear una columna con diferentes porcentajes y aplicar el formato
            correspondiente a cada valor.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Crear una tabla de ventas utilizando textos, números, fechas,
            porcentajes y valores monetarios.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Identificar el tipo de dato utilizado en cada una de las
            siguientes situaciones:
          </div>

          <div className="border p-6 rounded-xl">
            <ul className="list-disc list-inside space-y-3">
              <li>Nombre de un empleado.</li>
              <li>Cantidad de productos.</li>
              <li>Fecha de una venta.</li>
              <li>Precio de un producto.</li>
              <li>Porcentaje de descuento.</li>
              <li>Horario de ingreso.</li>
              <li>Total de una factura.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Imagina que trabajas como operador de informática en una oficina
          administrativa.

          <br /><br />

          Tu responsable te solicita crear una planilla para registrar las
          ventas realizadas durante un mes.

          <br /><br />

          La planilla deberá contener como mínimo las siguientes columnas:

          <br /><br />

          ✔ Fecha <br />
          ✔ Cliente <br />
          ✔ Producto <br />
          ✔ Cantidad <br />
          ✔ Precio unitario <br />
          ✔ Descuento <br />
          ✔ Total

          <br /><br />

          Para cada columna deberás determinar qué tipo de dato corresponde
          utilizar.

          <br /><br />

          Luego deberás ingresar al menos diez registros y aplicar el formato
          adecuado a cada columna.

          <br /><br />

          Finalmente, deberás explicar por qué es importante utilizar
          correctamente cada tipo de dato y qué problemas podrían aparecer
          si la información se registra de manera incorrecta.

        </div>
      </section>

    </div>
  );
}