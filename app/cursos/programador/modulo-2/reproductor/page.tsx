import CodeBlock from "@/app/components/CodeBlock";

export default function ReproductorMusicaJavaFXPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Crear una Aplicación de Música en JavaFX
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este proyecto aprenderás a crear un reproductor de música utilizando
          JavaFX. La aplicación permitirá cargar archivos MP3, reproducir canciones,
          pausar, adelantar, cambiar canciones y crear playlists.
        </p>
      </section>

      {/* Objetivos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivos del proyecto
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Cargar archivos MP3</li>
          <li>Reproducir y pausar canciones</li>
          <li>Avanzar o retroceder canciones</li>
          <li>Mostrar progreso de reproducción</li>
          <li>Crear playlists</li>
          <li>Mostrar una lista visual de canciones</li>
          <li>Agregar nuevas canciones dinámicamente</li>
        </ul>
      </section>

      {/* Librerías */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Librerías necesarias
        </h2>

        <CodeBlock code=
{`import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.util.Duration;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.control.ListView;`}
        />
      </section>

      {/* Cargar MP3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo cargar un archivo MP3?
        </h2>

        <CodeBlock code=
{`File file = new File("musica/cancion.mp3");

Media media = new Media(file.toURI().toString());

MediaPlayer player = new MediaPlayer(media);`}
        />
      </section>

      {/* Reproducir */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reproducir una canción
        </h2>

        <CodeBlock code=
{`player.play();`}
        />
      </section>
        {/* Pausar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pausar una canción
        </h2>

        <CodeBlock code=
{`player.pause();`}
        />
      </section>

      {/* Stop */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Detener reproducción
        </h2>

        <CodeBlock code=
{`player.stop();`}
        />
      </section>

      {/* Adelantar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Adelantar una canción
        </h2>

        <CodeBlock code=
{`player.seek(Duration.seconds(30));`}
        />
      </section>


      {/* Barra progreso */}
        {/* ProgressBar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar una barra de progreso automática
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La barra de progreso permite mostrar cuánto de la canción ya fue
          reproducido. Para esto se utiliza un Slider o un ProgressBar.
        </p>
      </section>

      {/* Slider */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Usando un Slider como progreso
        </h2>

        <CodeBlock code=
{`@FXML
private Slider sliderTiempo;`}
        />
      </section>

      {/* Actualización automática */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actualizar automáticamente el progreso
        </h2>

        <CodeBlock code=
{`player.currentTimeProperty().addListener((obs, oldTime, newTime) -> {

    Duration total = player.getTotalDuration();

    if(total != null) {

        double progreso =
            newTime.toSeconds() / total.toSeconds();

        sliderTiempo.setValue(progreso * 100);
    }
});`}
        />
      </section>

      {/* Configuración Slider */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Configuración del Slider
        </h2>

        <CodeBlock code=
{`sliderTiempo.setMin(0);
sliderTiempo.setMax(100);`}
        />
      </section>

      {/* Mover canción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Permitir mover la canción desde el Slider
        </h2>

        <CodeBlock code=
{`sliderTiempo.setOnMouseReleased(event -> {

    double porcentaje = sliderTiempo.getValue() / 100;

    Duration total = player.getTotalDuration();

    player.seek(total.multiply(porcentaje));
});`}
        />
      </section>

      {/* ProgressBar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Alternativa usando ProgressBar
        </h2>

        <CodeBlock code=
{`@FXML
private ProgressBar progressBar;

player.currentTimeProperty().addListener((obs, oldTime, newTime) -> {

    Duration total = player.getTotalDuration();

    if(total != null) {

        double progreso =
            newTime.toSeconds() / total.toSeconds();

        progressBar.setProgress(progreso);
    }
});`}
        />
      </section>

      {/* ListView */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una lista visual de canciones
        </h2>

        <p className="leading-relaxed max-w-3xl">
          JavaFX utiliza el componente <code>ListView</code> para mostrar listas.
          En este caso se utilizará para visualizar las canciones de la playlist.
        </p>

        <CodeBlock code=
{`@FXML
private ListView<String> listaCanciones;`}
        />
      </section>

      {/* ObservableList */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear la lista de datos
        </h2>

        <CodeBlock code=
{`ObservableList<String> canciones =
    FXCollections.observableArrayList();

listaCanciones.setItems(canciones);`}
        />
      </section>

      {/* Agregar canciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar canciones a la lista
        </h2>

        <CodeBlock code=
{`canciones.add("cancion1.mp3");
canciones.add("cancion2.mp3");
canciones.add("cancion3.mp3");`}
        />
      </section>

      {/* FileChooser */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar nuevas canciones con FileChooser
        </h2>

        <CodeBlock code=
{`FileChooser fileChooser = new FileChooser();

fileChooser.getExtensionFilters().add(
    new FileChooser.ExtensionFilter("MP3 Files", "*.mp3")
);

File archivo = fileChooser.showOpenDialog(stage);

if(archivo != null) {

    canciones.add(archivo.getName());

    playlist.add(archivo);
}`}
        />
      </section>

      {/* Reproducir desde lista */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reproducir canciones desde la lista
        </h2>

        <CodeBlock code=
{`listaCanciones.setOnMouseClicked(event -> {

    int indice =
        listaCanciones.getSelectionModel().getSelectedIndex();

    if(indice >= 0) {

        Media media = new Media(
            playlist.get(indice).toURI().toString()
        );

        MediaPlayer player =
            new MediaPlayer(media);

        player.play();
    }
});`}
        />
      </section>

      {/* Playlist */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una playlist
        </h2>

        <CodeBlock code=
{`ArrayList<File> playlist = new ArrayList<>();

playlist.add(new File("musica/cancion1.mp3"));
playlist.add(new File("musica/cancion2.mp3"));`}
        />
      </section>

      {/* Siguiente canción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cambiar de canción
        </h2>

        <CodeBlock code=
{`indiceActual++;

if(indiceActual < playlist.size()) {

    Media media = new Media(
        playlist.get(indiceActual).toURI().toString()
    );

    MediaPlayer player =
        new MediaPlayer(media);

    player.play();
}`}
        />
      </section>

      {/* Auto siguiente */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reproducción automática de la siguiente canción
        </h2>

        <CodeBlock code=
{`player.setOnEndOfMedia(() -> {

    indiceActual++;

    if(indiceActual < playlist.size()) {

        Media mediaNueva = new Media(
            playlist.get(indiceActual).toURI().toString()
        );

        MediaPlayer nuevoPlayer =
            new MediaPlayer(mediaNueva);

        nuevoPlayer.play();
    }
});`}
        />
      </section>

      {/* Diseño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diseño recomendado
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Botón Play</li>
          <li>Botón Pause</li>
          <li>Botón Stop</li>
          <li>Botón Siguiente</li>
          <li>Botón Anterior</li>
          <li>Slider de progreso</li>
          <li>Slider de volumen</li>
          <li>ListView de canciones</li>
          <li>Botón Agregar canción</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Separar vista y lógica</li>
          <li>Usar MVC</li>
          <li>Controlar errores de carga</li>
          <li>Evitar múltiples reproducciones simultáneas</li>
          <li>Actualizar correctamente el progreso</li>
          <li>Mostrar claramente la canción actual</li>
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
            Crear un reproductor que cargue canciones MP3.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Agregar una barra de progreso automática.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crear una ListView para mostrar canciones.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Permitir agregar nuevas canciones dinámicamente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 5</p>
            Reproducir canciones seleccionadas desde la lista.
          </div>

        </div>
      </section>

    </div>
  );
}