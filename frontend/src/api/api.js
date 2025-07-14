import axios from "axios";
const API_URL = "http://localhost:3000";


export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

  export const sendVerificationEmail = async (name, lastname, username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/send-code`, {
      name,
      lastname,
      username,
      email,
      password,
    });
    // console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyCodes = async (email, code) => {
  const response = await axios.post(`${API_URL}/auth/verify-code`, {
    email,
    code,
  });
  return response.data;
};