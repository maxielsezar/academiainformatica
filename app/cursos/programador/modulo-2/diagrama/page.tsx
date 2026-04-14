import CodeBlock from "@/app/components/CodeBlock";

export default function DiagramasClasesPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Diagramas de Clases
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Los diagramas de clases son una herramienta fundamental del modelado en
          programación orientada a objetos. Permiten representar la estructura de
          un sistema mostrando sus clases, atributos, métodos y relaciones.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un diagrama de clases?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Es un tipo de diagrama UML que describe las clases de un sistema y cómo
          se relacionan entre sí. Es muy útil para planificar antes de programar.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Representa la estructura del sistema</li>
          <li>Muestra atributos y métodos</li>
          <li>Define relaciones entre clases</li>
        </ul>
      </section>

      {/* Elementos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Elementos de un diagrama de clases
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Clase:</strong> Representa un objeto del sistema</li>
          <li><strong>Atributos:</strong> Características de la clase</li>
          <li><strong>Métodos:</strong> Acciones que puede realizar</li>
          <li><strong>Relaciones:</strong> Conexiones entre clases</li>
        </ul>
      </section>

      {/* Tipos de relaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de relaciones
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Asociación:</strong> Relación general entre clases</li>
          <li><strong>Herencia:</strong> Una clase hereda de otra</li>
          <li><strong>Composición:</strong> Una clase contiene a otra</li>
          <li><strong>Agregación:</strong> Relación de “tiene un” más débil</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo práctico
        </h2>

        <p className="max-w-3xl mb-6">
          A continuación se muestra cómo se representaría un sistema simple de
          personas y estudiantes.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock
            code={`// Clase base
class Persona {
    String nombre;
    int edad;

    void saludar() {
        System.out.println("Hola, soy " + nombre);
    }
}

// Clase hija (herencia)
class Estudiante extends Persona {
    String carrera;

    void estudiar() {
        System.out.println("Estoy estudiando " + carrera);
    }
}`}
          />
        </div>
      </section>

      {/* Representación textual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Representación de una clase en UML
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Una clase se representa con un rectángulo dividido en tres partes:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Nombre de la clase</li>
          <li>Atributos</li>
          <li>Métodos</li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-xl max-w-3xl mt-6">
          <pre>{`-----------------------
|     Persona        |
-----------------------
| - nombre : String |
| - edad   : int    |
-----------------------
| + saludar()       |
-----------------------`}</pre>
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de usar diagramas de clases
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Facilitan la planificación del sistema</li>
          <li>Mejoran la comunicación entre desarrolladores</li>
          <li>Ayudan a detectar errores antes de programar</li>
          <li>Sirven como documentación</li>
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
            Define qué es un diagrama de clases.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Dibuja un diagrama de clases para una "Cuenta Bancaria".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identifica los atributos y métodos de una clase "Auto".
          </div>

        </div>
      </section>

    </div>
  );
}