export default function PolimorfismoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Polimorfismo en Programación Orientada a Objetos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El polimorfismo es uno de los pilares de la programación orientada a
          objetos. Permite que un mismo método tenga diferentes comportamientos
          dependiendo del tipo de objeto que lo ejecute.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el polimorfismo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El polimorfismo significa “muchas formas”. En programación, permite que
          una misma referencia (por ejemplo, una clase padre o una interfaz)
          pueda representar distintos tipos de objetos y que cada uno responda
          de forma diferente a un mismo método.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de polimorfismo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Polimorfismo en tiempo de compilación:</strong> se logra mediante
            la sobrecarga de métodos (mismo nombre, distintos parámetros).
          </li>
          <li>
            <strong>Polimorfismo en tiempo de ejecución:</strong> se logra mediante
            la sobrescritura de métodos (herencia).
          </li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <div className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto text-sm">
{`// Clase padre
class Animal {
    void hacerSonido() {
        System.out.println("El animal hace un sonido");
    }
}

// Clases hijas
class Perro extends Animal {
    @Override
    void hacerSonido() {
        System.out.println("El perro ladra");
    }
}

class Gato extends Animal {
    @Override
    void hacerSonido() {
        System.out.println("El gato maulla");
    }
}

// Uso del polimorfismo
public class Main {
    public static void main(String[] args) {

        Animal animal1 = new Perro();
        Animal animal2 = new Gato();

        animal1.hacerSonido();
        animal2.hacerSonido();
    }
}`}
        </div>
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué sucede en el ejemplo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Aunque las variables son del tipo <strong>Animal</strong>, cada objeto
          ejecuta su propia versión del método <code>hacerSonido()</code>. Esto
          demuestra cómo el mismo método puede comportarse de distintas formas.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas del polimorfismo
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Permite escribir código más flexible</li>
          <li>Reduce la duplicación de código</li>
          <li>Facilita la extensión del programa</li>
          <li>Mejora la organización del software</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En un sistema de pagos, diferentes métodos como tarjeta, efectivo o
          transferencia pueden compartir una misma operación <code>pagar()</code>,
          pero cada uno la ejecuta de forma distinta.
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
            Explicá con tus palabras qué es el polimorfismo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá en el ejemplo dónde se aplica el polimorfismo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá dos clases que sobrescriban el mismo método.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Pensá un ejemplo de la vida real donde se aplique polimorfismo.
          </div>

        </div>
      </section>

    </div>
  );
}