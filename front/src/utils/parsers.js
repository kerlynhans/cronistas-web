/**
 * Returns an object with Drupal references.
 */
export function parseMetadata(data) {
  //console.log("METADATA", data);
  const metadata = [];
  data.forEach((element) => {
    if (element.tag === "meta") {
      if (element.attributes.name === "keywords") {
        metadata[element.attributes.name] = element.attributes.content
          .split(",")
          .map((item) => item.trim());
      } else {
        metadata[element.attributes.name] = element.attributes.content;
      }
    } else if (element.tag == "link") {
      metadata[element.attributes.rel] = element.attributes.href;
    }
  });

  return metadata;
}
