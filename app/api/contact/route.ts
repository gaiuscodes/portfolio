import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { status: 'error', message: 'All fields are required' },
        { status: 400 }
      );
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (BOT_TOKEN && CHAT_ID) {
      const text = `New portfolio message from ${name} <${email}>:\n\n${message}`;
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });
    }

    const phone = '254746058590';
    const text = encodeURIComponent(`New portfolio message from ${name} <%${email}%>:\n\n${message}`);
    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;

    return NextResponse.json(
      {
        status: 'success',
        message: `Thanks, ${name}! Your message has been sent.`,
        whatsappUrl,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { status: 'error', message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
