import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const api = {
  createRequest: (body) => {
    return axios.post(`${baseUrl}/requests`, body)
  },
  getAllRequests: () => {
    return axios.get(`${baseUrl}/requests`)
  },
  deleteRequest: (id) => {
    return axios.delete(`${baseUrl}/requests/${id}`)
  }
}

export default api
