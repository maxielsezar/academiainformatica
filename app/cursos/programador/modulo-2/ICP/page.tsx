import CodeBlock from "@/app/components/CodeBlock";

export default function ISPAcuarioPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          ISP - Interface Segregation Principle aplicado al Acuario
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El principio de segregación de interfaces (ISP) indica que una clase no
          debe verse obligada a implementar métodos que no necesita. Es mejor
          tener varias interfaces pequeñas y específicas que una grande y general.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es ISP?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          ISP busca evitar interfaces "gigantes" que obliguen a las clases a
          implementar funcionalidades innecesarias. Cada interfaz debe tener una
          responsabilidad clara y concreta.
        </p>
      </section>

      {/* Ejemplo incorrecto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo incorrecto (NO cumple ISP)
        </h2>

        <CodeBlock code=
{`interface SistemaAcuario {
    void calcularVolumen();
    void nadar();
    void emitirLuz();
}

class Pez implements SistemaAcuario {
    public void calcularVolumen() {}
    public void nadar() {}
    public void emitirLuz() {} // No todos los peces hacen esto
}

class Lampara implements SistemaAcuario {
    public void calcularVolumen() {}
    public void nadar() {} // No tiene sentido
    public void emitirLuz() {}
}`}
        />
      </section>

      {/* Problema */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuál es el problema?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las clases están obligadas a implementar métodos que no necesitan,
          lo que genera código innecesario y confuso.
        </p>
      </section>

      {/* Ejemplo correcto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo correcto (aplicando ISP)
        </h2>

        <CodeBlock code=
{`// Interfaces separadas
interface Calculable {
    double calcularVolumen();
}

interface Nadador {
    void nadar();
}

interface Iluminacion {
    void emitirLuz();
}

// Implementaciones
class Pez implements Nadador {
    public void nadar() {}
}

class Acuario implements Calculable {
    public double calcularVolumen() {
        return 100;
    }
}

class Lampara implements Iluminacion {
    public void emitirLuz() {}
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué mejora con ISP?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Las clases implementan solo lo que necesitan</li>
          <li>El código es más claro y organizado</li>
          <li>Se reduce el acoplamiento</li>
          <li>Facilita el mantenimiento</li>
        </ul>
      </section>

      {/* Ejemplo aplicado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el sistema de acuario
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Podés separar responsabilidades en interfaces como:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Elementos que ocupan espacio</li>
          <li>Elementos que consumen recursos (comida)</li>
          <li>Elementos visuales</li>
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
            Explicá qué es ISP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá por qué el ejemplo incorrecto no cumple ISP.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Diseñá interfaces más pequeñas para un sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Aplicá ISP en tu proyecto del acuario.
          </div>

        </div>
      </section>

    </div>
  );
}