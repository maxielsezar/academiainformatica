import CodeBlock from "@/app/components/CodeBlock";

export default function ManejoErroresJavaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Manejo de Errores en Java y JavaFX
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El manejo de errores permite evitar que una aplicación se cierre
          inesperadamente cuando ocurre un problema. En Java y JavaFX es
          fundamental controlar errores para mejorar la estabilidad y la
          experiencia del usuario.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un error?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un error ocurre cuando el programa intenta ejecutar una operación
          inválida, como dividir por cero, abrir un archivo inexistente o
          acceder a datos incorrectos.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de errores
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Errores de compilación:</strong> ocurren antes de ejecutar el programa.
          </li>

          <li>
            <strong>Errores lógicos:</strong> el programa funciona, pero da resultados incorrectos.
          </li>

          <li>
            <strong>Excepciones:</strong> errores que ocurren durante la ejecución.
          </li>
        </ul>
      </section>

      {/* Try catch */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de try y catch
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Java utiliza bloques <code>try</code> y <code>catch</code> para
          capturar errores y evitar que el programa se cierre.
        </p>

        <CodeBlock
          code={`try {

    int resultado = 10 / 0;

} catch(Exception e) {

    System.out.println(
        "Ocurrió un error"
    );
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo funciona?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>El código peligroso se coloca dentro de try</li>
          <li>Si ocurre un error, Java entra en catch</li>
          <li>El programa continúa ejecutándose</li>
        </ul>
      </section>

      {/* Exception */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Mostrar información del error
        </h2>

        <CodeBlock
          code={`try {

    int numero = Integer.parseInt("abc");

} catch(Exception e) {

    System.out.println(
        e.getMessage()
    );
}`}
        />
      </section>

      {/* Finally */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso de finally
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El bloque <code>finally</code> siempre se ejecuta, incluso si ocurre
          un error.
        </p>

        <CodeBlock
          code={`try {

    System.out.println("Inicio");

} catch(Exception e) {

    System.out.println("Error");

} finally {

    System.out.println(
        "Finalizando proceso"
    );
}`}
        />
      </section>

      {/* JavaFX */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Manejo de errores en JavaFX
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En JavaFX es recomendable mostrar errores mediante Alert para informar
          correctamente al usuario.
        </p>

        <CodeBlock
          code={`try {

    Media media = new Media(
        archivo.toURI().toString()
    );

} catch(Exception e) {

    Alert alert = new Alert(
        Alert.AlertType.ERROR
    );

    alert.setTitle("Error");
    alert.setHeaderText(null);

    alert.setContentText(
        "No se pudo cargar la canción"
    );

    alert.showAndWait();
}`}
        />
      </section>

      {/* Validaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Validar datos antes de usarlos
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Muchas veces se pueden evitar errores validando la información antes
          de procesarla.
        </p>

        <CodeBlock
          code={`if(textField.getText().isEmpty()) {

    System.out.println(
        "Campo vacío"
    );

    return;
}`}
        />
      </section>

      {/* NumberFormat */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Error común: NumberFormatException
        </h2>

        <CodeBlock
          code={`try {

    int numero = Integer.parseInt(
        txtNumero.getText()
    );

} catch(NumberFormatException e) {

    System.out.println(
        "Ingrese un número válido"
    );
}`}
        />
      </section>

      {/* Null */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Error común: NullPointerException
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Ocurre cuando se intenta usar un objeto que vale null.
        </p>

        <CodeBlock
          code={`if(cancion != null) {

    cancion.reproducir();
}`}
        />
      </section>

      {/* Archivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Manejo de errores con archivos
        </h2>

        <CodeBlock
          code={`try {

    File file = new File(
        "musica.mp3"
    );

    Scanner sc = new Scanner(file);

} catch(FileNotFoundException e) {

    System.out.println(
        "Archivo no encontrado"
    );
}`}
        />
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No dejar bloques catch vacíos</li>
          <li>Mostrar mensajes claros al usuario</li>
          <li>Validar datos antes de procesarlos</li>
          <li>Separar lógica y manejo de errores</li>
          <li>Controlar errores de archivos y entradas</li>
          <li>Evitar que la aplicación se cierre inesperadamente</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo aplicado al reproductor de música
        </h2>

        <CodeBlock
          code={`public void reproducir() {

    try {

        File file = new File(
            "musica/cancion.mp3"
        );

        Media media = new Media(
            file.toURI().toString()
        );

        MediaPlayer player =
            new MediaPlayer(media);

        player.play();

    } catch(Exception e) {

        Alert alert = new Alert(
            Alert.AlertType.ERROR
        );

        alert.setTitle("Error");
        alert.setHeaderText(null);

        alert.setContentText(
            "No se pudo reproducir la canción"
        );

        alert.showAndWait();
    }
}`}
        />
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Crear un ejemplo usando try y catch.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Mostrar errores usando Alert en JavaFX.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Validar campos numéricos antes de convertirlos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Manejar errores al cargar canciones MP3.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>

            Crear mensajes de error claros y amigables.
          </div>

        </div>
      </section>

    </div>
  );
}