import { API_URL } from "../utils/constants";

export async function registerApi(formData) {
  try {
    const url = `${API_URL}/api/auth/local/register`; // Endpoint de registro de Strapi
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error al llamar a registerApi:", error);
    return { error: error.message || "Error en el registro" }; // Devuelve el error para manejarlo en el frontend
  }
}

export async function loginApi(formData) {
  try {
    const url = `${API_URL}/api/auth/local`; // Endpoint de login de Strapi
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(url, params);
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error al llamar a loginApi:", error);
    return { error: error.message || "Error en el login" }; // Devuelve el error para manejarlo en el frontend
  }
}