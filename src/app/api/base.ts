import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://lgtm.a.shion.pro/',
});
