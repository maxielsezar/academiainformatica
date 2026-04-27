import CodeBlock from "@/app/components/CodeBlock";

export default function OCPAcuarioPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          OCP - Open/Closed Principle aplicado al Acuario
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El principio Open/Closed (abierto/cerrado) indica que el software debe
          estar abierto a extensión, pero cerrado a modificación. Es decir, debemos
          poder agregar nuevas funcionalidades sin cambiar el código existente.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es OCP?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          OCP busca evitar modificar clases ya existentes cuando queremos agregar
          nuevos comportamientos. En su lugar, se deben extender mediante
          herencia o interfaces.
        </p>
      </section>

      {/* Ejemplo incorrecto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo incorrecto (NO cumple OCP)
        </h2>

        <CodeBlock code=
{`class CalculadoraVolumen {

    double calcular(String tipo, double a, double b, double c) {

        if (tipo.equals("cubo")) {
            return a * a * a;
        } else if (tipo.equals("rectangular")) {
            return a * b * c;
        } else if (tipo.equals("esfera")) {
            return (4.0/3.0) * Math.PI * Math.pow(a, 3);
        }

        return 0;
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
          Cada vez que se agrega una nueva forma de acuario, hay que modificar la
          clase <code>CalculadoraVolumen</code>. Esto rompe el principio OCP.
        </p>
      </section>

      {/* Ejemplo correcto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo correcto (aplicando OCP)
        </h2>

        <CodeBlock code=
{`// Interfaz base
interface FormaAcuario {
    double calcularVolumen();
}

// Implementaciones
class Cubo implements FormaAcuario {
    double lado;

    Cubo(double lado) {
        this.lado = lado;
    }

    public double calcularVolumen() {
        return lado * lado * lado;
    }
}

class Rectangular implements FormaAcuario {
    double ancho, alto, largo;

    Rectangular(double ancho, double alto, double largo) {
        this.ancho = ancho;
        this.alto = alto;
        this.largo = largo;
    }

    public double calcularVolumen() {
        return ancho * alto * largo;
    }
}

class Esfera implements FormaAcuario {
    double radio;

    Esfera(double radio) {
        this.radio = radio;
    }

    public double calcularVolumen() {
        return (4.0/3.0) * Math.PI * Math.pow(radio, 3);
    }
}

// Clase que usa las formas
class Acuario {
    FormaAcuario forma;

    Acuario(FormaAcuario forma) {
        this.forma = forma;
    }

    double obtenerVolumen() {
        return forma.calcularVolumen();
    }
}`}
        />
      </section>

      {/* Explicación final */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué mejora con OCP?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>No es necesario modificar código existente</li>
          <li>Se pueden agregar nuevas formas fácilmente</li>
          <li>El sistema es más flexible</li>
          <li>Se reduce el riesgo de errores</li>
        </ul>
      </section>

      {/* Extensión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de extensión
        </h2>

        <CodeBlock code=
{`// Nueva forma sin modificar código existente
class Piramide implements FormaAcuario {
    double base, altura;

    Piramide(double base, double altura) {
        this.base = base;
        this.altura = altura;
    }

    public double calcularVolumen() {
        return (base * base * altura) / 3;
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
            Explicá con tus palabras qué es OCP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá por qué el primer ejemplo no cumple OCP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Agregá una nueva forma de acuario sin modificar el código existente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Creá tu propia implementación de FormaAcuario.
          </div>

        </div>
      </section>

    </div>
  );
}