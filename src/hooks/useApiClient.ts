import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';

const useApiClient = () => {
  const domain = import.meta.env.VITE_BACKEND_DOMAIN;

  interface BackendResponse {
    data: any;
    error: any;
  }

  const get = async (
    url: string,
    params?: Record<string, any>,
    headers?: Record<string, any>
  ): Promise<BackendResponse> => {
    return await axios.get(domain + url, { params, headers }).then((resp) => {
      if (resp.status < 210) {
        return { data: resp.data, unauthorized: false, error: null };
      }
      return { data: null, unauthorized: false, error: resp.statusText };
    });
  };

  const post = async (
    url: string,
    body: any,
    headers?: Record<string, any>
  ): Promise<BackendResponse> => {
    return await axios
      .post(process.env.PUBLIC_BACKEND_DOMAIN + url, body, { headers })
      .then((resp) => {
        if (resp.status < 210) {
          return { data: resp.data, unauthorized: false, error: null };
        }
        if (resp.status === 401) {
          return { data: null, unauthorized: true, error: resp.status };
        }
        return { data: null, unauthorized: false, error: resp.statusText };
      });
  };

  return { get, post };
};

export default useApiClient;
