import axios from "axios";

const baseUrl = "https://localhost:3001";

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

export async function loginUser(email, password) {
  return await apiClient
    .post(`${baseUrl}/login`, {
      email: email,
      password: password,
    })
    .then((res) => res.data.token)
    .catch((error) => console.log(error));
}
