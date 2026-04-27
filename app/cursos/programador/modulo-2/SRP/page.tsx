import CodeBlock from "@/app/components/CodeBlock";

export default function SRPAcuarioPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          SRP - Single Responsibility Principle aplicado al Acuario
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El principio de responsabilidad única (SRP) establece que una clase debe
          tener una sola razón para cambiar. Esto significa que cada clase debe
          encargarse de una única tarea dentro del sistema.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es SRP?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          SRP busca evitar clases que hagan demasiadas cosas al mismo tiempo.
          Cuando una clase tiene múltiples responsabilidades, se vuelve difícil
          de mantener, entender y modificar.
        </p>
      </section>

      {/* Ejemplo incorrecto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo incorrecto (NO cumple SRP)
        </h2>

        <CodeBlock code=
{`class Acuario {

    double volumen;

    void calcularLitros() {
        // cálculo de litros
    }

    void agregarPez() {
        // lógica de peces
    }

    void calcularComida() {
        // cálculo de comida
    }

    void mostrarDatos() {
        // lógica de interfaz o impresión
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
          Esta clase tiene demasiadas responsabilidades: cálculos, gestión de peces
          y presentación de datos. Si cambia alguna de estas partes, la clase debe
          modificarse, lo que rompe el principio SRP.
        </p>
      </section>

      {/* Ejemplo correcto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo correcto (aplicando SRP)
        </h2>

        <CodeBlock code=
{`// Clase Acuario: solo maneja datos del acuario
class Acuario {
    double volumen;
}

// Clase para cálculos
class CalculadoraAcuario {

    double calcularLitros(double volumen) {
        return volumen * 1000 * 0.9;
    }
}

// Clase para peces
class GestorPeces {

    void agregarPez() {
        // lógica de peces
    }

    double calcularComida() {
        return 0;
    }
}

// Clase para mostrar datos
class VistaAcuario {

    void mostrar() {
        // impresión o interfaz
    }
}`}
        />
      </section>

      {/* Explicación final */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué mejora con SRP?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Cada clase tiene una responsabilidad clara</li>
          <li>El código es más fácil de mantener</li>
          <li>Se pueden hacer cambios sin afectar otras partes</li>
          <li>El sistema es más escalable</li>
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
            Identificá qué responsabilidades tiene la clase Acuario incorrecta.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Separá una clase en múltiples clases aplicando SRP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Agregá una nueva funcionalidad sin modificar las clases existentes.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Explicá con tus palabras por qué SRP mejora el código.
          </div>

        </div>
      </section>

    </div>
  );
}