import CodeBlock from "@/app/components/CodeBlock";

export default function ModeloObjetosPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Modelo Computacional de Objetos
        </h1>

        <p className="max-w-3xl leading-relaxed">
          El modelo computacional de objetos es la base de la programación
          orientada a objetos. Permite representar elementos del mundo real
          como entidades dentro de un programa, facilitando la organización,
          reutilización y mantenimiento del código.
        </p>
      </section>

      {/* Concepto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un objeto?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Un objeto es una entidad que tiene estado y comportamiento.
          El estado está definido por sus atributos y el comportamiento
          por sus métodos.
        </p>
      </section>

      {/* Componentes */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Componentes de un objeto
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Identidad:</strong> cada objeto es único dentro del sistema.
          </li>
          <li>
            <strong>Estado:</strong> conjunto de valores que posee el objeto (atributos).
          </li>
          <li>
            <strong>Comportamiento:</strong> acciones que puede realizar (métodos).
          </li>
        </ul>
      </section>

      {/* Clases */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una clase?
        </h2>

        <p className="max-w-3xl mb-6">
          Una clase es una plantilla o modelo a partir del cual se crean objetos.
          Define los atributos y métodos que tendrán los objetos.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code =
{`class Persona {

    String nombre;
    int edad;

    void saludar() {
        System.out.println("Hola, soy " + nombre);
    }

}`}
          />
        </div>
      </section>

      {/* Objeto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Creación de objetos
        </h2>

        <p className="max-w-3xl mb-6">
          Un objeto es una instancia de una clase. Se crea utilizando la palabra clave <strong>new</strong>.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code =
{`public class Main {

    public static void main(String[] args) {

        Persona persona1 = new Persona();
        persona1.nombre = "Juan";
        persona1.edad = 25;

        persona1.saludar();

    }

}`}
          />
        </div>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo del mundo real
        </h2>

        <p className="max-w-3xl leading-relaxed">
          En la vida real, una persona tiene características (nombre, edad)
          y acciones (hablar, caminar). En programación, representamos esto
          mediante clases y objetos, lo que permite simular comportamientos
          reales dentro de un sistema.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas del modelo de objetos
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Mejor organización del código</li>
          <li>Reutilización de clases</li>
          <li>Facilidad de mantenimiento</li>
          <li>Mayor claridad en programas complejos</li>
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
            Explica con tus palabras qué es un objeto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identifica los atributos y métodos de un objeto "Auto".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea una clase llamada "Producto" con al menos 2 atributos y 1 método.
          </div>

        </div>
      </section>

    </div>
  );
}