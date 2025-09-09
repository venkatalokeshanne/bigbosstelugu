// Simple script to create a poster section
// Run this by visiting: http://localhost:3001/api/posters/create (POST request)
// Or run in browser console:

async function createPosterSection() {
  try {
    const response = await fetch('/api/posters/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const result = await response.json()
    console.log('Create result:', result)
    
    if (result.success) {
      console.log('✅ Poster section created successfully!')
      console.log('Section ID:', result.sectionId)
      console.log('Now go to Sanity Studio to upload images')
    } else {
      console.log('❌ Error:', result.error)
    }
    
    return result
  } catch (error) {
    console.error('Error:', error)
  }
}

// Uncomment to run:
// createPosterSection()

export default createPosterSection
