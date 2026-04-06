import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nombre, email, mensaje } = await req.json();

    const data = await resend.emails.send({
      from: "Curso de Informatica CFP 655 <informes@cursoinformatica.digital>", 
      to: ["elsezarmaxi@gmail.com"],
      subject: "Bienvenido a la plataforma",
      html: `
<div style="font-family: Arial, sans-serif; background-color:#f4f6f8; padding:20px;">
  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
    
    <!-- Header -->
    <div style="background:#2563eb; color:white; padding:20px; text-align:center;">
      <h1 style="margin:0;">Bienvenido a Cursos Informatica</h1>
    </div>

    <!-- Body -->
    <div style="padding:30px;">
      <h2 style="color:#111;">Hola, ${nombre}</h2>
      
      <p style="color:#444; font-size:16px;">
        Tu cuenta ha sido creada exitosamente. Ya podés comenzar a aprender y acceder a todos nuestros cursos.
      </p>

      <p style="color:#444; font-size:16px;">
        Explorá los contenidos, avanzá a tu ritmo y desarrollá nuevas habilidades en tecnología.
      </p>

      <!-- Button -->
      <div style="text-align:center; margin:30px 0;">
        <a href="https://cursoinformatica.digital/#cursos"
           style="background:#2563eb; color:white; padding:12px 25px; border-radius:6px; text-decoration:none; font-size:16px;">
          Ver cursos
        </a>
      </div>

      <p style="color:#666; font-size:14px;">
        Si no creaste esta cuenta, podés ignorar este mensaje.
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#888;">
      © ${new Date().getFullYear()} Cursos Informática - Todos los derechos reservados
    </div>

  </div>
</div>
`
    });

    return Response.json({ ok: true, data });
  } catch (error) {
    return Response.json({ ok: false, error });
  }
}