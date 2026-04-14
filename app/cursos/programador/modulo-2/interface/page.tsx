import CodeBlock from "@/app/components/CodeBlock"

export default function InterfacesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Interfaces en Java
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las interfaces son un elemento fundamental de la programación orientada
          a objetos que permiten definir comportamientos que otras clases deben
          implementar. Son clave para lograr flexibilidad y reutilización de código.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una interfaz?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una interfaz es un conjunto de métodos sin implementación (solo la firma)
          que una clase debe implementar. Se utiliza la palabra clave{" "}
          <strong>interface</strong> y las clases que la usan deben implementar
          todos sus métodos.
        </p>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características principales
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No se pueden instanciar</li>
          <li>Los métodos son públicos y abstractos por defecto</li>
          <li>Permiten implementar múltiples comportamientos</li>
          <li>Se utilizan con la palabra clave <strong>implements</strong></li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <CodeBlock code =
{`// Definición de la interfaz
interface Animal {
    void hacerSonido();
}

// Clase que implementa la interfaz
class Perro implements Animal {

    @Override
    public void hacerSonido() {
        System.out.println("El perro ladra");
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Perro miPerro = new Perro();
        miPerro.hacerSonido();
    }
}`}
        />
      </section>

      {/* Diferencia con herencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia con la herencia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Mientras que la herencia permite reutilizar código de una clase base,
          las interfaces permiten definir comportamientos que diferentes clases
          pueden compartir, incluso si no están relacionadas entre sí.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Permiten mayor flexibilidad en el diseño</li>
          <li>Favorecen la reutilización de código</li>
          <li>Facilitan el trabajo con múltiples tipos de objetos</li>
          <li>Ayudan a desacoplar el código</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un ejemplo es un sistema de pagos: una interfaz "Pago" puede definir
          el método pagar(), y diferentes clases como "Tarjeta", "Efectivo" o
          "Transferencia" implementan ese comportamiento de distintas formas.
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
            Explicá con tus palabras qué es una interfaz.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            ¿Qué diferencia hay entre interfaz y herencia?
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá una interfaz en Java y una clase que la implemente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Pensá un ejemplo real donde usarías una interfaz.
          </div>

        </div>
      </section>

    </div>
  );
}