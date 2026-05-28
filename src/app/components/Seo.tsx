import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  /** Absolute URL (e.g. `${origin}/somepage`). Defaults to current window URL. */
  canonical?: string;
  /** Absolute image URL for OG / Twitter cards. Defaults to `${origin}/favicon.png`. */
  image?: string;
  /** A single schema.org JSON-LD object or an array of them. */
  jsonLd?: object | object[];
}

/**
 * Per-route SEO + Open Graph + JSON-LD wrapper.
 *
 * Drop a `<Seo title="…" description="…" />` at the top of each page component.
 * Page-level meta tags override the static defaults in `index.html`.
 */
export function Seo({ title, description, canonical, image, jsonLd }: SeoProps) {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  const url =
    canonical ??
    (typeof window !== "undefined" ? window.location.href : undefined);
  const ogImage = image ?? (origin ? `${origin}/favicon.png` : undefined);
  const jsonLdItems = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_SG" />
      {url && <meta property="og:url" content={url} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD structured data */}
      {jsonLdItems.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
