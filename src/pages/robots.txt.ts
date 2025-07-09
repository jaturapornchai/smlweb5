import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

# Sitemap
Sitemap: ${sitemapURL.href}

# Disallow admin and temporary files
Disallow: /admin/
Disallow: /.well-known/
Disallow: /*.log
Disallow: /temp/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/

# Crawler delays
Crawl-delay: 1

# Allow specific paths for better indexing
Allow: /products/
Allow: /blog/
Allow: /solutions/
Allow: /features/
Allow: /pricing/
Allow: /contact/

# Social media crawlers
User-agent: facebookexternalhit/*
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: TelegramBot
Allow: /

# Search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

User-agent: Slurp
Allow: /
Crawl-delay: 3

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 1

User-agent: Baiduspider
Allow: /
Crawl-delay: 5

User-agent: YandexBot
Allow: /
Crawl-delay: 3

# AI Crawlers
User-agent: ChatGPT-User
Allow: /

User-agent: OpenAI
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-Web
Allow: /

# Additional sitemap locations
Sitemap: ${new URL('sitemap-0.xml', sitemapURL.origin).href}
`;

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL('sitemap-index.xml', site);
    return new Response(getRobotsTxt(sitemapURL), {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400', // Cache for 1 day
        }
    });
};
