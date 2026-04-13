import CodeBlock from "@/app/components/CodeBlock";

export default function AbstraccionPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Abstracción en Programación
        </h1>

        <p className="max-w-3xl leading-relaxed">
          La abstracción es uno de los pilares de la programación orientada a objetos.
          Permite simplificar sistemas complejos mostrando solo la información relevante
          y ocultando los detalles internos de implementación.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la abstracción?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          La abstracción consiste en representar un objeto del mundo real mediante
          sus características esenciales, ignorando los detalles innecesarios.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Reduce la complejidad del código</li>
          <li>Permite trabajar a un nivel más conceptual</li>
          <li>Oculta la implementación interna</li>
        </ul>
      </section>

      {/* Cómo se aplica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo se aplica la abstracción?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          En Java, la abstracción se puede aplicar mediante clases abstractas e interfaces.
          Estas definen qué debe hacer un objeto, pero no necesariamente cómo lo hace.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Clases abstractas</li>
          <li>Interfaces</li>
          <li>Métodos abstractos</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo práctico
        </h2>

        <p className="max-w-3xl mb-6">
          Veamos un ejemplo usando una clase abstracta.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock
            code={`abstract class Animal {

    // Método abstracto (no tiene implementación)
    abstract void hacerSonido();

    // Método concreto
    void dormir() {
        System.out.println("El animal está durmiendo");
    }
}

class Perro extends Animal {

    // Implementación del método abstracto
    void hacerSonido() {
        System.out.println("El perro ladra");
    }
}

public class Main {

    public static void main(String[] args) {

        Animal miAnimal = new Perro();

        miAnimal.hacerSonido();
        miAnimal.dormir();

    }

}`}
          />
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de la abstracción
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Hace el código más simple y entendible</li>
          <li>Mejora la organización del programa</li>
          <li>Facilita la reutilización del código</li>
          <li>Permite cambios internos sin afectar el uso externo</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Abstraer solo lo necesario</li>
          <li>No exponer detalles internos innecesarios</li>
          <li>Usar interfaces cuando sea posible</li>
          <li>Mantener una estructura clara y simple</li>
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
            Define con tus palabras qué es la abstracción.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea una clase abstracta llamada "Vehiculo".
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Implementa una clase "Auto" que herede de "Vehiculo".
          </div>

        </div>
      </section>

    </div>
  );
}