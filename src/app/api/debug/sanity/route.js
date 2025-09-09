import { client } from '../../../lib/sanity-client'

export async function GET() {
  try {
    // Test basic connection
    const sanityVersion = await client.fetch(`*[_type == "sanity.imageAsset"][0]._id`)
    
    // Get all document types
    const allTypes = await client.fetch(`array::unique(*[]._type)`)
    
    // Get poster sections specifically
    const posterSections = await client.fetch(`*[_type == "posterSection"] {
      _id,
      title,
      isActive,
      posters
    }`)

    return Response.json({
      connection: 'successful',
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      documentTypes: allTypes,
      posterSections: posterSections,
      posterSectionCount: posterSections.length,
      debug: {
        hasImageAssets: !!sanityVersion,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Debug error:', error)
    return Response.json(
      {
        connection: 'failed',
        error: error.message,
        stack: error.stack
      },
      { status: 500 }
    )
  }
}
