export default function DocumentoAdministrativoPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Creación de un Documento Administrativo
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Un documento administrativo es un escrito formal utilizado en ámbitos
          laborales, educativos o institucionales para comunicar información de
          manera clara, ordenada y profesional.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un documento administrativo?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es un tipo de documento que se utiliza para transmitir información
          oficial, como notas, informes, solicitudes o memorandos. Se caracteriza
          por su lenguaje formal y su estructura organizada.
        </p>
      </section>

      {/* Estructura */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Estructura básica
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Encabezado:</strong> incluye fecha, lugar y datos del emisor.</li>
          <li><strong>Destinatario:</strong> persona o institución a la que se dirige.</li>
          <li><strong>Asunto:</strong> resumen breve del contenido.</li>
          <li><strong>Cuerpo:</strong> desarrollo del mensaje.</li>
          <li><strong>Cierre:</strong> despedida formal.</li>
          <li><strong>Firma:</strong> nombre y cargo del remitente.</li>
        </ul>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pasos para crear un documento
        </h2>

        <div className="space-y-6 max-w-3xl">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 1</p>
            Definir el objetivo del documento.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 2</p>
            Identificar al destinatario.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 3</p>
            Redactar el contenido con lenguaje formal y claro.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Paso 4</p>
            Revisar ortografía y formato.
          </div>

        </div>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de documento
        </h2>

        <div className="bg-gray-900 text-white p-4 rounded-xl overflow-x-auto text-sm">
{`Lomas de Zamora, 10 de abril de 2026

A quien corresponda:

Por medio de la presente, me dirijo a usted con el fin de solicitar
la inscripción al curso de informática.

Sin otro particular, saludo atentamente.

Juan Pérez
Alumno`}
        </div>
      </section>

      {/* Importancia */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Importancia
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los documentos administrativos son fundamentales para la comunicación
          formal, ya que permiten transmitir información de manera clara,
          organizada y profesional en distintos ámbitos.
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
            Redactá un documento administrativo solicitando información.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Identificá las partes del documento en el ejemplo dado.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Corregí un documento con errores de redacción.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 4</p>
            Creá un documento formal para una situación laboral.
          </div>

        </div>
      </section>

    </div>
  );
}