export default function ProcedimientosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Especificación de Procedimientos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La especificación de procedimientos permite documentar de manera
          detallada cómo deben ejecutarse las diferentes operaciones de un
          sistema. Describe los pasos, condiciones, datos de entrada y
          resultados esperados de cada proceso.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Esta documentación sirve como puente entre los requerimientos
          funcionales y la implementación del software. Antes de escribir el
          código, podemos definir qué debe hacer el sistema y cómo debe
          comportarse ante diferentes situaciones.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una especificación de procedimientos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una especificación de procedimientos es una descripción estructurada
          de las acciones que deben realizarse para completar una determinada
          operación del sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Puede utilizarse para documentar procesos realizados por usuarios,
          procesos automáticos del sistema o procedimientos técnicos que deben
          seguirse durante el desarrollo y mantenimiento de una aplicación.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <h3 className="font-semibold mb-4">
            Una especificación puede indicar:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Quién ejecuta el procedimiento.</li>
            <li>Cuál es su objetivo.</li>
            <li>Qué información necesita.</li>
            <li>Qué condiciones deben cumplirse.</li>
            <li>Qué pasos deben realizarse.</li>
            <li>Qué resultado se espera.</li>
            <li>Qué ocurre si se produce un error.</li>
          </ul>
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué documentar los procedimientos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Documentar los procedimientos permite establecer claramente cómo debe
          funcionar una determinada operación. Esto reduce ambigüedades y
          facilita el trabajo de los desarrolladores, usuarios y personas
          encargadas del mantenimiento del sistema.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mt-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Claridad
            </h3>

            <p>
              Permite definir con precisión los pasos necesarios para realizar
              una operación.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Comunicación
            </h3>

            <p>
              Facilita la comunicación entre usuarios, analistas y
              desarrolladores.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Desarrollo
            </h3>

            <p>
              Sirve como referencia para implementar posteriormente el
              procedimiento en código.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Mantenimiento
            </h3>

            <p>
              Permite comprender cómo funciona un proceso cuando es necesario
              modificarlo o corregirlo.
            </p>
          </div>

        </div>
      </section>

      {/* Relación con requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación con los requisitos y casos de uso
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La especificación de procedimientos se relaciona directamente con
          los requisitos funcionales y los casos de uso desarrollados
          anteriormente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Podemos comenzar con una necesidad del usuario, transformarla en un
          requisito funcional, representarla mediante un caso de uso y
          finalmente describir detalladamente el procedimiento necesario para
          llevarla a cabo.
        </p>

        <div className="space-y-4 max-w-4xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              1. Necesidad
            </h3>

            <p>
              El vendedor necesita registrar una venta.
            </p>
          </div>

          <div className="text-center text-xl">
            ↓
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              2. Requisito funcional
            </h3>

            <p>
              El sistema debe permitir registrar nuevas ventas.
            </p>
          </div>

          <div className="text-center text-xl">
            ↓
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              3. Caso de uso
            </h3>

            <p>
              CU-05 — Registrar venta.
            </p>
          </div>

          <div className="text-center text-xl">
            ↓
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              4. Procedimiento
            </h3>

            <p>
              Descripción detallada de los pasos necesarios para registrar la
              venta.
            </p>
          </div>

        </div>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes de una especificación
        </h2>

        <div className="space-y-5 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Nombre
            </h3>

            <p>
              Identifica claramente el procedimiento que se está documentando.
            </p>

            <div className=" border rounded-lg p-4 mt-4">
              <p className="font-medium">
                Registrar venta
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Objetivo
            </h3>

            <p>
              Describe qué se pretende conseguir mediante el procedimiento.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Actor o responsable
            </h3>

            <p>
              Indica quién inicia o ejecuta el procedimiento.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Precondiciones
            </h3>

            <p>
              Son las condiciones que deben cumplirse antes de comenzar el
              procedimiento.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Entradas
            </h3>

            <p>
              Son los datos necesarios para realizar la operación.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Pasos
            </h3>

            <p>
              Describen en orden las acciones que deben realizarse.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Salidas
            </h3>

            <p>
              Indican qué información o resultado genera el procedimiento.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Excepciones
            </h3>

            <p>
              Describen qué debe suceder cuando se presenta una situación
              inesperada o un dato inválido.
            </p>
          </div>

        </div>
      </section>

      {/* Ejemplo registrar cliente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Registrar cliente
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">

          <div className="space-y-4">

            <p>
              <strong>Nombre:</strong> Registrar cliente
            </p>

            <p>
              <strong>Objetivo:</strong> Incorporar un nuevo cliente al
              sistema.
            </p>

            <p>
              <strong>Actor:</strong> Vendedor.
            </p>

            <p>
              <strong>Precondición:</strong> El vendedor debe haber iniciado
              sesión.
            </p>

            <p>
              <strong>Entradas:</strong> Nombre, apellido, DNI, teléfono y
              correo electrónico.
            </p>

            <div>
              <p className="font-semibold mb-2">
                Flujo principal:
              </p>

              <ol className="list-decimal list-inside space-y-2">
                <li>El vendedor selecciona la opción "Nuevo cliente".</li>
                <li>El sistema muestra el formulario.</li>
                <li>El vendedor ingresa los datos.</li>
                <li>El sistema valida los datos.</li>
                <li>El sistema verifica que el cliente no exista.</li>
                <li>El sistema almacena el cliente.</li>
                <li>El sistema informa que el registro fue realizado.</li>
              </ol>
            </div>

            <p>
              <strong>Salida:</strong> Nuevo cliente almacenado en el sistema.
            </p>

          </div>

        </div>
      </section>

      {/* Ejemplo registrar venta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Registrar venta
        </h2>

        <div className="border rounded-xl p-6 max-w-4xl">

          <p>
            <strong>Objetivo:</strong> Registrar una venta y actualizar la
            información correspondiente.
          </p>

          <p className="mt-4">
            <strong>Actor:</strong> Vendedor.
          </p>

          <p className="mt-4">
            <strong>Precondiciones:</strong>
          </p>

          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>El vendedor debe estar autenticado.</li>
            <li>El cliente debe estar registrado.</li>
            <li>Los productos deben existir.</li>
            <li>Debe existir stock suficiente.</li>
          </ul>

          <div className="mt-6">
            <p className="font-semibold mb-3">
              Flujo principal:
            </p>

            <ol className="list-decimal list-inside space-y-2">
              <li>Seleccionar el cliente.</li>
              <li>Seleccionar un producto.</li>
              <li>Indicar la cantidad.</li>
              <li>Verificar disponibilidad.</li>
              <li>Agregar el producto al detalle de la venta.</li>
              <li>Repetir el proceso para otros productos.</li>
              <li>Calcular el total.</li>
              <li>Confirmar la venta.</li>
              <li>Guardar la venta.</li>
              <li>Actualizar el stock.</li>
              <li>Mostrar la confirmación.</li>
            </ol>
          </div>

          <div className="mt-6">
            <p className="font-semibold mb-3">
              Posibles excepciones:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>El producto no existe.</li>
              <li>No hay stock suficiente.</li>
              <li>El cliente no está registrado.</li>
              <li>Los datos ingresados son inválidos.</li>
              <li>No se puede guardar la información.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Procedimientos y pseudocódigo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Procedimientos y pseudocódigo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La especificación de procedimientos también puede complementarse con
          pseudocódigo. Esto permite describir la lógica de una operación de
          manera cercana a la programación, pero sin depender todavía de un
          lenguaje específico.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">

          <h3 className="font-semibold mb-4">
            Ejemplo
          </h3>

          <pre className=" rounded-lg p-4 overflow-x-auto text-sm">
{`INICIO

  solicitar datos del cliente

  validar datos

  SI los datos son válidos ENTONCES

      verificar si el cliente existe

      SI el cliente no existe ENTONCES
          guardar cliente
          mostrar mensaje de confirmación
      SINO
          mostrar mensaje "El cliente ya existe"
      FIN SI

  SINO
      mostrar mensaje de error
  FIN SI

FIN`}
          </pre>

        </div>

        <p className="leading-relaxed max-w-3xl mt-4">
          El pseudocódigo permite verificar la lógica del procedimiento antes
          de implementarlo mediante Java u otro lenguaje de programación.
        </p>
      </section>

      {/* Procedimientos y base de datos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Procedimientos relacionados con la base de datos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un sistema que utiliza una base de datos, los procedimientos deben
          contemplar también las operaciones necesarias para consultar y
          modificar la información persistente.
        </p>

        <div className="space-y-4 max-w-4xl mt-6">

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Registrar
            </h3>

            <p>
              Validar los datos y realizar una operación de inserción.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Consultar
            </h3>

            <p>
              Solicitar información y recuperar los registros correspondientes.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Modificar
            </h3>

            <p>
              Validar los nuevos datos y actualizar el registro correspondiente.
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="font-semibold mb-2">
              Eliminar
            </h3>

            <p>
              Verificar las condiciones necesarias y eliminar o desactivar el
              registro.
            </p>
          </div>

        </div>
      </section>

      {/* Documentación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Procedimientos como documentación técnica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los procedimientos forman parte de la documentación técnica porque
          permiten conocer cómo debe funcionar una determinada operación del
          sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una documentación adecuada permite que otro desarrollador pueda
          comprender el proceso incluso sin haber participado originalmente en
          su implementación.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">

          <h3 className="font-semibold mb-4">
            Un procedimiento documentado debería permitir responder:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>¿Quién ejecuta el proceso?</li>
            <li>¿Qué información necesita?</li>
            <li>¿Qué condiciones deben cumplirse?</li>
            <li>¿Qué pasos se realizan?</li>
            <li>¿Qué resultado se obtiene?</li>
            <li>¿Qué sucede si ocurre un error?</li>
          </ul>

        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Utilizar pasos claros
            </h3>

            <p>
              Cada acción debe estar descrita de forma concreta y comprensible.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Indicar condiciones
            </h3>

            <p>
              Deben documentarse las condiciones necesarias antes y durante la
              ejecución.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Documentar errores
            </h3>

            <p>
              Es importante indicar qué debe hacer el sistema ante datos
              incorrectos o situaciones inesperadas.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold mb-3">
              Mantener la documentación actualizada
            </h3>

            <p>
              Si el funcionamiento del sistema cambia, la especificación debe
              actualizarse.
            </p>
          </div>

        </div>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Seleccionar uno de los casos de uso del sistema de ventas y elaborar
          su especificación de procedimiento.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">

          <h3 className="font-semibold mb-4">
            Consigna
          </h3>

          <ol className="list-decimal list-inside space-y-3">
            <li>
              Seleccionar un caso de uso.
            </li>

            <li>
              Definir el objetivo del procedimiento.
            </li>

            <li>
              Identificar el actor responsable.
            </li>

            <li>
              Definir las precondiciones.
            </li>

            <li>
              Identificar los datos de entrada.
            </li>

            <li>
              Describir el flujo principal paso a paso.
            </li>

            <li>
              Identificar posibles excepciones.
            </li>

            <li>
              Definir el resultado esperado.
            </li>

            <li>
              Representar el procedimiento mediante pseudocódigo si resulta
              necesario.
            </li>
          </ol>

        </div>
      </section>

      {/* Resumen */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Resumen
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La especificación de procedimientos permite describir de manera
          detallada cómo deben ejecutarse las operaciones de un sistema.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          A partir de los requisitos y casos de uso podemos definir entradas,
          condiciones, pasos, resultados y excepciones. Esta información sirve
          como guía para la implementación y como parte de la documentación
          técnica del proyecto.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold">
            Requisito → Caso de uso → Procedimiento → Implementación
          </p>
        </div>

      </section>

    </div>
  );
}