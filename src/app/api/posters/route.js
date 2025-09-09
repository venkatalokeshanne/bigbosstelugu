import { client } from '../../../lib/sanity-client'

export async function GET() {
  try {
    // Get active poster section with resolved image assets
    const query = `*[_type == "posterSection" && isActive == true] | order(_createdAt desc)[0] {
      _id,
      title,
      description,
      isActive,
      posters[] {
        _key,
        title,
        "imageUrl": asset->url,
        "assetRef": asset._ref,
        asset-> {
          _id,
          url,
          originalFilename,
          mimeType
        }
      }
    }`

    const posterSection = await client.fetch(query)

    if (!posterSection) {
      // Check if any poster sections exist at all
      const allSections = await client.fetch(`*[_type == "posterSection"]`)
      return Response.json({
        posters: [],
        message: `No active poster section found. Total poster sections: ${allSections.length}`,
      })
    }

    return Response.json({
      posters: posterSection.posters || [],
      sectionId: posterSection._id,
      title: posterSection.title,
      description: posterSection.description
    })

    if (!posterSection) {
      // Check if any poster sections exist at all
      const allSections = await client.fetch(`*[_type == "posterSection"]`)
      return Response.json({
        posters: [],
        message: `No active poster section found. Total poster sections: ${allSections.length}`,
      })
    }

    return Response.json({
      posters: posterSection.posters || [],
      sectionId: posterSection._id,
      title: posterSection.title,
      description: posterSection.description
    })

  } catch (error) {
    console.error('Error fetching posters:', error)
    return Response.json(
      { 
        error: 'Failed to fetch posters',
        posters: []
      },
      { status: 500 }
    )
  }
}
