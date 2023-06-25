/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "~/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { fullName, email, message } = await request.json();
  await resend.sendEmail({
    // change this to email.ericpezz.dev when verified
    from: "onboarding@resend.dev",
    to: "eric.pezzulo@gmail.com",
    subject: "Someone has reached out to you",
    react: ContactEmail({
      fullName,
      email,
      message,
    }),
  });
  return NextResponse.json({ status: "Ok" });
}
