import CodeBlock from "@/app/components/CodeBlock";

export default function AlertsJavaFXPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Uso de Alerts en JavaFX
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los Alerts en JavaFX se utilizan para mostrar mensajes al usuario,
          como información, advertencias, errores o confirmaciones. Son una
          herramienta fundamental para mejorar la interacción en una aplicación.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un Alert?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un Alert es una ventana emergente que permite comunicar información
          importante al usuario o solicitar una acción, como aceptar o cancelar.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de Alert
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>INFORMATION:</strong> muestra información general</li>
          <li><strong>WARNING:</strong> muestra advertencias</li>
          <li><strong>ERROR:</strong> muestra errores</li>
          <li><strong>CONFIRMATION:</strong> solicita confirmación del usuario</li>
        </ul>
      </section>

      {/* Ejemplo básico */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo básico
        </h2>

        <CodeBlock code=
{`import javafx.scene.control.Alert;

Alert alert = new Alert(Alert.AlertType.INFORMATION);
alert.setTitle("Información");
alert.setHeaderText("Operación exitosa");
alert.setContentText("El proceso se realizó correctamente.");

alert.showAndWait();`}
        />
      </section>

      {/* Confirmación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alert de confirmación
        </h2>

        <CodeBlock code=
{`import javafx.scene.control.Alert;
import javafx.scene.control.ButtonType;
import java.util.Optional;

Alert alert = new Alert(Alert.AlertType.CONFIRMATION);
alert.setTitle("Confirmación");
alert.setHeaderText("¿Desea continuar?");
alert.setContentText("Seleccione una opción");

Optional<ButtonType> result = alert.showAndWait();

if (result.isPresent() && result.get() == ButtonType.OK) {
    System.out.println("El usuario aceptó");
} else {
    System.out.println("El usuario canceló");
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funcionan?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Se crea un objeto Alert indicando el tipo. Luego se configuran el título,
          el encabezado y el contenido. Finalmente, se utiliza el método
          <code> showAndWait() </code> para mostrar la ventana y esperar la respuesta
          del usuario.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de usar Alerts
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Mejoran la comunicación con el usuario</li>
          <li>Permiten validar acciones importantes</li>
          <li>Facilitan el manejo de errores</li>
          <li>Son fáciles de implementar</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una aplicación, se puede usar un Alert para confirmar si el usuario
          desea eliminar un registro o para informar que un formulario fue enviado correctamente.
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
            Crear un Alert de tipo INFORMATION.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crear un Alert de tipo ERROR.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Implementar un Alert de confirmación con botones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Mostrar un mensaje cuando el usuario acepta o cancela.
          </div>

        </div>
      </section>

    </div>
  );
}