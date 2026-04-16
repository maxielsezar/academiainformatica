import CodeBlock from "@/app/components/CodeBlock";

export default function PrincipiosPOOPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Principios de la Programación Orientada a Objetos
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La Programación Orientada a Objetos (POO) es un paradigma que organiza
          el código en objetos que representan entidades del mundo real. Se basa
          en cuatro principios fundamentales que permiten crear programas más
          ordenados, reutilizables y fáciles de mantener.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cuáles son los principios de la POO?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los cuatro pilares de la programación orientada a objetos son:
          encapsulamiento, herencia, polimorfismo y abstracción. Cada uno cumple
          un rol clave en la organización del código.
        </p>
      </section>

      {/* Principios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Los 4 principios fundamentales
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>
            <strong>Encapsulamiento:</strong> protege los datos de un objeto y
            permite acceder a ellos mediante métodos.
          </li>
          <li>
            <strong>Herencia:</strong> permite crear nuevas clases a partir de
            otras, reutilizando código.
          </li>
          <li>
            <strong>Polimorfismo:</strong> permite que un mismo método tenga
            diferentes comportamientos.
          </li>
          <li>
            <strong>Abstracción:</strong> simplifica la complejidad mostrando solo
            lo esencial.
          </li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <CodeBlock code=
{`// Encapsulamiento
class Persona {
    private String nombre;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

// Herencia
class Estudiante extends Persona {
    private int legajo;

    public int getLegajo() {
        return legajo;
    }

    public void setLegajo(int legajo) {
        this.legajo = legajo;
    }
}

// Polimorfismo
class Animal {
    void hacerSonido() {
        System.out.println("Sonido genérico");
    }
}

class Perro extends Animal {
    @Override
    void hacerSonido() {
        System.out.println("Ladrido");
    }
}

// Abstracción
abstract class Figura {
    abstract double calcularArea();
}

class Circulo extends Figura {
    double radio;

    Circulo(double radio) {
        this.radio = radio;
    }

    double calcularArea() {
        return Math.PI * radio * radio;
    }
}`}
        />
      </section>

      {/* Explicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué sucede en el ejemplo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En este ejemplo se aplican los cuatro principios: se protege la
          información con encapsulamiento, se reutiliza código con herencia, se
          modifican comportamientos con polimorfismo y se definen estructuras
          generales mediante abstracción.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de la POO
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Organiza mejor el código</li>
          <li>Facilita la reutilización</li>
          <li>Permite escalar proyectos grandes</li>
          <li>Hace el código más mantenible</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un sistema de gestión de una escuela puede tener una clase Persona,
          de la cual heredan Estudiante y Profesor. Cada uno tiene comportamientos
          distintos pero comparten características en común.
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
            Explicá con tus palabras qué es la Programación Orientada a Objetos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Nombrá y describí los 4 principios de la POO.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificá en el ejemplo dónde se aplica cada principio.
          </div>

        </div>
      </section>

    </div>
  );
}