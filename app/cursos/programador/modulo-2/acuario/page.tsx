import CodeBlock from "@/app/components/CodeBlock";

export default function TrabajoPracticoAcuarioPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Trabajo Práctico: Sistema de Acuarios
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este trabajo práctico deberás desarrollar un sistema que permita
          calcular el área, el volumen y la cantidad de litros de distintos tipos
          de acuarios. Se aplicarán conceptos de Programación Orientada a Objetos
          como clases, herencia, abstracción y reutilización de código.
        </p>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear un programa que represente diferentes tipos de acuarios según su
          forma geométrica. El sistema debe permitir ingresar las dimensiones y
          calcular:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Área de la superficie</li>
          <li>Volumen</li>
          <li>Cantidad de litros que puede contener</li>
        </ul>
      </section>

      {/* Formas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Tipos de acuarios
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Cubo</strong></li>
          <li><strong>Rectangular</strong></li>
          <li><strong>Esfera</strong></li>
          <li><strong>Pirámide</strong></li>
        </ul>
      </section>

      {/* Fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas necesarias
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p><strong>Cubo:</strong></p>
          <ul className="list-disc list-inside">
            <li>Área = 6 × lado²</li>
            <li>Volumen = lado³</li>
          </ul>

          <p><strong>Rectangular:</strong></p>
          <ul className="list-disc list-inside">
            <li>Área = 2 × (largo × ancho + largo × alto + ancho × alto)</li>
            <li>Volumen = largo × ancho × alto</li>
          </ul>

          <p><strong>Esfera:</strong></p>
          <ul className="list-disc list-inside">
            <li>Área = 4 × π × radio²</li>
            <li>Volumen = (4/3) × π × radio³</li>
          </ul>

          <p><strong>Pirámide (base cuadrada):</strong></p>
          <ul className="list-disc list-inside">
            <li>Área ≈ área de la base + área lateral</li>
            <li>Volumen = (1/3) × base × altura</li>
          </ul>

          <p className="mt-4">
            <strong>Conversión a litros:</strong><br />
            1 unidad cúbica = 1 litro (si las medidas están en decímetros).<br />
            Si están en cm³: 1000 cm³ = 1 litro.
          </p>

        </div>
      </section>

      {/* Requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos del sistema
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear una clase base (por ejemplo: Acuario)</li>
          <li>Implementar clases hijas para cada forma</li>
          <li>Aplicar herencia y/o abstracción</li>
          <li>Definir métodos para calcular área y volumen</li>
          <li>Calcular automáticamente los litros</li>
        </ul>
      </section>

      {/* Ejemplo base */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de estructura en Java
        </h2>

        <CodeBlock code=
{`abstract class Acuario {
    abstract double calcularArea();
    abstract double calcularVolumen();

    double calcularLitros() {
        return calcularVolumen(); // suponiendo dm³
    }
}

class Cubo extends Acuario {
    double lado;

    Cubo(double lado) {
        this.lado = lado;
    }

    double calcularArea() {
        return 6 * lado * lado;
    }

    double calcularVolumen() {
        return lado * lado * lado;
    }
}`}
        />
      </section>

      {/* Diagrama */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diagrama de clases (requerido)
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Realizá un diagrama de clases inicial donde se visualice:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Clase base: Acuario</li>
          <li>Clases hijas: Cubo, Rectangular, Esfera, Pirámide</li>
          <li>Métodos principales (calcularArea, calcularVolumen, calcularLitros)</li>
          <li>Atributos de cada clase (lado, radio, altura, etc.)</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades a realizar
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Parte 1</p>
            Diseñar el diagrama de clases del sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Parte 2</p>
            Implementar las clases en Java aplicando herencia.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Parte 3</p>
            Permitir el ingreso de datos por teclado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Parte 4</p>
            Mostrar los resultados: área, volumen y litros.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Parte 5</p>
            Probar el sistema con distintos valores.
          </div>

        </div>
      </section>

    </div>
  );
}