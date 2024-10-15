import axios from 'axios';

const API_URL = 'http://your-api-url/schedule';

const ScheduleService = {
  getAllSchedules: () => axios.get(`${API_URL}`),
  getScheduleById: (id) => axios.get(`${API_URL}/${id}`),
  createSchedule: (scheduleData) => axios.post(`${API_URL}`, scheduleData),
  updateSchedule: (id, scheduleData) => axios.put(`${API_URL}/${id}`, scheduleData),
  deleteSchedule: (id) => axios.delete(`${API_URL}/${id}`)
};

export default ScheduleService;
