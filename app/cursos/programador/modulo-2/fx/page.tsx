import CodeBlock from "@/app/components/CodeBlock";

export default function QueEsJavaFXPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          ¿Qué es JavaFX?
        </h1>

        <p className="max-w-3xl leading-relaxed">
          JavaFX es una plataforma para desarrollar aplicaciones de escritorio
          modernas utilizando el lenguaje Java. Permite crear interfaces
          gráficas (GUI) atractivas, interactivas y multiplataforma.
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características principales
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Interfaz gráfica moderna</li>
          <li>Soporte para CSS y estilos</li>
          <li>Uso de FXML para separar diseño y lógica</li>
          <li>Multiplataforma (Windows, Linux, Mac)</li>
          <li>Animaciones y efectos visuales</li>
        </ul>
      </section>

      {/* ¿Para qué se usa? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué se usa?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          JavaFX se utiliza para crear aplicaciones de escritorio como
          sistemas de gestión, herramientas educativas, dashboards o
          aplicaciones interactivas.
        </p>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes de JavaFX
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Stage (ventana principal)</li>
          <li>Scene (contenido de la ventana)</li>
          <li>Nodos (botones, textos, imágenes)</li>
          <li>Layouts (VBox, HBox, GridPane)</li>
        </ul>
      </section>

      {/* Ejemplo básico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo básico
        </h2>

        <p className="max-w-3xl mb-6">
          Este es un ejemplo simple de una aplicación JavaFX.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.stage.Stage;

public class Main extends Application {

    @Override
    public void start(Stage stage) {
        Button btn = new Button("Hola JavaFX");

        Scene scene = new Scene(btn, 300, 200);

        stage.setTitle("Mi primera app");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}`}
          />
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Separación entre diseño y lógica</li>
          <li>Interfaz moderna y flexible</li>
          <li>Integración con herramientas como Scene Builder</li>
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
            Explica qué es JavaFX con tus propias palabras.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Nombra tres características de JavaFX.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea una aplicación básica con un botón.
          </div>

        </div>
      </section>

    </div>
  );
}
