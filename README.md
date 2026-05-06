# @geekflare/api-node

Official Node.js / TypeScript SDK for the [Geekflare API](https://geekflare.com/api/).

## Installation

```bash
npm install @geekflare/api-node
```

## Quick Start

```typescript
import { GeekflareClient } from "@geekflare/api-node";

const client = new GeekflareClient({
  apiKey: "your-api-key",
});

const result = await client.webScrape({ url: "https://google.com" });
console.log(result);
```

## Available Methods

| Method                       | Description                    |
| ---------------------------- | ------------------------------ |
| `client.webScrape(body)`     | Scrape web page content        |
| `client.search(body)`        | Perform a web search           |
| `client.metaScrape(body)`    | Scrape meta tags from a URL    |
| `client.dnsRecord(body)`     | Look up DNS records            |
| `client.screenshot(body)`    | Take a screenshot of a URL     |
| `client.siteStatus(body)`    | Check if a site is up or down  |
| `client.redirectCheck(body)` | Check redirect chain of a URL  |
| `client.brokenLink(body)`    | Find broken links on a page    |
| `client.url2Pdf(body)`       | Convert a URL to PDF           |
| `client.openPorts(body)`     | Scan open ports on a host      |
| `client.tlsScan(body)`       | Scan TLS/SSL configuration     |
| `client.loadTime(body)`      | Test page load time            |
| `client.mixedContent(body)`  | Check for mixed content issues |
| `client.dnsSec(body)`        | Check DNSSEC configuration     |
| `client.mtr(body)`           | Perform MTR network test       |
| `client.ping(body)`          | Ping a host                    |
| `client.lighthouse(body)`    | Run Lighthouse audit           |

## Configuration

```typescript
const client = new GeekflareClient({
  apiKey: "your-api-key", // required
  baseUrl: "https://api.geekflare.com", // optional, defaults to this
});
```

## Error Handling

```typescript
try {
  const result = await client.webScrape({ url: "https://google.com" });
  console.log(result);
} catch (error) {
  console.error("API error:", error);
}
```

## Links

- [API Documentation](https://docs.geekflare.com/api/intro)
- [Geekflare API](https://dash.geekflare.com)
- [Report Issues](https://github.com/geekflare/geekflare-api-node/issues)

## License

MIT
