export default function CanvaPage() {
  return (
    <div className="space-y-12">

      {/* Encabezado */}
      <section>
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Canva: Diseño Gráfico para la Web
        </h1>

        <p className="text-lg leading-relaxed max-w-3xl">
          Canva es una herramienta de diseño gráfico online que permite crear
          imágenes, presentaciones, publicaciones para redes sociales, videos,
          infografías y otros recursos visuales de manera sencilla y profesional.
          Gracias a su interfaz intuitiva, cualquier usuario puede diseñar
          contenido atractivo sin necesidad de conocimientos avanzados de diseño.
        </p>
      </section>

      {/* ¿Qué es Canva? */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es Canva?
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Canva es una plataforma de diseño gráfico basada en la nube que ofrece
          miles de plantillas, imágenes, iconos, tipografías y recursos
          multimedia para crear contenido visual. Es ampliamente utilizada por
          estudiantes, docentes, empresas y creadores de contenido para producir
          materiales digitales de forma rápida y eficiente.
        </p>
      </section>

      {/* Usos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Para qué se utiliza?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl">
            Crear presentaciones profesionales.
          </div>

          <div className="border p-6 rounded-xl">
            Diseñar publicaciones para redes sociales.
          </div>

          <div className="border p-6 rounded-xl">
            Elaborar afiches y folletos publicitarios.
          </div>

          <div className="border p-6 rounded-xl">
            Diseñar logotipos y material de marca.
          </div>

          <div className="border p-6 rounded-xl">
            Crear videos y animaciones simples.
          </div>

          <div className="border p-6 rounded-xl">
            Diseñar infografías educativas.
          </div>

        </div>
      </section>

      {/* Características */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características principales
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            <strong>Plantillas prediseñadas:</strong> Miles de diseños listos para
            personalizar.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Editor visual:</strong> Sistema de arrastrar y soltar elementos
            fácilmente.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Biblioteca multimedia:</strong> Acceso a imágenes, videos,
            iconos y gráficos.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Trabajo colaborativo:</strong> Permite que varias personas
            editen un mismo proyecto.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Almacenamiento en la nube:</strong> Los diseños quedan guardados
            automáticamente.
          </div>

        </div>
      </section>

      {/* Crear una cuenta */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Cómo comenzar a usar Canva
        </h2>

        <div className="space-y-4">

          <div className="border p-6 rounded-xl">
            <strong>Paso 1:</strong> Ingresar al sitio web de Canva.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Paso 2:</strong> Crear una cuenta utilizando correo electrónico,
            Google o Microsoft.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Paso 3:</strong> Seleccionar el tipo de diseño que se desea crear.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Paso 4:</strong> Elegir una plantilla o comenzar desde cero.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Paso 5:</strong> Personalizar textos, imágenes y colores.
          </div>

          <div className="border p-6 rounded-xl">
            <strong>Paso 6:</strong> Descargar o compartir el diseño finalizado.
          </div>

        </div>
      </section>

      {/* Actividad práctica */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad práctica
        </h2>

        <div className="border p-6 rounded-xl">
          Diseñá un afiche publicitario para el producto elegido en tu proyecto
          multimedia. El afiche debe incluir:
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Nombre del producto.</li>
            <li>Imagen principal.</li>
            <li>Descripción breve.</li>
            <li>Beneficios destacados.</li>
            <li>Logo o marca.</li>
            <li>Diseño atractivo y colores adecuados.</li>
          </ul>
        </div>
      </section>

      {/* Ventajas */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Ventajas de Canva
        </h2>

        <ul className="list-disc list-inside space-y-3 max-w-3xl">
          <li>Fácil de aprender y utilizar.</li>
          <li>No requiere instalación.</li>
          <li>Dispone de una versión gratuita muy completa.</li>
          <li>Permite trabajar desde cualquier dispositivo con Internet.</li>
          <li>Facilita la creación de contenido profesional.</li>
          <li>Incluye herramientas de inteligencia artificial y edición multimedia.</li>
        </ul>
      </section>

      {/* Cierre */}
      <section>
        <div className="border-l-4 border-blue-700 p-6 rounded-xl">
          Canva se ha convertido en una de las herramientas de diseño más
          utilizadas en el mundo gracias a su facilidad de uso y a la gran
          cantidad de recursos disponibles. Dominar esta plataforma te permitirá
          crear contenido visual atractivo para proyectos educativos,
          profesionales y publicaciones en la Web.
        </div>
      </section>

    </div>
  );
}