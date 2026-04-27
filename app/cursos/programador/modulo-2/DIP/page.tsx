import CodeBlock from "@/app/components/CodeBlock";

export default function DIPAcuarioPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          DIP - Dependency Inversion Principle aplicado al Acuario
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El principio de inversión de dependencias (DIP) establece que las clases
          de alto nivel no deben depender de clases de bajo nivel, sino de
          abstracciones (interfaces o clases abstractas).
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es DIP?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          DIP busca desacoplar el sistema. En lugar de que una clase dependa
          directamente de otra concreta, ambas deben depender de una interfaz.
        </p>
      </section>

      {/* Ejemplo incorrecto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo incorrecto (NO cumple DIP)
        </h2>

        <CodeBlock code=
{`class ComidaPeces {
    double calcular() {
        return 10;
    }
}

class Acuario {
    ComidaPeces comida = new ComidaPeces();

    double obtenerComida() {
        return comida.calcular();
    }
}`}
        />
      </section>

      {/* Problema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuál es el problema?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La clase <code>Acuario</code> depende directamente de
          <code> ComidaPeces</code>. Si cambia la forma de calcular la comida,
          hay que modificar el acuario, lo que genera acoplamiento fuerte.
        </p>
      </section>

      {/* Ejemplo correcto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo correcto (aplicando DIP)
        </h2>

        <CodeBlock code=
{`// Abstracción
interface CalculadorComida {
    double calcular();
}

// Implementación
class ComidaPeces implements CalculadorComida {
    public double calcular() {
        return 10;
    }
}

// Clase de alto nivel
class Acuario {
    private CalculadorComida calculador;

    Acuario(CalculadorComida calculador) {
        this.calculador = calculador;
    }

    double obtenerComida() {
        return calculador.calcular();
    }
}`}
        />
      </section>

      {/* Ventaja */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué mejora con DIP?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Reduce el acoplamiento entre clases</li>
          <li>Facilita el cambio de implementaciones</li>
          <li>Permite reutilizar código</li>
          <li>Hace el sistema más flexible</li>
        </ul>
      </section>

      {/* Extensión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de extensión
        </h2>

        <CodeBlock code=
{`// Nueva implementación sin modificar Acuario
class ComidaAvanzada implements CalculadorComida {
    public double calcular() {
        return 20;
    }
}`}
        />
      </section>

      {/* Uso */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso del sistema
        </h2>

        <CodeBlock code=
{`public class Main {
    public static void main(String[] args) {

        CalculadorComida comida = new ComidaPeces();
        Acuario acuario = new Acuario(comida);

        System.out.println(acuario.obtenerComida());
    }
}`}
        />
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá qué es DIP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá el problema del ejemplo incorrecto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá una nueva implementación de CalculadorComida.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Modificá tu proyecto del acuario para aplicar DIP.
          </div>

        </div>
      </section>

    </div>
  );
}