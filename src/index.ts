import { client as defaultClient } from "./generated/client.gen";
import { createClient, createConfig } from "./generated/client/index";
import * as sdk from "./generated/sdk.gen";
import type {
  MetaScrapeDto,
  WebScrapeDto,
  DnsRecordDto,
  ScreenshotDto,
  SiteStatusDto,
  RedirectCheckDto,
  BrokenLinkDto,
  Url2PdfDto,
  OpenPortDto,
  TlsScanDto,
  LoadTimeDto,
  MixedContentDto,
  DnsSecDto,
  MtrDto,
  PingDto,
  LighthouseDto,
  SearchRequestDto,
} from "./generated/types.gen";

export type GeekflareConfig = {
  apiKey: string;
  baseUrl?: string;
};

export class GeekflareClient {
  private client: typeof defaultClient;

  constructor(config: GeekflareConfig) {
    this.client = createClient(
      createConfig({
        baseUrl: config.baseUrl ?? "https://api.geekflare.com",
        headers: {
          "x-api-key": config.apiKey,
        },
      }),
    );
  }

  async metaScrape(body: MetaScrapeDto) {
    const { data, error } = await sdk.metaScrape({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async webScrape(body: WebScrapeDto) {
    const { data, error } = await sdk.webScrape({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async dnsRecord(body: DnsRecordDto) {
    const { data, error } = await sdk.dnsRecord({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async screenshot(body: ScreenshotDto) {
    const { data, error } = await sdk.screenshot({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async siteStatus(body: SiteStatusDto) {
    const { data, error } = await sdk.siteStatus({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async redirectCheck(body: RedirectCheckDto) {
    const { data, error } = await sdk.redirectCheck({
      client: this.client,
      body,
    });
    if (error) throw error;
    return data;
  }

  async brokenLink(body: BrokenLinkDto) {
    const { data, error } = await sdk.brokenLink({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async url2Pdf(body: Url2PdfDto) {
    const { data, error } = await sdk.url2Pdf({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async openPorts(body: OpenPortDto) {
    const { data, error } = await sdk.openPorts({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async tlsScan(body: TlsScanDto) {
    const { data, error } = await sdk.tlsScan({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async loadTime(body: LoadTimeDto) {
    const { data, error } = await sdk.loadTime({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async mixedContent(body: MixedContentDto) {
    const { data, error } = await sdk.mixedContent({
      client: this.client,
      body,
    });
    if (error) throw error;
    return data;
  }

  async dnsSec(body: DnsSecDto) {
    const { data, error } = await sdk.dnsSec({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async mtr(body: MtrDto) {
    const { data, error } = await sdk.mtr({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async ping(body: PingDto) {
    const { data, error } = await sdk.ping({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async lighthouse(body: LighthouseDto) {
    const { data, error } = await sdk.lighthouse({ client: this.client, body });
    if (error) throw error;
    return data;
  }

  async search(body: SearchRequestDto) {
    const { data, error } = await sdk.search({ client: this.client, body });
    if (error) throw error;
    return data;
  }
}

export type {
  MetaScrapeDto,
  WebScrapeDto,
  DnsRecordDto,
  ScreenshotDto,
  SiteStatusDto,
  RedirectCheckDto,
  BrokenLinkDto,
  Url2PdfDto,
  OpenPortDto,
  TlsScanDto,
  LoadTimeDto,
  MixedContentDto,
  DnsSecDto,
  MtrDto,
  PingDto,
  LighthouseDto,
  SearchRequestDto,
} from "./generated/types.gen";
