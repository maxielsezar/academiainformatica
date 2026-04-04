import CodeBlock from "@/app/components/CodeBlock";

export default function ClasesObjetosPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Clases y Objetos
        </h1>

        <p className="max-w-3xl leading-relaxed">
          En la programación orientada a objetos, las clases y los objetos son
          los elementos fundamentales. Permiten representar entidades del mundo
          real dentro de un programa de manera organizada y reutilizable.
        </p>
      </section>

      {/* Clase */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una clase?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Una clase es una plantilla o modelo que define las características
          (atributos) y comportamientos (métodos) que tendrán los objetos.
        </p>
      </section>

      {/* Objeto */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un objeto?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Un objeto es una instancia de una clase. Es decir, es un elemento
          concreto creado a partir de esa plantilla.
        </p>
      </section>

      {/* Diferencia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diferencia entre clase y objeto
        </h2>

        <div className="border rounded-xl overflow-hidden max-w-3xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Clase</th>
                <th className="p-3">Objeto</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Es una plantilla</td>
                <td className="p-3">Es una instancia concreta</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Define atributos y métodos</td>
                <td className="p-3">Contiene valores reales</td>
              </tr>
              <tr>
                <td className="p-3">No ocupa memoria directa</td>
                <td className="p-3">Ocupa memoria en ejecución</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo práctico
        </h2>

        <p className="max-w-3xl mb-6">
          Veamos un ejemplo donde creamos una clase y luego instanciamos un objeto.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`class Auto {

    String marca;
    int año;

    void mostrarInfo() {
        System.out.println("Marca: " + marca + ", Año: " + año);
    }

}

public class Main {

    public static void main(String[] args) {

        Auto auto1 = new Auto();
        auto1.marca = "Toyota";
        auto1.año = 2022;

        auto1.mostrarInfo();

    }

}`}
          />
        </div>
      </section>

      {/* Analogía */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Analogía del mundo real
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Una clase es como un plano de una casa, mientras que un objeto es la
          casa construida a partir de ese plano. Podés construir muchas casas
          (objetos) a partir del mismo plano (clase).
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Por qué usar clases y objetos?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Organizan mejor el código</li>
          <li>Permiten reutilizar estructuras</li>
          <li>Facilitan el mantenimiento</li>
          <li>Representan problemas reales de forma clara</li>
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
            Explica la diferencia entre clase y objeto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea una clase llamada "Estudiante" con nombre y edad.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Instancia un objeto de la clase "Estudiante" y muestra sus datos.
          </div>

        </div>
      </section>

    </div>
  );
}