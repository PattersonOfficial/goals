import axios from 'axios';

const APP_URL = '/api/users/';

// registration function
const register = async (userData) => {
  const response = await axios.post(APP_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// authentication function
const login = async (userData) => {
  const response = await axios.post(APP_URL + 'login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

//  logout function
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
