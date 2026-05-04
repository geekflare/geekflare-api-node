import { GeekflareClient } from "./src/index.js";

const client = new GeekflareClient({
  apiKey: "your-api-key-here",
  baseUrl: "https://api.geekflare.com",
});

const result = await client.ping({ url: "https://google.com" });
console.log(JSON.stringify(result, null, 2));
