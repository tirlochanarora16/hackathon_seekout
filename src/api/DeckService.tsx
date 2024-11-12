import { API } from ".";

export const getAllDecks = async () => {
  try {
    const response = await API.get("/decks");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}