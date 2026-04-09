import CodeBlock from "@/app/components/CodeBlock"

export default function TiempoVidaObjetosPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Tiempo de Vida de los Objetos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El tiempo de vida de un objeto se refiere al período durante el cual
          un objeto existe en memoria desde que se crea hasta que es eliminado.
          Comprender este concepto es fundamental para gestionar correctamente
          los recursos en un programa.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el tiempo de vida de un objeto?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un objeto comienza su vida cuando se instancia (se crea con la palabra
          clave <strong>new</strong>) y termina cuando ya no es accesible desde
          el programa, momento en el cual el recolector de basura (Garbage Collector)
          puede eliminarlo de la memoria.
        </p>
      </section>

      {/* Etapas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etapas del ciclo de vida
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Creación:</strong> se instancia el objeto usando <code>new</code>.</li>
          <li><strong>Uso:</strong> el objeto es utilizado por el programa.</li>
          <li><strong>Sin referencia:</strong> el objeto deja de ser accesible.</li>
          <li><strong>Recolección:</strong> el Garbage Collector libera la memoria.</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <CodeBlock code=
{`public class Ejemplo {

    public static void main(String[] args) {

        // Creación del objeto
        Persona p1 = new Persona("Juan");

        // Uso del objeto
        System.out.println(p1.getNombre());

        // El objeto queda sin referencia
        p1 = null;

        // En algún momento, el Garbage Collector eliminará el objeto
    }
}

class Persona {
    private String nombre;

    public Persona(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }
}`}
        />
      </section>

      {/* Garbage Collector */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El Garbage Collector
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Java gestiona automáticamente la memoria mediante el Garbage Collector,
          que se encarga de eliminar los objetos que ya no se utilizan. Esto evita
          problemas como fugas de memoria y facilita el desarrollo de aplicaciones.
        </p>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Comprender el tiempo de vida de los objetos permite optimizar el uso de
          memoria, mejorar el rendimiento de las aplicaciones y evitar errores
          relacionados con el uso de referencias nulas.
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
            Explicá con tus palabras qué significa el tiempo de vida de un objeto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá en el ejemplo cuándo se crea y cuándo deja de usarse el objeto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Modificá el código agregando otro objeto y observá su comportamiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Investigá qué es el Garbage Collector y cómo funciona.
          </div>

        </div>
      </section>

    </div>
  );
}