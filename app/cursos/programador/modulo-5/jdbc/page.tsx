import CodeBlock from "@/app/components/CodeBlock";

export default function ConexionJavaSQLitePage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Conectar Java con SQLite
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una vez creada la base de datos SQLite, el siguiente paso es conectar
          nuestra aplicación Java para poder almacenar y recuperar información.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En esta unidad aprenderemos a utilizar JDBC (Java Database
          Connectivity) para establecer una conexión entre Java y SQLite.
        </p>
      </section>

      {/* JDBC */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es JDBC?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          JDBC (Java Database Connectivity) es una API de Java que permite
          conectarse a diferentes motores de bases de datos mediante drivers
          específicos.
        </p>

        <div className="border rounded-xl p-6 max-w-3xl mt-6 bg-gray-50">
          <p>
            Java → JDBC → SQLite
          </p>
        </div>

        <p className="leading-relaxed max-w-3xl mt-4">
          JDBC actúa como intermediario entre nuestra aplicación y la base de
          datos.
        </p>
      </section>

      {/* Driver */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 1: Agregar el Driver SQLite
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Para que Java pueda comunicarse con SQLite debemos agregar el driver
          JDBC correspondiente al proyecto.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Si utilizamos Maven, agregamos la siguiente dependencia:
        </p>

        <CodeBlock
          code={`<dependency>
    <groupId>org.xerial</groupId>
    <artifactId>sqlite-jdbc</artifactId>
    <version>3.49.1.0</version>
</dependency>`}
        />
      </section>

      {/* IntelliJ */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar la Dependencia en IntelliJ
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Abrir el archivo pom.xml.</li>
          <li>Agregar la dependencia sqlite-jdbc.</li>
          <li>Guardar el archivo.</li>
          <li>Esperar que Maven descargue las librerías.</li>
          <li>Verificar que aparezcan en External Libraries.</li>
        </ol>
      </section>

      {/* Clase Conexion */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 2: Crear la Clase de Conexión
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es una buena práctica centralizar toda la lógica de conexión en una
          única clase.
        </p>

        <CodeBlock
          code={`import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

    private static final String URL =
            "jdbc:sqlite:ventas.db";

    public static Connection conectar() {

        try {
            return DriverManager.getConnection(URL);
        } catch (SQLException e) {
            System.out.println("Error al conectar");
            e.printStackTrace();
            return null;
        }
    }
}`}
        />
      </section>

      {/* Explicación URL */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué significa la URL?
        </h2>

        <CodeBlock
          code={`jdbc:sqlite:ventas.db`}
        />

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-6">
          <li>jdbc → indica que utilizaremos JDBC.</li>
          <li>sqlite → motor de base de datos.</li>
          <li>ventas.db → archivo de la base de datos.</li>
        </ul>

        <p className="leading-relaxed max-w-3xl mt-4">
          Si el archivo no existe, SQLite lo creará automáticamente.
        </p>
      </section>

      {/* Probar conexión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 3: Probar la Conexión
        </h2>

        <CodeBlock
          code={`import java.sql.Connection;

public class Main {

    public static void main(String[] args) {

        Connection conexion =
                Conexion.conectar();

        if(conexion != null) {
            System.out.println("Conexión exitosa");
        }
    }
}`}
        />
      </section>

      {/* Crear tabla */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una Tabla desde Java
        </h2>

        <p className="leading-relaxed max-w-3xl">
          También podemos ejecutar sentencias SQL directamente desde Java.
        </p>

        <CodeBlock
          code={`import java.sql.Connection;
import java.sql.Statement;

public class CrearTabla {

    public static void main(String[] args) {

        String sql = """
            CREATE TABLE IF NOT EXISTS productos(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                precio REAL,
                stock INTEGER
            )
        """;

        try(
            Connection con = Conexion.conectar();
            Statement stmt = con.createStatement()
        ){

            stmt.execute(sql);
            System.out.println("Tabla creada");

        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}`}
        />
      </section>

      {/* Insert */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Insertar Datos
        </h2>

        <CodeBlock
          code={`String sql =
    "INSERT INTO productos(nombre,precio,stock) " +
    "VALUES('Mouse',15000,10)";`}
        />

        <p className="leading-relaxed max-w-3xl mt-4">
          Esta sentencia agrega un nuevo producto a la base de datos.
        </p>
      </section>

      {/* Select */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consultar Datos
        </h2>

        <CodeBlock
          code={`import java.sql.*;

Connection con = Conexion.conectar();

Statement stmt =
        con.createStatement();

ResultSet rs =
        stmt.executeQuery(
            "SELECT * FROM productos"
        );

while(rs.next()) {

    System.out.println(
        rs.getInt("id") + " - " +
        rs.getString("nombre")
    );
}`}
        />
      </section>

      {/* Arquitectura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización Recomendada del Proyecto
        </h2>

        <pre className="border rounded-xl p-6 font-mono text-sm">
{`src
│
├── model
│   ├── Producto.java
│   ├── Cliente.java
│
├── dao
│   ├── ProductoDAO.java
│   ├── ClienteDAO.java
│
├── database
│   └── Conexion.java
│
├── controller
│
└── view`}
        </pre>

        <p className="leading-relaxed max-w-3xl mt-6">
          Más adelante utilizaremos la capa DAO para separar la lógica de acceso
          a datos del resto de la aplicación.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear una única clase de conexión.</li>
          <li>Cerrar siempre las conexiones.</li>
          <li>Utilizar try-with-resources.</li>
          <li>No escribir SQL dentro de los Controllers.</li>
          <li>Separar el acceso a datos mediante DAO.</li>
          <li>Capturar excepciones SQL adecuadamente.</li>
        </ul>
      </section>

      {/* Relación con el sistema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación al Sistema de Ventas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En las próximas unidades crearemos las clases DAO para que el sistema
          pueda guardar, modificar, eliminar y consultar clientes, productos y
          ventas directamente desde SQLite.
        </p>
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
            Agregar la dependencia sqlite-jdbc al proyecto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>
            Crear la clase Conexion.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>
            Conectarse a una base de datos llamada ventas.db.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>
            Crear la tabla productos desde Java.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>
            Insertar y consultar al menos tres productos utilizando JDBC.
          </div>

        </div>
      </section>

    </div>
  );
}