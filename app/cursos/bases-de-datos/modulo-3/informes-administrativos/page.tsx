
export default function InformesAdministrativosPage() {
  return (
    <div className="space-y-14">
      {/* Introducción */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Informes para la gestión administrativa
        </h1>

        <p className="leading-relaxed mb-4">
          En una organización se generan diariamente grandes cantidades de
          información relacionada con clientes, proveedores, productos,
          compras, ventas, pagos y personal. Para administrar correctamente
          estos datos es necesario contar con herramientas que permitan
          consultarlos, organizarlos y presentarlos de manera clara.
        </p>

        <p className="leading-relaxed">
          Microsoft Access permite crear informes que transforman los datos
          almacenados en una base de datos en documentos útiles para el
          seguimiento de las actividades administrativas y la toma de
          decisiones.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué aprenderemos?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Reconocer la utilidad de los informes en la administración.</li>
          <li>Identificar distintos tipos de informes administrativos.</li>
          <li>Seleccionar los datos necesarios para cada informe.</li>
          <li>Organizar información mediante agrupamientos y totales.</li>
          <li>Interpretar resultados para realizar controles.</li>
          <li>Elaborar informes adecuados a diferentes necesidades laborales.</li>
          <li>Presentar información de manera clara y profesional.</li>
        </ul>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia de los informes en la administración
        </h2>

        <p className="leading-relaxed mb-4">
          Los informes administrativos permiten convertir los registros
          de una organización en información organizada que puede ser
          consultada por empleados, responsables de áreas y directivos.
        </p>

        <p className="leading-relaxed mb-4">
          Su principal utilidad es facilitar el control de las operaciones,
          detectar problemas, conocer resultados y disponer de información
          confiable para planificar actividades.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Control de actividades
            </h3>
            <p className="leading-relaxed">
              Permiten revisar las operaciones realizadas, comprobar
              movimientos y detectar registros incorrectos.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Seguimiento de resultados
            </h3>
            <p className="leading-relaxed">
              Facilitan la comparación de cantidades, importes y resultados
              obtenidos durante un período.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Organización de información
            </h3>
            <p className="leading-relaxed">
              Presentan los datos clasificados por fechas, categorías,
              responsables o sectores.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">
              Toma de decisiones
            </h3>
            <p className="leading-relaxed">
              Proporcionan información que ayuda a identificar necesidades,
              evaluar resultados y planificar acciones.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de informes administrativos
        </h2>

        <p className="leading-relaxed mb-5">
          Los informes pueden clasificarse según el área de la organización
          que necesita consultar la información. Cada uno responde a una
          finalidad específica.
        </p>

        <div className="space-y-5">
          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              1. Informes de clientes
            </h3>

            <p className="leading-relaxed mb-3">
              Permiten consultar los datos de las personas o empresas que
              mantienen una relación comercial con la organización.
            </p>

            <p className="font-semibold text-blue-900 mb-2">
              Información que pueden incluir:
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Código del cliente.</li>
              <li>Nombre y apellido o razón social.</li>
              <li>Teléfono y correo electrónico.</li>
              <li>Dirección.</li>
              <li>Historial de compras.</li>
            </ul>

            <p className="leading-relaxed mt-3">
              <strong>Ejemplo de uso:</strong> consultar los datos de contacto
              para realizar comunicaciones o verificar operaciones anteriores.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              2. Informes de proveedores
            </h3>

            <p className="leading-relaxed mb-3">
              Presentan información sobre las personas o empresas que
              suministran productos o servicios.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre del proveedor.</li>
              <li>CUIT o identificación fiscal, cuando corresponda.</li>
              <li>Datos de contacto.</li>
              <li>Productos o servicios suministrados.</li>
              <li>Compras y pagos realizados.</li>
            </ul>

            <p className="leading-relaxed mt-3">
              <strong>Ejemplo de uso:</strong> consultar los proveedores
              registrados y revisar las compras realizadas a cada uno.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              3. Informes de inventario
            </h3>

            <p className="leading-relaxed mb-3">
              Permiten conocer la cantidad y el estado de los productos
              almacenados.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Código y nombre del producto.</li>
              <li>Categoría.</li>
              <li>Precio.</li>
              <li>Cantidad disponible.</li>
              <li>Stock mínimo establecido.</li>
            </ul>

            <p className="leading-relaxed mt-3">
              <strong>Ejemplo de uso:</strong> identificar productos con
              pocas unidades disponibles para organizar nuevas compras.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              4. Informes de compras
            </h3>

            <p className="leading-relaxed mb-3">
              Permiten controlar las adquisiciones realizadas por una
              organización.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Número de operación.</li>
              <li>Fecha de compra.</li>
              <li>Proveedor.</li>
              <li>Productos adquiridos.</li>
              <li>Cantidades e importes.</li>
            </ul>

            <p className="leading-relaxed mt-3">
              <strong>Ejemplo de uso:</strong> conocer cuánto se compró
              durante un mes y a qué proveedores.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              5. Informes de ventas
            </h3>

            <p className="leading-relaxed mb-3">
              Resumen las operaciones comerciales realizadas durante
              un período determinado.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Número de venta.</li>
              <li>Fecha de operación.</li>
              <li>Cliente.</li>
              <li>Vendedor responsable.</li>
              <li>Importe total.</li>
            </ul>

            <p className="leading-relaxed mt-3">
              <strong>Ejemplo de uso:</strong> conocer la facturación mensual
              y comparar el rendimiento de los vendedores.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              6. Informes de pagos y cuentas pendientes
            </h3>

            <p className="leading-relaxed mb-3">
              Presentan información sobre los movimientos de dinero,
              pagos realizados y obligaciones pendientes.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Fecha de vencimiento.</li>
              <li>Cliente o proveedor.</li>
              <li>Importe de la operación.</li>
              <li>Importe abonado.</li>
              <li>Saldo pendiente.</li>
              <li>Estado del pago.</li>
            </ul>

            <p className="leading-relaxed mt-3">
              <strong>Ejemplo de uso:</strong> identificar facturas pendientes
              y organizar los pagos que deben realizarse.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              7. Informes de personal
            </h3>

            <p className="leading-relaxed mb-3">
              Permiten organizar información relacionada con los empleados
              y las actividades laborales.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Datos del empleado.</li>
              <li>Área o sector.</li>
              <li>Puesto de trabajo.</li>
              <li>Fecha de ingreso.</li>
              <li>Asistencia y capacitaciones.</li>
            </ul>

            <p className="leading-relaxed mt-3">
              <strong>Ejemplo de uso:</strong> consultar la distribución
              del personal por área o verificar registros de asistencia.
            </p>
          </div>
        </div>
      </section>

      {/* Selección de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Selección de datos para elaborar un informe
        </h2>

        <p className="leading-relaxed mb-4">
          Antes de crear un informe es necesario identificar qué información
          se necesita mostrar. Incluir demasiados datos puede dificultar
          la lectura, mientras que omitir información importante puede
          impedir que el documento cumpla su objetivo.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Pasos para seleccionar la información
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Definir el objetivo:</strong> establecer qué se desea
            conocer o controlar.
          </li>
          <li>
            <strong>Identificar los usuarios:</strong> determinar quién
            utilizará el informe.
          </li>
          <li>
            <strong>Seleccionar las tablas:</strong> identificar dónde
            se encuentran almacenados los datos necesarios.
          </li>
          <li>
            <strong>Elegir los campos:</strong> seleccionar únicamente
            la información relevante.
          </li>
          <li>
            <strong>Establecer criterios:</strong> definir filtros,
            agrupamientos y ordenamientos.
          </li>
          <li>
            <strong>Determinar los resultados:</strong> establecer si
            se necesitan sumas, promedios, cantidades o subtotales.
          </li>
        </ol>

        <div className=" rounded-xl p-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo: informe mensual de ventas
          </h3>

          <p className="leading-relaxed mb-3">
            Una librería necesita conocer el total vendido durante octubre.
            Para elaborar el informe debe seleccionar:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Tabla Ventas: fecha, número e importe.</li>
            <li>Tabla Clientes: nombre del cliente.</li>
            <li>Tabla Vendedores: nombre del responsable.</li>
            <li>Filtro: operaciones realizadas durante octubre.</li>
            <li>Agrupamiento: vendedor.</li>
            <li>Cálculo: suma de los importes.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo práctico: informe mensual de ventas
        </h2>

        <p className="leading-relaxed mb-4">
          Una empresa desea conocer las ventas realizadas durante un mes.
          Para ello, genera un informe que muestra las operaciones registradas
          y permite comparar los resultados de sus vendedores.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="0">
                <th className="border border-blue-200 p-3 text-left">Vendedor</th>
                <th className="border border-blue-200 p-3 text-left">Operaciones</th>
                <th className="border border-blue-200 p-3 text-right">Total vendido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">Ana López</td>
                <td className="border border-blue-200 p-3">12</td>
                <td className="border border-blue-200 p-3 text-right">$850.000</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">Juan Pérez</td>
                <td className="border border-blue-200 p-3">9</td>
                <td className="border border-blue-200 p-3 text-right">$620.000</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">María Gómez</td>
                <td className="border border-blue-200 p-3">15</td>
                <td className="border border-blue-200 p-3 text-right">$1.030.000</td>
              </tr>
              <tr className="0">
                <td className="border border-blue-200 p-3 font-bold">TOTAL</td>
                <td className="border border-blue-200 p-3 font-bold">36</td>
                <td className="border border-blue-200 p-3 text-right font-bold">
                  $2.500.000
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Interpretación de los resultados
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Se registraron 36 operaciones durante el período.</li>
          <li>El importe total de ventas fue de $2.500.000.</li>
          <li>María Gómez obtuvo el mayor importe vendido.</li>
          <li>Juan Pérez registró el menor importe vendido.</li>
        </ul>

        <p className="leading-relaxed mt-4">
          Esta información permite comparar resultados y evaluar el
          funcionamiento del área comercial. Los valores son ilustrativos.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas al elaborar informes administrativos
        </h2>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            Utilizar títulos que identifiquen claramente el contenido
            del documento.
          </li>
          <li>
            Incluir la fecha o el período al que corresponde la información.
          </li>
          <li>
            Seleccionar solamente los campos necesarios.
          </li>
          <li>
            Aplicar formatos adecuados para fechas, cantidades y dinero.
          </li>
          <li>
            Utilizar agrupamientos y totales cuando faciliten el análisis.
          </li>
          <li>
            Verificar que los cálculos sean correctos.
          </li>
          <li>
            Evitar la exposición de datos personales que no sean necesarios.
          </li>
          <li>
            Restringir el acceso a informes que contengan información
            confidencial.
          </li>
          <li>
            Comprobar que los datos estén actualizados antes de compartir
            o imprimir el documento.
          </li>
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
              Actividad 1: Identificar tipos de informes
            </h3>

            <p className="leading-relaxed mb-3">
              Una empresa necesita organizar su información administrativa.
              Indicá qué tipo de informe utilizarías para resolver cada
              situación.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Conocer los teléfonos y correos de sus clientes.</li>
              <li>Identificar los productos con pocas unidades disponibles.</li>
              <li>Consultar las compras realizadas a cada proveedor.</li>
              <li>Conocer el total vendido durante un mes.</li>
              <li>Identificar las facturas que todavía no fueron abonadas.</li>
            </ol>

            <p className="mt-3 leading-relaxed">
              Explicá qué información debería contener cada informe.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 2: Diseñar un informe de clientes
            </h3>

            <p className="leading-relaxed mb-3">
              Utilizando una base de datos de clientes, elaborá un informe
              que permita consultar los datos de contacto.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Seleccioná los campos necesarios.</li>
              <li>Ordená los clientes por apellido.</li>
              <li>Diseñá un encabezado con el título "Listado de clientes".</li>
              <li>Aplicá un formato claro y uniforme.</li>
              <li>Revisá el resultado en la vista preliminar.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 3: Informe de inventario
            </h3>

            <p className="leading-relaxed mb-3">
              Una librería necesita controlar las existencias de sus productos.
              Creá un informe que contenga:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Código del producto.</li>
              <li>Nombre.</li>
              <li>Categoría.</li>
              <li>Precio.</li>
              <li>Cantidad disponible.</li>
              <li>Stock mínimo.</li>
            </ul>

            <p className="leading-relaxed mt-3">
              Ordená los productos por cantidad disponible y destacá
              aquellos que tengan un stock igual o inferior al mínimo.
            </p>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 4: Informe de compras y proveedores
            </h3>

            <p className="leading-relaxed mb-3">
              Elaborá un informe que permita conocer las compras realizadas
              durante un período.
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Seleccioná los datos de las compras.</li>
              <li>Incluí el nombre del proveedor.</li>
              <li>Mostrá la fecha y el importe de cada operación.</li>
              <li>Agrupá los registros por proveedor.</li>
              <li>Calculá el total comprado a cada proveedor.</li>
              <li>Incorporá el total general.</li>
            </ol>
          </div>

          <div className="border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-3">
              Actividad 5: Interpretación de un informe
            </h3>

            <p className="leading-relaxed mb-3">
              Utilizá el informe mensual de ventas presentado en esta página
              y respondé:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>¿Cuántas operaciones se realizaron?</li>
              <li>¿Cuál fue el importe total vendido?</li>
              <li>¿Qué vendedor obtuvo el mayor importe?</li>
              <li>¿Qué vendedor registró el menor importe?</li>
              <li>¿Para qué decisiones administrativas puede utilizarse
                esta información?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Sistema de informes de una organización
        </h2>

        <p className="leading-relaxed mb-4">
          Una organización utiliza Microsoft Access para administrar
          clientes, proveedores, productos, compras y ventas. La dirección
          necesita contar con documentos que permitan controlar las
          operaciones y consultar información relevante para la gestión.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Objetivo
        </h3>

        <p className="leading-relaxed mb-5">
          Diseñar un conjunto de informes administrativos que permita
          consultar, organizar e interpretar los datos almacenados en
          una base de datos.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Estructura de la base de datos
        </h3>

        <div className="space-y-4 mb-6">
          <div className="border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-900 mb-2">Clientes</h4>
            <p>IdCliente, Nombre, Apellido, Teléfono y Correo.</p>
          </div>

          <div className="border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-900 mb-2">Proveedores</h4>
            <p>IdProveedor, Nombre, Teléfono y Correo.</p>
          </div>

          <div className="border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-900 mb-2">Productos</h4>
            <p>IdProducto, Nombre, Categoría, Precio y Stock.</p>
          </div>

          <div className="border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-900 mb-2">Compras</h4>
            <p>IdCompra, Fecha, IdProveedor e ImporteTotal.</p>
          </div>

          <div className="border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-900 mb-2">Ventas</h4>
            <p>IdVenta, Fecha, IdCliente, Vendedor e ImporteTotal.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3">
          Consignas de trabajo
        </h3>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Revisá las tablas y las relaciones de la base de datos.
          </li>
          <li>
            Creá un informe general de clientes ordenado alfabéticamente.
          </li>
          <li>
            Creá un informe de proveedores con sus datos de contacto.
          </li>
          <li>
            Elaborá un informe de inventario que permita identificar
            productos con bajo stock.
          </li>
          <li>
            Creá un informe de compras agrupado por proveedor, con subtotales
            y total general.
          </li>
          <li>
            Elaborá un informe de ventas agrupado por vendedor, con la
            cantidad de operaciones y el importe total vendido.
          </li>
          <li>
            Aplicá criterios de diseño y formato para que todos los
            documentos mantengan una presentación uniforme.
          </li>
          <li>
            Revisá los resultados y comprobá que los cálculos sean correctos.
          </li>
          <li>
            Prepará los informes para su consulta e impresión.
          </li>
        </ol>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Entrega
        </h3>

        <p className="leading-relaxed">
          Presentá el archivo de Microsoft Access con los informes terminados.
          Incluí capturas de pantalla de cada documento y una breve explicación
          de su utilidad para la organización. Señalá qué información aporta
          cada informe y qué decisiones podrían tomarse a partir de sus
          resultados.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">
          Criterios de evaluación
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Selección adecuada de los datos.</li>
          <li>Correcta elaboración de los informes solicitados.</li>
          <li>Uso apropiado de filtros, agrupamientos y ordenamientos.</li>
          <li>Aplicación correcta de totales y subtotales.</li>
          <li>Diseño claro y presentación profesional.</li>
          <li>Interpretación de la información obtenida.</li>
          <li>Organización y funcionamiento de la base de datos.</li>
        </ul>
      </section>

      {/* Cierre */}
      <section className=" border border-blue-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Los informes administrativos permiten transformar los datos de
          una organización en información útil para el trabajo diario.
          A través de Microsoft Access es posible elaborar documentos
          destinados al control de clientes, proveedores, compras, ventas,
          inventario y personal. Su correcta elaboración facilita el
          seguimiento de las operaciones, mejora la organización y
          contribuye a tomar decisiones basadas en información.
        </p>
      </section>
    </div>
  );
}
