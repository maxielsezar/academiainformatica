import CodeBlock from "@/app/components/CodeBlock";

export default function ConstructoresPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Constructores en Java
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Los constructores son métodos especiales que se utilizan para inicializar
          objetos cuando se crean. Permiten asignar valores iniciales a los atributos
          de una clase.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un constructor?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Un constructor es un método que se ejecuta automáticamente al crear un
          objeto. Tiene el mismo nombre que la clase y no tiene tipo de retorno.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Se ejecuta al crear el objeto</li>
          <li>No tiene tipo de retorno (ni void)</li>
          <li>Inicializa los atributos</li>
        </ul>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de constructores
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Constructor vacío:</strong> No recibe parámetros</li>
          <li><strong>Constructor con parámetros:</strong> Recibe valores iniciales</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo práctico
        </h2>

        <p className="max-w-3xl mb-6">
          Veamos una clase con diferentes tipos de constructores.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock
            code={`class Persona {

    String nombre;
    int edad;

    // Constructor vacío
    Persona() {
        nombre = "Sin nombre";
        edad = 0;
    }

    // Constructor con parámetros
    Persona(String n, int e) {
        nombre = n;
        edad = e;
    }

    void mostrarDatos() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Edad: " + edad);
    }
}

public class Main {

    public static void main(String[] args) {

        Persona p1 = new Persona(); // usa constructor vacío
        Persona p2 = new Persona("Juan", 25); // usa constructor con parámetros

        p1.mostrarDatos();
        p2.mostrarDatos();

    }

}`}
          />
        </div>
      </section>

      {/* Sobrecarga */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Sobrecarga de constructores
        </h2>

        <p className="max-w-3xl leading-relaxed">
          La sobrecarga permite tener varios constructores en una misma clase,
          diferenciados por la cantidad o tipo de parámetros.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de usar constructores
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Inicializan objetos correctamente</li>
          <li>Evitan errores por datos sin asignar</li>
          <li>Mejoran la organización del código</li>
          <li>Permiten crear objetos de diferentes formas</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Inicializar siempre los atributos importantes</li>
          <li>No sobrecargar innecesariamente</li>
          <li>Usar nombres claros en los parámetros</li>
          <li>Evitar lógica compleja dentro del constructor</li>
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
            Explica qué es un constructor.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea una clase "Producto" con un constructor con parámetros.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Agrega un constructor vacío a la clase anterior.
          </div>

        </div>
      </section>

    </div>
  );
}