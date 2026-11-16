
export default function AlgoritmosPage() {
  return (
    <div className="space-y-14">
      {/* ENCABEZADO */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Algoritmos y resolución de problemas
        </h1>

        <p className="text-lg leading-relaxed">
          Antes de programar una aplicación, es necesario analizar qué
          problema queremos resolver y establecer una secuencia ordenada de
          instrucciones para solucionarlo. En esta clase aprenderemos a
          diseñar algoritmos y representar procedimientos que luego
          incorporaremos al sistema de gestión de reservas de un hotel.
        </p>
      </section>

      {/* CONCEPTO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          ¿Qué es un algoritmo?
        </h2>

        <p className="leading-relaxed mb-4">
          Un algoritmo es un conjunto ordenado y finito de instrucciones que
          permite resolver un problema o realizar una tarea determinada.
          Cada instrucción indica una acción que debe ejecutarse para alcanzar
          un resultado.
        </p>

        <p className="leading-relaxed mb-4">
          Los algoritmos están presentes en muchas actividades cotidianas.
          Por ejemplo, para preparar una comida seguimos una serie de pasos:
          reunir los ingredientes, preparar los alimentos, cocinarlos y
          servirlos. Si cambiamos el orden de las acciones, podemos obtener
          un resultado diferente.
        </p>

        <p className="leading-relaxed">
          En programación ocurre algo similar: debemos definir con claridad
          qué información necesitamos, qué operaciones se deben realizar y
          qué resultado esperamos obtener.
        </p>
      </section>

      {/* CARACTERISTICAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Características de un algoritmo
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              titulo: "Preciso",
              descripcion:
                "Cada instrucción debe ser clara y no generar interpretaciones diferentes.",
            },
            {
              titulo: "Ordenado",
              descripcion:
                "Las instrucciones deben seguir una secuencia lógica.",
            },
            {
              titulo: "Finito",
              descripcion:
                "Debe tener un comienzo y finalizar después de una cantidad determinada de pasos.",
            },
            {
              titulo: "Definido",
              descripcion:
                "Con los mismos datos de entrada, debe producir el mismo resultado cuando las condiciones son iguales.",
            },
            {
              titulo: "Efectivo",
              descripcion:
                "Cada paso debe poder ejecutarse y contribuir a resolver el problema.",
            },
            {
              titulo: "Con entradas y salidas",
              descripcion:
                "Puede recibir datos, procesarlos y producir uno o varios resultados.",
            },
          ].map((item) => (
            <div
              key={item.titulo}
              className="border border-blue-200 rounded-xl p-5"
            >
              <h3 className="font-bold text-blue-900 mb-2">
                {item.titulo}
              </h3>
              <p className="leading-relaxed">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESOLUCION DE PROBLEMAS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Etapas para resolver un problema
        </h2>

        <p className="leading-relaxed mb-5">
          Para desarrollar una solución informática no conviene comenzar
          directamente escribiendo código. Primero debemos comprender el
          problema y planificar cómo resolverlo.
        </p>

        <div className="space-y-5">
          {[
            {
              numero: "1",
              titulo: "Identificar el problema",
              texto:
                "Determinar qué necesidad existe y qué resultado se desea obtener.",
            },
            {
              numero: "2",
              titulo: "Analizar los datos",
              texto:
                "Identificar qué información se necesita, de dónde se obtiene y qué condiciones debe cumplir.",
            },
            {
              numero: "3",
              titulo: "Diseñar la solución",
              texto:
                "Organizar los pasos y establecer las operaciones necesarias para resolver el problema.",
            },
            {
              numero: "4",
              titulo: "Representar el algoritmo",
              texto:
                "Escribir las instrucciones mediante lenguaje natural, pseudocódigo o diagramas de flujo.",
            },
            {
              numero: "5",
              titulo: "Probar la solución",
              texto:
                "Ejecutar el algoritmo con diferentes datos para comprobar que funciona correctamente.",
            },
            {
              numero: "6",
              titulo: "Implementar y corregir",
              texto:
                "Llevar la solución al programa y realizar ajustes cuando se detecten errores.",
            },
          ].map((item) => (
            <div key={item.numero} className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                {item.numero}
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">
                  {item.titulo}
                </h3>
                <p className="leading-relaxed">{item.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENTRADA PROCESO SALIDA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Entrada, proceso y salida
        </h2>

        <p className="leading-relaxed mb-5">
          Una forma sencilla de analizar un algoritmo es identificar tres
          elementos fundamentales:
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className=" border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Entrada</h3>
            <p className="text-sm">
              Los datos que necesita el algoritmo para trabajar.
            </p>
            <p className="text-sm mt-3 font-semibold">
              Ejemplo: precio y cantidad de noches.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Proceso</h3>
            <p className="text-sm">
              Las operaciones que se realizan con los datos.
            </p>
            <p className="text-sm mt-3 font-semibold">
              Ejemplo: multiplicar precio por noches.
            </p>
          </div>

          <div className=" border border-blue-200 rounded-xl p-5">
            <h3 className="font-bold text-blue-900 mb-2">Salida</h3>
            <p className="text-sm">
              El resultado que produce el algoritmo.
            </p>
            <p className="text-sm mt-3 font-semibold">
              Ejemplo: importe total de la reserva.
            </p>
          </div>
        </div>
      </section>

      {/* LENGUAJE NATURAL */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Representación de algoritmos mediante lenguaje natural
        </h2>

        <p className="leading-relaxed mb-4">
          Una manera sencilla de diseñar un algoritmo es describir sus pasos
          utilizando palabras habituales. Esta representación permite
          comprender la lógica de una solución sin necesidad de conocer un
          lenguaje de programación.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">
            Ejemplo: calcular el importe de una reserva
          </h3>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Iniciar el procedimiento.</li>
            <li>Solicitar el precio por noche de la habitación.</li>
            <li>Ingresar la cantidad de noches de la reserva.</li>
            <li>Multiplicar el precio por la cantidad de noches.</li>
            <li>Mostrar el importe total.</li>
            <li>Finalizar el procedimiento.</li>
          </ol>
        </div>
      </section>

      {/* PSEUDOCODIGO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Pseudocódigo
        </h2>

        <p className="leading-relaxed mb-4">
          El pseudocódigo es una forma de representar algoritmos utilizando
          instrucciones escritas de manera estructurada. Se parece a un
          lenguaje de programación, pero no depende de las reglas específicas
          de un lenguaje determinado.
        </p>

        <p className="leading-relaxed mb-4">
          Permite expresar operaciones, asignaciones, condiciones y
          repeticiones de una manera fácil de leer y modificar.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo: cálculo del importe de una reserva
        </h3>

        <div className="bg-slate-950 text-green-300 rounded-xl p-5 overflow-x-auto">
          <pre className="text-sm leading-relaxed">
{`Algoritmo CalcularReserva

    Definir precioNoche Como Real
    Definir cantidadNoches Como Entero
    Definir importeTotal Como Real

    Escribir "Ingrese el precio por noche:"
    Leer precioNoche

    Escribir "Ingrese la cantidad de noches:"
    Leer cantidadNoches

    importeTotal <- precioNoche * cantidadNoches

    Escribir "El importe total es: ", importeTotal

FinAlgoritmo`}
          </pre>
        </div>

        <p className="leading-relaxed mt-4">
          En este ejemplo, el algoritmo recibe dos datos, realiza una
          multiplicación y muestra el resultado. Más adelante aprenderemos
          qué son las variables y cómo se utilizan para almacenar estos datos.
        </p>
      </section>

      {/* DIAGRAMAS DE FLUJO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Diagramas de flujo
        </h2>

        <p className="leading-relaxed mb-4">
          Los diagramas de flujo permiten representar gráficamente un
          algoritmo. Utilizan símbolos conectados mediante flechas para
          indicar el orden en que deben ejecutarse las instrucciones.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              simbolo: "Óvalo",
              uso: "Representa el inicio o el final de un algoritmo.",
            },
            {
              simbolo: "Rectángulo",
              uso: "Representa una operación o proceso.",
            },
            {
              simbolo: "Paralelogramo",
              uso: "Representa la entrada o salida de información.",
            },
            {
              simbolo: "Rombo",
              uso: "Representa una decisión o condición.",
            },
            {
              simbolo: "Flechas",
              uso: "Indican la dirección y el orden de ejecución.",
            },
          ].map((item) => (
            <div
              key={item.simbolo}
              className="border border-blue-200 rounded-lg p-4"
            >
              <h3 className="font-bold text-blue-900 mb-1">
                {item.simbolo}
              </h3>
              <p className="text-sm leading-relaxed">{item.uso}</p>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Ejemplo: comprobar el importe de una reserva
        </h3>

        <div className="border border-blue-200 rounded-xl p-5">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="rounded-full border-2 border-blue-700 px-8 py-2 font-semibold text-blue-900">
              Inicio
            </div>
            <span className="text-blue-700 text-xl">↓</span>
            <div className="border-2 border-blue-500 rounded-lg px-5 py-3">
              Ingresar precio y cantidad de noches
            </div>
            <span className="text-blue-700 text-xl">↓</span>
            <div className="border-2 border-blue-500 rounded-lg px-5 py-3">
              Calcular importe total
            </div>
            <span className="text-blue-700 text-xl">↓</span>
            <div className="border-2 border-blue-500 rounded-lg px-5 py-3">
              Mostrar importe
            </div>
            <span className="text-blue-700 text-xl">↓</span>
            <div className="rounded-full border-2 border-blue-700 px-8 py-2 font-semibold text-blue-900">
              Fin
            </div>
          </div>
        </div>

        <p className="text-sm mt-3">
          Este es un esquema simplificado del procedimiento. En los próximos
          temas incorporaremos decisiones y repeticiones para representar
          procesos más complejos.
        </p>
      </section>

      {/* EJEMPLO HOTELERO */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Aplicación al sistema de gestión hotelera
        </h2>

        <p className="leading-relaxed mb-4">
          En nuestro proyecto necesitamos resolver diferentes situaciones.
          Una de ellas es determinar si una reserva puede registrarse sin
          generar conflictos con otras reservas existentes.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Algoritmo: verificar disponibilidad de una habitación
        </h3>

        <p className="leading-relaxed mb-4">
          Para comprobar la disponibilidad debemos conocer la habitación
          solicitada, la fecha de entrada y la fecha de salida. Luego debemos
          consultar las reservas existentes y verificar si alguna se cruza
          con el período solicitado.
        </p>

        <div className=" border border-blue-200 rounded-xl p-6">
          <ol className="list-decimal pl-6 space-y-2">
            <li>Iniciar el procedimiento.</li>
            <li>Seleccionar una habitación.</li>
            <li>Ingresar la fecha de entrada y la fecha de salida.</li>
            <li>Comprobar que la fecha de salida sea posterior a la entrada.</li>
            <li>Buscar reservas activas de esa habitación.</li>
            <li>
              Comprobar si alguna reserva existente se superpone con el
              período solicitado.
            </li>
            <li>
              Si existe una superposición, informar que la habitación no está
              disponible.
            </li>
            <li>
              Si no existe una superposición, permitir continuar con la
              reserva.
            </li>
            <li>Finalizar el procedimiento.</li>
          </ol>
        </div>

        <div className="border-l-4 border-blue-600 pl-5 mt-5">
          <h3 className="font-bold text-blue-900 mb-2">
            Una regla importante del sistema
          </h3>
          <p className="leading-relaxed">
            Dos reservas se superponen cuando la fecha de entrada de la
            reserva existente es anterior a la fecha de salida solicitada y
            su fecha de salida es posterior a la fecha de entrada solicitada.
            Las reservas canceladas no deben bloquear la habitación.
          </p>
        </div>

        <p className="leading-relaxed mt-4">
          Esta lógica será fundamental para desarrollar una de las
          funcionalidades principales de nuestro sistema hotelero. Más
          adelante la implementaremos mediante consultas y programación
          en Access.
        </p>
      </section>

      {/* PRUEBA DE ALGORITMOS */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Prueba de escritorio
        </h2>

        <p className="leading-relaxed mb-4">
          Una prueba de escritorio consiste en ejecutar manualmente un
          algoritmo utilizando datos de ejemplo. Permite comprobar los
          resultados y detectar errores antes de implementar el programa.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Ejemplo: cálculo de una reserva
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-blue-200">
            <thead>
              <tr className="bg-blue-500">
                <th className="border border-blue-200 p-3 text-left">Precio por noche</th>
                <th className="border border-blue-200 p-3 text-left">Noches</th>
                <th className="border border-blue-200 p-3 text-left">Operación</th>
                <th className="border border-blue-200 p-3 text-left">Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-200 p-3">$50.000</td>
                <td className="border border-blue-200 p-3">3</td>
                <td className="border border-blue-200 p-3">50.000 × 3</td>
                <td className="border border-blue-200 p-3">$150.000</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">$65.000</td>
                <td className="border border-blue-200 p-3">4</td>
                <td className="border border-blue-200 p-3">65.000 × 4</td>
                <td className="border border-blue-200 p-3">$260.000</td>
              </tr>
              <tr>
                <td className="border border-blue-200 p-3">$80.000</td>
                <td className="border border-blue-200 p-3">2</td>
                <td className="border border-blue-200 p-3">80.000 × 2</td>
                <td className="border border-blue-200 p-3">$160.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-relaxed mt-4">
          Si los resultados obtenidos coinciden con los esperados, podemos
          considerar que el algoritmo realiza correctamente el cálculo para
          esos casos de prueba. También debemos probar situaciones límite y
          datos incorrectos.
        </p>
      </section>

      {/* ACTIVIDADES */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividades prácticas
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 1: reconocer algoritmos en la vida cotidiana
            </h3>
            <p className="leading-relaxed">
              Elegí una actividad cotidiana, como retirar dinero de un cajero,
              realizar una compra o preparar una comida. Escribí un algoritmo
              de al menos ocho pasos que permita realizarla.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 2: calcular el importe de una reserva
            </h3>
            <p className="leading-relaxed">
              Diseñá un algoritmo en lenguaje natural que permita calcular
              el importe total de una reserva. Debe recibir el precio por
              noche y la cantidad de noches, realizar el cálculo y mostrar
              el resultado.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 3: representar un algoritmo en pseudocódigo
            </h3>
            <p className="leading-relaxed">
              Escribí en pseudocódigo el procedimiento para registrar un pago
              de una reserva. El algoritmo debe recibir el importe, la fecha
              y el método de pago, y mostrar una confirmación del registro.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 4: diseñar un diagrama de flujo
            </h3>
            <p className="leading-relaxed">
              Elaborá un diagrama de flujo que represente el proceso de
              registrar una reserva. Incluí el ingreso de datos, la
              verificación de las fechas, la comprobación de disponibilidad
              y el resultado de la operación.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-blue-900 mb-2">
              Actividad 5: prueba de escritorio
            </h3>
            <p className="leading-relaxed">
              Realizá una prueba de escritorio para el algoritmo de cálculo
              de reservas utilizando los siguientes datos:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Precio por noche: $45.000. Cantidad de noches: 5.</li>
              <li>Precio por noche: $72.000. Cantidad de noches: 3.</li>
              <li>Precio por noche: $90.000. Cantidad de noches: 7.</li>
            </ul>

            <p className="leading-relaxed mt-2">
              Registrá los valores de entrada, las operaciones realizadas y
              los resultados obtenidos.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRADORA */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Actividad integradora: algoritmo de registro de reservas
        </h2>

        <p className="leading-relaxed mb-4">
          Vamos a comenzar a diseñar la lógica de una de las operaciones
          principales del sistema de gestión hotelera: registrar una nueva
          reserva.
        </p>

        <p className="leading-relaxed mb-4">
          El sistema debe recibir los datos del huésped, la habitación
          solicitada y el período de alojamiento. Antes de guardar la reserva,
          debe verificar que la información sea correcta y que la habitación
          esté disponible.
        </p>

        <h3 className="font-bold text-blue-900 mb-3">
          Requerimientos del algoritmo
        </h3>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Solicitar el huésped y la habitación.</li>
          <li>Ingresar la fecha de entrada y la fecha de salida.</li>
          <li>Verificar que las fechas sean válidas.</li>
          <li>Comprobar que la habitación tenga capacidad suficiente.</li>
          <li>Consultar las reservas existentes.</li>
          <li>Determinar si hay conflictos de fechas.</li>
          <li>Permitir registrar la reserva si se cumplen las condiciones.</li>
          <li>Informar el resultado de la operación.</li>
        </ol>

        <h3 className="font-bold text-blue-900 mt-6 mb-3">
          Entrega esperada
        </h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Descripción del problema que se desea resolver.</li>
          <li>Identificación de los datos de entrada.</li>
          <li>Descripción de los procesos y condiciones.</li>
          <li>Identificación de los resultados de salida.</li>
          <li>Algoritmo escrito en lenguaje natural.</li>
          <li>Representación mediante pseudocódigo.</li>
          <li>Diagrama de flujo del procedimiento.</li>
          <li>Prueba de escritorio con al menos tres situaciones diferentes.</li>
        </ul>

        <div className=" border border-blue-200 rounded-xl p-5 mt-5">
          <p className="font-semibold text-blue-900 mb-2">
            Importante
          </p>
          <p className="leading-relaxed">
            En esta etapa no es necesario programar todavía en Microsoft
            Access. El objetivo es diseñar y comprobar la lógica de la
            solución. En las próximas clases utilizaremos estos algoritmos
            como base para construir las funcionalidades del sistema.
          </p>
        </div>
      </section>

      {/* CIERRE */}
      <section className="border-t border-blue-200 pt-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          Para recordar
        </h2>

        <p className="leading-relaxed">
          Un buen programa comienza con un problema bien analizado y una
          solución correctamente planificada. Los algoritmos permiten
          organizar las instrucciones, comprobar la lógica de los procesos
          y reducir errores antes de escribir código. En nuestro sistema
          hotelero, cada funcionalidad que desarrollemos tendrá como punto
          de partida un algoritmo que describa cómo debe comportarse la
          aplicación.
        </p>
      </section>
    </div>
  );
}
