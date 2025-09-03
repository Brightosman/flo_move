import { Resend } from 'resend';
import { CustomerConfirmationEmail } from '@/components/emails/CustomerConfirmationEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  try {
    // Send email to your company
    await resend.emails.send({
      from: 'FloRemoval Ireland <onboarding@baba9ja.com>', // Temporary domain
      to: ['brichiile@gmail.com'],
      subject: 'New Moving Quote Request',
      html: `
        <h2>New Quote Request from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p>This message was sent automatically from the FloRemovalwebsite.</p>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: 'FloRemoval Ireland <onboarding@baba9ja.com>',
      to: [email],
      subject: 'We Received Your Message',
      react: CustomerConfirmationEmail({ name }),
    });


    
    return NextResponse.json({ message: 'Your message was sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ message: 'Failed to send your message' }, { status: 500 });
  }
}
