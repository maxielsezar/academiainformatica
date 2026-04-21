import CodeBlock from "@/app/components/CodeBlock";

export default function AcuarioPecesPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Complemento: Gestión de Peces en el Acuario
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta segunda parte del trabajo práctico, se deberá ampliar el sistema
          de acuarios incorporando peces. Cada pez ocupará un volumen dentro del
          acuario y consumirá una cierta cantidad de alimento diaria.
        </p>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nueva Consigna
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Modificar el sistema anterior para permitir agregar peces a cada acuario
          y calcular:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>El volumen ocupado por los peces</li>
          <li>La cantidad de litros disponibles restantes</li>
          <li>La cantidad total de alimento diario necesario</li>
        </ul>
      </section>

      {/* Reglas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reglas del sistema
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Cada pez ocupa un volumen en m³ (metros cúbicos)</li>
          <li>Ese volumen reduce la capacidad total del acuario</li>
          <li>Cada pez consume una cantidad fija de alimento por día</li>
          <li>El sistema debe calcular el total de alimento según la cantidad de peces</li>
          <li><strong>El acuario nunca puede quedarse sin agua</strong> (el volumen disponible debe ser mayor a 0)</li>
        </ul>
      </section>

      {/* Fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas necesarias
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Volumen disponible:</strong><br />
            Volumen del acuario - (suma de volumen de todos los peces)
          </p>

          <p>
            <strong>Condición:</strong><br />
            Volumen disponible {'>'} 0
          </p>

          <p>
            <strong>Litros disponibles:</strong><br />
            Volumen disponible × 1000 (si está en m³)
          </p>

          <p>
            <strong>Comida diaria total:</strong><br />
            suma de comida diaria de todos los peces
          </p>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo en Java
        </h2>

        <CodeBlock code=
{`import java.util.ArrayList;
import java.util.List;

class Pez {
    double volumen; // m3
    double comidaDiaria; // gramos

    Pez(double volumen, double comidaDiaria) {
        this.volumen = volumen;
        this.comidaDiaria = comidaDiaria;
    }
}

class Acuario {
    double volumenTotal;
    List<Pez> peces;

    Acuario(double volumenTotal) {
        this.volumenTotal = volumenTotal;
        this.peces = new ArrayList<>();
    }

    boolean puedeAgregarPez(Pez pez) {
        double volumenDisponible = calcularVolumenDisponible();
        return (volumenDisponible - pez.volumen) > 0;
    }

    void agregarPez(Pez pez) {
        if (puedeAgregarPez(pez)) {
            peces.add(pez);
        } else {
            System.out.println("No se puede agregar el pez: el acuario se quedaría sin agua.");
        }
    }

    double calcularVolumenOcupado() {
        double total = 0;
        for (Pez p : peces) {
            total += p.volumen;
        }
        return total;
    }

    double calcularVolumenDisponible() {
        return volumenTotal - calcularVolumenOcupado();
    }

    double calcularLitrosDisponibles() {
        return calcularVolumenDisponible() * 1000;
    }

    double calcularComidaTotal() {
        double total = 0;
        for (Pez p : peces) {
            total += p.comidaDiaria;
        }
        return total;
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
          Antes de agregar un pez, el sistema verifica si hay suficiente volumen
          disponible. Si agregarlo dejaría al acuario sin agua, la operación se
          bloquea. Esto garantiza que siempre exista espacio libre dentro del
          acuario.
        </p>
      </section>

      {/* Requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos del sistema
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear una clase Pez</li>
          <li>Relacionar Pez con Acuario (composición)</li>
          <li>Validar que el acuario nunca quede sin agua</li>
          <li>Calcular volumen ocupado y disponible</li>
          <li>Calcular comida total diaria</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Crear la clase Pez con sus atributos.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Modificar la clase Acuario para almacenar peces.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Implementar la validación para que el acuario no quede sin agua.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Mostrar los resultados en pantalla.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 5</p>
            Probar con diferentes cantidades de peces y verificar la restricción.
          </div>

        </div>
      </section>

    </div>
  );
}