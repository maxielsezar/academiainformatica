import CodeBlock from "@/app/components/CodeBlock";

export default function SintaxisJavaPage() {
  return (
    <div className="space-y-16">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Sintaxis Básica de Java
        </h1>

        <p className="max-w-3xl leading-relaxed">
          Java es un lenguaje de programación orientado a objetos muy utilizado
          en el desarrollo de aplicaciones. En esta sección aprenderás su sintaxis
          básica para comenzar a programar.
        </p>
      </section>

      {/* Estructura básica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura de un programa en Java
        </h2>

        <p className="max-w-3xl mb-6">
          Todo programa en Java comienza con una clase y un método principal llamado <strong>main</strong>.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code =
{`public class Main {

    public static void main(String[] args) {

        System.out.println("Hola mundo");

    }

}`}
          />
        </div>
      </section>

      {/* Variables */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Variables y tipos de datos
        </h2>

        <p className="max-w-3xl mb-6">
          En Java, las variables deben declararse indicando su tipo de dato.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code =
{`int edad = 25;
double altura = 1.75;
String nombre = "Juan";
boolean activo = true;`}
          />
        </div>
      </section>

      {/* Condicionales */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructuras condicionales
        </h2>

        <p className="max-w-3xl mb-6">
          Permiten tomar decisiones dentro del programa.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code =
{`int numero = 10;

if (numero > 0) {
    System.out.println("Es positivo");
} else {
    System.out.println("Es negativo o cero");
}`}
          />
        </div>
      </section>

      {/* Bucles */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Bucles
        </h2>

        <p className="max-w-3xl mb-6">
          Los bucles permiten repetir acciones varias veces.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code =
{`for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`}
          />
        </div>
      </section>

      {/* Métodos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Métodos
        </h2>

        <p className="max-w-3xl mb-6">
          Los métodos permiten organizar el código y reutilizar funcionalidades.
        </p>

        <div className="bg-[#0f172a] text-gray-100 p-6 rounded-2xl text-sm font-mono shadow-lg border border-gray-800 overflow-x-auto">
          <CodeBlock code =
{`public static int sumar(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    int resultado = sumar(5, 3);
    System.out.println(resultado);
}`}
          />
        </div>
      </section>

    </div>
  );
}