import CodeBlock from "@/app/components/CodeBlock";

export default function NavegacionJavaFXPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Navegación entre Pantallas en JavaFX
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En JavaFX, la navegación consiste en cambiar entre distintas vistas o
          pantallas dentro de una aplicación. Esto se logra generalmente mediante
          el uso de múltiples archivos FXML o cambiando dinámicamente el contenido
          de una escena.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la navegación?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La navegación permite al usuario moverse entre diferentes secciones de
          la aplicación, como por ejemplo: menú principal, formularios, listas o
          pantallas de resultados.
        </p>
      </section>

      {/* Formas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formas de navegar en JavaFX
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Cambiar de escena (Scene)</li>
          <li>Cargar diferentes vistas con FXMLLoader</li>
          <li>Reemplazar nodos dentro de un contenedor</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: cambiar de pantalla con FXMLLoader
        </h2>

        <CodeBlock code=
{`// Controlador de la pantalla actual
import javafx.event.ActionEvent;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public void irASegundaPantalla(ActionEvent event) {
    try {
        Parent root = FXMLLoader.load(getClass().getResource("segunda.fxml"));
        Stage stage = (Stage)((javafx.scene.Node)event.getSource()).getScene().getWindow();
        stage.setScene(new Scene(root));
        stage.show();
    } catch(Exception e) {
        e.printStackTrace();
    }
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué sucede en el ejemplo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Se carga un nuevo archivo FXML (segunda.fxml) y se reemplaza la escena
          actual del Stage. Esto permite cambiar completamente la pantalla que el
          usuario está viendo.
        </p>
      </section>

      {/* Alternativa */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alternativa: cambiar contenido dentro de un panel
        </h2>

        <CodeBlock code=
{`// Cambiar contenido dentro de un AnchorPane
@FXML
private AnchorPane contenedor;

public void cargarVista() {
    try {
        AnchorPane vista = FXMLLoader.load(getClass().getResource("vista.fxml"));
        contenedor.getChildren().setAll(vista);
    } catch (Exception e) {
        e.printStackTrace();
    }
}`}
        />
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de una buena navegación
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Mejora la experiencia del usuario</li>
          <li>Organiza mejor la aplicación</li>
          <li>Facilita el mantenimiento del código</li>
          <li>Permite escalar el proyecto</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una aplicación de gestión puede tener un menú principal desde donde se
          accede a clientes, productos y reportes, cada uno en su propia pantalla.
        </p>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá qué es la navegación en JavaFX.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Creá dos pantallas (FXML) y navegá entre ellas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Implementá un botón que cambie de vista.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Probá cargar contenido dinámico en un panel.
          </div>

        </div>
      </section>

    </div>
  );
}