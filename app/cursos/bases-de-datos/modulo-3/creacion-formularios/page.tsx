
export default function CreacionFormulariosPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="mb-6 text-3xl font-bold text-blue-900">
          Creación de formularios en Microsoft Access
        </h1>

        <p className="max-w-4xl leading-relaxed">
          Microsoft Access permite crear formularios para facilitar el ingreso,
          la consulta y la modificación de información almacenada en una base
          de datos. Mediante estos objetos, los usuarios pueden trabajar con
          los registros utilizando una interfaz organizada, sin necesidad de
          interactuar directamente con las tablas.
        </p>

        <p className="mt-4 max-w-4xl leading-relaxed">
          Para crear un formulario es necesario identificar qué información se
          necesita mostrar, seleccionar una tabla o consulta como origen de
          datos y organizar los controles que utilizará el usuario. Access
          ofrece herramientas automáticas y opciones de diseño que permiten
          adaptar el formulario a diferentes necesidades administrativas.
        </p>

        <p className="mt-4 max-w-4xl leading-relaxed">
          En esta página aprenderás los principales métodos para crear
          formularios, sus pasos de configuración y las comprobaciones que
          deben realizarse antes de utilizarlos.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Objetivos de aprendizaje
        </h2>

        <ul className="list-disc space-y-3 pl-6 leading-relaxed">
          <li>Reconocer las herramientas de Access para crear formularios.</li>
          <li>
            Diferenciar la creación automática del diseño manual.
          </li>
          <li>
            Seleccionar correctamente el origen de datos de un formulario.
          </li>
          <li>
            Crear formularios vinculados a tablas o consultas.
          </li>
          <li>
            Organizar los campos y comprobar el funcionamiento del formulario.
          </li>
          <li>
            Aplicar los conocimientos a situaciones administrativas reales.
          </li>
        </ul>
      </section>

      {/* Antes de comenzar */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Antes de crear un formulario
        </h2>

        <p className="mb-4 leading-relaxed">
          Antes de comenzar, es importante que la base de datos tenga una
          estructura adecuada. Los formularios trabajan con información
          proveniente de tablas o consultas, por lo que conviene revisar los
          campos disponibles y determinar cuáles necesita utilizar el usuario.
        </p>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              1. Identificar la tarea
            </h3>
            <p className="leading-relaxed">
              Determiná si el formulario servirá para registrar clientes,
              administrar productos, consultar ventas u otra actividad.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              2. Revisar los datos
            </h3>
            <p className="leading-relaxed">
              Comprobá qué tabla o consulta contiene la información necesaria
              y qué campos deben aparecer en el formulario.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              3. Planificar la interfaz
            </h3>
            <p className="leading-relaxed">
              Organizá los campos, definí etiquetas comprensibles y pensá qué
              acciones necesitará realizar el usuario.
            </p>
          </article>
        </div>
      </section>

      {/* Métodos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Métodos para crear formularios
        </h2>

        <p className="mb-5 leading-relaxed">
          Access dispone de diferentes herramientas para crear formularios.
          La elección depende de cuánto control se necesita sobre el diseño y
          de la complejidad de la interfaz.
        </p>

        <div className="space-y-5">
          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Formulario automático
            </h3>

            <p className="mb-3 leading-relaxed">
              Permite crear rápidamente un formulario utilizando los campos
              de una tabla o consulta. Access organiza los controles de manera
              automática, por lo que es útil para comenzar a trabajar.
            </p>

            <p className="leading-relaxed">
              Es una buena alternativa cuando se necesita una interfaz básica
              sin realizar demasiados ajustes iniciales.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Asistente para formularios
            </h3>

            <p className="mb-3 leading-relaxed">
              Guía al usuario mediante una serie de pasos para seleccionar
              los campos, elegir la distribución y definir el nombre del
              formulario.
            </p>

            <p className="leading-relaxed">
              Resulta útil cuando se necesita decidir qué campos incluir y
              cómo organizarlos antes de crear el objeto.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Diseño de formulario
            </h3>

            <p className="mb-3 leading-relaxed">
              Permite construir y configurar la interfaz con mayor control.
              Se pueden incorporar controles, ajustar sus propiedades y
              organizar los elementos según las necesidades del sistema.
            </p>

            <p className="leading-relaxed">
              Es apropiado para formularios personalizados que requieren una
              distribución específica o controles adicionales.
            </p>
          </article>
        </div>
      </section>

      {/* Creación rápida */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Cómo crear un formulario automático
        </h2>

        <p className="mb-5 leading-relaxed">
          Una de las maneras más sencillas de comenzar es utilizar una tabla
          existente para generar un formulario automáticamente.
        </p>

        <ol className="list-decimal space-y-4 pl-6 leading-relaxed">
          <li>
            <strong>Abrí la base de datos:</strong> iniciá Microsoft Access y
            abrí el archivo en el que estás trabajando.
          </li>
          <li>
            <strong>Seleccioná una tabla:</strong> en el panel de navegación,
            elegí la tabla que contiene los datos que necesitás utilizar.
          </li>
          <li>
            <strong>Ingresá en la pestaña Crear:</strong> buscá las
            herramientas disponibles para generar objetos nuevos.
          </li>
          <li>
            <strong>Seleccioná Formulario:</strong> Access creará un
            formulario basado en el origen seleccionado y organizará sus
            campos automáticamente.
          </li>
          <li>
            <strong>Revisá el resultado:</strong> comprobá que aparezcan los
            campos necesarios y que los datos se visualicen correctamente.
          </li>
          <li>
            <strong>Guardá el formulario:</strong> asignale un nombre
            descriptivo, por ejemplo, <code>frmClientes</code>.
          </li>
        </ol>

        <div className="mt-6 rounded-xl border border-blue-200 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            Ejemplo práctico
          </h3>

          <p className="mb-3 leading-relaxed text-blue-950">
            Si seleccionás la tabla <strong>Clientes</strong>, que contiene
            los campos IdCliente, Nombre, Apellido, Teléfono y Correo, Access
            puede generar un formulario con controles para mostrar esos datos.
          </p>

          <p className="leading-relaxed text-blue-950">
            El formulario resultante permitirá recorrer los registros y,
            según su configuración, incorporar nuevos clientes o modificar
            los existentes.
          </p>
        </div>
      </section>

      {/* Asistente */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Cómo utilizar el asistente para formularios
        </h2>

        <p className="mb-5 leading-relaxed">
          El asistente permite decidir qué información incluir y cómo
          presentar los campos. Es especialmente útil cuando una tabla
          contiene muchos campos y solo se necesitan algunos.
        </p>

        <ol className="list-decimal space-y-4 pl-6 leading-relaxed">
          <li>
            Abrí la base de datos y seleccioná la pestaña <strong>Crear</strong>.
          </li>
          <li>
            Buscá la herramienta <strong>Asistente para formularios</strong>,
            si está disponible en tu versión de Access.
          </li>
          <li>
            Elegí la tabla o consulta que utilizarás como origen de datos.
          </li>
          <li>
            Seleccioná los campos que querés incluir y pasalos a la lista de
            campos elegidos.
          </li>
          <li>
            Elegí una distribución de formulario entre las opciones
            disponibles.
          </li>
          <li>
            Asigná un nombre al formulario y finalizá el asistente.
          </li>
          <li>
            Abrí el formulario y verificá su funcionamiento.
          </li>
        </ol>

        <div className="mt-6 rounded-xl border border-blue-200 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            ¿Qué distribución conviene elegir?
          </h3>

          <ul className="list-disc space-y-3 pl-6 leading-relaxed">
            <li>
              <strong>En columnas:</strong> presenta los campos de un registro
              de forma organizada, uno debajo de otro.
            </li>
            <li>
              <strong>Tabular:</strong> presenta varios registros con una
              disposición similar a una tabla.
            </li>
            <li>
              <strong>Hoja de datos:</strong> muestra registros y campos en
              una cuadrícula.
            </li>
            <li>
              <strong>Justificado:</strong> distribuye los campos de un
              registro para aprovechar el espacio disponible.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-relaxed">
            Las opciones exactas pueden variar según la versión de Access y
            el tipo de objeto que se esté creando.
          </p>
        </div>
      </section>

      {/* Diseño manual */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Creación y personalización en Vista Diseño
        </h2>

        <p className="mb-4 leading-relaxed">
          Cuando el formulario automático no ofrece la organización
          necesaria, se puede trabajar en la Vista Diseño para personalizar
          la interfaz.
        </p>

        <ol className="list-decimal space-y-3 pl-6 leading-relaxed">
          <li>
            Creá un formulario en blanco o abrí uno existente.
          </li>
          <li>
            Cambiá a <strong>Vista Diseño</strong> desde las opciones de
            visualización de Access.
          </li>
          <li>
            Configurá el origen del registro en las propiedades del formulario,
            si todavía no está definido.
          </li>
          <li>
            Incorporá etiquetas y controles vinculados con los campos que
            necesitás mostrar.
          </li>
          <li>
            Ajustá la posición, el tamaño y la alineación de los elementos.
          </li>
          <li>
            Guardá los cambios y probá el formulario en la vista apropiada.
          </li>
        </ol>

        <p className="mt-4 leading-relaxed">
          La Vista Diseño permite controlar la estructura del formulario. La
          Vista Formulario, en cambio, permite comprobar cómo se presenta y
          cómo se utiliza durante el trabajo cotidiano.
        </p>
      </section>

      {/* Origen de datos */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          El origen de datos del formulario
        </h2>

        <p className="mb-4 leading-relaxed">
          El origen del registro determina de dónde obtiene el formulario la
          información que muestra. Puede ser una tabla o una consulta,
          dependiendo de los datos que se necesiten presentar.
        </p>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Formulario basado en una tabla
            </h3>
            <p className="leading-relaxed">
              Es útil cuando se necesita trabajar con los registros de una
              entidad, como Clientes, Productos o Proveedores.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Formulario basado en una consulta
            </h3>
            <p className="leading-relaxed">
              Puede utilizarse cuando se necesita presentar datos filtrados,
              campos seleccionados o información proveniente de varias tablas.
              La posibilidad de editar los datos depende de la consulta y de
              las características del origen.
            </p>
          </article>
        </div>

        <div className="mt-5 rounded-xl border border-blue-200 p-5">
          <h3 className="mb-2 font-bold text-blue-900">
            Ejemplo de una oficina
          </h3>
          <p className="leading-relaxed text-blue-950">
            Una empresa quiere consultar únicamente los productos de una
            categoría. Puede utilizar una consulta que seleccione esos
            productos como origen de un formulario, siempre que la estructura
            y configuración sean adecuadas para el uso previsto.
          </p>
        </div>
      </section>

      {/* Guardado y pruebas */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Guardado y comprobación del formulario
        </h2>

        <p className="mb-5 leading-relaxed">
          Después de crear un formulario, es importante guardarlo con un
          nombre claro y realizar pruebas para comprobar que cumple con su
          propósito.
        </p>

        <ul className="list-disc space-y-3 pl-6 leading-relaxed">
          <li>
            Utilizá nombres descriptivos, como <code>frmProductos</code> o
            <code> frmProveedores</code>.
          </li>
          <li>
            Comprobá que se muestren los campos correctos.
          </li>
          <li>
            Verificá que los controles presenten los valores esperados.
          </li>
          <li>
            Probá la navegación entre registros.
          </li>
          <li>
            Si el formulario permite cargar datos, ingresá un registro de
            prueba y comprobá que se almacene correctamente.
          </li>
          <li>
            Si permite modificar datos, realizá un cambio controlado y
            verificá el resultado.
          </li>
          <li>
            Revisá que las etiquetas sean claras y que no existan controles
            superpuestos.
          </li>
        </ul>
      </section>

      {/* Errores frecuentes */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Errores frecuentes al crear formularios
        </h2>

        <div className="space-y-4">
          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Seleccionar un origen incorrecto
            </h3>
            <p className="leading-relaxed">
              Puede provocar que falten campos o que se presente información
              diferente de la esperada. Revisá el origen del registro y los
              campos disponibles.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Incluir demasiados campos
            </h3>
            <p className="leading-relaxed">
              Un formulario sobrecargado puede dificultar la lectura.
              Incorporá la información necesaria para la tarea y organizala
              por grupos.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              No comprobar el funcionamiento
            </h3>
            <p className="leading-relaxed">
              Un formulario puede parecer correcto y, aun así, tener controles
              mal vinculados o restricciones inesperadas. Probá sus funciones
              antes de utilizarlo con datos reales.
            </p>
          </article>

          <article className="rounded-xl border border-blue-200 p-5">
            <h3 className="mb-2 font-bold text-blue-900">
              Utilizar nombres poco claros
            </h3>
            <p className="leading-relaxed">
              Nombres como Formulario1 dificultan la identificación de los
              objetos. Elegí nombres que describan su función y mantené un
              criterio uniforme.
            </p>
          </article>
        </div>
      </section>

      {/* Actividades prácticas */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividades prácticas
        </h2>

        <p className="mb-6 leading-relaxed">
          Resolvé las siguientes actividades utilizando una base de datos de
          práctica. Cuando corresponda, registrá los pasos realizados y
          acompañá las respuestas con capturas de pantalla.
        </p>

        <div className="space-y-6">
          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 1: creación automática
            </h3>

            <p className="mb-3 leading-relaxed">
              Utilizá una base de datos que contenga una tabla llamada
              Clientes, con campos para identificar a cada persona y registrar
              sus datos de contacto.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Seleccioná la tabla Clientes.</li>
              <li>Creá un formulario automático.</li>
              <li>Guardalo con el nombre frmClientes.</li>
              <li>Abrilo y recorré los registros existentes.</li>
              <li>Explicá qué ventajas tiene este método de creación.</li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 2: uso del asistente
            </h3>

            <p className="mb-3 leading-relaxed">
              Creá un formulario para una tabla Productos que contenga código,
              descripción, categoría, precio y cantidad disponible.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Utilizá el asistente para formularios, si está disponible.</li>
              <li>Seleccioná los campos necesarios.</li>
              <li>Elegí una distribución adecuada.</li>
              <li>Guardá el objeto como frmProductos.</li>
              <li>Explicá por qué elegiste esa distribución.</li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 3: selección de un método
            </h3>

            <p className="mb-3 leading-relaxed">
              Una oficina necesita crear tres formularios: uno sencillo para
              consultar proveedores, otro para registrar empleados y uno
              personalizado con controles organizados por secciones.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Elegí un método de creación para cada caso.</li>
              <li>Justificá cada elección.</li>
              <li>Indicá qué ventajas y limitaciones tiene cada método.</li>
              <li>Explicá cuándo convendría utilizar la Vista Diseño.</li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 4: revisar y probar
            </h3>

            <p className="mb-3 leading-relaxed">
              Abrí uno de los formularios creados y realizá una revisión de
              su funcionamiento.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Verificá que aparezcan los campos correctos.</li>
              <li>Comprobá la navegación entre registros.</li>
              <li>Revisá la legibilidad de las etiquetas.</li>
              <li>
                Si está habilitado, ingresá un registro de prueba y verificá
                que se guarde.
              </li>
              <li>Registrá dos posibles mejoras para el formulario.</li>
            </ol>
          </article>

          <article className="rounded-xl border border-blue-200 p-6">
            <h3 className="mb-3 text-lg font-bold text-blue-900">
              Actividad 5: creación de un formulario de proveedores
            </h3>

            <p className="mb-3 leading-relaxed">
              Creá un formulario para administrar los proveedores de una
              empresa. Utilizá la tabla Proveedores como origen de datos.
            </p>

            <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
              <li>Seleccioná el método de creación más conveniente.</li>
              <li>Incluí los campos necesarios para identificar al proveedor.</li>
              <li>Organizá la interfaz con etiquetas claras.</li>
              <li>Guardá el formulario como frmProveedores.</li>
              <li>Probá su funcionamiento y documentá el resultado.</li>
            </ol>
          </article>
        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-800">
          Actividad integradora: formularios para una librería
        </h2>

        <p className="mb-4 leading-relaxed">
          Una librería necesita mejorar la administración de sus clientes y
          productos. La base de datos ya cuenta con tablas para almacenar esa
          información, pero los empleados todavía no disponen de formularios
          para trabajar de manera sencilla.
        </p>

        <p className="mb-5 leading-relaxed">
          Tu tarea será crear dos formularios en Microsoft Access, verificar
          su funcionamiento y explicar cómo ayudan a organizar el trabajo.
        </p>

        <h3 className="mb-3 text-lg font-bold text-blue-900">
          Consignas
        </h3>

        <ol className="list-decimal space-y-3 pl-6 leading-relaxed">
          <li>
            Revisá la estructura de las tablas Clientes y Productos.
          </li>
          <li>
            Creá el formulario frmClientes para consultar y registrar datos
            de clientes.
          </li>
          <li>
            Creá el formulario frmProductos para consultar y administrar los
            productos.
          </li>
          <li>
            Organizá los campos y revisá que las etiquetas sean comprensibles.
          </li>
          <li>
            Probá la navegación y, si corresponde, el ingreso y la
            modificación de registros.
          </li>
          <li>
            Registrá los pasos realizados y agregá capturas de pantalla de
            ambos formularios.
          </li>
          <li>
            Redactá una conclusión explicando qué ventajas aportan los
            formularios frente al trabajo directo sobre las tablas.
          </li>
        </ol>

        <div className="mt-6 rounded-xl border border-blue-200 p-6">
          <h3 className="mb-3 font-bold text-blue-900">
            Criterios de evaluación
          </h3>

          <ul className="list-disc space-y-2 pl-6 leading-relaxed">
            <li>Selección correcta del origen de datos.</li>
            <li>Creación y guardado adecuado de los formularios.</li>
            <li>Organización clara de los campos y controles.</li>
            <li>Funcionamiento correcto de las operaciones habilitadas.</li>
            <li>Documentación del proceso y de las pruebas realizadas.</li>
            <li>Capacidad para explicar la utilidad de los formularios.</li>
          </ul>
        </div>
      </section>

      {/* Cierre */}
      <section className="rounded-xl border border-blue-200 p-6">
        <h2 className="mb-4 text-2xl font-bold text-blue-900">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Microsoft Access permite crear formularios automáticos, utilizar
          asistentes y diseñar interfaces personalizadas. El método elegido
          dependerá de las necesidades del usuario y del nivel de control
          requerido sobre la presentación de los datos.
        </p>

        <p className="mt-4 leading-relaxed">
          Todo formulario debe tener un origen de datos adecuado, presentar
          los campos necesarios y probarse antes de utilizarlo. La claridad
          de la interfaz y la correcta vinculación con los registros son
          fundamentales para facilitar el trabajo administrativo.
        </p>

        <p className="mt-4 leading-relaxed">
          En el próximo tema aprenderás a utilizar y configurar los distintos
          controles que pueden incorporarse a un formulario.
        </p>
      </section>
    </div>
  );
}
