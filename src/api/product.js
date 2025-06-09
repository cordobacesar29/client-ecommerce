import { API_URL } from "../utils/constants";
export async function getProducts(limit = 1000) {
  try {
    const response = await fetch(
      `${API_URL}/api/products?populate[image]=true&populate[category]=*&sort=createdAt:desc&pagination[limit]=${limit}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductsCategory(categorySlug) {
  try {
    const response = await fetch(
      `${API_URL}/api/products?populate[image]=true&populate[category]=*&filters[category][slug][$eq]=${categorySlug}&sort=createdAt:desc`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
