export default function InterfazPlanillasCalculoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Interfaz y Herramientas de la Planilla de Cálculo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La interfaz de una planilla de cálculo está formada por diferentes
          elementos que permiten ingresar, organizar, modificar y analizar
          información.
          <br /><br />
          Conocer la ubicación y función de cada una de estas herramientas
          facilita el trabajo y permite utilizar el programa de manera más
          eficiente.
          <br /><br />
          Aunque existen diferentes aplicaciones de planillas de cálculo,
          como Microsoft Excel, LibreOffice Calc y Google Sheets, muchas de
          sus herramientas y elementos presentan un funcionamiento similar.
        </p>
      </section>

      {/* Ventana principal */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Ventana Principal
        </h2>

        <div className="border p-6 rounded-xl">
          La ventana principal es el espacio donde se desarrolla el trabajo
          con la planilla de cálculo.
          <br /><br />
          En ella se encuentran las herramientas para crear y modificar
          documentos, ingresar información, trabajar con las celdas y
          administrar las diferentes hojas del libro.
          <br /><br />
          La distribución exacta de los elementos puede variar según el
          programa utilizado, pero los conceptos principales son similares.
        </div>
      </section>

      {/* Elementos de la interfaz */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Principales Elementos de la Interfaz
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para trabajar correctamente con una planilla es necesario reconocer
          los principales elementos que forman parte de su entorno.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">

            <li>
              <strong>Barra de título:</strong> muestra el nombre del archivo
              o libro que se encuentra abierto.
            </li>

            <li>
              <strong>Menú o cinta de opciones:</strong> contiene las
              diferentes herramientas y comandos disponibles.
            </li>

            <li>
              <strong>Barra de herramientas:</strong> permite acceder
              rápidamente a funciones utilizadas con frecuencia.
            </li>

            <li>
              <strong>Barra de fórmulas:</strong> permite visualizar e
              ingresar el contenido de la celda seleccionada.
            </li>

            <li>
              <strong>Cuadro de nombre:</strong> permite identificar la
              referencia de la celda activa.
            </li>

            <li>
              <strong>Área de trabajo:</strong> espacio donde se encuentran
              las filas, columnas y celdas.
            </li>

            <li>
              <strong>Pestañas de hojas:</strong> permiten desplazarse entre
              las diferentes hojas de un libro.
            </li>

            <li>
              <strong>Barra de desplazamiento:</strong> permite recorrer
              diferentes zonas de la hoja.
            </li>

            <li>
              <strong>Barra de estado:</strong> muestra información sobre
              el estado actual del documento y la selección realizada.
            </li>

          </ul>

        </div>
      </section>

      {/* Filas y columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Filas y Columnas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El área de trabajo de una planilla está formada por filas y
          columnas que se cruzan para formar las celdas.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Características principales:
          </p>

          <ul className="list-disc list-inside space-y-3">

            <li>
              Las <strong>columnas</strong> se identifican mediante letras.
            </li>

            <li>
              Las <strong>filas</strong> se identifican mediante números.
            </li>

            <li>
              La combinación de una columna y una fila permite identificar
              una celda.
            </li>

            <li>
              Las filas y columnas permiten organizar los datos de manera
              estructurada.
            </li>

          </ul>

        </div>
      </section>

      {/* Celdas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Las Celdas
        </h2>

        <div className="border p-6 rounded-xl">
          Una celda es el espacio donde se cruzan una fila y una columna.
          Es el elemento básico de una planilla de cálculo y permite
          almacenar diferentes tipos de información.
          <br /><br />
          Cada celda posee una referencia única formada por la letra de la
          columna y el número de la fila.
          <br /><br />
          Por ejemplo, la celda ubicada en la columna B y la fila 4 se
          identifica como <strong>B4</strong>.
        </div>
      </section>

      {/* Celda activa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Celda Activa
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La celda activa es aquella que se encuentra seleccionada en un
          determinado momento.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p>
            Cuando se selecciona una celda, normalmente aparece resaltada
            dentro de la hoja. Allí se pueden ingresar datos, fórmulas o
            funciones.
          </p>

          <br />

          <p>
            La referencia de la celda activa puede observarse en el cuadro
            de nombre y su contenido puede visualizarse o modificarse desde
            la barra de fórmulas.
          </p>
        </div>
      </section>

      {/* Rangos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Rangos de Celdas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un rango es un conjunto de dos o más celdas seleccionadas para
          trabajar con ellas de manera conjunta.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p>
            Por ejemplo, el rango <strong>A1:C5</strong> representa todas
            las celdas comprendidas desde A1 hasta C5.
          </p>

          <br />

          <p>
            Los rangos son utilizados frecuentemente para aplicar formatos,
            copiar información, realizar cálculos, crear gráficos y trabajar
            con funciones.
          </p>

        </div>
      </section>

      {/* Barra de fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Barra de Fórmulas
        </h2>

        <div className="border p-6 rounded-xl">
          La barra de fórmulas permite visualizar y modificar el contenido
          de la celda seleccionada.
          <br /><br />
          Puede utilizarse para ingresar textos, números, fórmulas y
          funciones.
          <br /><br />
          Esta herramienta resulta especialmente útil cuando el contenido
          de una celda es extenso o cuando se necesita revisar una fórmula
          antes de modificarla.
        </div>
      </section>

      {/* Hojas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Hojas de Cálculo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un libro puede contener una o varias hojas de cálculo. Cada hoja
          permite organizar un conjunto de información diferente dentro del
          mismo archivo.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Por ejemplo, un libro administrativo podría contener:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Una hoja para registrar ventas.</li>
            <li>Una hoja para registrar gastos.</li>
            <li>Una hoja para controlar el stock.</li>
            <li>Una hoja para información de clientes.</li>
            <li>Una hoja para generar informes.</li>
          </ul>

        </div>
      </section>

      {/* Herramientas básicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas Básicas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las planillas de cálculo disponen de diferentes herramientas que
          permiten modificar y organizar la información.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <ul className="list-disc list-inside space-y-3">

            <li>Seleccionar y desplazarse entre celdas.</li>
            <li>Ingresar y modificar información.</li>
            <li>Copiar y pegar datos.</li>
            <li>Insertar y eliminar filas.</li>
            <li>Insertar y eliminar columnas.</li>
            <li>Cambiar el ancho de las columnas.</li>
            <li>Cambiar el alto de las filas.</li>
            <li>Modificar el formato de las celdas.</li>
            <li>Crear y administrar hojas.</li>
            <li>Guardar y organizar libros.</li>

          </ul>

        </div>
      </section>

      {/* Interfaz en la administración */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          La Interfaz en las Tareas Administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Conocer la interfaz permite trabajar con mayor rapidez y reducir
          errores al administrar información.
          <br /><br />
          En una oficina es habitual utilizar diferentes hojas y herramientas
          para registrar datos, realizar cálculos y consultar información.
          Por este motivo, identificar rápidamente las diferentes partes de
          la interfaz facilita las tareas cotidianas.
        </p>

        <div className="border p-6 rounded-xl mt-6">

          <p className="font-semibold mb-4">
            Algunas situaciones habituales son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Localizar rápidamente una celda.</li>
            <li>Ingresar información en una tabla.</li>
            <li>Modificar datos existentes.</li>
            <li>Crear nuevas hojas de trabajo.</li>
            <li>Consultar diferentes registros.</li>
            <li>Seleccionar rangos para realizar operaciones.</li>
            <li>Preparar información para aplicar formatos.</li>
          </ul>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Conocer la función de cada herramienta antes de utilizarla.</li>
          <li>Mantener las hojas organizadas.</li>
          <li>Utilizar nombres claros para las hojas.</li>
          <li>Evitar eliminar información accidentalmente.</li>
          <li>Revisar la celda activa antes de ingresar datos.</li>
          <li>Utilizar rangos correctamente.</li>
          <li>Guardar periódicamente el trabajo.</li>
          <li>Organizar los archivos en carpetas adecuadas.</li>
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

            Abrir una aplicación de planillas de cálculo e identificar las
            principales partes de la interfaz.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear una hoja nueva e identificar cinco celdas diferentes.
            Escribir la referencia de cada una.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Seleccionar diferentes rangos de celdas y escribir las
            referencias correspondientes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Crear un libro con tres hojas. Cambiar el nombre de cada hoja
            utilizando nombres relacionados con una oficina:
            <strong> Clientes</strong>, <strong>Ventas</strong> y{" "}
            <strong>Gastos</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>

            Seleccionar un rango de celdas e ingresar diferentes tipos de
            información: nombres, números, fechas y valores monetarios.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Imagina que comienzas a trabajar como operador de informática
          en una oficina.

          <br /><br />

          Tu responsable te entrega una planilla que contiene información
          de clientes y te solicita organizarla para comenzar a trabajar
          con ella.

          <br /><br />

          Antes de comenzar, debes identificar:

          <br /><br />

          ✔ Dónde se encuentran las filas y columnas. <br />
          ✔ Cómo identificar una celda. <br />
          ✔ Cómo seleccionar un rango. <br />
          ✔ Dónde visualizar el contenido de una celda. <br />
          ✔ Cómo desplazarte entre las diferentes hojas. <br />
          ✔ Qué herramientas utilizarías para modificar la información.

          <br /><br />

          Explica qué elementos de la interfaz utilizarías para realizar
          correctamente la tarea y cómo organizarías el libro para facilitar
          su utilización posterior.

        </div>
      </section>

    </div>
  );
}