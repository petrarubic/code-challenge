import axios from "axios";

const baseUrl = "http://localhost:3001";

const apiClient = axios.create({
  baseURL: baseUrl,
});

// Login user
export async function loginUser(email, password) {
  return await apiClient
    .post(`${baseUrl}/login`, {
      email,
      password,
    })
    .then((res) => res.data.token)
    .catch((error) => console.log(error.response.data));
}

// Encode given text
export async function encodeText(text) {
  const authorization = localStorage.getItem("authToken");
  return await apiClient
    .post(
      `${baseUrl}/api/encode`,
      { text },
      { headers: { Authorization: authorization } }
    )
    .then((res) => res.data.text)
    .catch((error) => console.log(error.response.data));
}
