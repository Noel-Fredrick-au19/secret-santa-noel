import axios from 'axios';

export const uploadCSV = async (formData: FormData) => {
  return await axios.post('http://localhost:5000/api/assign', formData);
};
