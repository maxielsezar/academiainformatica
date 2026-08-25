"use client";

import { useState } from "react";

export default function ActividadBaseDatosLibreria() {
  const [mostrarAyuda, setMostrarAyuda] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        {/* Encabezado */}
        <section className="mb-8 rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white shadow-lg">
          <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium">
            Actividad integradora
          </span>

          <h1 className="text-3xl font-bold md:text-4xl">
            Diseño de una Base de Datos para una Librería
          </h1>

          <p className="mt-4 max-w-3xl text-blue-50">
            En esta actividad deberás analizar los requerimientos de un sistema
            para una librería y diseñar tu propia base de datos.
          </p>
        </section>

        {/* Situación problemática */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            📚 Situación problemática
          </h2>

          <p className="leading-7 text-slate-600">
            Una librería necesita desarrollar un sistema para organizar la
            información relacionada con los libros que comercializa, los autores,
            las editoriales, los clientes y las ventas realizadas.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Tu tarea será analizar la información disponible y decidir cómo debe
            estar organizada la base de datos.
          </p>

          <div className="mt-5 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 text-yellow-900">
            <strong>Importante:</strong> No se te indicará qué tablas debes
            crear. Deberás decidirlo vos a partir de los datos que necesita
            registrar la librería.
          </div>
        </section>

        {/* Datos a registrar */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            📝 Información que debe registrar el sistema
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Libros */}
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="mb-3 text-xl font-bold text-blue-800">
                📖 Libros
              </h3>

              <ul className="space-y-2 text-slate-700">
                <li>• Título</li>
                <li>• ISBN</li>
                <li>• Año de publicación</li>
                <li>• Precio</li>
                <li>• Cantidad disponible</li>
              </ul>
            </div>

            {/* Autores */}
            <div className="rounded-xl border border-purple-100 bg-purple-50 p-5">
              <h3 className="mb-3 text-xl font-bold text-purple-800">
                ✍️ Autores
              </h3>

              <ul className="space-y-2 text-slate-700">
                <li>• Nombre</li>
                <li>• Apellido</li>
                <li>• Nacionalidad</li>
              </ul>
            </div>

            {/* Editoriales */}
            <div className="rounded-xl border border-green-100 bg-green-50 p-5">
              <h3 className="mb-3 text-xl font-bold text-green-800">
                🏢 Editoriales
              </h3>

              <ul className="space-y-2 text-slate-700">
                <li>• Nombre</li>
                <li>• Dirección</li>
                <li>• Teléfono</li>
                <li>• Correo electrónico</li>
              </ul>
            </div>

            {/* Clientes */}
            <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
              <h3 className="mb-3 text-xl font-bold text-orange-800">
                👤 Clientes
              </h3>

              <ul className="space-y-2 text-slate-700">
                <li>• Nombre</li>
                <li>• Apellido</li>
                <li>• DNI</li>
                <li>• Teléfono</li>
                <li>• Correo electrónico</li>
              </ul>
            </div>

            {/* Ventas */}
            <div className="rounded-xl border border-red-100 bg-red-50 p-5 md:col-span-2">
              <h3 className="mb-3 text-xl font-bold text-red-800">
                🛒 Ventas
              </h3>

              <ul className="grid gap-2 text-slate-700 md:grid-cols-2">
                <li>• Fecha de la venta</li>
                <li>• Cliente que realizó la compra</li>
                <li>• Libro o libros vendidos</li>
                <li>• Cantidad de cada libro</li>
                <li>• Precio de cada libro al momento de la venta</li>
                <li>• Total de la venta</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consigna */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-5 text-2xl font-bold text-slate-800">
            🎯 Consigna
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                1
              </span>

              <div>
                <h3 className="font-bold text-slate-800">
                  Analizar la información
                </h3>
                <p className="text-slate-600">
                  Observá los datos que necesita registrar la librería y pensá
                  cómo deberían organizarse.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                2
              </span>

              <div>
                <h3 className="font-bold text-slate-800">
                  Diseñar las entidades
                </h3>
                <p className="text-slate-600">
                  Decidí qué entidades o tablas necesita tu base de datos.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                3
              </span>

              <div>
                <h3 className="font-bold text-slate-800">
                  Definir los atributos
                </h3>
                <p className="text-slate-600">
                  Determiná qué campos tendrá cada tabla y qué tipo de dato
                  utilizarás.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                4
              </span>

              <div>
                <h3 className="font-bold text-slate-800">
                  Diseñar el diagrama
                </h3>
                <p className="text-slate-600">
                  Creá un diagrama Entidad-Relación o un diagrama de tablas
                  donde se puedan observar las relaciones entre las entidades.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                5
              </span>

              <div>
                <h3 className="font-bold text-slate-800">
                  Crear la base de datos
                </h3>
                <p className="text-slate-600">
                  Implementá el diseño utilizando SQL y creá las tablas con sus
                  correspondientes claves primarias y claves foráneas.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl bg-slate-50 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                6
              </span>

              <div>
                <h3 className="font-bold text-slate-800">
                  Cargar datos de prueba
                </h3>
                <p className="text-slate-600">
                  Insertá información suficiente para comprobar que tu diseño
                  funciona correctamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Entregables */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            📦 Entrega
          </h2>

          <p className="mb-4 text-slate-600">
            El trabajo deberá incluir los siguientes elementos:
          </p>

          <ul className="space-y-3">
            <li className="rounded-lg bg-blue-50 p-4 text-slate-700">
              <strong>1. Diagrama:</strong> Diseño de la base de datos y sus
              relaciones.
            </li>

            <li className="rounded-lg bg-blue-50 p-4 text-slate-700">
              <strong>2. Script SQL:</strong> Código para crear la base de datos
              y las tablas.
            </li>

            <li className="rounded-lg bg-blue-50 p-4 text-slate-700">
              <strong>3. Datos de prueba:</strong> Sentencias INSERT para cargar
              información.
            </li>

            <li className="rounded-lg bg-blue-50 p-4 text-slate-700">
              <strong>4. Consultas:</strong> Al menos 5 consultas SQL para
              recuperar información de la base de datos.
            </li>
          </ul>
        </section>

        {/* Preguntas */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            🤔 Preguntas para pensar antes de comenzar
          </h2>

          <ol className="space-y-3 text-slate-700">
            <li>
              1. ¿Qué información debería almacenarse una sola vez?
            </li>
            <li>
              2. ¿Qué datos pueden repetirse y deberían estar relacionados?
            </li>
            <li>
              3. ¿Cuál será la clave primaria de cada tabla?
            </li>
            <li>
              4. ¿Qué relaciones existen entre los datos?
            </li>
            <li>
              5. ¿Existen relaciones de uno a muchos?
            </li>
            <li>
              6. ¿Existe alguna relación de muchos a muchos?
            </li>
            <li>
              7. ¿Cómo registrarías una venta que contiene varios libros?
            </li>
          </ol>
        </section>

        {/* Ayuda */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold text-blue-900">
                💡 ¿Necesitás una orientación?
              </h2>

              <p className="mt-1 text-blue-800">
                Podés consultar algunas pistas generales sin ver la solución
                completa.
              </p>
            </div>

            <button
              onClick={() => setMostrarAyuda(!mostrarAyuda)}
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              {mostrarAyuda ? "Ocultar pistas" : "Ver pistas"}
            </button>
          </div>

          {mostrarAyuda && (
            <div className="mt-6 rounded-xl bg-white p-5 text-slate-700 shadow-sm">
              <ul className="space-y-3">
                <li>
                  💡 <strong>Pista 1:</strong> No todos los datos tienen que
                  estar en una única tabla.
                </li>

                <li>
                  💡 <strong>Pista 2:</strong> Una venta puede contener más de
                  un libro.
                </li>

                <li>
                  💡 <strong>Pista 3:</strong> Pensá qué ocurriría si un mismo
                  autor escribe varios libros.
                </li>

                <li>
                  💡 <strong>Pista 4:</strong> Identificá qué campos podrían
                  servir para identificar de forma única cada registro.
                </li>

                <li>
                  💡 <strong>Pista 5:</strong> Analizá cuidadosamente si
                  necesitás tablas intermedias para representar algunas
                  relaciones.
                </li>
              </ul>
            </div>
          )}
        </section>

        {/* Cierre */}
        <section className="mt-8 rounded-2xl bg-slate-800 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">
            ¡Ahora te toca diseñar la solución!
          </h2>

          <p className="mt-3 text-slate-300">
            No existe una única forma de resolver el problema. Analizá los
            requerimientos y justificá las decisiones que tomes en el diseño de
            tu base de datos.
          </p>
        </section>
      </div>
    </main>
  );
}