// File: app/api/quote/request-quote/route.ts
import { Resend } from 'resend';
import { CustomerConfirmationEmail } from '@/components/emails/CustomerConfirmationEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, pickup, destination, date, size, items, notes } = body;

  try {
    // Send email to your company
    await resend.emails.send({
      from: 'FloRemove Ireland <onboarding@baba9ja.com>', // Temporary domain
      to: ['brichiile@gmail.com'],
      subject: 'New Moving Quote Request',
      html: `
        <h2>New Quote Request from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Moving Date:</strong> ${date}</p>
        <p><strong>size :</strong> ${size} meters square</p>
        <p><strong>Items to Move:</strong><br/>${items.replace(/\n/g, '<br />')}</p>
        <p><strong>Additional Notes:</strong><br/>${notes.replace(/\n/g, '<br />')}</p>
        <hr />
        <p>This message was sent automatically from the GreenMove website.</p>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: 'FloRemove Ireland <onboarding@baba9ja.com>',
      to: [email],
      subject: 'We Received Your Moving Quote Request',
      react: CustomerConfirmationEmail({ name }),
    });


    
    return NextResponse.json({ message: 'Quote email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
