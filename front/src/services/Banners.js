/**
 * Fetech all featured banners.
 * @returns Array with data.
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
      //Include full path url.
      item.image = item.image ? host + item.image : "";
      grouped[item.location].push(item);
    }

    return grouped;
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return null;
  }
};
