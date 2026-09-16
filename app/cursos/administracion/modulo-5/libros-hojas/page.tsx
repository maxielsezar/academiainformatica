export default function LibrosHojasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Libros y Hojas de Cálculo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las planillas de cálculo permiten organizar la información mediante
          libros y hojas de trabajo. Comprender la diferencia entre ambos
          conceptos es fundamental para mantener los datos ordenados y
          facilitar su consulta.
          <br /><br />
          Un <strong>libro</strong> es el archivo que contiene una o varias
          hojas de cálculo. Cada <strong>hoja</strong> representa un espacio
          independiente donde se pueden ingresar, organizar y procesar datos.
        </p>
      </section>

      {/* Qué es un libro */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Libro de Cálculo?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="leading-relaxed">
            Un libro de cálculo es el archivo utilizado para almacenar
            información y trabajos realizados con una aplicación de planillas
            de cálculo.
            <br /><br />
            Un mismo libro puede contener varias hojas, permitiendo organizar
            diferentes tipos de información dentro de un único archivo.
          </p>
        </div>
      </section>

      {/* Ejemplo de libro */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de un Libro Administrativo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Supongamos que una empresa necesita llevar un registro de sus
          operaciones. En lugar de crear un archivo diferente para cada
          información, puede utilizar un único libro organizado en varias
          hojas.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Libro: Administración de la Empresa
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li><strong>Clientes:</strong> información de los clientes.</li>
            <li><strong>Ventas:</strong> registro de operaciones realizadas.</li>
            <li><strong>Gastos:</strong> control de gastos.</li>
            <li><strong>Productos:</strong> información de productos.</li>
            <li><strong>Stock:</strong> control de existencias.</li>
            <li><strong>Resumen:</strong> información general y resultados.</li>
          </ul>
        </div>
      </section>

      {/* Qué es una hoja */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Hoja de Cálculo?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="leading-relaxed">
            Una hoja de cálculo es una de las páginas de trabajo que se
            encuentran dentro de un libro.
            <br /><br />
            Cada hoja está formada por filas, columnas y celdas donde se
            pueden ingresar diferentes tipos de información.
            <br /><br />
            Las hojas permiten separar y organizar los datos según su
            finalidad, evitando colocar toda la información en una única
            estructura.
          </p>
        </div>
      </section>

      {/* Relación libro hoja */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación entre Libro y Hoja
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La relación entre ambos conceptos puede entenderse de una manera
          sencilla:
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>El <strong>libro</strong> es el archivo completo.</li>
            <li>Las <strong>hojas</strong> son las diferentes páginas de trabajo dentro del libro.</li>
            <li>Una hoja contiene filas, columnas y celdas.</li>
            <li>Un libro puede contener una o muchas hojas.</li>
            <li>Las hojas pueden utilizarse para organizar diferentes categorías de información.</li>
          </ul>
        </div>
      </section>

      {/* Pestañas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pestañas de las Hojas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las hojas de un libro se encuentran representadas mediante pestañas,
          generalmente ubicadas en la parte inferior de la ventana.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Las pestañas permiten seleccionar rápidamente una hoja determinada
            y desplazarse entre las diferentes áreas de trabajo del libro.
            <br /><br />
            También permiten realizar diferentes acciones de organización,
            como cambiar el nombre de una hoja, crear nuevas hojas, moverlas
            o eliminarlas.
          </p>
        </div>
      </section>

      {/* Crear hojas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una Nueva Hoja
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cuando se necesita incorporar una nueva categoría de información,
          se puede crear una hoja adicional dentro del mismo libro.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Por ejemplo:
          </p>

          <ol className="list-decimal list-inside space-y-3">
            <li>Abrir el libro de trabajo.</li>
            <li>Seleccionar la opción para agregar una nueva hoja.</li>
            <li>Ingresar la información correspondiente.</li>
            <li>Asignar un nombre descriptivo a la hoja.</li>
            <li>Guardar el libro.</li>
          </ol>
        </div>
      </section>

      {/* Cambiar nombre */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cambiar el Nombre de una Hoja
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Asignar nombres claros a las hojas facilita la identificación de la
          información y mejora la organización del libro.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p>
            En lugar de utilizar nombres genéricos como:
          </p>

          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Hoja1</li>
            <li>Hoja2</li>
            <li>Hoja3</li>
          </ul>

          <p className="mt-6">
            es recomendable utilizar nombres relacionados con la información
            almacenada:
          </p>

          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>Clientes</li>
            <li>Ventas</li>
            <li>Gastos</li>
            <li>Productos</li>
            <li>Empleados</li>
          </ul>
        </div>
      </section>

      {/* Mover y copiar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Mover y Copiar Hojas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las hojas pueden reorganizarse dentro del libro según las
          necesidades del trabajo.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <ul className="list-disc list-inside space-y-3">
            <li>Modificar el orden de las hojas.</li>
            <li>Mover una hoja dentro del mismo libro.</li>
            <li>Copiar una hoja para reutilizar su estructura.</li>
            <li>Transferir una hoja a otro libro cuando sea necesario.</li>
          </ul>

          <p className="mt-6 leading-relaxed">
            Estas herramientas pueden ahorrar tiempo cuando varias hojas
            tienen estructuras similares.
          </p>
        </div>
      </section>

      {/* Eliminar hojas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Eliminar Hojas
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="leading-relaxed">
            Una hoja que ya no es necesaria puede eliminarse del libro.
            <br /><br />
            Esta acción debe realizarse con cuidado, especialmente cuando la
            hoja contiene información importante o está relacionada con
            fórmulas utilizadas en otras hojas.
          </p>

          <p className="mt-6 font-semibold">
            Antes de eliminar una hoja es recomendable verificar que la
            información no sea necesaria.
          </p>
        </div>
      </section>

      {/* Organización */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de un Libro
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una buena organización permite encontrar rápidamente la información
          y trabajar de manera más eficiente.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Ejemplo de organización:
          </p>

          <div className="space-y-3">
            <p>
              <strong>Libro:</strong> Gestión Administrativa 2026
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Clientes</li>
              <li>Proveedores</li>
              <li>Productos</li>
              <li>Ventas</li>
              <li>Gastos</li>
              <li>Stock</li>
              <li>Resumen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hojas relacionadas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Trabajo con Varias Hojas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Utilizar varias hojas permite separar la información sin perder la
          relación entre los diferentes datos.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            Por ejemplo, una empresa puede registrar sus ventas en una hoja y
            mantener la información de sus productos en otra.
            <br /><br />
            De esta manera, cada hoja cumple una función específica y el libro
            permite reunir toda la información relacionada con la actividad
            administrativa.
          </p>
        </div>
      </section>

      {/* Aplicación administrativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en Tareas Administrativas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La organización mediante libros y hojas resulta especialmente útil
          en tareas administrativas donde se trabaja con grandes cantidades
          de información.
        </p>

        <div className="border p-6 rounded-xl mt-6">
          <p className="font-semibold mb-4">
            Algunas aplicaciones son:
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>Registro de clientes.</li>
            <li>Control de proveedores.</li>
            <li>Registro de ventas.</li>
            <li>Control de gastos.</li>
            <li>Gestión de productos.</li>
            <li>Control de stock.</li>
            <li>Registro de empleados.</li>
            <li>Organización de presupuestos.</li>
            <li>Elaboración de informes.</li>
          </ul>
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas de Organización
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Utilizar nombres claros y descriptivos para las hojas.</li>
          <li>Evitar crear hojas innecesarias.</li>
          <li>Mantener un orden lógico entre las hojas.</li>
          <li>Separar diferentes categorías de información.</li>
          <li>Evitar almacenar información sin una finalidad definida.</li>
          <li>Guardar periódicamente el libro.</li>
          <li>Realizar copias de seguridad de los archivos importantes.</li>
          <li>Revisar la información antes de eliminar una hoja.</li>
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
            Crear un nuevo libro de cálculo y agregar cinco hojas.
            Cambiar sus nombres por:
            <strong> Clientes</strong>, <strong>Ventas</strong>,
            <strong> Gastos</strong>, <strong>Productos</strong> y{" "}
            <strong>Stock</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear una hoja llamada <strong>Clientes</strong> y registrar
            información básica de al menos diez clientes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Crear una hoja llamada <strong>Productos</strong> y registrar
            diferentes productos con sus respectivos datos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Modificar el orden de las hojas para que sigan una estructura
            lógica de trabajo administrativo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Crear una copia de una de las hojas y cambiarle el nombre.
            Analizar qué elementos de la hoja original se mantienen.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">

          Imagina que comienzas a trabajar como operador de informática en
          una pequeña empresa.

          <br /><br />

          La empresa necesita organizar en un único archivo la información
          relacionada con sus clientes, productos, ventas y gastos.

          <br /><br />

          Tu tarea consiste en crear un libro de cálculo que permita organizar
          toda esta información mediante diferentes hojas.

          <br /><br />

          El libro deberá contener como mínimo:

          <br /><br />

          ✔ Una hoja de <strong>Clientes</strong>. <br />
          ✔ Una hoja de <strong>Productos</strong>. <br />
          ✔ Una hoja de <strong>Ventas</strong>. <br />
          ✔ Una hoja de <strong>Gastos</strong>. <br />
          ✔ Una hoja de <strong>Stock</strong>. <br />
          ✔ Una hoja de <strong>Resumen</strong>.

          <br /><br />

          Finalmente, deberás explicar por qué decidiste organizar la
          información de esa manera y qué ventajas ofrece utilizar un único
          libro con varias hojas en lugar de crear un archivo independiente
          para cada categoría.

        </div>
      </section>

    </div>
  );
}