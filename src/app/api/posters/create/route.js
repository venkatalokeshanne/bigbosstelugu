import { client } from '../../lib/sanity-client'

export async function POST() {
  try {
    // Check if poster section already exists
    const existingSection = await client.fetch(`*[_type == "posterSection"][0]`)
    
    if (existingSection) {
      return Response.json({
        success: true,
        message: 'Poster section already exists',
        sectionId: existingSection._id
      })
    }

    // Create a new poster section with simplified schema
    const newPosterSection = {
      _type: 'posterSection',
      isActive: true,
      posters: []
      // Note: Images will be added manually in Sanity Studio
    }

    const result = await client.create(newPosterSection)
    
    return Response.json({
      success: true,
      message: 'Poster section created successfully',
      sectionId: result._id
    })

  } catch (error) {
    console.error('Error creating poster section:', error)
    return Response.json(
      { 
        success: false,
        error: 'Failed to create poster section',
        details: error.message
      },
      { status: 500 }
    )
  }
}
