import { DrupalClient } from "next-drupal";

export const drupal = new DrupalClient(process.env.NEXT_PUBLIC_DRUPAL_BASE_URL);

/*
export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
  {
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID,
      clientSecret: process.env.DRUPAL_CLIENT_SECRET,
    },
  },
);
*/

export async function testDrupalConnection() {
  try {
    // Intenta obtener la lista de tipos de contenido/recursos de la JSON:API
    const index = await drupal.getIndex();
    console.log(
      "✅ Conexión exitosa con Drupal. Recursos disponibles:",
      Object.keys(index.links),
    );
    return true;
  } catch (error) {
    console.error("❌ Error al conectar con la API de Drupal:", error);
    return false;
  }
}
