import { diskStorage } from 'multer';

const generateId = () => {
  return Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
};
const normalizeFileName = (req, file, callback) => {
  console.log(file);

  const fileExtName = file.originalname.split('.').pop();
  console.log(`${generateId()}.${fileExtName}`);

  callback(null, `${generateId()}.${fileExtName}`);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
});
