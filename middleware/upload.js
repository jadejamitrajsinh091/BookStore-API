import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage(
{
  destination: function (req, file, cb) 
  {
    let folderName = "uploads/";
    return cb(null, folderName);
  },

  filename: function (req, file, cb) 
  {
    cb(null, Date.now() + "-" + file.originalname);
  },

});


const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") 
  {
    cb(null, true);
  } 
  else 
  {
    cb(new Error("Only jpeg And png"), false);
  }
};

const uploads = multer({
    storage,
    fileFilter,
    limits : {fileSize : 5*1024*1024},
});

export default uploads;