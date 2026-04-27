import CodeBlock from "@/app/components/CodeBlock";

export default function LSPAcuarioPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          LSP - Liskov Substitution Principle aplicado al Acuario
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El principio de sustitución de Liskov (LSP) establece que una clase hija
          debe poder reemplazar a su clase padre sin alterar el correcto funcionamiento
          del programa.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es LSP?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Si una clase hereda de otra, debe comportarse de manera consistente con
          ella. No debe cambiar el comportamiento esperado ni romper la lógica del sistema.
        </p>
      </section>

      {/* Ejemplo incorrecto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo incorrecto (NO cumple LSP)
        </h2>

        <CodeBlock code=
{`class Acuario {
    double calcularVolumen() {
        return 100;
    }
}

class AcuarioDecorativo extends Acuario {

    @Override
    double calcularVolumen() {
        throw new UnsupportedOperationException("No se puede calcular volumen");
    }
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuál es el problema?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La clase <code>AcuarioDecorativo</code> rompe el contrato de la clase
          base, ya que no permite usar el método <code>calcularVolumen()</code>.
          Esto genera errores si se usa como un <code>Acuario</code>.
        </p>
      </section>

      {/* Ejemplo correcto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo correcto (aplicando LSP)
        </h2>

        <CodeBlock code=
{`// Clase base
abstract class Acuario {
    abstract double calcularVolumen();
}

// Implementaciones válidas
class AcuarioCubo extends Acuario {
    double lado;

    AcuarioCubo(double lado) {
        this.lado = lado;
    }

    double calcularVolumen() {
        return lado * lado * lado;
    }
}

class AcuarioEsfera extends Acuario {
    double radio;

    AcuarioEsfera(double radio) {
        this.radio = radio;
    }

    double calcularVolumen() {
        return (4.0/3.0) * Math.PI * Math.pow(radio, 3);
    }
}`}
        />
      </section>

      {/* Uso correcto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Uso correcto del principio
        </h2>

        <CodeBlock code=
{`public class Main {
    public static void main(String[] args) {

        Acuario a1 = new AcuarioCubo(3);
        Acuario a2 = new AcuarioEsfera(2);

        System.out.println(a1.calcularVolumen());
        System.out.println(a2.calcularVolumen());
    }
}`}
        />
      </section>

      {/* Explicación final */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué mejora con LSP?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Evita errores inesperados</li>
          <li>Permite usar polimorfismo correctamente</li>
          <li>Mejora la confiabilidad del sistema</li>
          <li>Facilita la extensión del código</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explicá con tus palabras qué es LSP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá por qué el ejemplo incorrecto rompe LSP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá una nueva clase de acuario que respete LSP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Probá reemplazar objetos en el programa y verificar que funcione correctamente.
          </div>

        </div>
      </section>

    </div>
  );
}