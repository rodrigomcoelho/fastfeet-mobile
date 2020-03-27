import { API_HOST } from 'react-native-dotenv';
import axios from 'axios';

const api = axios.create({ baseURL: API_HOST });

export default api;
