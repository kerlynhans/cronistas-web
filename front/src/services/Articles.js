import categories from "@/data/categories.json";
import moment from "moment";
import "moment/locale/es";

/**
 * Fetech all featured contents to show in home.
 * @returns Array with articles.
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
    };

    for (const item of data) {
      //Change php seconds to js milliseconds and format date
      const formattedDate = moment(Number(item.date) * 1000).format(
        "MMM DD, YYYY"
      );
      item.date = formattedDate;

      //Include full path url.
      item.thumbnail = item.thumbnail ? host + item.thumbnail : "";
      item.image = item.image ? host + item.image : "";
      item.category = categories[item.category].label;

      //Create grouped articles.
      if (item.sticky === "True") {
        grouped.flash.push(item);
      } else {
        grouped.main.push(item);
      }
    }

    return grouped;
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return null;
  }
};
