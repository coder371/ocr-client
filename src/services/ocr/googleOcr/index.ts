import {API_URL} from '~/config/constants';
import {GoogleOcr} from '~/types';

interface Props {
  image: object;
}
export const googleOcr = async ({image}: Props): Promise<GoogleOcr> => {
  const data = new FormData();
  data.append('image', image);
  console.log(`${API_URL}/ocr/google`);
  return fetch(`${API_URL}/ocr/google`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(response => response.json())
    .then(result => {
      // Handle the response
      if (result?.status && result.status === 422) {
        return false;
      }
      return result;
    })
    .catch(error => {
      console.log('🚀 ~ file: index.ts:25 ~ googleOcr ~ error:', error);
      return false;
    });
};
