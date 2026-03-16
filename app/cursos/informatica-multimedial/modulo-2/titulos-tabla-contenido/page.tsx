export default function TitulosTablaContenidoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Uso de Títulos y Tabla de Contenido Automática
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Cuando se crean trabajos académicos o informes largos, es importante
          organizar el contenido utilizando títulos y subtítulos. Esto permite
          que el documento sea más fácil de leer y también facilita la creación
          de una tabla de contenido automática.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Microsoft Word permite aplicar estilos de título que luego se utilizan
          para generar automáticamente una tabla de contenido con todas las
          secciones del documento.
        </p>
      </section>

      {/* Qué son los títulos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los Títulos en Word?
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            Los títulos son estilos de formato que se utilizan para organizar
            las diferentes secciones de un documento.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Título 1 se utiliza para los temas principales.</li>
            <li>Título 2 se utiliza para los subtítulos.</li>
            <li>Título 3 se utiliza para subtemas dentro de un subtítulo.</li>
            <li>Permiten organizar mejor la información del documento.</li>
            <li>Se utilizan para crear automáticamente la tabla de contenido.</li>
          </ul>
        </div>
      </section>

      {/* Cómo aplicar títulos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Aplicar Títulos en Word
        </h2>

        <div className="border p-6 rounded-xl">
          <ol className="list-decimal list-inside space-y-2">
            <li>Seleccionar el texto que será el título.</li>
            <li>Ir a la pestaña <strong>Inicio</strong>.</li>
            <li>Buscar la sección llamada <strong>Estilos</strong>.</li>
            <li>Seleccionar <strong>Título 1</strong>, <strong>Título 2</strong> o <strong>Título 3</strong>.</li>
            <li>Repetir el proceso para todas las secciones del documento.</li>
          </ol>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de Organización con Títulos
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3 font-semibold">Nivel</th>
                <th className="p-3 font-semibold">Ejemplo</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-3">Título 1</td>
                <td className="p-3">Hardware</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Título 2</td>
                <td className="p-3">Procesador</td>
              </tr>

              <tr>
                <td className="p-3">Título 3</td>
                <td className="p-3">Funciones del procesador</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabla de contenido */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una Tabla de Contenido Automática
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            Una vez que el documento tiene los títulos aplicados, Word puede
            generar automáticamente una tabla de contenido.
          </p>

          <ol className="list-decimal list-inside space-y-2">
            <li>Colocar el cursor donde se desea insertar la tabla.</li>
            <li>Ir a la pestaña <strong>Referencias</strong>.</li>
            <li>Hacer clic en <strong>Tabla de contenido</strong>.</li>
            <li>Elegir un estilo de tabla automática.</li>
            <li>Word generará la tabla con todos los títulos del documento.</li>
          </ol>
        </div>
      </section>

      {/* Actualizar tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo Actualizar la Tabla de Contenido
        </h2>

        <div className="border p-6 rounded-xl">
          <p className="mb-3">
            Si agregas nuevos títulos o modificas el documento, es necesario
            actualizar la tabla de contenido.
          </p>

          <ol className="list-decimal list-inside space-y-2">
            <li>Hacer clic sobre la tabla de contenido.</li>
            <li>Seleccionar <strong>Actualizar tabla</strong>.</li>
            <li>Elegir actualizar solo números de página o toda la tabla.</li>
          </ol>
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crear un documento de Word y escribir tres títulos principales
            utilizando el estilo <strong>Título 1</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Agregar al menos dos subtítulos dentro de cada tema utilizando
            <strong> Título 2</strong>.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Insertar una tabla de contenido automática al inicio del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Modificar el documento agregando un nuevo título y actualizar la
            tabla de contenido.
          </div>

        </div>
      </section>

    </div>
  );
}