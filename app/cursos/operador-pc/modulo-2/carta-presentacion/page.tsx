export default function CartaPresentacionPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Cómo crear una carta de presentación
        </h1>

        <p className="leading-relaxed max-w-3xl">
          Una carta de presentación es un documento que acompaña al currículum y
          tiene como objetivo destacar quién sos, por qué te interesa el puesto
          y qué podés aportar. Es una oportunidad para mostrar tu personalidad
          y diferenciarte de otros candidatos.
        </p>
      </section>

      {/* Paso 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 1: Encabezado
        </h2>

        <div className="border p-6 rounded-xl">
          El encabezado incluye tus datos personales y los del destinatario.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Nombre y apellido</li>
          <li>Teléfono y correo electrónico</li>
          <li>Fecha</li>
          <li>Nombre de la empresa o persona destinataria</li>
        </ul>
      </section>

      {/* Paso 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 2: Saludo inicial
        </h2>

        <div className="border p-6 rounded-xl">
          Comenzá con un saludo formal y respetuoso.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Estimado/a Sr./Sra.</li>
          <li>A quien corresponda</li>
        </ul>
      </section>

      {/* Paso 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 3: Presentación
        </h2>

        <div className="border p-6 rounded-xl">
          En el primer párrafo debés explicar quién sos y el motivo de la carta.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Quién sos</li>
          <li>A qué puesto aplicás</li>
          <li>Cómo te enteraste de la oportunidad</li>
        </ul>
      </section>

      {/* Paso 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 4: Desarrollo
        </h2>

        <div className="border p-6 rounded-xl">
          Destacá tus habilidades, experiencias y cualidades más importantes.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Relacionar tu perfil con el puesto</li>
          <li>Mencionar logros o experiencias</li>
          <li>Mostrar motivación e interés</li>
        </ul>
      </section>

      {/* Paso 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 5: Cierre
        </h2>

        <div className="border p-6 rounded-xl">
          Finalizá la carta agradeciendo y dejando abierta la posibilidad de contacto.
        </div>

        <ul className="list-disc list-inside space-y-3 mt-6">
          <li>Agradecer el tiempo y la consideración</li>
          <li>Mostrar disponibilidad para una entrevista</li>
          <li>Despedida formal</li>
        </ul>
      </section>

      {/* Ejemplo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de carta de presentación
        </h2>

        <div className="border p-6 rounded-xl space-y-6">

          <div>
            <p className="text-xl font-bold">Juan Pérez</p>
            <p>juanperez@email.com | +54 11 1234 5678</p>
          </div>

          <div>
            <p>Fecha: 10 de abril de 2026</p>
          </div>

          <div>
            <p>A quien corresponda:</p>
          </div>

          <div>
            <p className="mt-2">
              Me dirijo a usted con el fin de postularme al puesto ofrecido.
              Me interesa formar parte de su equipo, ya que considero que mis
              habilidades y mi compromiso pueden aportar valor a la organización.
            </p>
          </div>

          <div>
            <p className="mt-2">
              Cuento con experiencia en tareas relacionadas al área, donde he
              desarrollado responsabilidad, trabajo en equipo y capacidad de
              adaptación. Me destaco por mi iniciativa y predisposición para
              aprender y mejorar continuamente.
            </p>
          </div>

          <div>
            <p className="mt-2">
              Agradezco su tiempo y consideración. Quedo a disposición para ampliar
              la información en una entrevista.
            </p>
          </div>

          <div>
            <p className="mt-2">Atentamente,</p>
            <p>Juan Pérez</p>
          </div>

        </div>
      </section>

      {/* Buena vs mala */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Carta buena vs carta mala
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-4 text-green-700">✔ Carta Buena</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Clara y ordenada</li>
              <li>Personalizada</li>
              <li>Sin errores ortográficos</li>
              <li>Breve y directa</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-4 text-red-700">✘ Carta Mala</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Genérica</li>
              <li>Demasiado larga</li>
              <li>Con errores</li>
              <li>Sin interés claro</li>
            </ul>
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
            Escribir un saludo y un párrafo de presentación.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Redactar un párrafo destacando tus habilidades.
          </div>

          <div className="border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Completar una carta con tus datos reales.
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Crear una carta de presentación completa adaptada a un trabajo real,
          cuidando la redacción, la ortografía y la claridad del mensaje.
        </div>
      </section>

    </div>
  );
}