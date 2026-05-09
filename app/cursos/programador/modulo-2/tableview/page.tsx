import CodeBlock from "@/app/components/CodeBlock";

export default function TableViewMusicaJavaFXPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          TableView en JavaFX aplicado a un Reproductor de Música
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El componente <code>TableView</code> permite mostrar información en forma
          de tabla. En un reproductor de música puede utilizarse para visualizar
          canciones, artistas, duración, álbumes y más.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un TableView?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es un componente visual de JavaFX que organiza datos en filas y columnas.
          Cada fila representa un objeto y cada columna muestra una propiedad.
        </p>
      </section>

      {/* Modelo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear la clase Canción
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Primero necesitamos una clase modelo para representar cada canción.
        </p>

        <CodeBlock
          code={`public class Cancion {

    private String nombre;
    private String artista;
    private String duracion;

    public Cancion(String nombre,
                   String artista,
                   String duracion) {

        this.nombre = nombre;
        this.artista = artista;
        this.duracion = duracion;
    }

    public String getNombre() {
        return nombre;
    }

    public String getArtista() {
        return artista;
    }

    public String getDuracion() {
        return duracion;
    }
}`}
        />
      </section>

      {/* TableView */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear el TableView
        </h2>

        <CodeBlock
          code={`@FXML
private TableView<Cancion> tablaCanciones;

@FXML
private TableColumn<Cancion, String> colNombre;

@FXML
private TableColumn<Cancion, String> colArtista;

@FXML
private TableColumn<Cancion, String> colDuracion;`}
        />
      </section>

      {/* Vincular columnas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Vincular las columnas con la clase
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cada columna debe indicar qué propiedad de la clase mostrará.
        </p>

        <CodeBlock
          code={`colNombre.setCellValueFactory(
    new PropertyValueFactory<>("nombre")
);

colArtista.setCellValueFactory(
    new PropertyValueFactory<>("artista")
);

colDuracion.setCellValueFactory(
    new PropertyValueFactory<>("duracion")
);`}
        />
      </section>

      {/* Lista observable */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear la lista de canciones
        </h2>

        <CodeBlock
          code={`ObservableList<Cancion> canciones =
    FXCollections.observableArrayList();

canciones.add(
    new Cancion(
        "Imagine",
        "John Lennon",
        "03:15"
    )
);

canciones.add(
    new Cancion(
        "Bohemian Rhapsody",
        "Queen",
        "05:40"
    )
);

tablaCanciones.setItems(canciones);`}
        />
      </section>

      {/* FXML */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en FXML
        </h2>

        <CodeBlock
          code={`<TableView fx:id="tablaCanciones">

    <columns>

        <TableColumn
            fx:id="colNombre"
            text="Nombre"
        />

        <TableColumn
            fx:id="colArtista"
            text="Artista"
        />

        <TableColumn
            fx:id="colDuracion"
            text="Duración"
        />

    </columns>

</TableView>`}
        />
      </section>

      {/* Seleccionar canción */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Obtener la canción seleccionada
        </h2>

        <CodeBlock
          code={`Cancion seleccionada =
    tablaCanciones
        .getSelectionModel()
        .getSelectedItem();

if(seleccionada != null) {

    System.out.println(
        seleccionada.getNombre()
    );
}`}
        />
      </section>

      {/* Reproducir desde tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reproducir canción desde la tabla
        </h2>

        <CodeBlock
          code={`tablaCanciones.setOnMouseClicked(event -> {

    Cancion seleccionada =
        tablaCanciones
            .getSelectionModel()
            .getSelectedItem();

    if(seleccionada != null) {

        System.out.println(
            "Reproduciendo: " +
            seleccionada.getNombre()
        );
    }
});`}
        />
      </section>

      {/* Agregar canciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar nuevas canciones
        </h2>

        <CodeBlock
          code={`canciones.add(
    new Cancion(
        "Numb",
        "Linkin Park",
        "03:20"
    )
);`}
        />
      </section>

      {/* Eliminar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Eliminar canciones
        </h2>

        <CodeBlock
          code={`Cancion seleccionada =
    tablaCanciones
        .getSelectionModel()
        .getSelectedItem();

canciones.remove(seleccionada);`}
        />
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de usar TableView
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Permite organizar información fácilmente</li>
          <li>Hace más profesional la interfaz</li>
          <li>Facilita búsquedas y selección</li>
          <li>Se integra muy bien con listas dinámicas</li>
          <li>Permite ordenar columnas automáticamente</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Separar la lógica de la vista</li>
          <li>Usar clases modelo correctamente</li>
          <li>Validar datos antes de agregarlos</li>
          <li>Actualizar la tabla dinámicamente</li>
          <li>No mezclar lógica de reproducción con la interfaz</li>
        </ul>
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

            Crear una clase Cancion.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear un TableView con nombre, artista y duración.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Permitir agregar canciones dinámicamente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Reproducir canciones seleccionadas desde la tabla.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>

            Agregar un botón para eliminar canciones.
          </div>

        </div>
      </section>

    </div>
  );
}