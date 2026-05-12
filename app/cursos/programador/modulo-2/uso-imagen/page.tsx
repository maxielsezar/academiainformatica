import CodeBlock from "@/app/components/CodeBlock";

export default function IconosEInitializeJavaFXPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Íconos e Initialize en JavaFX
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En JavaFX es muy común utilizar íconos para mejorar la interfaz visual
          y utilizar el método <code>initialize()</code> para configurar componentes
          automáticamente al cargar una ventana.
        </p>
      </section>

      {/* Íconos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué usar íconos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los íconos ayudan a crear interfaces más profesionales, intuitivas y
          fáciles de usar. Son ideales para botones como Play, Pause, Guardar,
          Eliminar o Configuración.
        </p>
      </section>

      {/* Sitios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sitios recomendados para descargar íconos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Font Awesome</li>
          <li>Icons8</li>
          <li>Flaticon</li>
          <li>Material Icons</li>
          <li>Heroicons</li>
        </ul>
      </section>

      {/* Formatos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Formatos recomendados
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>PNG → más simple y compatible</li>
          <li>SVG → mejor calidad (requiere librerías extra)</li>
          <li>ICO → usado para iconos de ventana</li>
        </ul>
      </section>

      {/* Carpeta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Dónde guardar los íconos?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Lo recomendable es crear una carpeta llamada
          <code> resources/icons </code>.
        </p>

        <CodeBlock
          code={`src
 └── main
      └── resources
           └── icons
                ├── play.png
                ├── pause.png
                └── next.png`}
        />
      </section>

      {/* ImageView */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cargar un ícono en JavaFX
        </h2>

        <CodeBlock
          code={`Image imagen = new Image(
    getClass()
        .getResourceAsStream(
            "/icons/play.png"
        )
);

ImageView icono = new ImageView(imagen);`}
        />
      </section>

      {/* Tamaño */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Modificar tamaño del ícono
        </h2>

        <CodeBlock
          code={`icono.setFitWidth(30);
icono.setFitHeight(30);`}
        />
      </section>

      {/* Botón */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar íconos a botones
        </h2>

        <CodeBlock
          code={`btnPlay.setGraphic(icono);`}
        />
      </section>

      {/* Ícono ventana */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cambiar el ícono de la ventana
        </h2>

        <CodeBlock
          code={`stage.getIcons().add(
    new Image(
        getClass()
            .getResourceAsStream(
                "/icons/logo.png"
            )
    )
);`}
        />
      </section>

      {/* Initialize */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es initialize()?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El método <code>initialize()</code> se ejecuta automáticamente cuando
          se carga el archivo FXML. Se utiliza para preparar componentes,
          cargar datos y configurar eventos.
        </p>
      </section>

      {/* Implements */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Implementar Initializable
        </h2>

        <CodeBlock
          code={`public class ReproductorController
    implements Initializable {

    @Override
    public void initialize(
        URL location,
        ResourceBundle resources
    ) {

        System.out.println(
            "Ventana cargada"
        );
    }
}`}
        />
      </section>

      {/* Uso initialize */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué se suele hacer en initialize()?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Cargar datos en tablas</li>
          <li>Configurar botones</li>
          <li>Cargar playlists</li>
          <li>Inicializar sliders</li>
          <li>Configurar íconos</li>
          <li>Agregar listeners</li>
        </ul>
      </section>

      {/* Ejemplo reproductor */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo aplicado al reproductor de música
        </h2>

        <CodeBlock
          code={`@FXML
private Button btnPlay;

@Override
public void initialize(
    URL location,
    ResourceBundle resources
) {

    Image imagen = new Image(
        getClass()
            .getResourceAsStream(
                "/icons/play.png"
            )
    );

    ImageView icono =
        new ImageView(imagen);

    icono.setFitWidth(25);
    icono.setFitHeight(25);

    btnPlay.setGraphic(icono);
}`}
        />
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar initialize() solo para inicialización</li>
          <li>No colocar lógica pesada dentro de initialize()</li>
          <li>Guardar recursos en carpetas organizadas</li>
          <li>Usar tamaños consistentes para íconos</li>
          <li>Evitar código duplicado</li>
        </ul>
      </section>

      {/* Errores comunes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Errores comunes
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No colocar correctamente la ruta del ícono</li>
          <li>No usar @FXML en componentes</li>
          <li>Intentar usar componentes antes de initialize()</li>
          <li>No importar javafx.scene.image.Image</li>
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

            Descargar íconos para Play, Pause y Stop.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Agregar íconos a botones en JavaFX.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Cambiar el ícono de la ventana principal.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Configurar componentes usando initialize().
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>

            Crear una interfaz de reproductor visualmente atractiva.
          </div>

        </div>
      </section>

    </div>
  );
}