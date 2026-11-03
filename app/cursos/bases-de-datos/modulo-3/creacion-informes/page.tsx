
export default function CreacionInformesPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Creación de informes en Microsoft Access
        </h1>

        <p className="leading-relaxed mb-4">
          Microsoft Access permite crear informes para presentar los datos
          almacenados en una base de datos de manera organizada y profesional.
          Estos documentos pueden utilizarse para consultar información,
          realizar controles administrativos, elaborar listados y presentar
          resultados.
        </p>

        <p className="leading-relaxed">
          Para crear un informe es necesario seleccionar una fuente de datos,
          elegir los campos que se desean mostrar y organizar su presentación.
          Access ofrece diferentes herramientas que permiten generar informes
          automáticamente o diseñarlos de acuerdo con las necesidades del usuario.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Reconocer las herramientas para crear informes en Access.</li>
          <li>Crear informes utilizando el asistente.</li>
          <li>Generar informes a partir de tablas y consultas.</li>
          <li>Seleccionar los campos que formarán parte del informe.</li>
          <li>Organizar y guardar informes dentro de una base de datos.</li>
          <li>Comprobar que los datos se presenten correctamente.</li>
        </ul>
      </section>

      {/* Antes de crear */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Antes de crear un informe
        </h2>

        <p className="leading-relaxed mb-4">
          Antes de comenzar, es importante identificar qué información se
          necesita presentar y de dónde se obtendrán los datos. Una planificación
          previa permite evitar informes innecesarios o que contengan información
          desordenada.
        </p>

        <p className="leading-relaxed mb-4">
          Por ejemplo, si una librería necesita consultar sus productos,
          primero debe identificar la tabla que contiene los nombres, precios,
          categorías y cantidades disponibles.
        </p>

        <div className=" border-l-4 border-blue-700 p-5 rounded-r-lg">
          <h3 className="font-bold text-blue-900 mb-3">
            Preguntas que debemos responder
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-blue-950">
            <li>¿Qué información debe mostrar el informe?</li>
            <li>¿Quién utilizará el documento?</li>
            <li>¿Qué tabla o consulta contiene los datos?</li>
            <li>¿Qué campos son necesarios?</li>
            <li>¿Se necesita ordenar o agrupar la información?</li>
            <li>¿El informe será consultado en pantalla o impreso?</li>
          </ul>
        </div>
      </section>

      {/* Métodos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formas de crear informes en Access
        </h2>

        <p className="leading-relaxed mb-5">
          Access ofrece diferentes herramientas para generar informes.
          Cada una permite trabajar de una manera distinta según la complejidad
          del documento y el nivel de personalización requerido.
        </p>

        <div className="space-y-5">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              1. Herramienta Informe
            </h3>

            <p className="leading-relaxed mb-3">
              Permite crear rápidamente un informe utilizando una tabla o
              consulta seleccionada. Access genera automáticamente una
              presentación con los campos disponibles.
            </p>

            <p className="leading-relaxed">
              Es una opción útil cuando se necesita obtener un listado sencillo
              sin configurar demasiadas características.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              2. Asistente para informes
            </h3>

            <p className="leading-relaxed mb-3">
              Es una herramienta que guía al usuario mediante una serie de
              pasos para seleccionar los campos, establecer agrupaciones,
              definir el orden de los registros y elegir una distribución.
            </p>

            <p className="leading-relaxed">
              Resulta conveniente cuando se necesita controlar mejor la
              información que aparecerá en el informe.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              3. Diseño de informe
            </h3>

            <p className="leading-relaxed mb-3">
              Permite comenzar con un informe vacío y construirlo manualmente.
              El usuario puede incorporar campos, etiquetas y otros controles,
              además de definir las secciones y la distribución.
            </p>

            <p className="leading-relaxed">
              Se utiliza cuando se necesita una presentación personalizada
              o un diseño que no se obtiene fácilmente con las herramientas
              automáticas.
            </p>
          </div>
        </div>
      </section>

      {/* Herramienta informe */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un informe automáticamente
        </h2>

        <p className="leading-relaxed mb-4">
          Una de las maneras más sencillas de crear un informe consiste en
          utilizar la herramienta Informe de Access.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Procedimiento
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>Abrir la base de datos en Microsoft Access.</li>
          <li>Seleccionar en el panel de navegación la tabla o consulta que contiene los datos.</li>
          <li>Ingresar en la pestaña Crear de la cinta de opciones.</li>
          <li>Seleccionar la herramienta Informe.</li>
          <li>Esperar a que Access genere el documento automáticamente.</li>
          <li>Revisar la información presentada.</li>
          <li>Guardar el informe con un nombre descriptivo.</li>
        </ol>

        <div className="rounded-xl p-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-2">
            Ejemplo práctico
          </h3>
          <p className="leading-relaxed">
            Si seleccionamos la tabla Productos y utilizamos la herramienta
            Informe, Access puede generar un documento con los registros
            existentes y sus campos, como código, nombre, categoría, precio
            y cantidad disponible.
          </p>
        </div>
      </section>

      {/* Asistente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un informe utilizando el asistente
        </h2>

        <p className="leading-relaxed mb-5">
          El asistente para informes permite crear documentos siguiendo
          una secuencia de pasos. Es especialmente útil cuando necesitamos
          seleccionar solamente algunos campos o establecer una organización
          determinada.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Paso 1: Seleccionar el origen de datos
        </h3>

        <p className="leading-relaxed mb-5">
          En primer lugar, debemos seleccionar la tabla o consulta que contiene
          los datos que queremos presentar. Si la información proviene de
          varias tablas, es recomendable preparar previamente una consulta
          que reúna los campos necesarios.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Paso 2: Elegir los campos
        </h3>

        <p className="leading-relaxed mb-3">
          El asistente permite seleccionar los campos que formarán parte
          del informe. No es necesario incluir todos los datos disponibles,
          sino solamente aquellos que resulten importantes para el objetivo
          del documento.
        </p>

        <div className="border border-blue-200 rounded-xl p-5 mb-5">
          <p className="font-semibold text-blue-900 mb-3">
            Ejemplo: informe de productos
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Código del producto.</li>
            <li>Nombre del producto.</li>
            <li>Categoría.</li>
            <li>Precio unitario.</li>
            <li>Cantidad disponible.</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Paso 3: Establecer niveles de agrupamiento
        </h3>

        <p className="leading-relaxed mb-5">
          Si es necesario, podemos agrupar los registros por un campo
          determinado. Por ejemplo, los productos pueden organizarse según
          su categoría para facilitar la consulta.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Paso 4: Definir el orden de los registros
        </h3>

        <p className="leading-relaxed mb-5">
          Podemos establecer cómo se mostrarán los datos, por ejemplo,
          ordenados alfabéticamente por nombre de producto o de menor a
          mayor según el precio.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Paso 5: Elegir la distribución
        </h3>

        <p className="leading-relaxed mb-5">
          El asistente permite seleccionar diferentes diseños y orientaciones
          para organizar los campos dentro de las páginas del informe.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Paso 6: Asignar un título y finalizar
        </h3>

        <p className="leading-relaxed">
          Finalmente, se escribe un nombre para el informe y se selecciona
          la opción para finalizar. Access genera el documento con las
          características elegidas.
        </p>
      </section>

      {/* Diseño manual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear un informe desde la vista Diseño
        </h2>

        <p className="leading-relaxed mb-4">
          Cuando necesitamos mayor control sobre la presentación, podemos
          utilizar la herramienta Diseño de informe. Esta opción permite
          crear un documento vacío e incorporar manualmente los elementos.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Procedimiento general
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>Ingresar en la pestaña Crear.</li>
          <li>Seleccionar Diseño de informe.</li>
          <li>Access abrirá un informe vacío en la vista Diseño.</li>
          <li>Configurar el origen de datos desde la hoja de propiedades.</li>
          <li>Incorporar los campos necesarios mediante la lista de campos.</li>
          <li>Agregar etiquetas, títulos y otros controles.</li>
          <li>Organizar los elementos dentro de las secciones correspondientes.</li>
          <li>Guardar el informe y revisar su resultado.</li>
        </ol>

        <div className=" border-l-4 border-blue-700 p-5 rounded-r-lg mt-5">
          <p className="font-semibold text-blue-900 mb-2">
            Importante
          </p>
          <p className="text-blue-950 leading-relaxed">
            La vista Diseño permite trabajar sobre la estructura del informe.
            Para comprobar cómo se presentan los registros reales, es necesario
            cambiar a una vista que muestre los datos.
          </p>
        </div>
      </section>

      {/* Guardar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Guardar y organizar los informes
        </h2>

        <p className="leading-relaxed mb-4">
          Una vez creado el informe, es importante guardarlo con un nombre
          que permita identificar fácilmente su contenido.
        </p>

        <p className="leading-relaxed mb-4">
          Access almacena los informes como objetos dentro de la base de datos.
          Estos pueden consultarse desde el panel de navegación, junto con
          las tablas, consultas y formularios.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Recomendaciones para nombrar informes
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Utilizar nombres breves y descriptivos.</li>
          <li>Evitar nombres genéricos como Informe1 o Documento2.</li>
          <li>Identificar el contenido principal del informe.</li>
          <li>Mantener un criterio uniforme de nombres.</li>
        </ul>

        <div className="border border-blue-200 rounded-xl p-5 mt-5">
          <p className="font-semibold text-blue-900 mb-3">
            Ejemplos de nombres adecuados
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>InformeProductos.</li>
            <li>ListadoClientes.</li>
            <li>VentasMensuales.</li>
            <li>ProveedoresRegistrados.</li>
            <li>InscripcionesPorCurso.</li>
          </ul>
        </div>
      </section>

      {/* Comprobación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Comprobar el resultado del informe
        </h2>

        <p className="leading-relaxed mb-4">
          Después de crear un informe debemos verificar que la información
          aparezca correctamente. Un documento puede estar bien diseñado,
          pero contener campos incorrectos, datos incompletos o una
          distribución poco clara.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Aspectos que debemos revisar
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Que aparezcan todos los campos necesarios.</li>
          <li>Que los registros correspondan a la información esperada.</li>
          <li>Que los datos estén ordenados correctamente.</li>
          <li>Que los títulos sean claros y descriptivos.</li>
          <li>Que no existan columnas cortadas o textos superpuestos.</li>
          <li>Que los importes y las fechas tengan formatos adecuados.</li>
          <li>Que el informe pueda leerse correctamente en pantalla o impreso.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 1: Crear un informe de productos
            </h3>
            <p className="leading-relaxed mb-3">
              Utilizando una base de datos de una librería, creá un informe
              a partir de la tabla Productos.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Seleccioná la tabla Productos.</li>
              <li>Utilizá la herramienta Informe.</li>
              <li>Revisá los campos que aparecen.</li>
              <li>Guardá el documento como InformeProductos.</li>
              <li>Comprobá que los registros se visualicen correctamente.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: Utilizar el asistente para informes
            </h3>
            <p className="leading-relaxed mb-3">
              Creá un informe que muestre información de los clientes
              registrados en una base de datos.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Ingresá al asistente para informes.</li>
              <li>Seleccioná los campos nombre, apellido, teléfono y correo electrónico.</li>
              <li>Definí un orden alfabético por apellido.</li>
              <li>Elegí una distribución adecuada.</li>
              <li>Guardá el resultado como ListadoClientes.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: Crear un informe agrupado
            </h3>
            <p className="leading-relaxed mb-3">
              Una librería desea organizar sus productos según la categoría
              a la que pertenecen.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Utilizá la tabla Productos como origen de datos.</li>
              <li>Seleccioná el nombre, precio y cantidad disponible.</li>
              <li>Configurá la agrupación por categoría.</li>
              <li>Generá el informe.</li>
              <li>Verificá que los productos aparezcan bajo su categoría.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: Crear un informe desde Diseño
            </h3>
            <p className="leading-relaxed mb-3">
              Creá manualmente un informe para presentar información de
              proveedores.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Ingresá a Crear y seleccioná Diseño de informe.</li>
              <li>Establecé la tabla Proveedores como origen de datos.</li>
              <li>Incorporá los campos nombre, teléfono, correo y dirección.</li>
              <li>Agregá un título descriptivo.</li>
              <li>Guardá el documento como InformeProveedores.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: Revisar y corregir un informe
            </h3>
            <p className="leading-relaxed mb-3">
              Abrí uno de los informes creados anteriormente y realizá
              una revisión de su presentación.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Comprobá que todos los campos sean necesarios.</li>
              <li>Revisá el orden de los registros.</li>
              <li>Identificá posibles problemas de visualización.</li>
              <li>Corregí los títulos y la distribución si es necesario.</li>
              <li>Guardá los cambios realizados.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Informes administrativos de una librería
        </h2>

        <p className="leading-relaxed mb-4">
          Una librería necesita organizar la información de sus productos,
          clientes, proveedores y ventas. Para mejorar el control de sus
          operaciones, solicita la creación de diferentes informes utilizando
          Microsoft Access.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Objetivo
        </h3>

        <p className="leading-relaxed mb-5">
          Aplicar las herramientas de creación de informes para generar
          documentos que permitan consultar y analizar la información
          almacenada en una base de datos.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Informes que se deben crear
        </h3>

        <div className="space-y-4 mb-6">
          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              1. Informe general de productos
            </h4>
            <p className="leading-relaxed">
              Debe mostrar código, nombre, categoría, precio y cantidad
              disponible. Los registros deben estar ordenados por nombre.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              2. Informe de clientes
            </h4>
            <p className="leading-relaxed">
              Debe presentar nombre, apellido, teléfono, correo electrónico
              y dirección de los clientes registrados.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              3. Informe de proveedores
            </h4>
            <p className="leading-relaxed">
              Debe mostrar los datos de contacto de cada proveedor y permitir
              identificar fácilmente a quién corresponde cada registro.
            </p>
          </div>

          <div className=" rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              4. Informe de ventas
            </h4>
            <p className="leading-relaxed">
              Debe presentar fecha, número de operación, cliente, productos
              vendidos, cantidades e importes correspondientes.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Consignas de trabajo
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Abrí la base de datos de la librería o creá una con las tablas
            necesarias.
          </li>
          <li>
            Identificá las tablas y consultas que servirán como origen
            de datos.
          </li>
          <li>
            Creá los informes utilizando las herramientas disponibles
            en Access.
          </li>
          <li>
            Aplicá agrupaciones y ordenamientos cuando sean necesarios.
          </li>
          <li>
            Guardá cada informe con un nombre descriptivo.
          </li>
          <li>
            Revisá los resultados y corregí posibles errores.
          </li>
          <li>
            Explicá qué utilidad tiene cada informe para la administración
            de la librería.
          </li>
        </ol>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Entrega
        </h3>

        <p className="leading-relaxed">
          Presentá la base de datos de Access con los cuatro informes
          creados y guardados. Acompañá el trabajo con capturas de pantalla
          que permitan observar los resultados y una breve explicación
          de la finalidad de cada documento.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Criterios de evaluación
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Selección correcta de las fuentes de datos.</li>
          <li>Incorporación de los campos solicitados.</li>
          <li>Uso adecuado de las herramientas de creación.</li>
          <li>Organización y presentación de la información.</li>
          <li>Correcto guardado y funcionamiento de los informes.</li>
        </ul>
      </section>

      {/* Cierre */}
      <section className=" border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Microsoft Access ofrece distintas herramientas para crear informes.
          Podemos generarlos automáticamente, utilizar el asistente o
          diseñarlos manualmente. La elección depende de la información
          que necesitamos presentar y del nivel de personalización requerido.
          Antes de finalizar, siempre debemos comprobar que los datos sean
          correctos y que el documento resulte claro y fácil de interpretar.
        </p>
      </section>
    </div>
  );
}
