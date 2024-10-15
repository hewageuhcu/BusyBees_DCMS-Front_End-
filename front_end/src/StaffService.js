import axios from 'axios';

const API_URL = 'http://your-api-url/staff'; // Replace with actual API URL

const StaffService = {
  getAllStaff: () => axios.get(`${API_URL}`),
  getStaffById: (id) => axios.get(`${API_URL}/${id}`),
  createStaff: (staffData) => axios.post(`${API_URL}`, staffData),
  updateStaff: (id, staffData) => axios.put(`${API_URL}/${id}`, staffData),
  deleteStaff: (id) => axios.delete(`${API_URL}/${id}`)
};

export default StaffService;
