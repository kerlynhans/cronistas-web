import { drupal } from "@/services/Drupal";
import "moment/locale/es";

/**
 * Fetch a single page.
 * @param   path Indicate url to render.
 * @returns Object with page info.
 */
export const getSinglePage = async (path) => {
  // Decodifica la URL en un recurso de Drupal
  const resource = await drupal.translatePath(path);
  if (resource) {
    const page = await drupal.getResource(
      resource.jsonapi.resourceName,
      resource.entity.uuid,
      {
        params: {
          include:
            "field_featured_image.field_media_image, field_tags, uid.field_user_avatar",
        },
      },
    );

    if (page) {
      //console.log("PAGE", page);

      const featuredImage =
        page.field_featured_image?.field_media_image.image_style_uri[
          "16_9_1008x567_focal_point_webp"
        ];
      const altImage =
        page.field_featured_image?.resourceIdObjMeta?.alt || page.title;

      //Create Page object.
      return {
        nid: page.drupal_internal__nid,
        title: page.title,
        lead: page.field_lead,
        content: page.field_body.processed,
        metadata: page.metatag,
        featuredImage,
        altImage,
      };
    }
  }

  return null;
};
