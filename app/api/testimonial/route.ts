import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { quote, name, title, company, email, consent, website } = body as {
    quote?: string;
    name?: string;
    title?: string;
    company?: string;
    email?: string;
    consent?: boolean;
    website?: string;
  };

  // Honeypot: silently drop if filled
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Validate required fields
  if (!quote || !name) {
    return NextResponse.json({ error: "Quote and name are required." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Consent is required to publish your testimonial." }, { status: 400 });
  }

  const slug = toSlug(company || name);
  const safeQuote = escapeHtml(quote);
  const safeName = escapeHtml(name);
  const safeTitle = escapeHtml(title || "");
  const safeCompany = escapeHtml(company || "");
  const safeEmail = email ? escapeHtml(email) : "";

  // Escape RAW values as a JS double-quoted string literal so the paste block is
  // actually paste-ready (apostrophes, quotes, and newlines survive intact). The
  // whole block is HTML-escaped once below for safe rendering in the <pre>.
  const jsStr = (s: string) =>
    s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\r?\n/g, "\\n");

  const pasteBlock = `{
  id: "${jsStr(slug)}",
  quote: "${jsStr(quote)}",
  name: "${jsStr(name)}",
  title: "${jsStr(title || "")}",
  company: "${jsStr(company || "")}",
  featured: false,
},`;

  const { error } = await resend.emails.send({
    from: "Oragon Website <contact@oragon.com.ph>",
    to: "support@oragon.com.ph",
    ...(email ? { replyTo: email } : {}),
    subject: `New Testimonial from ${name}${company ? ` (${company})` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #fb923c; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; color: #fff; font-size: 20px; font-weight: 700;">New Testimonial Submission</h1>
        </div>
        <div style="background: #f8f7f5; padding: 32px; border: 1px solid #e5e0db; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888; width: 100px;">Name</td>
              <td style="padding: 8px 0; font-size: 15px; color: #1a1a1a;">${safeName}</td>
            </tr>
            ${safeTitle ? `<tr>
              <td style="padding: 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Title</td>
              <td style="padding: 8px 0; font-size: 15px; color: #1a1a1a;">${safeTitle}</td>
            </tr>` : ""}
            ${safeCompany ? `<tr>
              <td style="padding: 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Company</td>
              <td style="padding: 8px 0; font-size: 15px; color: #1a1a1a;">${safeCompany}</td>
            </tr>` : ""}
            ${safeEmail ? `<tr>
              <td style="padding: 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Email</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${safeEmail}" style="color: #ea580c;">${safeEmail}</a></td>
            </tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e5e0db; margin: 24px 0;" />
          <p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin: 0 0 8px;">Quote</p>
          <p style="font-size: 15px; line-height: 1.65; color: #1a1a1a; margin: 0; white-space: pre-wrap;">${safeQuote}</p>
          <hr style="border: none; border-top: 1px solid #e5e0db; margin: 24px 0;" />
          <p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #888; margin: 0 0 12px;">Paste into lib/testimonials.ts</p>
          <pre style="background: #1a1a1a; color: #f8f7f5; font-family: monospace; font-size: 13px; line-height: 1.6; padding: 20px; border-radius: 6px; overflow-x: auto; white-space: pre-wrap; word-break: break-word;">${escapeHtml(pasteBlock)}</pre>
          <hr style="border: none; border-top: 1px solid #e5e0db; margin: 24px 0;" />
          <p style="font-size: 12px; color: #aaa; margin: 0;">Set <code>featured: true</code> when you are ready to show this on the homepage.</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
