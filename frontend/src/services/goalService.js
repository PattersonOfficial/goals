import axios from 'axios';

const APP_URL = '/api/goals/';

// create goal service function
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(APP_URL, goalData, config);

  return response.data;
};

// update goal service function
const updateGoal = async (goalData, id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(APP_URL + id, goalData, config);

  return response.data;
};

// get all goals service function
const getAllGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(APP_URL, config);

  return response.data;
};

// delete a goal service function
const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(APP_URL + id, config);

  return response.data;
};

const goalService = {
  createGoal,
  updateGoal,
  deleteGoal,
  getAllGoals,
};

export default goalService;
