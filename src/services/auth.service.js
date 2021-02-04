import axios from "axios";

const API_URL = "http://localhost:3000/auth/";



const login2 = (name, password) => {
  return axios
    .post(API_URL + "login", {
      name,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (name, email, password) => {
  return axios
    .post(API_URL + "login2", {
      name,
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  login,
  login2,
  logout,
  getCurrentUser,
};