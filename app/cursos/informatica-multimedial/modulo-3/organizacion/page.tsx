export default function OrganizacionInformacionPage() {
  return (
    <div className="space-y-14">

       <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Organización de la Información
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Organizar la información permite comprender mejor los contenidos
          y facilita su estudio.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Métodos de organización
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <strong>Resumen:</strong> sintetizar ideas principales.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Cuadro comparativo:</strong> comparar conceptos.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Mapa conceptual:</strong> organizar ideas visualmente.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Lista de ideas:</strong> ordenar información en puntos.
          </div>

        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Realizar un resumen de un texto encontrado en internet.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Crear un cuadro comparativo sobre dos temas.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Diseñar un mapa conceptual con la información investigada.
          </div>

        </div>
      </section>

    </div>
  );
}