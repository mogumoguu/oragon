import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Oragon Website <contact@oragon.com.ph>",
    to: "support@oragon.com.ph",
    replyTo: email,
    subject: `New Inquiry${service ? ` — ${service}` : ""} from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #fb923c; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; color: #fff; font-size: 20px; font-weight: 700;">New Project Inquiry</h1>
        </div>
        <div style="background: #f8f7f5; padding: 32px; border: 1px solid #e5e0db; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888; width: 100px;">Name</td>
              <td style="padding: 8px 0; font-size: 15px; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Email</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Service</td>
              <td style="padding: 8px 0; font-size: 15px; color: #1a1a1a;">${service || "Not specified"}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e0db; margin: 24px 0;" />
          <p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin: 0 0 8px;">Message</p>
          <p style="font-size: 15px; line-height: 1.65; color: #1a1a1a; margin: 0; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #e5e0db; margin: 24px 0;" />
          <p style="font-size: 12px; color: #aaa; margin: 0;">Reply directly to this email to respond to ${name}.</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
