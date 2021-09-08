import axios from 'axios'

const localhost = 'http://localhost:8080/'
const cloud = 'https://smollink-heroku.herokuapp.com'
// API endpoint(s)
const BACKEND_URL = localhost

const backendInstance = axios.create({
  baseURL: BACKEND_URL,
  proxy: false,
  timeout: 0
});

export default {
  getSeats: function () {
    return backendInstance.get('/getSeats')
  },
  getTest: function () {
    return backendInstance.get('/testString')
  }
}
