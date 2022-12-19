import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-'); //lấy ra cái ảnh 
    cb(null, Date.now() + fileName)
  }
});

export const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => { //kiểm tra cái ảnh đấy pải là mấy cái dạng kia không
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else { //không thì cút
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}).single('image')