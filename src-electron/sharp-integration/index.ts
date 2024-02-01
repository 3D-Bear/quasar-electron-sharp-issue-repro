import sharp from 'sharp';

export function useSharp() {
  return sharp('media/Lenna_in.png')
    .resize({ width: 500 })
    .toFile('media/Lenna_out.png')
    .then(() => {
      console.log('It worked :)');
      return { success: true };
    })
    .catch((err) => {
      console.error(err);
      return { success: false };
    });
}
