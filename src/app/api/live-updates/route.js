import { NextResponse } from 'next/server';
import { fetchLiveUpdates } from '../../../lib/sanity-client';

export async function GET() {
  try {
    const updates = await fetchLiveUpdates();
    return NextResponse.json(updates);
  } catch (error) {
    console.error('Error fetching live updates:', error);
    return NextResponse.json([], { status: 200 }); // Return empty array instead of error
  }
}
