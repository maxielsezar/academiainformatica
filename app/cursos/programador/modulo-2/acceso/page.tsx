import CodeBlock from "@/app/components/CodeBlock";

export default function NivelesAccesoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Niveles de Acceso en Java
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los niveles de acceso permiten controlar qué partes del programa pueden
          utilizar ciertos atributos, métodos o clases. Son fundamentales para
          proteger la información y aplicar correctamente el encapsulamiento.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los modificadores de acceso?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En Java, los modificadores de acceso definen la visibilidad de los
          elementos de una clase. Es decir, determinan desde dónde se puede
          acceder a ellos dentro del programa.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de niveles de acceso
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">public</h3>
            Se puede acceder desde cualquier parte del programa.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">private</h3>
            Solo se puede acceder desde la misma clase.
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">protected</h3>
            Se puede acceder desde la misma clase, el mismo paquete y
            desde clases hijas (herencia).
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold mb-2">default (sin modificador)</h3>
            Solo se puede acceder desde el mismo paquete.
          </div>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <CodeBlock code={`public class Ejemplo {

    public String nombrePublico = "Juan";
    private int edadPrivada = 25;
    protected String ciudadProtegida = "Buenos Aires";
    String paisDefault = "Argentina";

    public void mostrarDatos() {
        System.out.println(nombrePublico);
        System.out.println(edadPrivada);
        System.out.println(ciudadProtegida);
        System.out.println(paisDefault);
    }
}`}/>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Utilizar correctamente los niveles de acceso permite proteger la
          información, evitar errores y mantener un código más organizado y
          seguro. Es una práctica esencial en el desarrollo de software.
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
            Explicá la diferencia entre public y private.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            ¿En qué situaciones usarías protected?
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá una clase en Java utilizando los cuatro niveles de acceso.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Identificá en el ejemplo qué variables pueden ser accedidas desde otra clase.
          </div>

        </div>
      </section>

    </div>
  );
}