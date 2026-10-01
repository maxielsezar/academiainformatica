export default function FuncionesBusquedaPage() {
  return (
    <div className="space-y-14">

      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Funciones de Búsqueda y Referencias
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las funciones de búsqueda y referencias permiten localizar
          información dentro de una tabla y obtener automáticamente un dato
          relacionado. Son especialmente útiles para trabajar con listas de
          clientes, productos, precios, códigos, empleados, proveedores y
          otros registros administrativos.
        </p>
      </section>

      {/* ¿Qué son? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son las funciones de búsqueda y referencias?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Estas funciones permiten buscar un determinado valor dentro de un
          rango de datos y devolver información asociada a ese valor.
          De esta manera, se evita tener que buscar manualmente un registro
          dentro de una tabla.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Una empresa posee una tabla con códigos de productos, nombres y
            precios. Si un usuario introduce un código, una función de
            búsqueda puede localizar automáticamente el producto y mostrar
            su precio.
          </p>
        </div>
      </section>

      {/* Tabla ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tabla de referencia
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Para comprender las funciones de búsqueda utilizaremos la siguiente
          tabla:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr>
                <th className="border p-3 text-left">Código</th>
                <th className="border p-3 text-left">Producto</th>
                <th className="border p-3 text-left">Categoría</th>
                <th className="border p-3 text-left">Precio</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">P001</td>
                <td className="border p-3">Teclado</td>
                <td className="border p-3">Periféricos</td>
                <td className="border p-3">$25.000</td>
              </tr>

              <tr>
                <td className="border p-3">P002</td>
                <td className="border p-3">Mouse</td>
                <td className="border p-3">Periféricos</td>
                <td className="border p-3">$15.000</td>
              </tr>

              <tr>
                <td className="border p-3">P003</td>
                <td className="border p-3">Monitor</td>
                <td className="border p-3">Pantallas</td>
                <td className="border p-3">$180.000</td>
              </tr>

              <tr>
                <td className="border p-3">P004</td>
                <td className="border p-3">Impresora</td>
                <td className="border p-3">Oficina</td>
                <td className="border p-3">$120.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* BUSCARV */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          BUSCARV
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>BUSCARV</strong> permite buscar un valor en la
          primera columna de una tabla y devolver un dato correspondiente de
          otra columna de la misma fila.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =BUSCARV(F2;A2:D5;2;FALSO)
          </p>

          <p className="leading-relaxed mt-4">
            En este ejemplo, el código que se encuentra en F2 se busca en la
            primera columna del rango A2:D5. El número <strong>2</strong>
            indica que se debe devolver el contenido de la segunda columna.
          </p>

          <p className="leading-relaxed mt-4">
            El argumento <strong>FALSO</strong> indica que se busca una
            coincidencia exacta.
          </p>
        </div>
      </section>

      {/* Estructura BUSCARV */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de BUSCARV
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="font-mono mb-6">
            =BUSCARV(valor_buscado;matriz;indicador_columnas;ordenado)
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>valor_buscado:</strong> dato que se desea encontrar.
            </li>
            <li>
              <strong>matriz:</strong> rango donde se realizará la búsqueda.
            </li>
            <li>
              <strong>indicador_columnas:</strong> número de columna que
              contiene el resultado.
            </li>
            <li>
              <strong>ordenado:</strong> indica si se desea una coincidencia
              aproximada o exacta.
            </li>
          </ul>
        </div>
      </section>

      {/* Coincidencia exacta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Coincidencia exacta
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando se busca un código, DNI, número de cliente o cualquier otro
          identificador específico, normalmente se necesita encontrar
          exactamente ese valor.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =BUSCARV(F2;A2:D100;4;FALSO)
          </p>

          <p className="leading-relaxed mt-4">
            Esta fórmula busca el código de F2 y devuelve el precio ubicado
            en la cuarta columna de la tabla.
          </p>
        </div>
      </section>

      {/* Coincidencia aproximada */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Coincidencia aproximada
        </h2>

        <p className="leading-relaxed max-w-3xl">
          También es posible realizar búsquedas aproximadas. Esta modalidad
          puede utilizarse cuando los valores están organizados de acuerdo
          con determinados rangos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =BUSCARV(F2;A2:B10;2;VERDADERO)
          </p>

          <p className="leading-relaxed mt-4">
            En este caso, la búsqueda puede devolver el valor correspondiente
            al rango en el que se encuentra el dato buscado.
          </p>
        </div>
      </section>

      {/* BUSCARH */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          BUSCARH
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>BUSCARH</strong> realiza búsquedas
          horizontalmente. Busca un valor en la primera fila de una tabla y
          devuelve un dato ubicado en otra fila de la misma columna.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =BUSCARH(B1;B1:E3;3;FALSO)
          </p>

          <p className="leading-relaxed mt-4">
            Es útil cuando la información está organizada horizontalmente
            en lugar de estar distribuida en columnas.
          </p>
        </div>
      </section>

      {/* BUSCAR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          BUSCAR
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>BUSCAR</strong> permite localizar un valor en
          un rango y devolver el dato correspondiente de otro rango.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =BUSCAR(F2;A2:A10;B2:B10)
          </p>

          <p className="leading-relaxed mt-4">
            En este caso se busca el valor de F2 en el rango A2:A10 y se
            devuelve el valor correspondiente del rango B2:B10.
          </p>
        </div>
      </section>

      {/* INDICE */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          INDICE
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>INDICE</strong> permite obtener el contenido
          de una celda ubicada en una posición determinada dentro de un
          rango.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =INDICE(B2:D10;3;2)
          </p>

          <p className="leading-relaxed mt-4">
            La fórmula devuelve el dato que se encuentra en la tercera fila
            y segunda columna del rango seleccionado.
          </p>
        </div>
      </section>

      {/* COINCIDIR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          COINCIDIR
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La función <strong>COINCIDIR</strong> permite determinar la
          posición que ocupa un valor dentro de un rango.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =COINCIDIR(F2;A2:A10;0)
          </p>

          <p className="leading-relaxed mt-4">
            El valor <strong>0</strong> indica que se busca una coincidencia
            exacta.
          </p>

          <p className="leading-relaxed mt-4">
            El resultado será la posición que ocupa el valor buscado dentro
            del rango.
          </p>
        </div>
      </section>

      {/* INDICE + COINCIDIR */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Combinar INDICE y COINCIDIR
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una combinación muy útil consiste en utilizar
          <strong> INDICE</strong> junto con <strong>COINCIDIR</strong>.
          Esta combinación permite buscar un dato y devolver información
          relacionada desde otra columna.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =INDICE(D2:D10;COINCIDIR(F2;A2:A10;0))
          </p>

          <p className="leading-relaxed mt-4">
            En este ejemplo, COINCIDIR localiza la posición del código de F2
            dentro de A2:A10. Luego, INDICE utiliza esa posición para
            devolver el precio correspondiente desde D2:D10.
          </p>
        </div>
      </section>

      {/* BUSCARX */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          BUSCARX
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En versiones modernas de algunas aplicaciones de planillas de
          cálculo se encuentra la función <strong>BUSCARX</strong>, que
          permite realizar búsquedas de manera flexible.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =BUSCARX(F2;A2:A10;D2:D10)
          </p>

          <p className="leading-relaxed mt-4">
            En este ejemplo se busca el código de F2 en A2:A10 y se devuelve
            el precio correspondiente desde D2:D10.
          </p>
        </div>
      </section>

      {/* BUSCARX con mensaje */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          BUSCARX con resultado personalizado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          BUSCARX también puede utilizarse para mostrar un mensaje cuando el
          valor buscado no existe en la tabla.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =BUSCARX(F2;A2:A10;D2:D10;"Producto no encontrado")
          </p>

          <p className="leading-relaxed mt-4">
            De esta forma, en lugar de mostrar un error cuando no se
            encuentra el código, se presenta un mensaje comprensible para
            el usuario.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en tareas administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las funciones de búsqueda permiten automatizar consultas que
          habitualmente requerirían revisar manualmente grandes cantidades
          de información.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Ejemplo: consulta de productos
          </h3>

          <p className="leading-relaxed">
            Un empleado introduce el código de un producto en la celda F2.
            La planilla puede completar automáticamente su descripción,
            categoría y precio.
          </p>

          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-3 text-left">Dato</th>
                  <th className="border p-3 text-left">Fórmula</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border p-3">Descripción</td>
                  <td className="border p-3 font-mono">
                    =BUSCARV(F2;A2:D100;2;FALSO)
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Categoría</td>
                  <td className="border p-3 font-mono">
                    =BUSCARV(F2;A2:D100;3;FALSO)
                  </td>
                </tr>

                <tr>
                  <td className="border p-3">Precio</td>
                  <td className="border p-3 font-mono">
                    =BUSCARV(F2;A2:D100;4;FALSO)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Referencias a otras hojas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Búsquedas entre diferentes hojas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las funciones de búsqueda también pueden utilizarse para consultar
          información almacenada en otra hoja del mismo libro.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-mono">
            =BUSCARV(A2;Productos!A:D;4;FALSO)
          </p>

          <p className="leading-relaxed mt-4">
            En este caso, la información se obtiene desde la hoja
            <strong> Productos</strong>.
          </p>
        </div>
      </section>

      {/* Errores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores frecuentes
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Buscar un valor que no existe en la tabla.
          </li>
          <li>
            Seleccionar un rango incorrecto.
          </li>
          <li>
            Utilizar un número de columna incorrecto en BUSCARV.
          </li>
          <li>
            Confundir coincidencia exacta con coincidencia aproximada.
          </li>
          <li>
            Tener códigos almacenados como texto en una tabla y como números
            en otra.
          </li>
          <li>
            Modificar la estructura de la tabla sin revisar las referencias.
          </li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            Utilizar identificadores únicos para realizar búsquedas.
          </li>
          <li>
            Mantener las tablas correctamente organizadas.
          </li>
          <li>
            Verificar que los tipos de datos sean compatibles.
          </li>
          <li>
            Utilizar coincidencia exacta cuando se busquen códigos o
            identificadores.
          </li>
          <li>
            Mantener separadas las tablas de referencia de las tablas de
            trabajo cuando sea conveniente.
          </li>
          <li>
            Comprobar los resultados antes de utilizar la información en
            informes o documentos administrativos.
          </li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 1: Consulta de productos
            </h3>

            <p className="leading-relaxed">
              Crear una tabla con al menos 15 productos que contenga código,
              descripción, categoría y precio. Crear otra sección donde el
              usuario introduzca un código y utilizar <strong>BUSCARV</strong>
              para obtener automáticamente la información correspondiente.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 2: Buscar empleados
            </h3>

            <p className="leading-relaxed">
              Crear una tabla de empleados con DNI, nombre, apellido,
              sector y cargo. Utilizar funciones de búsqueda para obtener
              automáticamente el nombre y cargo de un empleado a partir de
              su DNI.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 3: INDICE y COINCIDIR
            </h3>

            <p className="leading-relaxed">
              Crear una tabla de proveedores y utilizar
              <strong> INDICE</strong> y <strong>COINCIDIR</strong> para
              buscar información a partir del código del proveedor.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 4: Búsqueda entre hojas
            </h3>

            <p className="leading-relaxed">
              Crear un libro con una hoja llamada <strong>Productos</strong>
              y otra llamada <strong>Ventas</strong>. Utilizar una función
              de búsqueda para completar automáticamente el nombre y precio
              de cada producto registrado en la hoja de ventas.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Actividad 5: Sistema de consulta
            </h3>

            <p className="leading-relaxed">
              Diseñar una pequeña herramienta de consulta administrativa.
              El usuario deberá ingresar un código o identificador y la
              planilla deberá mostrar automáticamente los datos asociados.
              Utilizar funciones de búsqueda y referencias para resolverlo.
            </p>
          </div>

        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una empresa necesita crear una planilla para consultar información
          de sus productos. El libro deberá contener una hoja con el listado
          completo de productos y otra hoja destinada a realizar consultas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          La tabla de productos deberá contener código, descripción,
          categoría, proveedor, precio y stock. En la hoja de consulta, el
          usuario ingresará únicamente el código del producto.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Utilizar <strong>BUSCARV</strong>, <strong>BUSCARX</strong> o una
          combinación de <strong>INDICE</strong> y
          <strong> COINCIDIR</strong> para completar automáticamente la
          información del producto.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Finalmente, incorporar un mensaje para los códigos que no existan
          y presentar la herramienta de consulta con un formato claro y
          sencillo de utilizar.
        </p>
      </section>

    </div>
  );
}