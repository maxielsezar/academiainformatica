export default function CrearCVPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Cómo crear un CV moderno
        </h1>

        <p className=" leading-relaxed max-w-3xl">
          Un currículum vitae (CV) es un documento que resume tu experiencia,
          educación y habilidades. Es la primera impresión que una empresa tiene
          de vos, por lo que debe ser claro, ordenado y adaptado al puesto al que aplicás.
        </p>
      </section>

      {/* Paso 1 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 1: Definir el objetivo
        </h2>

        <div className=" border p-6 rounded-xl ">
          Antes de empezar, es importante tener claro a qué tipo de trabajo querés postularte.
          Esto te ayudará a adaptar tu CV y hacerlo más relevante.
        </div>

        <ul className="list-disc list-inside space-y-3  mt-6">
          <li>Elegir el puesto al que aplicás</li>
          <li>Identificar el área (tecnología, administración, etc.)</li>
          <li>Definir tu nivel (inicial, intermedio o avanzado)</li>
        </ul>
      </section>

      {/* Paso 2 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 2: Estructura del CV
        </h2>

        <div className=" border p-6 rounded-xl ">
          Un CV moderno debe tener una estructura clara y fácil de leer.
        </div>

        <ul className="list-disc list-inside space-y-3  mt-6">
          <li>Datos personales</li>
          <li>Perfil profesional</li>
          <li>Experiencia laboral</li>
          <li>Educación</li>
          <li>Habilidades</li>
        </ul>
      </section>

      {/* Paso 3 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 3: Redactar la experiencia
        </h2>

        <div className=" border p-6 rounded-xl ">
          Es una de las secciones más importantes. No solo describas tareas,
          destacá logros y resultados concretos.
        </div>

        <ul className="list-disc list-inside space-y-3  mt-6">
          <li>Usar verbos de acción (desarrollé, mejoré, implementé)</li>
          <li>Incluir resultados medibles</li>
          <li>Ordenar de lo más reciente a lo más antiguo</li>
        </ul>
      </section>

      {/* Paso 4 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 4: Darle un formato actual
        </h2>

        <div className=" border p-6 rounded-xl ">
          El diseño debe ser limpio, profesional y fácil de leer tanto para personas
          como para sistemas automáticos.
        </div>

        <ul className="list-disc list-inside space-y-3  mt-6">
          <li>Usar tipografías simples (Arial, Calibri)</li>
          <li>Evitar exceso de colores</li>
          <li>Mantener una estructura clara</li>
          <li>Limitar a 1 o 2 páginas</li>
        </ul>
      </section>

      {/* Paso 5 */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Paso 5: Optimización para buscadores (ATS)
        </h2>

        <div className=" border p-6 rounded-xl ">
          Muchas empresas usan sistemas automáticos (ATS) para filtrar CVs.
          Por eso es importante optimizar tu documento.
        </div>

        <ul className="list-disc list-inside space-y-3  mt-6">
          <li>Incluir palabras clave del aviso laboral</li>
          <li>Usar títulos claros como “Experiencia” o “Educación”</li>
          <li>Evitar gráficos o diseños complejos</li>
          <li>Guardar el archivo en PDF o Word</li>
        </ul>
      </section>

      {/* Ejemplo visual */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ejemplo de CV
        </h2>

        <div className=" border p-6 rounded-xl space-y-6">

          <div>
            <p className="text-xl font-bold">Juan Pérez</p>
            <p>juanperez@email.com | +54 11 1234 5678 | Buenos Aires, Argentina</p>
          </div>

          <div>
            <p className="font-semibold">Perfil Profesional</p>
            <p className="mt-2">
              Estudiante de informática con conocimientos en desarrollo web y
              manejo de bases de datos.
            </p>
          </div>

          <div>
            <p className="font-semibold">Experiencia</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Desarrollé una página web para un emprendimiento local</li>
              <li>Mejoré la organización de datos utilizando Excel</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Educación</p>
            <p className="mt-2">
              Secundario completo - Orientación en Informática
            </p>
          </div>

          <div>
            <p className="font-semibold">Habilidades</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>HTML y CSS</li>
              <li>Excel</li>
              <li>Trabajo en equipo</li>
              <li>Comunicación</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CV bueno vs malo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          CV bueno vs CV malo
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl ">
            <p className="font-semibold mb-4 text-green-700">✔ CV Bueno</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Claro y ordenado</li>
              <li>Adaptado al puesto</li>
              <li>Sin errores ortográficos</li>
              <li>Incluye logros y resultados</li>
              <li>Fácil de leer</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl ">
            <p className="font-semibold mb-4 text-red-700">✘ CV Malo</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Desordenado o difícil de leer</li>
              <li>Información irrelevante</li>
              <li>Errores de ortografía</li>
              <li>Solo lista tareas, sin logros</li>
              <li>No está adaptado al puesto</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Foto sí o no */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Incluir foto en el CV?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl ">
            <p className="font-semibold mb-4">✔ Cuándo incluir foto</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Si la empresa lo solicita</li>
              <li>Trabajos de atención al público</li>
              <li>Perfiles comerciales o de imagen</li>
            </ul>
          </div>

          <div className="border p-6 rounded-xl ">
            <p className="font-semibold mb-4">✘ Cuándo NO incluir foto</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Si no es requerida</li>
              <li>En trabajos técnicos o IT</li>
              <li>Para evitar posibles sesgos</li>
            </ul>
          </div>

        </div>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl mt-6 ">
          Recomendación: si decidís incluir una foto, debe ser profesional,
          con fondo neutro, buena iluminación y vestimenta adecuada.
        </div>
      </section>

      {/* Actividades */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades Prácticas
        </h2>

        <div className="space-y-6 ">

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 1</p>
            Escribir tus datos personales y crear un perfil profesional de 3 líneas.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 2</p>
            Listar al menos dos experiencias laborales o proyectos con logros.
          </div>

          <div className=" border p-6 rounded-xl">
            <p className="font-semibold mb-2">Actividad 3</p>
            Identificar 5 habilidades propias (técnicas y blandas).
          </div>

        </div>
      </section>

      {/* Desafío */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Desafío Integrador
        </h2>

        <div className="border-l-4 border-blue-700 p-6 rounded-xl ">
          Crear un CV completo en formato PDF adaptado a un trabajo real que te interese,
          utilizando palabras clave del aviso laboral y aplicando un diseño claro y profesional.
        </div>
      </section>

    </div>
  );
}