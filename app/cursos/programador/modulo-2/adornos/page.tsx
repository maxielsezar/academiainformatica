import CodeBlock from "@/app/components/CodeBlock";

export default function AcuarioAvanzadoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Complemento: Litros Reales y Adornos del Acuario
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta etapa del trabajo práctico se mejora el cálculo del agua del
          acuario. El volumen total se mantiene igual, pero la cantidad de litros
          utilizables será el 90% para evitar que el acuario se rebalse.
          Además, se incorporan adornos que ocupan espacio dentro del acuario.
        </p>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Nueva Consigna
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Modificar el sistema para:
        </p>

        <ul className="list-disc list-inside space-y-3 max-w-3xl mt-4">
          <li>Calcular los litros reales del acuario (90% del total)</li>
          <li>Agregar adornos que ocupen espacio</li>
          <li>Recalcular litros disponibles considerando peces y adornos</li>
          <li>Seguir respetando que el acuario no puede quedarse sin agua</li>
        </ul>
      </section>

      {/* Reglas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Reglas del sistema
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>El volumen total del acuario no cambia</li>
          <li>Solo el 90% de los litros pueden utilizarse (para evitar desbordes)</li>
          <li>Los peces ocupan volumen en m³</li>
          <li>Los adornos también ocupan volumen en m³</li>
          <li>El sistema debe garantizar que siempre haya agua disponible</li>
        </ul>
      </section>

      {/* Fórmulas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Fórmulas necesarias
        </h2>

        <div className="space-y-4 max-w-3xl">

          <p>
            <strong>Litros totales:</strong><br />
            volumen total × 1000
          </p>

          <p>
            <strong>Litros reales (90%):</strong><br />
            litros totales × 0.9
          </p>

          <p>
            <strong>Volumen ocupado:</strong><br />
            suma de volumen de peces + suma de volumen de adornos
          </p>

          <p>
            <strong>Litros ocupados:</strong><br />
            volumen ocupado × 1000
          </p>

          <p>
            <strong>Litros disponibles:</strong><br />
            litros reales - litros ocupados
          </p>

          <p>
            <strong>Condición:</strong><br />
            litros disponibles {'>'} 0
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
    double volumen;
    double comidaDiaria;

    Pez(double volumen, double comidaDiaria) {
        this.volumen = volumen;
        this.comidaDiaria = comidaDiaria;
    }
}

class Adorno {
    double volumen;

    Adorno(double volumen) {
        this.volumen = volumen;
    }
}

class Acuario {
    double volumenTotal;
    List<Pez> peces;
    List<Adorno> adornos;

    Acuario(double volumenTotal) {
        this.volumenTotal = volumenTotal;
        this.peces = new ArrayList<>();
        this.adornos = new ArrayList<>();
    }

    double calcularLitrosTotales() {
        return volumenTotal * 1000;
    }

    double calcularLitrosReales() {
        return calcularLitrosTotales() * 0.9;
    }

    double calcularVolumenOcupado() {
        double total = 0;

        for (Pez p : peces) {
            total += p.volumen;
        }

        for (Adorno a : adornos) {
            total += a.volumen;
        }

        return total;
    }

    double calcularLitrosOcupados() {
        return calcularVolumenOcupado() * 1000;
    }

    double calcularLitrosDisponibles() {
        return calcularLitrosReales() - calcularLitrosOcupados();
    }

    boolean puedeAgregarPez(Pez pez) {
        return (calcularLitrosDisponibles() - (pez.volumen * 1000)) > 0;
    }

    boolean puedeAgregarAdorno(Adorno adorno) {
        return (calcularLitrosDisponibles() - (adorno.volumen * 1000)) > 0;
    }

    void agregarPez(Pez pez) {
        if (puedeAgregarPez(pez)) {
            peces.add(pez);
        } else {
            System.out.println("No hay litros disponibles para el pez.");
        }
    }

    void agregarAdorno(Adorno adorno) {
        if (puedeAgregarAdorno(adorno)) {
            adornos.add(adorno);
        } else {
            System.out.println("No hay litros disponibles para el adorno.");
        }
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
          ¿Qué cambia en este modelo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Ahora el volumen del acuario no se modifica, pero sí la cantidad de
          agua utilizable. Solo el 90% de los litros se pueden usar, lo que evita
          que el acuario se desborde. Además, tanto los peces como los adornos
          reducen directamente los litros disponibles.
        </p>
      </section>

      {/* Requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos del sistema
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Modificar el cálculo de litros (usar 90%)</li>
          <li>Agregar clase Adorno</li>
          <li>Controlar litros antes de agregar elementos</li>
          <li>Calcular litros disponibles correctamente</li>
          <li>Mantener cálculo de comida de peces</li>
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
            Modificar el cálculo de litros al 90%.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crear la clase Adorno.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Permitir agregar adornos al acuario.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Validar que nunca se supere la capacidad de litros disponibles.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 5</p>
            Probar el sistema con distintos escenarios.
          </div>

        </div>
      </section>

    </div>
  );
}