import { Lgtm } from '../types/lgtm.type';
import useApiClient from './useApiClient';

const useLgtmRepo = () => {
  const client = useApiClient();

  const list = async (): Promise<Lgtm[]> => {
    return await client.get('/api/v1/lgtms').then((resp) => {
      if (resp.error) {
        throw new Error(resp.error);
      }

      return resp.data;
    });
  };

  return { list };
};

export default useLgtmRepo;
