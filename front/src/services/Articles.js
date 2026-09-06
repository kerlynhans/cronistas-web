import categories from "@/data/categories.json";
import { drupal, testDrupalConnection } from "@/services/Drupal";
import moment from "moment";
import "moment/locale/es";

/**
 * Fetch all featured contents to show in homepage.
 * @returns Object with articles by section.
 */
export const getHomeArticles = async () => {
  const host = process.env.NEXT_PUBLIC_CMS;
  const url = `${host}/api/v1/highlights`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    const grouped = {
      flash: [],
      main: [],
      chronicles: [],
      featured: [],
      topreads: [],
      current: [],
      mustread: [],
      others: [],
    };

    for (const item of data) {
      //Change php seconds to js milliseconds and format date
      const formattedDate = moment(item.date).format("MMM DD, YYYY");
      item.date = formattedDate;

      //Format results to include absolute urls.
      item.thumbnail = item.thumbnail ? host + item.thumbnail : "";
      item.image = item.image ? host + item.image : "";
      item.category = categories[item.category]?.label;

      //Create grouped articles.
      if (item.homepage !== "") {
        grouped[item.homepage].push(item);
      } else {
        //The rest
        grouped.others.push(item);
      }
    }

    return grouped;
  } catch (error) {
    console.error(
      "(getHomeArticles) Error fetching or processing data:",
      error,
    );
    return null;
  }
};

/**
 * Fetch a single article.
 * @param   path Indicate url to render.
 * @returns Object with articles by section.
 */
export const getSingleArticle = async (path) => {
  // Decodifica la URL en un recurso de Drupal
  const resource = await drupal.translatePath(path);
  if (resource) {
    const article = await drupal.getResource(
      resource.jsonapi.resourceName,
      resource.entity.uuid,
      {
        params: {
          include:
            "field_featured_image.field_media_image, field_tags, uid.field_user_avatar",
        },
      },
    );

    if (article) {
      //console.log("===== ARTICLE ====", article);

      const featuredImage =
        article.field_featured_image.field_media_image.image_style_uri[
          "16_9_1008x567_focal_point_webp"
        ];
      const altImage =
        article.field_featured_image?.resourceIdObjMeta?.alt || article.title;
      const formattedDate = moment(article.created).format("MMM DD, YYYY");
      const author = article.author_name;
      const avatar = article.author_avatar_url;

      //Create Article object.
      return {
        nid: article.drupal_internal__nid,
        title: article.title,
        lead: article.field_lead,
        description: article.field_description,
        content: article.field_body.processed,
        tags: article.field_tags,
        views: article.field_views + 1,
        rawDate: article.created,
        metadata: article.metatag,
        formattedDate,
        featuredImage,
        altImage,
        author,
        avatar,
      };
    }
  }

  return null;
};

/**
 * Fetch a custom endpoint to increase article views.
 * @returns Object with articles by section.
 */
export const increaseArticleViews = (nid) => {
  const host = process.env.NEXT_PUBLIC_CMS;
  const url = `${host}/api/v1/article-view`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nid: nid }),
  }).catch((error) => {
    console.error("Error incrementando vistas:", error);
  });
};
