import CodeBlock from "@/app/components/CodeBlock";

export default function PasarDatosJavaFXPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Pasar Objetos entre Ventanas en JavaFX
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En aplicaciones JavaFX es común trabajar con múltiples ventanas. Para
          compartir información entre ellas, es necesario pasar objetos de un
          controller a otro.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué es importante?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Permite reutilizar datos, evitar duplicación y mantener la coherencia
          del sistema. Por ejemplo, pasar un objeto <code>Acuario</code> a otra
          ventana para mostrar su información.
        </p>
      </section>

      {/* Método */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Método recomendado
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El método más utilizado es cargar el FXML con <code>FXMLLoader</code>,
          obtener el controller de la nueva ventana y pasarle el objeto mediante
          un método setter.
        </p>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo paso a paso
        </h2>

        <CodeBlock code=
{`// Clase modelo
class Acuario {
    double volumen;

    Acuario(double volumen) {
        this.volumen = volumen;
    }
}`}
        />
      </section>

      {/* Ventana 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventana 1 (envía el objeto)
        </h2>

        <CodeBlock code=
{`import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public void abrirVentana() throws Exception {

    Acuario acuario = new Acuario(100);

    FXMLLoader loader = new FXMLLoader(getClass().getResource("vista2.fxml"));
    Parent root = loader.load();

    // Obtener controller de la nueva ventana
    ControllerVista2 controller = loader.getController();

    // Pasar el objeto
    controller.setAcuario(acuario);

    Stage stage = new Stage();
    stage.setScene(new Scene(root));
    stage.show();
}`}
        />
      </section>

      {/* Ventana 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventana 2 (recibe el objeto)
        </h2>

        <CodeBlock code=
{`public class ControllerVista2 {

    private Acuario acuario;

    public void setAcuario(Acuario acuario) {
        this.acuario = acuario;

        // Usar el objeto
        System.out.println("Volumen: " + acuario.volumen);
    }
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Se carga la nueva vista con FXMLLoader</li>
          <li>Se obtiene el controller con <code>getController()</code></li>
          <li>Se pasa el objeto mediante un método</li>
          <li>El controller receptor usa el objeto</li>
        </ul>
      </section>

      {/* Alternativas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Otras formas (menos recomendadas)
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Variables estáticas</li>
          <li>Singleton</li>
          <li>Contextos globales</li>
        </ul>

        <p className="mt-4 max-w-3xl">
          Estas opciones generan mayor acoplamiento y deben evitarse en la mayoría de los casos.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar setters para pasar datos</li>
          <li>No crear dependencias innecesarias</li>
          <li>Separar lógica de negocio de la interfaz</li>
          <li>Aplicar principios SOLID</li>
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
            Crear dos ventanas en JavaFX.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Pasar un objeto Acuario entre ellas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Mostrar datos del objeto en la segunda ventana.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Agregar validaciones antes de enviar el objeto.
          </div>

        </div>
      </section>

    </div>
  );
}