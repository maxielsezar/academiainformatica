import CodeBlock from "@/app/components/CodeBlock";

export default function AtributosMetodosPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Atributos y Métodos
        </h1>

        <p className="max-w-3xl leading-relaxed">
          En la programación orientada a objetos, los atributos y los métodos
          son los componentes principales de una clase. Permiten definir el
          estado y el comportamiento de los objetos.
        </p>
      </section>

      {/* Atributos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los atributos?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Los atributos son variables que pertenecen a una clase y representan
          las características de un objeto.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Definen el estado del objeto</li>
          <li>Se almacenan en memoria</li>
          <li>Cada objeto puede tener valores distintos</li>
        </ul>
      </section>

      {/* Métodos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué son los métodos?
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Los métodos son funciones que pertenecen a una clase y definen las
          acciones que puede realizar un objeto.
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Definen el comportamiento del objeto</li>
          <li>Pueden recibir parámetros</li>
          <li>Pueden devolver valores</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo práctico
        </h2>

        <p className="max-w-3xl mb-6">
          Veamos una clase que combina atributos y métodos.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code=
{`class CuentaBancaria {

    String titular;
    double saldo;

    void depositar(double monto) {
        saldo = saldo + monto;
    }

    void retirar(double monto) {
        saldo = saldo - monto;
    }

    void mostrarSaldo() {
        System.out.println("Saldo: " + saldo);
    }

}

public class Main {

    public static void main(String[] args) {

        CuentaBancaria cuenta = new CuentaBancaria();

        cuenta.titular = "Juan";
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
          Relación entre atributos y métodos
        </h2>

        <p className="max-w-3xl leading-relaxed">
          Los métodos suelen trabajar con los atributos de la clase. Por ejemplo,
          en una cuenta bancaria, los métodos modifican el saldo según las
          operaciones realizadas.
        </p>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Usar nombres claros para atributos y métodos</li>
          <li>No modificar atributos directamente desde fuera de la clase</li>
          <li>Utilizar métodos para controlar cambios en los datos</li>
          <li>Mantener métodos simples y específicos</li>
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
            Explica la diferencia entre atributo y método.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crea una clase "Producto" con atributos nombre y precio.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Agrega un método que muestre la información del producto.
          </div>

        </div>
      </section>

    </div>
  );
}