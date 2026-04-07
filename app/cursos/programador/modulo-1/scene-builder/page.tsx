import CodeBlock from "@/app/components/CodeBlock";

export default function SceneBuilderPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Scene Builder en JavaFX
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Scene Builder es una herramienta visual que permite diseñar interfaces
          gráficas para aplicaciones JavaFX sin necesidad de escribir todo el
          código manualmente. Utiliza archivos FXML para representar la
          estructura de la interfaz.
        </p>
      </section>

      {/* ¿Qué es Scene Builder? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Scene Builder?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Es un editor visual donde podés arrastrar y soltar componentes como
          botones, textos o imágenes para construir tu interfaz.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>No requiere escribir código para diseñar</li>
          <li>Genera archivos FXML automáticamente</li>
          <li>Se integra con IntelliJ y otros IDEs</li>
        </ul>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes principales
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Contenedores (AnchorPane, VBox, HBox)</li>
          <li>Controles (Button, Label, TextField)</li>
          <li>Propiedades (tamaño, color, texto)</li>
          <li>Eventos (acciones al hacer clic)</li>
        </ul>
      </section>

      {/* Cómo usarlo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo usar Scene Builder?
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Crear un archivo FXML en tu proyecto</li>
          <li>Abrirlo con Scene Builder</li>
          <li>Arrastrar componentes al panel</li>
          <li>Configurar propiedades desde el panel derecho</li>
          <li>Asignar eventos a los elementos</li>
        </ol>
      </section>

      {/* Ejemplo FXML */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de archivo FXML
        </h2>

        <p className="max-w-3xl mb-6">
          Este es un ejemplo simple de una interfaz con un botón y un texto.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>

<VBox spacing="10" alignment="CENTER" xmlns:fx="http://javafx.com/fxml">

    <Label text="Hola JavaFX" />

    <Button text="Hacer clic" onAction="#handleClick" />

</VBox>`}
          />
        </div>
      </section>

      {/* Controlador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Controlador en Java
        </h2>

        <p className="max-w-3xl mb-6">
          El controlador maneja los eventos definidos en el archivo FXML.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`import javafx.event.ActionEvent;

public class Controller {

    public void handleClick(ActionEvent event) {
        System.out.println("Botón presionado");
    }

}`}
          />
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de usar Scene Builder
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Acelera el desarrollo de interfaces</li>
          <li>Permite visualizar cambios en tiempo real</li>
          <li>Reduce errores de diseño</li>
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
            Explica qué es Scene Builder y para qué sirve.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea una interfaz simple con un botón y un texto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Agrega un evento a un botón que muestre un mensaje en consola.
          </div>

        </div>
      </section>

    </div>
  );
}
