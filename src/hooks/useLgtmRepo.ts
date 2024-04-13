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

  const post = async (data?: Blob): Promise<{ imageUrl: string }> => {
    if (!data) {
      throw new Error('data is not set');
    }
    return await client
      .post('/api/v1/lgtms', data, { 'Content-Type': 'application/octet-stream' })
      .then((resp) => {
        if (resp.error) {
          throw new Error(resp.error);
        }

        return resp.data;
      });
  };

  return { list, post };
};

export default useLgtmRepo;
