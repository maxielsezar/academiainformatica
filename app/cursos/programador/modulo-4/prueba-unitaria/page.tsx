import CodeBlock from "@/app/components/CodeBlock";

export default function PruebasUnitariasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Pruebas Unitarias con JUnit e IntelliJ IDEA
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Las pruebas unitarias permiten verificar que una pequeña parte del
          sistema funcione correctamente de manera independiente. Generalmente
          se prueba un método o una funcionalidad específica de una clase.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          En el sistema de ventas, las pruebas unitarias nos ayudarán a comprobar
          que los cálculos, validaciones y comportamientos de las clases funcionen
          correctamente antes de que el software sea utilizado por los usuarios.
        </p>
      </section>

      {/* Qué es */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es una Prueba Unitaria?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Una prueba unitaria es un programa que ejecuta automáticamente un método
          y compara el resultado obtenido con el resultado esperado.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Si ambos resultados coinciden, la prueba se considera exitosa. Si no
          coinciden, la prueba falla y se detecta un posible error en el código.
        </p>
      </section>

      {/* Beneficios */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Beneficios de las Pruebas Unitarias
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Detectan errores rápidamente.</li>
          <li>Reducen el tiempo de depuración.</li>
          <li>Facilitan la refactorización.</li>
          <li>Mejoran la calidad del software.</li>
          <li>Permiten automatizar verificaciones.</li>
          <li>Documentan el comportamiento esperado del sistema.</li>
        </ul>
      </section>

      {/* JUnit */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es JUnit?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          JUnit es el framework de pruebas más utilizado en Java. Permite crear,
          ejecutar y automatizar pruebas unitarias de forma sencilla.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          IntelliJ IDEA posee integración nativa con JUnit, por lo que podemos
          crear y ejecutar pruebas directamente desde el IDE.
        </p>
      </section>

      {/* Instalación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Agregar JUnit en IntelliJ
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Crear o abrir el proyecto Java.</li>
          <li>Hacer clic derecho sobre la carpeta del proyecto.</li>
          <li>Seleccionar <strong>Open Module Settings</strong>.</li>
          <li>Ir a la sección <strong>Libraries</strong>.</li>
          <li>Agregar la dependencia de JUnit.</li>
          <li>También puede agregarse automáticamente al crear una prueba.</li>
        </ol>
      </section>

      {/* Crear prueba */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Crear una Clase de Prueba
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Seleccionar la clase que se desea probar.</li>
          <li>Presionar <strong>Alt + Enter</strong>.</li>
          <li>Seleccionar <strong>Create Test</strong>.</li>
          <li>Elegir JUnit 5.</li>
          <li>Seleccionar los métodos a probar.</li>
          <li>IntelliJ generará automáticamente la clase de prueba.</li>
        </ol>
      </section>

      {/* Clase ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Clase del Sistema de Ventas
        </h2>

        <CodeBlock
          code={`public class Producto {

    private String nombre;
    private double precio;

    public Producto(
            String nombre,
            double precio
    ) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public double getPrecio() {
        return precio;
    }
}`}
        />
      </section>

      {/* Test ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Primera Prueba Unitaria
        </h2>

        <CodeBlock
          code={`import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ProductoTest {

    @Test
    void verificarPrecio() {

        Producto producto =
            new Producto(
                "Mouse",
                5000
            );

        assertEquals(
            5000,
            producto.getPrecio()
        );
    }
}`}
        />
      </section>

      {/* Assert */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es assertEquals?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un assertion (afirmación) compara un resultado esperado con un resultado
          real. Si son iguales, la prueba pasa. Si son diferentes, la prueba falla.
        </p>

        <CodeBlock
          code={`assertEquals(
    valorEsperado,
    valorObtenido
);`}
        />
      </section>

      {/* Assertions */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Assertions más utilizadas
        </h2>

        <div className="overflow-x-auto">
          <table className="border-collapse border">
            <thead>
              <tr className="">
                <th className="border p-3">Método</th>
                <th className="border p-3">Uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">assertEquals()</td>
                <td className="border p-3">Comparar valores.</td>
              </tr>
              <tr>
                <td className="border p-3">assertTrue()</td>
                <td className="border p-3">Verificar verdadero.</td>
              </tr>
              <tr>
                <td className="border p-3">assertFalse()</td>
                <td className="border p-3">Verificar falso.</td>
              </tr>
              <tr>
                <td className="border p-3">assertNull()</td>
                <td className="border p-3">Verificar null.</td>
              </tr>
              <tr>
                <td className="border p-3">assertNotNull()</td>
                <td className="border p-3">Verificar que existe.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Venta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo: Probar el Cálculo de Subtotal
        </h2>

        <CodeBlock
          code={`public class DetalleVenta {

    private int cantidad;
    private double precio;

    public DetalleVenta(
            int cantidad,
            double precio
    ) {
        this.cantidad = cantidad;
        this.precio = precio;
    }

    public double calcularSubtotal() {
        return cantidad * precio;
    }
}`}
        />
      </section>

      {/* Test subtotal */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Prueba del Subtotal
        </h2>

        <CodeBlock
          code={`@Test
void calcularSubtotal() {

    DetalleVenta detalle =
        new DetalleVenta(
            3,
            1000
        );

    assertEquals(
        3000,
        detalle.calcularSubtotal()
    );
}`}
        />
      </section>

      {/* Ejecutar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejecutar las Pruebas en IntelliJ
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Hacer clic derecho sobre la clase de prueba.</li>
          <li>Seleccionar <strong>Run Tests</strong>.</li>
          <li>Esperar la ejecución.</li>
          <li>Revisar los resultados.</li>
        </ol>

        <div className="border rounded-xl p-6 max-w-3xl mt-6">
          <p>
            🟢 Verde: todas las pruebas pasaron correctamente.
          </p>

          <p className="mt-3">
            🔴 Rojo: una o más pruebas fallaron.
          </p>
        </div>
      </section>

      {/* Qué probar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué deberíamos probar en el Sistema de Ventas?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Creación de productos.</li>
          <li>Precios válidos.</li>
          <li>Cálculo de subtotales.</li>
          <li>Cálculo de totales.</li>
          <li>Cantidad de productos.</li>
          <li>Registro de clientes.</li>
          <li>Validaciones de datos.</li>
          <li>Manejo de errores.</li>
        </ul>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas Prácticas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Crear una prueba por funcionalidad.</li>
          <li>Utilizar nombres descriptivos.</li>
          <li>Probar escenarios válidos e inválidos.</li>
          <li>No depender de datos externos.</li>
          <li>Ejecutar las pruebas frecuentemente.</li>
          <li>Actualizar las pruebas cuando cambie el código.</li>
        </ul>
      </section>

      {/* Actividades */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 1
            </p>

            Crear una prueba para verificar el precio de un producto.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 2
            </p>

            Crear una prueba para verificar el cálculo de subtotal.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 3
            </p>

            Crear una prueba para verificar el total de una venta.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 4
            </p>

            Crear una prueba que valide que un cliente fue creado correctamente.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">
              Actividad 5
            </p>

            Ejecutar todas las pruebas y documentar los resultados obtenidos.
          </div>

        </div>
      </section>

    </div>
  );
}