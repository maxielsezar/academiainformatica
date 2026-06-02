import Link from "next/link";

export default function Modulo4Home() {
  return (
    <main className="space-y-16">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Módulo 4: Recursos de la WEB
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En este módulo el estudiante aprenderá a utilizar Internet como una
          herramienta de comunicación, colaboración e intercambio de información.
          Se trabajará con servicios web, almacenamiento en la nube, correo
          electrónico, formularios online y herramientas colaborativas.
        </p>
      </section>

      {/* Capacidades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Capacidades que Desarrolla
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Navegar de forma segura por Internet.</li>
          <li>Utilizar servicios de almacenamiento en la nube.</li>
          <li>Compartir y transferir archivos.</li>
          <li>Gestionar correos electrónicos.</li>
          <li>Trabajar colaborativamente en línea.</li>
          <li>Crear y responder formularios web.</li>
          <li>Aplicar buenas prácticas de seguridad digital.</li>
        </ul>
      </section>

      {/* Contenidos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Contenidos del Módulo
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Introducción a Internet y la Web.</li>
          <li>Navegadores web y motores de búsqueda.</li>
          <li>Búsquedas eficientes de información.</li>
          <li>Correo electrónico.</li>
          <li>Adjuntar y descargar archivos.</li>
          <li>Almacenamiento en la nube.</li>
          <li>Google Drive y OneDrive.</li>
          <li>Compartir documentos y carpetas.</li>
          <li>Trabajo colaborativo online.</li>
          <li>Formularios web.</li>
          <li>Videoconferencias y reuniones virtuales.</li>
          <li>Seguridad y privacidad en Internet.</li>
        </ul>
      </section>

      {/* Aplicaciones */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicaciones Prácticas
        </h2>

        <div className="border p-6 rounded-xl space-y-3 max-w-3xl">
          <p>Estos conocimientos son utilizados para:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Enviar documentación digital.</li>
            <li>Compartir archivos con equipos de trabajo.</li>
            <li>Gestionar información en la nube.</li>
            <li>Participar en reuniones virtuales.</li>
            <li>Realizar trámites online.</li>
            <li>Trabajar colaborativamente desde cualquier lugar.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-6">
        <Link
          href="/cursos/operador-pc/modulo-4/internet"
          className="inline-block bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition"
        >
          Comenzar el Módulo →
        </Link>
      </section>

    </main>
  );
}