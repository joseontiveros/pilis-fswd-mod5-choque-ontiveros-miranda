import { api } from "./api";
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/users`;

export const getUsers = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT);
    return response.json();
  } catch {
    throw new Error("could not fetch users");
  }
};

export const postUser = async (data) => {
  try {
    const config = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(SERVICE_ENDPOINT, config);
    return response.json();
  } catch {
    throw new Error("could not fetch users");
  }
};
