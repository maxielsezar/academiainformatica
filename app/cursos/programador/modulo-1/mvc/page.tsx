import CodeBlock from "@/app/components/CodeBlock";

export default function MVCCompletoJavaFXPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          MVC Completo en JavaFX
        </h1>

        <p className="max-w-3xl leading-relaxed">
          El patrón MVC (Modelo - Vista - Controlador) permite organizar
          aplicaciones separando responsabilidades. En JavaFX, este patrón
          se implementa utilizando clases Java, archivos FXML y controladores.
        </p>
      </section>

      {/* ¿Qué es MVC? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es MVC?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Modelo:</strong> maneja los datos</li>
          <li><strong>Vista:</strong> representa la interfaz gráfica</li>
          <li><strong>Controlador:</strong> conecta la vista con el modelo</li>
        </ul>
      </section>

      {/* Flujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujo de funcionamiento
        </h2>

        <p className="max-w-3xl leading-relaxed">
          El usuario interactúa con la vista, el controlador captura el evento
          y modifica el modelo. Luego, la vista se actualiza con los nuevos datos.
        </p>
      </section>

      {/* Modelo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modelo (Usuario)
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`public class Usuario {

    private String nombre;

    public Usuario(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}`}
          />
        </div>
      </section>

      {/* Vista */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vista (FXML)
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`<?xml version="1.0" encoding="UTF-8"?>

<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>

<VBox spacing="10" alignment="CENTER" xmlns:fx="http://javafx.com/fxml"
      fx:controller="com.ejemplo.Controller">

    <TextField fx:id="inputNombre" promptText="Nombre" />

    <Button text="Guardar" onAction="#guardar" />

    <Label fx:id="labelResultado" />

</VBox>`}
          />
        </div>
      </section>

      {/* Controlador */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Controlador
        </h2>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;

public class Controller {

    @FXML
    private TextField inputNombre;

    @FXML
    private Label labelResultado;

    private Usuario usuario;

    @FXML
    public void guardar() {
        usuario = new Usuario(inputNombre.getText());
        labelResultado.setText("Hola " + usuario.getNombre());
    }
}`}
          />
        </div>
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona todo junto?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Cuando el usuario escribe su nombre y presiona el botón, el
          controlador toma ese dato desde la vista, crea un objeto del modelo
          y luego actualiza la interfaz con el resultado.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de usar MVC
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Mejor organización del código</li>
          <li>Mayor facilidad de mantenimiento</li>
          <li>Separación de responsabilidades</li>
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
            Explica el flujo de MVC en tus palabras.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Modifica el ejemplo para agregar un apellido.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea un nuevo modelo (Producto) e intégralo.
          </div>

        </div>
      </section>

    </div>
  );
}
