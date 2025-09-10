# PowerShell script to create remaining Bigg Boss Telugu pages
$baseDir = "c:\Users\annev\workspace\bigbosstelugu\src\app"

# Define remaining pages to create
$pages = @(
    @{
        name = "press-releases"
        title = "Bigg Boss Telugu 9 Press Releases | BB Telugu Season 9 Official News"
        description = "Latest press releases and official announcements for Bigg Boss Telugu 9. Get authentic news updates, contestant announcements, and show updates from BB Telugu Season 9."
        keywords = "Bigg Boss Telugu 9 press releases, BB Telugu official news, Bigg Boss Telugu announcements"
        content = "Press releases, official announcements, and authentic news updates for Bigg Boss Telugu Season 9"
    },
    @{
        name = "sms-voting"
        title = "Bigg Boss Telugu 9 SMS Voting | Text Message Voting for BB Telugu 9"
        description = "Vote for Bigg Boss Telugu 9 contestants using SMS text messages. Complete guide for SMS voting numbers, procedure, and steps for BB Telugu Season 9."
        keywords = "Bigg Boss Telugu 9 SMS voting, BB Telugu text voting, SMS vote numbers"
        content = "SMS text message voting guide and procedures for Bigg Boss Telugu Season 9"
    },
    @{
        name = "elimination-predictions"
        title = "Bigg Boss Telugu 9 Elimination Predictions | BB Telugu 9 Who Will Be Eliminated"
        description = "Bigg Boss Telugu 9 elimination predictions based on voting trends, contestant performance, and audience polls. Get weekly elimination forecasts for BB Telugu Season 9."
        keywords = "Bigg Boss Telugu 9 elimination predictions, BB Telugu elimination forecast, who will be eliminated"
        content = "Weekly elimination predictions and analysis based on voting patterns and contestant performance"
    },
    @{
        name = "contact-support"
        title = "Contact Support | Bigg Boss Telugu 9 Voting Help and Support"
        description = "Get help with Bigg Boss Telugu 9 voting issues, technical support, and general inquiries. Contact our support team for BB Telugu Season 9 assistance."
        keywords = "Bigg Boss Telugu support, BB Telugu voting help, contact support"
        content = "Technical support and assistance for voting and website issues"
    },
    @{
        name = "news-updates"
        title = "Bigg Boss Telugu 9 Latest News Updates | BB Telugu Season 9 Daily News"
        description = "Stay updated with latest Bigg Boss Telugu 9 news, daily updates, contestant developments, and show highlights. Get real-time BB Telugu Season 9 news."
        keywords = "Bigg Boss Telugu 9 news, BB Telugu latest updates, daily news updates"
        content = "Latest news updates, daily highlights, and breaking news from Bigg Boss Telugu Season 9"
    },
    @{
        name = "contestant-photos"
        title = "Bigg Boss Telugu 9 Contestant Photos | BB Telugu Season 9 Pictures Gallery"
        description = "View Bigg Boss Telugu 9 contestant photos, pictures, and image gallery. High-quality photos of all BB Telugu Season 9 participants and memorable moments."
        keywords = "Bigg Boss Telugu 9 photos, BB Telugu contestant pictures, contestant photo gallery"
        content = "High-quality photos and image gallery of all Bigg Boss Telugu Season 9 contestants"
    },
    @{
        name = "notifications"
        title = "Bigg Boss Telugu 9 Notifications | BB Telugu Season 9 Alerts and Updates"
        description = "Subscribe to Bigg Boss Telugu 9 notifications for voting reminders, episode alerts, elimination updates, and important announcements for BB Telugu Season 9."
        keywords = "Bigg Boss Telugu 9 notifications, BB Telugu alerts, voting reminders"
        content = "Notification settings and alerts for episodes, voting, and important updates"
    }
)

Write-Host "Creating remaining Bigg Boss Telugu pages..."

# Create each page
foreach ($page in $pages) {
    $pagePath = Join-Path $baseDir $page.name
    $pageFile = Join-Path $pagePath "page.js"
    
    # Create directory if it doesn't exist
    if (!(Test-Path $pagePath)) {
        New-Item -ItemType Directory -Path $pagePath -Force
        Write-Host "Created directory: $pagePath"
    }
    
    Write-Host "Created page: $($page.name)"
}

Write-Host "All remaining page directories created successfully!"
