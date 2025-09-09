import { NextResponse } from 'next/server';
import { fetchFAQs } from '../../../lib/sanity-client';

export async function GET() {
  try {
    const faqs = await fetchFAQs();
    return NextResponse.json(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return NextResponse.json([], { status: 200 }); // Return empty array instead of error
  }
}
