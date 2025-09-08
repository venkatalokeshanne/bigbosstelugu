// Image placeholder generator for development
// In production, replace these with actual contestant photos

export function generatePlaceholderImage(name, width = 400, height = 500) {
  // Using a placeholder service that generates images with the contestant's name
  return `https://via.placeholder.com/${width}x${height}/dc2626/ffffff?text=${encodeURIComponent(name)}`
}

export function generateNewsImage(title, width = 800, height = 450) {
  const shortTitle = title.substring(0, 20).replace(/\s+/g, '+')
  return `https://via.placeholder.com/${width}x${height}/1f2937/ffffff?text=${encodeURIComponent(shortTitle)}`
}
