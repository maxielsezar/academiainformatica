export default function NormalizacionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Normalización de bases de datos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La normalización es un proceso que permite organizar la información
          de una base de datos de manera adecuada, evitando la repetición
          innecesaria de datos y facilitando su mantenimiento. En una base de
          datos relacional, la normalización ayuda a definir cómo distribuir
          la información entre diferentes tablas y cómo relacionarlas.
        </p>
      </section>

      {/* ¿Qué es la normalización? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la normalización?
        </h2>

        <p className="leading-relaxed max-w-3xl mb-4">
          La normalización consiste en analizar y organizar los datos de una
          base de datos para reducir la duplicación de información y evitar
          problemas al agregar, modificar o eliminar datos.
        </p>

        <p className="leading-relaxed max-w-3xl">
          Para lograrlo, la información se distribuye en diferentes tablas
          relacionadas entre sí. Cada tabla debe contener información
          relacionada con un determinado elemento o entidad del sistema.
        </p>
      </section>

      {/* Problemas de una base de datos no normalizada */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Problemas de una base de datos no normalizada
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Cuando toda la información se almacena en una única tabla, pueden
          aparecer diferentes problemas:
        </p>

        <ul className="list-disc pl-6 space-y-3 max-w-3xl">
          <li>
            <strong>Duplicación de datos:</strong> la misma información se
            almacena varias veces.
          </li>

          <li>
            <strong>Inconsistencia:</strong> un mismo dato puede quedar
            registrado de diferentes maneras.
          </li>

          <li>
            <strong>Dificultad para actualizar:</strong> modificar un dato
            puede requerir cambiar muchos registros.
          </li>

          <li>
            <strong>Dificultad para eliminar:</strong> al eliminar un registro
            también podría perderse información que todavía es necesaria.
          </li>

          <li>
            <strong>Mayor cantidad de información repetida:</strong> la base
            de datos ocupa espacio innecesariamente.
          </li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de una tabla sin normalizar
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Supongamos que una oficina necesita registrar las ventas realizadas
          a sus clientes. Una primera solución podría ser crear una tabla que
          contenga toda la información:
        </p>

        <div className="overflow-x-auto max-w-4xl">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-blue-200 p-3">IdVenta</th>
                <th className="border border-blue-200 p-3">Cliente</th>
                <th className="border border-blue-200 p-3">Teléfono</th>
                <th className="border border-blue-200 p-3">Producto</th>
                <th className="border border-blue-200 p-3">Precio</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">1</td>
                <td className="border border-blue-200 p-3">Juan Pérez</td>
                <td className="border border-blue-200 p-3">2945-123456</td>
                <td className="border border-blue-200 p-3">Teclado</td>
                <td className="border border-blue-200 p-3">$25.000</td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">2</td>
                <td className="border border-blue-200 p-3">Juan Pérez</td>
                <td className="border border-blue-200 p-3">2945-123456</td>
                <td className="border border-blue-200 p-3">Mouse</td>
                <td className="border border-blue-200 p-3">$15.000</td>
              </tr>

              <tr>
                <td className="border border-blue-200 p-3">3</td>
                <td className="border border-blue-200 p-3">Ana Gómez</td>
                <td className="border border-blue-200 p-3">2945-654321</td>
                <td className="border border-blue-200 p-3">Monitor</td>
                <td className="border border-blue-200 p-3">$180.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          En este ejemplo, los datos de Juan Pérez y su teléfono aparecen
          repetidos. Si el cliente realiza muchas ventas, sus datos deberán
          almacenarse repetidamente.
        </p>
      </section>

      {/* Separación de información */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Separar la información en tablas
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Una alternativa consiste en separar la información en diferentes
          tablas. Por ejemplo, podemos crear una tabla para los clientes,
          otra para los productos y otra para las ventas.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Clientes
            </h3>

            <ul className="space-y-2">
              <li>IdCliente</li>
              <li>Nombre</li>
              <li>Teléfono</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Productos
            </h3>

            <ul className="space-y-2">
              <li>IdProducto</li>
              <li>Descripción</li>
              <li>Precio</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-5">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Ventas
            </h3>

            <ul className="space-y-2">
              <li>IdVenta</li>
              <li>IdCliente</li>
              <li>IdProducto</li>
            </ul>
          </div>

        </div>

        <p className="leading-relaxed max-w-3xl mt-6">
          De esta manera, los datos del cliente se almacenan una sola vez y
          pueden utilizarse en diferentes ventas mediante las relaciones
          establecidas entre las tablas.
        </p>
      </section>

      {/* Formas normales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formas normales
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          La normalización puede aplicarse mediante diferentes niveles
          denominados formas normales. Estas permiten revisar progresivamente
          la estructura de las tablas.
        </p>

        <div className="space-y-6 max-w-4xl">

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Primera Forma Normal (1FN)
            </h3>

            <p className="leading-relaxed">
              Los campos deben contener valores individuales y no listas o
              grupos de datos dentro de una misma celda. Cada registro debe
              poder identificarse de manera adecuada.
            </p>
          </div>

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Segunda Forma Normal (2FN)
            </h3>

            <p className="leading-relaxed">
              Además de cumplir con la primera forma normal, los datos deben
              depender de la clave principal correspondiente.
            </p>
          </div>

          <div className="border-l-4 border-blue-700 pl-5">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Tercera Forma Normal (3FN)
            </h3>

            <p className="leading-relaxed">
              Además de cumplir con las formas anteriores, los campos deben
              depender directamente de la clave principal y no de otros
              campos que no sean claves.
            </p>
          </div>

        </div>
      </section>

      {/* Beneficios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Beneficios de la normalización
        </h2>

        <ul className="list-disc pl-6 space-y-3 max-w-3xl">
          <li>Reduce la duplicación de información.</li>
          <li>Facilita la actualización de los datos.</li>
          <li>Ayuda a mantener información consistente.</li>
          <li>Permite organizar mejor las tablas.</li>
          <li>Facilita el establecimiento de relaciones.</li>
          <li>Mejora el mantenimiento de la base de datos.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-8 max-w-4xl">

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 1: Detectar datos repetidos
            </h3>

            <p className="leading-relaxed">
              Analizar una tabla proporcionada por el docente e identificar
              aquellos datos que aparecen repetidos. Explicar por qué la
              repetición puede generar problemas en una base de datos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 2: Separar la información
            </h3>

            <p className="leading-relaxed">
              A partir de una tabla que contenga información de clientes,
              productos y ventas, determinar qué información debería
              almacenarse en cada tabla.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 3: Identificar la clave principal
            </h3>

            <p className="leading-relaxed">
              Para cada una de las tablas propuestas, determinar cuál debería
              ser su clave principal y justificar la elección.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 4: Analizar la normalización
            </h3>

            <p className="leading-relaxed">
              Analizar diferentes estructuras de tablas y determinar si
              presentan problemas de organización, repetición o dependencia
              de datos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Actividad 5: Normalizar una tabla en Access
            </h3>

            <p className="leading-relaxed">
              Crear en Microsoft Access una tabla con información repetida y
              posteriormente reorganizarla en varias tablas relacionadas,
              aplicando los criterios de normalización estudiados.
            </p>
          </div>

        </div>
      </section>

      {/* Actividad integradora */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: Normalizar la base de datos de una oficina
        </h2>

        <p className="leading-relaxed max-w-3xl mb-6">
          Continuando con la base de datos diseñada en las actividades
          anteriores, analizar su estructura y aplicar criterios de
          normalización para mejorar la organización de la información.
        </p>

        <ol className="list-decimal pl-6 space-y-3 max-w-3xl">
          <li>Revisar las tablas creadas anteriormente.</li>
          <li>Detectar información repetida.</li>
          <li>Identificar los campos que corresponden a cada entidad.</li>
          <li>Definir o revisar las claves principales.</li>
          <li>Separar la información cuando sea necesario.</li>
          <li>Establecer las relaciones entre las nuevas tablas.</li>
          <li>Implementar la estructura normalizada en Microsoft Access.</li>
        </ol>

        <div className="mt-6 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Producto de la actividad
          </h3>

          <p className="leading-relaxed">
            Una base de datos organizada en tablas relacionadas, acompañada
            por un esquema que muestre las tablas, sus claves y las relaciones
            establecidas.
          </p>
        </div>
      </section>

    </div>
  );
}