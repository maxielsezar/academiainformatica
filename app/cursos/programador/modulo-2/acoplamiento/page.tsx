import CodeBlock from "@/app/components/CodeBlock";

export default function CohesionAcoplamientoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Cohesión y Acoplamiento en Programación
        </h1>

        <p className="leading-relaxed max-w-3xl">
          La cohesión y el acoplamiento son dos conceptos clave en el diseño de
          software. Se utilizan para evaluar qué tan bien está organizado un
          sistema y cómo interactúan sus componentes.
        </p>
      </section>

      {/* Cohesión */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es la cohesión?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          La cohesión mide qué tan relacionadas están las responsabilidades dentro
          de un mismo módulo o clase. Una <strong>alta cohesión</strong> significa
          que el módulo tiene una única responsabilidad bien definida.
        </p>
      </section>

      {/* Acoplamiento */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es el acoplamiento?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El acoplamiento indica el grado de dependencia entre diferentes módulos
          o clases. Un buen diseño busca un <strong>bajo acoplamiento</strong>,
          es decir, que los componentes dependan lo menos posible entre sí.
        </p>
      </section>

      {/* Tipos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Alta cohesión:</strong> cada clase tiene una sola responsabilidad.</li>
          <li><strong>Bajo acoplamiento:</strong> las clases son independientes entre sí.</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <CodeBlock code=
{`// BAJA COHESIÓN (no recomendado)
class Utilidades {
    void imprimirFactura() {
        System.out.println("Factura impresa");
    }

    void calcularEdad() {
        System.out.println("Edad calculada");
    }

    void conectarBaseDatos() {
        System.out.println("Conexión establecida");
    }
}

// ALTA COHESIÓN (recomendado)
class Factura {
    void imprimir() {
        System.out.println("Factura impresa");
    }
}

class Persona {
    void calcularEdad() {
        System.out.println("Edad calculada");
    }
}

class ConexionBD {
    void conectar() {
        System.out.println("Conexión establecida");
    }
}

// BAJO ACOPLAMIENTO (recomendado)
interface Notificacion {
    void enviar();
}

class Email implements Notificacion {
    public void enviar() {
        System.out.println("Enviando email");
    }
}

class Servicio {
    private Notificacion notificacion;

    public Servicio(Notificacion notificacion) {
        this.notificacion = notificacion;
    }

    void ejecutar() {
        notificacion.enviar();
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
          En el primer caso hay baja cohesión porque una sola clase realiza tareas
          muy diferentes. Luego se mejora separando responsabilidades en distintas
          clases (alta cohesión). Finalmente, se utiliza una interfaz para reducir
          el acoplamiento, permitiendo cambiar la implementación sin afectar el sistema.
        </p>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de aplicar cohesión y bajo acoplamiento
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Código más claro y organizado</li>
          <li>Mayor facilidad de mantenimiento</li>
          <li>Menor impacto ante cambios</li>
          <li>Mayor reutilización de componentes</li>
        </ul>
      </section>

      {/* Ejemplo real */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en la vida real
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una empresa, cada departamento (ventas, recursos humanos, contabilidad)
          cumple una función específica (alta cohesión), pero trabaja de forma
          independiente de los demás (bajo acoplamiento).
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
            Explicá con tus palabras qué es la cohesión.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            ¿Qué significa tener bajo acoplamiento?
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificá en el ejemplo dónde hay alta cohesión.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Pensá un ejemplo propio donde apliques ambos conceptos.
          </div>

        </div>
      </section>

    </div>
  );
}