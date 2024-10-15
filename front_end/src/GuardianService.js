import axios from 'axios';

const API_URL = 'http://your-api-url/guardian';

const GuardianService = {
  getAllGuardians: () => axios.get(`${API_URL}`),
  getGuardianById: (id) => axios.get(`${API_URL}/${id}`),
  createGuardian: (guardianData) => axios.post(`${API_URL}`, guardianData),
  updateGuardian: (id, guardianData) => axios.put(`${API_URL}/${id}`, guardianData),
  deleteGuardian: (id) => axios.delete(`${API_URL}/${id}`)
};

export default GuardianService;
