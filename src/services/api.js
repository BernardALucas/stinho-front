import axios from "axios";

const URL_BASE = "http://localhost:3333";

const httpClient = axios.create({
  baseURL: URL_BASE,
});

const requestHandler = (request) => {
  const token = sessionStorage.getItem("@stinho-Token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const token = sessionStorage.getItem("@stinho-Token");
    if (error.response.status === 403 && token) {
      window.location.href = "/";
    }
    return error.response;
  }
);

httpClient.interceptors.request.use((request) => requestHandler(request));
export default httpClient;
