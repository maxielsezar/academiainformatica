import CodeBlock from "@/app/components/CodeBlock";

export default function VistaAcuarioJavaFXPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Vista del Acuario con Figuras en JavaFX
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta etapa del trabajo práctico vas a crear una representación visual
          del acuario utilizando figuras de JavaFX. Esto permitirá mostrar peces,
          adornos y el contenedor del acuario de forma gráfica.
        </p>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear una vista gráfica del acuario utilizando figuras de JavaFX.
          Deberás representar:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>El acuario (contenedor)</li>
          <li>Los peces</li>
          <li>Los adornos</li>
        </ul>
      </section>

      {/* Figuras */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Figuras disponibles en JavaFX
        </h2>

        <p className="leading-relaxed max-w-3xl">
          JavaFX proporciona varias clases para dibujar formas dentro de una
          escena:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li><strong>Rectangle:</strong> para el acuario o adornos</li>
          <li><strong>Circle:</strong> para representar peces</li>
          <li><strong>Ellipse:</strong> para peces más realistas</li>
          <li><strong>Line:</strong> para detalles o decoraciones</li>
        </ul>
      </section>

      {/* Ejemplo FXML */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en FXML
        </h2>

        <CodeBlock code=
{`<AnchorPane fx:controller="Controller" xmlns:fx="http://javafx.com/fxml">
    <!-- Acuario -->
    <Rectangle fx:id="acuario" x="50" y="50" width="400" height="250" fill="lightblue" stroke="black"/>

    <!-- Pez -->
    <Circle fx:id="pez1" centerX="100" centerY="100" radius="10" fill="orange"/>

    <!-- Adorno -->
    <Rectangle fx:id="adorno1" x="200" y="200" width="30" height="30" fill="green"/>
</AnchorPane>`}
        />
      </section>

      {/* Controller */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modificar figuras desde el Controller
        </h2>

        <CodeBlock code=
{`import javafx.fxml.FXML;
import javafx.scene.shape.Circle;
import javafx.scene.shape.Rectangle;
import javafx.scene.paint.Color;

public class Controller {

    @FXML
    private Rectangle acuario;

    @FXML
    private Circle pez1;

    @FXML
    private Rectangle adorno1;

    public void initialize() {
        // Cambiar color del acuario
        acuario.setFill(Color.LIGHTBLUE);

        // Mover pez
        pez1.setCenterX(150);
        pez1.setCenterY(120);

        // Cambiar tamaño del adorno
        adorno1.setWidth(40);
        adorno1.setHeight(40);
    }

    public void moverPez() {
        pez1.setCenterX(pez1.getCenterX() + 10);
    }
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las figuras se definen en el archivo FXML con un <code>fx:id</code>.
          Luego, en el controller, se vinculan usando la anotación
          <code> @FXML </code>. Esto permite modificar sus propiedades como
          posición, tamaño o color dinámicamente desde el código Java.
        </p>
      </section>

      {/* Interacción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Interacción básica
        </h2>

        <CodeBlock code=
{`// Ejemplo de movimiento simple
public void moverPezDerecha() {
    pez1.setCenterX(pez1.getCenterX() + 5);
}

// Cambiar color
public void cambiarColor() {
    pez1.setFill(Color.RED);
}`}
        />
      </section>

      {/* Requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos del ejercicio
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear una vista FXML del acuario</li>
          <li>Usar al menos 2 tipos de figuras</li>
          <li>Asignar fx:id a los elementos</li>
          <li>Modificar al menos una figura desde el controller</li>
          <li>Agregar alguna interacción (movimiento o cambio de color)</li>
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
            Crear el acuario usando un Rectangle.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Agregar al menos un pez y un adorno.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Modificar la posición de un pez desde el controller.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Agregar un botón que cambie el color de una figura.
          </div>

        </div>
      </section>

    </div>
  );
}