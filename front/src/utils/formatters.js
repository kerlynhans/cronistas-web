import moment from "moment";
import "moment/locale/es"; // Carga la localización en español

/**
 * Formatea el número de vistas:
 * - Menos de 1,000: número exacto (ej: 850)
 * - 1,000 a 999,999: miles con 'k' (ej: 1.5k, 24k)
 * - 1,000,000 o más: millones con 'M' o 'mm' (ej: 1.2M, 5M)
 */
export function formatViews(views) {
  const numViews = Number(views);

  if (!numViews || isNaN(numViews) || numViews < 0) {
    return "0";
  }

  // 1. Menos de 1,000
  if (numViews < 1000) {
    return numViews.toString();
  }

  // 2. Miles (k)
  if (numViews < 1000000) {
    const formatted = (numViews / 1000).toFixed(1);
    return `${formatted.replace(/\.0$/, "")}k`;
  }

  // 3. Millones (M o mm)
  const formatted = (numViews / 1000000).toFixed(1);
  return `${formatted.replace(/\.0$/, "")}M`;
}

/**
 *
 * @param {*} date
 * @returns
 */
export function getFormattedHeaderDate(date = new Date()) {
  // Asegura el idioma en español para esta llamada
  const m = moment(date).locale("es");

  // Obtenemos los componentes formateados
  const dayName = m.format("dddd"); // ej: "lunes"
  const monthName = m.format("MMMM"); // ej: "marzo"
  const dayNum = m.format("D"); // ej: "22"
  const year = m.format("YYYY"); // ej: "2020"

  // Capitalizamos la primera letra de día y mes
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Resultado: "Lunes, Marzo 22 de 2020"
  return `${capitalize(dayName)}, ${capitalize(monthName)} ${dayNum} de ${year}`;
}
