import axios from 'axios';

const useApiClient = () => {
  const domain = import.meta.env.VITE_BACKEND_DOMAIN;

  interface BackendResponse {
    // eslint-disable-next-line
    data: any;
    // eslint-disable-next-line
    error: any;
  }

  const get = async (
    url: string,
    // eslint-disable-next-line
    params?: Record<string, any>,
    // eslint-disable-next-line
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
    // eslint-disable-next-line
    body: any,
    // eslint-disable-next-line
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
