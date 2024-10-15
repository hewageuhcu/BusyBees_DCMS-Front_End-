import axios from 'axios';

const API_URL = 'http://your-api-url/classroom';

const ClassroomService = {
  getAllClassrooms: () => axios.get(`${API_URL}`),
  getClassroomById: (id) => axios.get(`${API_URL}/${id}`),
  createClassroom: (classroomData) => axios.post(`${API_URL}`, classroomData),
  updateClassroom: (id, classroomData) => axios.put(`${API_URL}/${id}`, classroomData),
  deleteClassroom: (id) => axios.delete(`${API_URL}/${id}`)
};

export default ClassroomService;
