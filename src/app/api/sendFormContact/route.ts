import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { myData } from "@/config/myData.config";
import { ContactFormData } from "@/config/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, message }: ContactFormData = await request.json();

  const messageToSend = `<p><strong>Nuevo mensaje de contacto</strong>!</p>
  <p>Nombre: ${name}</p>
  <p>Email: ${email}</p>
  <p>Mensaje: ${message}</p>`;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: myData.email,
      subject: "Contacto desde portfolio",
      html: messageToSend,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
