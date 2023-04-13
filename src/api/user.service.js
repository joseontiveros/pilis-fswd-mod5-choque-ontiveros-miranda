import { api } from "./api";
//armo el endpoint
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/users`;

export const getUsers = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT);
    return response.json();
  } catch {
    throw new Error("could not fetch users");
  }
};
