interface SchemaOrgWebsiteProps {
  url: string;
  name: string;
  description: string;
}

export const SchemaOrgWebsite = ({
  url,
  name,
  description,
}: SchemaOrgWebsiteProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface SchemaOrgGameProps {
  name: string;
  description: string;
  image: string;
  url: string;
}

export const SchemaOrgGame = ({
  name,
  description,
  image,
  url,
}: SchemaOrgGameProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name,
    description,
    image,
    url,
    genre: "Educational Game",
    gamePlatform: "Web Browser",
    applicationCategory: "Game",
    operatingSystem: "Web Browser",
    inLanguage: "ja",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface SchemaOrgBreadcrumbProps {
  items: {
    name: string;
    url: string;
  }[];
}

export const SchemaOrgBreadcrumb = ({ items }: SchemaOrgBreadcrumbProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
