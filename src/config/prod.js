import axios from 'axios';

const clienteHeroku = axios.create({
  baseURL: 'https://api-birdomain.herokuapp.com/api'
});
/*const clienteHeroku = axios.create({
  baseURL: 'http://localhost:5000/api'
});*/

export default clienteHeroku;