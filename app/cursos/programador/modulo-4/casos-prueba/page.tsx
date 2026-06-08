export default function CasosDePruebaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Casos de Prueba para el Sistema de Ventas
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los casos de prueba son documentos que describen una situación
          específica que será evaluada para verificar que una funcionalidad del
          sistema se comporta de la manera esperada.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En esta unidad aprenderemos a diseñar casos de prueba para el sistema
          de ventas desarrollado durante el curso.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Caso de Prueba?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un caso de prueba es un conjunto de condiciones, datos de entrada y
          resultados esperados que permiten verificar si una funcionalidad del
          sistema funciona correctamente.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Cada caso de prueba debe poder responder una pregunta:
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p className="font-semibold">
            ¿Qué debería ocurrir cuando el usuario realiza una determinada acción?
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos de un Caso de Prueba
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Verificar funcionalidades.</li>
          <li>Detectar errores.</li>
          <li>Comprobar requisitos.</li>
          <li>Validar resultados.</li>
          <li>Documentar pruebas realizadas.</li>
          <li>Facilitar futuras verificaciones.</li>
        </ul>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de un Caso de Prueba
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border">
            <thead>
              <tr className="">
                <th className="border p-3">Campo</th>
                <th className="border p-3">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Identificador</td>
                <td className="border p-3">Código único de la prueba.</td>
              </tr>
              <tr>
                <td className="border p-3">Objetivo</td>
                <td className="border p-3">Qué se desea verificar.</td>
              </tr>
              <tr>
                <td className="border p-3">Datos de entrada</td>
                <td className="border p-3">Información utilizada.</td>
              </tr>
              <tr>
                <td className="border p-3">Resultado esperado</td>
                <td className="border p-3">Comportamiento correcto esperado.</td>
              </tr>
              <tr>
                <td className="border p-3">Resultado obtenido</td>
                <td className="border p-3">Resultado real observado.</td>
              </tr>
              <tr>
                <td className="border p-3">Estado</td>
                <td className="border p-3">Aprobado o Fallido.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Caso de Prueba
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border">
            <thead>
              <tr className="">
                <th className="border p-3">Campo</th>
                <th className="border p-3">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">ID</td>
                <td className="border p-3">CP-001</td>
              </tr>
              <tr>
                <td className="border p-3">Objetivo</td>
                <td className="border p-3">Verificar cálculo de subtotal.</td>
              </tr>
              <tr>
                <td className="border p-3">Entrada</td>
                <td className="border p-3">P - Cantidad: 3</td>
              </tr>
              <tr>
                <td className="border p-3">Resultado esperado</td>
                <td className="border p-3">$300</td>
              </tr>
              <tr>
                <td className="border p-3">Estado</td>
                <td className="border p-3">Pendiente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sistema de ventas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Casos de Prueba del Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Algunas funcionalidades que deben verificarse son:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Alta de clientes.</li>
          <li>Alta de productos.</li>
          <li>Cálculo de subtotales.</li>
          <li>Cálculo del total de venta.</li>
          <li>Validación de cantidades.</li>
          <li>Validación de precios.</li>
          <li>Generación de comprobantes.</li>
          <li>Mensajes de error.</li>
        </ul>
      </section>

      {/* Casos válidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Casos de Prueba Positivos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Son aquellos en los que el usuario ingresa información correcta y se
          espera que el sistema funcione normalmente.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="border-collapse border">
            <thead>
              <tr className="">
                <th className="border p-3">ID</th>
                <th className="border p-3">Prueba</th>
                <th className="border p-3">Resultado Esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">CP-002</td>
                <td className="border p-3">Crear producto válido</td>
                <td className="border p-3">Producto registrado.</td>
              </tr>
              <tr>
                <td className="border p-3">CP-003</td>
                <td className="border p-3">Crear cliente válido</td>
                <td className="border p-3">Cliente registrado.</td>
              </tr>
              <tr>
                <td className="border p-3">CP-004</td>
                <td className="border p-3">Venta con datos correctos</td>
                <td className="border p-3">Venta guardada.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Casos negativos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Casos de Prueba Negativos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Son pruebas donde se ingresan datos incorrectos para verificar que el
          sistema responda adecuadamente.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="border-collapse border">
            <thead>
              <tr className="">
                <th className="border p-3">ID</th>
                <th className="border p-3">Prueba</th>
                <th className="border p-3">Resultado Esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">CP-005</td>
                <td className="border p-3">Cantidad negativa</td>
                <td className="border p-3">Mostrar error.</td>
              </tr>
              <tr>
                <td className="border p-3">CP-006</td>
                <td className="border p-3">Precio negativo</td>
                <td className="border p-3">Mostrar error.</td>
              </tr>
              <tr>
                <td className="border p-3">CP-007</td>
                <td className="border p-3">Cliente vacío</td>
                <td className="border p-3">No guardar registro.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas al Diseñar Casos de Prueba
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Probar tanto escenarios válidos como inválidos.</li>
          <li>Definir claramente el resultado esperado.</li>
          <li>Documentar los resultados obtenidos.</li>
          <li>No asumir comportamientos del sistema.</li>
          <li>Crear pruebas simples y específicas.</li>
          <li>Actualizar las pruebas cuando cambie el sistema.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Diseñar 5 casos de prueba para la clase Producto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Diseñar 5 casos de prueba para la clase Cliente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Diseñar 5 casos de prueba para la clase Venta.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Identificar al menos 3 casos negativos para cada clase.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 5</p>
            Construir una planilla de pruebas con todos los casos diseñados.
          </div>

        </div>
      </section>

    </div>
  );
}