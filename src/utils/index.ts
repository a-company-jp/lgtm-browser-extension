import { copyImageToClipboard } from 'copy-image-clipboard';

export const isDev = process.env.NODE_ENV === 'development';

export const imageCopy = async (imageUrl: string) => {
  try {
    const res = await copyImageToClipboard(imageUrl);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
