import { getSingleArticle } from "@/services/Articles";
import { getSinglePage } from "@/services/Pages";
import { parseMetadata } from "@/utils/parsers";

/**
 * Fetch a single article to get CMS metadata.
 * @param   path Indicate url to render.
 * @returns Object with articles by section.
 */
export const getArticleMetadata = async (path) => {
  const article = await getSingleArticle(path);

  if (!article) {
    return {
      title: "Artículo no encontrado",
      description: "El artículo solicitado no está disponible.",
    };
  }

  const metadata = parseMetadata(article.metadata);
  //console.log("METADATA", article.metadata, metadata);

  return {
    title: article.title,
    description: article.description,
    keywords: metadata.keywords,

    //Other metadata
    alternates: {
      canonical: metadata.canonical,
    },

    // Open Graph (WhatsApp, Facebook, LinkedIn)
    openGraph: {
      title: article.title,
      description: article.description,
      url: metadata.canonical,
      siteName: "Cronistas Su Periódico",
      locale: "es_CO",
      type: "article",
      publishedTime: article.rawDate,
      images: [
        {
          url: article.featuredImage,
          width: 1008,
          height: 567,
          alt: article.title,
        },
      ],
    },

    // Twitter / X
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.featuredImage],
    },
  };
};

/**
 * Fetch a single page to get CMS metadata.
 * @param   path Indicate url to render.
 * @returns Object with articles by section.
 */
export const getPageMetadata = async (path) => {
  const page = await getSinglePage(path);

  if (!page) {
    return {
      title: "Página no encontrada",
      description: "La página solicitado no está disponible.",
    };
  }

  const metadata = parseMetadata(page.metadata);
  //console.log("METADATA", page.metadata, metadata);

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,

    //Other metadata
    alternates: {
      canonical: metadata.canonical,
    },

    // Open Graph (WhatsApp, Facebook, LinkedIn)
    openGraph: {
      title: page.title,
      description: page.description,
      url: metadata.canonical,
      siteName: "Cronistas Su Periódico",
      locale: "es_CO",
      type: "website",
      publishedTime: page.rawDate,
      images: [
        {
          url: page.featuredImage,
          width: 1008,
          height: 567,
          alt: page.title,
        },
      ],
    },

    // Twitter / X
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.featuredImage],
    },
  };
};
