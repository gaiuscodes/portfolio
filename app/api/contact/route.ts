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

    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json(
      { status: 'success', message: `Thanks, ${name}! Your message has been sent.` },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { status: 'error', message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
