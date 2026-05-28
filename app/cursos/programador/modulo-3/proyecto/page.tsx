import CodeBlock from "@/app/components/CodeBlock";

export default function ProyectoAgilVentasPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Proyecto Integrador: Sistema de Ventas para Comercio
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta actividad se desarrollará un sistema de ventas para un comercio
          aplicando metodologías ágiles como Scrum, trabajo colaborativo con Git
          y organización de tareas utilizando Jira.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo del proyecto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El objetivo es simular el trabajo de un equipo de desarrollo real,
          organizando tareas, utilizando ramas en Git y desarrollando el sistema
          en pequeños sprints.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          El sistema permitirá:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4 max-w-3xl">
          <li>Registrar productos.</li>
          <li>Realizar ventas.</li>
          <li>Gestionar clientes.</li>
          <li>Calcular totales.</li>
          <li>Controlar stock.</li>
          <li>Administrar proveedores.</li>
          <li>Gestionar movimientos de caja.</li>
        </ul>
      </section>

      {/* Tecnologías */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Herramientas utilizadas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Java para el desarrollo del sistema.</li>
          <li>Git y GitHub para control de versiones.</li>
          <li>Jira para organizar tareas.</li>
          <li>Scrum como metodología ágil.</li>
        </ul>
      </section>

      {/* Navegación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Navegación del sistema
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El sistema contará con un menú de navegación que permitirá acceder a
          las distintas secciones del comercio.
        </p>

        <CodeBlock
          code={`MENÚ PRINCIPAL

- Inicio
- Ventas
- Productos
- Stock
- Caja
- Clientes
- Proveedores
- Reportes
- Configuración`}
        />
      </section>

      {/* Equipo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización del equipo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cada integrante del grupo tendrá responsabilidades específicas dentro
          del proyecto.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-blue-100">
              <tr>
                <th className="border p-3">Rol</th>
                <th className="border p-3">Responsabilidad</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Scrum Master</td>
                <td className="border p-3">
                  Coordinar el trabajo del equipo
                </td>
              </tr>

              <tr>
                <td className="border p-3">Desarrollador Frontend</td>
                <td className="border p-3">
                  Diseñar interfaces y pantallas
                </td>
              </tr>

              <tr>
                <td className="border p-3">Desarrollador Backend</td>
                <td className="border p-3">
                  Programar lógica y funcionalidades
                </td>
              </tr>

              <tr>
                <td className="border p-3">Tester</td>
                <td className="border p-3">
                  Probar el sistema y detectar errores
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Requerimientos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requerimientos del sistema
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Gestión de productos
            </h3>

            <p>
              El sistema debe permitir agregar, editar y eliminar productos.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Registro de ventas
            </h3>

            <p>
              Debe registrar ventas mostrando productos, cantidades y total.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Gestión de clientes
            </h3>

            <p>
              El comercio podrá almacenar información de clientes frecuentes.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Control de stock
            </h3>

            <p>
              El sistema debe actualizar automáticamente el stock disponible.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Gestión de proveedores
            </h3>

            <p>
              Permitirá registrar proveedores, teléfonos, direcciones y productos
              asociados.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">
              Gestión de caja
            </h3>

            <p>
              El sistema deberá registrar ingresos, egresos y cierres diarios
              de caja.
            </p>
          </div>

        </div>
      </section>

      {/* Scrum */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación de Scrum en el proyecto
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El desarrollo se dividirá en pequeños sprints donde cada integrante
          realizará tareas específicas.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Ejemplo de sprint:
        </p>

        <CodeBlock
          code={`SPRINT 1

- Crear estructura del proyecto
- Diseñar pantalla principal
- Programar clase Producto
- Crear registro de ventas
- Configurar repositorio GitHub

SPRINT 2

- Crear módulo de stock
- Programar sistema de caja
- Crear pantalla de proveedores
- Integrar navegación del sistema`}
        />
      </section>

      {/* Jira */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Organización de tareas con Jira
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Todas las tareas del proyecto se registrarán en Jira para controlar
          el avance del equipo.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr>
                <th className="border p-3">Tarea</th>
                <th className="border p-3">Responsable</th>
                <th className="border p-3">Estado</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Pantalla de ventas</td>
                <td className="border p-3">Frontend</td>
                <td className="border p-3">In Progress</td>
              </tr>

              <tr>
                <td className="border p-3">Sistema de stock</td>
                <td className="border p-3">Backend</td>
                <td className="border p-3">To Do</td>
              </tr>

              <tr>
                <td className="border p-3">Pruebas de caja</td>
                <td className="border p-3">Tester</td>
                <td className="border p-3">Done</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Git */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Trabajo colaborativo con Git
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Cada integrante trabajará en ramas diferentes para evitar conflictos
          en el proyecto.
        </p>

        <CodeBlock
          code={`# Crear una nueva rama
git checkout -b stock

# Guardar cambios
git add .
git commit -m "Se agrega módulo de stock"

# Subir cambios
git push origin stock`}
        />
      </section>

      {/* Caja */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de gestión de caja
        </h2>

        <CodeBlock
          code={`public class Caja {

    private double saldo;

    public void ingresarDinero(double monto) {
        saldo += monto;
    }

    public void retirarDinero(double monto) {
        saldo -= monto;
    }

    public void mostrarSaldo() {
        System.out.println("Saldo actual: $" + saldo);
    }
}`}
        />
      </section>

      {/* Stock */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de control de stock
        </h2>

        <CodeBlock
          code={`public class Producto {

    private String nombre;
    private int stock;

    public Producto(String nombre, int stock) {
        this.nombre = nombre;
        this.stock = stock;
    }

    public void venderProducto(int cantidad) {
        stock -= cantidad;
    }

    public void mostrarStock() {
        System.out.println("Stock disponible: " + stock);
    }
}`}
        />
      </section>

      {/* Proveedores */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de gestión de proveedores
        </h2>

        <CodeBlock
          code={`public class Proveedor {

    private String nombre;
    private String telefono;

    public Proveedor(String nombre, String telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public void mostrarProveedor() {
        System.out.println(nombre + " - " + telefono);
    }
}`}
        />
      </section>

      {/* Flujo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Flujo de desarrollo del proyecto
        </h2>

        <ol className="list-decimal list-inside space-y-3 max-w-3xl">
          <li>Planificar funcionalidades.</li>
          <li>Crear tareas en Jira.</li>
          <li>Asignar tareas al equipo.</li>
          <li>Desarrollar funcionalidades en ramas.</li>
          <li>Realizar commits frecuentes.</li>
          <li>Subir cambios a GitHub.</li>
          <li>Probar el sistema.</li>
          <li>Integrar funcionalidades finales.</li>
        </ol>
      </section>

      {/* Buenas prácticas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Buenas prácticas del proyecto
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Trabajar siempre con ramas.</li>
          <li>Realizar commits descriptivos.</li>
          <li>Actualizar tareas en Jira.</li>
          <li>Probar el código antes de integrarlo.</li>
          <li>Comunicar avances diariamente.</li>
        </ul>
      </section>

      {/* Competencias */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Competencias desarrolladas
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Trabajo colaborativo.</li>
          <li>Uso de metodologías ágiles.</li>
          <li>Control de versiones con Git.</li>
          <li>Organización de proyectos.</li>
          <li>Desarrollo de software real.</li>
          <li>Gestión de sistemas comerciales.</li>
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
            Diseñá las pantallas principales del sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Creá un tablero Jira con tareas para el equipo.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Programá una clase Java relacionada al sistema.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
             realiza un sprint utilizando Scrum.
          </div>

        </div>
      </section>

    </div>
  );
}