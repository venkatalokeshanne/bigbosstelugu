import { NextResponse } from 'next/server';
import { fetchFeaturedNews, urlFor } from '../../../lib/sanity-client';

export async function GET() {
  try {
    const news = await fetchFeaturedNews();
    // Process images to include URLs
    const processedNews = news.map(article => ({
      ...article,
      featuredImageUrl: article.featuredImage ? urlFor(article.featuredImage).width(600).height(400).url() : null
    }));
    return NextResponse.json(processedNews);
  } catch (error) {
    console.error('Error fetching featured news:', error);
    return NextResponse.json([], { status: 200 }); // Return empty array instead of error
  }
}
