import axios from 'axios'

// Use relative base URL by default so when frontend is served from the API (production dist)
// requests go to the same origin. During development Vite proxy will forward /api to backend.
const baseURL = import.meta.env.VITE_API_BASE_URL ?? ''

const http = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default http
