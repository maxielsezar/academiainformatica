export default function ConexionesSegurasPage() {
  return (
    <div className="space-y-14">
      {/* Encabezado */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Conexiones Seguras
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Cuando navegamos por Internet, nuestro dispositivo intercambia
          información con diferentes servidores. Esta comunicación puede
          contener datos personales, credenciales de acceso, formularios,
          documentos y otra información que debe ser protegida.
        </p>

        <p className="leading-relaxed max-w-3xl mt-4">
          Una conexión segura utiliza mecanismos que ayudan a proteger la
          información durante la comunicación entre el navegador y el servidor.
          Una de las formas más habituales de identificar este tipo de conexión
          es mediante el protocolo HTTPS.
        </p>
      </section>

      {/* HTTP y HTTPS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          HTTP y HTTPS
        </h2>

        <p className="leading-relaxed max-w-3xl">
          HTTP y HTTPS son protocolos utilizados para la comunicación entre un
          navegador web y un servidor. La principal diferencia es que HTTPS
          incorpora mecanismos de cifrado que ayudan a proteger los datos
          intercambiados.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              HTTP
            </h3>

            <p className="leading-relaxed">
              Es un protocolo utilizado para transferir información entre un
              navegador y un servidor web. No proporciona por sí mismo el
              cifrado de la comunicación.
            </p>

            <p className="mt-4 font-semibold text-gray-700">
              Ejemplo:
            </p>

            <div className="border rounded-lg p-4 mt-2 font-mono text-sm">
              http://ejemplo.com
            </div>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              HTTPS
            </h3>

            <p className="leading-relaxed">
              Es la versión de HTTP que utiliza mecanismos de seguridad para
              proteger la comunicación entre el navegador y el servidor.
            </p>

            <p className="mt-4 font-semibold text-gray-700">
              Ejemplo:
            </p>

            <div className="border rounded-lg p-4 mt-2 font-mono text-sm">
              https://ejemplo.com
            </div>
          </div>
        </div>
      </section>

      {/* Cifrado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué significa que una conexión esté cifrada?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          El cifrado transforma la información de manera que no pueda ser
          interpretada fácilmente por una persona que intente interceptarla
          durante la comunicación.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Supongamos que una persona ingresa sus datos en un formulario de
            acceso. La información viaja desde el navegador hasta el servidor.
            Cuando se utiliza una conexión HTTPS, la comunicación se encuentra
            protegida mediante mecanismos de cifrado.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6 text-center">
            <div className="border rounded-lg p-4">
              <p className="font-semibold text-blue-900">
                Usuario
              </p>
              <p className="text-sm mt-2">
                Ingresa información
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-semibold text-blue-900">
                Comunicación segura
              </p>
              <p className="text-sm mt-2">
                Datos protegidos durante el intercambio
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="font-semibold text-blue-900">
                Servidor
              </p>
              <p className="text-sm mt-2">
                Recibe la información
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Candado */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          El candado del navegador
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Los navegadores modernos suelen mostrar indicadores de seguridad
          junto a la dirección del sitio. Uno de ellos puede ser el símbolo de
          un candado cuando la conexión utiliza HTTPS.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            ¿Qué nos indica?
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Que la comunicación utiliza HTTPS.</li>
            <li>Que existe una conexión cifrada con el sitio.</li>
            <li>Que el navegador pudo establecer una conexión segura.</li>
            <li>
              Que podemos consultar información relacionada con el certificado
              del sitio desde el navegador.
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl mt-6">
          <p className="leading-relaxed">
            <strong>Importante:</strong> HTTPS protege la comunicación, pero no
            significa automáticamente que el sitio sea confiable. También es
            necesario verificar el dominio, el contenido y la legitimidad del
            sitio.
          </p>
        </div>
      </section>

      {/* Certificados */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Certificados digitales
        </h2>

        <p className="leading-relaxed max-w-3xl">
          HTTPS utiliza certificados digitales para ayudar a establecer una
          comunicación segura entre el navegador y el servidor. Estos
          certificados contienen información relacionada con la identidad del
          sitio y permiten establecer una conexión protegida.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            El navegador puede comprobar aspectos como:
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>La validez del certificado.</li>
            <li>El dominio para el cual fue emitido.</li>
            <li>La autoridad que emitió el certificado.</li>
            <li>Si existe algún problema con el certificado.</li>
          </ul>
        </div>
      </section>

      {/* Qué revisar */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué debemos revisar antes de ingresar información?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Antes de ingresar contraseñas, datos personales o información
          administrativa, es recomendable verificar diferentes elementos del
          sitio.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              1. Dirección web
            </h3>

            <p className="leading-relaxed">
              Comprobar que la dirección corresponda al sitio que realmente
              queremos utilizar.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              2. HTTPS
            </h3>

            <p className="leading-relaxed">
              Verificar que la comunicación utilice HTTPS cuando se requiere
              transmitir información.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              3. Dominio
            </h3>

            <p className="leading-relaxed">
              Revisar cuidadosamente el dominio para detectar modificaciones,
              errores o sitios que intentan hacerse pasar por otros.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-3">
              4. Contenido
            </h3>

            <p className="leading-relaxed">
              Analizar si el contenido, los mensajes y las solicitudes del
              sitio son coherentes.
            </p>
          </div>
        </div>
      </section>

      {/* Redes públicas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conexiones en redes públicas
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Las redes Wi-Fi públicas, como las disponibles en determinados
          espacios comerciales o públicos, requieren especial atención. No
          siempre podemos conocer quién administra la red o quiénes están
          conectados a ella.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Recomendaciones
          </h3>

          <ul className="list-disc list-inside space-y-3">
            <li>Evitar realizar operaciones sensibles en redes desconocidas.</li>
            <li>Utilizar conexiones protegidas cuando sea posible.</li>
            <li>Verificar siempre HTTPS al utilizar servicios web.</li>
            <li>No compartir información confidencial innecesariamente.</li>
            <li>Desconectarse de redes públicas cuando ya no sean necesarias.</li>
          </ul>
        </div>
      </section>

      {/* Conexión segura no significa sitio seguro */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Conexión segura no significa sitio confiable
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Es importante diferenciar entre una conexión segura y un sitio
          legítimo. HTTPS protege la comunicación entre el navegador y el
          servidor, pero un sitio malicioso también puede utilizar HTTPS.
        </p>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl mt-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Recordá
          </h3>

          <p className="leading-relaxed">
            <strong>HTTPS + dominio correcto + sitio confiable</strong> son
            elementos que deben analizarse en conjunto antes de proporcionar
            información.
          </p>
        </div>
      </section>

      {/* Aplicación laboral */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación en el ámbito laboral
        </h2>

        <p className="leading-relaxed max-w-3xl">
          En una oficina administrativa es habitual utilizar sistemas web para
          consultar información, cargar datos, enviar formularios o acceder a
          plataformas institucionales.
        </p>

        <div className="border rounded-xl p-6 mt-6">
          <h3 className="font-bold text-blue-900 mb-4">
            Ejemplo
          </h3>

          <p className="leading-relaxed">
            Un empleado necesita ingresar a una plataforma administrativa para
            consultar información de una organización. Antes de introducir su
            usuario y contraseña debe comprobar que está accediendo al sitio
            correcto, revisar la dirección web y verificar que la comunicación
            utilice HTTPS.
          </p>
        </div>
      </section>

      {/* Actividad */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Analizando conexiones
          </h3>

          <p className="leading-relaxed">
            Analizá las siguientes direcciones y determiná qué elementos
            deberías revisar antes de ingresar información.
          </p>

          <div className="space-y-4 mt-6">
            <div className="border rounded-lg p-4 font-mono text-sm break-all">
              https://www.ejemplo.com
            </div>

            <div className="border rounded-lg p-4 font-mono text-sm break-all">
              http://www.ejemplo.com
            </div>

            <div className="border rounded-lg p-4 font-mono text-sm break-all">
              https://www.banco-ejemplo.com
            </div>
          </div>

          <p className="leading-relaxed mt-6">
            Para cada caso, respondé:
          </p>

          <ol className="list-decimal list-inside space-y-3 mt-4">
            <li>¿Utiliza HTTPS?</li>
            <li>¿Qué dominio aparece?</li>
            <li>¿Qué información adicional verificarías?</li>
            <li>¿Ingresarías información personal? ¿Por qué?</li>
          </ol>
        </div>
      </section>

      {/* Desafío integrador */}
      <section className="border-l-4 border-blue-700 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Desafío Integrador
        </h2>

        <p className="leading-relaxed">
          Elaborá una guía breve titulada{" "}
          <strong>“Cómo reconocer una conexión segura”</strong>.
        </p>

        <p className="leading-relaxed mt-4">
          La guía deberá incluir al menos:
        </p>

        <ul className="list-disc list-inside space-y-3 mt-4">
          <li>La diferencia entre HTTP y HTTPS.</li>
          <li>El significado del cifrado.</li>
          <li>La función del certificado digital.</li>
          <li>Qué información observar en la barra de direcciones.</li>
          <li>Por qué HTTPS no garantiza por sí solo que un sitio sea legítimo.</li>
          <li>Recomendaciones para trabajar de manera segura.</li>
        </ul>
      </section>
    </div>
  );
}