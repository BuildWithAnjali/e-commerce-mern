const cloudinary = require ('cloudinary').v2;
const multer =  require ('multer');

cloudinary.config({
    cloud_name: 'dgle1fcve',
    api_key : '483368688659737',
    api_secret : 'PbMIzeVxnDPAn7VlWpwdY_T_c5E',
})

const storage = new multer.memoryStorage();

async function imageUploadUtils(file) {
    const result = await cloudinary.uploader.upload(file , {
        resource_type : 'auto'
    });
  return result ;
}
const upload = multer({storage})

module.exports = {upload, imageUploadUtils}