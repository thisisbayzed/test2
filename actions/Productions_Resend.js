import EmailTempletes from "@/Emails/EmailTempletes";
import { NextResponse } from "next/server";

const { Resend } = require("resend");

const resend = new Resend(process.env.EMAIL_SENDER);

export async function POST(request, response) {
  try {
    const body = await request.json();
    const { email, name } = body;
    const data = await resend.emails.send({
      from: "///production_pase",
      to: email,
      subject: `Email from hellow world`,
      react: EmailTempletes({ firstName: name  }),
    });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({"error": "Something went wrong"}, {status: 500});
  }
}