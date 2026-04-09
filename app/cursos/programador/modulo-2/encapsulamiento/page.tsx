import CodeBlock from "@/app/components/CodeBlock";

export default function EncapsulamientoInformacionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Encapsulamiento de la Información
        </h1>

        <p className="leading-relaxed max-w-3xl">
          El encapsulamiento es un concepto fundamental en programación orientada
          a objetos que permite proteger los datos de una clase y controlar su
          acceso mediante métodos. De esta forma, se evita que otras partes del
          programa modifiquen la información de manera incorrecta.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el encapsulamiento?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El encapsulamiento consiste en declarar los atributos de una clase como
          privados (private) y permitir su acceso únicamente a través de métodos
          públicos (getters y setters). Esto asegura que los datos sean utilizados
          de forma controlada.
        </p>
      </section>

      {/* Ejemplo en Java */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <CodeBlock code={`public class Persona {

    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        if (edad > 0) {
            this.edad = edad;
        }
    }
}`}
        />
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas del encapsulamiento
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Protege los datos del acceso directo</li>
          <li>Evita modificaciones incorrectas</li>
          <li>Mejora la organización del código</li>
          <li>Facilita el mantenimiento del programa</li>
        </ul>
      </section>

      {/* Aplicación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un ejemplo claro es una cuenta bancaria: no podés modificar el saldo
          directamente, sino que utilizás métodos como depositar o retirar dinero,
          lo que garantiza que las operaciones sean válidas.
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
            Explicá con tus palabras qué es el encapsulamiento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá qué atributos están protegidos en el ejemplo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Creá una clase en Java que encapsule la información de un alumno.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Pensá un ejemplo de la vida real donde se aplique encapsulamiento.
          </div>

        </div>
      </section>

    </div>
  );
}