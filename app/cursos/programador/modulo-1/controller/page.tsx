import CodeBlock from "@/app/components/CodeBlock";

export default function ControladoresJavaFXPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Controladores en JavaFX
        </h1>

        <p className="max-w-3xl leading-relaxed">
          En JavaFX, los controladores son clases que permiten manejar la
          lógica de la interfaz gráfica. Se encargan de responder a eventos
          del usuario como clics, entradas de texto o cambios en la interfaz.
        </p>
      </section>

      {/* ¿Qué es un controlador? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un controlador?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Es una clase Java que se conecta con un archivo FXML y permite
          controlar los elementos de la interfaz.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Gestiona eventos</li>
          <li>Manipula componentes</li>
          <li>Contiene la lógica de la aplicación</li>
        </ul>
      </section>

      {/* Conexión con FXML */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conexión con FXML
        </h2>

        <p className="max-w-3xl mb-6">
          Para conectar un controlador con una interfaz, se utiliza el atributo
          fx:controller dentro del archivo FXML.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`<VBox xmlns:fx="http://javafx.com/fxml"
      fx:controller="com.ejemplo.Controller">

</VBox>`}
          />
        </div>
      </section>

      {/* Acceso a componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Acceso a componentes con @FXML
        </h2>

        <p className="max-w-3xl mb-6">
          Los elementos de la interfaz pueden ser vinculados al controlador
          usando la anotación @FXML.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class Controller {

    @FXML
    private Label miLabel;

}`}
          />
        </div>
      </section>

      {/* Eventos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Manejo de eventos
        </h2>

        <p className="max-w-3xl mb-6">
          Los controladores permiten definir métodos que se ejecutan cuando
          ocurre un evento, como hacer clic en un botón.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`import javafx.event.ActionEvent;
import javafx.fxml.FXML;

public class Controller {

    @FXML
    public void handleClick(ActionEvent event) {
        System.out.println("Botón presionado");
    }

}`}
          />
        </div>
      </section>

      {/* Ejemplo completo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo completo
        </h2>

        <p className="max-w-3xl mb-6">
          Este ejemplo muestra la conexión entre FXML y el controlador.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`// FXML
<Button text="Click" onAction="#handleClick" />

// Controller
public void handleClick(ActionEvent event) {
    System.out.println("Click funcionando");
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
          <li>No mezclar lógica de negocio con la interfaz</li>
          <li>Usar nombres claros para métodos y variables</li>
          <li>Mantener el controlador organizado</li>
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
            Explica qué es un controlador en JavaFX.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea un método que responda a un botón.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Vincula un Label a un controlador usando @FXML.
          </div>

        </div>
      </section>

    </div>
  );
}
