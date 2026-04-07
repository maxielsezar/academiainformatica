import CodeBlock from "@/app/components/CodeBlock";

export default function CssJavaFXPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          CSS en JavaFX
        </h1>

        <p className="max-w-3xl leading-relaxed">
          JavaFX permite aplicar estilos a las interfaces utilizando CSS,
          similar a como se hace en desarrollo web. Esto facilita separar
          el diseño visual de la lógica de la aplicación.
        </p>
      </section>

      {/* ¿Qué es CSS en JavaFX? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es CSS en JavaFX?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Es un sistema de estilos que permite cambiar colores, tamaños,
          fuentes y otros aspectos visuales de los componentes.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Se aplica a archivos .css</li>
          <li>Se conecta con archivos FXML o Java</li>
          <li>Permite reutilizar estilos</li>
        </ul>
      </section>

      {/* Cómo aplicar CSS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo aplicar CSS?
        </h2>

        <p className="max-w-3xl mb-6">
          Podés vincular un archivo CSS desde tu aplicación Java o desde el FXML.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`scene.getStylesheets().add(getClass().getResource("style.css").toExternalForm());`}
          />
        </div>
      </section>

      {/* Ejemplo CSS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de archivo CSS
        </h2>

        <p className="max-w-3xl mb-6">
          Este ejemplo cambia el estilo de un botón.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`.button {
    -fx-background-color: #2563eb;
    -fx-text-fill: white;
    -fx-font-size: 14px;
}`}
          />
        </div>
      </section>

      {/* Clases e IDs */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Clases e IDs
        </h2>

        <p className="max-w-3xl mb-6">
          Podés aplicar estilos específicos usando clases o identificadores.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`/* CSS */
#titulo {
    -fx-font-size: 20px;
    -fx-text-fill: red;
}

/* FXML */
<Label fx:id="titulo" text="Hola" />`}
          />
        </div>
      </section>

      {/* Pseudoclases */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pseudoclases
        </h2>

        <p className="max-w-3xl mb-6">
          Permiten aplicar estilos según el estado del componente.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`.button:hover {
    -fx-background-color: #1d4ed8;
}`}
          />
        </div>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Separar estilos en archivos CSS</li>
          <li>Usar clases reutilizables</li>
          <li>Evitar estilos inline</li>
        </ul>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crea un archivo CSS para cambiar el color de fondo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Aplica una clase CSS a un botón.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Usa una pseudoclase para cambiar el estilo al pasar el mouse.
          </div>

        </div>
      </section>

    </div>
  );
}
