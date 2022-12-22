const multer = require('multer');

export const Mimetype = [
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/pdf',
];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname,
    );
  },
});
const fileFilter = () => {
  if (file.mimetype.includes(Mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export const multerUpload = multer({ storage, fileFilter });
