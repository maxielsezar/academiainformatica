export default function CodigoQRPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Código QR y cómo usar QR.io
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Los códigos QR son herramientas digitales que permiten acceder rápidamente
          a información mediante el uso de un celular o dispositivo con cámara.
          Se utilizan ampliamente para compartir enlaces, datos de contacto,
          ubicaciones y mucho más.
        </p>
      </section>

      {/* Definición */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un código QR?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Un código QR (Quick Response) es un tipo de código de barras en forma
          de cuadrado que almacena información. Al escanearlo con la cámara
          de un dispositivo, permite acceder automáticamente a su contenido.
        </p>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué se utiliza?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Acceder a páginas web</li>
          <li>Compartir redes sociales</li>
          <li>Mostrar menús digitales</li>
          <li>Guardar contactos</li>
          <li>Ubicar direcciones en mapas</li>
        </ul>
      </section>

      {/* QR.io */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es QR.io?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          QR.io es una herramienta en línea que permite crear códigos QR de forma
          rápida y sencilla. Ofrece opciones para personalizar el diseño y
          generar códigos para diferentes tipos de contenido.
        </p>
      </section>

      {/* Pasos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo crear un código QR con QR.io?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li><strong>Ingresar al sitio:</strong> abrir QR.io en el navegador.</li>
          <li><strong>Elegir el tipo:</strong> URL, texto, contacto, WiFi, etc.</li>
          <li><strong>Completar la información:</strong> escribir los datos necesarios.</li>
          <li><strong>Personalizar:</strong> cambiar colores, formas o agregar logo.</li>
          <li><strong>Generar el código:</strong> hacer clic en "Generate QR Code".</li>
          <li><strong>Descargar:</strong> guardar la imagen para usarla donde quieras.</li>
        </ul>
      </section>

      {/* Cómo escanear */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Cómo escanear un código QR?
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Abrir la cámara del celular</li>
          <li>Apuntar al código QR</li>
          <li>Tocar la notificación que aparece en pantalla</li>
          <li>Acceder al contenido automáticamente</li>
        </ul>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de los códigos QR
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Acceso rápido a la información</li>
          <li>Fáciles de crear y usar</li>
          <li>Se pueden imprimir o compartir digitalmente</li>
          <li>No requieren escribir enlaces largos</li>
        </ul>
      </section>

      {/* Actividad */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad Práctica
        </h2>

        <div className="border p-6 rounded-xl max-w-3xl">
          <p className="font-semibold mb-2">Actividad</p>
          Creá un código QR utilizando QR.io que dirija a:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Tu página web o red social</li>
            <li>Un video educativo</li>
            <li>Un documento en línea</li>
          </ul>
          Luego:
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li>Descargalo</li>
            <li>Insertalo en un documento de Word</li>
            <li>Probá escanearlo con tu celular</li>
          </ul>
        </div>
      </section>

    </div>
  );
}