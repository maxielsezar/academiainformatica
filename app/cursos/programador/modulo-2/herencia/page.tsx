import CodeBlock from "@/app/components/CodeBlock"

export default function HerenciaPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Herencia en Programación Orientada a Objetos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La herencia es un concepto fundamental de la programación orientada a objetos
          que permite crear nuevas clases a partir de otras ya existentes. De esta forma,
          se reutiliza código y se facilita la organización de los programas.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la herencia?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La herencia permite que una clase (llamada clase hija o subclase) herede
          atributos y métodos de otra clase (llamada clase padre o superclase).
          Esto evita duplicar código y permite extender funcionalidades.
        </p>
      </section>

      {/* Conceptos clave */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conceptos importantes
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Clase padre:</strong> clase que proporciona atributos y métodos.</li>
          <li><strong>Clase hija:</strong> clase que hereda de la clase padre.</li>
          <li><strong>Reutilización:</strong> permite usar código existente.</li>
          <li><strong>Extensión:</strong> la clase hija puede agregar nuevas funcionalidades.</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <CodeBlock code=
{`// Clase padre
class Animal {
    String nombre;

    void hacerSonido() {
        System.out.println("El animal hace un sonido");
    }
}

// Clase hija
class Perro extends Animal {

    void ladrar() {
        System.out.println("El perro ladra");
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Perro miPerro = new Perro();

        miPerro.nombre = "Firulais";
        miPerro.hacerSonido(); // método heredado
        miPerro.ladrar();      // método propio
    }
}`}
        />
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de la herencia
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Permite reutilizar código</li>
          <li>Reduce la duplicación</li>
          <li>Facilita el mantenimiento</li>
          <li>Permite organizar mejor el programa</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un ejemplo de herencia es una jerarquía de vehículos: una clase "Vehículo"
          puede tener atributos como velocidad o marca, y clases como "Auto" o "Moto"
          heredan esas características y agregan otras propias.
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
            Explicá con tus palabras qué es la herencia.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá en el ejemplo cuál es la clase padre y la clase hija.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá una clase base y una clase derivada en Java.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Pensá un ejemplo de herencia en la vida real.
          </div>

        </div>
      </section>

    </div>
  );
}