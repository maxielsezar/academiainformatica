export default function ActividadesPracticasPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividades prácticas del Módulo 3
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo aprendiste a diseñar y utilizar formularios e informes
          en Microsoft Access para facilitar la carga, consulta y presentación
          de información administrativa.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En las siguientes actividades vas a aplicar esos conocimientos
          mediante situaciones similares a las que pueden presentarse en una
          oficina, comercio o institución. El objetivo es construir interfaces
          sencillas, mejorar la calidad de los datos y generar informes útiles
          para la toma de decisiones.
        </p>
      </section>

      {/* Indicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Indicaciones generales
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Trabajá con Microsoft Access.</li>
          <li>Creá una base de datos para cada actividad o reutilizá una base existente cuando se indique.</li>
          <li>Utilizá nombres claros para las tablas, formularios e informes.</li>
          <li>Configurá las claves principales y las relaciones necesarias.</li>
          <li>Probá los formularios ingresando diferentes registros.</li>
          <li>Verificá que los informes presenten correctamente la información.</li>
          <li>Guardá los archivos en una carpeta organizada para su entrega.</li>
        </ul>
      </section>

      {/* Actividad 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 1: Formulario de registro de clientes
        </h2>

        <p className="leading-relaxed mb-4">
          Un comercio necesita registrar los datos de sus clientes. Actualmente
          la información se carga directamente en una tabla, lo que dificulta
          su utilización por parte del personal administrativo.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Consigna
        </h3>

        <p className="leading-relaxed mb-4">
          Creá una base de datos llamada <strong>GestionComercial</strong> y una
          tabla denominada <strong>Clientes</strong> con los siguientes campos:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Campo</th>
                <th className="border border-blue-200 p-3 text-left">Tipo de dato</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["IdCliente", "Autonumeración (clave principal)"],
                ["Nombre", "Texto corto"],
                ["Apellido", "Texto corto"],
                ["DNI", "Texto corto"],
                ["Telefono", "Texto corto"],
                ["CorreoElectronico", "Texto corto"],
                ["Direccion", "Texto corto"],
              ].map(([campo, tipo]) => (
                <tr key={campo}>
                  <td className="border border-blue-200 p-3">{campo}</td>
                  <td className="border border-blue-200 p-3">{tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Tareas
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Creá la tabla Clientes con los campos indicados.</li>
          <li>Diseñá un formulario utilizando el asistente de Access.</li>
          <li>Organizá los campos para facilitar la carga de información.</li>
          <li>Agregá un título al formulario.</li>
          <li>Ingresá al menos 10 clientes de ejemplo.</li>
          <li>Comprobá que puedas recorrer, buscar y modificar registros.</li>
        </ol>

        <p className="leading-relaxed mt-4">
          <strong>Resultado esperado:</strong> un formulario de clientes que
          permita registrar y consultar información de manera sencilla.
        </p>
      </section>

      {/* Actividad 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 2: Formulario de productos con validaciones
        </h2>

        <p className="leading-relaxed mb-4">
          Una tienda necesita administrar su inventario. Para evitar errores
          durante la carga, solicita un formulario que permita ingresar
          productos y controlar algunos de sus valores.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Consigna
        </h3>

        <p className="leading-relaxed mb-4">
          Creá una tabla llamada <strong>Productos</strong> con los siguientes
          campos:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="5">
                <th className="border border-blue-200 p-3 text-left">Campo</th>
                <th className="border border-blue-200 p-3 text-left">Tipo de dato</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["IdProducto", "Autonumeración (clave principal)"],
                ["NombreProducto", "Texto corto"],
                ["Categoria", "Texto corto"],
                ["Precio", "Moneda"],
                ["Stock", "Número"],
                ["FechaIngreso", "Fecha/Hora"],
              ].map(([campo, tipo]) => (
                <tr key={campo}>
                  <td className="border border-blue-200 p-3">{campo}</td>
                  <td className="border border-blue-200 p-3">{tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Tareas
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Creá la tabla Productos.</li>
          <li>Diseñá un formulario para registrar nuevos productos.</li>
          <li>Configurá el campo Precio para aceptar valores mayores que cero.</li>
          <li>Configurá el campo Stock para aceptar valores iguales o mayores que cero.</li>
          <li>Establecé NombreProducto como campo obligatorio.</li>
          <li>Ingresá al menos 10 productos.</li>
          <li>Probá ingresar un precio negativo y un stock negativo para comprobar las validaciones.</li>
        </ol>

        <p className="leading-relaxed mt-4">
          <strong>Resultado esperado:</strong> un formulario de inventario con
          controles que ayuden a prevenir errores en los datos.
        </p>
      </section>

      {/* Actividad 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 3: Formulario de inscripción a cursos
        </h2>

        <p className="leading-relaxed mb-4">
          Un centro de formación profesional necesita registrar las
          inscripciones de sus estudiantes. Cada estudiante puede inscribirse
          en diferentes cursos y cada curso puede tener varios inscriptos.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Consigna
        </h3>

        <p className="leading-relaxed mb-4">
          Creá una base de datos con las siguientes tablas:
        </p>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Estudiantes</h4>
            <p className="text-sm leading-relaxed">
              IdEstudiante, Nombre, Apellido, DNI, Telefono y CorreoElectronico.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Cursos</h4>
            <p className="text-sm leading-relaxed">
              IdCurso, NombreCurso, Duracion y Modalidad.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Inscripciones</h4>
            <p className="text-sm leading-relaxed">
              IdInscripcion, IdEstudiante, IdCurso, FechaInscripcion y Estado.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Tareas
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Creá las tres tablas con sus respectivas claves principales.</li>
          <li>Establecé las relaciones entre Estudiantes, Cursos e Inscripciones.</li>
          <li>Activá la integridad referencial donde corresponda.</li>
          <li>Diseñá un formulario para registrar estudiantes.</li>
          <li>Diseñá un formulario para administrar cursos.</li>
          <li>Creá un formulario para registrar inscripciones.</li>
          <li>Utilizá cuadros combinados para seleccionar estudiantes y cursos.</li>
          <li>Ingresá al menos 10 estudiantes, 4 cursos y 12 inscripciones.</li>
        </ol>

        <p className="leading-relaxed mt-4">
          <strong>Resultado esperado:</strong> un sistema de formularios
          relacionados que permita administrar las inscripciones de una
          institución educativa.
        </p>
      </section>

      {/* Actividad 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 4: Informe de inventario
        </h2>

        <p className="leading-relaxed mb-4">
          El responsable de una tienda necesita un informe que muestre los
          productos disponibles, sus precios y las cantidades existentes.
          También desea identificar los productos con poco stock.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Consigna
        </h3>

        <p className="leading-relaxed mb-4">
          Utilizá la tabla Productos de la actividad anterior y creá un informe
          que presente los siguientes datos:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Nombre del producto.</li>
          <li>Categoría.</li>
          <li>Precio.</li>
          <li>Stock disponible.</li>
          <li>Fecha de ingreso.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Tareas
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Creá un informe utilizando el asistente de Access.</li>
          <li>Ordená los productos alfabéticamente por nombre.</li>
          <li>Agrupá los productos por categoría.</li>
          <li>Configurá el formato de los precios como moneda.</li>
          <li>Agregá un título y la fecha de elaboración.</li>
          <li>Revisá el diseño y la distribución de las columnas.</li>
          <li>Visualizá el informe en vista previa de impresión.</li>
        </ol>

        <p className="leading-relaxed mt-4">
          <strong>Resultado esperado:</strong> un informe organizado que permita
          consultar rápidamente el estado del inventario.
        </p>
      </section>

      {/* Actividad 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad 5: Informe de ventas con agrupación y totales
        </h2>

        <p className="leading-relaxed mb-4">
          Una empresa necesita analizar sus ventas para conocer cuánto vendió
          durante el mes y qué clientes realizaron compras. El informe debe
          mostrar los importes individuales y los totales correspondientes.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Consigna
        </h3>

        <p className="leading-relaxed mb-4">
          Utilizá una tabla de ventas que contenga los siguientes campos:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>IdVenta.</li>
          <li>FechaVenta.</li>
          <li>Cliente.</li>
          <li>NumeroComprobante.</li>
          <li>Importe.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Tareas
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Creá un informe de ventas.</li>
          <li>Ordená los registros por fecha de manera ascendente.</li>
          <li>Agrupá las ventas por cliente.</li>
          <li>Mostrá los importes individuales de cada venta.</li>
          <li>Agregá un subtotal para cada cliente.</li>
          <li>Incorporá un total general de ventas.</li>
          <li>Configurá los importes con formato de moneda.</li>
          <li>Exportá el informe a PDF.</li>
        </ol>

        <p className="leading-relaxed mt-4">
          <strong>Resultado esperado:</strong> un informe que permita analizar
          las ventas por cliente y conocer el importe total facturado.
        </p>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Sistema de gestión administrativa
        </h2>

        <p className="leading-relaxed mb-4">
          Una pequeña empresa necesita mejorar la administración de sus
          operaciones. Actualmente registra clientes, productos y ventas en
          diferentes archivos, lo que dificulta la consulta y presentación de
          información.
        </p>

        <p className="leading-relaxed mb-4">
          Tu tarea será desarrollar en Microsoft Access una solución que
          permita administrar estos datos mediante formularios y generar
          informes para consultar los resultados.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-3">
          Primera parte: estructura de la base de datos
        </h3>

        <p className="leading-relaxed mb-3">
          Creá una base de datos llamada
          <strong> SistemaGestionAdministrativa</strong> con las siguientes
          tablas:
        </p>

        <div className="space-y-4">
          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Clientes</h4>
            <p className="text-sm">
              IdCliente, Nombre, Apellido, DNI, Telefono y CorreoElectronico.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Productos</h4>
            <p className="text-sm">
              IdProducto, NombreProducto, Categoria, Precio y Stock.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Ventas</h4>
            <p className="text-sm">
              IdVenta, IdCliente, FechaVenta y NumeroComprobante.
            </p>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">DetalleVentas</h4>
            <p className="text-sm">
              IdDetalle, IdVenta, IdProducto, Cantidad y PrecioUnitario.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Segunda parte: formularios
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Creá un formulario para registrar clientes.</li>
          <li>Creá un formulario para administrar productos.</li>
          <li>Diseñá un formulario para registrar ventas.</li>
          <li>Incorporá un subformulario para cargar los productos de cada venta.</li>
          <li>Utilizá cuadros combinados para seleccionar clientes y productos.</li>
          <li>Configurá validaciones para evitar cantidades y precios negativos.</li>
          <li>Probá la navegación, búsqueda y modificación de registros.</li>
        </ol>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Tercera parte: informes
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Creá un informe general de clientes.</li>
          <li>Creá un informe de productos y existencias.</li>
          <li>Diseñá un informe de ventas con datos de los clientes.</li>
          <li>Agrupá las ventas por cliente.</li>
          <li>Calculá los subtotales y el total general.</li>
          <li>Configurá títulos, encabezados, pies de página y formato de moneda.</li>
          <li>Revisá los informes en vista previa de impresión.</li>
          <li>Exportá los informes a PDF.</li>
        </ol>

        <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">
          Entrega final
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Archivo de Access con las tablas y relaciones.</li>
          <li>Formularios terminados y funcionales.</li>
          <li>Informes diseñados y correctamente configurados.</li>
          <li>Carpeta con los informes exportados a PDF.</li>
          <li>Registros de prueba para demostrar el funcionamiento del sistema.</li>
        </ul>

        <div className=" border-l-4 border-blue-600 p-5 rounded-r-lg mt-6">
          <p className="font-semibold text-blue-900 mb-2">
            Criterios de evaluación
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Correcta organización de las tablas y relaciones.</li>
            <li>Diseño claro y funcional de los formularios.</li>
            <li>Utilización adecuada de controles y validaciones.</li>
            <li>Correcta navegación y administración de registros.</li>
            <li>Presentación y organización de los informes.</li>
            <li>Uso adecuado de la vista previa, impresión y exportación.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}