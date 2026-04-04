import CodeBlock from "@/app/components/CodeBlock";

export default function EstadoComportamientoPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Estado y Comportamiento
        </h1>

        <p className="max-w-3xl leading-relaxed">
          En la programación orientada a objetos, todo objeto tiene un estado
          y un comportamiento. Estos conceptos permiten representar de manera
          clara cómo funcionan las entidades dentro de un sistema.
        </p>
      </section>

      {/* Estado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el estado?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          El estado de un objeto está definido por los valores de sus atributos
          en un momento determinado.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Representa la información del objeto</li>
          <li>Puede cambiar a lo largo del tiempo</li>
          <li>Depende de los valores de sus atributos</li>
        </ul>
      </section>

      {/* Comportamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el comportamiento?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          El comportamiento está definido por los métodos de la clase, es decir,
          las acciones que el objeto puede realizar.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Define lo que el objeto puede hacer</li>
          <li>Puede modificar el estado</li>
          <li>Interactúa con otros objetos</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo práctico
        </h2>

        <p className="max-w-3xl mb-6">
          En este ejemplo, el estado de una cuenta bancaria es su saldo, y el
          comportamiento son las operaciones que modifican ese saldo.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`class CuentaBancaria {

    double saldo;

    void depositar(double monto) {
        saldo = saldo + monto;
    }

    void retirar(double monto) {
        saldo = saldo - monto;
    }

    void mostrarSaldo() {
        System.out.println("Saldo actual: " + saldo);
    }

}

public class Main {

    public static void main(String[] args) {

        CuentaBancaria cuenta = new CuentaBancaria();

        cuenta.saldo = 1000;

        cuenta.depositar(500);
        cuenta.retirar(200);

        cuenta.mostrarSaldo();

    }

}`}
          />
        </div>
      </section>

      {/* Relación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Relación entre estado y comportamiento
        </h2>

        <p className="max-w-3xl leading-relaxed">
          El comportamiento de un objeto puede modificar su estado. Por ejemplo,
          al depositar dinero en una cuenta, el saldo cambia. Esta relación es
          clave para entender cómo funcionan los objetos en un sistema.
        </p>
      </section>

      {/* Analogía */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Analogía del mundo real
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Pensá en un auto: su estado incluye características como velocidad y
          combustible, mientras que su comportamiento incluye acciones como
          acelerar o frenar. Estas acciones modifican su estado.
        </p>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Explica qué es el estado de un objeto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Explica qué es el comportamiento de un objeto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Crea un ejemplo de una clase donde un método modifique un atributo.
          </div>

        </div>
      </section>

    </div>
  );
}