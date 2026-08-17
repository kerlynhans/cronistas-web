/**
 * Fetch all featured banners.
 * @returns Object with banners by section.
 */
export const getHomeBanners = async () => {
  const host = process.env.NEXT_PUBLIC_CMS;
  const url = `${host}/api/v1/ads`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    const grouped = {
      hero: [],
      sidebar: [],
      carousel: [],
      highlight: [],
    };

    for (const item of data) {
      //Format results to include absolute urls.
      item.image = item.image ? host + item.image : "";
      grouped[item.location].push(item);
    }

    return grouped;
  } catch (error) {
    console.error("(getHomeBanners) Error fetching or processing data:", error);
    return null;
  }
};
